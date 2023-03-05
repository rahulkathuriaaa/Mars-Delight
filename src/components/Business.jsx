import styles, { layout } from "../style";
import Spline from '@splinetool/react-spline';
import './Mars.css';


const Business = () =>  (
  <section id="product" className={layout.sectionReverse}>
    

    <div className={layout.sectionInfo} align="left">
      <h3 className={styles.heading2} align="left">
      Mars Delight has a unique opportunity to offer a dining experience
      </h3>
      <p className={`${styles.paragraph} mt-5 mx-20 `} >
      A Mars restaurant could offer a menu that features ingredients and dishes that are unique to Mars and cannot be found on Earth. This could include dishes made with locally grown Martian produce, such as potatoes or other root vegetables that have been grown in Martian soil. 
      </p>

      
    </div>
    <div className='marslogo'>
    <Spline scene="https://prod.spline.design/rEOTQqUmaDRYVMvs/scene.splinecode" />
        </div>
    
  </section>
);

export default Business;