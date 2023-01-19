import styles from './CartItem.module.scss'
import { AiTwotoneDelete } from 'react-icons/ai'

function CartItem({ item , delItem}) {
  const {name, price, quantity, imagen} = item
  return (
    <div className={styles.cartItem}>
      <img src={imagen} alt={`product-${name.toLowerCase().trim()}`} />
      <div className={styles.info}>
        <p className={styles.title__item}>{name}</p>
        <p className={styles.info__price}>
          <span className={styles.firstPrice}>${price} X {quantity}</span>
          <span className={styles.priceXQuantity}> ${price * quantity}</span>
        </p>
      </div>
      <AiTwotoneDelete onClick={() => delItem(name)} color='hsl(220, 14%, 75%)' cursor='pointer' size={20}/>
    </div>
  )
}

export default CartItem