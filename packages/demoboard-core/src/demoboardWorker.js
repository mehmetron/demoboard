/*
 * Copyright 2019 Seven Stripes Kabushiki Kaisha
 *
 * This source code is licensed under the Apache License, Version 2.0, found
 * in the LICENSE file in the root directory of this source tree.
 */

if (typeof Worker !== 'undefined') {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  let worker = require('workerize-proxy-loader!./worker')()
  Object.assign(module.exports, worker)
}
