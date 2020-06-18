import React from "react";

function TableItem(props) {

    const fullName = `${props.employee.name.first} ${props.employee.name.last}`;
    const date = props.employee.dob.date.slice(0,10);
    const {gender, email, phone} = props.employee;
    const img = props.employee.picture.large;
    const formatDate = (dt) => {return dt.split("-").reverse().join("-")};

    return (
        <tr className="table__item-row">
            <td><img className="table__item-img" src={img} alt="employee"/></td>
            <td>{fullName}</td>
            <td>{gender}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{formatDate(date)}</td>
        </tr>
    );   
}

export default TableItem;