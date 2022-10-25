import { memo, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../providers/UserProvider';

interface UserIconWithNameProps {
  image: string;
  name: string;
}

export const UserIconWithName = memo(
  ({ image, name }: UserIconWithNameProps) => {
    console.log('UserIconWithName');
    const { userInfo } = useContext<any>(UserContext);
    const isAdmin = userInfo ? userInfo.isAdmin : false;

    return (
      <SContainer>
        <SImg height={160} width={120} src={image} alt={name} />
        <SName>{name}</SName>
        {isAdmin && <SEdit>編集</SEdit>}
      </SContainer>
    );
  }
);

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

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
