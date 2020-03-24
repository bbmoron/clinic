import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { HeadMenu } from '../Micro/HeadMenu';
import { BlogHead } from '../Micro/BlogHead';
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
    max-width: 350px;
  }
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

export const BlogPost = (props) => {
  const DBlink = "https://api.jsonbin.io/b/5e7a06ea79d7e24dd30e2ecf/latest";

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DBlink, {
      headers: {
        'secret-key': '$2b$10$D5yizK.APqQ/q.kQ7fcvS.J1hM7CC6JE4kgccK03nWbSG4i0s.57q'
      }
    }).then(response => response.json()).then(data => {
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
          <a href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
            <TypeFormMiniGreen>
              Записаться на прием
            </TypeFormMiniGreen>
          </a>
        </Content>
        <br />
        <br />
        <Footer />
      </Wrap> }
    </>
  );
};
