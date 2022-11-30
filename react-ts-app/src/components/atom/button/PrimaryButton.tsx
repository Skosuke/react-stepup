import { memo, ReactNode, VFC } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Button, IconButton } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo(
  ({ children, disabled = false, loading = false, onClick }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        disabled={disabled || loading}
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);
