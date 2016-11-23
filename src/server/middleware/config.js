const maxAge = '1200';

const origin = [
  'http://localhost:8080',
  'http://localhost'
];

const methods = [
  'OPTIONS',
  'GET',
  'POST',
  'PATCH',
  'PUT',
  'DELETE',
  'HEAD'
];

const allowedHeaders = [
  'X-Requested-With',
  'If-Modified-Since',
  'Cache-Control',
  'DNT',
  'X-CustomHeader',
  'Keep-Alive',
  'User-Agent',
  'Content-Type',
  'Authorization',
  'Pragma'
];

export default {
  origin,
  methods,
  allowedHeaders,
  maxAge,
  preflightContinue: true
};
