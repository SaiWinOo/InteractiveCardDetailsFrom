import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Site({cardCVC,screenWidth, setCardCVC, cardHolderName, setCardHolderName, cardNumber, setCardNumber, month, setMonth, year, setYear}) {
  

  const Confirm = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <MainImg  src={screenWidth > 480 ? './images/bg-main-desktop.png' : './images/bg-main-mobile.png'} />
      <TwoCardsHolder>
        <CardFront src="./images/bg-card-front.png" alt="" />
        <CardLogo src="./images/card-logo.svg"/>
        <CardName>{cardHolderName}</CardName>
        <CardNumber>{cardNumber}</CardNumber>
        <CardExp>{month}/{year}</CardExp>
        <CardBack src="./images/bg-card-back.png" alt="" />
        <CardCVC>{cardCVC}</CardCVC>
      </TwoCardsHolder>
      <Form>
        <form action="" className="form-group">
          <label htmlFor="CardHolderName">CARDHOLDER NAME</label>
          <input
            type="text"
            className="mb-2 form-control"
            onChange={(e) => setCardHolderName(e.target.value.toUpperCase())}
            id="CardHolderName"
            placeholder="e.g. Kevin Dennie"
          />
          <label htmlFor="CardNumber">CARD NUMBER</label>
          <input
            type="tel"
            onChange={(e)=> setCardNumber(e.target.value)}
            className="mb-2 form-control"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="19"
            id="CardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
          />
          <div className="d-flex">
            <div style={{display:'flex', flexDirection:'column'}}>
          <label htmlFor="Month">Month</label>
          <Month
            type="tel"
            inputMode="numeric"
            maxLength="2"
            id="Month"
            onChange={(e)=> setMonth(e.target.value)}
            className="form-control"
          />
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
          <label htmlFor="Year">Year</label>
          <Year
            type="tel"
            inputMode="numeric"
            maxLength="2"
            onChange={(e)=> setYear(e.target.value)}
            id="Year"
            className="form-control mx-2"
          />
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
          <label htmlFor="CVC">CVC</label>
          <input
            type="tel"
            onChange={(e)=> setCardCVC(e.target.value)}
            inputMode="numeric"
            maxLength="3"
            id="CVC"
            className="form-control"
          />
          </div>
          
          </div>

          <ConfrimBtn
            className="w-100 mt-3 btn-lg"
            onClick={Confirm}
            type="submit"
          >
            <Link to='/thankyou'>Confrim</Link>
          </ConfrimBtn>
        </form>
      </Form>

    </Container>
  );
}
export const Year = styled.input`
  width: 100px;
  @media screen and(max-width: 480px){
    width: 80px;
  }
`
export const Month = styled.input`
  width: 100px;
  @media screen and (max-width: 480px){
    width: 80px;
  }
`
export const CardLogo = styled.img`
  color: white;
  position: absolute;
  top: 5%;
  left: 30px;
  @media screen and (max-width: 480px){
    left: 316px;
    z-index: 13;
    width: 69px;
    top: -21%;
}
  
`
export const CardCVC = styled.div`
  color: white;
  position: absolute;
  bottom: 19.5%;
  right: -9%;
  @media screen and (max-width: 480px){
    top: -156px;
    left: 572px;
    color: white;
    font-size: 1rem;
    z-index: 10;
  }
`
export const CardExp = styled.div`
  color: white;
  position: absolute;
  font-size: 1.2rem;
  bottom: 58%;
  right: 55px;
  @media screen and (max-width: 480px){
    top: -8px;
    left: 511px;
    color: white;
    font-size: 1rem;
    z-index: 10;
}
` 
export const CardNumber = styled.p`
  font-size: 1.5rem;
  color: white;
  position: absolute;
  letter-spacing: 1px;
  bottom: 65%;
  left: 40px;
  @media screen and (max-width: 480px){
    top: -39px;
    left: 314px;
    color: white;
    font-size: 1rem;
    z-index: 10;
    width: 100%;
  }
`;
export const CardName = styled.p`
  font-size: 1.25rem;
  color: white;
  position: absolute;
  bottom: 54%;
  letter-spacing: 1px;
  left: 15px;
  @media screen and (max-width: 480px){
    top: -11px;
    left: 314px;
    color: white;
    font-size: 1.1rem;
    z-index: 10;
    width: 100%;
  }
`;
export const ConfrimBtn = styled.button`
  background: #4e1e4e;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.25rem;
  &:hover {
    background: white;
    border: 2px solid #4e1e4e;
    color: #4e1e4e;
    a{
      color: #4e1e4e;
    }
  }
  a{
    text-decoration: none;
    color: white;
  }
`;
export const Form = styled.div`
  min-width: 300px;
  width: 400px;
  @media screen and (max-width: 480px){
    position: absolute;
    top: 400px;
    width: 300px;
    z-index: 15;
  }
`;
export const CardFront = styled.img`
 
 @media screen and (max-width: 480px){
  left: 290px;
  position: relative;
  top: -127px;
  z-index: 10;
  width: 300px;
 }
`;
export const CardBack = styled.img`
  position: absolute;
  left: 100px;
  top: 300px;
  @media screen and (max-width: 480px){
   top: -220px;
   width: 300px;
   left: 350px;
}
`;
export const TwoCardsHolder = styled.div`
  position: relative;
  min-height: 540px;
  top: 0;
  left: -320px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const MainImg = styled.img`
  width: 30%;
  height: 100vh;
  @media screen and (max-width: 480px){
    width: 100%;
    height: 30%;
  }

`

export default Site;
