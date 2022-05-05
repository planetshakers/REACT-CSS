import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <SContainer>
        <STitle>- StyledComponents -</STitle>
        <SButton>FIGHT!!</SButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  border: solid 1px #392fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: red;
`;

const SButton = styled.button`
  background-color: yellow;
  border: none;
  padding: 8px;
  border-radius: 10px;
  &:hover {
    background-color: aqua;
    color: #fff;
  }
`;
