import 'remixicon/fonts/remixicon.css';
import styles from '../assets/styles/navbar.module.css'
import logo from '../assets/images/Prabhashree.png'


const Navbar = () => {
  return (
    <>
        <div className={styles.topBanner}>
            <div className={styles.icons}>
              <i className="ri-smartphone-line"></i>
              <p> +91-7483600212</p>
              <i className="ri-mail-line"></i>
              <p>info@dryfruithouse.com</p>
            </div>
            <div className={styles.topBannerTag}>This is our first website and we are selling dryfruit</div>
            <div className={styles.socialmedia}>
              <i className="ri-twitter-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-linkedin-box-fill"></i>
            </div>
            <div className={styles.smallScreenTag}>
              <p>india's fastest growing chain of dryfruit</p>
            </div>
        </div>

        <div className={styles.navContainer}>
          <div className={styles.menu}>
            <i className="ri-menu-line" ></i>
          </div>
          <div className={styles.navItemsSmallScreen}>
            <i className="ri-close-large-fill"></i>
            <li><a href="/">Home</a></li>
            <li><a href="/bulkorder">Bulk Order</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About Us</a></li>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="#" />
          </div>
          <div className={styles.navItems}>
            <li><a href="/">Home</a></li>
            <li><a href="/bulkorder">Bulk Order</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About Us</a></li>
          </div>
          <div className={styles.account}>
            <i className="ri-account-circle-line"></i>
            <i className="ri-shopping-cart-2-line"></i>
          </div>
        </div>
    </>
  )
}

export default Navbar