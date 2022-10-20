import styled from 'styled-components';
import { BaseButton } from './BaseButton';

interface PrimaryButtonProps {
  children: string;
}

export const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
