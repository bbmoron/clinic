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
`;

export const BlogPost = (props) => {
  const DBlink = "https://api.npoint.io/6e158030756a77532617";

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DBlink).then(response => response.json()).then(data => {
      setPosts(data);
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
          { props.match.params.blogPostID && <div dangerouslySetInnerHTML={{__html: posts[props.match.params.blogPostID]}} /> }
        </Content>
        <br />
        <br />
        <Footer />
      </Wrap> }
    </>
  );
};
