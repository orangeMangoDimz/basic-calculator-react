import React from 'react';
import '../../Css/style.css'

const Button = ({val, operator=false, colSize}) => {

    return (
        <>
            <button className={`btn col-${colSize} fw-normal fs-3 ${operator ? 'btn-warning' : 'btn-light'}`} onClick={() => } >
                {val}
            </button>
        </>
    )
}

export default Button