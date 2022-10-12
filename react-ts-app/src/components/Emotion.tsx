/** @jsxImportSource @emotion/react */

import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

export const EmotionJsx = () => {
  const containerStyles = css`
    border: solid 2px blue;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = css({
    margin: 0,
    color: 'green',
  });

  return (
    <div css={containerStyles}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: lightgreen;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: rgb(185, 237, 185);
    color: white;
    cursor: pointer;
  }
`;
