import React from 'react';
import { Styled } from './styles';

export interface ISecondaryButton {
  path?: string;
  children: string;
  link?: string;
}
const SecondaryButton: React.FC<ISecondaryButton> = ({ children }) => {
  return <Styled.Inner>{children}</Styled.Inner>;
};

export default SecondaryButton;
