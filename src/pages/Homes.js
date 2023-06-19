import ProductList from '../components/ProductList';


const products = [
  {
    id: 1,
    name: 'Orange Fantasy',
    price: 'This is the price of Product 1.',
    image: '/images/tshirt1.png',
  },
  {
    id: 2,
    name: 'White Melody',
    price: 'This is the price of Product 2.',
    image: './images/tshirt2.png',
  },
  {
    id: 3,
    name: 'Orange Fantasy',
    price: 'This is the price of Product 2.',
    image: './images/tshirt3.png',
  },
  {
    id: 4,
    name: 'Green Leaf',
    price: 'This is the price of Product 2.',
    image: './images/tshirt4.png',
  },
  // Add more product objects as needed
];
       
 const Homes = () => {
    return(
   

     <div className = "homepage">

        <div className = "frame">
        <div className = "Offers ">  Offers  </div> 
        </div>
       
        <div className = "offerBox">
         <p className = "spendSave"> Spend & Save </p>
         <div className = " offerBox2"> 
         </div>
        </div>
        
        <div className = " offerBox3">     <p className='Saletext1'>  Enjoy Upto 50% Off  </p>
         <div className = " offerBox4">  <p className='Saletext2'> SALES </p>
         </div>
        </div>
        
        <ProductList products={products} />

      </div>
    )
}

export default Homes;