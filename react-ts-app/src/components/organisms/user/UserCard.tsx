import { memo } from 'react';
import styled from 'styled-components';
import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';
interface UserProps {
  user: {
    id: number;
    name: string;
    image: string;
    email: string;
    phone: string;
    company: {
      name: string;
    };
    website: string;
  };
}

export const UserCard = memo(({ user }: UserProps) => {
  console.log('UserCard');
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDL>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
});

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
