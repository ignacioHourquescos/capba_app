import React from 'react';
import { Styled } from './styles';
import PrimaryButton from '@/common/components/buttons/primary/Primary';
import ButtonPanel from '@/common/components/buttons/button-panel/ButtonPanel';
import buttonRouter from '@/lib/fake-api/fakeApi';
import Link from 'next/link';

export interface IHomeContent {}
const HomeContent: React.FC<IHomeContent> = (props) => {
  return (
    <Styled.Inner>
      <Styled.Carrousel src="/carrouselDummyImage.webp"></Styled.Carrousel>
      <ButtonPanel col={2}>
        {buttonRouter.index.map((element, idx) =>
          element.type == 'internal' ? (
            <Link key={idx} href={`${element.url}`}>
              <PrimaryButton title={`${element.title}`} />
            </Link>
          ) : (
            <Link key={idx} href={`${element.url}`}>
              <PrimaryButton title={`${element.title}`} />
            </Link>
          )
        )}
      </ButtonPanel>
      <ButtonPanel col={1}>
        <PrimaryButton title="Capba en linea" />
      </ButtonPanel>
    </Styled.Inner>
  );
};

export default HomeContent;
