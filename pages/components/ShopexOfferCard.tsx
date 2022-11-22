import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function ShopexOfferCard() {
  return <div className={[styles.shopexOfferCard, "px-3 py-10 flex flex-col justify-center items-center text-center"].join(" ")}>
    <Image width={50} height={50} alt="Walao" src={"/../public/img/offer-1.png"} />
    <p className={[styles.shopexOfferTitle, "my-7"].join(' ')}>24/7 Support</p>
    <p className={styles.shopexOfferDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
  </div>
}