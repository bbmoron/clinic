import React from 'react';
import styled from 'styled-components';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

// import writing from './writing.png';
import writing from './writing1.png';

const ConsultOfferWrap = styled.div`
  width: 100vw;
  height: 560px;
  background: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const ConsultOfferWrapInner = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ConsultOfferForm = styled.div`
  max-width: 710px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  width: 710px;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  color: skyblue;
`;

const UnderText = styled.p`
  width: 710px;
  text-align: left;
`;

const TypeForm = styled.input`
  width: 692px;
  height: 40px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #a7a7a7;
  margin-bottom: 6px;
  font-size: 23px;
  font-weight: lighter;
  padding-left: 18px;
`;

const TypeFormMini = styled.div`
  width: 338px;
  height: 40px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #a7a7a7;
  color: #a7a7a7;
  font-size: 23px;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TypeFormMiniGreen = styled.div`
  width: 338px;
  height: 40px;
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 23px;
  font-weight: lighter;
  background: #05e1cb;
  border: 2px solid #05e1cb;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Row = styled.div`
  width: 710px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ConsultOfferWrapMob = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
`;

const ConsultOfferFormMob = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  word-break: normal
`;

const HeadingMob = styled.h1`
  width: 100vw;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  color: skyblue;
`;

const UnderTextMob = styled.p`
  width: 92vw;
  text-align: center;
  font-size: 16pt;
`;

const TypeFormMob = styled.input`
  width: 90vw;
  height: 40px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #a7a7a7;
  margin-bottom: 6px;
  font-size: 26px;
  font-weight: lighter;
  padding-left: 18px;
`;

const TypeFormMiniMob = styled.div`
  width: 60vw;
  height: 40px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #a7a7a7;
  color: #a7a7a7;
  font-size: 26px;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TypeFormMiniGreenMob = styled.div`
  width: 80vw;
  margin-left: 10vw;
  height: 50px;
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 29px;
  font-weight: lighter;
  background: #05e1cb;
  border: 2px solid #05e1cb;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RowMob = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Roller = () => {
  return(
    <>
      <BrowserView>
        <ConsultOfferWrap>
          <ConsultOfferWrapInner>
            <ConsultOfferForm>
              <Heading>Уникальное предложение в честь открытия клиники Smart Clinic</Heading>
              <UnderText style={{ lineHeight: '17pt' }}>Любое УЗИ-исследование на аппарате экспертного уровня за <b>500</b> рублей.<br />Общий анализ крови и липидограмма (анализ на холестерин) за <b>500</b> рублей.<br />Консультация любого специалиста клиники за <b>1000</b> рублей.</UnderText>
              <br />
              <br />
              <Row>
                <a href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous" target="_blank" style={{ textDecoration: 'none', color: 'white' }}><TypeFormMiniGreen>Получить скидку 20%</TypeFormMiniGreen></a>
              </Row>
            </ConsultOfferForm>
            <img src={writing} alt="writing" style={{ height: '560px' }} />
          </ConsultOfferWrapInner>
        </ConsultOfferWrap>
      </BrowserView>
      <MobileView>
        <ConsultOfferWrapMob>
          <ConsultOfferFormMob>
            <HeadingMob>Уникальное предложение в честь открытия клиники Smart Clinic</HeadingMob>
            <UnderTextMob><h3>До 31 марта дарим скидку 20% на абсолютно все услуги из прайса!</h3></UnderTextMob>
            <UnderTextMob style={{ lineHeight: '17pt' }}>Но это еще не все! Вы можете пройти любое УЗИ исследование всего за <b>500</b> рублей,<br />сдать общий анализ крови, липидограмму и пройти УЗИ сосудов шеи за <b>1000</b> рублей,<br />а также получить консультацию любого специалиста нашей клиники за <b>1000</b> рублей.</UnderTextMob>
            <br />
            <br />
            <RowMob>
              <a href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous" target="_blank" style={{ textDecoration: 'none', color: 'white' }}><TypeFormMiniGreenMob>Получить скидку 20%</TypeFormMiniGreenMob></a>
            </RowMob>
          </ConsultOfferFormMob>
        </ConsultOfferWrapMob>
      </MobileView>
    </>
  );
};
