//import Header from "../components/Header"
import ProductListS from '../components/ProductListS';

const products = [
    {
      id: 1,
      name: 'Orange Fantasy',
      price: '£30',
      image: 'https://images.asos-media.com/products/nike-club-t-shirt-in-dark-green/203622381-1-green?$n_750w$&wid=750&fit=constrain',
    },
    {
      id: 2,
      name: 'White Melody',
      price: '£20',
      image: 'https://images.asos-media.com/products/nike-club-t-shirt-in-purple/203621625-1-purple?$n_750w$&wid=750&fit=constrain',
    },
    {
      id: 3,
      name: 'Orange Fantasy',
      price: '£40',
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23ffb911-8e3a-4106-b2ce-a194e9d72915/jordan-dri-fit-sport-t-shirt-ppjnDZ.png',
    },
    {
      id: 4,
      name: 'Green Leaf',
      price: '£20',
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/902eebe2-8842-4344-aa65-f4a74370d0c2/jordan-sport-85-graphic-t-shirt-0qnzqX.png',
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