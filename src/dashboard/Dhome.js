import React from 'react'

export default function Dhome() {
  return (
    <div>
      <div>
        <div className='row'>
           <div className='col-4 '>
            <div className='m-3 p-3 border rounded'>
              <p className='text-warning'>Users</p>
              <div className='d-flex justify-content-between'>
                <div><i class="bi bi-person-fill"></i></div>
                <div>4500</div>
              </div>
            </div>
           </div>
           <div className='col-4 '>
            <div className='m-3 p-3 border rounded'>
              <p className='text-warning'>News</p>
              <div className='d-flex justify-content-between'>
                <div><i class="bi bi-newspaper"></i></div>
                <div>4500</div>
              </div>
            </div>
           </div>
           <div className='col-4 '>
            <div className='m-3 p-3 border rounded'>
              <p className='text-warning'>Access</p>
              <div className='d-flex justify-content-between'>
                <div><i class="bi bi-bar-chart-fill"></i></div>
                <div>4500</div>
              </div>
            </div>
           </div>
        </div>
        <div className='p-4'>
        <table class="table  table-bordered">
  <thead>
    <tr>
      <th scope="col">a</th>
      <th scope="col">b</th>
      <th scope="col">c</th>
      <th scope="col">d</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">a</th>
      <td>a</td>
      <td>a</td>
      <td>a</td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>a</td>
      <td>a</td>
      <td>a</td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>a</td>
      <td>a</td>
      <td>a</td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>a</td>
      <td>a</td>
      <td>a</td>
    </tr>

  </tbody>
</table>
        </div>
      </div>
    </div>
  )
}
