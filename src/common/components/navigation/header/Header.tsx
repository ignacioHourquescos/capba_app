import React, { useContext } from 'react';

import { Styled } from './styles';
import SideMenu from './components/side-menu/SideMenu';
import { useRouter } from 'next/router';
export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({}) => {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };
  return (
    <Styled.Inner>
      <Styled.Logo onClick={goHome} src="/logo.webp"></Styled.Logo>
      {/* <SideMenu /> */}
    </Styled.Inner>
  );
};

export default Header;
