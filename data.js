window.BENCHMARK_DATA = {
  "lastUpdate": 1638567971775,
  "repoUrl": "https://github.com/ComPWA/tensorwaves",
  "entries": {
    "TensorWaves benchmark results": [
      {
        "commit": {
          "author": {
            "email": "redeboer@gmx.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11079e5dca7d8a2fd1e6e4a2866b2832fe43bdc4",
          "message": "ci!: implement benchmark monitoring (#368)\n\n* ci: improve slow marker use\r\n* test!: add benchmark support with pytest-benchmark\r\n* ci: add workflow for benchmarks\r\n* ci: comment on commit if performance decreased\r\n* test: merge integration data test into benchmark\r\n* test: remove remaining integration test\r\n* test: move benchmarks to separate folder and unit tests to top\r\n* style: remove text from __init__.py files for mypy in test folders\r\n* test: add benchmarks for simple expression\r\n* fix: remove pytest-profiling\r\n* test: write unit test for CallbackList\r\n* docs: add link to continuous benchmarks\r\n* ci: update pip constraints and pre-commit config\r\n\r\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2021-12-03T21:42:08Z",
          "tree_id": "88096c7a7e5b6b26e9e703a6e8dbd9117ebe2108",
          "url": "https://github.com/ComPWA/tensorwaves/commit/11079e5dca7d8a2fd1e6e4a2866b2832fe43bdc4"
        },
        "date": 1638567971233,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.22006834496217612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.544042898000043 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.4016680790106275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.489617801999998 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 14.05921186102615,
            "unit": "iter/sec",
            "range": "stddev: 0.004405988686293936",
            "extra": "mean: 71.12774242858677 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 121.74917615797084,
            "unit": "iter/sec",
            "range": "stddev: 0.0008339967945119293",
            "extra": "mean: 8.213607940167822 msec\nrounds: 117"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 2.9175119817255744,
            "unit": "iter/sec",
            "range": "stddev: 0.12030755123435782",
            "extra": "mean: 342.7578040000185 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 74.02973942576587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783485626018681",
            "extra": "mean: 13.508084828567592 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 4.908434239124841,
            "unit": "iter/sec",
            "range": "stddev: 0.002022777491238156",
            "extra": "mean: 203.7309559999926 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 5.0219499429959225,
            "unit": "iter/sec",
            "range": "stddev: 0.0058801959834528525",
            "extra": "mean: 199.12583983332866 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 5.086688317251356,
            "unit": "iter/sec",
            "range": "stddev: 0.0037462513059051553",
            "extra": "mean: 196.59156166666017 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 0.9493006797978816,
            "unit": "iter/sec",
            "range": "stddev: 0.01893599105750658",
            "extra": "mean: 1.0534070197999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 4.9358425074369645,
            "unit": "iter/sec",
            "range": "stddev: 0.004982303032589777",
            "extra": "mean: 202.59965720001674 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 5.07718305759696,
            "unit": "iter/sec",
            "range": "stddev: 0.003791646718113821",
            "extra": "mean: 196.95961099998271 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 5.157948353624968,
            "unit": "iter/sec",
            "range": "stddev: 0.003577744022928743",
            "extra": "mean: 193.87553566665852 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.0879407782135637,
            "unit": "iter/sec",
            "range": "stddev: 0.01768907071370034",
            "extra": "mean: 919.167678999986 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}