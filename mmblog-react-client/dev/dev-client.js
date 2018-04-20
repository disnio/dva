/* eslint-disable */
'use strict'
require('eventsource-polyfill');
const hotClient = require('webpack-hot-middleware/client?reload=true');

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
});