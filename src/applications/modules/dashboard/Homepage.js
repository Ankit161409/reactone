import React, { Fragment } from 'react'

function Homepage() {
  const localdata = JSON.parse(localStorage.getItem("apidata"));
  console.log(localdata);
  return (
    <Fragment>
    <div className='container-fluid p-5'>
      localdata length is : {localdata?.length}         {/*// ✅ Safe: Returns undefined */}
<div className='row '>
<div className='col-md-12 bg-info mt-5'>
      <table border="2"  cellPadding="5"  > 
         <thead className='fs-1' >
        <tr>
          <th>
            products id
          </th>
          <th>
            products title
          </th>
          <th>
            products price
          </th>
            <th>
            products stock
          </th>
        </tr>
        </thead>
        <tbody className='fs-1' >
        {localdata.map((n) => {
          return(
          <tr key={n.id}>
            <td>{n.id} </td>
            <td>{n.title} </td>
            <td>{n.price} </td>
            <td>{n.stock} </td>

          </tr>);
        })}
        </tbody>
      </table>
      </div>


</div>
    </div>
    </Fragment>
  )
}

export default Homepage
