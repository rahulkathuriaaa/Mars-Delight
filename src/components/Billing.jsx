
import styles, { layout } from "../style";
import Spline from '@splinetool/react-spline';
import './Mars.css';


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className='marslogo'>
            <Spline scene="https://prod.spline.design/Jaimy7l59WR7DOTs/scene.splinecode" />
        </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Dining experience that is <br className="sm:block hidden"/>truly out of this world 
      </h2>
      <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
      Experience the taste of a new world at Mars Delight - the premier restaurant on the red planet. From our locally sourced Martian ingredients to our signature dishes, every bite is an adventure that will transport your taste buds to the stars. Come join us and indulge in the ultimate culinary delight that Mars has to offer!
      </p>

      
    </div>
    
  </section>

  

  

  
);

export default Billing;