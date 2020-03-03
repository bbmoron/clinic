import React from 'react';
import styled from 'styled-components';

import proc1 from './proc1.png';
import proc2 from './proc2.png';

const Wrap = styled.div`
  width: 100vw;
  min-height: 1278px;
  font-family: sans-serif;
`;

const Block = styled.div`
  height: 639px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ColumnContent = styled.div`
  width: 40vw;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  max-width: 40vw;
  object-fit: cover;
`;

export const LeftRight = () => {
  return (
    <Wrap>
      <Block>
        <Image src={proc1} />
        <Column>
          <ColumnContent>
            <h1>От правильного диагноза до выздоровления</h1>
            <p>В нашей клинике практикуется подход «от правильного диагноза до выздоровления». Основа эффективного лечения – правильная диагностика. Зная причину, мы сможем помочь. Если мы не занимаемся вашей проблемой, то подскажем кто сможет помочь именно вам. Вы не потратите время зря.</p>
          </ColumnContent>
        </Column>
      </Block>
      <Block>
        <Column>
          <ColumnContent>
            <h1>Клиентоориентированность</h1>
            <p>Наши пациенты являются полноценными участниками лечебного процесса, мы всегда советуемся с ними и практикуем принципы партнерских взаимоотношений. Ваше мнение будет выслушано и обязательно учтено.</p>
          </ColumnContent>
        </Column>
        <Image src={proc2} />
      </Block>
    </Wrap>
  );
};
