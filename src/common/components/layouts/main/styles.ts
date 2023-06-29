import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const Layout = {
  Inner: tw.div`
  flex
  background-color: #161545;
`,
};

export const Menu = {
  Inner: tw.div`
  text-white
  p-5
  `,
  Header: tw.div`
  py-5
  `,
  Item: {
    Icon: tw.span`
    px-4
    `,
    Title: tw.span`
    `,
  },
};

export const Content = {
  Inner: styled.div`
    height: 100vh;

    background-color: #161545;
    padding: 4vw;
    @media (min-width: 1200px) {
      padding: 0 10vw;
    }
  `,
  Title: tw.div`
  flex
  w-full
  text-xl
  font-bold
  p-5
`,
  Container: tw.div`
p-5
  `,
};
