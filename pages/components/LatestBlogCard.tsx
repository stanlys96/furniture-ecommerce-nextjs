import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function LatestBlogCard() {
  return <div className={styles.latestBlogCard}>
    <div className={styles.latestBlogImgContainer}>
      <Image className={styles.latestBlogImg} alt="walao" layout="fill" objectFit="cover" src="/../public/img/blog-img-1.png" />
    </div>
    <div className={[styles.latestBlogDescContainer, "p-5"].join(" ")}>
      <div>
        <span className={[styles.latestBlogSpan, "mr-5"].join(" ")}>SaberAli</span>
        <span className={[styles.latestBlogSpan].join(" ")}>21 August 2020</span>
      </div>
      <p className={[styles.latestBlogDescTitle, "my-4"].join(" ")}>Top Essential Trends in 2022</p>
      <p className={styles.latestBlogDescSubtitle}>More of this less hello samlande lied much over tightly circa horse taped mightly</p>
      <span className={styles.latestBlogLink}>Read More</span>
    </div>
  </div>
}