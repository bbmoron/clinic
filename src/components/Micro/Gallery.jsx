import React, { useEffect } from 'react';
import styled from 'styled-components';

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

export const Gallery = () => {
  useEffect(() => {
    // const script = document.createElement('script');
    // script.async = true;
    // script.src = './app.min.js';
    // document.getElementById('oof').appendChild(script);
  }, []);

  return(
    <ConsultOfferWrap id="oof">
      <img src={logo} alt="logo" style={{ height: '393px', marginTop: '14px' }} />
      <ConsultOfferForm>
        <Heading>Почему к нам обращаются новые клиенты?</Heading>
        <UnderText>Центр медицинской реабилитации EMC специализируется на восстановлении пациентов после инсультов, инфарктов, черепно-мозговых и спинальных травм, неврологических заболеваний</UnderText>
        <br />
        <Blue>Высокое Качество Лечения</Blue>
        <BlueDesc>Центр медицинской реабилитации EMC специализируется на восстановлении пациентов после инсультов, инфарктов, черепно-мозговых и спинальных травм, неврологических заболеваний, кардиохирургических, нейрохирургических, ортопедических операций, ампутации конечностей, после перенесенных онкологических заболеваний.</BlueDesc>
        <Blue>Современная Диагностика</Blue>
        <BlueDesc>Центр медицинской реабилитации EMC специализируется на восстановлении пациентов после инсультов, инфарктов, черепно-мозговых и спинальных травм, неврологических заболеваний, кардиохирургических, нейрохирургических, ортопедических операций, ампутации конечностей, после перенесенных онкологических заболеваний.</BlueDesc>
        <Blue>Без очередей и проблем</Blue>
        <BlueDesc>Центр медицинской реабилитации EMC специализируется на восстановлении пациентов после инсультов, инфарктов, черепно-мозговых и спинальных травм, неврологических заболеваний, кардиохирургических, нейрохирургических, ортопедических операций, ампутации конечностей, после перенесенных онкологических заболеваний.</BlueDesc>
      </ConsultOfferForm>
    </ConsultOfferWrap>
  );
};
