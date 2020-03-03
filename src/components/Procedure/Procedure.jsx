import React from 'react';
import styled from 'styled-components';

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
import { DescriptionPrice } from '../Micro/DescriptionPrice';
import { ProcedureClues } from '../Micro/ProcedureClues.jsx';

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  position: relative;
`;

export const Procedure = () => {
  return (
    <Wrap>
      <HeadMenu />
      <br />
      <br />
      <DescriptionPrice />
      <LeftRight />
      <Deseases />
      <Doctors />
      <ProcedureClues />
      <ConsultOffer />
      <Contacts />
      <Footer />
    </Wrap>
  );
};
