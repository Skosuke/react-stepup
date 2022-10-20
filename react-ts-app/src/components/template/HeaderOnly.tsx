import { Children, ReactNode } from 'react';
import { Header } from '../atoms/lauyout/Header';

interface HeaderOnlyProps {
  children: ReactNode;
}

const style: {
  height: string;
  backgroundColor: string;
} = {
  height: '50px',
  backgroundColor: 'red',
};

export const HeaderOnly = ({ children }: HeaderOnlyProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
