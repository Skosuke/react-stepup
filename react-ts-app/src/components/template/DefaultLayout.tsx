import { Children, ReactNode } from 'react';
import { Footer } from '../atoms/lauyout/Footer';
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

export const DefaultLayout = ({ children }: HeaderOnlyProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
