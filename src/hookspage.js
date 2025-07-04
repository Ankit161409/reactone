import React,{useState} from 'react'

export function Hookspage()
{

  const [abc,xyz]=useState("enter your name");    
  
//  {abc is the state variable (value stored).

// xyz is the function to update the value.

// "enter your name" is the initial value.

// So at the start, abc = "enter your name".}

    const myupdate=(p)=>{

        xyz(p.target.value);           // updates abc with the value from input
    }
return (


    <div className='container'>
    <div className='row'>
    <div className='col-28'>

<input type="text" value={abc}/> 
<input type="button" value="update state" onClick={myupdate} disabled={abc==="ankit"  ? false :true}/> 
<input type="text" value={abc} onInput={myupdate}/> 
 <h3>this is element</h3>
    </div>
    </div>
    </div>
)


}