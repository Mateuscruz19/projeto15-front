import BannerMain from "./assets/imgs/banner1.png"
import BannerSustenter from "./assets/imgs/Stores.png"
import { createGlobalStyle } from 'styled-components'
import React from 'react';
import styled from 'styled-components';
import MockData from "./MockData.js"
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { AuthContext } from './context.js/auth.js';
import Swal from 'sweetalert2'

export default function Home(){
    const [Products,setProducts] = useState([])
    const { setUser,User,Env } = useContext(AuthContext);

    useEffect(()=> {

        axios.get(`${Env}/products`)
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err) =>{
            console.log(err.response.data)
        })
    },[])


    useEffect(() => {
        if(localStorage.getItem("token")){
         setUser({
             "token":localStorage.getItem("token"),
             "nome":localStorage.getItem("nome")
         })
        }
     },[])

    return(
        <>
        <GlobalStyle/>
        <Main>
        <Banner1 src={BannerMain}/>
        <BoxProducts>
            <ProductsTitle>Produtos</ProductsTitle>
            <ProdutsConteiner>
                {Products.map((p) => <Link to="./ProductPage" state={{nome:p.nome,preco:p.valor,imagem:p.url}}>
                 <ProductBox>
                    <img width="100px" src={p.url}/>
                    <p>{p.nome}</p>
                    <span>R$ {p.valor.replace(".",",")}</span>
                </ProductBox>
                </Link>)}
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
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:12px;
    cursor: pointer;

    p{

    margin-top:10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.075em;
    color:#000;

    }

    span{
    margin-top:10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: -0.075em;
    color:#FF1616;
    }

`
const CamisaBrasil = styled.img`

    width:20px;
    height:20px;

`

const Banner2 = styled.img`

    margin-top:15px;
    border-radius:12px;
    
`