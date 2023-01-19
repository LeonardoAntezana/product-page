import styles from './App.module.scss'
import DetailProduct from './components/DetailProduct/DetailProduct'
import Navbar from './components/Navbar/Navbar'
import SliderImages from './components/SliderImages/SliderImages'
import image1 from './assets/image-product-1.jpg'
import image2 from './assets/image-product-2.jpg'
import image3 from './assets/image-product-3.jpg'
import image4 from './assets/image-product-4.jpg'
import { TbLetterX } from 'react-icons/tb'
import { useState } from 'react'

function App() {
  const IMAGES = [image1, image2, image3, image4]
  const [cart, setCart] = useState([])
  const [modalOn, setModalOn] = useState(false)
  
  const addProduct = item => {
    let findProduct = cart.find(elem => elem.name === item.name)
    if(findProduct === undefined){
      setCart([...cart, {...item}])
    }
    else{
      findProduct.quantity += item.quantity
      setCart([...cart])
    }
  }

  const itemsCart = () => cart.reduce((acc, item) => acc + item.quantity, 0)

  const deleteItem = name => setCart(cart.filter(item => item.name !== name))

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Navbar cartQuantity={itemsCart} cart={cart} delet={deleteItem}/>
        <div className={styles.main}>
          <SliderImages 
          list={IMAGES} 
          setModal={() => setModalOn(true)}/>
          <DetailProduct addItem={addProduct}/>
          {modalOn && 
            <div className={styles.modalProduct__images}>
              <p><TbLetterX className={styles.close__modal} onClick={() => setModalOn(false)} size={20} cursor='pointer'/></p>
              <SliderImages 
              list={IMAGES} 
              setModal={() => setModalOn(true)} 
              styleRowLeft={{display: 'block', margin: -15}} 
              styleRowRight={{display: 'block', margin: -15}} 
              height={550}/>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default App
