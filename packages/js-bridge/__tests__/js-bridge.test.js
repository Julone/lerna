'use strict';

const jsBridge = require('..');
const assert = require('assert').strict;

assert.strictEqual(jsBridge(), 'Hello from jsBridge');
console.info('jsBridge tests passed');
