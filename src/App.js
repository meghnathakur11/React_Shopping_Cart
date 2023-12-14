import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductLists'
import React,{useState} from 'react'
import Footer from './components/Footer'
import AddItem from './components/AddItemform';

function App() {
  const products =[
    {
      price : 5999,
      name : "Puma Shoes",
      quantity : 0,
    },
    {
      price : 1387,
      name : "Knit top",
      quantity : 0,
    },
    {
      price : 300,
      name : "Socks",
      quantity : 0,
    }
  ]
  let[productlist,setProductList]=useState(products);
  let[totalAmount , setTotalAmount] = useState(0);

  const Qtincrement = (index)=>{
    let newProductList = [...productlist];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const Qtdecrement = (index)=>{
    let newProductList = [...productlist];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity >0 ){
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const resetWork = ()=>{
    let newProductList = [...products];
    let newTotalAmount = totalAmount;
    newProductList.forEach((item)=>{
      item.quantity=0;
    });
    newTotalAmount = 0;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }


  const removeItems = (index)=>{
    let newProductList = [...productlist];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name , price)=>{
    let newProductList = [...productlist];
    newProductList.push({
      price : price,
      name : name,
      quantity : 0,
    });
    setProductList(newProductList);
  }


  return (
    <>
    <Navbar/>

    <main className='container mt-4' >
      <AddItem addItem={addItem}/>
      <ProductList productlist={productlist} Qtincrement = {Qtincrement} Qtdecrement = {Qtdecrement} removeItems = {removeItems}/>
    </main>

    <Footer totalAmount={totalAmount} resetWork={resetWork}/>
    </>
  );
}

export default App;
