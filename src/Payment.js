import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './context.js/auth.js';
import Logo from "./assets/imgs/LogoRedVersion.png"
import Go from "./assets/imgs/Google.png"
import { Link } from 'react-router-dom';
import axios from "axios";
import Terms from "./assets/imgs/terms.png"

export default function Payment(){

    let navigate = useNavigate();
    
   function Finish(){
        navigate("/Sucess")
    }

    return(
    <>
    <Main>
        <ConteinerAll>
            <Title>Pagamento</Title>
            <Total>Total:R$ 300</Total>
            <ConteinerEntrega>
            <BoxTitle>Detalhes da entrega</BoxTitle>
            <SubTitle>44444444</SubTitle>
            <ButtonCep maxLength={8} placeholder='Cep'></ButtonCep>
            <SubTitle>Rua Testando Testado</SubTitle>
            <ButtonRua placeholder='Rua'></ButtonRua>
            <SubTitle>444</SubTitle>
            <ButtonNumero maxLength={3} placeholder='Numero'></ButtonNumero>
            </ConteinerEntrega>
            <img src={Terms}/>
            <ConteinerPagamento>
            <BoxTitle>Detalhes do Pagamento</BoxTitle>
            <SubTitle>1111111111111111</SubTitle>
            <ButtonRua maxLength={16} placeholder='Numero do Cartao'></ButtonRua>
            <SubTitle>0120</SubTitle>
            <ButtonNumero maxLength={4} placeholder='Validade'></ButtonNumero>
            <SubTitle>444</SubTitle>
            <ButtonNumero maxLength={3} placeholder='Codigo'></ButtonNumero>
            </ConteinerPagamento>
            <FinalizarCompra onClick={Finish}>Finalizar Compra</FinalizarCompra>
        </ConteinerAll>
    </Main>
    </>
    )
}

const Main = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;

    p{

    font-family: "Open Sans",sans-serif;
    }
`

const ConteinerAll = styled.div`

    margin-top:20px;
    display:flex;
    align-items:center;
    flex-direction:column;

`

const Title = styled.p`

    margin-top:40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: blue;
    flex: none;
    order: 0;
    flex-grow: 0;
    
`

const BoxTitle = styled.p`

    font-family: "Open Sans",sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    margin-bottom:15px;
`

const SubTitle = styled.p`

    margin-bottom:5px;
    font-family: "Open Sans",sans-serif;
    font-style: normal;
`

const Total = styled.p`

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    margin-bottom:40px;

`

const ConteinerEntrega = styled.div`

    width:600px;
    height:250px;
    display:flex;
    flex-direction:column;

`

const ConteinerPagamento = styled.div`

    width:600px;
    height:300px;
    display:flex;
    flex-direction:column;
`

const ButtonCep = styled.input`

    box-sizing: border-box;
    width: 183px;
    height: 43px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    margin-bottom:15px;

    &::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    flex: none;
    order: 0;
    flex-grow: 0;
    }

`

const ButtonRua = styled.input`

    box-sizing: border-box;
    width: 573px;
    height: 43px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    margin-bottom:15px;


    &::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    flex: none;
    order: 0;
    flex-grow: 0;
    }

`


const ButtonNumero = styled.input`

    box-sizing: border-box;
    width: 100px;
    height: 43px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    margin-bottom:15px;


    &::placeholder{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    flex: none;
    order: 0;
    flex-grow: 0;
    }

`

const FinalizarCompra = styled.button`

    box-sizing: border-box;
    width: 575px;
    height: 56px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    margin-bottom:15px;
    background-color: #2688FF;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;

    &:hover{
        background-color:black;
        color:#FFF;
    }
`