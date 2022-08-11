import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {

    const [num, setNum] = useState('');
    const [isResult, setIsResult] = useState(false)

    const handleClear = () => {
        setNum('')
    }

    const handleNum = (e) => {
        if (num === "Error") {
            setNum('Error')
        } else if (isResult === true) {
            setNum(e.target.value)
            setIsResult(false)
        } else {
            setNum(num.concat(e.target.value));
        }
    }

    const handleDelOneDigit = (e) => {
        if (num === "Error") {
            setNum('Error')
        } else {
            setNum(num.slice(0, -1));
        }
    }

    const handleResult = (e) => {
        try {
            setNum(eval(num).toString());
            setIsResult(true)
        } catch (err) {
            setNum('Error')
        }
    }
    
    const handleOperator = (e) => {
        if (num === "Error") {
            setNum('Error')
        } else {
            setNum(num.concat(e.target.value));
        }
        setIsResult(false)
    }


    return (
        <div className='wrapper'>

            <div className='screen'>
                <input placeholder='0' value={num}
                    style={
                        {
                            height: '100px', width: '100%', fontSize: '40px', backgroundColor: '#4357692d',
                            color: 'white', border: 'none', textAlign: 'right'
                        }
                    } />
            </div>

            <div className='buttonBox'>
                <button value={'1'} onClick={handleNum}>1</button>
                <button value={'2'} onClick={handleNum}>2</button>
                <button value={'3'} onClick={handleNum}>3</button>
                <button style={{ backgroundColor: 'coral' }} value={'+'} onClick={handleOperator}>+</button>
                <button value={'4'} onClick={handleNum}>4</button>
                <button value={'5'} onClick={handleNum}>5</button>
                <button value={'6'} onClick={handleNum}>6</button>
                <button style={{ backgroundColor: 'coral' }} value={'-'} onClick={handleOperator}>-</button>
                <button value={'7'} onClick={handleNum}>7</button>
                <button value={'8'} onClick={handleNum}>8</button>
                <button value={'9'} onClick={handleNum}>9</button>
                <button style={{ backgroundColor: 'coral' }} value={'*'} onClick={handleOperator}>*</button>
                <button value={'.'} onClick={handleNum}>.</button>
                <button value={'0'} onClick={handleNum}>0</button>
                <button style={{ backgroundColor: 'orange' }} value={'='} onClick={handleResult}>=</button>
                <button style={{ backgroundColor: 'coral' }} value={'/'} onClick={handleOperator}>/</button>
                <button style={{ backgroundColor: 'green' }} value={'CE'} onClick={handleDelOneDigit}>CE</button>
                <button style={{ backgroundColor: 'green' }} onClick={handleClear}>C</button>

            </div>
        </div>
    )
}
export default Calculator;

