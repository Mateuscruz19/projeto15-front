import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context.js/auth.js';
import Logo from "./assets/imgs/LogoRedVersion.png"
import Go from "./assets/imgs/Google.png"
import { Link } from 'react-router-dom';
import axios from "axios";
import QRcode from "./assets/imgs/qrcode.png"

export default function Sucess(){
    return(
        <>
        <Main>
            <Title>sucesso!</Title>
            <Title>Seu pedido foi processado com sucesso e jaja saira para entrega.</Title>
            <NumberRequest>Pedido:1287312</NumberRequest>
            <NumberRequest>Acompanhe seu pedido pelo QRcode abaixo.</NumberRequest>
            <img src={QRcode} width={"300px"}/>
            <Link to="/">
            <ButtonReturn>Voltar a home</ButtonReturn>
            </Link>
            
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

const Title = styled.p`

    margin-top:40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: green;
    flex: none;
    order: 0;
    flex-grow: 0;
    
`

const NumberRequest = styled.p`

    margin-top:40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: black;
    flex: none;
    order: 0;
    flex-grow: 0;
`

const ButtonReturn = styled.button`

    margin-top:15px;
    background-color:#EDE24A;
    width:192px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: "Open Sans",sans-serif;
    border-radius:7px;
    border:none;
    color: #000;
    cursor:pointer;

    &:hover{
        background-color:black;
        color:#FFF;
    }

`