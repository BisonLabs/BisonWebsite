import React from 'react';
import styles from './styles.module.css'; // 导入样式文件

const Header = () => {
  return (
    <div className={`flex-row items-center`}>
      <a href="/">
        <img
          className={`${styles['image']}`}
          src="images/8b879eb421a1fe903e1b756aaf9ea2ec.png"
        />
      </a>
      <div className={`flex-row items-center ${styles['group_3']}`}>
        <a href="https://dmaster-1.gitbook.io/bisonlabs" target="_blank" >
        <span className={`${styles['font']} ${styles['text']}`}>Build</span>
        </a>
        <a href="https://dmaster-1.gitbook.io/bisonlabs" target="_blank" >
        <span className={`${styles['font_2']} ${styles['text']} ${styles['text_2']} ${styles['ml-51']}`}>
          Ecosystem
        </span></a>
        <a href="https://medium.com/@bison_labs" target="_blank" >
        <span className={`${styles['font_2']} ${styles['text']} ${styles['text_3']} ${styles['ml-51']}`}>
          Blog
        </span></a>
        
        <a href="https://clammy-guardian-10b.notion.site/Bison-Labs-Job-Board-76953cb0876f4119a64c4d7e9194ac4d?pvs=4" target="_blank" >
        <span className={`${styles['font']} ${styles['text']} ${styles['ml-51']}`}>Career</span>
        </a>
      </div>
      <div className={`flex-row ${styles['group_2']}`}>
        <a href="https://twitter.com/bison_labs" target="_blank">
          <img
            className={`${styles['image_2']}`}
            src="images/37d15b4294c02dc629ad9c297e1a6f43.png"
          />
        </a>
        <a href="https://discord.gg/CzvRdZbMMA" target="_blank">
          <img
            className={`ml-24 ${styles['image_2']}`}
            src="images/081849b19f301721a40773549d05a7af.png"
          />
        </a>
        <a href="https://t.me/bisonlabs" target="_blank">
          <img
            className={`ml-24 ${styles['image_2']}`}
            src="images/532b824d72e242b71f2a9d0f09a01891.png"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
