import { useSelector } from "react-redux";
import CheckItem from "./CheckItem";
import { ContractAddress } from "../../Contracts/Address";
import ABI from "../../Contracts/ABI.json"
import web3modal from "web3modal"; 
import { ethers } from "ethers";



const CheckOut = () =>{
  async function getContract() {
    const modal = new web3modal(); 

    const connection = await modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    
    const signer = provider.getSigner()

    
    const contract = new ethers.Contract(ContractAddress, ABI, signer)

    
    return contract
}
  async function checkOutContract(){
    const Contract = await getContract()
    const txn = await Contract.placeOrder([123],[123],1,"1",1)
    txn.wait()

  }
    const{cart,totalCostCart}=useSelector(state=>state)
    return(

<div>

<div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {/* <CheckItem name={cart[0].name} price={cart[0].price} dsc={cart[0].dsc} img={cart[0].img}/> */}
        {cart.map((item)=><CheckItem name={item.name} price={item.price} dsc={item.dsc} img={item.img} />)}
        <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8 text-white">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase text-white">Items {cart.length}</span>
          <span className="font-semibold text-sm text-white">{totalCostCart}$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase text-white">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase text-white">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase text-white">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span className="text-white">Total cost</span>
            <span className="text-white">{totalCostCart+10}</span>
          </div>
          <button onClick={checkOutContract} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
</div>
    )
}
export default CheckOut;