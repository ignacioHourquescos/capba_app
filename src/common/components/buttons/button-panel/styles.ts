import styled from 'styled-components';

export const Styled = {
  Inner: styled.div`
    flex: 1;
  `,
  SingleColumnButtonPanel: styled.div`
    margin-top: 5vw;
    display: grid;

    grid-gap: 2vw;
    grid-template-columns: 1fr;
  `,
  DoubleColumnButtonPanel: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 5vw;
    grid-gap: 2vw;
  `,
};
