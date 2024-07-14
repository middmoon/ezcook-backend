'use strict';

require('dotenv').config;

class ServiceInfo {
  constructor(host, port) {
    this.host = host;
    this.port = port;
    this.endpoint = `${this.host}:${this.port}`;
  }
}

const ADDRESS_SERVICE = new ServiceInfo(
  process.env.ADDRESS_SERVICE_HOST,
  process.env.ADDRESS_SERVICE_PORT
);
const AUTH_SERVICE = new ServiceInfo(
  process.env.AUTH_SERVICE_HOST,
  process.env.AUTH_SERVICE_PORT
);

module.exports = {
  ADDRESS_SERVICE,
  AUTH_SERVICE,
};
