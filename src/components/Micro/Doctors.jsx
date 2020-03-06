import React, { useState, useEffect } from 'react';

import {
  Link
} from "react-router-dom";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import styled from 'styled-components';

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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Block = styled.div`
  width: ${ () => isBrowser ? `20vw` : `90vw` };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlockImage = styled.img`
  width: ${ () => isBrowser ? `12vw` : `60vw` };
  margin-top: ${ () => isBrowser ? `0` : `20px` };
  border-radius: 6px;
  height: auto;
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

const LinkTo = styled(Link)`
  text-decoration: none;
  color: skyblue;
`;

export const Doctors = () => {

  const link = "https://api.jsonbin.io/b/5e5f5892baf60366f0e264cd";

  const [showAll, setShowAll] = useState(false);

  const [doctors, setDoctors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);
  const [shortStack, setShortStack] = useState(4);
  let cDoc = 0;

  useEffect(() => {
    fetch(link, {
      headers: {
        'secret-key': '$2b$10$D5yizK.APqQ/q.kQ7fcvS.J1hM7CC6JE4kgccK03nWbSG4i0s.57q'
      }
    }).then(response => response.json()).then(data => {
      setDoctors(data);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    });
  }, []);

  useEffect(() => {
    if(!doctors) return;
    setFetched(true);
  }, [doctors]);

  const clickShowAllBtn = () => setShowAll(true);

  return (
    <Wrap id="docs">
      <Heading>Наши доктора</Heading>
      <Undertext></Undertext>
      <br />
      <br />
      <Row>
        {
          fetched && Object.keys(doctors).map(key => {
            cDoc++;
            if(cDoc > shortStack) return;
            return(
              <LinkTo to={`/doc/${key}`}>
                <Block>
                  <BlockImage src={doctors[key].image} />
                  <p style={{ margin: 0, padding: 0, marginTop: '10px', fontSize: '14pt' }}>{ doctors[key].name }</p>
                  { /* <Undertext><i>Невролог, стаж 2 года</i></Undertext> */ }
                </Block>
              </LinkTo>
            );
          })
        }
      </Row>
      <br />
      <br />
      <br />
      <Row style={{ display: showAll ? 'flex' : 'none' }}>
      {
        fetched && Object.keys(doctors).slice(shortStack, Object.keys(doctors).length).map(key => {
          return(
            <LinkTo to={`/doc/${key}`}>
              <Block>
                <BlockImage src={doctors[key].image} />
                <p style={{ margin: 0, padding: 0, marginTop: '10px', fontSize: '14pt' }}>{ doctors[key].name }</p>
                { /* <Undertext><i>Невролог, стаж 2 года</i></Undertext> */ }
              </Block>
            </LinkTo>
          );
        })
      }
      </Row>
      <br style={{ display: showAll ? 'none' : 'flex' }} />
      <br style={{ display: showAll ? 'none' : 'flex' }} />
      <TypeFormMiniGreen style={{ display: showAll ? 'none' : 'flex' }} onClick={clickShowAllBtn}>Показать всех</TypeFormMiniGreen>
    </Wrap>
  );
};
