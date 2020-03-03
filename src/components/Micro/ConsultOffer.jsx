import React from 'react';
import styled from 'styled-components';

import doctor from './doctor.png';

const ConsultOfferWrap = styled.div`
  width: 100vw;
  height: 684px;
  background: #f8f9fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const ConsultOfferForm = styled.div`
  width: 40vw;
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

export const ConsultOffer = () => {
  return(
    <ConsultOfferWrap id="consult">
      <ConsultOfferForm>
        <Heading>Вам нужна консультация?</Heading>
        <br />
        <br />
        { /* <UnderText>Получите бесплатную консультацию по вашему вопросу у нашего главного врача Гермасимова Антона</UnderText> */ }
        <TypeForm placeholder="Введите ваше имя" />
        <TypeForm placeholder="Контактный телефон" />
        <Row>
          { /* <TypeFormMini>Прикрепить файл</TypeFormMini> */ }
          <a href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous" target="_blank" style={{ textDecoration: 'none', color: 'white' }}><TypeFormMiniGreen>Отправить</TypeFormMiniGreen></a>
        </Row>
      </ConsultOfferForm>
      <img src={doctor} alt="doctor" style={{ height: '600px', marginTop: '84px', marginLeft: '90px' }} />
    </ConsultOfferWrap>
  );
};
