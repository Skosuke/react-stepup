import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { memo, useCallback, useEffect, VFC } from 'react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useSelectUser } from '../../hooks/useSelectUser';
import { UserCard } from '../organism/user/userCard';
import { UserDetailModal } from '../organism/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { LoginUser } = useLoginUser();
  console.log(LoginUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ onOpen, id, users });
    },
    [users]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl="https://picsum.photos/400/300"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
