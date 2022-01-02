require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain upgrade include argue blue stone'; 
let testAccounts = [
"0xeab2e0a7868d022fd6369600935fbdfdc6a11acd54a4cf54029217a188ecca74",
"0x5b2e14bffed8d92ae39acd9d640d85fd5f73fed7ace1e42397ab245749a1737c",
"0xb55c466ceddedea008f6e66cc9bc3b4285b2af8ba5a13f6d0e18d11e13b1002d",
"0x17fb5745d86803f101de6830ee5d62934a366c711164dcaeedaea736c0dd88d5",
"0xc2e1a1a1850b10a00455174b056e7ba7d9c78a3e023c2dd7dbc9eeca3ca8dda7",
"0x0e64d09d8f3f952052aad62175030a8d484295ed21dc6de26e3566c241fb5ca5",
"0x8f8bedac95d2b8c9096a97fa8a679cae78e3a29bcf2070e9523d39daf371ac4b",
"0x99ffd1e76e888cdaa52197bd98edcd4ae62dfc328564bd348a91c36dea808b44",
"0x6e31f2a9f11f5836e36f558621bf5d92c33e298a76b8df9eac620ef48625640e",
"0x86aebfd8b8ad6e79edcbaa2bf2f8fe91af834f1b698a19b1ff43a3225523c0a8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


