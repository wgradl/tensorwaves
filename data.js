window.BENCHMARK_DATA = {
  "lastUpdate": 1641408771185,
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
      },
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
          "id": "b1376237ac695bb9cef8133d4d0d8fbb853d946d",
          "message": "build: reduce dependencies in style requirements (#369)",
          "timestamp": "2021-12-03T21:52:13Z",
          "tree_id": "0b311b7ad5ff9565a2a8fef658d8c24e893fd68b",
          "url": "https://github.com/ComPWA/tensorwaves/commit/b1376237ac695bb9cef8133d4d0d8fbb853d946d"
        },
        "date": 1638568522427,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.3024768026539775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3060386490000155 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.4377934164259996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.284182362000024 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 19.999010137880056,
            "unit": "iter/sec",
            "range": "stddev: 0.000516709263358909",
            "extra": "mean: 50.0024747777843 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 167.14253245746823,
            "unit": "iter/sec",
            "range": "stddev: 0.00007889204819314859",
            "extra": "mean: 5.982917605095304 msec\nrounds: 157"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.850715136716807,
            "unit": "iter/sec",
            "range": "stddev: 0.08799294828503812",
            "extra": "mean: 259.69202200000154 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 106.32800572449311,
            "unit": "iter/sec",
            "range": "stddev: 0.00014460132973470954",
            "extra": "mean: 9.40485992553179 msec\nrounds: 94"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.707041041097085,
            "unit": "iter/sec",
            "range": "stddev: 0.0010085005259978413",
            "extra": "mean: 129.7514824000018 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 10.037063241133366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558111333700164",
            "extra": "mean: 99.6307361999925 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.892778291633705,
            "unit": "iter/sec",
            "range": "stddev: 0.0008535359842260114",
            "extra": "mean: 101.08383818180755 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.6972692164753687,
            "unit": "iter/sec",
            "range": "stddev: 0.00092445843394973",
            "extra": "mean: 589.1817221999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 7.6690701619462205,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991256016013146",
            "extra": "mean: 130.39390420001382 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 9.103218479489323,
            "unit": "iter/sec",
            "range": "stddev: 0.0018728882370524819",
            "extra": "mean: 109.85125779998839 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 9.099108405026882,
            "unit": "iter/sec",
            "range": "stddev: 0.000830812281120767",
            "extra": "mean: 109.90087770001082 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.8906038960159062,
            "unit": "iter/sec",
            "range": "stddev: 0.0033561658419269877",
            "extra": "mean: 528.9315239999837 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "e1f00348ec7e64d60e9b12ed42d5b9e8dbf2aa97",
          "message": "ci: speed up pytest collect (#370)\n\n* ci: merge tox cov job into py job\r\n* ci: simplify tox pydeps job\r\n* fix: include doctests in coverage computation\r\n* fix: remove histogram from tox benchmark job\r\n  (causes problems with pygal and pygaljs)\r\n* test: speed up pytest collect with inline imports",
          "timestamp": "2021-12-05T19:45:18Z",
          "tree_id": "4e282fff6e904072d4de7eebee22cd14658329ab",
          "url": "https://github.com/ComPWA/tensorwaves/commit/e1f00348ec7e64d60e9b12ed42d5b9e8dbf2aa97"
        },
        "date": 1638733724725,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.27127499866795823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.686296212000002 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.47157658947752057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1205463170000485 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 18.555062413280645,
            "unit": "iter/sec",
            "range": "stddev: 0.000619721139062683",
            "extra": "mean: 53.89364787500028 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 169.14005209381563,
            "unit": "iter/sec",
            "range": "stddev: 0.00011521332553971961",
            "extra": "mean: 5.912260210522684 msec\nrounds: 152"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.517762419653576,
            "unit": "iter/sec",
            "range": "stddev: 0.12166451310712155",
            "extra": "mean: 284.27161380002417 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 103.49136705025907,
            "unit": "iter/sec",
            "range": "stddev: 0.00016061194032063184",
            "extra": "mean: 9.662641711113592 msec\nrounds: 90"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.478657575283733,
            "unit": "iter/sec",
            "range": "stddev: 0.0009250036718596304",
            "extra": "mean: 133.7138369999593 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.419761467204406,
            "unit": "iter/sec",
            "range": "stddev: 0.0002822554360154693",
            "extra": "mean: 106.15980070000433 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.195962064457998,
            "unit": "iter/sec",
            "range": "stddev: 0.001392515413492101",
            "extra": "mean: 108.74338030002946 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.5420480599355326,
            "unit": "iter/sec",
            "range": "stddev: 0.0010740955709193718",
            "extra": "mean: 648.4882190000008 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.910334763317306,
            "unit": "iter/sec",
            "range": "stddev: 0.0002583141335208369",
            "extra": "mean: 144.7107896000034 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.729956686320199,
            "unit": "iter/sec",
            "range": "stddev: 0.00011060590638758692",
            "extra": "mean: 114.54810555555166 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.642556174959305,
            "unit": "iter/sec",
            "range": "stddev: 0.0013474928869228625",
            "extra": "mean: 115.7065085555789 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.7430575416049714,
            "unit": "iter/sec",
            "range": "stddev: 0.002141470746760797",
            "extra": "mean: 573.7045256000101 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "9abe0a4e8885b7d6b63c01cf48491534f63f4cec",
          "message": "refactor: generalize SymPy printer implementation (#371)\n\n* fix: instantiate printers in lambdify\r\n* refactor: use _replace_module in _CustomNumPyPrinter init\r\n* refactor: force using _numpycode method",
          "timestamp": "2021-12-05T21:02:34Z",
          "tree_id": "1decf6ce64a303e140413ecc33ceedcbb57a522d",
          "url": "https://github.com/ComPWA/tensorwaves/commit/9abe0a4e8885b7d6b63c01cf48491534f63f4cec"
        },
        "date": 1638738362731,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.2699649158724693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7041850299999624 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.4604961721644776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1715707110000153 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 18.371971257677124,
            "unit": "iter/sec",
            "range": "stddev: 0.0004627277322573624",
            "extra": "mean: 54.43074049999552 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 160.34819648462232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411161306216072",
            "extra": "mean: 6.23642811034611 msec\nrounds: 145"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.5686297333641717,
            "unit": "iter/sec",
            "range": "stddev: 0.11062079502513825",
            "extra": "mean: 280.2196009999875 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 99.27031876430608,
            "unit": "iter/sec",
            "range": "stddev: 0.0005501316849566911",
            "extra": "mean: 10.073504471908302 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.6607235192394,
            "unit": "iter/sec",
            "range": "stddev: 0.0007066106446124896",
            "extra": "mean: 130.53597319999426 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.41987335946607,
            "unit": "iter/sec",
            "range": "stddev: 0.000453849271261729",
            "extra": "mean: 106.15853970001581 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.390531401917984,
            "unit": "iter/sec",
            "range": "stddev: 0.0014493543832494364",
            "extra": "mean: 106.49024609999742 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.517323615403969,
            "unit": "iter/sec",
            "range": "stddev: 0.001817292745984741",
            "extra": "mean: 659.0551876000177 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.784225784417302,
            "unit": "iter/sec",
            "range": "stddev: 0.00048563391647331755",
            "extra": "mean: 147.40075460001663 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.826651259857211,
            "unit": "iter/sec",
            "range": "stddev: 0.0006191916926080635",
            "extra": "mean: 113.2932491111218 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.797097557574128,
            "unit": "iter/sec",
            "range": "stddev: 0.0010079851592854597",
            "extra": "mean: 113.67385588886867 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.7184062793281807,
            "unit": "iter/sec",
            "range": "stddev: 0.0022314452700474344",
            "extra": "mean: 581.9345588000033 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "7e2c2afe90f5c0d05f4d151bbb5c2656638d3e16",
          "message": "feat: add option to lambdify with SymPy's cse (#374)\n\nSee cse argument in\r\nhttps://docs.sympy.org/latest/modules/utilities/lambdify.html#sympy.utilities.lambdify.lambdify",
          "timestamp": "2021-12-06T12:24:35+01:00",
          "tree_id": "58836cd3d80c381d2d06fb2203df00b9f3218c1b",
          "url": "https://github.com/ComPWA/tensorwaves/commit/7e2c2afe90f5c0d05f4d151bbb5c2656638d3e16"
        },
        "date": 1638790109847,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.24784833614648258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.034725492000007 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.5081407535476442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9679586670000049 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 15.059048357208908,
            "unit": "iter/sec",
            "range": "stddev: 0.004240710110198803",
            "extra": "mean: 66.40525857142165 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 111.35662943578241,
            "unit": "iter/sec",
            "range": "stddev: 0.0007274029477607467",
            "extra": "mean: 8.980156862386751 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.71539388783602,
            "unit": "iter/sec",
            "range": "stddev: 0.002830837766381888",
            "extra": "mean: 269.1504669999972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 53.89726035666661,
            "unit": "iter/sec",
            "range": "stddev: 0.03348529458850789",
            "extra": "mean: 18.553818754097566 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 5.4691741669294185,
            "unit": "iter/sec",
            "range": "stddev: 0.003963742369699059",
            "extra": "mean: 182.842961200015 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 5.715235613659883,
            "unit": "iter/sec",
            "range": "stddev: 0.009461343405670118",
            "extra": "mean: 174.97091416667368 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 5.892699985074592,
            "unit": "iter/sec",
            "range": "stddev: 0.004928673896803318",
            "extra": "mean: 169.70149550000238 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.0333613118801883,
            "unit": "iter/sec",
            "range": "stddev: 0.009738077765901338",
            "extra": "mean: 967.715733600005 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 5.171655938642702,
            "unit": "iter/sec",
            "range": "stddev: 0.004155445011727229",
            "extra": "mean: 193.36166439998124 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 5.874669052599393,
            "unit": "iter/sec",
            "range": "stddev: 0.006461668885738819",
            "extra": "mean: 170.2223548333374 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 5.938210896629054,
            "unit": "iter/sec",
            "range": "stddev: 0.009107180879258308",
            "extra": "mean: 168.40088999999483 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.1790652558830195,
            "unit": "iter/sec",
            "range": "stddev: 0.010897282895913452",
            "extra": "mean: 848.1294779999985 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "acf5770b68edc4335a635d6c0a3394daaf792950",
          "message": "fix: forward use_cse arguments (#375)\n\n* refactor: enforce specifying use_cse in hidden functions\r\n* refactor: remove `**kwargs` from lambdify functions",
          "timestamp": "2021-12-06T12:05:34Z",
          "tree_id": "a577850100d0e33c64d24ba1e7938bdf5a2c8f11",
          "url": "https://github.com/ComPWA/tensorwaves/commit/acf5770b68edc4335a635d6c0a3394daaf792950"
        },
        "date": 1638792539756,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.2620717126613757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8157494750000183 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.5810291440715039,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7210840630000064 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 17.91444916922989,
            "unit": "iter/sec",
            "range": "stddev: 0.0027741239406042805",
            "extra": "mean: 55.8208622857137 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 125.09303089821745,
            "unit": "iter/sec",
            "range": "stddev: 0.00038562786974955215",
            "extra": "mean: 7.994050450449592 msec\nrounds: 111"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.164315431709165,
            "unit": "iter/sec",
            "range": "stddev: 0.008205175337361672",
            "extra": "mean: 240.13550760000157 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 66.92046081192463,
            "unit": "iter/sec",
            "range": "stddev: 0.029564788703344547",
            "extra": "mean: 14.943112881580888 msec\nrounds: 76"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.152727539006408,
            "unit": "iter/sec",
            "range": "stddev: 0.0038382202620935563",
            "extra": "mean: 139.8068072000001 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 8.761776931936712,
            "unit": "iter/sec",
            "range": "stddev: 0.003751058287459402",
            "extra": "mean: 114.13209988889308 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 8.669952850455093,
            "unit": "iter/sec",
            "range": "stddev: 0.0020550442851923712",
            "extra": "mean: 115.34088100000555 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.4321045528459424,
            "unit": "iter/sec",
            "range": "stddev: 0.011914265671982994",
            "extra": "mean: 698.2730402000016 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.5735314185864375,
            "unit": "iter/sec",
            "range": "stddev: 0.004128134337120862",
            "extra": "mean: 152.12523320000173 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.365730220055593,
            "unit": "iter/sec",
            "range": "stddev: 0.002911218482836564",
            "extra": "mean: 119.53529144445143 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.14519610651077,
            "unit": "iter/sec",
            "range": "stddev: 0.0031240887778590343",
            "extra": "mean: 122.77175244444531 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.6704955677952285,
            "unit": "iter/sec",
            "range": "stddev: 0.011931955641234808",
            "extra": "mean: 598.6247549999973 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "b7a4efd24ef78f4efbf52f48af5b8b1a0db0ac77",
          "message": "refactor!: adapt implementation to AmpForm v0.12.x (#345)\n\n* build: switch to AmpForm v0.12\r\n* ci: update pip constraints and pre-commit config\r\n* feat: compute kinematic helicity angles with different backends\r\n* feat: define PositionalArgumentFunction\r\n* feat: define create_function\r\n* fix: force-push to matching branches\r\n* refactor: accept only str as DataSample keys\r\n* refactor: extract _printer module from sympy module\r\n* refactor: implement SympyDataTransformer\r\n* test: benchmark data generation with numpy and jax\r\n\r\nCo-authored-by: GitHub <noreply@github.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2021-12-06T12:57:57Z",
          "tree_id": "bcebee9f642abdb302a6cc709100547a10d2a639",
          "url": "https://github.com/ComPWA/tensorwaves/commit/b7a4efd24ef78f4efbf52f48af5b8b1a0db0ac77"
        },
        "date": 1638795743546,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.18273220568632734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.472489078999956 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.20244738571712517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9395550179999645 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.1667861101780995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.995703113000047 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.32910698097646623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0385256400000458 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 15.561364070996156,
            "unit": "iter/sec",
            "range": "stddev: 0.0004898773142628424",
            "extra": "mean: 64.26171866667119 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 118.71788698857253,
            "unit": "iter/sec",
            "range": "stddev: 0.00015151919959075663",
            "extra": "mean: 8.423330513760385 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.1082592362927004,
            "unit": "iter/sec",
            "range": "stddev: 0.11549459483064546",
            "extra": "mean: 321.72348699998565 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 71.84030511148806,
            "unit": "iter/sec",
            "range": "stddev: 0.00026054845195279494",
            "extra": "mean: 13.919762707690518 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 6.1211906526760975,
            "unit": "iter/sec",
            "range": "stddev: 0.0027622150796428",
            "extra": "mean: 163.3669095999835 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 7.8743010286873645,
            "unit": "iter/sec",
            "range": "stddev: 0.00038434036553257843",
            "extra": "mean: 126.99539887500322 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 7.719050334770303,
            "unit": "iter/sec",
            "range": "stddev: 0.0037392879942421634",
            "extra": "mean: 129.54961512500063 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.1326939335280648,
            "unit": "iter/sec",
            "range": "stddev: 0.0014730595633193698",
            "extra": "mean: 882.8510248000043 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 5.938868435921374,
            "unit": "iter/sec",
            "range": "stddev: 0.00020811446372091954",
            "extra": "mean: 168.3822449999866 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 7.41535444963582,
            "unit": "iter/sec",
            "range": "stddev: 0.00041079029671448633",
            "extra": "mean: 134.85532037502423 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 7.314116414642832,
            "unit": "iter/sec",
            "range": "stddev: 0.0003003894119382458",
            "extra": "mean: 136.72191462498517 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.2980816626227387,
            "unit": "iter/sec",
            "range": "stddev: 0.0009539482474648452",
            "extra": "mean: 770.3675575999796 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "563db33742da25823ffa92cd4ca361299d748778",
          "message": "feat: implement get_source_code function (#378)\n\n* chore: outsource argument order to PositionalArgumentFunction\r\n* feat: define get_source_code function\r\n* fix: do not replace variables with dummies if use_cse=False\r\n* fix: match argument names in Function interface\r\n* fix: max ParametrizedBackendFunction and PositionalArgumentFunction signatures\r\n* fix: remove faulty complex_twice argument\r\n* refactor: expose function and argument order\r\n* style: avoid word \"dataset\"",
          "timestamp": "2021-12-06T16:06:25Z",
          "tree_id": "5be094725dba5b271d79cf76d692e2881e023baa",
          "url": "https://github.com/ComPWA/tensorwaves/commit/563db33742da25823ffa92cd4ca361299d748778"
        },
        "date": 1638807005319,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.2347563223974117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.259736180000004 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.25875308392728463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.864688237999985 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.21690272685329834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.610361587 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.3902848458704863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.562231177000001 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 20.088728851805776,
            "unit": "iter/sec",
            "range": "stddev: 0.0011173440581714684",
            "extra": "mean: 49.779157625003734 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 136.82487808988975,
            "unit": "iter/sec",
            "range": "stddev: 0.00010316176368825911",
            "extra": "mean: 7.308612395349847 msec\nrounds: 129"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.529763293042943,
            "unit": "iter/sec",
            "range": "stddev: 0.0008909210965823594",
            "extra": "mean: 220.7620873999872 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 87.08463543810889,
            "unit": "iter/sec",
            "range": "stddev: 0.0001488884774464086",
            "extra": "mean: 11.48308188889073 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.411412117280189,
            "unit": "iter/sec",
            "range": "stddev: 0.0014346568991398328",
            "extra": "mean: 134.92705360000627 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.906234607625414,
            "unit": "iter/sec",
            "range": "stddev: 0.0009756293849301382",
            "extra": "mean: 100.94652909090614 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 10.04418929208615,
            "unit": "iter/sec",
            "range": "stddev: 0.0010674966814439434",
            "extra": "mean: 99.56005118182145 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.4861134593561527,
            "unit": "iter/sec",
            "range": "stddev: 0.0017547465901802473",
            "extra": "mean: 672.8961329999947 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 7.628999647635787,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033547528817439",
            "extra": "mean: 131.0787843999833 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 9.170553884103441,
            "unit": "iter/sec",
            "range": "stddev: 0.00020426718364729754",
            "extra": "mean: 109.0446676000056 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 9.255232333379245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008543183907625174",
            "extra": "mean: 108.04699050000863 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.7002361426694106,
            "unit": "iter/sec",
            "range": "stddev: 0.004011493950945459",
            "extra": "mean: 588.1535952000036 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "15ef2aec870029abc7c86b056c50050f474f02fc",
          "message": "build: make ampform an optional dependency (#380)\n\n* docs: explain optional dependency syntax",
          "timestamp": "2021-12-07T14:56:41Z",
          "tree_id": "394c126d2dd70d82ff29a16e50a94663cb0095ae",
          "url": "https://github.com/ComPWA/tensorwaves/commit/15ef2aec870029abc7c86b056c50050f474f02fc"
        },
        "date": 1638889335127,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.14607386276756315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.845851687999982 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.17086905605687447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.852434742000014 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.132370500843658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.554553270000042 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.26962895212357163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7088005280000402 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 11.553031857876572,
            "unit": "iter/sec",
            "range": "stddev: 0.006484352421469091",
            "extra": "mean: 86.55736539999452 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 81.36606382523999,
            "unit": "iter/sec",
            "range": "stddev: 0.0019332168245178782",
            "extra": "mean: 12.290136120481682 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 2.7030514825493874,
            "unit": "iter/sec",
            "range": "stddev: 0.13336556679308906",
            "extra": "mean: 369.9522581999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 47.64241116081056,
            "unit": "iter/sec",
            "range": "stddev: 0.0032780197075985983",
            "extra": "mean: 20.989701730767454 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 5.099906531462792,
            "unit": "iter/sec",
            "range": "stddev: 0.011442061121628938",
            "extra": "mean: 196.0820250000097 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 4.532635296861203,
            "unit": "iter/sec",
            "range": "stddev: 0.009085503199406594",
            "extra": "mean: 220.62220639999168 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 4.380807479862421,
            "unit": "iter/sec",
            "range": "stddev: 0.007977013740388946",
            "extra": "mean: 228.26841959998774 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 0.6933020914549778,
            "unit": "iter/sec",
            "range": "stddev: 0.04361775795963705",
            "extra": "mean: 1.4423726862000081 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 4.602032773100111,
            "unit": "iter/sec",
            "range": "stddev: 0.012295843857043636",
            "extra": "mean: 217.29528000000755 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 4.30421200821174,
            "unit": "iter/sec",
            "range": "stddev: 0.00829265088546602",
            "extra": "mean: 232.3305631999915 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 4.464592041106716,
            "unit": "iter/sec",
            "range": "stddev: 0.01065211706343402",
            "extra": "mean: 223.98463080002102 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 0.7908371066955625,
            "unit": "iter/sec",
            "range": "stddev: 0.03635075968288968",
            "extra": "mean: 1.2644829023999704 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "0e5ed893109c2d58c963ad3ffb3588962918a88f",
          "message": "docs: add GPU installation tips (#381)\n\n* ci: check anchors with linkcheck\r\n* docs: add GPU installation instructions\r\n* fix: remove typing-extensions",
          "timestamp": "2021-12-08T17:19:23+01:00",
          "tree_id": "09aa339b04e32150b86bfc151d0cb1c582f47498",
          "url": "https://github.com/ComPWA/tensorwaves/commit/0e5ed893109c2d58c963ad3ffb3588962918a88f"
        },
        "date": 1638980598551,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.22085755024132303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.527805361000048 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.2531798835107291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.949760882000021 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.20854319125907309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.795169739000016 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.40973242694691125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4406171790000144 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 18.488495012335623,
            "unit": "iter/sec",
            "range": "stddev: 0.0006033977775685644",
            "extra": "mean: 54.08769071429528 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 138.65444520818775,
            "unit": "iter/sec",
            "range": "stddev: 0.00012003697771417708",
            "extra": "mean: 7.212174110238685 msec\nrounds: 127"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.689770360072208,
            "unit": "iter/sec",
            "range": "stddev: 0.1020189543101376",
            "extra": "mean: 271.0195763999877 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 84.1906733142357,
            "unit": "iter/sec",
            "range": "stddev: 0.00019620068643858027",
            "extra": "mean: 11.877800243591961 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.767754565912201,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996012028502721",
            "extra": "mean: 128.73733220001213 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.56783614965811,
            "unit": "iter/sec",
            "range": "stddev: 0.0004136398924233377",
            "extra": "mean: 104.51683999999659 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.562774569730344,
            "unit": "iter/sec",
            "range": "stddev: 0.0011203741954092228",
            "extra": "mean: 104.5721608000008 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.3599518123160605,
            "unit": "iter/sec",
            "range": "stddev: 0.0006458195353909764",
            "extra": "mean: 735.3201716000171 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 7.087432559624156,
            "unit": "iter/sec",
            "range": "stddev: 0.00011555145436115373",
            "extra": "mean: 141.09481699999833 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.98163789458071,
            "unit": "iter/sec",
            "range": "stddev: 0.0005156791096504739",
            "extra": "mean: 111.33826722221505 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.803605549128314,
            "unit": "iter/sec",
            "range": "stddev: 0.0009622033988003093",
            "extra": "mean: 113.58982344444257 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.5674132625945978,
            "unit": "iter/sec",
            "range": "stddev: 0.001851752248633385",
            "extra": "mean: 637.9938359999983 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Leo-Wol@web.de",
            "name": "Leongrim",
            "username": "Leongrim"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f9ec18093bf04e6825616dca3c3f1a354e7f2bd",
          "message": "build: set minimal dependencies sympy and pyyaml (#383)\n\n* ci: update pip constraints and pre-commit config\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2021-12-15T16:13:38+01:00",
          "tree_id": "d26e279b8e8251cbcf7fbe5eb77a9bb1c0d9c2ac",
          "url": "https://github.com/ComPWA/tensorwaves/commit/8f9ec18093bf04e6825616dca3c3f1a354e7f2bd"
        },
        "date": 1639581445540,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.2224156879877077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.49608572599999 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.24806850697595123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.03114450999999 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.21543337669441281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.641806276000011 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.4051037849443757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4685032259999957 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 18.527840118869033,
            "unit": "iter/sec",
            "range": "stddev: 0.0008258444056126481",
            "extra": "mean: 53.97283188889269 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 138.6201852115676,
            "unit": "iter/sec",
            "range": "stddev: 0.00012768289471181058",
            "extra": "mean: 7.2139565999984825 msec\nrounds: 125"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.603269981056143,
            "unit": "iter/sec",
            "range": "stddev: 0.11771983146969646",
            "extra": "mean: 277.52569339999695 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 85.85920093423525,
            "unit": "iter/sec",
            "range": "stddev: 0.00022637491941673548",
            "extra": "mean: 11.646975386667767 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.634884970700759,
            "unit": "iter/sec",
            "range": "stddev: 0.0004653388066952385",
            "extra": "mean: 130.97774279999612 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.576483640487183,
            "unit": "iter/sec",
            "range": "stddev: 0.00038576271341519253",
            "extra": "mean: 104.42246209999553 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.407940194461819,
            "unit": "iter/sec",
            "range": "stddev: 0.0011833165501323305",
            "extra": "mean: 106.2931926999994 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.3881434396667696,
            "unit": "iter/sec",
            "range": "stddev: 0.0029013436890253665",
            "extra": "mean: 720.3866484000059 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.4994960238785575,
            "unit": "iter/sec",
            "range": "stddev: 0.0003680885861795762",
            "extra": "mean: 153.85808320000365 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.901166582243555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002714476624955549",
            "extra": "mean: 112.34482477778191 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.835466212373742,
            "unit": "iter/sec",
            "range": "stddev: 0.0010678924020870691",
            "extra": "mean: 113.18021889999841 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.5802236801562484,
            "unit": "iter/sec",
            "range": "stddev: 0.001570096923057975",
            "extra": "mean: 632.8218040000024 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "30473cae2376430df95680490e08cd4f5476051f",
          "message": "ci: update pip constraints and pre-commit config (#385)\n\nCo-authored-by: GitHub <noreply@github.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2021-12-20T10:13:38Z",
          "tree_id": "9033a745ab5b08fdc8b50f5c1284e939d4332e27",
          "url": "https://github.com/ComPWA/tensorwaves/commit/30473cae2376430df95680490e08cd4f5476051f"
        },
        "date": 1639995496055,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.16476588930670433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.069217385999991 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.1879488447592988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.3205966829999625 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.15786458356004937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.334543046000022 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.3333317828961009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0000139539999964 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 14.03666050072197,
            "unit": "iter/sec",
            "range": "stddev: 0.004693067351676189",
            "extra": "mean: 71.24201657143203 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 108.68525035453258,
            "unit": "iter/sec",
            "range": "stddev: 0.0013079546979771364",
            "extra": "mean: 9.200880494252791 msec\nrounds: 87"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.714924898532169,
            "unit": "iter/sec",
            "range": "stddev: 0.011296240176102295",
            "extra": "mean: 269.18444579999914 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 58.70398982008111,
            "unit": "iter/sec",
            "range": "stddev: 0.0017503145979526839",
            "extra": "mean: 17.03461729032131 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 4.9660809223877465,
            "unit": "iter/sec",
            "range": "stddev: 0.015235415029047553",
            "extra": "mean: 201.36603000000832 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 5.661071160145349,
            "unit": "iter/sec",
            "range": "stddev: 0.010745464356319666",
            "extra": "mean: 176.64501500001015 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 5.377027064821254,
            "unit": "iter/sec",
            "range": "stddev: 0.012693118768027225",
            "extra": "mean: 185.97637466666583 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 0.7869956560767337,
            "unit": "iter/sec",
            "range": "stddev: 0.047210895056712894",
            "extra": "mean: 1.2706550440000115 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 4.59922970500349,
            "unit": "iter/sec",
            "range": "stddev: 0.02215561693053349",
            "extra": "mean: 217.42771380000931 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 5.601632353011528,
            "unit": "iter/sec",
            "range": "stddev: 0.006922926271677092",
            "extra": "mean: 178.519391666678 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 5.384361347961842,
            "unit": "iter/sec",
            "range": "stddev: 0.010580462857916719",
            "extra": "mean: 185.72304780000195 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 0.9317353100779353,
            "unit": "iter/sec",
            "range": "stddev: 0.04332630236697684",
            "extra": "mean: 1.0732661831999848 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "8654dbfaef8866179a47f936056a2cd90d368fd1",
          "message": "ci: update pip constraints and pre-commit config (#386)\n\n* ci: update pip constraints and pre-commit config\r\n* ci: remove specific language_info from notebooks\r\n* fix: remove black, mypy and pylint from Python 3.6\r\n  These cause too many issues and probably no one will be developing in\r\n  Python 3.6.\r\n\r\nCo-authored-by: GitHub <noreply@github.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2021-12-27T22:22:41Z",
          "tree_id": "df0958fc8cb79d5097fbf44d57cec7350ed2d456",
          "url": "https://github.com/ComPWA/tensorwaves/commit/8654dbfaef8866179a47f936056a2cd90d368fd1"
        },
        "date": 1640643984053,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.21520807369254927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.646665818999992 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.25275273439022944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9564359309999872 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.2045972998964928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.887650035000007 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.40551055790978835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.466027037999993 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 18.374589489469045,
            "unit": "iter/sec",
            "range": "stddev: 0.0006555566491398223",
            "extra": "mean: 54.42298455555298 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 137.9283851578807,
            "unit": "iter/sec",
            "range": "stddev: 0.00012153566746863896",
            "extra": "mean: 7.250139257813704 msec\nrounds: 128"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.469815154995783,
            "unit": "iter/sec",
            "range": "stddev: 0.000870271578989664",
            "extra": "mean: 223.72289800000544 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 84.41268230784581,
            "unit": "iter/sec",
            "range": "stddev: 0.00022638022155729813",
            "extra": "mean: 11.846561116883905 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.578966544642429,
            "unit": "iter/sec",
            "range": "stddev: 0.000514594736447887",
            "extra": "mean: 131.94411059999993 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.400341066370938,
            "unit": "iter/sec",
            "range": "stddev: 0.00019709495516804712",
            "extra": "mean: 106.37911889999714 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.410527547003994,
            "unit": "iter/sec",
            "range": "stddev: 0.0010432172677430475",
            "extra": "mean: 106.263968199994 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.3637047699190044,
            "unit": "iter/sec",
            "range": "stddev: 0.0009540391935679579",
            "extra": "mean: 733.2965478000006 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.243438629866686,
            "unit": "iter/sec",
            "range": "stddev: 0.00017153209286186277",
            "extra": "mean: 160.16814759999534 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.820236169056345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005228694003462826",
            "extra": "mean: 113.37564899999582 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.725469488962082,
            "unit": "iter/sec",
            "range": "stddev: 0.0010083479012163669",
            "extra": "mean: 114.60701355554824 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.5612660460620782,
            "unit": "iter/sec",
            "range": "stddev: 0.0016367607783904844",
            "extra": "mean: 640.5058269999927 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "ad7a1bf76f607bd2f559eb2947b7816ac0005e30",
          "message": "feat!: implement chi-squared estimator (#387)\n\n* docs: explain mathematics of UnbinnedNLL estimator\r\n* docs: illustrate chi-squared fit example\r\n* docs: overwrite docstring of Estimator.__call__",
          "timestamp": "2021-12-28T12:47:58Z",
          "tree_id": "a160c73bb175775671c73d0adea86685235b558f",
          "url": "https://github.com/ComPWA/tensorwaves/commit/ad7a1bf76f607bd2f559eb2947b7816ac0005e30"
        },
        "date": 1640695908319,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.21334474940518702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.687249171999952 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.23980161103369912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.170113768999954 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.19630875994019603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.094016182999894 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.39304289193793857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5442515830000048 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 17.63720180642854,
            "unit": "iter/sec",
            "range": "stddev: 0.0011405783207088316",
            "extra": "mean: 56.698336333346965 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 137.515780031293,
            "unit": "iter/sec",
            "range": "stddev: 0.00013667790185049994",
            "extra": "mean: 7.271892722220248 msec\nrounds: 126"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.359560579695468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006863920530052168",
            "extra": "mean: 229.3809162000116 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 83.80421926465996,
            "unit": "iter/sec",
            "range": "stddev: 0.00016678633724363716",
            "extra": "mean: 11.932573428575543 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.508404153014514,
            "unit": "iter/sec",
            "range": "stddev: 0.0005092058278299186",
            "extra": "mean: 133.18409339999562 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.553676993117767,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680948185516821",
            "extra": "mean: 104.6717406000198 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.307325649894358,
            "unit": "iter/sec",
            "range": "stddev: 0.0009386938936336053",
            "extra": "mean: 107.44224899999608 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.3654594052462752,
            "unit": "iter/sec",
            "range": "stddev: 0.0009749713003112446",
            "extra": "mean: 732.3542509999697 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.362056191977451,
            "unit": "iter/sec",
            "range": "stddev: 0.0003273988510435047",
            "extra": "mean: 157.18188740002006 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.731865853822956,
            "unit": "iter/sec",
            "range": "stddev: 0.00034747109404987197",
            "extra": "mean: 114.52306033334025 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.744130783966083,
            "unit": "iter/sec",
            "range": "stddev: 0.0003758425210140363",
            "extra": "mean: 114.36242488889548 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.5584871498174384,
            "unit": "iter/sec",
            "range": "stddev: 0.0018115381284238747",
            "extra": "mean: 641.6478955999992 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "6b1f04750b693d191790f103bd5855ea1dcc28aa",
          "message": "docs: illustrate binned and unbinned fit (#388)\n\n* docs: illustrate unbinned 2D fit\r\n* docs: illustrate binned fit with ChiSquared estimator",
          "timestamp": "2021-12-28T14:04:05+01:00",
          "tree_id": "4456508f4e8c666a35af712e566bdd12a13fa20f",
          "url": "https://github.com/ComPWA/tensorwaves/commit/6b1f04750b693d191790f103bd5855ea1dcc28aa"
        },
        "date": 1640696873901,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.22647631466493198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.415472767999972 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.23677238211471077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.223465553999972 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.18795156226236148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.320519754999964 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.40982652585360924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.440056797000011 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 17.50447764538446,
            "unit": "iter/sec",
            "range": "stddev: 0.00028915819211384314",
            "extra": "mean: 57.12823999999096 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 137.42590462471668,
            "unit": "iter/sec",
            "range": "stddev: 0.00013820663277591206",
            "extra": "mean: 7.276648479999494 msec\nrounds: 125"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.5186274027040954,
            "unit": "iter/sec",
            "range": "stddev: 0.11889743921875305",
            "extra": "mean: 284.20173140000315 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 82.89744557721671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002641172366433646",
            "extra": "mean: 12.063097880000743 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.398702335381935,
            "unit": "iter/sec",
            "range": "stddev: 0.0006786054199165644",
            "extra": "mean: 135.1588366000101 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.41474954035393,
            "unit": "iter/sec",
            "range": "stddev: 0.00032471163858231934",
            "extra": "mean: 106.2163147000092 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.266823381067658,
            "unit": "iter/sec",
            "range": "stddev: 0.00044836641676973917",
            "extra": "mean: 107.91184409999914 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.346166701269182,
            "unit": "iter/sec",
            "range": "stddev: 0.0008404563612029081",
            "extra": "mean: 742.8500490000147 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.1812327350122835,
            "unit": "iter/sec",
            "range": "stddev: 0.000021959205834703476",
            "extra": "mean: 161.7800272000295 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.788497667374497,
            "unit": "iter/sec",
            "range": "stddev: 0.00030418683064659786",
            "extra": "mean: 113.7850902222226 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.734684364232214,
            "unit": "iter/sec",
            "range": "stddev: 0.0009677232147694047",
            "extra": "mean: 114.48610599999635 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.5179040354122735,
            "unit": "iter/sec",
            "range": "stddev: 0.0006938524110052572",
            "extra": "mean: 658.8031764000107 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "e55fa215f1edf130fb5a49717af1382e03dd94b0",
          "message": "docs!: merge and isolate AmpForm notebooks (#389)\n\n* ci: update pip constraints and pre-commit config\r\n* docs: generalize main usage page\r\n* docs: illustrate loadable callbacks in basics\r\n* docs: improve index page buttons\r\n* docs: link to estimator and optimizer implementations\r\n* docs: link to the three ComPWA packages\r\n* docs: link to use_cse PR in faster-lambdify\r\n* docs: move scipy miminizer example to basics notebook\r\n* docs: simplify amplitude analysis notebook\r\n* fix: use JAX functions in fit examples (faster)\r\n\r\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2021-12-28T17:20:27+01:00",
          "tree_id": "72dc0df3481a4636b2e5bd588a6806de2f01a7f9",
          "url": "https://github.com/ComPWA/tensorwaves/commit/e55fa215f1edf130fb5a49717af1382e03dd94b0"
        },
        "date": 1640708698800,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.17080143669949388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.854751689000068 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.21403337630391314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.672168506000048 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.16303765016993818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.133552581000004 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.35664822910162947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8038832619999994 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 15.20218181887374,
            "unit": "iter/sec",
            "range": "stddev: 0.004396290334920291",
            "extra": "mean: 65.7800315714212 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 117.89974217650143,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456721701490161",
            "extra": "mean: 8.481782754901644 msec\nrounds: 102"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.009113124665456,
            "unit": "iter/sec",
            "range": "stddev: 0.006396673884393913",
            "extra": "mean: 249.4317244000058 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 63.15597352430837,
            "unit": "iter/sec",
            "range": "stddev: 0.0015808935299583852",
            "extra": "mean: 15.833814985293602 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 5.456941843767708,
            "unit": "iter/sec",
            "range": "stddev: 0.005665276804564114",
            "extra": "mean: 183.25282339999376 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 5.821465770832018,
            "unit": "iter/sec",
            "range": "stddev: 0.011196911594388625",
            "extra": "mean: 171.77804342858443 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 5.813956868578834,
            "unit": "iter/sec",
            "range": "stddev: 0.007550726160324084",
            "extra": "mean: 171.99990000002194 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 0.8565869392188733,
            "unit": "iter/sec",
            "range": "stddev: 0.03561711135211002",
            "extra": "mean: 1.1674238237999588 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 4.165009478811865,
            "unit": "iter/sec",
            "range": "stddev: 0.0059931336056863955",
            "extra": "mean: 240.09549200000038 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 5.6203131997474784,
            "unit": "iter/sec",
            "range": "stddev: 0.011591484902824408",
            "extra": "mean: 177.92602733330418 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 5.828099720830364,
            "unit": "iter/sec",
            "range": "stddev: 0.0066693156977873265",
            "extra": "mean: 171.5825136666543 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 0.9913282803286164,
            "unit": "iter/sec",
            "range": "stddev: 0.02225562873828821",
            "extra": "mean: 1.008747576199994 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "17f015b9b1908095244f47eb5b7a8415af03dffa",
          "message": "docs: illustrate expression tree optimization (#390)\n\n* docs: use create_function in sub-intensities example\r\n* docs: set more free parameters\r\n* docs: move AIC etc. to \"Analyze fit result\" section",
          "timestamp": "2021-12-28T18:19:41Z",
          "tree_id": "3398bd6d2148f754560df9cfaee29dc35e29100d",
          "url": "https://github.com/ComPWA/tensorwaves/commit/17f015b9b1908095244f47eb5b7a8415af03dffa"
        },
        "date": 1640715803596,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.2176415926051424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.594709991000002 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.25336843150610605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.946821607000004 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.20548710865928313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.8664853309999785 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.4152396404499882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4082479190000186 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 19.175916644129828,
            "unit": "iter/sec",
            "range": "stddev: 0.000807711731003849",
            "extra": "mean: 52.14874566667049 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 137.30618169897224,
            "unit": "iter/sec",
            "range": "stddev: 0.00010519410566556715",
            "extra": "mean: 7.2829932900791245 msec\nrounds: 131"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.487863784566971,
            "unit": "iter/sec",
            "range": "stddev: 0.002613564703935524",
            "extra": "mean: 222.82316219998393 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 85.20465770755216,
            "unit": "iter/sec",
            "range": "stddev: 0.00014236067716040255",
            "extra": "mean: 11.736447594593933 msec\nrounds: 74"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 7.608862456634663,
            "unit": "iter/sec",
            "range": "stddev: 0.0005239421072152442",
            "extra": "mean: 131.42569019998973 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 9.339358056085503,
            "unit": "iter/sec",
            "range": "stddev: 0.00030668717537891396",
            "extra": "mean: 107.07374040000559 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 9.547040564927778,
            "unit": "iter/sec",
            "range": "stddev: 0.001224583515778413",
            "extra": "mean: 104.74450099998762 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.3637515579947888,
            "unit": "iter/sec",
            "range": "stddev: 0.002411007374456325",
            "extra": "mean: 733.2713895999973 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.342726209344164,
            "unit": "iter/sec",
            "range": "stddev: 0.00014909143783164378",
            "extra": "mean: 157.66091219999225 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 8.859665686324295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003572750142496766",
            "extra": "mean: 112.87107611109883 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 8.76086780297137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002713169322652091",
            "extra": "mean: 114.14394355555008 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.552866614348774,
            "unit": "iter/sec",
            "range": "stddev: 0.00044108018872844915",
            "extra": "mean: 643.9703131999977 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "c90b0aa83312b50e253dfc459815fe591c230b0d",
          "message": "ci: update pip constraints and pre-commit config (#391)\n\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2022-01-03T10:04:31+01:00",
          "tree_id": "de0269a80d4b19bc0418d2672d43a058d0306638",
          "url": "https://github.com/ComPWA/tensorwaves/commit/c90b0aa83312b50e253dfc459815fe591c230b0d"
        },
        "date": 1641200887800,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.25411051126018214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.935295690999993 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.26473256646907606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7773969910000176 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.21493377003083766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.65259600600001 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.42233746198230687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.367774800999996 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 20.392237113083922,
            "unit": "iter/sec",
            "range": "stddev: 0.0034968387063847345",
            "extra": "mean: 49.03826855555672 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 156.95986254997618,
            "unit": "iter/sec",
            "range": "stddev: 0.00010291181598473134",
            "extra": "mean: 6.371055528171089 msec\nrounds: 142"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.19410583869204,
            "unit": "iter/sec",
            "range": "stddev: 0.09186978721115927",
            "extra": "mean: 238.42984379999734 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 95.71126203971852,
            "unit": "iter/sec",
            "range": "stddev: 0.00013920027653349982",
            "extra": "mean: 10.448091255812898 msec\nrounds: 86"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 8.292420488575292,
            "unit": "iter/sec",
            "range": "stddev: 0.0006844942004526717",
            "extra": "mean: 120.59205166666705 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 10.334659596484174,
            "unit": "iter/sec",
            "range": "stddev: 0.0003124778841163674",
            "extra": "mean: 96.76177436363726 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 10.329284247647644,
            "unit": "iter/sec",
            "range": "stddev: 0.001031903468161372",
            "extra": "mean: 96.8121290909132 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.4794562194516006,
            "unit": "iter/sec",
            "range": "stddev: 0.0022027622950961676",
            "extra": "mean: 675.9240232000082 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 7.007260289655889,
            "unit": "iter/sec",
            "range": "stddev: 0.00012961128588898747",
            "extra": "mean: 142.70912719999842 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 9.756273887778708,
            "unit": "iter/sec",
            "range": "stddev: 0.000286630596475629",
            "extra": "mean: 102.4981475000061 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 9.732652446311194,
            "unit": "iter/sec",
            "range": "stddev: 0.0008471327891106271",
            "extra": "mean: 102.74691360000361 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.6996654770077817,
            "unit": "iter/sec",
            "range": "stddev: 0.0011736790681531842",
            "extra": "mean: 588.3510688000058 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "bc065b7edc6446dd6ec30382c66ff9144b08ee42",
          "message": "refactor!: generalize data generation interface (#392)\n\n* chore: allow importing data classes from main sub-module\r\n* chore: collect RNGs under data.rng module\r\n* chore: increase default bunch size to 50,000\r\n* chore: isolate data sample handling functions\r\n* docs: add docstring to TFPhaseSpaceGenerator.generate\r\n* docs: add note about how to use amplitude analysis examples\r\n* docs: fix y-tick labels in fit animation\r\n* docs: use general data generators in notebooks\r\n* docs: write \"for a Function\" instead of \"with a Function\"\r\n* feat: define generate DataGenerator interface\r\n* feat: implement IdentityTransformer\r\n* feat: implement IntensityDistributionGenerator\r\n* feat: implement NumpyDomainGenerator\r\n* feat: implement NumpyUniformRNG\r\n* feat: implemented unweighted TFPhaseSpaceGenerator\r\n* fix: import NumpyUniformRNG from data.rng\r\n* fix: remove __all__ statement from data module\r\n* fix: use type function instead of __class__\r\n* refactor!: remove generate_phsp and generate_data facade functions\r\n* refactor: allow IntensityDistributionGenerator with WeightedDataGenerator\r\n* refactor: merge PhaseSpaceGenerator.setup() into its constructor\r\n* refactor: rename PhaseSpaceGenerator to WeightedDataGenerator\r\n* refactor: rename UniformRealNumberGenerator to RealNumberGenerator\r\n* style: use pytest.approx instead of numpy testing\r\n* test: merge test_generate with test_data",
          "timestamp": "2022-01-03T16:39:31+01:00",
          "tree_id": "44afd31f240b8c85aadd13d394378d48cbe026bf",
          "url": "https://github.com/ComPWA/tensorwaves/commit/bc065b7edc6446dd6ec30382c66ff9144b08ee42"
        },
        "date": 1641224605288,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.20628077783853196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.847761437000003 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.24944386913431066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.008917932000003 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.1884336168726118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.306908696000022 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.4079555967584342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4512471650000123 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 18.9532625664961,
            "unit": "iter/sec",
            "range": "stddev: 0.001459887435083148",
            "extra": "mean: 52.76136477778297 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 132.2003873814389,
            "unit": "iter/sec",
            "range": "stddev: 0.0004362692063189447",
            "extra": "mean: 7.564274355071982 msec\nrounds: 138"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 4.529585706072487,
            "unit": "iter/sec",
            "range": "stddev: 0.007249619643608007",
            "extra": "mean: 220.770742600007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 73.96178994517878,
            "unit": "iter/sec",
            "range": "stddev: 0.0006130230227905951",
            "extra": "mean: 13.520494849316249 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 5.704010587839074,
            "unit": "iter/sec",
            "range": "stddev: 0.008003007365857224",
            "extra": "mean: 175.31524260000424 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 6.6353676563894295,
            "unit": "iter/sec",
            "range": "stddev: 0.0019970164543084965",
            "extra": "mean: 150.70754957143404 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 6.681418564352058,
            "unit": "iter/sec",
            "range": "stddev: 0.0023795731859704975",
            "extra": "mean: 149.66881514284782 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 0.9810913071516786,
            "unit": "iter/sec",
            "range": "stddev: 0.004631752976182806",
            "extra": "mean: 1.0192731224000113 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 5.330295803859581,
            "unit": "iter/sec",
            "range": "stddev: 0.0013598130347582005",
            "extra": "mean: 187.6068489999966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 6.872682174436909,
            "unit": "iter/sec",
            "range": "stddev: 0.0009602194095072819",
            "extra": "mean: 145.50360028571114 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 6.768946276517929,
            "unit": "iter/sec",
            "range": "stddev: 0.0014806991604197606",
            "extra": "mean: 147.73348157143573 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.1406010376545892,
            "unit": "iter/sec",
            "range": "stddev: 0.006862024807591124",
            "extra": "mean: 876.730747199997 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "f9756de52c81cc7b58d788f49563023d9c193832",
          "message": "test: increase test coverage (#393)\n\n* test: run _all_unique check PositionalArgumentFunction\r\n* test: run ParametrizedBackendFunction.update_parameter\r\n* test: ignore TYPE_CHECKING in test coverage",
          "timestamp": "2022-01-05T11:11:13Z",
          "tree_id": "702de33aeff68f910376fd7c85ee403122ebdfcb",
          "url": "https://github.com/ComPWA/tensorwaves/commit/f9756de52c81cc7b58d788f49563023d9c193832"
        },
        "date": 1641381327669,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.19169515984225133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.216615801999978 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.22141236688213933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.516459554999983 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.17479483080924862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.7209929800000054 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.33832870123392106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9557054910000033 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 15.842163134582401,
            "unit": "iter/sec",
            "range": "stddev: 0.00029168953946146647",
            "extra": "mean: 63.12269299998974 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 121.61935117958501,
            "unit": "iter/sec",
            "range": "stddev: 0.00023679111584123965",
            "extra": "mean: 8.222375718181432 msec\nrounds: 110"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.8056799133352897,
            "unit": "iter/sec",
            "range": "stddev: 0.005241107042792947",
            "extra": "mean: 262.7651359999959 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 73.27310329602268,
            "unit": "iter/sec",
            "range": "stddev: 0.0003097413766520606",
            "extra": "mean: 13.647572642856534 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 6.406595287457568,
            "unit": "iter/sec",
            "range": "stddev: 0.0018489731157913384",
            "extra": "mean: 156.08914799998956 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 8.07766125606783,
            "unit": "iter/sec",
            "range": "stddev: 0.0014672404412883924",
            "extra": "mean: 123.79820944444948 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 7.836105792548065,
            "unit": "iter/sec",
            "range": "stddev: 0.002257338975034309",
            "extra": "mean: 127.61440777777328 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.1581618662182078,
            "unit": "iter/sec",
            "range": "stddev: 0.004136173792726797",
            "extra": "mean: 863.4371664000128 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 5.540190618657004,
            "unit": "iter/sec",
            "range": "stddev: 0.0016580825552927633",
            "extra": "mean: 180.4992046000052 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 7.5254613330976,
            "unit": "iter/sec",
            "range": "stddev: 0.0011358265061800223",
            "extra": "mean: 132.88221887499674 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 7.349044838533551,
            "unit": "iter/sec",
            "range": "stddev: 0.00093203182048128",
            "extra": "mean: 136.072104874998 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.3421873783936593,
            "unit": "iter/sec",
            "range": "stddev: 0.004615440936720601",
            "extra": "mean: 745.0524539999833 msec\nrounds: 5"
          }
        ]
      },
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
          "id": "5b6333413a72a57e2121ef0449c5053dc2cbac25",
          "message": "build: make tensorflow an optional dependency (#394)\n\n* ci: allow running both benchmarks and tests\r\n* ci: test framework with JAX only\r\n* ci: update pip constraints and pre-commit config\r\n* docs: recommend installing JAX\r\n* feat: provide install instructions on ImportError\r\n* refactor: remove phasespace dependency from rng\r\n\r\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2022-01-05T11:51:45Z",
          "tree_id": "dc3288964733b483abe93d7936a3bd32dac7c954",
          "url": "https://github.com/ComPWA/tensorwaves/commit/5b6333413a72a57e2121ef0449c5053dc2cbac25"
        },
        "date": 1641383788455,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.1644654447081482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.080304600000005 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.19742668900711516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.065171305000007 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.15640664609489502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.393590201999984 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.3577651606352502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7951296269999943 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 14.414274493924554,
            "unit": "iter/sec",
            "range": "stddev: 0.0018631100867196994",
            "extra": "mean: 69.37567342855085 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 103.13332721215934,
            "unit": "iter/sec",
            "range": "stddev: 0.0003784384716406208",
            "extra": "mean: 9.69618674226289 msec\nrounds: 97"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.000335510118241,
            "unit": "iter/sec",
            "range": "stddev: 0.10602612412386572",
            "extra": "mean: 333.2960585999899 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 61.44351699504254,
            "unit": "iter/sec",
            "range": "stddev: 0.0003752434663746811",
            "extra": "mean: 16.27511003448392 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 5.110347613366912,
            "unit": "iter/sec",
            "range": "stddev: 0.003546753217487677",
            "extra": "mean: 195.68140480000693 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 5.176981573370339,
            "unit": "iter/sec",
            "range": "stddev: 0.003446535442032204",
            "extra": "mean: 193.16275049999376 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 5.038069969161385,
            "unit": "iter/sec",
            "range": "stddev: 0.0033567063341967945",
            "extra": "mean: 198.48870819998865 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 0.8385411143065201,
            "unit": "iter/sec",
            "range": "stddev: 0.003364070031003099",
            "extra": "mean: 1.1925473694000175 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 4.544474116477253,
            "unit": "iter/sec",
            "range": "stddev: 0.0011388916203617352",
            "extra": "mean: 220.04746300000306 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 5.019605739233057,
            "unit": "iter/sec",
            "range": "stddev: 0.003623770887948179",
            "extra": "mean: 199.21883350001698 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 5.1282107508279084,
            "unit": "iter/sec",
            "range": "stddev: 0.00197451392989655",
            "extra": "mean: 194.9997862000032 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 0.969982935621765,
            "unit": "iter/sec",
            "range": "stddev: 0.0019709373112797397",
            "extra": "mean: 1.0309459715999991 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "faa0cbf67b0478774e09b649a69ca0d8374cc33a",
          "message": "fix: hide progress bar of domain generator (#396)\n\n* fix: finalize progress bar if total is unspecified",
          "timestamp": "2022-01-05T19:49:02+01:00",
          "tree_id": "2eec979ffe398e136f33e20d7aaa60f5a7175766",
          "url": "https://github.com/ComPWA/tensorwaves/commit/faa0cbf67b0478774e09b649a69ca0d8374cc33a"
        },
        "date": 1641408769981,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-jax]",
            "value": 0.22469754177316634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.450426969999995 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-numpy]",
            "value": 0.24708462967602013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.0471963040000105 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_data[10000-tf]",
            "value": 0.20618597568366723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.849990386999991 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/ampform.py::TestJPsiToGammaPiPi::test_fit[10000-jax]",
            "value": 0.41375416199087084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4168941169999982 sec\nrounds: 1"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-jax]",
            "value": 20.016825876943155,
            "unit": "iter/sec",
            "range": "stddev: 0.0009725711243642297",
            "extra": "mean: 49.957970666661645 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numpy]",
            "value": 124.45145269072071,
            "unit": "iter/sec",
            "range": "stddev: 0.018567235745909825",
            "extra": "mean: 8.035261769785365 msec\nrounds: 139"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-numba]",
            "value": 3.9073396501872266,
            "unit": "iter/sec",
            "range": "stddev: 0.12028966839475237",
            "extra": "mean: 255.92860859999288 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_data[3000-tf]",
            "value": 94.04352737712573,
            "unit": "iter/sec",
            "range": "stddev: 0.00018905518816811367",
            "extra": "mean: 10.633374011907074 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-jax]",
            "value": 8.089270732666973,
            "unit": "iter/sec",
            "range": "stddev: 0.0016782756271614301",
            "extra": "mean: 123.62053800000676 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numpy]",
            "value": 10.214894135999852,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461450763019872",
            "extra": "mean: 97.8962666363569 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-numba]",
            "value": 10.23979920163359,
            "unit": "iter/sec",
            "range": "stddev: 0.001104151983468737",
            "extra": "mean: 97.65816499999987 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-Minuit2-tf]",
            "value": 1.4787772548792457,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868496247247288",
            "extra": "mean: 676.2343664000014 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-jax]",
            "value": 6.875965339980134,
            "unit": "iter/sec",
            "range": "stddev: 0.0001493122596067611",
            "extra": "mean: 145.43412460000695 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numpy]",
            "value": 9.642566797939642,
            "unit": "iter/sec",
            "range": "stddev: 0.00021154106367589787",
            "extra": "mean: 103.70682629999237 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-numba]",
            "value": 9.534728649656033,
            "unit": "iter/sec",
            "range": "stddev: 0.0008669351783174135",
            "extra": "mean: 104.87975449999567 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/expression.py::test_fit[1000-ScipyMinimizer-tf]",
            "value": 1.715657724787889,
            "unit": "iter/sec",
            "range": "stddev: 0.0007531965654429009",
            "extra": "mean: 582.8668419999872 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}