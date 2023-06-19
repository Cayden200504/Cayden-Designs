import ProductListUpings from '../components/ProductListUpings';

const products = [
    {
      id: 1,
      name: 'Orange Fantasy',
      price: '',
      image: 'https://overlays.co/cdn/shop/products/Untitled-1_0014_19_jpg_46c394b8-4ae9-4c60-ac13-ac0127afa676.jpg?v=1679995534&width=800',
    },
    {
      id: 2,
      name: 'White Melody',
      price: '',
      image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f0a7be87c69d42199599afa80102eb0a_9366/IJ9086_HM1.jpg',
    },
    {
      id: 3,
      name: 'Orange Fantasy',
      price: '',
      image: 'https://cdn.shopify.com/s/files/1/0566/0839/1368/products/Untitled-1_0011_16.jpg_1.jpg?v=1679995473&width=300',
    },
    {
      id: 4,
      name: 'Green Leaf',
      price: '',
      image: 'https://overlays.co/cdn/shop/products/Untitled-1_0056_61_jpg.jpg?v=1668632547&width=800',
    },
    {
        id: 5,
        name: 'Orange Fantasy',
        price: '',
        image: 'https://overlays.co/cdn/shop/products/Untitled-1_0094_99_jpg_1b2da2c0-c486-401c-95be-7f50a73a5bbc.jpg?v=1668605413&width=800',
      },
      {
        id: 6,
        name: 'White Melody',
        price: '',
        image: 'https://overlays.co/cdn/shop/products/Untitled-1_0079_84_jpg_30aa8775-887d-4bc4-bafe-f9e505ab92d7.jpg?v=1675945257&width=800',
      },
      {
        id: 7,
        name: 'Orange Fantasy',
        price: '',
        image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c88f564777ad4ea2b908af1e00b802ff_9366/Essentials_Single_Jersey_Embroidered_Small_Logo_T-Shirt_Grey_IC9288_21_model.jpg',
      },
      {
        id: 8,
        name: 'Green Leaf',
        price: '',
        image: 'https://overlays.co/cdn/shop/products/DSC09225.jpg?v=1682003388&width=400',
      },
      {
          id: 9,
          name: 'Orange Fantasy',
          price: '',
          image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/52980bff1a494c459f0ffd8380664a32_9366/IM4587_21_model.jpg',
        },
       
    // Add more product objects as needed
  ];


export default function Upcomings() {
    return(
  
 <div className = "upcomings">

    <div className = "frame4">
    <div className = "Offers4 "> Upcomings </div> 
    </div>
    

    <ProductListUpings products={products} />





 </div>

  

    )
}