import React, { useState } from "react";


export default function DataTable() {
    // the initial state with objects containing the student data/properties.
    const Person = () =>{
        const initPerson = {Id:0, FirstName:"" , LastName:"", age:0, birthdate: "", country:"", city:"" }
        const [person, setPerson] = useState(initPerson);

        return (
            <div>
                <b>
                    {person.FirstName} - {person.LastName} - {person.age} 
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
    const studentList =  [
        {
            Id: 1, FirstName:"Anna" , LastName:"Karlson", age:27, birthdate: "", country:"Sverige", city:"Bromölla"
        }
        ,{
            Id:2, FirstName:"Anders" , LastName:"Olsson", age:21, birthdate: "", country:"Finland", city:"Helsingfors"
        }
        ,{
            Id:3, FirstName:"Karin" , LastName:"", age:52, birthdate: "", country:"Sverige", city:"Malmö"
        },
        {
            Id:4, FirstName:"Oskar" , LastName:"Nilsson", age:45, birthdate: "", country:"Sverige", city:"Växjö"
        }
        ,
        {
            Id:5, FirstName:"Ann" , LastName:"Svensson", age:35, birthdate: "", country:"Danmark", city:"Helsingör"
        }
    ];


    // functionconponent action 
    const tableAction = () =>{

    };

    // functionconponent 
    const tableRow = () =>{

    };
}
