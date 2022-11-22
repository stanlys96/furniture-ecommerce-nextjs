import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FeaturedProductCard from './components/FeaturedProductCard'
import LatestProductCard from './components/LatestProductCard'
import ShopexOfferCard from './components/ShopexOfferCard'
import TrendingProductCard from './components/TrendingProductCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      <div className={[styles.navContainer, 'py-3 text-white'].join(' ')}>
        <div className="container mx-auto flex justify-between">
          <div>
            <span>stanlyskwok@gmail.com</span>
            <span className="mx-5">(081) 123 45678</span>
          </div>
          <div>
            <Link className={[styles.navLink, `text-light`].join(' ')} href="#" passHref>Login</Link>
            <Link className={[styles.navLink, `text-light mx-5`].join(' ')} href="#" passHref>Wishlist</Link>
            <Link className={[styles.navLink, `text-light`].join(' ')} href="#" passHref>Cart</Link>
          </div>
        </div>
      </div>
      <div className='py-3'>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className={styles.navLogo}>Hekto</span>
            <Link className={[styles.navLink, styles.navSecondLink].join(' ')} href="#" passHref>Home</Link>
            <Link className={[styles.navLink, styles.navSecondLink, 'mx-4'].join(' ')} href="#" passHref>Pages</Link>
            <Link className={[styles.navLink, styles.navSecondLink].join(' ')} href="#" passHref>Products</Link>
            <Link className={[styles.navLink, styles.navSecondLink, 'mx-4'].join(' ')} href="#" passHref>Blog</Link>
            <Link className={[styles.navLink, styles.navSecondLink].join(' ')} href="#" passHref>Shop</Link>
            <Link className={[styles.navLink, styles.navSecondLink, 'mx-4'].join(' ')} href="#" passHref>Contact</Link>
          </div>
          <div className="flex">
            <input className={[styles.navTextInput].join(' ')} type="text" />
            <div className={[styles.navInputIconContainer, 'px-3 flex items-center justify-center text-white'].join(' ')}>
              <span>X</span>
            </div>
          </div>
        </div>
      </div>
      <div className={[styles.furnitureCarousel, "flex items-center"].join(' ')}>
        <div className={[styles.insideFurnitureCarousel].join(' ')}>
          <p className={[styles.carouselTitle, "text-2xl"].join(' ')}>Best Furniture For Your Castle...</p>
          <p className={styles.carouselSubtitle}>New Furniture Collection<br />Trends in 2022</p>
          <p className={[styles.carouselDesc, "my-5"].join(" ")}>Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit. Magna in est adipiscing in phasellus non in justo.</p>
          <button className={[styles.shopNowBtn, 'text-white'].join(' ')}>Shop Now</button>
        </div>
      </div>
      <div className="py-14">
        <div className="container mx-auto">
          <p className={[styles.titleStyle, "text-center mb-5"].join(" ")}>Featured Products</p>
          <div className="grid grid-cols-4 gap-6">
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
          </div>
          <p className={[styles.titleStyle, styles.titleMargin, "text-center"].join(" ")}>Latest Products</p>
          <div className="flex justify-center items-center">
            <a className={styles.latestProductLink} href="#">New Arrival</a>
            <a className={styles.latestProductLink} href="#">Best Seller</a>
            <a className={styles.latestProductLink} href="#">Featured</a>
            <a className={styles.latestProductLink} href="#">Special Offer</a>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-7">
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
          </div>
          <p className={[styles.titleStyle, styles.titleMargin, "text-center"].join(" ")}>What Shopex Offer!</p>
          <div className="grid grid-cols-4 gap-6 mt-7">
            <ShopexOfferCard />
            <ShopexOfferCard />
            <ShopexOfferCard />
            <ShopexOfferCard />
          </div>
        </div>
      </div>
      <div className={[styles.uniqueFeatureSection, "relative flex justify-center items-center"].join(' ')}>
        <div className="container mx-auto grid grid-cols-2 relative">
          <div><p>&nbsp;</p></div>
          <div>
            <p className={[styles.uniqueFeatureTitle, "mb-5"].join(' ')}>Unique Features of Latest & Trending Products</p>
            <div className="flex items-baseline">
              <div className={[styles.circleContainer, styles.redCircle, "mr-3"].join(' ')} />
              <span className={styles.featureDesc}>All frames constructed with hardwood solids and laminates</span>
            </div>
            <div className="flex items-baseline my-2">
              <div className={[styles.circleContainer, styles.blueCircle, "mr-3"].join(' ')} />
              <p className={styles.featureDesc}>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
            </div>
            <div className="flex items-baseline">
              <div className={[styles.circleContainer, styles.greenCircle, "mr-3"].join(' ')} />
              <p className={styles.featureDesc}>Arms, backs and seats are structurally reinforced</p>
            </div>
            <div className="flex items-center mt-7">
              <button className={[styles.shopNowBtn, 'text-white'].join(' ')}>Add To Cart</button>
              <div className="flex flex-col justify-center ml-5">
                <p className={styles.italianSofa}>B&B Italian Sofa</p>
                <p className={styles.italianSofaPrice}>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-14">
        <p className={[styles.titleStyle, styles.titleMargin, "text-center"].join(" ")}>Trending Products</p>
        <div className="grid grid-cols-4 gap-6 container mx-auto">
          <TrendingProductCard />
          <TrendingProductCard />
          <TrendingProductCard />
          <TrendingProductCard />
        </div>
        <div className={[styles.executiveContainer, "container mx-auto py-12"].join(' ')}>
          <div className="grid grid-cols-2 gap-6">
            <div className={[styles.productDiscountContainer, "p-5 relative flex justify-between"].join(' ')}>
              <div>
                <p>23% off in all products</p>
                <a href="#">Shop Now</a>
              </div>
              <Image className="absolute right-0 bottom-0" width={200} height={200} alt="Walao" src="/../public/img/speaker.png" />
            </div>
            <div className={[styles.productDiscountTwoContainer, "p-5 relative flex justify-between"].join(' ')}>
              <div>
                <p>23% off in all products</p>
                <a href="#">Shop Now</a>
              </div>
              <Image className="absolute right-0 bottom-0" width={200} height={200} alt="Walao" src="/../public/img/speaker.png" />
            </div>
          </div>
          <div>
            <div className={[styles.executiveSeatContainer, "grid grid-cols-2 gap-4"].join(' ')}>
              <div className={styles.executiveImgContainer}>
                <Image className="content-end" width={75} height={75} alt="Walao" src="/../public/img/executive-1.png" />
              </div>
              <div>
                <p>Executive Seat Chair</p>
                <p>$32.00</p>
              </div>
            </div>
            <div className={[styles.executiveSeatContainer, "grid grid-cols-2 gap-4 my-5"].join(' ')}>
              <div className={styles.executiveImgContainer}>
                <Image className="content-end" width={75} height={75} alt="Walao" src="/../public/img/executive-1.png" />
              </div>
              <div>
                <p>Executive Seat Chair</p>
                <p>$32.00</p>
              </div>
            </div>
            <div className={[styles.executiveSeatContainer, "grid grid-cols-2 gap-4"].join(' ')}>
              <div className={styles.executiveImgContainer}>
                <Image className="content-end" width={75} height={75} alt="Walao" src="/../public/img/executive-1.png" />
              </div>
              <div>
                <p>Executive Seat Chair</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
