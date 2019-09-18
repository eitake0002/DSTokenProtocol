module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '5777', // eslint-disable-line camelcase
      gas: 20000000,
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '50', // eslint-disable-line camelcase
    },
  },
  solc: {
    optimizer: {
      'enabled': true,
      'runs': 200,
    },
  },
};
