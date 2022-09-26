import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import web3Modal from "web3modal";
import {nftaddress,marketplaceaddress} from '../address';
import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import MARKET from '../artifacts/contracts/Marketplace.sol/Marketplace.json'
import { useContractRead } from 'wagmi'



export default function Home() {
  const { data, isError, isLoading } = useContractRead({
    addressOrName: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    contractInterface: MARKET,
    functionName: 'getname',
   
  })
  console.log(data, isError, isLoading);

  return (
    <div className={styles.container}>
      <h1>Welcome to Home</h1>
    </div>

  )
}
