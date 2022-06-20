import React from 'react'
import './ass4.css';

function Student() {
  return (
    
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Course</th>
        <th scope="col">Batch</th>
        <th scope="col">Change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">John</th>
        <td>24</td>
        <td>MERN</td>
        <td>October</td>
        <td>Edit</td>
      </tr>
      <tr>
        <th scope="row">Doe</th>
        <td>25</td>
        <td>MERN</td>
        <td>November</td>
        <td>Edit</td>
      </tr>
      <tr>
      <th scope="row">Mary</th>
        <td>23</td>
        <td>MERN</td>
        <td>November</td>
        <td>Edit</td>
      </tr>
      <tr>
      <th scope="row">Sam</th>
        <td>25</td>
        <td>MERN</td>
        <td>January</td>
        <td>Edit</td>
      </tr>
      <tr>
      <th scope="row">Rony</th>
        <td>24</td>
        <td>MERN</td>
        <td>November</td>
        <td>Edit</td>
      </tr>
      <tr>
      <th scope="row">Lumy</th>
        <td>25</td>
        <td>MERN</td>
        <td>September</td>
        <td>Edit</td>
      </tr>
    </tbody>
  </table>
  )
  
}

export default Student