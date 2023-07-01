import tw from 'tailwind-styled-components';
export const Styled = {
  CardContainer: tw.div`
  mb-10
  mt-20
  `,
  Card: tw.div`
  bg-white
  flex
  flex-row
  m-4
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
font-semibold
  `,
  Header: tw.div`
 flex
 flex-row
 px-2
 
 justify-between

  `,
  Title: tw.div`
  font-semibold
  pt-2
  `,

  Description: tw.div`
  text-black
  w-100
  text-sm
  px-2
  

  `,
  LocationTime: tw.div`
  my-2
  `,
  Location: tw.div`
  text-xs
  `,
  Time: tw.div`
text-xs
  
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

  AbsoluteCalendarContainer: tw.div`
  relative
  bg-white
 
  `,
  CalendarContainer: tw.div`
  absolute
  bg-[#F0F0F0]
  rounded-lg
  my-auto
  right-0
  left-0
  `,
  HiddenBlock: tw.div`
  min-h-[40vh]
  `,
};
