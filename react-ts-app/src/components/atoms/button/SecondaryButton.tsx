import styled from 'styled-components';
import { BaseButton } from './BaseButton';
interface SecondaryButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SecondaryButton = ({
  children,
  onClick,
}: SecondaryButtonProps) => {
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
