'use strict';

import test from 'ava';
import request from 'supertest';
import express from 'express';
import routes from './teamTimings';

function makeApp() {
  const app = express();
  return app.use(routes);
}

test('get settings', async t => {
  const res = await request(makeApp())
    .get('/');
  t.is(res.status, 200);
  t.is(res.type, 'text/html');
  t.regex(res.text, /Team Timings/);
});

test('submit', async t => {
  const res = await request(makeApp())
    .post('/');
  t.is(res.status, 200);
  t.is(res.type, 'text/csv');
});
