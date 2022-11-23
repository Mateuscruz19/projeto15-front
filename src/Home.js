import BannerMain from "./assets/imgs/banner1.svg"
import BannerSustenter from "./assets/imgs/Stores.svg"
import { createGlobalStyle } from 'styled-components'
import React from 'react';
import styled from 'styled-components';

export default function Home(){
    return(
        <>
        <GlobalStyle/>
        <Main>
        <Banner1 src={BannerMain}/>
        <BoxProducts>
            <ProductsTitle>Produtos</ProductsTitle>
            <ProdutsConteiner>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
                <ProductBox></ProductBox>
            </ProdutsConteiner>
        </BoxProducts>
        <Banner2 src={BannerSustenter}/>
        </Main>
        </>
    )
}

const GlobalStyle = createGlobalStyle`

a{
    text-decoration:none;
}

`

const Main = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;

`

const Banner1 = styled.img`

    margin-top:15px;
    margin-top:5px;
    border-radius:12px;
    
`

const BoxProducts = styled.div`

    margin-top:15px;
    width:1366px;
    height:768px;
    background-color:#071D41;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:12px;

`
const ProductsTitle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 94px;
    letter-spacing: -0.075em;
    color:#fff;
`
const ProdutsConteiner = styled.div`

    width:1300px;
    height:650px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`
const ProductBox = styled.div`

    width:310px;
    height:200px;
    background-color:#FFF;


`

const Banner2 = styled.img`

    margin-top:15px;
    border-radius:12px;
    
`