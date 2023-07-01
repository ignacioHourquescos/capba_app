import tw from 'tailwind-styled-components';
export const Styled = {
  Card: tw.div`
  bg-white
  flex
  flex-row
  m-2
  rounded-md
  `,
  Content: tw.div`
  flex-1
  flex-col
  `,
  Date: tw.div`
  w-10
pt-2
px-2
bg-lightblue
text-white
align-middle
  `,
  Header: tw.div`
 flex
 flex-row
 
 justify-between

  `,
  Title: tw.div`
  font-semibold
  `,

  Description: tw.div`
  text-black
  w-100
  text-sm

  `,
  ButtonContainer: tw.div`
  flex
  justify-between
  `,
  LinkToEventButton: tw.button`
  shadow-2xl
  m-2
  text-lightblue

  `,
};
