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
  justify-content: flex-end;
  align-items: center;
`;

const RowMob = styled.div`
  width: 92vw;
  margin-left: 4vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15pt;
`;

const Block = styled.div`
  width: 29vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BlockMob = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: skyblue;
  }
`;

export const Ills = () => {
  const url = "https://api.jsonbin.io/b/5e7a06ea79d7e24dd30e2ecf/latest";

  const [content, setContent] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      headers: {
        'secret-key': '$2b$10$D5yizK.APqQ/q.kQ7fcvS.J1hM7CC6JE4kgccK03nWbSG4i0s.57q'
      }
    }).then(response => response.json()).then(data => {
      const keys = Object.keys(data);
      setContent(data);
      setPosts([keys.slice(0, keys.length / 3), keys.slice(keys.length / 3, keys.length / 3 + keys.length / 3), keys.slice(keys.length / 3 + keys.length / 3, keys.length / 3 + keys.length / 3 + keys.length)]);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    });
  }, []);

  return (
    <>
      { !loading && <Wrap id="ills">
        <Heading>Заболевания</Heading>
        <br />
        <br />
        <BrowserView>
          <Row>
            <Block>
              { posts[0].map(post => <p><LinkTo to={`/des/${post}`}>{content[post].split(`</h3>`)[0].split(`<h3>`)[1]}</LinkTo></p>) }
            </Block>
            <Block>
              { posts[1].map(post => <p><LinkTo to={`/des/${post}`}>{content[post].split(`</h3>`)[0].split(`<h3>`)[1]}</LinkTo></p>) }
            </Block>
            <Block>
              { posts[2].map(post => <p><LinkTo to={`/des/${post}`}>{content[post].split(`</h3>`)[0].split(`<h3>`)[1]}</LinkTo></p>) }
            </Block>
          </Row>
        </BrowserView>
        <MobileView>
          <RowMob>
            <BlockMob>
              { posts[0].map(post => <p><LinkTo to={`/des/${post}`}>{content[post].split(`</h3>`)[0].split(`<h3>`)[1]}</LinkTo></p>) }
              { posts[1].map(post => <p><LinkTo to={`/des/${post}`}>{content[post].split(`</h3>`)[0].split(`<h3>`)[1]}</LinkTo></p>) }
              { posts[2].map(post => <p><LinkTo to={`/des/${post}`}>{content[post].split(`</h3>`)[0].split(`<h3>`)[1]}</LinkTo></p>) }
            </BlockMob>
          </RowMob>
        </MobileView>
      </Wrap> }
    </>
  );
};
