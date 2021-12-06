window.BENCHMARK_DATA = {
  "lastUpdate": 1638790110360,
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
      }
    ]
  }
}