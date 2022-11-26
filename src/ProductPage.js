import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Like from "./assets/imgs/likes.png"
import Star from "./assets/imgs/star.png"
import YellowStar  from "./assets/imgs/yellowstar.png"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context.js/auth.js';

export default function ProductPage(props){

    const [Price, setPrice] = useState("100")
    const [Image, setImage] = useState("https://media.istockphoto.com/id/924949200/vector/404-error-page-or-file-not-found-icon.jpg?s=170667a&w=0&k=20&c=gsR5TEhp1tfg-qj1DAYdghj9NfM0ldfNEMJUfAzHGtU=")
    const [Name, setName] = useState("404 NOT FOUND")
    const location = useLocation()
    const { setUser,User } = useContext(AuthContext);
    let navigate = useNavigate();
    console.log(location)

    function CardAdd(){
        if(!localStorage.getItem("tokenBR")){
            alert("Voce precisa estar logado para adicionar itens no carrinho.")
            return         }
    }


    useEffect(()=>{

        if(location.state){
            setPrice(location.state.preco)
            setName(location.state.nome)
            setImage(location.state.imagem)
            console.log(setPrice)
        }
    },[])

    return(
        <>
        <Main>
             <ConteinerAll>
                <ConterinerLeft>
                    <IniDesc>{Name}</IniDesc>
                    <PicProduct src={Image}/>
                    <LowBarLike src={Like}/>
                    </ConterinerLeft>
                <ConteinerRight>
                    <TitleProduct>{Name}</TitleProduct>
                    <Subprice>De:R${30+Number(Price)}</Subprice>
                    <PriceYet><span>Por: </span>R${Price}</PriceYet>
                    <Cartao>em até 3x de <span>R${(Number(Price)/3).toFixed(2)} </span>no cartão.</Cartao>
                    <ConteinerStars>
                        <img src={YellowStar}/>
                        <img src={YellowStar}/>
                        <img src={YellowStar}/>
                        <img src={YellowStar}/>
                        <img src={Star}/>
                    </ConteinerStars>
                    <BuyButton onClick={CardAdd}>Colocar no carrinho</BuyButton>
                    <p>Voce precisa esta logado pra colocar coisas no carrinho!</p>
                    
                    <Link to="/Login">
                     <LoginButton>Login</LoginButton>
                    </Link>

                </ConteinerRight>
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

const ConteinerAll = styled.main`

    margin-top:30px;
    width:1400px;
    height:800px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

`
const IniDesc = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.075em;
    margin-right:15px;
    text-decoration:underline;
    color:gray;

`

const ConterinerLeft = styled.div`

    width:700px;
    height:800px;
    display:flex;
    flex-direction:column;


`
const PicProduct = styled.img`

    margin:30px;
    width:600px;
    height:600px;

`
const LowBarLike = styled.img`

    width:350px;
    margin-left:170px;
`

const ConteinerRight = styled.div`

    width:700px;
    height:800px;
    display:flex;
    flex-direction:column;

`
const Subprice = styled.p`

    margin-top:30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color:gray;
    text-decoration: line-through;
`

const PriceYet = styled.p`

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 0.01em;
    text-transform: capitalize;

`

const Cartao = styled.p`

    font-family: "Open Sans",sans-serif;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;

    span{
        color: #339a0b;
    }
`


const ConteinerStars = styled.div`

    width:150px;
    height:25px;
    margin-top:20px;

    img{
        width:30px;
        height:30px;
    }
`


const TitleProduct = styled.p`

    font-family: "Open Sans",sans-serif;
    font-weight: 600;
    font-style: normal;
    line-height: 1.2;
    margin: 0;
    font-size: 32px;
    margin-top:50px;

`

const BuyButton = styled.button`

    margin-top:15px;
    background-color:#339a0b;
    width:192px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: "Open Sans",sans-serif;
    border-radius:7px;
    border:none;
    color: #FFFF;
    cursor:pointer;
    margin-bottom:15px;

    &:hover{
        background-color:black;
        color:#FFF;
    }
`

const LoginButton = styled.button`

    margin-top:15px;
    background-color:blueviolet;
    width:192px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: "Open Sans",sans-serif;
    border-radius:7px;
    border:none;
    color: #FFFF;
    cursor:pointer;

`