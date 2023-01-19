import { useState } from 'react'
import iconPrev from '../../assets/icon-previous.svg'
import iconNext from '../../assets/icon-next.svg'
import styles from './SliderImages.module.scss'

function SliderImages({list, setModal, styleRowLeft, styleRowRight , height}) {

  const [image, setImage] = useState(0)

  const changePrincipal = image => setImage(image)
  
  const changePrevImage = () => {
    if(image - 1 < 0){
      setImage(list.length - 1)
    }
    else{
      setImage(image - 1)
    }
  }

  const changeNextImage = () => {
    if(image + 1 === list.length){
      setImage(0)
    }
    else{
      setImage(image + 1)
    }
  }

  return (
    <div className={styles.slider}>
        <div onClick={setModal} className={styles.container__principal} style={{backgroundImage: `url(${list[image]})`, height: `${height}px`, cursor: 'pointer'}}>
          <div onClick={() => changePrevImage()} style={styleRowLeft} className={styles.iconChange}><img src={iconPrev} alt="icon-change" /></div>
          <div onClick={() => changeNextImage()} style={styleRowRight} className={styles.iconChange__margin}><img src={iconNext} alt="icon-change" /></div>
        </div>
        <div className={styles.container__images__bottom}>
          {list.map((img, index) => <div key={index} style={{borderRadius: '1.2rem', border: `${image === index ? '2px solid hsl(26, 100%, 55%)' : 'none'}`}} 
          onClick={() => changePrincipal(index)} className={styles.img__bottom}><img style={{opacity: `${image === index ? 0.4 : 1}`}} 
          src={img} alt="image-product" /></div>)}
        </div>
    </div>
  )
}

export default SliderImages