import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Ecosystem.module.css';

import Header from '../header.js';
import Footer from '../footer.js';

export default function Ecosystem(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-col justify-start relative ${styles['group']}`}>
          <div className={`flex-row justify-between ${styles['section_2']}`}>
            <Header />
          </div>
          <div className={`${styles['grid']} ${styles['pos']}`}>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row ${styles['group_3']}`}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']}`}
                  src="images/ed5584a21944d574d789d14c77f9524c.png"
                />
                <div className={`flex-col flex-1 self-center ${styles['group_5']} ${styles['ml-29']}`}>
                  <span className={`self-start ${styles['text_5']}`}>OrdinalHive</span>
                  <span className={`self-stretch ${styles['font_4']} ${styles['mt-15']}`}>
                    Ordinal Hive is building a pro trading protocol tailored for high-volume ordinal traders.This means
                    faster transaction times, lower transaction fees...
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_7']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_8']}`}>
                  <a href="https://twitter.com/ordinalhive" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_6']} ${styles['ml-11']}`}
                    src="images/0a15aa63e829680e7c77fb5b0f2f5218.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row ${styles['group_4']}`}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']}`}
                  src="images/a5d7fa5fe59f9ec650c72fbab98c8a8c.png"
                />
                <div className={`ml-28 flex-col flex-1 self-center ${styles['group_6']}`}>
                  <span className={`self-start ${styles['font_3']}`}>ZKYwallet</span>
                  <span className={`self-stretch ${styles['font_4']} ${styles['mt-13']}`}>
                    Zky is the first wallet that lets you bridge, visualize, transfer assets and connect to dapps on the
                    fast-growing Bison ZK-Rollup ecosystem.
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_7']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_8']}`}>
                  <a href="https://twitter.com/zkywallet" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row ${styles['group_9']}`}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']}`}
                  src="images/0f70a9c7eea6aa1c0f952d453149db02.png"
                />
                <div className={`flex-col flex-1 self-center ${styles['ml-29']}`}>
                  <span className={`self-start ${styles['font_3']} ${styles['text_6']}`}>Brc20</span>
                  <span className={`self-stretch ${styles['font_4']} ${styles['mt-13']}`}>
                    brings critical infrastructure to the Bitcoin ecosystem, through their ecosystem dashboard, IDO and
                    IFO platform, cross-L2 DEX and upcoming super app.
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_11']}`}>
                  <a href="https://twitter.com/BRC20com" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row ${styles['group_9']}`}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']}`}
                  src="images/8190e0cb275f0772c05169c5213dbc35.png"
                />
                <div className={`flex-col flex-1 self-center ${styles['ml-29']}`}>
                  <span className={`self-start ${styles['font_6']}`}>Ordbit</span>
                  <span className={`self-stretch ${styles['font_4']} ${styles['mt-13']}`}>
                    Ordbit is an On-Chain Rating and lending protocol on Bitcoin giving acces to instant liquidity
                    against BTC Native Assets (Ordinals, Runes, TAP/TRAC/PIPE, Rare sats).
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_11']}`}>
                  <a href="https://twitter.com/ord_bit" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col ${styles['grid-item_2']}`}>
              <div className={`flex-row self-start ${styles['group_12']}`}>
                <img
                  className={`self-center ${styles['image_3']}`}
                  src="images/d8ab28fd618db737fb4bc2005e35f4f8.png"
                />
                <div className={`flex-col items-start flex-1 self-start ${styles['group_13']} ${styles['ml-29']}`}>
                  <span className={`${styles['font_3']} ${styles['text_7']}`}>BRC333</span>
                  <span className={`${styles['font_4']} ${styles['text_8']} ${styles['mt-13']}`}>
                    BRC333 is a recursive protocol that enables minting DYnAMIC ORDINALS.
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center self-stretch ${styles['group_15']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center`}>
                  <a href="https://twitter.com/brc333protocol" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col ${styles['grid-item_2']}`}>
              <div className={`flex-row self-start ${styles['group_12']}`}>
                <img
                  className={`shrink-0 self-center ${styles['image_3']}`}
                  src="images/f98bff1152085afd371a416fe4cd4a83.png"
                />
                <div className={`flex-col items-start flex-1 self-start ${styles['group_14']} ${styles['ml-29']}`}>
                  <span className={`${styles['font_3']}`}>Runessance</span>
                  <span className={`mt-20 ${styles['font_4']} ${styles['text_9']}`}>
                    The first PIPE, Runes lending platform.
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center self-stretch ${styles['group_15']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center`}>
                  <a href="https://twitter.com/RunessanceFi" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row items-center ${styles['group_16']}`}>
                <img
                  className={`shrink-0 ${styles['image_3']}`}
                  src="images/225932cc41bf1296ccb953923e746dba.png"
                />
                <div className={`flex-col flex-1 ${styles['ml-23']}`}>
                  <span className={`self-start ${styles['font_3']} ${styles['text_10']}`}>zkPepeZ</span>
                  <span className={`mt-6 self-stretch ${styles['font_4']} ${styles['text_12']}`}>
                    NFT Collection highlighting by the zk Community for the zk Community. Launching with Ordinal Hive.
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_11']}`}>
                  <a href="https://twitter.com/zkpepez" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row ${styles['group_3']}`}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']}`}
                  src="images/bfa1f369b678deb7c7f0d3c9c7756531.png"
                />
                <div className={`flex-col flex-1 self-center ${styles['group_17']} ${styles['ml-29']}`}>
                  <span className={`self-start ${styles['font_3']} ${styles['text_11']}`}>DEEPLAKE</span>
                  <span className={`mt-14 self-stretch ${styles['font_4']}`}>
                    Deep Lake brings into your application a direct line to l1 Bitcoin with only a few lines of
                    code—securely & trustlessly through BTC-native technologies like PSBTs....
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-end items-center ${styles['group_18']}`}>
                <a href="https://twitter.com/deeplakefi" target='_blank'>
                <span className={`${styles['font_5']} ${styles['text_13']}`}>Go</span>
                <img
                  className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                  src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                /></a>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row ${styles['group_9']}`}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']}`}
                  src="images/a9ac1467b5fe9d90a676e4b7a7a5de10.png"
                />
                <div className={`ml-28 flex-col flex-1 self-center`}>
                  <span className={`self-start ${styles['font_3']} ${styles['text_14']}`}>OKX Wallet</span>
                  <span className={`self-start ${styles['font_4']} ${styles['text_15']}`}>
                    Your All-In-One Portal To Web3.
                  </span>
                  <span className={`self-stretch ${styles['font_4']} ${styles['text_16']}`}>
                    Trade with 0 fees on our DEX, NFT Marketplace & earn yield on DeFi with our self-custody Wallet.
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_11']}`}>
                  <a href="https://twitter.com/okxweb3" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row items-center ${styles['group_19']}`}>
                <img
                  className={`shrink-0 ${styles['image_3']}`}
                  src="images/2ebb24a60cb50128c938f7e442cf35fa.png"
                />
                <div className={`ml-28 flex-col flex-1 ${styles['group_20']}`}>
                  <span className={`self-start ${styles['font_3']}`}>Arcus</span>
                  <span className={`self-stretch ${styles['font_4']} ${styles['mt-13']}`}>
                    Arcus Game is a Web 3, Metaverse, GameFi intense, skill-based, competitive esports-ready game.
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_7']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_8']}`}>
                  <a href="https://twitter.com/arcusbtc" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col items-start ${styles['grid-item']}`}>
              <div className={`flex-row ${styles['group_9']}`}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']}`}
                  src="images/e19eb677a1b4b8fc60f240b3da27e12f.png"
                />
                <div className={`ml-28 flex-col flex-1 self-center`}>
                  <span className={`self-start ${styles['font_3']} ${styles['text_17']}`}>East Blue</span>
                  <span className={`self-stretch ${styles['font_4']} ${styles['text_18']}`}>
                    East Blue is the universal application layer for Bitcoin, building innovative solutions to scale the
                    Bitcoin ecosystem.
                    <br />
                  </span>
                  <span className={`self-start ${styles['font_4']} ${styles['text_16']}`}>
                    Bringing Multi VM support...
                  </span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
                <div className={`flex-row items-center ${styles['group_11']}`}>
                  <a href="https://twitter.com/EASTBlue_io" target='_blank'><span className={`${styles['font_5']}`}>Go</span>
                  <img
                    className={`shrink-0 ${styles['image_5']} ${styles['ml-11']}`}
                    src="images/1a043dfac4b62ce4177cd54e47263bbd.png"
                  /></a>
                </div>
              </div>
            </div>
            <div className={`flex-col ${styles['grid-item_2']}`}>
              <div className={`flex-row self-start ${styles['group_12']}`}>
                <img
                  className={`self-center ${styles['image_3']}`}
                  src="images/36679eda124bf6a66f924fd8f9bd4fab.png"
                />
                <div className={`flex-col items-start flex-1 self-start ${styles['group_21']} ${styles['ml-29']}`}>
                  <span className={`${styles['font_6']}`}>Kiwi Defi</span>
                  <span className={`mt-20 ${styles['font_7']} ${styles['text_19']}`}>Bitcoin ZK Defi</span>
                </div>
              </div>
              <div className={`flex-col justify-start items-start self-stretch ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image_4']} ${styles['image_7']}`}
                  src="images/9c313cb328ff4d1589b1e581d8510f8e.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-74 flex-col ${styles['group_22']}`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_20']}`}>Coming soon</span>
          <div className={`mt-28 flex-row ${styles['equal-division']}`}>
            <div className={`flex-col items-start ${styles['section_4']} ${styles['equal-division-item']}`}>
              <span className={`${styles['font_3']} ${styles['text_21']}`}>ZX</span>
              <span className={`mt-20 ${styles['font_7']}`}>BTC Dex on Zk</span>
            </div>
            <div className={`ml-28 flex-col items-start ${styles['section_4']} ${styles['equal-division-item']}`}>
              <span className={`${styles['font_3']} ${styles['text_21']}`}>Blazing Ord</span>
              <span className={`mt-12 ${styles['font_7']}`}>Ordinals Marketplace on Zk</span>
            </div>
            <div className={`ml-28 flex-col items-start ${styles['section_4']} ${styles['equal-division-item']}`}>
              <span className={`${styles['font_3']} ${styles['text_21']}`}>ZLaunch</span>
              <span className={`${styles['font_7']} ${styles['mt-13']}`}>
                Token Launchpad for tokens launching on Bison
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

Ecosystem.defaultProps = {};