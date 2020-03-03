import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import logo from './logo_navy.png';

const FooterWrap = styled.div`
  width: 100vw;
  position:absolute;
  bottom: -160px;
`;

const FooterUpperWrap = styled.div`
  width: 100vw;
  height: 130px;
  background: #002e40;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterUpperContent = styled.div`
  width: 100vw;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterLowerWrap = styled.div`
  width: 100vw;
  height: 30px;
  background: #002534;
  border-top: 1px solid skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLowerContent = styled.div`
  width: 100vw;
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 70px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ListItem = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-weight: lighter;
  font-family: sans-serif;
  color: white;
`;

const ListItemDark = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-weight: lighter;
  font-family: sans-serif;
  color: #a7a7a7;
`;

const Items = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: left;
`;

const LowerItems = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: 14px;
`;

const FooterWrapMob = styled.div`
  width: 100vw;
  position:absolute;
  bottom: -320px;
`;

const FooterUpperWrapMob = styled.div`
  width: 100vw;
  height: 200px;
  background: #002e40;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterUpperContentMob = styled.div`
  width: 98vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const FooterLowerWrapMob = styled.div`
  width: 100vw;
  height: 120px;
  background: #002534;
  border-top: 1px solid skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLowerContentMob = styled.div`
  width: 90vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkTo = styled(Link)`
  underline: none;
  text-decoration: none;
  color: white;

  &:hover {
    color: skyblue;
  }
`;

export const Footer = () => {
  return (
    <>
      <BrowserView>
        <FooterWrap>
          <FooterUpperWrap>
            <FooterUpperContent>
              <Logo src={logo} />
              <Menu>
                <List>
                  <ListItem><LinkTo to="/">Главная</LinkTo></ListItem>
                  <ListItem><LinkTo to="/#ills" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Заболевания</LinkTo></ListItem>
                  </List>
                <List>
                  <ListItem><LinkTo to="/#docs" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Специалисты</LinkTo></ListItem>
                  <ListItem><LinkTo to="/#deseases" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Методы лечения</LinkTo></ListItem>
                  <ListItem><LinkTo to="/pricing" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Цены</LinkTo></ListItem>
                </List>
                <List>
                  { /* <ListItem>Акции</ListItem> */ }
                  { /* <ListItem>Блог</ListItem> */ }
                  <ListItem><LinkTo to="/#feedbacks" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Отзывы</LinkTo></ListItem>
                  <ListItem><LinkTo to="/#contacts">Контакты</LinkTo></ListItem>
                </List>
              </Menu>
              <Menu>
                <List>
                  <ListItemDark>Лицензия на оказание ВМП</ListItemDark>
                  <ListItemDark>Сертификат OHSAS 18001:2007</ListItemDark>
                  <ListItemDark>Сертификат ISO 9001:2015</ListItemDark>
                </List>
              </Menu>
              <Items>
                <i className="fab fa-vk" style={{ color: 'rgba(255,255,255,0.4)' }}></i>
                <i className="fab fa-facebook-f" style={{ marginLeft: '12px', color: 'rgba(255,255,255,0.4)' }}></i>
                <a href="https://instagram.com/smartclinicspb" target="_blank" ><i className="fab fa-instagram" style={{ marginLeft: '12px', color: 'rgba(255,255,255,1)' }}></i></a>
              </Items>
              <div style={{ height: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '8px', fontFamily: 'sans-serif' }}>
                <h2 style={{ padding: 0, margin: 0, color: 'white' }}>+7(812) 679 2388</h2>
                <a href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous&page=request-edit" target="_blank" style={{ textDecoration: 'none', color: 'skyblue' }}>Записаться на прием</a>
              </div>
            </FooterUpperContent>
          </FooterUpperWrap>
          <FooterLowerWrap>
            <FooterLowerContent>
              <ListItemDark style={{ fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Дизайн: Миронов F****ng Art</ListItemDark>
              <LowerItems>
                <ListItem style={{ padding: 0, margin: 0 }}>Условия обработки персональных данных</ListItem>
                <ListItem style={{ padding: 0, margin: 0, marginLeft: '12px' }}><a href={process.env.PUBLIC_URL + '/license.pdf'} style={{ color: 'white', textDecoration: 'none' }}>Лицензия на медецинскую деятельность</a></ListItem>
                <ListItem style={{ padding: 0, margin: 0, marginLeft: '12px' }}>Лицензия на деятельность по обороту НС и ПВ</ListItem>
                <ListItem style={{ padding: 0, margin: 0, marginLeft: '12px' }}>ООО "Смарт Клиник"</ListItem>
              </LowerItems>
            </FooterLowerContent>
          </FooterLowerWrap>
        </FooterWrap>
      </BrowserView>
      <MobileView>
        <FooterWrapMob>
          <FooterUpperWrapMob>
            <FooterUpperContentMob>
              <Menu>
                <List>
                  <ListItem><LinkTo to="/">Главная</LinkTo></ListItem>
                  <ListItem><LinkTo to="/#ills" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Заболевания</LinkTo></ListItem>
                  <ListItem><LinkTo to="/#docs" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Специалисты</LinkTo></ListItem>
                  <ListItem><LinkTo to="/#deseases" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Методы лечения</LinkTo></ListItem>
                </List>
                <List>
                  { /* <ListItem>Акции</ListItem> */ }
                  { /* <ListItem>Блог</ListItem> */ }
                  <ListItem><LinkTo to="/pricing">Цены</LinkTo></ListItem>
                  <ListItem><LinkTo to="/#contacts">Контакты</LinkTo></ListItem>
                </List>
              </Menu>
              <div style={{ height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: 'sans-serif' }}>
                <a href="tel:+78126792388" style={{ padding: 0, margin: 0, textDecoration: 'none', color: 'white', fontSize: '20px' }}>+7(812) 679 2388</a>
                <a href="tel:+78126792388" style={{ padding: 0, margin: 0, textDecoration: 'none' }}><p style={{ color: 'skyblue', padding: 0, margin: 0 }}>Записаться на прием</p></a>
              </div>
            </FooterUpperContentMob>
          </FooterUpperWrapMob>
          <FooterLowerWrapMob>
            <FooterLowerContentMob>
              <LowerItems>
                <ListItem style={{ fontSize: '14px', margin: 0 }}>Условия обработки персональных данных</ListItem>
                <ListItem style={{ fontSize: '14px', margin: 0, marginLeft: '12px' }}>Лицензия на медецинскую деятельность</ListItem>
                <ListItem style={{ fontSize: '14px', margin: 0, marginLeft: '12px' }}>Лицензия на деятельность по обороту НС и ПВ</ListItem>
              </LowerItems>
            </FooterLowerContentMob>
          </FooterLowerWrapMob>
        </FooterWrapMob>
      </MobileView>
    </>
  );
};
