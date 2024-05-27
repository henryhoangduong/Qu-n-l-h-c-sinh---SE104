import ChonLop from "./ChonLop";
import DropDownClass from "./DropDownClass";
import StudentTable from "./StudentTable";
import { useEffect, useState } from "react";
import axios from "axios";
import ChonHocSinhModal from "./Modal";
import { SuccessAlert } from "../../layouts/Components/Alert/Success"
import { FailAlert } from "../../layouts/Components/Alert/Fail"

const url = process.env.REACT_APP_API_URL

function XepLop() {
    const [Class, setClass] = useState([]);
    const [studentListChoose, setstudentListChoose] = useState([])
    const [ClassChoose, setClassChoose] = useState({ 'classid': '' })
    const [success, seSuccess] = useState(false)
    const [fail,setFail] = useState(false)
    const [classStudent,setclassStudent]=useState({'classid':'','studentlists':[]})
        useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`${url}/class`)
                setClass(response.data)
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }
            
        }
        fetchData()
        }, [])
    const handleClickStudent = (lists) => {
        setstudentListChoose(lists)
    }
    const handleClickClass= (classId)=> {
        setClassChoose({'classid':classId})
    }
    const handleSave =  async (Class,studentList) => {
        const studentListId = studentList.map((item) => item.mahocsinh);
        const postData = {'classid':Class.classid, 'studentlists': studentListId }
        try {
            const response = await axios.post(`${url}/chitietdslop`, postData)
            seSuccess(true);
                setTimeout(() => {
                    seSuccess(false);
                }, 5000);
            
        } catch (error) {
            setFail(true);
                setTimeout(() => {
                    setFail(false);
                }, 5000);
            console.log('Error calling chitietdslop: ',error)
        }
    }
    return (
        <div className="flex flex-col ">
            <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
                <span className="mr-3"> Chọn lớp: </span>
                <DropDownClass handleClick={handleClickClass} name='Lớp' data={Class}/>            
                </div>
                <ChonHocSinhModal handleClick={handleClickStudent} />
            </div>
            <StudentTable data={studentListChoose} />
            {studentListChoose.length !== 0 && 
                <div className="flex flex-row justify-end items-end">
                <div
                   onClick={() => {
                handleSave(ClassChoose,studentListChoose)
            }} className="w-12" style={{border: 'black solid 3px', padding:'5px 10px 5px 10px',backgroundColor:'#c1fbc0',cursor:'pointer'}} >Lưu</div>
                </div>
                }
            
        </div>
    )
}

export default XepLop;