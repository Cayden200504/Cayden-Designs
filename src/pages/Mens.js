import ProductListMWC from '../components/ProductListMWC';

const products = [
    {
      id: 1,
      name: 'Orange Fantasy',
      price: '£50',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e149c7e166884b6d9398aef501019408_9366/Adicolor_70s_Large_Trefoil_T-Shirt_Red_IB3435_HM1.jpg',
    },
    {
      id: 2,
      name: 'White Melody',
      price: '£34',
      image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0a7be87c69d42199599afa80102eb0a_9366/IJ9086_HM1.jpg',
    },
    {
      id: 3,
      name: 'Orange Fantasy',
      price: '£45',
      image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c88f564777ad4ea2b908af1e00b802ff_9366/Essentials_Single_Jersey_Embroidered_Small_Logo_T-Shirt_Grey_IC9288_21_model.jpg',
    },
    {
      id: 4,
      name: 'Green Leaf',
      price: '£23',
      image: 'https://overlays.co/cdn/shop/products/DSC09225.jpg?v=1682003388&width=400',
    },
    {
        id: 5,
        name: 'Orange Fantasy',
        price: '£56',
        image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/52980bff1a494c459f0ffd8380664a32_9366/IM4587_21_model.jpg',
      },
      {
        id: 6,
        name: 'White Melody',
        price: '£20',
        image: 'https://overlays.co/cdn/shop/products/CopyofDSC01365.jpg?v=1680535061&width=400',
      },
      {
        id: 7,
        name: 'Orange Fantasy',
        price: '£45',
        image: 'https://overlays.co/cdn/shop/products/CopyofDSC01559.jpg?v=1680535051&width=400',
      },
      {
        id: 8,
        name: 'Green Leaf',
        price: '£50',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a635ee658e8845f399a1571ab8e6a6a7_9366/Enjoy_Summer_Raglan_T-Shirt_White_IT8190_HM1.jpg',
      },
      {
        id: 9,
        name: 'Orange Fantasy',
        price: '£50',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e149c7e166884b6d9398aef501019408_9366/Adicolor_70s_Large_Trefoil_T-Shirt_Red_IB3435_HM1.jpg',
      },
      {
        id: 10,
        name: 'White Melody',
        price: '£34',
        image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0a7be87c69d42199599afa80102eb0a_9366/IJ9086_HM1.jpg',
      },
      {
        id: 11,
        name: 'Orange Fantasy',
        price: '£45',
        image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c88f564777ad4ea2b908af1e00b802ff_9366/Essentials_Single_Jersey_Embroidered_Small_Logo_T-Shirt_Grey_IC9288_21_model.jpg',
      },
      {
        id: 12,
        name: 'Green Leaf',
        price: '£23',
        image: 'https://overlays.co/cdn/shop/products/DSC09225.jpg?v=1682003388&width=400',
      },
      {
          id: 13,
          name: 'Orange Fantasy',
          price: '£56',
          image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/52980bff1a494c459f0ffd8380664a32_9366/IM4587_21_model.jpg',
        },
        {
          id: 14,
          name: 'White Melody',
          price: '£20',
          image: 'https://overlays.co/cdn/shop/products/CopyofDSC01365.jpg?v=1680535061&width=400',
        },
        {
          id: 15,
          name: 'Orange Fantasy',
          price: '£45',
          image: 'https://overlays.co/cdn/shop/products/CopyofDSC01559.jpg?v=1680535051&width=400',
        },
        {
          id: 16,
          name: 'Green Leaf',
          price: '£50',
          image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a635ee658e8845f399a1571ab8e6a6a7_9366/Enjoy_Summer_Raglan_T-Shirt_White_IT8190_HM1.jpg',
        },
   
    // Add more product objects as needed
  ];
export default function Mens() {
    return(
    


    <div className = "men">

     <div className = "frame1">
      <div className = "Offers1 "> Men  </div> 
     </div>
    
       <ProductListMWC products={products} />
    

    </div>
   

    )
}