import Count from '../Count/Count'
import styles from './DetailProduct.module.scss'

function DetailProduct({addItem}) {
  return (
    <div className={styles.details}>
        <section className={styles.info__top}>
            <span>Sneaker Company</span>
            <h3>Fall Limited Edition Sneakers</h3>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, 
                they’ll withstand everything the weather can offer.</p>
            <div className={styles.info__prices}>
                <p className={styles.price}>
                    <span className={styles.new__price}>$125.00</span><span className={styles.desc}>50%</span>
                </p>
                <span className={styles.prev__price}>$250.00</span>
            </div>
        </section>
        <Count addItem={addItem}/>
    </div>
  )
}

export default DetailProduct