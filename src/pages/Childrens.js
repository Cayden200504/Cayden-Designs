import ProductListMWC from '../components/ProductListMWC';

const products = [
    {
      id: 1,
      name: 'Orange Fantasy1',
      price: '£28',
      image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c516686463c346d18550af05a78f4da9_9366/tiberio-3-stripes-colorblock-cotton-t-shirt-kids.jpg',
    },
    {
      id: 2,
      name: 'White Melody',
      price: '£40',
      image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5b7b9bcaa0745828d30af6b00a2256d_9366/adicolor-t-shirt.jpg',
    },
    {
      id: 3,
      name: 'Orange Fantasy',
      price: '£30',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340288f360c84774a3b6af9d01458eab_9366/adidas_x_LEGOr_Graphic_T-Shirt_Black_IB9157_21_model.jpg',
    },
    {
      id: 4,
      name: 'Green Leaf',
      price: '£29',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f67b77d72dd459eab27af5400ff533a_9366/Future_Icons_3-Stripes_T-Shirt_White_HR6309_21_model.jpg',
    },
    {
        id: 5,
        name: 'Orange Fantasy',
        price: '£15',
        image: 'https://assets.adidas.com/images/w_320,h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7ef4d64083a418eb07faf5400fec2d0_9366/HR6306_21_model.jpg',
      },
      {
        id: 6,
        name: 'White Melody',
        price: '£20',
        image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/1909b7e7d4df4ec0a6c6af4d008d8a7d_9366/HR6295_21_model.jpg',
      },
      {
        id: 7,
        name: 'Orange Fantasy',
        price: '£30',
        image: 'https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/eee8cc776b1b4b80b7f3af4e0025b5e3_9366/IC6264_21_model.jpg',
      },
      {
        id: 8,
        name: 'Green Leaf',
        price: '£10',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf70e4175a1a47efa671af8c009f7c61_9366/adidas-adventure-t-shirt.jpg',
      },
    // Add more product objects as needed
  ];

export default function Childrens() {
    return(
        <div className = "children">

        <div className = "frame3">
         <div className = "Offers3 "> Children  </div> 
        </div>
        
        <ProductListMWC products={products} />
    
      </div>

    )
}