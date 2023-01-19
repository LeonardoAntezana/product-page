import menuClose from '../../assets/icon-close.svg'
import styles from './SlideNav.module.scss'

function SlideNav({setFn}) {
  return (
    <div className={styles.modal}>
        <div className={styles.menuMobile}>
        <div onClick={() => setFn()} className={styles.container__iconClose}><img src={menuClose} alt="icon-close" /></div>
        <>
        <li>Collections</li>
        <li>Men</li>
        <li>Woman</li>
        <li>About</li>
        <li>Contact</li>
        </>
    </div>
  </div>
  )
}

export default SlideNav