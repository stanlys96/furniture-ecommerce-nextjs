import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function FeaturedProductCard() {
  return <div className={[styles.featuredProductCard].join(" ")}>
    <div className={[styles.featuredProductCardContainer, "flex justify-center items-center"].join(" ")}>
      <Image width={200} height={200} src="/../public/img/chair-1.png" alt="chair-1" />
    </div>
    <div className={styles.featuredProductCardDescContainer}>
      <p className={styles.featuredProductCardTitle}>Cantilever Chair</p>
      <div className="py-2">
        <div className={[styles.divDecoration, styles.divDecorationGreen].join(' ')}></div>
        <div className={[styles.divDecoration, styles.divDecorationPink, styles.divDecorationMargin].join(' ')}></div>
        <div className={[styles.divDecoration, styles.divDecorationBlue].join(' ')}></div>
      </div>
      <p className={styles.featuredProductCardCode}>Code - Y523201</p>
      <p className={styles.featuredProductCardPrice}>$42.00</p>
    </div>
  </div>
}