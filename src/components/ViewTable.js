import React from 'react'
import {useState,useEffect} from "react";
import axios from "axios";
import ViewTableRow from  "./ViewTableRow";

function ViewTable() {
    const [employees, setEmployees] = useState([]);
    useEffect(()=>{
        axios.get("https://employeedatabasee.onrender.com/employee/")
        .then((res) => {
            setEmployees(res.data);

        })
        .catch((err)=> {
            console.log(err);
        });
    },[]);
    const TableData = ()=> {
        return employees.map((res,i)=> {
            return <ViewTableRow obj={res} key={i}/>
        });
    };
  return (
    <div>
        {console.log(employees)}
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </thead>
            <tbody>{TableData()}</tbody>
        </table>
      
    </div>
  )
}

export default ViewTable
