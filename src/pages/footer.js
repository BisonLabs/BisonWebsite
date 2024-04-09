import React from 'react';
import styles from './styles.module.css'; // 导入样式文件

const Footer = () => {
  return (
    <div className={`flex-col ${styles.section_7} ${styles['mt-165']}`}>
      <div className={`flex-row self-stretch`}>
        <div className={`flex-row flex-1`}>
          <span className={`flex-1 ${styles['font_8']} ${styles['text_32']}`}>Sign up for exclusive news</span>
          <div className={`mt-48 flex-col items-start ${styles['group_14']}`}>
            <span className={`${styles['font_11']} ${styles['text_33']}`}>Developers</span>
            <div className={`mt-48 flex-col items-start`}>
                <span className={`${styles['font_12']} ${styles['text_36']}`}><a href="https://dmaster-1.gitbook.io/bisonlabs" target='_blank'>Build</a></span>
                <span className={`mt-32 ${styles['font_12']}`}><a href="https://github.com/BisonLabs" target='_blank'>Github</a></span>
            </div>
          </div>
        </div>
        <div className={`flex-col items-start self-start ${styles['group_15']}`}>
            <span className={`${styles['font_11']} ${styles['text_34']}`}>Resources</span>
            <span className={`${styles['font_12']} ${styles['text_37']} ${styles['mt-53']}`}><a href="https://medium.com/@marketing_19505" target='_blank'>Blog</a></span>
        </div>
        <div className={`flex-col ${styles['group_16']}`}>
            <span className={`self-start ${styles['font_11']} ${styles['text_35']}`}>Misc</span>
            <div className={`flex-col items-start self-stretch ${styles['mt-53']}`}>
                <span className={`${styles['font_12']}`}><a href="" target='_blank'>Brand</a></span>
                <span className={`mt-32 ${styles['font_12']}`}><a href="https://clammy-guardian-10b.notion.site/Bison-Labs-Job-Board-76953cb0876f4119a64c4d7e9194ac4d?pvs=4" target='_blank'>Career</a></span>
            </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center self-start ${styles['section_8']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_21']}`}
            src="images/ccce92b414573185dfc5f560b4a0f9d7.png"
          />
          <span className={`${styles['font_4']} ${styles['text_20']} ${styles['ml-27']}`}>your@email.com</span>
        </div>
        <img
          className={`${styles['image_20']}`}
          src="images/4330e828e3eec8e26cb422924a85db65.png"
        />
      </div>
    </div>
  );
};

export default Footer;
