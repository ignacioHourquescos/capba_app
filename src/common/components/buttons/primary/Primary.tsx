import React from 'react';
import { Styled } from './styles';

export interface IPrimaryButton {
  path?: string;
  title: string;
  link?: string;
}
const PrimaryButton: React.FC<IPrimaryButton> = ({ title }) => {
  return <Styled.Inner>{title}</Styled.Inner>;
};

export default PrimaryButton;
