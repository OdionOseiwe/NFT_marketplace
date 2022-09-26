import '../styles/globals.css'
import React from 'react';
import Link from 'next/link';
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.rinkeby, chain.goerli, chain.ropsten, chain.arbitrum ,chain.kovan],
  [alchemyProvider({ apiKey: "https://eth-goerli.g.alchemy.com/v2/cZArJ5hDwpU8r_6CXv9KbYMJWUtrr3qS"}), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function MyApp({ Component, pageProps }) {
    return (
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <div>
            <h1 className='text-4xl font-bold p-2'>ARROW'S NFT MARKETPLACE</h1>
            <ConnectButton />
          <nav className='border-b-2 p-5'>
          <Link href="/">
            <a className='mr-6 text-pink-500'>Home</a>
          </Link>
          <Link href="/Sell-nft">
            <a className='mr-6 text-pink-500'>Sell NFT</a>
          </Link>
          <Link href="/dev">
            <a className='mr-6 text-pink-500'>DEVELOPERDD</a>
          </Link>
          <Link href="/my-nft">
            <a className='mr-6 text-pink-500'>My NFT</a>
          </Link>
          </nav> 
      </div>
  
    <Component {...pageProps} />
    </RainbowKitProvider>
    </WagmiConfig>
  
    )
   
  }

export default MyApp


