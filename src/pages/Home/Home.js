import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.css';
import Header from '../header.js';
import Footer from '../footer.js';

export default function Home(props) {
  const history = useHistory();
  const [data, setData] = useState({});
  return (
    <div className={`flex-col justify-start ${styles['page']}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-col justify-start relative  ${styles['group']}`}>
          <div className={`flex-col self-stretch ${styles['section_2']}`}>
            <Header />
            <div className={`flex-col items-start relative ${styles['group_4']} ${styles['mt-7']}`}>
              <span className={`${styles['font_3']} ${styles['text_5']}`}>The First</span>
              <div className={`flex-row justify-center items-center ${styles['section_3']}`}>
                    <span className={`${styles['text_8']}`}>Join the community</span>
                    <img
                      className={`${styles['image_6']} ${styles['ml-15']}`}
                      src="images/720093c6c0c7e88bce8fa395d3a95b03.png"
                    />
              </div>
              <div className={`flex-col justify-start items-center ${styles['pos']}`}>
                <img
                  className={`${styles['image_3']}`}
                  src="images/9451d816e3bea0beee520491dca1239b.png"
                />
                <span className={`${styles['text_5']} ${styles['pos_3']}`}>Sovereign Rollup </span>
                <span className={`${styles['font_4']} ${styles['text_7']} ${styles['pos_5']}`}>
                  Bison Labs is the first native bitcoin Layer-2 Rollup that allows users to verify transactions
                  independently; building a trustlessness defi future.
                </span>
                <span className={`${styles['font_3']} ${styles['text_5']} ${styles['pos_4']}`}>on Bitcoin</span>
                <img
                  className={`${styles['image_4']} ${styles['pos_2']}`}
                  src="images/9d3b43732681bfdccb8731427739d961.png"
                />
                <img
                  className={`${styles['image_5']} ${styles['pos_6']}`}
                  src="images/9a45cd6472ccd415e814b74a8c379410.png"
                />
              </div>
            </div>
          </div>
          <span className={`self-start ${styles['font_5']} ${styles['text_9']}`}>Core Features</span>
          <div className={`flex-row items-center self-stretch relative ${styles['group_5']}`}>
            <div className={`shrink-0 ${styles['section_4']}`}></div>
            <div className={`flex-1 ${styles['divider']} ${styles['view']}`}></div>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['pos_7']}`}>
              <img
                className={`${styles['image_7']}`}
                src="images/d645dbfed78fc19eefd44d75e2a92ce1.png"
              />
              <div className={`${styles['grid']} ${styles['pos_8']}`}>
                <div className={`flex-col ${styles['grid-item']}`}>
                  <img
                    className={`self-start ${styles['image_8']}`}
                    src="images/9f5b32e7a4b460b3e699aacd3d605235.png"
                  />
                  <span className={`mt-26 self-start ${styles['font_6']} ${styles['text_10']}`}>Bitcoin native</span>
                  <span className={`mt-26 self-stretch ${styles['font_7']} ${styles['text_12']}`}>
                    Our sovereign rollups bring the proven efficiency and scalability of rollup technology to Bitcoin,
                    enhancing transaction speeds and reducing costs, all within a trustless and decentralized framework.
                  </span>
                </div>
                <div className={`flex-col ${styles['grid-item']}`}>
                  <img
                    className={`self-start ${styles['image_8']}`}
                    src="images/82306312777636a9ad08888515cf222d.png"
                  />
                  <span className={`mt-26 self-start ${styles['font_6']} ${styles['text_11']}`}>
                    Trust-Minimized with DLC
                  </span>
                  <span className={`mt-26 self-stretch ${styles['font_7']}`}>
                    Leveraging Discreet Log Contracts (DLCs), Bison Labs opens up new possibilities for engaging in
                    smart contracts without ever having to compromise on the control over your Bitcoin.
                  </span>
                </div>
                <div className={`flex-col ${styles['grid-item']}`}>
                  <img
                    className={`self-start ${styles['image_8']}`}
                    src="images/e0c3ab38a8637dd5ece6379098449c81.png"
                  />
                  <span className={`self-start ${styles['font_6']} ${styles['text_13']}`}>Empower Bitcoin wallet</span>
                  <span className={`self-stretch ${styles['font_7']} ${styles['text_15']}`}>
                    True to our commitment to the Bitcoin ecosystem, our rollup solution is designed to work seamlessly
                    with Bitcoin wallets, eliminating the need for third-party services.
                  </span>
                </div>
                <div className={`flex-col ${styles['grid-item']}`}>
                  <img
                    className={`self-start ${styles['image_8']}`}
                    src="images/c9402afedcb93fc985b5490159821cab.png"
                  />
                  <span className={`self-start ${styles['font_6']} ${styles['text_14']}`}>Design for builders</span>
                  <span className={`self-stretch ${styles['font_7']} ${styles['text_16']}`}>
                    We empower developers with the tools to create in the languages they know best. With support for
                    Solidity and Cairo, builders have the freedom to innovate without constraints.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-col self-stretch relative ${styles['group_6']}`}>
            <span className={`${styles['font_8']}  ${styles['pos_9']}`}>Discover the ecosystem</span>
            <a href="/Ecosystem"><span className={`${styles['font_9']} ${styles['text_17']} ${styles['pos_10']}`}>More</span>
            <img
              className={`${styles['image_6']} ${styles['pos_11']}`}
              src="images/634c6121dd973e67304adbe113d77235.png"
            /></a>
            <div className={`flex-row justify-between ${styles['equal-division']}`}>
              <img
                className={`${styles['equal-division-item']}`}
                src="images/32411243dde6425f7dc4827c31fa5863.png"
              />
              <img
                className={`${styles['equal-division-item']}`}
                src="images/504e6c18682b4e1b075a197e22abf86e.png"
              />
              <img
                className={`${styles['equal-division-item']}`}
                src="images/f12bb132e64e478a73d60881fcead963.png"
              />
              <div className={`flex-col ${styles['equal-division-item_2']} ${styles['section_5']}`}>
                <div className={`self-stretch ${styles['group_7']}`}></div>
                <span className={`self-center ${styles['font_9']} ${styles['text_18']}`}>Ordbit</span>
                <img
                  className={`${styles['image_9']} ${styles['pos_12']}`}
                  src="images/dccb511f2891de0d910036e9cb0511b4.png"
                />
              </div>
            </div>
            <div id="joinCommunitySection" className={`self-start ${styles['font_8']} ${styles['text_19']}`}>Join the Community</div>
            <span className={`self-start ${styles['font_4']} ${styles['text_20']} ${styles['text_21']}`}>
              Join the Bison Labs community to stay up-to-date with the latest in ZK innovations!
            </span>
            <div className={`flex-row ${styles['equal-division_2']}`}>
              <div className={`flex-row items-center ${styles['section_6']} ${styles['equal-division-item_3']}`}>
                <a href="https://twitter.com/bison_labs" target="_blank">
                <img
                  className={`${styles['image_10']}`}
                  src="images/a254c641b3aca35fbe2c5d63ed0910f5.png"
                />
                <span className={`ml-42 ${styles['text_22']}`}>Join our X</span>
                </a>
              </div>
              <div className={`ml-34 flex-row items-center ${styles['section_6']} ${styles['equal-division-item_3']}`}>
                <a href="https://t.me/bisonlabs" target="_blank">
                  <img
                    className={`shrink-0 ${styles['image_10']}`}
                    src="images/353e3a859da4b727ae00308de844b4c3.png"
                  />
                  <span className={`ml-22 ${styles['font_10']} ${styles['text_23']}`}>Join our Telegram</span>
                </a>
              </div>
              <div className={`ml-34 flex-row items-center ${styles['section_6']} ${styles['equal-division-item_3']}`}>
                <a href="https://discord.gg/CzvRdZbMMA" target="_blank">
                  <img
                    className={`shrink-0 ${styles['image_10']}`}
                    src="images/5d4ff168ff00924c1d7a3a9411fa3234.png"
                  />
                  <span className={`ml-28 ${styles['font_6']}`}>Join our Discord</span>
                </a>
              </div>
            </div>
            <span className={`self-start ${styles['font_5']} ${styles['text_24']}`}>Blog</span>
            <div className={`flex-col self-stretch ${styles['group_8']}`}>
              <div className={`flex-row items-center`}>
                <div className={`shrink-0 ${styles['section_4']}`}></div>
                <div className={`ml-6 flex-1 ${styles['divider']} ${styles['view_2']}`}></div>
              </div>
              <div className={`flex-col ${styles['mt-31']}`}>
                <div className={`flex-row`}>
                  <img
                    className={`flex-1 self-start ${styles['image_11']}`}
                    src="images/23c3433affa51b2d62a40e26ac828da3.png"
                  />
                  <div className={`ml-30 flex-col shrink-0 ${styles['group_9']}`}>
                    <img
                      className={`self-stretch ${styles['image_12']} ${styles['image_13']}`}
                      src="images/7da02ad26cdd562e565072cb27e45645.png"
                    />
                    <span className={`self-start ${styles['font_10']} ${styles['text_25']}`}>Bison Labs: Major Milestones and Looking Ahead</span>
                    <span className={`self-stretch ${styles['font_7']} ${styles['text_26']}`}>
                      At Bison Labs, we have been working hard and are thrilled to share a series of significant milestones that mark our growth and our commitment to revolutionizing the Bitcoin ecosystem. 
                    </span>
                  </div>
                </div>
                <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                  <span className={`${styles['font_10']}`}>Bison Labs Closed Seed funding</span>
                </div>
                <div className={`flex-row ${styles['group_11']}`}>
                  <span className={`flex-1 ${styles['font_7']} ${styles['text_28']}`}>
                  Bison Labs closed pre-seed funding to pioneer Bitcoin's most trustless on-chain sovereign rollup. The round was led by Portal Ventures with participation from UTXO fund, Domo (BRC-20 Creator), Waterdrip Capital, Bitcoin Startup Labs, Satoshi Lab, Lbank, and other strategic investors.
                  </span>
                </div>
              </div>
            </div>
            <span className={`self-start ${styles['font_8']} ${styles['text_30']}`}>Product Timeline</span>
            <img
              className={`self-stretch ${styles['image_15']}`}
              src="images/8795c9e34fe7495d1c6196787ee9adc4.png"
            />
            <span className={`self-start ${styles['font_5']} ${styles['text_31']}`}>investors</span>
            <div className={`flex-row items-center self-stretch ${styles['group_12']}`}>
              <div className={`shrink-0 ${styles['section_4']}`}></div>
              <div className={`ml-6 flex-1 ${styles['divider']}`}></div>
            </div>
            <div className={`flex-col self-stretch ${styles['group_13']}`}>
              <div className={`flex-col`}>
                <img
                  className={`${styles['image_16']}`}
                  src="images/ebe8cf04506f44fbdf007ff305d1c0a1.png"
                />
                <div className={`flex-row ${styles['mt-27']}`}>
                  <img
                    className={`${styles['image_17']} ${styles['equal-division-item_4']}`}
                    src="images/d6f2b779af83c84bd519fa6387829234.png"
                  />
                  <img
                    className={`${styles['image_17']} ${styles['equal-division-item_4']} ${styles['ml-47']}`}
                    src="images/9b8db1e6b3ff5e344873bddbc8e4be28.png"
                  />
                </div>
              </div>
              <div className={`${styles['grid_2']} ${styles['mt-35']}`}>
                <img
                  className={`${styles['grid-item_2']}`}
                  src="images/49b8761a689cf8f9cce7ec3edb13905c.png"
                />
                <div className={`flex-col justify-start items-center ${styles['grid-item_3']}`}>
                  <img
                    className={`${styles['image_18']}`}
                    src="images/f9125af4d5c46fb0fd99cdd299dd9fca.png"
                  />
                </div>
                <img
                  className={`${styles['grid-item_4']}`}
                  src="images/7d91ac915df55e0ef4df7cda0c3aa73d.png"
                />
                <img
                  className={`${styles['grid-item_2']}`}
                  src="images/c1057dfdef44e6d3472d3ce5cc0e739c.png"
                />
                <img
                  className={`${styles['grid-item_2']}`}
                  src="images/03718122d72a0f2e81f0aa715d8b1307.png"
                />
                <div className={`flex-col justify-start items-center ${styles['grid-item_5']}`}>
                  <img
                    className={`${styles['image_19']}`}
                    src="images/fbcde3a5472ccf60b74a8b7c9dc0eb46.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
Home.defaultProps = {};