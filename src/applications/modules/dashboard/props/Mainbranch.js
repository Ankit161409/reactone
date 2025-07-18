import React from 'react'
import Subbranch from './Subbranch'
import { FaArrowDown } from 'react-icons/fa';


function Mainbranch() {
    const name = "ankit";
    const age = 20;
    const subject = "java";
    const names = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Helen",
        "Ivy",
        "Jack"
    ];

    const msg = () => {
        alert("this function is pass form mainbranch"
        );
    }
    return (
        <div className='container-fluid mt-5 '>
            <div className='row'>
                <div className='col-md-12 p-5 bg-warning'>
                    <b className='text-light'> This is main branch</b> <p>{name}</p>

                    Data pass to subbranch via props
                    <p><FaArrowDown /></p>




                    <Subbranch naam={name} umar={age} vishay={subject} sms={msg} namelist={names}/>
                </div></div>
        </div>
    )
}

export default Mainbranch
