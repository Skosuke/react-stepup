import { Children, memo, ReactNode, VFC } from 'react';
import { Header } from '../organism/layout/Header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
