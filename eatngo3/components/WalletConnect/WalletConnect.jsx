import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletDisconnectButton, WalletConnectButton } from '@solana/wallet-adapter-react-ui';

const network = WalletAdapterNetwork.Devnet;
const endpoint = 'https://api.devnet.solana.com';

function App() {
    const [address, setAddress] = useState(null);
    const { wallet, connect, disconnect } = useWallet();

    const handleConnect = async () => {
        try {
            await connect();
            const publicKey = wallet.publicKey.toBase58();
            setAddress(publicKey);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDisconnect = async () => {
        try {
            await disconnect();
            setAddress(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Solana Wallet Example</h1>
            {address ? (
                <div>
                    <p>Connected to {network} network with address {address}</p>
                    <WalletDisconnectButton onDisconnect={handleDisconnect} />
                </div>
            ) : (
                <WalletConnectButton onClick={handleConnect} />
            )}
        </div>
    );
}

function Wallet() {
    return (
        <WalletProvider wallets={[]}>
            <WalletModalProvider>
                <App />
            </WalletModalProvider>
        </WalletProvider>
    );
}

export default Wallet;