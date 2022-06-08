import React, { useState } from "react";


export default function DataTable() {
    // the initial state with objects containing the student data/properties.
    const Person = () =>{
        const initPerson = {Id:"", FirstName:"" , LastName:"", Email:"", Title:""}
        const [person, setPerson] = useState(initPerson);

        return (
            <div>
                <b>
                    {person.FirstName} - {person.LastName} - {person.Email} - {person.Title}
                </b>
            </div>
        );
    };

    // showDetails state for displaying student details with a boolean,the button onclick function displayData returns a true value and the properties
    const showDetails = () =>{

    }

    
    // functionconponent that returns table header
    const tableHeader = () =>{
        return (
            <div>
                <h1>
                    Workshop 1 Student list
                </h1>
            </div>

        );
    };

    // functionconponent 
    const studentList = () =>{


    };

    // functionconponent action 
    const tableAction = () =>{

    };

    // functionconponent 
    const tableRow = () =>{

    };
}
