import tw from 'tailwind-styled-components';

export const Layout = {
  Inner: tw.div`
  flex
  
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
  Inner: tw.div`
  h-screen
  bg-blue
  p-4
  lg:px-20
  
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
