import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { object, string, TypeOf } from 'zod';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Styled } from './styles';
import Link from 'next/link';

// Todo: Replace with store.menus
const menuArray: { route: string; name: string }[] = [
  { route: '/', name: 'Inicio' },
  { route: '/contact', name: 'Contacto' },
  { route: '/products', name: 'Tienda' },
  { route: '/account', name: 'Detalle de cuenta' },
];

type PostProps = {};

const SideMenu: React.FC<PostProps> = ({}) => {
  const [state, setState] = useState(false);

  const closeDrawer = () => {
    setState(false);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <Styled.MenuIconContainer>
        <MenuIcon
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(false)}
        />
      </Styled.MenuIconContainer>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgb(240,240,240,0.8)',
            backdropFilter: 'blur(10px)',
          },
        }}
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Styled.Inner>
          <Styled.CloseIcon>
            <CloseIcon
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(true)}
              style={{ color: 'white' }}
            />
          </Styled.CloseIcon>

          {menuArray.map((element, idx) => (
            <Styled.MenuItem key={idx} onClick={toggleDrawer(false)}>
              <Link href={element.route}>{element.name}</Link>
            </Styled.MenuItem>
          ))}
        </Styled.Inner>
      </Drawer>
    </>
  );
};

export default SideMenu;
