import React, { useState } from "react";
import './App.css';

import DataTable from './table/DataTable';
function App() {
 const [persons, SetPerson] = useState([DataTable.StudentList])
 
  return (
    <div className="App">
      {DataTable.TableHeader}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>

        </thead>
        <tbody>
              {console.log(persons)}
              {DataTable.tableRow}
        </tbody>

      </table>

    </div>
  );
}

export default App;
