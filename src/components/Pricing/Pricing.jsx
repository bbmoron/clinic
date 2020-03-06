import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import XLSX from 'xlsx';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import pricingFile from './pricing.xlsx';

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
  width: ${ isMobile ? `96vw` : `80vw` };
  margin-left: ${ isMobile ? `1vw` : `10vw` };
`;

const ItemBox = styled.div`
  width: ${ isMobile ? `96vw` : `80vw` };
  min-height: ${ isMobile ? `180px` : `80px` };
  background: rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  color: black;
  border-radius: 8px;
  padding: ${ isMobile ? `0px 1vw` : `10px 25px` };
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

const ItemDescRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: center;
`;

export const Pricing = (props) => {
  const DBlink = "https://api.jsonbin.io/b/5e5f55de74ed8a66ce707ae8/latest";

  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetch(DBlink,{
      headers: {
        'secret-key': '$2b$10$D5yizK.APqQ/q.kQ7fcvS.J1hM7CC6JE4kgccK03nWbSG4i0s.57q'
      }
    }).then(response => response.json()).then(data => {
      setPricing(data);
      console.log(data);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    });
  }, []);

  useEffect(() => {
    if(!pricing) return;
    setFetched(true);
  }, [pricing]);

  return (
    <>
      { !loading && <Wrap>
        <HeadMenu />
        <BlogHead />
        <br />
        <Content>
          {
            fetched && Object.keys(pricing).map(key => {
              const items = pricing[key].objects.map(item => {
                return(
                  <ItemBox>
                    <ItemDesc>
                      { isBrowser && <h3 style={{ margin: 0, padding: 0 }}>{item.name}</h3> }
                      { isMobile && <b style={{ margin: 0, padding: 0 }}>{item.name}</b> }
                      <p>{item.description}</p>
                    </ItemDesc>
                    <ItemDescRight>
                      <p style={{ color: 'skyblue', paddingTop: '6px', marginRight: '10px' }}><a href="https://app.medesk.ru/patient/?e=5df0a859eec9e57d6f60e26c&a=anonymous&page=request-edit" target="_blank" style={{ textDecoration: 'none', color: 'skyblue' }}>Записаться на приём</a></p>
                      <h3>{item.price} руб.</h3>
                    </ItemDescRight>
                  </ItemBox>
                );
              });
              return(
                <>
                  <h2>{pricing[key].name}</h2>
                  <div>{ items }</div>
                  <br />
                  <br />
                  <br />
                </>
              );
            })
          }
        </Content>
        <br />
        <br />
        <Footer />
      </Wrap> }
    </>
  );
};
