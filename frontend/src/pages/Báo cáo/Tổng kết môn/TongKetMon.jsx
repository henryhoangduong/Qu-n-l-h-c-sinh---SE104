import React, { useState, useEffect } from "react";
import "./TongKetMon.css";
import axios from "axios";

const url = process.env.REACT_APP_API_URL


function TongKetHocKi() {
  const [classes, setClasses] = useState([]);
  const [semester, setSemester] = useState(null); // Initial state is null, meaning no semester is selected
  const [monhoc, setMonhoc] =useState([])
  useEffect(() => {
    if (semester !== null) {
      axios.get(`${url}/baocao/mon`)
        .then(response => {
          setClasses(response.data);
        })
        .catch(error => {
          console.error('Error fetching classes:', error);
        });
    }
  }, [semester]);
  useEffect(() => {
    const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/monhoc`);
              setMonhoc(response.data);
              console.log('monhoc: ',monhoc);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
        fetchData();
  },[])

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
          {monhoc.map((item) => (
              <option value={item.mamonhoc} key={item.mamonhoc}>{item.tenmonhoc.slice(0,1).toUpperCase()+item.tenmonhoc.slice(1)}</option>
          ))}
          {/* Add more options if there are more semesters */}
        </select>
      </div>
      <div className="table-wrapper">
        {semester === null ? (
          <div>Vui lòng chọn môn học để xem báo cáo.</div>
        ) : (
          <div class="mt-6 relative overflow-x-auto rounded-lg" style={{ border: 'black solid 3px', width: '1020px' }}>
          <div class="overflow-x-hidden overflow-y-auto">
          <table className="table" style={{width:"100%"  ,}}>
            <thead className="text-xs text-black uppercase" style={{backgroundColor:'#51A9FF',borderBottom:'black solid 3px'}}>
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
          </table> </div> </div>
        )}
      </div>
    </>
  );
}

export default TongKetHocKi;
