import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import {
  Link
} from "react-router-dom";

import dis1 from './dis1.png';
import dis2 from './dis2.png';
import dis3 from './dis3.png';
import dis4 from './dis4.png';
import dis5 from './dis5.png';
import dis6 from './dis6.png';

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
  width: 29vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlockImage = styled.img`
  width: 100%;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: sky-blue;
`;

export const SimilarPosts = () => {
  const DBlink = "https://www.jsonstore.io/e43e5770c245490e4819558bb19f00edc21df3967113568af5fa4b55f2d29614";

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  const [maxPosts, setMaxPosts] = useState(6);
  let cPost = 0;

  const images = [dis1,dis2,dis3,dis4,dis5,dis6];

  useEffect(() => {
    fetch(DBlink).then(response => response.json()).then(data => {
      setPosts(data.result);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    });
  }, []);

  useEffect(() => {
    if(!posts) return;
    setFetched(true);
  }, [posts])

  return (
    <Wrap id="news">
      { !loading && <><Heading>Похожие статьи</Heading>
      <Undertext></Undertext>
      <br />
      <br />
      <Row>
        {
          fetched && Object.keys(posts).map(key => {
            cPost++;
            if(cPost > maxPosts) return;
            return(
              <LinkTo to={`/blog/${key}`}>
                <Block>
                  <BlockImage src={images[Math.floor(Math.random() * Math.floor(5))]} />
                  <p style={{ fontSize: '15pt', color: 'skyblue' }}>{ posts[key].split(`</h3>`)[0].split(`<h3>`)[1] }</p>
                  <Undertext></Undertext>
                </Block>
              </LinkTo>
            );
          })
        }
      </Row></>}
    </Wrap>
  );
};
