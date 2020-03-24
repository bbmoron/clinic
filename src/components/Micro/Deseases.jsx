import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import {
  Link
} from "react-router-dom";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Wrap = styled.div`
  width: 100vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Heading = styled.h1`
  color: black;
  padding: 0;
  margin: 0;
`;

const Undertext = styled.p`
  color: grey;
  font-weight: lighter;
  font-size: 14px;
`;

const Row = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Block = styled.div`
  min-width: 29vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlockImage = styled.img`
  width: 29vw;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const BlockImageMob = styled.img`
  min-width: 90vw;
  max-width: 90vw;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: sky-blue;
`;

export const Deseases = () => {
  const [loaded, isLoaded] = useState(false);
  const [methods, setMethods] = useState(null);

  useEffect(() => {
    console.log(methods);
    if(methods != null) return;
    fetch('https://api.jsonbin.io/b/5e5f5919baf60366f0e26536/latest', {
      headers: {
        'secret-key': '$2b$10$D5yizK.APqQ/q.kQ7fcvS.J1hM7CC6JE4kgccK03nWbSG4i0s.57q'
      }
    }).then(response => response.json()).then(data => {
      setMethods(data);
      setTimeout(() => {
        isLoaded(true);
      }, 200);
    });
  }, [methods]);

  return (
    <>
      { loaded && <Wrap id="deseases">
        <Heading>Методы лечения</Heading>
        <Undertext></Undertext>
        <br />
        <br />
        <Row>
          {
            methods != null && Object.keys(methods).map(key => {
              return(
                <LinkTo to={`/methods/${key}`}>
                  <Block>
                    <BrowserView><BlockImage src={methods[key].image} /></BrowserView>
                    <MobileView><BlockImageMob src={methods[key].image} /></MobileView>
                    <p style={{ fontSize: '13pt', color: 'skyblue' }}>{methods[key].title}</p>
                  </Block>
                </LinkTo>
              );
            })
          }
        </Row>
      </Wrap> }
    </>
  );
};
