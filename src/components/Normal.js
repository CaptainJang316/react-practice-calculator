import React, { useEffect } from 'react';

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


    return (
        <div>
            <div className="output-div">
                {console.log("outPut!!: ", outPut)}
                <div>{outPut}</div>
            </div>
            <div className='calculator-body-column' id="history-column">
                <button className='input-button' onClick={() => setResultOupPut([])}>clear History</button>
                {resultOupPut.map(history => {
                        console.log(history);
                        return <p onClick={() => setOutPut(history.expression)}>{history.result}</p>
                    })}
            </div>
            <div className='calculator-body-column'>
                <div className='buttons-div'>
                    <button className='input-button' onClick={() => setOutPut('0')}>C</button>
                    <button className='input-button' onClick={() => getInput('(')}>(</button>
                    <button className='input-button' onClick={() => getInput(')')}>)</button>
                    <button className='input-button' onClick={() => getInput('%')}>%</button>
                </div>
                <div className='buttons-div'>
                    <button className='input-button' onClick={() => getInput('7')}>7</button>
                    <button className='input-button' onClick={() => getInput('8')}>8</button>
                    <button className='input-button' onClick={() => getInput('9')}>9</button>
                    <button className='input-button' onClick={() => getInput('/')}>/</button>
                </div>
                <div className='buttons-div'>
                    <button className='input-button' onClick={() => getInput('4')}>4</button>
                    <button className='input-button' onClick={() => getInput('5')}>5</button>
                    <button className='input-button' onClick={() => getInput('6')}>6</button>
                    <button className='input-button' onClick={() => getInput('*')}>*</button>
                </div>
                <div className='buttons-div'>
                    <button className='input-button' onClick={() => getInput('1')}>1</button>
                    <button className='input-button' onClick={() => getInput('2')}>2</button>
                    <button className='input-button' onClick={() => getInput('3')}>3</button>
                    <button className='input-button' onClick={() => getInput('-')}>-</button>
                </div>
                <div className='buttons-div'>
                    <button className='input-button' onClick={() => getInput('0')}>0</button>
                    <button className='input-button' onClick={() => getInput('.')}>.</button>
                    <button className='input-button' onClick={() => getResult()}>=</button>
                    <button className='input-button' onClick={() => getInput('+')}>+</button>
                </div>
            </div>
            <div className='calculator-body-column'>
                <button className='input-button' onClick={() => backSpace()}>←</button>
            </div>
        </div>
    );
}

export default Normal;