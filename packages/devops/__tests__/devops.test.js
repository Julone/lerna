'use strict';

const devops = require('..');
const assert = require('assert').strict;

assert.strictEqual(devops(), 'Hello from devops');
console.info('devops tests passed');
