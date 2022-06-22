import React from 'react'
import {Link} from 'react-router-dom'
import './ass4.css';

function Student() {
  return (
    <div>
    <h1 className='h'>Student Profile</h1>
    <Link to = '/AddStud'><button className='add'>Add Student</button></Link>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>Change</th>
      </tr>
      <tr>
        <td>John</td>
        <td>25</td>
        <td>MERN</td>
        <td>October</td>
        <td><Link to = '/EditStudent/'>Edit</Link></td>
      </tr>
      <tr>
        <td>Doe</td>
        <td>23</td>
        <td>MERN</td>
        <td>January</td>
        <td><Link to = '/EditStudent/'>Edit</Link></td>

      </tr>
      <tr>
        <td>Smily</td>
        <td>23</td>
        <td>MERN</td>
        <td>October</td>
        <td><Link to = '/EditStudent/'>Edit</Link></td>

      </tr>
      <tr>
        <td>Sam</td>
        <td>25</td>
        <td>MERN</td>
        <td>October</td>
        <td><Link to = '/EditStudent/'>Edit</Link></td>

      </tr>
      <tr>
        <td>Lumy</td>
        <td>23</td>
        <td>MERN</td>
        <td>November</td>
        <td><Link to = '/EditStudent/'>Edit</Link></td>

      </tr>
    </table>
    </div>
    
    
  )
  
}

export default Student