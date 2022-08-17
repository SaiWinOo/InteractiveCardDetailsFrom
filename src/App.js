import React,{useEffect, useState} from 'react'
import Site from './components/Site';
import Thankyou from './components/ThankYou';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [cardHolderName, setCardHolderName] = useState("Jane");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState('09')
  const [year, setYear] = useState('24')
  const [cardCVC , setCardCVC] = useState('343')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize', windowWidth)
  },[window.innerWidth])

  const windowWidth = () =>{
    setScreenWidth(window.innerWidth)
  }
  console.log(screenWidth)
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Site
        screenWidth = {screenWidth}
         cardCVC = {cardCVC} setCardCVC = {setCardCVC}
         cardNumber = {cardNumber} setCardNumber = {setCardNumber}
         month = {month} setMonth = {setMonth}
         year = {year} setYear = {setYear}
         cardHolderName = {cardHolderName} setCardHolderName = {setCardHolderName}
        />} />
        <Route path='/thankyou' element = {<Thankyou
        screenWidth = {screenWidth}
        cardCVC = {cardCVC} setCardCVC = {setCardCVC}
        cardNumber = {cardNumber} setCardNumber = {setCardNumber}
        month = {month} setMonth = {setMonth}
        year = {year} setYear = {setYear}
        cardHolderName = {cardHolderName} setCardHolderName = {setCardHolderName}
        />} />
      </Routes>
    </div>
  )
}

export default App;