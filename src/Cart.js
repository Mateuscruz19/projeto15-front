import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate, useOutlet } from 'react-router-dom';
import { AuthContext } from './context.js/auth.js';
import Logo from "./assets/imgs/LogoRedVersion.png"
import Go from "./assets/imgs/Google.png"
import { Link } from 'react-router-dom';
import axios from "axios";


export default function Cart(){

    const [Buy,setBuy] = useState([])
    const { setUser,User,Env } = useContext(AuthContext);
    const [Att, setAtt] = useState(0)
    const [Total, setTotal] = useState(0)
    let navigate = useNavigate();

    useEffect(() => {

        const Auth = {
            "headers": { "Authorization": `Bearer ${User.token}` }
        }

        axios.get(`${Env}/cart`,Auth)
        .then((res) =>{
            setBuy(res.data)

            const biggestNames = res.data
            .map(person => Number(person.valor));
            console.log(biggestNames)
            var soma = 0;
            for(var i = 0; i < biggestNames.length; i++) {
             soma += biggestNames[i];
                }
            setTotal(soma)
            console.log(res.data)
            console.log("Funcionou")
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    },[Att])

   


    function DeleteProduct(props){
        
        const Auth = {
            "headers": { "Authorization": `Bearer ${User.tokenBR}` }
        }

        axios.delete(`${Env}/cart/${props._id}`,{},Auth)
        .then((res) => {
            console.log(res.data)
            alert(`O produto ${props.nome} foi deletado com sucesso.`)
            setAtt(Att+1)
        })
        .catch((err) => {
            console.log(err)
            console.log(err.response)
        })
    }

    function MoveOn(){
            if(Buy.length === 0){
                alert("Seu carrinho esta vazio")
                return
            }
            navigate("/Payment")
    }

    return(
        <>
        <Main>
            <TitleAlt>
                Seu Carrinho De Compras
            </TitleAlt>
            <CartItens>
                {Buy.map((i) => <CartItemOnly>
                    <Green>
                    <img width="120px" src={i.url}/>
                    <p>{i.nome}</p>
                    </Green>
                    <Blue>
                        <DeleteButton onClick={() => DeleteProduct(i)}>X</DeleteButton>
                        <Itemprice>R$: {i.valor}</Itemprice>
                    </Blue>
                    </CartItemOnly>
                    )}
            </CartItens>
            <Left>
            <Pricebox>
                <PriceYet>Total: R$ {Total}</PriceYet>
                <p>Confira mais informações ao finalizar a compra</p>
                <Link to="/">
                    <ButtonReturn>Compre mais itens</ButtonReturn>
                    </Link>
                        <ButtonFinalized onClick={MoveOn}>Finalize o carrinho</ButtonFinalized>
            </Pricebox>
            </Left>
        </Main>
        </>
    )
}

const Main = styled.main`

    display:flex;
    flex-direction:column;
    align-items:center;
    
    p{
    font-family: "Open Sans",sans-serif;
    }


`

const CartItens = styled.div`

    margin-top:20px;
    display:flex;
    flex-direction:column;

`

const CartItemOnly = styled.div`

    width:1000px;
    height:130px;
    display:flex;
    margin-top:20px;

`

const Green = styled.div`

    display:flex;
    flex-direction:row;
    width:700px;
    height:130px;

`


const Blue = styled.div`

    display:flex;
    flex-direction:row;
    width:300px;
    height:130px;

`

const Itemprice = styled.p`

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    margin-left:10px;

`

const Left = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:1000px;
    
    p{

    font-family: "Open Sans",sans-serif;
    }


`

const TitleAlt = styled.p`

    margin-top:40px;
    font-family: "Open Sans",sans-serif;
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
const DeleteButton = styled.button`

    background-color:#339a0b;
    width:100px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: "Open Sans",sans-serif;
    border-radius:7px;
    border:none;
    color: #FFFF;
    cursor:pointer;
    margin-bottom:15px;
    margin-left:50px;

    &:hover{
        background-color:black;
        color:#FFF;
    }
`


const Pricebox = styled.div`

    margin-top:20px;
    width:500px;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;

    p{
        font-family: 'Open Sans', sans-serif;
    }

`
const PriceYet = styled.p`

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 0.01em;
    text-transform: capitalize;

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

const ButtonFinalized = styled.button`

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