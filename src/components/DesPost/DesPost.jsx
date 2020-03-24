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

  & a {
    color: skyblue;
    text-decoration: none;
  }
`;

const PersonalPhoto = styled.img`
  width: 300px;
`;

export const DesPost = (props) => {
  const DBlink = "https://api.jsonbin.io/b/5e5f5919baf60366f0e26536/latest";

  const [methods, setMethods] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DBlink, {
      headers: {
        'secret-key': '$2b$10$D5yizK.APqQ/q.kQ7fcvS.J1hM7CC6JE4kgccK03nWbSG4i0s.57q'
      }
    }).then(response => response.json()).then(data => {
      setMethods(data);
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
