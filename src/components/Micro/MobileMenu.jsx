import React from 'react';

import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Wrap = styled.div`

`;

const Topnav = styled.div`
  overflow: hidden;
  position: relative;
  color: skyblue;
  padding-left: 10px;
  font-size: 18pt;
  display: flex;
  flex-direction: column;
`;

const MyLinks = styled.div`
  width: 96vw;
  margin: 0;
  padding: 0;
  margin-top: 70px;
  display: none;
  position: absolute;
  z-index: 999;
  background: #fafafa;
  color: black;
  & a {
    color: black;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: flex;

    & :hover {
      color: skyblue;
    }

    & .active {
      background-color: #4CAF50;
      color: skyblue;
    }
  }
`;

const Button = styled.p`
  background: transparent;
  display: block;
  right: 0;
  top: 0;
`;

const LinkTo = styled(Link)`
  underline: none;
  text-decoration: none;
  color: black;

  &:hover {
    color: skyblue;
  }
`;

const myFunc = () => {
  console.log('peepo');
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export const MobileMenu = () => {
  return(
    <>
      <Topnav>
        <Button onClick={() => { myFunc() }}>
          <i class="fa fa-bars"></i>
        </Button>
      </Topnav>
      <MyLinks id="myLinks">
        <LinkTo onClick={() => { myFunc() }} to="/" style={{ marginLeft: '12px' }} >Главная</LinkTo>
        <LinkTo onClick={() => { myFunc() }} to="/#ills" style={{ marginLeft: '12px' }} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Заболевания</LinkTo>
        <LinkTo onClick={() => { myFunc() }} to="/#docs" style={{ marginLeft: '12px' }} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Специалисты</LinkTo>
        <LinkTo onClick={() => { myFunc() }} to="/#deseases" style={{ marginLeft: '12px' }} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Методы лечения</LinkTo>
        <LinkTo onClick={() => { myFunc() }} to="/#feedbacks"  style={{ marginLeft: '12px' }}>Отзывы</LinkTo>
        <LinkTo onClick={() => { myFunc() }} to="/pricing"  style={{ marginLeft: '12px' }}>Цены</LinkTo>
        { /* <LinkTo to="/"  style={{ marginLeft: '12px' }}>Акции</LinkTo> */ }
        <LinkTo onClick={() => { myFunc() }} to="/#contacts"  style={{ marginLeft: '12px' }}>Контакты</LinkTo>
        <center>
          <a style={{ color: 'black', marginLeft: '12px', textDecoration: 'none' }} href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous&page=request-edit" target="_blank">Записаться на прием</a>
          <a style={{ color: 'black', marginLeft: '12px', textDecoration: 'none' }} href={process.env.PUBLIC_URL + '/license.pdf'}>Лицензия на медецинскую деятельность</a>
        </center>
        <br />
      </MyLinks>
    </>
  );
}
