import React, { useState, useEffect } from "react";
import "./TongKetHocKi.css";
import axios from "axios";

const url = process.env.REACT_APP_API_URL


function TongKetHocKi() {
  const [classes, setClasses] = useState([]);
  const [semester, setSemester] = useState(null); // Initial state is null, meaning no semester is selected

  useEffect(() => {
    if (semester !== null) {
      axios.get(`${url}/baocao/hocki`)
        .then(response => {
          setClasses(response.data);
        })
        .catch(error => {
          console.error('Error fetching classes:', error);
        });
    }
  }, [semester]);

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  return (
    <>
      <div className="Title">BÁO CÁO TỔNG KẾT HỌC KÌ</div>
      <div className="Sum" >
        Học kì: 
        <select style={{ border: "black solid 3px"}} value={semester || ""} onChange={handleSemesterChange}>
          <option value="" disabled>Chọn học kì</option>
          <option value="1">Học kì 1</option>
          <option value="2">Học kì 2</option>
          {/* Add more options if there are more semesters */}
        </select>
      </div>
      <div className="table-wrapper">
        {semester === null ? (
          <div>Vui lòng chọn học kì để xem báo cáo.</div>
        ) : (
          <table className="table" style={{width:"100%" ,border: 'black solid 3px'}}>
            <thead className="text-xs text-black uppercase" style={{backgroundColor:'#BA9CE8',borderBottom:'black solid 3px'}}>
              <tr>
                <th>No</th>
                <th scope="col" className="px-14 py-3">Lớp</th>
                <th scope="col" className="px-14 py-3">Sỉ Số</th>
                <th scope="col" className="px-14 py-3">Số Lượng Đạt</th>
                <th scope="col" className="px-14 py-3">Tỉ lệ</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, idx) => (
                <tr key={classItem.id}>
                  <td scope="col" className="px-14 py-3">{idx + 1}</td>
                  <td scope="col" className="px-14 py-3">{classItem.lop}</td>
                  <td scope="col" className="px-14 py-3">{classItem.siso}</td>
                  <td scope="col" className="px-14 py-3">{classItem.sld}</td>
                  <td scope="col" className="px-14 py-3">{classItem.tile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default TongKetHocKi;
