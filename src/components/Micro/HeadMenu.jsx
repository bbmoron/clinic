import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { MobileMenu } from './MobileMenu.jsx';

import logo from './logo_white.png';

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #fafafa;
`;

const Menu = styled.div`
  width: 100vw;
  max-width: 1400px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: sans-serif;
`;

const Logo = styled.img`
  height: 70px;
`;

const Items = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #a7a7a7;
  font-size: 20px;
  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: left;
`;

const UnderMenuWrap = styled.div`
  width: 100vw;
  background: white;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 5px rgba(0,0,0,0.3);
`;
const UnderMenu = styled.div`
  width: 100vw;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: sans-serif;
  color: #a7a7a7;
  font-weight: lighter;
`;

const Black = styled.span`
  color: black;
`;

const LinkTo = styled(Link)`
  underline: none;
  text-decoration: none;
  color: black;

  &:hover {
    color: skyblue;
  }
`;

const MenuWrapMob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background: #fafafa;
`;

const MenuMob = styled.div`
  width: 96vw;
  height: 9vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: sans-serif;
  margin-left: 0vw;
`;

const LogoMob = styled.img`
  height: 9vh;
`;

const ActionMob = styled.p`
  font-size: 14px;
`;

// <LinkTo to="#news"  style={{ marginLeft: '12px' }} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Блог</LinkTo>


export const HeadMenu = () => {
  return (
    <>
      <BrowserView>
        <MenuWrap>
          <Menu>
            <Logo src={logo} />
            <Items style={{ marginLeft: '10px', marginRight: '10px' }}>
              <LinkTo to="/" >Главная</LinkTo>
              <LinkTo to="/#ills" style={{ marginLeft: '12px' }} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Заболевания</LinkTo>
              <LinkTo to="/#docs" style={{ marginLeft: '12px' }} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Специалисты</LinkTo>
              <LinkTo to="/#deseases" style={{ marginLeft: '12px' }} scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Методы лечения</LinkTo>
              <LinkTo to="/#feedbacks"  style={{ marginLeft: '12px' }}>Отзывы</LinkTo>
              <LinkTo to="/pricing"  style={{ marginLeft: '12px' }}>Цены</LinkTo>
              { /* <LinkTo to="/"  style={{ marginLeft: '12px' }}>Акции</LinkTo> */ }
              <LinkTo to="/#contacts"  style={{ marginLeft: '12px' }}>Контакты</LinkTo>
            </Items>
            <Items>
              { /* <i className="fab fa-vk" style={{ color: 'rgba(0,0,0,0.15)' }}></i>
              <i className="fab fa-facebook-f" style={{ marginLeft: '12px', color: 'rgba(0,0,0,0.15)' }}></i> */ }
              <a href="https://wa.me/79818025506" target="_blank" ><i style={{ color: 'rgba(0,0,0,0.4)' }} className="fab fa-whatsapp"></i></a>
              <a href="https://instagram.com/smartclinicspb" target="_blank" ><i className="fab fa-instagram" style={{ marginLeft: '12px', color: 'rgba(0,0,0,0.4)' }}></i></a>
            </Items>
            <div style={{ height: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '8px' }}>
              <h2 style={{ padding: 0, margin: 0 }}>+7(812) 679 2388</h2>
              <a href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous&page=request-edit" target="_blank" style={{ textDecoration: 'none', color: 'skyblue' }}>Записаться на прием</a>
            </div>
          </Menu>
          <UnderMenuWrap>
            <UnderMenu>
              <p style={{ padding: 0, margin: 0, marginTop: '4px' }}><Black><b>Все от правильного диагноза до лечения</b></Black></p>
              <p style={{ padding: 0, margin: 0, marginTop: '4px' }}>г. Санкт-Петербург, Набережная Обводного канала 108А &nbsp;&nbsp;&nbsp; Время работы <Black>c 9:00 до 21:00</Black> Вс выходной</p>
            </UnderMenu>
          </UnderMenuWrap>
        </MenuWrap>
      </BrowserView>
      <MobileView>
        <MenuWrap>
          <MenuMob>
            <MobileMenu />
            <LogoMob src={logo} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0 }}>
              <a href="tel:+78126792388" style={{ padding: 0, margin: 0, textDecoration: 'none', color: 'black', fontSize: '18px', marginBottom: '10px' }}>+7(812) 679 2388</a>
              <a href="tel:+79818025506" style={{ padding: 0, margin: 0, textDecoration: 'none', color: 'black', fontSize: '18px' }}>+7(981) 802 5506</a>
              { /* <ActionMob style={{ color: 'skyblue', padding: 0, margin: 0 }}>Записаться на прием</ActionMob> */ }
            </div>
          </MenuMob>
          <UnderMenuWrap>
            <UnderMenu style={{ textalign: 'center' }}>
              <p style={{ width: '100%', padding: 0, margin: 0, marginTop: '4px', textAlign: 'center' }}><Black>Все от правильного диагноза до лечения</Black></p>
            </UnderMenu>
          </UnderMenuWrap>
        </MenuWrap>
      </MobileView>
    </>
  );
};
