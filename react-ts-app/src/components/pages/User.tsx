import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { SerchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: 'kosuke',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    email: 'kosuke2022@test.com',
    phone: '090-1234-5678',
    company: {
      name: 'test株式会社',
    },
    website: 'https://test.kosuke.com',
  };
});

export const User = () => {
  const { userInfo, setUserInfo } = useContext<any>(UserContext);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SerchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
