import React, {  useState } from "react";

export default function DataTable() {
    // the initial state with objects containing the student data/properties.
    const initialStudentList = 
        [
            {
                Id: 1, FirstName:"Anna" , LastName:"Karlson", age:27, birthDate: "1995-01-01", country:"Sverige", city:"Bromölla"
            }
            ,{
                Id:2, FirstName:"Anders" , LastName:"Olsson", age:21, birthDate: "2001-05-06", country:"Finland", city:"Helsingfors"
            }
            ,{
                Id:3, FirstName:"Karin" , LastName:"", age:52, birthDate: "1969-10-15", country:"Sverige", city:"Malmö"
            },
            {
                Id:4, FirstName:"Oskar" , LastName:"Nilsson", age:45, birthDate: "1977-11-28", country:"Sverige", city:"Växjö"
            }
            ,
            {
                Id:5, FirstName:"Ann" , LastName:"Svensson", age:35, birthDate: "1987-04-17", country:"Danmark", city:"Helsingör"
            }    
        ];


    const [studentList] = useState(initialStudentList);
    // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties
    const [showDetails, setShowDetails] = useState(false);
    const initPerson = {
        Id:0, 
        FirstName:"" , 
        LastName:"", 
        age:0, 
        birthDate:"", 
        country:"", 
        city:"" 
    }

    const [person, setPerson] = useState(initPerson );
    // functionconponent that returns table header

    const TableHeader = () =>{
        
        return (
            
                
                     <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>More details</th>
          </tr>

        </thead>
    

        );
    };


    // functionconponent 
    const TableRow = (props) => {
        return (
            <tbody>
                {
                    props.studentList.map((person, index) => {
                        const { Id, FirstName, LastName, age } = person;
                        console.log(index)
                        
                            return (
                            <tr key={Id}>
                                <td className="table-Light">{Id}</td>
                                <td className="table-Light">{FirstName}</td>
                                <td className="table-Light">{LastName}</td>
                                <td className="table-Light">{age}</td>
                                <td className="table-Light"><ButtonClicked person={person} /></td>
                           
                            </tr>
                           
                        )
                    })
                }
            </tbody>
        )
    }

    // functionconponent action 
    const ButtonClicked = ({person}) =>{
        const display = () =>{
            setShowDetails(true);
            setPerson(person);
        };
        return <button type="button" className="btn btn-primary" onClick={display} >Details</button>
    }


    // functionconponent 
    const ShowStudentDetails = () => {
        const { Id, FirstName, LastName, country, city, birthDate } = person;
        return (
            <>
                {showDetails &&
                    <div className="card" style={{ width: '400px' }} >
                        <div className="card-header bg-info text-white">
                            Student Information
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"> {country}: {city}</h5>
                            <p className="card-text">ID: {Id}</p>
                            <p className="card-text">Name: {FirstName} {LastName}</p>
                            <p className="card-text">BirthDate: {birthDate}</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-info" onClick={() => { setShowDetails(false); setPerson(initPerson); }}>Hide info</button>
                        </div>
                    </div >
                }
            </>
        )
    }

    const Table = ({ children }) => <table className="table table-striped">{children}</table>

    return (
        <div className="container">
            <h3>Student List</h3>
            <Table>
                <TableHeader />
                <TableRow studentList={studentList} />
                
            </Table>
            <br />
            <ShowStudentDetails/>
        </div>
    );
};