import React, { Fragment } from 'react'

function Homepage() {
  const localdata = JSON.parse(localStorage.getItem("apidata"));
  console.log(localdata);
  return (
    <Fragment>
    <div className='container-fluid p-5'>
      {/* localdata length is : {localdata?.length || 0}          // ✅ Safe: Returns undefined */}
   <p className='mt-4'> Products details </p>
<div className='row '>
<div className='col-md-12 bg-info mt-5'>
      <table border="2"  className='table' > 
         <thead >
        <tr>
          <th>
         Id
          </th>
          <th>
          title
          </th>
          <th>
          price
          </th>
            <th>
            stock
          </th>
             <th>
            category
          </th>
           <th>
            warranty
          </th>
           <th>
          return Policy
          </th>
        </tr>
        </thead>
        <tbody  >
        {localdata.map((n) => {
          return(
          <tr key={n.id}>
            <td>{n.id} </td>
            <td>{n.title} </td>
            <td>{n.price} </td>
            <td>{n.stock} </td>
            <td>{n.category} </td>
            <td>{n.warrantyInformation} </td>
            <td>{n.returnPolicy} </td>

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
