import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function TrendingProductCard() {
  return <div className={[styles.trendingProductCard, "p-3"].join(" ")}>
    <div className={[styles.trendingProductCardContainer, "flex justify-center items-center"].join(" ")}>
      <Image width={200} height={200} src="/../public/img/chair-1.png" alt="chair-1" />
    </div>
    <p className={[styles.trendingProductTitle, "my-3"].join(' ')}>Cantilever Chair</p>
    <div>
      <span className={[styles.trendingProductDiscPrice, "mr-3"].join(' ')}>$26.00</span>
      <span className={styles.trendingProductOriginalPrice}>$42.00</span>
    </div>
  </div>
}