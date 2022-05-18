import React from "react";
import Styles from "./Roadmap.module.css";
export default function index() {
  return (
    <div className={Styles["dev-roadmap-cont"]}>
      <div className={Styles["dev-roadmap-left"]}>
        <div className={Styles["dev-roadmap-mint"]}>
          <h4 className={Styles["dev-roadmap-mint-title"]}> FIRST MINT</h4>
          <ul className={Styles["dev-roadmap-list"]}>
            <li>Breeding, Staking, token, anime,</li>
            <li>Monkai Mint Pass</li>
          </ul>
        </div>
        <div className={Styles["dev-roadmap-mint"]}>
          <h4 className={Styles["dev-roadmap-mint-title"]}>SECOND MINT</h4>
          <ul className={Styles["dev-roadmap-list"]}>
            <li>Liquidity Pool: Provide tokens liquidity</li>
            <li>Charity Events</li>
            <li>Upgraded Staking Rewards</li>
            <li>Release Beta Version of Web3 Game</li>
            <li>
              Working with Schoolboards and local government to provide an
              education in finance to lower income students
            </li>
            <li>Monkai DAO: Self governing and self sustaining on-chain DAO</li>
          </ul>
        </div>
      </div>
      <div className={Styles["dev-roadmap-right"]}>
        <div className={Styles["dev-roadmap-mint"]}>
          <h4 className={Styles["dev-roadmap-mint-title"]}>THIRD MINT</h4>
          <ul className={Styles["dev-roadmap-list"]}>
            <li> Monkai Anime </li>
            <li> Staking 2.0 (Missions) </li>
            <li> Trading Post </li>
            <li> Famous Token Market </li>
            <li> NFT Minting tool </li>
            <li> Monkai Multi-chain Marketplace </li>
            <li> Multiple NFT Swap </li>
            <li> NFT Messaging service </li>
            <li> Temple Launch </li>
            <li> Temple Art Assets </li>
            <li> $MONK Auctions </li>
            <li> Peer to Peer Trading </li>
            <li> Staking (Legally Compliant) </li>
            <li> Airdrop Transdimensional Monkai </li>
          </ul>
        </div>
        <div className={Styles["dev-roadmap-mint"]}>
          <h4 className={Styles["dev-roadmap-mint-title"]}>THIRD MINT</h4>
          <ul className={Styles["dev-roadmap-list"]}>
            <li> Monkai Anime </li>
            <li> Staking 2.0 (Missions) </li>
            <li> Trading Post </li>
            <li> Famous Token Market </li>
            <li> NFT Minting tool </li>
            <li> Monkai Multi-chain Marketplace </li>
            <li> Multiple NFT Swap </li>
            <li> NFT Messaging service </li>
            <li> Temple Launch </li>
            <li> Temple Art Assets </li>
            <li> $MONK Auctions </li>
            <li> Peer to Peer Trading </li>
            <li> Staking (Legally Compliant) </li>
            <li> Airdrop Transdimensional Monkai </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
