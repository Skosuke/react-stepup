import styled from 'styled-components';

interface UserIconWithNameProps {
  image: string;
  name: string;
}

export const UserIconWithName = ({ image, name }: UserIconWithNameProps) => {
  return (
    <SContainer>
      <SImg height={160} width={120} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
