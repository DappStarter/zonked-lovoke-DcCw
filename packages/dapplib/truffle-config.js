require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'kidney kiwi onion skull drift renew saddle social hidden civil army genius'; 
let testAccounts = [
"0xcf1613e750d24b6a54f1016c7bba2789c461c8e40e281ff1dc3cdd6ce8e56bdf",
"0x8aabb05fc61ea288b75ec24c28cf6af4034ddd401c3c4849c86507b8e1f22222",
"0x432d0badfb4daa2057956b43e55376f008a8b816effc0e4c31f85b0e9effd169",
"0x0468645d8387f890102184b7589e9f8c2a42455f276208ec3847fa1967a3f493",
"0x4f2e6e65d9e6bf423076f7da976c7bed6ca25845b87cca56c92f1c05950f1a67",
"0x78f94c421a396e83126a92ed4355ad25b033b36084ecee2c5f251bb588f85009",
"0x42e2d6d21603285f65eaa664f3c970e19ad137b87ac0182d00b069d57c8eb4d9",
"0x8f0b78a6b292246141da1a3b4935c42c54b7651bac948e5e3814ab5787967878",
"0x2b712e6076085443bfccc0e0aa227529dc1306f590aa1d78e73f3a11a4a91d2a",
"0x1ed487ccf3962cfd0cc2da78f995364212c702b0c4d147acf68079dd2d9ab6d1"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


