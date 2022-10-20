import styled from 'styled-components';

import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/Input';

export const SerchInput = () => {
  return (
    <Scontainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;