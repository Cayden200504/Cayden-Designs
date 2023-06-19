import ProductListMWC from '../components/ProductListMWC';

const products = [
    {
      id: 1.0,
      name: 'Orange Fantasy1',
      price: 'This is the price of Product 1.',
      image: 'https://overlays.co/cdn/shop/products/DSC00747.jpg?v=1680535031&width=300',
    },
    {
      id: 2.0,
      name: 'White Melody',
      price: 'This is the price of Product 2.',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b26ddccc982436783ca8631df8488c5_9366/Adicolor_Essentials_T-Shirt_Pink_IJ9743_21_model.jpg',
    },
    {
      id: 3.0,
      name: 'Orange Fantasy',
      price: 'This is the price of Product 2.',
      image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/194c553968014156bfe9ce126a6278fd_9366/island-club-graphic-t-shirt.jpg',
    },
    {
      id: 4.0,
      name: 'Green Leaf',
      price: 'This is the price of Product 2.',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf94eb6698c3436b81afaefc00e39181_9366/Adicolor_Essentials_T-Shirt_White_IA6461_21_model.jpg',
    },
    {
        id: 5.0,
        name: 'Orange Fantasy',
        price: 'This is the price of Product 1.',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/57c01c70ebf64235a976af46013977ba_9366/Oversized_T-Shirt_Purple_IQ3401_25_model.jpg',
      },
      {
        id: 6.0,
        name: 'White Melody',
        price: 'This is the price of Product 2.',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/04e526c5e3a9437db0e2af00008b10d3_9366/adicolor-classics-long-sleeve-top.jpg',
      },
      {
        id: 7.0,
        name: 'Orange Fantasy',
        price: 'This is the price of Product 2.',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/dc424ae4c48745efb9d1af0300a2ee22_9366/premium-essentials-t-shirt.jpg',
      },
      {
        id: 8.0,
        name: 'Green Leaf',
        price: 'This is the price of Product 2.',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7326828e4abe4f448151af3200d94b33_9366/adicolor-neuclassics-t-shirt.jpg',
      },
    // Add more product objects as needed
  ];

export default function Women() {
    return(
      
  <div className = "women">

    <div className = "frame2">
     <div className = "Offers2 "> Women  </div> 
    </div>
     
    <ProductListMWC products={products} />

  </div>
    )
}