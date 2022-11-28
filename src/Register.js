import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context.js/auth.js';
import Logo from  "./assets/imgs/NewLogo.png"
import { Link } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2'

export default function Register(){

    const [Loading, setLoading] = useState(false)
    const [NameUser, setName] = useState("")
    const [EmailUser, setEmail] = useState("")
    const [SenhaUser, setSenha] = useState("")
    const [ConfirmSenhaUser, setConfirm] = useState("")

    const [SignUser,SetSignUser] = useState({})


    const { setUser,Env } = useContext(AuthContext);
    let navigate = useNavigate();

    function IntroSite(){
        if(NameUser === "" || EmailUser === "" || SenhaUser === "" || ConfirmSenhaUser === ""){
            return Swal.fire("Tenha certeza que preencheu todos os campos")
        }

        const obj = { nome: NameUser, email: EmailUser,  senha: SenhaUser, confirmSenha: ConfirmSenhaUser
        }

        SetSignUser(obj)
        axios.post(`${Env}/signup`,obj)
        .then((res) =>{
            console.log("Cadastro concluido")
            console.log(res)
            Swal.fire("Registrado com sucesso,agora logue para poder comprar a vontade :D")
            navigate("/Login")
        })
        .catch((err) => {
            console.log(err.response.data)
            console.log(err)
        })
    }
  
    return(
        <>
        <GlobalStyle/>
        <Background>
                <LogoA width={"150px"} src={Logo} alt="Logo"></LogoA>
                <ConteinerTop>
                    <LoginText>Registro</LoginText>
                    <LoginDescription>Coloque seus dados para se cadastrar no site.</LoginDescription>
                </ConteinerTop>
                <ContainerBot>
                    <TextPass>Nome</TextPass>
                    <Senha placeholder='Nome' value={NameUser} onChange={N => setName(N.target.value)}></Senha>
                    <TextEmail>Email</TextEmail>
                    <Email placeholder='E-mail' value={EmailUser} onChange={E => setEmail(E.target.value)}></Email>
                    <TextPass>Senha</TextPass>
                    <Senha placeholder='Senha' type="password" value={SenhaUser} onChange={S => setSenha(S.target.value)}></Senha>
                    <TextPass>Confirme a senha</TextPass>
                    <Senha placeholder='Confirme a senha' type="password" value={ConfirmSenhaUser} onChange={C => setConfirm(C.target.value)}></Senha> 
                <Entrar onClick={IntroSite}><p>Registrar-se</p></Entrar>
                <Link to="/Login" disabled={Loading ? true : false}>
                <RegisterBox>Já tem uma conta?<span>Logue!</span></RegisterBox>
                </Link>
                </ContainerBot>
            </Background>
        </>
    )
} 


const GlobalStyle = createGlobalStyle`
body {
    background: #FFFFFF;
}
a{
    text-decoration:none;
}
`

const Background = styled.main`

    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-top:50px;

`

const LogoA = styled.img`

    width:250px;
    margin-top:-55px;
`
const ConteinerTop = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 330px;
    height: 71px;

`
const LoginText = styled.p`

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

const LoginDescription = styled.p`

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    flex: none;
    order: 1;
    flex-grow: 0;

`

const ContainerBot = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    margin-top:10px;

`

const TextEmail = styled.p`

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #344054;
flex: none;
order: 0;
flex-grow: 0;
`
const TextPass = styled.p`

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 8px;
margin-top:10px;

`


const Email = styled.input`

    box-sizing: border-box;
    width: 327px;
    height: 44px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;


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


const Senha = styled.input`

    box-sizing: border-box;
    width: 327px;
    height: 44px;
    border: 1px solid #D0D5DD;
    border-radius: 8px;


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


const Entrar = styled.button`

    margin-top:20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 327px;
    height: 44px;
    background: #FF1616;
    border-radius: 8px;
    cursor: pointer;

    p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    }

`


const RegisterBox = styled.p`

    margin-top:15px;
    width: 327px;
    height: 21px;
    left: 24px;
    top: 694px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #344054;
    cursor: pointer;

    span{
        color:#E2CAFC;
    }

    &:hover{
        text-decoration: underline;
        text-decoration-color:#5429FF;
    }
`