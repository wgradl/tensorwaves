"""Express mathematical expressions in terms of computational functions."""

import inspect
from typing import Callable, Dict, Iterable, Mapping, Sequence, Tuple

import attr
import numpy as np

from tensorwaves.interface import (
    DataSample,
    Function,
    ParameterValue,
    ParametrizedFunction,
)


def _all_str(
    _: "PositionalArgumentFunction", __: attr.Attribute, value: Iterable[str]
) -> None:
    if not all(map(lambda s: isinstance(s, str), value)):
        raise TypeError(f"Not all arguments are of type {str.__name__}")


def _all_unique(
    _: "PositionalArgumentFunction", __: attr.Attribute, value: Iterable[str]
) -> None:
    argument_names = list(value)
    if len(set(argument_names)) != len(argument_names):
        duplicate_arguments = []
        for arg_name in argument_names:
            n_occurrences = argument_names.count(arg_name)
            if n_occurrences > 1:
                duplicate_arguments.append(arg_name)
        raise ValueError(
            f"There are duplicate argument names: {duplicate_arguments}"
        )


def _validate_arguments(
    instance: "PositionalArgumentFunction", _: attr.Attribute, value: Callable
) -> None:
    if not callable(value):
        raise TypeError("Function is not callable")
    n_args = len(instance.argument_order)
    signature = inspect.signature(value)
    if len(signature.parameters) != n_args:
        if len(signature.parameters) == 1:
            parameter = next(iter(signature.parameters.values()))
            if parameter.kind == parameter.VAR_POSITIONAL:
                return
        raise ValueError(
            f"Lambdified function expects {len(signature.parameters)}"
            f" arguments, but {n_args} sorted arguments were provided."
        )


def _to_tuple(argument_order: Iterable[str]) -> Tuple[str, ...]:
    return tuple(argument_order)


@attr.s(frozen=True)
class PositionalArgumentFunction(Function):
    """Wrapper around a function with positional arguments.

    This class provides a :meth:`__call__` that can take a `.DataSample` for a
    function with `positional arguments
    <https://docs.python.org/3/glossary.html#term-positional-argument>`_. Its
    :attr:`argument_order` redirect the keys in the `.DataSample` to the
    argument positions in its underlying :attr:`function`.
    """

    function: Callable[..., np.ndarray] = attr.ib(
        validator=_validate_arguments
    )
    """A function with positional arguments only."""
    argument_order: Tuple[str, ...] = attr.ib(
        converter=_to_tuple, validator=[_all_str, _all_unique]
    )
    """Ordered labels for each positional argument."""

    def __call__(self, dataset: DataSample) -> np.ndarray:
        args = [dataset[var_name] for var_name in self.argument_order]
        return self.function(*args)


class ParametrizedBackendFunction(ParametrizedFunction):
    """Implements `.ParametrizedFunction` for a specific computational back-end."""

    def __init__(
        self,
        function: Callable[..., np.ndarray],
        argument_order: Sequence[str],
        parameters: Mapping[str, ParameterValue],
    ) -> None:
        self.__function = function
        self.__argument_order = tuple(argument_order)
        self.__parameters = dict(parameters)

    def __call__(self, dataset: DataSample) -> np.ndarray:
        return self.__function(
            *[
                dataset[var_name]
                if var_name in dataset
                else self.__parameters[var_name]
                for var_name in self.__argument_order
            ],
        )

    @property
    def parameters(self) -> Dict[str, ParameterValue]:
        return dict(self.__parameters)

    def update_parameters(
        self, new_parameters: Mapping[str, ParameterValue]
    ) -> None:
        over_defined = set(new_parameters) - set(self.__parameters)
        if over_defined:
            sep = "\n    "
            parameter_listing = f"{sep}".join(sorted(self.__parameters))
            raise ValueError(
                f"Parameters {over_defined} do not exist in function"
                f" arguments. Expecting one of:{sep}{parameter_listing}"
            )
        self.__parameters.update(new_parameters)
