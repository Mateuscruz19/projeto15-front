import React from 'react';
import styled from 'styled-components';
import Logo from "./assets/imgs/Logo.png";
import LogoMini from "./assets/imgs/LogoMiniSize.png"
import LogoRedVersion from "./assets/imgs/LogoRedVersion.png"
import { createGlobalStyle } from 'styled-components'
import Glasses from "./assets/imgs/Glasses.png"
import UserPic from "./assets/imgs/User.png"
import Shop from "./assets/imgs/Shop.png"
import QRcode from "./assets/imgs/qrcode.png"
import Play from "./assets/imgs/googleplay.png"
import AppStore from "./assets/imgs/appstore.png"

export default function Principal(){
    return(
        <>
        <GlobalStyle/>
        <TopLine>

            <TopLineConteiner>
            <TopLeft>
            <p>Central do vendedor</p>
            <p>Baixe o app</p>
            </TopLeft>
           
           <TopRight>
           <p>Cadastrar</p>
           <p>Entre</p>
           </TopRight>
            </TopLineConteiner>
            
        </TopLine>
        <Header>
            <img src={LogoRedVersion}/>
            <SearchBox>
                <SearchConteiner>
                <SearchBar placeholder='Pesquisar'></SearchBar>
                <SearchButton>
                    <img src={Glasses} alt="Glasses"/>
                </SearchButton>
                </SearchConteiner>
                <DescriptionContainer>
                    <p>Camisa</p>
                    <p>Maquiagem</p>
                    <p>Geladeira</p>
                    <p>Pc</p>
                    <p>Gaiola</p>
                </DescriptionContainer>
            </SearchBox>
            <ContainerTopRight>
                <img src={UserPic} alt="Userpic"/>
                <img src={Shop}/>
            </ContainerTopRight>
        </Header>




        <Footer>
            <FootersDiv>
            <p><span>Atendimento ao cliente</span></p>
            <p>Central de Ajuda</p>
            <p>Como Comprar</p>
            <p>Metodos de Pagamento</p>
            <p>Garantia</p>
            <p>Devolução</p>
            </FootersDiv>

            <FootersDiv>
                <p><span>Sobre Nos</span></p>
                <p>Sobre nos</p>
                <p>Politicas</p>
                <p>Politica de privacidade</p>
                <p>Programa de Afiliados</p>
                <p>Ofertas relampago</p>
                <p>Blog</p>
            </FootersDiv>

            <FootersDiv>
                <p><span>Baixe o app</span></p>
                <Codeqr width={"70px"} height={"70px"} src={QRcode}/>
                <Stor src={Play} alt="Google Play"/>
                <Stor src={AppStore} alt="App Store"/>
            </FootersDiv>

            <FootersDiv>
                <p><span>Siga-nos</span></p>
                <p>Instagram</p>
                <p>Tiktok</p>
                <p>Linkedin</p>
                <p>Twitter</p>
            </FootersDiv>

        </Footer>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
a{
    text-decoration:none;
}

`
const TopLine = styled.div`

    background-color:white;
    width:100%;
    height:21px;
    display:flex;
    align-items:center;
    justify-content:center;

`

const Header = styled.header`

    width:100%;
    height:98px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    border-bottom: 2px solid #FF1616;
    background-color:#071D41;

img{
    width:120px;
    height:60px;
    }
`

const ContainerTopRight = styled.div`

    width:150px;
    height:40px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    img{
        width:50px;
        height:50px;
    }

`
const SearchBox = styled.div`


    width: 750px;
    height: 95px;
    display:flex;
    flex-direction:column;
    align-items:center;

`

const SearchBar = styled.input`

    margin-top:20px;
    width: 650px;
    height: 48px;
    background: #FFF;
    border-radius: 6px;

    &::placeholder{

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 94px;
    letter-spacing: -0.075em;
    color: gray;

    }
`

const SearchConteiner = styled.div`

    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    height:38px;

`

const SearchButton = styled.button`

    margin-left:580px;
    position:absolute;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    align-items: center;
    width:65px;
    height:45px;
    margin-top:25px;
    background: #000000;
    border-radius: 6px;
    border:none;
    cursor:pointer;

img{

    width:20px;
    height:20px;
}

`

const DescriptionContainer = styled.div`

    margin-bottom:30px;
    width:650px;
    height:75px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    p{
        font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 94px;
    letter-spacing: -0.075em;
    color: white;
    }

`

const TopLineConteiner = styled.div`

    width:1450px;
    height:21px;
    display:flex;
    justify-content:space-between;
    align-items:center;

`

const TopLeft = styled.div`

    display:flex;
    
    p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 94px;
    letter-spacing: -0.075em;
    margin-right:15px;
    }


`

const TopRight = styled.div`

  display:flex;
    
    p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 94px;
    letter-spacing: -0.075em;
    margin-right:15px;
    }
`


const Footer = styled.footer`

    width:100%;
    height:350px;
    background-color:#071D41;
    border-top: 2px solid #071D41;
    position: absolute;
    bottom: 0;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap:280px;
`

const FootersDiv = styled.div `

    position:relative;
    width:160px;
    height:250px;
    display:flex;
    flex-direction:column;
    border-radius:18px;

    p{

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 94px;
    letter-spacing: -0.075em;
    color:#fff;
    margin-bottom:-70px;

        span{
            font-size: 15px;
            color:#edfc16;
            font-style: normal;
            font-weight: 700;
        }
    }
`
const Codeqr = styled.img`

    margin-top:50px;
    width:60px;
    height:60px;
`
const Stor = styled.img`

    margin-top:15px;
    width:74px;
    height:20px;

`