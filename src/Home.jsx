import { Billing, Business, CTA, Footer, Hero } from "./components";
import Shop from "./components/Shop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetFoodThunk } from "./redux/GetFoodSlice";
import styles from "./style";



const Home = () =>{ 
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(GetFoodThunk())
},[])
    return(
        <div className="bg-primary w-full overflow-hidden">

    
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
           <Hero/>
            <Billing/>
            <Business/>
            <CTA/>
          </div>
        </div>
        
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer/>
          </div>
        </div>
      </div>
    )
}
export default Home;