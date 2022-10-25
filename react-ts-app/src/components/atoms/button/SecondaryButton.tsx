import { memo } from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';
interface SecondaryButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SecondaryButton = memo(
  ({ children, onClick }: SecondaryButtonProps) => {
    console.log('SecondaryButton');
    return <SButton onClick={onClick}>{children}</SButton>;
  }
);

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
