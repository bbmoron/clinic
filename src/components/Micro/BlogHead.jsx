import React from 'react';
import styled from 'styled-components';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import logo from './blogPostHead.png';

const Wrap = styled.div`
  width: 100vw;
  background: white;
  position: relative;

  & img {
    width: 100vw;
  }
`;

export const BlogHead = () => {
  return (
    <Wrap>
      <br />
      <br />
      <br />
    </Wrap>
  );
};
