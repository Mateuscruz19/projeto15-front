import React from 'react';
import styled from 'styled-components';
import LogoRedVersion from "./assets/imgs/NewLogo.png"
import { createGlobalStyle } from 'styled-components'
import Glasses from "./assets/imgs/Glasses.png"
import UserPic from "./assets/imgs/User.png"
import Shop from "./assets/imgs/Shop.png"
import QRcode from "./assets/imgs/qrcode.png"
import Play from "./assets/imgs/googleplay.png"
import { Link } from 'react-router-dom';
import AppStore from "./assets/imgs/appstore.png"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AuthProvider from './context.js/auth';
import ProductPage from './ProductPage';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './context.js/auth.js';

export default function List(){

    
    const [Products,setProducts] = useState([])
    const { setUser,User } = useContext(AuthContext);

    
    useEffect(()=> {

        axios.get("http://localhost:5000/products")
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err) =>{
            console.log(err.response.data)
        })
    },[])



    return(
        <>
        
        </>
    )
}

