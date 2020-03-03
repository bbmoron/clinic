import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import pg from 'pg';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import { HeadMenu } from '../Micro/HeadMenu';
import { BlogHead } from '../Micro/BlogHead';
import { SimilarPosts } from '../Micro/SimilarPosts';
import { Footer } from '../Micro/Footer';

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: white;
  position: relative;
  font-family: sans-serif;
`;

const Content = styled.div`
  width: 80vw;
  margin-left: 10vw;

  & img {
    max-width: 100%;
  }
`;

export const DesPost = (props) => {
  const DBlink = "https://www.jsonstore.io/686f9b9b4933bf5a47b073458ceec295b2208bf5bc7f231fe5440a44d4a36295";

  const [methods, setMethods] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DBlink).then(response => response.json()).then(data => {
      setMethods(data.result);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    });
  }, []);

  return (
    <>
      { !loading && <Wrap>
        <HeadMenu />
        <BlogHead />
        <br />
        <Content>
          { props.match.params.desPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.desPostID].content}} /> }
        </Content>
        <br />
        <br />
        <Footer />
      </Wrap> }
    </>
  );
};
