import { createContext, ReactNode, useState } from 'react';

export const UserContext = createContext({});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState<boolean | null>(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
