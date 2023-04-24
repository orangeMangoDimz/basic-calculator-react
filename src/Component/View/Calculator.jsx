import React, { useState } from 'react';
import Button from '../Controller/Button';
import '../../Css/style.css'

const Calculator = () => {
    const [firstNum, setFirstNum] = useState(0)
    const [secNum, setSecNum] = useState(0)
    const [answer, setAnswer] = useState(0)
    numHandler = (val) => {
        console.log(val)
    }

    return (
        <div className="container mt-5 mb-5 card p-5">
            <div>
                <h1 className='fw-bold text-center fs-2'>Standard Calculator <br/> with Bootstrap</h1>
                <p className='fs-5 fw-light text-center'>Created by : <a className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' href="https://github.com/Dimasse">Dimas Dani Zaini</a></p>
                <hr />
            </div>
            <div className="mt-3 mb-3">
                <p className='fs-5  text-end font-weight-light'>History Number</p>
                <p className='fs-3 text-end'>{answer}</p>
            </div>
            <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
                <Button val="1" colSize={3}/>
                <Button val="2" colSize={3}/>
                <Button val="3" colSize={3}/>
                <Button val="+" operator={true} colSize={2}/>
            </div>
            <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
                <Button val="4" colSize={3}/>
                <Button val="5" colSize={3}/>
                <Button val="6" colSize={3}/>
                <Button val="-" operator={true} colSize={2}/>
            </div>
            <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
                <Button val="7" colSize={3}/>
                <Button val="8" colSize={3}/>
                <Button val="9" colSize={3}/>
                <Button val="x" operator={true} colSize={2}/>
            </div>
            <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
                <Button val="0" colSize={9}/>
                <Button val="/" operator={true} colSize={3}/>
            </div>
            <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
                <Button val="C" colSize={7} />
                <Button val="=" operator={true} colSize={5}/>
            </div>
        </div>
    )
}

export default Calculator