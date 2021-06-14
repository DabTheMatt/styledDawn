import './App.css';
import Main from "./components/Main";
import styled from "styled-components";

function App() {
  return (
    <AppWrapper>
      
      <Main />
    </AppWrapper>
  );
}

export const AppWrapper = styled.div`
background: linear-gradient(0deg, #faa307, #023e8a);
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export default App;
