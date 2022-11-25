import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function TopCategoriesCard() {
  return <div className="mx-auto">
    <div className={[styles.topCategoriesImgContainer, "flex justify-center items-center"].join(" ")}>
      <Image height={100} width={100} src="/../public/img/chair-1.png" alt="walao" />
    </div>
    <p className={styles.topCategoriesDesc}>Mini LCW Chair</p>
    <p className={styles.topCategoriesPrice}>$56.00</p>
  </div>
}