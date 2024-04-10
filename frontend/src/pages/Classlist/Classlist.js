import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  const totalStudents = rows.length;

  return (
    <>
    <div className="Sum">
    Lớp : <input type="text" className="inp"/>
    Sỉ Số : {totalStudents} </div> 
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th className="expand">Họ Tên</th>
            <th>Giới Tính</th>
            <th>Năm Sinh</th>
            <th className="expand">Địa Chỉ</th>  
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const STText =
              row.No.charAt(0).toUpperCase() + row.No.slice(1);

            return (
              <tr key={idx}>
                <td>{idx+1} {STText}</td>
                <td className="expand">{row.Name}</td>
                <td>                 
                    {row.Sex}    
                </td>
                <td>
                {row.YearofBirth}
                </td>
                <td className="expand" >{row.Address}</td>
                <td className="fit"> 
                  <span className="actions"> 
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            
            ); 
          
          })} 
        </tbody>
      </table>
    </div> </>
  ); 
};
