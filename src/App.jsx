import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import './App.css'
import NavbarAndBanner from './NavbarAndBanner/NavbarAndBanner'
import SearchBar from './SearchBar/SearchBar'
import CarsDataFetch from './functional_Componenet/CarsDataFetch/CarsDataFetch'
import Cart from './functional_Componenet/cart/Cart'
import ConfirmToBuy from './functional_Componenet/ConfrimBuy/ConfirmToBuy';

function App() {
  const [cartsCar,setCartsCar]=useState([]);
  const [confirm,setConfirm]=useState([])


//function for smoothScroll from banner to car area

const handToScroll=()=>{
  window.scrollTo({top:1000,behavior:'smooth'})
}

const handleToConfirm=(car)=>{
  const confirm=cartsCar.filter(i=>i.title!=car.title)
  setCartsCar(confirm)
  confirmAdd(car)
}
const confirmAdd=(car)=>{
  const array=[...confirm,car]
  setConfirm(array)
}

const handleToBuy=(cars)=>{
  // const isExisted=cartsCar.find(item=>item.title==cars.title)
  const isExited=cartsCar.find(item=>item.title==cars.title)
  if(!isExited){
  const setcart=[...cartsCar,cars]
  setCartsCar(setcart)

  }else{
    return toast.warning('you can not select more than 1'),{
      position: "top-center",
      theme: "colored",
    }

  }

}



  return (
    <>
    <div className='max-w-[1300px] m-auto '>
    <NavbarAndBanner handToScroll={handToScroll} />
    <SearchBar />

    <CarsDataFetch handleToBuy={handleToBuy} ></CarsDataFetch>
    <Cart cartsCar={cartsCar} handleToConfirm={handleToConfirm}></Cart>

    <ConfirmToBuy confirm={confirm}  />

    <ToastContainer  />
    </div>
    </>
  )
}

export default App
