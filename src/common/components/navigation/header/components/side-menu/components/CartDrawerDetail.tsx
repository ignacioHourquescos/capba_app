import React from 'react';
import { Styled } from './styles';

type PostProps = {};
export interface ICartDrawerDetail {}
const CartDrawerDetail: React.FC<ICartDrawerDetail> = (props) => {
  return (
    <Styled.Inner>
      <Styled.List>
        <Styled.Item>
          <Styled.Image>image</Styled.Image>
          <Styled.Text>
            <Styled.Product>dummy product</Styled.Product>
            <Styled.Values>dummy vlaues</Styled.Values>
          </Styled.Text>
          <Styled.DeleteItem>x</Styled.DeleteItem>
        </Styled.Item>
      </Styled.List>
    </Styled.Inner>
  );
};

export default CartDrawerDetail;
