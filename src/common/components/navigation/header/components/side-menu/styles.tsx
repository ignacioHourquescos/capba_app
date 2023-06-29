import tw from 'tailwind-styled-components';
export const Styled = {
  Inner: tw.span`
 flex
 flex-col
 w-screen
 p-5
 h-screen

 justify-start
 content-start
 relative
 bg-blue
 pt-20



  `,
  MenuIconContainer: tw.div`
  fixed
  right-5
  
  md:hidden`,
  MenuItem: tw.div`
    text-xl
    py-4
    font-light
    text-white
  `,
  CategoryContainer: tw.div`
    flex
    flex-wrap
  `,
  CategoryMenuItem: tw.div`
  border
  border-solid
  text-white
  rounded-tr-3xl
  rounded-bl-3xl
  px-4
  py-1
  my-2
  text-sm
  text-white
  bg-[#C48512]
  `,
  CloseIcon: tw.div`
  absolute
  right-4
  top-6
  
  `,
};
