/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 1px #392fff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const titleStyle = {
    margin: 0,
    color: "red"
  };

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <Sbutton>FIGHT!!</Sbutton>
    </div>
  );
};

const Sbutton = styled.button`
  background-color: yellow;
  border: none;
  padding: 8px;
  border-radius: 10px;
  &:hover {
    background-color: aqua;
    color: #fff;
  }
`;
