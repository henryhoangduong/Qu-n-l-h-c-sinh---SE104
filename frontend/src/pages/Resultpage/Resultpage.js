import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
 
  return (
    <>
    <div className="Title">BÁO CÁO TỔNG KẾT MÔN</div>
    <div className="Sum">
    Môn : <input type="text" className="inp1 inp"/>
    Học kỳ : <input type="text" className="inp"/></div> 
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th className="expand1">Lớp</th>
            <th className="expand1">Sỉ Số</th>
            <th className="expand1">Số Lượng Đạt</th>
            <th className="expand1">Tỉ lệ</th>  
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
                <td className="expand1">{row.Class}</td>
                <td className="expand1">                 
                    {row.Quantity}    
                </td>
                <td className="expand1">
                {row.QuantitySuccess}
                </td>
                <td className="expand1" >{(row.QuantitySuccess / row.Quantity *100).toFixed(2)}%</td>
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
