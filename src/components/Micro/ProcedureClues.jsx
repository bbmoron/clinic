import React from 'react';

import styled from 'styled-components';

import clue1 from './clue1.png';
import clue2 from './clue2.png';

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

const Gray = styled.p`
  color: gray;
`;

const Row = styled.div`
  width: 90vw;
  margin-left: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  margin-bottom: 30px;
`;

const Block = styled.div`
  width: 43vw;
  height: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-left: 2vw;
`;

const Blockimage = styled.img`
  width: 220px;
`;

const Column = styled.div`
  width: 30vw;
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const Cluename = styled.h1`
  text-align: left;
`;
const Cluedesc = styled.p``;

export const ProcedureClues = () => {
  return (
    <Wrap>
      <h1>Процедуру проводят при заболеваниях</h1>
      <Gray> </Gray>
      <Row>
        <Block>
          <Blockimage src={clue1} />
          <Column>
            <Cluename>Серьезное заболевание</Cluename>
            <Cluedesc>Это костное разрастание в виде шипа в подошвенной области. Возникает в результате заболеваний позвоночника, суставов ног, избыточного веса, травм связок и сухожилий. Типичный симптом – сильная боль в области пятки. Лечение данного заболевания направлено на снижение нагрузки на стопы</Cluedesc>
          </Column>
        </Block>
        <Block>
          <Blockimage src={clue2} />
          <Column>
            <Cluename>Серьезное заболевание</Cluename>
            <Cluedesc>Это костное разрастание в виде шипа в подошвенной области. Возникает в результате заболеваний позвоночника, суставов ног, избыточного веса, травм связок и сухожилий. Типичный симптом – сильная боль в области пятки. Лечение данного заболевания направлено на снижение нагрузки на стопы</Cluedesc>
          </Column>
        </Block>
      </Row>
      <Row>
        <Block>
          <Blockimage src={clue2} />
          <Column>
            <Cluename>Серьезное заболевание</Cluename>
            <Cluedesc>Это костное разрастание в виде шипа в подошвенной области. Возникает в результате заболеваний позвоночника, суставов ног, избыточного веса, травм связок и сухожилий. Типичный симптом – сильная боль в области пятки. Лечение данного заболевания направлено на снижение нагрузки на стопы</Cluedesc>
          </Column>
        </Block>
        <Block>
          <Blockimage src={clue1} />
          <Column>
            <Cluename>Серьезное заболевание</Cluename>
            <Cluedesc>Это костное разрастание в виде шипа в подошвенной области. Возникает в результате заболеваний позвоночника, суставов ног, избыточного веса, травм связок и сухожилий. Типичный симптом – сильная боль в области пятки. Лечение данного заболевания направлено на снижение нагрузки на стопы</Cluedesc>
          </Column>
        </Block>
      </Row>
    </Wrap>
  );
};
