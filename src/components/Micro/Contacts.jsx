import React from 'react';
import styled from 'styled-components';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import map from './map.png';

const ConsultOfferWrap = styled.div`
  width: 100vw;
  height: 800px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const ConsultOfferForm = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  width: 35vw;
  margin-left: 10vw;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
`;

const UnderText = styled.p`
  width: 35vw;
  text-align: left;
`;

const Row = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Block = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ConsultOfferWrapMob = styled.div`
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

const ConsultOfferFormMob = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingMob = styled.h1`
  width: 90vw;
  margin-left: 5vw;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
`;

const UnderTextMob = styled.p`
  width: 90vw;
  margin-left: 5vw;
  text-align: center;
`;

const RowMob = styled.div`
  width: 90vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BlockMob = styled.div`
  width: 44vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Contacts = () => {
  return(
    <>
      <BrowserView>
        <ConsultOfferWrap id="contacts">
          <ConsultOfferForm>
            <Heading>Вам нужна консультация?</Heading>
            <UnderText>Получите бесплатную консультацию по вашему вопросу по телефону</UnderText>
            <Row>
              <Block>
                <p>Юридический адрес:</p>
                <p>Набережная Обводного канала 108А, помещение 28-Н<br />г. Санкт-Петербург, Россия</p>
                <p>+7(812) 679 2388<br />+7(981) 802 5506<br /><br />info@smartclinicspb.ru</p>
              </Block>
              <Block>
                <p>Фактический адрес:</p>
                <p>Набережная Обводного канала 108А, помещение 28-Н<br />г. Санкт-Петербург, Россия</p>
                <p>График работы:<br />09:00 – 21:00 (Вс выходной)</p>
              </Block>
              { /* <Block>

              </Block> */ }
            </Row>
          </ConsultOfferForm>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8875c0625c91226dd5711f757b9deaa4f1b86ffbf9fbffb3c4e703f546681bdb&amp;source=constructor" width="50%" height="800" frameborder="0"></iframe>
        </ConsultOfferWrap>
      </BrowserView>
      <MobileView>
        <ConsultOfferWrapMob id="contacts">
          <ConsultOfferForm>
            <HeadingMob>Вам нужна консультация?</HeadingMob>
            <UnderTextMob>Получите бесплатную консультацию по вашему вопросу по телефону</UnderTextMob>
            <RowMob>
              <BlockMob>
                <p>Юридический адрес:</p>
                <p>Набережная Обводного канала 108А, помещение 28-Н<br />г. Санкт-Петербург, Россия</p>
                <p>+7(812) 679 2388<br />info@smartclinicspb.ru</p>
              </BlockMob>
              <BlockMob>
                <p>Фактический адрес:</p>
                <p>Набережная Обводного канала 108А, помещение 28-Н<br />г. Санкт-Петербург, Россия</p>
                <p>График работы:<br />09:00 – 21:00 (Вс выходной)</p>
              </BlockMob>
            </RowMob>
          </ConsultOfferForm>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8875c0625c91226dd5711f757b9deaa4f1b86ffbf9fbffb3c4e703f546681bdb&amp;source=constructor" width="100%" height="586" frameborder="0"></iframe>
        </ConsultOfferWrapMob>
      </MobileView>
    </>
  );
};
