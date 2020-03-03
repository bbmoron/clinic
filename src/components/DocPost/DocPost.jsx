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

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Block = styled.div`
  max-width: 50%;
`;

export const DocPost = (props) => {
  const DBlink = "https://www.jsonstore.io/cb419453d1ab29198fe619118f8520c89156d76ec5ed09a8b547767d4881f825";

  const [methods, setMethods] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DBlink).then(response => response.json()).then(data => {
      console.log(props.match.params.docPostID);
      console.log(data.result[props.match.params.docPostID]);
      setMethods(data.result);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    });
  }, []);

  return (
    <>
      <BrowserView>
        { !loading && <Wrap>
          <HeadMenu />
          <br />
          <br />
          <Content>
            <Row>
              <Block style={{ marginRight: '30px' }}>
                <img src={methods[props.match.params.docPostID].image} style={{ width: '400px', borderRadius: '6px' }} />
              </Block>
              <Block>
                <h2>
                  { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].name}} /> }
                </h2>
                <b>Образование:</b><br />
                { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].education}} /> }
                <br />
                <br />
                <b>Опыт работы:</b><br />
                { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].experience}} /> }
                <br />
                <br />
                <b>Почему я выбрал(-а) Smart Clinic:</b><br />
                { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].description}} /> }
                <br />
                <br />
                <b>Сферы работы:</b><br />
                { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].sphere}} /> }
              </Block>
            </Row>
          </Content>
          <br />
          <br />
          <Footer />
        </Wrap> }
      </BrowserView>
      <MobileView>
        { !loading && <Wrap>
            <HeadMenu />
            <br />
            <br />
            <br />
            <Content>
              <img src={methods[props.match.params.docPostID].image} style={{ width: '40vw', marginLeft: '15vw', borderRadius: '6px' }} />
              <h2>
                { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].name}} /> }
              </h2>
              <b>Образование:</b><br />
              { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].education}} /> }
              <br />
              <br />
              <b>Опыт работы:</b><br />
              { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].experience}} /> }
              <br />
              <br />
              <b>Почему я выбрал(-а) Smart Clinic:</b><br />
              { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].description}} /> }
              <br />
              <br />
              <b>Сферы работы:</b><br />
              { props.match.params.docPostID && <div dangerouslySetInnerHTML={{__html: methods[props.match.params.docPostID].sphere}} /> }
            </Content>
            <br />
            <br />
            <Footer />
        </Wrap> }
      </MobileView>
    </>
  );
};