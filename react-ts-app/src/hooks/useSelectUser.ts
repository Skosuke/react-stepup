import { useCallback, useState } from 'react';
import { User } from '../types/api/user';

type Props = {
  onOpen: () => void;
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback(({ onOpen, id, users }: Props) => {
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
