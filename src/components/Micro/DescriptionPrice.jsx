import React from 'react';

import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 90vw;
  background: white;
`;

const Heading = styled.h1`
  font-weight: lighter;
`;

const Gray = styled.p`
  color: gray;
`;

const Skyblue = styled.h3`
  color: skyblue;
`;

const Price = styled.div`
  width: 100vw;
  height: 330px;
  background: #f8f9fc;
  border: 1px solid rgba(0,0,0,0.1);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin-left: 5vw;
`;

const Block = styled.div`
  width: 28vw;
  height: 264px;
  margin-top: 33px;
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

const Central = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nomargin = styled.h1`
  margin: 0;
  padding: 0;
  margin-top: 33px;
  font-size: 44pt;
`;

export const DescriptionPrice = () => {
  return (
    <Wrap>
      <Description>
        <Heading>Описание процедуры</Heading>
        <Gray>Заболевания ног могут ограничивать свободу и не позволять сполна наслаждаться жизнью. Проблемы с ногами влияют на позвоночник и внутренние органы, заставляют испытывать постоянный дискомфорт. Клиника «Синай» помогает вернуться к здоровому образу жизни взрослым и детям, пожилым людям, профессиональным спортсменам – даже в тех случаях, когда традиционное лечение противопоказано или неэффективно. Изготовление индивидуальных ортопедических стелек – это первое, что необходимо предпринять при решении проблем со стопой. Правильно изготовленные ортопедические стельки помогут восстановить здоровую биомеханику ходьбы и избавиться от неприятных ощущений. Но главное – они остановят развитие заболевания, предотвратив возникновение осложнений (нарушения осанки, артрозы, натоптыши и т.д.). При изготовлении стелек учитываются все особенности стопы пациента. Индивидуально изготовленные стельки, в отличие от стелек массового производства, не вызывают дискомфорт даже в первый день использования: они поддерживают стопу в естественном анатомическом положении, равномерно распределяют нагрузку, обеспечивают правильный перекат, создавая комфорт и легкость ходьбы. Изготовление детских стелек требует особой тщательности, ведь детский скелет ещё не до конца сформирован, и от правильной постановки стопы будет зависеть будущее здоровье позвоночника и опорно-двигательного аппарата.</Gray>
        <br />
      </Description>
      <Price>
        <Row>
          <Block>
            <Skyblue>Плюсы услуги</Skyblue>
            <p>Заболевания ног могут ограничивать свободу и не позволять сполна наслаждаться жизнью. Проблемы с ногами влияют на позвоночник и внутренние органы, заставляют испытывать постоянный дискомфорт. Клиника «Синай» помогает вернуться к здоровому образу жизни взрослым и детям, пожилым людям, профессиональным спортсменам – даже в тех случаях, когда традиционное лечение противопоказано или неэффективно.</p>
          </Block>
          <Block>
            <Skyblue>Минусы услуги</Skyblue>
            <p>Заболевания ног могут ограничивать свободу и не позволять сполна наслаждаться жизнью. Проблемы с ногами влияют на позвоночник и внутренние органы, заставляют испытывать постоянный дискомфорт. Клиника «Синай» помогает вернуться к здоровому образу жизни взрослым и детям, пожилым людям, профессиональным спортсменам – даже в тех случаях, когда традиционное лечение противопоказано или неэффективно.</p>
          </Block>
          <Block>
            <Central>
              <Nomargin>20 000 ₽</Nomargin>
              <Gray>Цена услуги</Gray>
              <TypeFormMiniGreen>
                ЗАПИСАТЬСЯ
              </TypeFormMiniGreen>
            </Central>
          </Block>
        </Row>
      </Price>
    </Wrap>
  );
};
