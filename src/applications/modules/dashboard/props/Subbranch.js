import React from 'react'
import Thirdbranch from './Thirdbranch'
import { FaArrowDown } from 'react-icons/fa'
function Subbranch(props) {
    return (
        <div className='container-fluid mt-5 '>
            <div className='row'>
                <div className='col-md-12  p-5 bg-danger'>
                    <p className='text-light'> This is sub branch </p>
                    <p> {props.naam}</p>
                    <p> {props.umar}</p>
                    <p>  {props.vishay}</p>
                    <input type="button" value="click me" className='btn btn-info' onClick={props.sms}></input>
                    <select className='form-select'>
                        {props.namelist.map((m) => {
                            return <option key={m}>{m}</option>
                        })}
                    </select>
                        this is props drilling                     <p><FaArrowDown /></p>
                    <Thirdbranch namez={props.namelist} />

                

                </div></div>
        </div>
    )
}

export default Subbranch
