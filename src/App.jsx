import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import { useDispatch } from "react-redux";
import { GetFoodThunk } from "./redux/GetFoodSlice";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CheckOut from "./components/CheckOut";



const App = () => {
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(GetFoodThunk())
},[])
return(
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

   <main>
<Routes>

      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/shop" element={<Shop/>}/>

      <Route path="/checkout" element={<CheckOut/>}/>
</Routes>
   </main>
    
    
  </div>
)};

export default App;
