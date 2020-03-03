import React from 'react';
import styled from 'styled-components';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { HeadMenu } from '../Micro/HeadMenu';
import { Footer } from '../Micro/Footer';
import { ConsultOffer } from '../Micro/ConsultOffer';
import { Contacts } from '../Micro/Contacts';
import { Roller } from '../Micro/Roller';
import { Deseases } from '../Micro/Deseases';
import { Ills } from '../Micro/Ills';
import { Doctors } from '../Micro/Doctors';
import { News } from '../Micro/News';
import { LeftRight } from '../Micro/LeftRight';
import { WhyUs } from '../Micro/WhyUs';
import { Gallery } from '../Micro/Gallery';
import { Feedbacks } from '../Micro/Feedbacks';

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  position: relative;
`;

export const Index = () => {
  return (
    <Wrap>
      <HeadMenu />
      <Roller />
      <Ills />
      <Deseases />
      <Doctors />
      <BrowserView>
        <LeftRight />
        <ConsultOffer />
      </BrowserView>
      <WhyUs />
      <Feedbacks />
      <Contacts />
      <Footer />
    </Wrap>
  );
};
