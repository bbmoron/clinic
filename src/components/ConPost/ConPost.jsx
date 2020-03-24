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

import enterance from './enterance.jpg';

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

export const ConPost = (props) => {
  const DBlink = "https://api.jsonbin.io/b/5e5f5892baf60366f0e264cd/latest";

  const [methods, setMethods] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DBlink, {
      headers: {
        'secret-key': '$2b$10$D5yizK.APqQ/q.kQ7fcvS.J1hM7CC6JE4kgccK03nWbSG4i0s.57q'
      }
    }).then(response => response.json()).then(data => {
      console.log(props.match.params.docPostID);
      console.log(data[props.match.params.docPostID]);
      setMethods(data);
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
                <img src={enterance} style={{ width: '400px', borderRadius: '6px' }} />
              </Block>
              <Block>
                <h2>Реквизиты</h2>
                <p>
                  Общество с ограниченной ответственностью «Смарт Клиник»<br />
                  ИНН:​ 7839122443<br />
                  КПП:​ 783901001<br />
                  ОГРН:​ 1197847212265<br />
                  Адрес: 196084 г.Санкт-Петербург, наб. Обводного канала д. 108 А, помещение 28-Н, офис 1.<br />
                  Р/с:​ 40702810103500021689<br />
                  Банк:​ Филиал Точка ПАО Банка "ФК ОТКРЫТИЕ"<br />
                  БИК:​ 044525999<br />
                  Корр/с:​ 30101810845250000999<br />
                  Генеральный директор<br />
                  Ковзелев Павел Дмитриевич.<br />
                  Телефон: +7 (812) 679-23-88.
                </p>
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
              <img src={enterance} />
              <h2>Реквизиты</h2>
              <p>
                Общество с ограниченной ответственностью «Смарт Клиник»<br />
                ИНН:​ 7839122443<br />
                КПП:​ 783901001<br />
                ОГРН:​ 1197847212265<br />
                Адрес: 196084 г.Санкт-Петербург, наб. Обводного канала д. 108 А, помещение 28-Н, офис 1.<br />
                Р/с:​ 40702810103500021689<br />
                Банк:​ Филиал Точка ПАО Банка "ФК ОТКРЫТИЕ"<br />
                БИК:​ 044525999<br />
                Корр/с:​ 30101810845250000999<br />
                Генеральный директор<br />
                Ковзелев Павел Дмитриевич.<br />
                Телефон: +7 (812) 679-23-88.
              </p>
            </Content>
            <br />
            <br />
            <Footer />
        </Wrap> }
      </MobileView>
    </>
  );
};
