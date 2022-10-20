import styled from 'styled-components';
import { BaseButton } from './BaseButton';
interface SecondaryButtonProps {
  children: string;
}

export const SecondaryButton = ({ children }: SecondaryButtonProps) => {
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
