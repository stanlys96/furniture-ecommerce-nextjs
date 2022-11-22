import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function LatestProductCard() {
  return <div className={[styles.latestProductCard].join(" ")}>
    <div className={[styles.latestProductCardContainer, "flex justify-center items-center"].join(" ")}>
      <Image width={200} height={200} src="/../public/img/chair-1.png" alt="chair-1" />
    </div>
    <div className={[styles.latestProductCardDescContainer, 'flex justify-between mt-2'].join(' ')}>
      <div>
        <p className={styles.latestProductTitle}>Comfort Handy Craft</p>
      </div>
      <div>
        <span className={[styles.latestProductDiscountPrice ,"mr-2"].join(' ')}>$42.00</span>
        <span className={styles.latestProductOriginalPrice}>$65.00</span>
      </div>
    </div>
  </div>
}