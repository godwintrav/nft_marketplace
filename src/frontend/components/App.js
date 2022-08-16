
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.png';
import './App.css';

import { useState } from 'react';
import { ethers } from "ethers";
import MarketplaceAbi from '../contractsData/Marketplace.json';
import MarketplaceAddress from '../contractsData/Marketplace-address.json';
import NFTAbi from '../contractsData/NFT.json';
import NFTAddress from '../contractsData/NFT-address.json';
import Navigation from './Navbar';
import Home from './Home';
import Create from './Create';
import MyListedItem from './MyListedItem';
import MyPurchases from './MyPurchases';


function App() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});
  //MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
    //Get Provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //set signer
    const signer = provider.getSigner();

    loadContracts(signer);
  }

  const loadContracts = async (signer) => {
    //Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
    setLoading(false);
  }
  return (
    <BrowserRouter>
      <div>
        <Navigation web3Handler={web3Handler} account={account} />
        <Routes>
          <Route path="/" element={} />
          <Route path="/create" element={} />
          <Route path="/my-listed-items" element={} />
          <Route path="/my-purchases" element={} />
        </Routes>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mx-auto mt-5">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1 className="mt-5">Dapp University Starter Kit</h1>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEARN BLOCKCHAIN <u><b>NOW! </b></u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
