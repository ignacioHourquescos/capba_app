import React from 'react';
import { Styled } from './styles';

export interface IPrimaryTitle {
  children: string;
}
const PrimaryTitle: React.FC<IPrimaryTitle> = ({ children }) => {
  return <Styled.Inner>{children}</Styled.Inner>;
};

export default PrimaryTitle;
