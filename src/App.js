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

function App() {
  return (
    <div className="app">
      <h1>Calculator</h1>
      <Calculator>
        <Normal/>
      </Calculator>
    </div>
    
  );
}

export default App;
