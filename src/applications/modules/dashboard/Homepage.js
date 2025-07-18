import React, { Fragment } from 'react'

function Homepage() {
  const localdata = JSON.parse(localStorage.getItem("apidata"));
  console.log(localdata);
  return (
    <Fragment>
    <div>
      localdata length is : {localdata.length}
      <table border="2"  >
         <thead>
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
        </tr>
        </thead>
        <tbody>
        {localdata.map((n) => {
          return(
          <tr key={n.id}>
            <td>{n.id} </td>
            <td>{n.title} </td>
            <td>{n.price} </td>
          </tr>);
        })}
        </tbody>
      </table>
    </div>
    </Fragment>
  )
}

export default Homepage
