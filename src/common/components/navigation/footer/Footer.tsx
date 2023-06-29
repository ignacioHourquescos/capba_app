import React, { useContext, useEffect } from 'react';
import { Styled } from './styles';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({}) => {
  return (
    <>
      <Styled.Inner>
        <Link href={''}>
          <FacebookIcon sx={{ fontSize: 30 }} />
        </Link>
        <Link href={''}>
          <InstagramIcon sx={{ fontSize: 30 }} />
        </Link>
        <Link href={''}>
          <YouTubeIcon sx={{ fontSize: 30 }} />
        </Link>
      </Styled.Inner>
    </>
  );
};

export default Footer;
