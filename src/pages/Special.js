//import Header from "../components/Header"
import ProductListS from '../components/ProductListS';

const products = [
    {
      id: 1,
      name: 'Orange Fantasy',
      price: '£30',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e149c7e166884b6d9398aef501019408_9366/Adicolor_70s_Large_Trefoil_T-Shirt_Red_IB3435_HM1.jpg',
    },
    {
      id: 2,
      name: 'White Melody',
      price: '£20',
      image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0a7be87c69d42199599afa80102eb0a_9366/IJ9086_HM1.jpg',
    },
    {
      id: 3,
      name: 'Orange Fantasy',
      price: '£40',
      image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c88f564777ad4ea2b908af1e00b802ff_9366/Essentials_Single_Jersey_Embroidered_Small_Logo_T-Shirt_Grey_IC9288_21_model.jpg',
    },
    {
      id: 4,
      name: 'Green Leaf',
      price: '£20',
      image: 'https://overlays.co/cdn/shop/products/DSC09225.jpg?v=1682003388&width=400',
    },
   
    // Add more product objects as needed
  ];

export default function Special() {
    return(
     <> 
     <div className='special'>

     <div className = "specialframe">
        <div className = "limited">  Limited Edition  </div> 
        </div>
     
      <div className="textbox1">
         <div className ="tex1"> Special & Upcoming Deals </div>
      </div>

      <div className="textbox2">
         <div className="text2"> Offers </div>
      </div>


     <div className="slot1"> 
     </div>
     
     <div className="slot2">
     </div>

     <div className = "productbox3">
        < div className = "pricebox3">  </div>
       </div>
      

       <ProductListS products={products} />
     </div>

     </>

    )
}