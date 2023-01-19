import logo from '../../assets/logo.svg'
import iconCart from '../../assets/icon-cart.svg'
import userLogo from '../../assets/image-avatar.png'
import menu from '../../assets/icon-menu.svg'
import styles from './Navbar.module.scss'
import { useState } from 'react'
import SlideNav from '../SlideNav/SlideNav'
import CartItem from '../CartItem/CartItem'

function Navbar({ cartQuantity, cart, delet }) {
  const [menuMobile, setMenuMobile] = useState(false)
  const [cartVisible, setCartVisible] = useState(false)
  return (
    <nav className={styles.navbar}>
      <section className={styles.navbar__left}>
      <section className={styles.container__mobile}>
        <div onClick={() => setMenuMobile(true)} className={styles.container__menuIcon}><img src={menu} alt="logo-svg" /></div>
        {menuMobile && <SlideNav setFn={() => setMenuMobile(false)}/>}
        </section>
        <div className={styles.container__logo}><img src={logo} alt="logo-svg" /></div>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Woman</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </section>
        <section className={styles.navbar__right}>
          <div onClick={() => setCartVisible(state => !state)} className={styles.container__cart}><img src={iconCart} alt="icon-cart" /></div>
          {cartVisible && 
          <div className={styles.cart__container}>
            <p className={styles.title__cart}>Cart</p>
            <div className={styles.cart__container__bottom}>
              {cart.length === 0 
              ? <p className={styles.cartEmpty}>Your cart is empty</p> 
              : <>
                {cart.map((item, index) => <CartItem key={index} delItem={delet} item={item}/>)}
                <button className={styles.button__checkout}> Checkout</button>
                </>}
            </div>
          </div>}
          <span className={styles.countItems}>{cartQuantity()}</span>
          <div className={styles.container__userLogo}><img src={userLogo} alt="user-logo" /></div>
        </section>
    </nav>
  )
}

export default Navbar