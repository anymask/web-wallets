import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

import Layout from '~/components/Layout';
import HdPath from '~/components/PageSection/HdPath';
import WalletInfo from '~/components/PageSection/WalletInfo';
import Withdraw from '~/components/PageSection/Withdraw';

import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>지갑 열기</div>
            <Ad />
          </div>
          <HdPath className={styles.hdPath} />
          <WalletInfo className={styles.walletInfo} />
          <div className={styles.withdrawTitle}>전송</div>
          <Withdraw className={styles.withdraw} />
        </div>
      </div>
    </Layout>
  );
}

function Ad() {
  return (
    <div className={styles.adContainer}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
        axis="vertical"
        infiniteLoop
        showThumbs={false}
        swipeable={false}
      >
        <div className={styles.aditem}>
          <div>Sponsored: </div>
          <div className={styles.cosmosImage} />
          <div>
            Bringing DeFi to Cosmos:{' '}
            <a
              href="https://cosmos.network/gravity-dex?utm_source=mintscan&utm_medium=cpc&utm_campaign=gravitydex_launch&utm_term=gravitydex&utm_content=paid_banner"
              target="_blank"
              rel="noreferrer"
            >
              Gravity DEX protocol
            </a>
          </div>
        </div>
        <div className={styles.aditem}>
          Sponsored: <div className={styles.defiImage} />{' '}
          <div>
            <a href="https://www.defistation.io/" target="_blank" rel="noreferrer">
              Defistation
            </a>{' '}
            - DeFi analytics & leaderboard for protocols on Binance Smart Chain
          </div>
        </div>
      </Carousel>
    </div>
  );
}
