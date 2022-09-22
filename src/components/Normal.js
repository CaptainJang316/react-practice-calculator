import React, { useEffect } from 'react';
import styled from "styled-components";

function Normal() {
    const [outPut, setOutPut] = React.useState('0');
    const [resultOupPut, setResultOupPut] = React.useState(new Array());
    let keyIndex = 0;;
    
    useEffect = (() => {
        setOutPut('0');
    }, []);

    useEffect = (() => {
        setOutPut()
    }, outPut);

    const addResultList = ((result, expression) => {
        console.log("before111: ", resultOupPut);
        const newData = {key: keyIndex, result: result, expression: expression};
        keyIndex++;
            let newResultArray = resultOupPut;
            newResultArray.push(newData);
            console.log("temp: ", newResultArray);
            setResultOupPut(newResultArray);
    }); 

    
    const getInput = ((num) => {
        if(outPut === '0') {
            setOutPut(num);
        }
        else {
            let result = outPut+num;
            setOutPut(result);
        }
    });

    const getResult = (() => {
        let result = eval(outPut);
        if(typeof result == "string") console.log("string");
        if(typeof result == "number") console.log("number");
        const resultString = result.toString();
        setOutPut(resultString);
        addResultList(resultString, outPut);
    })
    
    const backSpace = (() => {
        let result = outPut.substring(0, outPut.length-1);
        if(result == '') setOutPut('0');
        else setOutPut(result);
    })


    const OutputDiv = styled.div`
        background-color: gainsboro;
        border: 1px solid gray;
        margin-bottom: 10px;
        padding-top: 7px;
        padding-right: 15px;
        width: auto;
        height: 40px;
        text-align: right;
        font-size: 1.5rem;
    `;

    const InputButton = styled.button`
        margin: 5px;
        width: 50px;
        height: 50px;
        font-size: 20px;
    `;

    return (
        <div>
            <OutputDiv>
                {console.log("outPut!!: ", outPut)}
                <div>{outPut}</div>
            </OutputDiv>
            <div className='calculator-body-column' id="history-column">
                <button className='input-button' onClick={() => setResultOupPut([])}>clear History</button>
                {resultOupPut.map(history => {
                        console.log(history);
                        return <p onClick={() => setOutPut(history.expression)}>{history.result}</p>
                    })}
            </div>
            <div className='calculator-body-column'>
                <div className='buttons-div'>
                    <InputButton onClick={() => setOutPut('0')}>C</InputButton>
                    <InputButton onClick={() => getInput('(')}>(</InputButton>
                    <InputButton onClick={() => getInput(')')}>)</InputButton>
                    <InputButton onClick={() => getInput('%')}>%</InputButton>
                </div>
                <div className='buttons-div'>
                    <InputButton onClick={() => getInput('7')}>7</InputButton>
                    <InputButton onClick={() => getInput('8')}>8</InputButton>
                    <InputButton onClick={() => getInput('9')}>9</InputButton>
                    <InputButton onClick={() => getInput('/')}>/</InputButton>
                </div>
                <div className='buttons-div'>
                    <InputButton onClick={() => getInput('4')}>4</InputButton>
                    <InputButton onClick={() => getInput('5')}>5</InputButton>
                    <InputButton onClick={() => getInput('6')}>6</InputButton>
                    <InputButton onClick={() => getInput('*')}>*</InputButton>
                </div>
                <div className='buttons-div'>
                    <InputButton onClick={() => getInput('1')}>1</InputButton>
                    <InputButton onClick={() => getInput('2')}>2</InputButton>
                    <InputButton onClick={() => getInput('3')}>3</InputButton>
                    <InputButton onClick={() => getInput('-')}>-</InputButton>
                </div>
                <div className='buttons-div'>
                    <InputButton onClick={() => getInput('0')}>0</InputButton>
                    <InputButton onClick={() => getInput('.')}>.</InputButton>
                    <InputButton onClick={() => getResult()}>=</InputButton>
                    <InputButton onClick={() => getInput('+')}>+</InputButton>
                </div>
            </div>
            <div className='calculator-body-column'>
                <InputButton onClick={() => backSpace()}>←</InputButton>
            </div>
        </div>
    );
}

export default Normal;