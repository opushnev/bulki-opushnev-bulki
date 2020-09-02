import React from 'react';
import styled from 'styled-components';
import logobar from '../../image/logo.svg';
import signbar from '../../image/sign.svg';
const NavbarStyled=styled.header`
position:fixed;
top:0;
left:0;
width:100%;
height:80px;
z-index:999;
display:flex;
padding: 15px;
justify-content:space-between;
background-color:#299B34;
color:white;
align-items:center;
`;
const H1=styled.h1`
    font-size:35px;
    margin-left:18px;
`;
const LogoImg=styled.div`
    display:flex;
`;
const Login=styled.button`
    background-color:transparent;
    border-color:transparent;
    font-size:20px;
    color:white;
`;
export const Navbar=()=>(
    <NavbarStyled>
        <LogoImg>
        <img src={logobar} alt="Бургеры"/>
        <H1>БургерТОП</H1>
         </LogoImg>
        <Login>
            <img src={signbar} alt="Войти"/>
            <p>Войти</p>
            </Login>
    </NavbarStyled>
);