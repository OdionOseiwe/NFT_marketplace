import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import web3Modal from "web3modal";
import {nftaddress,marketplaceaddress} from '../address';
import NFT from '../artifacts/contracts/NFT.sol/NARUTO.json';
import MARKET from '../artifacts/contracts/Marketplace.sol/Marketplace.json'
import { useContractRead ,useConnect, useAccount, useNetwork} from 'wagmi'



export default function Home() {
  const { data, isError, isLoading } = useContractRead({
    addressOrName: '0x45205E53BB788E954fC0753e4CBC7bEF5d1c62d2',
    contractInterface: NFT,
    functionName: 'symbol',
   
  })

  const{} = useConnect({

  })

  const {address, isConnected} = useAccount({

  })

  const { chain, chains} = useNetwork();

console.log(chain, "chain");

  console.log(address, isConnected);

  console.log(data, isError, isLoading);

  return (
    <div className={styles.container}>
      <h1>Welcome to Home</h1>
    </div>

  )
}
