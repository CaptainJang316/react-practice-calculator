import './App.css';
import Normal from './components/Normal';
import styled from "styled-components";

const Calculator = styled.div`
  background-color: aliceblue;
  border: 1px solid gray;
  margin: auto;
  /* margin-top: 30px; */
  width: 400px;
  height: auto;
  padding: 15px;
`;

const Board = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: center;
  margin-top: 0px; 
  height: 44rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;


function App() {
  return (
    <Board>
      <Title>Calculator</Title>
      <Calculator>
        <Normal/>
      </Calculator>
    </Board>
  );
}

export default App;
