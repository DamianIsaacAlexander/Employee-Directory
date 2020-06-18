import React from "react";
import TableItem from "../TableItem";
import "./style.css";

function Table({dispatch, state}) {
    return (
        <div className="employee-table-container">
            <div className="table-scroll">
                <table className="employee-table">
                    <thead className="table__header">
                        <tr className="table__header-row">
                            <th className="table__header-item">Image</th>
                            <th className="table__header-item" onClick={() => {dispatch({type: "name"})}}>Name</th>
                            <th className="table__header-item" onClick={() => {dispatch({type: "gender"})}}>Gender</th>
                            <th className="table__header-item" onClick={() => {dispatch({type: "email"})}}>Email</th>
                            <th className="table__header-item" onClick={() => {dispatch({type: "phone"})}}>Phone</th>
                            <th className="table__header-item" onClick={() => {dispatch({type: "age"})}}>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.employees.map((employee, indx) => {
                           return <TableItem key={indx} employee={employee}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;