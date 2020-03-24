import React from 'react';
import styled from 'styled-components';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import logo from './logoBlank.png';

const ConsultOfferWrap = styled.div`
  width: 100vw;
  height: 684px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
`;

const ConsultOfferForm = styled.div`
  width: 40vw;
  max-width: 710px;
  margin-left: 120px;
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

const Blue = styled.h3`
  color: skyblue;
  width: 710px;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
  font-weight: 400;
`;

const BlueDesc = styled.p`
  width: 710px;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
`;

const ConsultOfferWrapMob = styled.div`
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  background: url(${logo});
`;

const ConsultOfferFormMob = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingMob = styled.h1`
  width: 96vw;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
`;

const UnderTextMob = styled.p`
  width: 96vw;
  text-align: left;
`;

const BlueMob = styled.h3`
  color: skyblue;
  width: 96vw;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
  font-weight: 400;
`;

const BlueDescMob = styled.p`
  width: 96vw;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
`;


export const WhyUs = () => {
  return(
    <>
      <BrowserView>
        <ConsultOfferWrap>
          <ConsultOfferForm>
            <Heading>Почему к нам обращаются новые клиенты?</Heading>
            <UnderText>Smart Clinic – это умная клиника. Мы работаем по мировым клиническим рекомендациям и используем новые медицинские технологии: объединяем лучшее и создаем медицину такой, какой она должна быть. Вы получаете уникальный продукт, аналога которому нет в Санкт-Петербурге: симбиоз самых актуальных знаний, честного и гуманного подхода, а также новейших технологий.</UnderText>
            <br />
            <Blue>Высокое Качество Лечения</Blue>
            <BlueDesc>Четкий план лечения – важная составляющие нашего подхода. Вы всегда точно знаете, какую процедуру или вмешательство вам будут выполнять, в какое время, а самое главное для чего.</BlueDesc>
            <Blue>Современная Диагностика</Blue>
            <BlueDesc>За счет сужения направления деятельности мы лечим максимально эффективно то, что действительно умеем, а Вы получаете ощутимый результат.</BlueDesc>
            <Blue>Без очередей и проблем</Blue>
            <BlueDesc>Обратная связь, ведь это так важно. У всех пациентов нашей клиники есть возможность посещать своего лечащего врача бесплатно и любое количество раз на протяжении всего курса лечения и в течение 3 месяцев после. Вы всегда будете под нашим крылом.</BlueDesc>
          </ConsultOfferForm>
          <img src={logo} alt="logo" style={{ height: '393px', marginTop: '14px' }} />
        </ConsultOfferWrap>
      </BrowserView>
      <MobileView>
        <ConsultOfferWrapMob>
          <ConsultOfferFormMob>
            <HeadingMob>Почему к нам обращаются новые клиенты?</HeadingMob>
            <UnderTextMob>Smart Clinic – это умная клиника. Мы работаем по мировым клиническим рекомендациям и используем новые медицинские технологии: объединяем лучшее и создаем медицину такой, какой она должна быть. Вы получаете уникальный продукт, аналога которому нет в Санкт-Петербурге: симбиоз самых актуальных знаний, честного и гуманного подхода, а также новейших технологий.</UnderTextMob>
            <br />
            <BlueMob>Высокое Качество Лечения</BlueMob>
            <BlueDescMob>Четкий план лечения – важная составляющие нашего подхода. Вы всегда точно знаете, какую процедуру или вмешательство вам будут выполнять, в какое время, а самое главное для чего.</BlueDescMob>
            <BlueMob>Современная Диагностика</BlueMob>
            <BlueDescMob>За счет сужения направления деятельности мы лечим максимально эффективно то, что действительно умеем, а Вы получаете ощутимый результат.</BlueDescMob>
            <BlueMob>Без очередей и проблем</BlueMob>
            <BlueDescMob>Обратная связь, ведь это так важно. У всех пациентов нашей клиники есть возможность посещать своего лечащего врача бесплатно и любое количество раз на протяжении всего курса лечения и в течение 3 месяцев после. Вы всегда будете под нашим крылом.</BlueDescMob>
          </ConsultOfferFormMob>
        </ConsultOfferWrapMob>
      </MobileView>
    </>
  );
};
