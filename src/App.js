import styled from "styled-components";

const Title = styled.h1`
  color:${(prop) => prop.theme.textColor}
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.backgroundColor}
`;

function App() {
  return (
    <Wrapper>
      <Title>World of Warcraft</Title>
    </Wrapper>
  );
}

export default App;
