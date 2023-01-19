import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import { BsCart2 } from 'react-icons/bs'
import { useState } from "react"
import imageProductCart from '../../assets/image-product-1-thumbnail.jpg'
import styles from './Count.module.scss'

function Count({ addItem }) {
  const [count, setCount] = useState(0)
  const validation = count => {
    if(count !== 0 ){
      addItem({name: 'Fall Limited Edition Sneakers', price: 125.00, quantity: count, imagen: imageProductCart})
    }
    else{
      alert('Change the quantity!')
    }
  }  
  return (
    <div className={styles.container__count}>
      <div className={styles.count}>
        <button onClick={() => count <= 0 ? setCount(0) : setCount(count - 1)}><CgMathMinus color='hsl(26, 100%, 55%)' size={20} fontWeight='bold'/></button>
        <span style={{fontSize: '1.5rem'}}>{count}</span>
        <button onClick={() => setCount(count + 1)}><CgMathPlus color='hsl(26, 100%, 55%)' size={20} fontWeight='bold'/></button>
      </div>
      <button onClick={() => validation(count)} className={styles.buttonAdd} style={{width: '100%', cursor:'pointer'}}><BsCart2 color='#fff'/><span style={{color:'#fff'}}>Add to cart</span></button>
    </div>
  )
}

export default Count