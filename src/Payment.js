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
import Swal from 'sweetalert2'

export default function Payment(){

    let navigate = useNavigate();
    const [Cep, setCep] = useState("");
    const [Numero, setNumero] = useState(0)
    const [Rua, setRua] = useState("")
    const [Cartao, setCartao] = useState(0)
    const [Validade, setValidade] = useState(0)
    const [codCartao, setCodigo] = useState(0)
    const { setUser,User,Env,setCode } = useContext(AuthContext);


   function Finish(){

    const Auth = {
        "headers": { "Authorization": `Bearer ${User.token}` }
    }

    const obj = {
        "cep":Cep,
        "numero":Numero,
        "rua":Rua,
        "cartao":Cartao,
        "validade":Validade,
        "codCartao":codCartao
    }

            axios.post(`${Env}/payment`,obj,Auth)
            .then((res) => {
                setCode(res.data)
                console.log(obj)
                navigate("/Sucess")
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
                Swal.fire("Confirma os dados novamente,e verifique se estão todos corretos.")
                return
            })
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
            <ButtonCep maxLength={8} value={Cep} onChange={(C)=>setCep(C.target.value)} placeholder='Cep'></ButtonCep>
            <SubTitle>Rua Testando Testado</SubTitle>
            <ButtonRua placeholder='Rua' value={Rua} onChange={(R)=>setRua(R.target.value)}></ButtonRua>
            <SubTitle>444</SubTitle>
            <ButtonNumero maxLength={3} value={Numero} onChange={(N)=>setNumero(N.target.value)} placeholder='Numero'></ButtonNumero>
            </ConteinerEntrega>
            <img src={Terms}/>
            <ConteinerPagamento>
            <BoxTitle>Detalhes do Pagamento</BoxTitle>
            <SubTitle>1111111111111111</SubTitle>
            <ButtonRua maxLength={16} value={Cartao} onChange={(Ca)=>setCartao(Ca.target.value)} placeholder='Numero do Cartao'></ButtonRua>
            <SubTitle>0120</SubTitle>
            <ButtonNumero maxLength={4} value={Validade} onChange={(V)=>setValidade(V.target.value)} placeholder='Validade'></ButtonNumero>
            <SubTitle>444</SubTitle>
            <ButtonNumero maxLength={3} value={codCartao} onChange={(cod)=>setCodigo(cod.target.value)} placeholder='Codigo'></ButtonNumero>
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