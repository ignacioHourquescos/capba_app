import React, { ReactNode } from 'react';
import { Styled } from './styles';

export interface IButtonPanel {
  col: number;
  children: ReactNode;
}
const ButtonPanel: React.FC<IButtonPanel> = ({ col, children }) => {
  if (col == 1) {
    return (
      <Styled.SingleColumnButtonPanel>
        {children}
      </Styled.SingleColumnButtonPanel>
    );
  } else {
    return (
      <Styled.DoubleColumnButtonPanel>
        {children}
      </Styled.DoubleColumnButtonPanel>
    );
  }
};

export default ButtonPanel;
