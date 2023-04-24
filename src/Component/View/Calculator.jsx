import React, { useEffect, useState } from "react";
import Button from "../Controller/Button";
import "../../Css/style.css";

const Calculator = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secNum, setSecNum] = useState(0);
  const [operator, setOperator] = useState(null)
  const [result, setResult] = useState(0);
  const [displayNum, setDisplayNum] = useState(0)
  const [historyNum, setHistoryNum] = useState("History Number")
  let res

  useEffect(() => {
    showDisplay()
  }, [firstNum, secNum])

  const showDisplay = () => {
    if (secNum){
        setHistoryNum(firstNum.toString() + operator + secNum)
        setDisplayNum(secNum)
    }
    else if (firstNum && operator){
        setHistoryNum(firstNum.toString() + operator)
        setDisplayNum(result)
    }
    else if (firstNum){
        setHistoryNum(firstNum.toString())
        setDisplayNum(firstNum)
    }
    else if (result){
        setDisplayNum(result)
        setHistoryNum(result)
    }
    else{
        setDisplayNum(0)
    }
  }

  const numHandler = (val) => {
    if (!firstNum && !operator){
        setFirstNum(val.toString())
    }
    else if (firstNum && !operator){
        setFirstNum(firstNum + val)
    }
    else if (!secNum){
        setSecNum(val.toString())
    }
    else{
        setSecNum(secNum + val)
    }
  };

  const opHandler = (val) => {
      if (firstNum && secNum){
          resHandler()
          setFirstNum(res)
          setOperator(val)
      }
      else if (firstNum){
        setHistoryNum(firstNum.toString() + val)
        setOperator(val)
    }
    else if (result){
        setFirstNum(result)
        setOperator(val)
    }
  };

  const clearHandler = () => {
    setFirstNum(null)
    setSecNum(null)
    setOperator(null)
    setDisplayNum(0)
    setHistoryNum("History Number")
  };

  const resHandler = () => {
    switch (operator) {
        case `+`:
            res = parseFloat(firstNum) + parseFloat(secNum)
            clearHandler()
            setResult(res)
            break;
        case `-`:
            res = parseFloat(firstNum) - parseFloat(secNum)
            clearHandler()
            setResult(res)
            break;
        case `x`:
            res = parseFloat(firstNum) * parseFloat(secNum)
            clearHandler()
            setResult(res)
            break;
        case `/`:
            res = parseFloat(firstNum) / parseFloat(secNum)
            clearHandler()
            setResult(res)
            break;
    
        default:
            setResult(firstNum)
            break;
    }
    console.log(`${firstNum} ${operator} ${secNum} = ${res}`)
  };

  return (
    <div className="container mt-5 mb-5 card p-5">
      <div>
        <h1 className="fw-bold text-center fs-2">
          Standard Calculator <br /> with Bootstrap
        </h1>
        <p className="fs-5 fw-light text-center">
          Created by :
          <a
            className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="https://github.com/Dimasse"
          >
            Dimas Dani Zaini
          </a>
        </p>
        <hr />
      </div>
      <div className="mt-3 mb-3">
        <p className="fs-5  text-end font-weight-light">{historyNum}</p>
        <p className="fs-3 text-end">{displayNum}</p>
      </div>
      <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
        <Button val="1" colSize={3} e={numHandler} />
        <Button val="2" colSize={3} e={numHandler} />
        <Button val="3" colSize={3} e={numHandler} />
        <Button val="+" operator={true} colSize={2} e={opHandler} />
      </div>
      <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
        <Button val="4" colSize={3} e={numHandler} />
        <Button val="5" colSize={3} e={numHandler} />
        <Button val="6" colSize={3} e={numHandler} />
        <Button val="-" operator={true} colSize={2} e={opHandler} />
      </div>
      <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
        <Button val="7" colSize={3} e={numHandler} />
        <Button val="8" colSize={3} e={numHandler} />
        <Button val="9" colSize={3} e={numHandler} />
        <Button val="x" operator={true} colSize={2} e={opHandler} />
      </div>
      <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
        <Button val="0" colSize={9} e={numHandler} />
        <Button val="/" operator={true} colSize={3} e={opHandler} />
      </div>
      <div className="col-12 mt-3 mb-3 d-flex justify-content-between">
        <Button val="C" colSize={7} e={clearHandler} />
        <Button val="=" operator={true} colSize={5} e={resHandler} />
      </div>
    </div>
  );
};

export default Calculator;
