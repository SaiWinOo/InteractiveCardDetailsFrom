import React from "react";
import styled from "styled-components";
import { MainImg, Container, CardCVC, CardBack, CardFront, CardName, CardNumber, TwoCardsHolder,CardLogo,CardExp, } from "./Site";

function Thankyou({cardCVC,screenWidth, cardHolderName, cardNumber, month, year}) {
    

  const Confirm = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <MainImg  src={screenWidth > 480 ? './images/bg-main-desktop.png' : './images/bg-main-mobile.png'} alt="" />
      <TwoCardsHolder>
        <CardFront src="./images/bg-card-front.png" alt="" />
        <CardLogo src="./images/card-logo.svg"/>
        <CardName>{cardHolderName}</CardName>
        <CardNumber>{cardNumber}</CardNumber>
        <CardExp>{month}/{year}</CardExp>
        <CardBack src="./images/bg-card-back.png" alt="" />
        <CardCVC>{cardCVC}</CardCVC>
      </TwoCardsHolder>
      <Thank>
        <img src="./images/icon-complete.svg" alt="" />
        <div>
        <h1>THANK YOU!</h1>
        <p>We've added you card details</p>
        <button>Continue</button>
        </div>
      </Thank>

    </Container>
  );
}

const Thank = styled.div`
    width: 100%;
    img{
        position: absolute;
        top: 40%;
        right: 36%;
    }
    div{
        text-align: center;
        width: 40%;
        margin-top: 190px;
        @media screen and (max-width: 480px){
            margin: auto;
            position: absolute;
            top: 500px;
            width: 100%;
        }
        h1{
            letter-spacing: 1px;
        }
        p{
            color: gray;
        }
        button{
            background:#7b0e7b ;
            color: white;
            width: 80%;
            padding: 7px 15px;
            border-radius: 15px;
            &:hover{
                background: #ca51ca;
            }
        }
    }
`


export default Thankyou;
