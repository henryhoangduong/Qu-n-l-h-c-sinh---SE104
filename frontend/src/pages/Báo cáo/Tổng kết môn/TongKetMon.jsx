import React, { useState, useEffect } from "react";
import "./TongKetMon.css";
import axios from "axios";

function TongKetHocKi() {
  const [classes, setClasses] = useState([]);
  const [semester, setSemester] = useState(null); // Initial state is null, meaning no semester is selected

  useEffect(() => {
    if (semester !== null) {
      axios.get(`http://localhost:3001/baocao/mon`)
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
      <div className="Title">BÁO CÁO TỔNG KẾT MÔN</div>
      <div className="Sum">
        Môn: 
        <select value={semester || ""} onChange={handleSemesterChange}>
          <option value="" disabled>Chọn môn</option>
          <option value="1">Toán</option>
          <option value="2">Văn</option>
          <option value="2">Sử</option>
          <option value="2">Địa</option>
          <option value="2">Hóa</option>
          {/* Add more options if there are more semesters */}
        </select>
      </div>
      <div className="table-wrapper">
        {semester === null ? (
          <div>Vui lòng chọn học kì để xem báo cáo.</div>
        ) : (
          <table className="table" style={{width:"100%" , border: 'black solid 3px' ,}}>
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
