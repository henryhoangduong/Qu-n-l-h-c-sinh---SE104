import React, { useEffect, useState } from "react"
import ClassTable from "./ClassTable"
import SubjectTable from "./SubjectTable";
import StudentTable from "./StudentTable";
import Card from "../../layouts/Components/Card";
import axios from "axios";
import ThamSoTable from "./ThamSoTable";
import ThemHocSinh from "./ThemHocSinh";

const url = process.env.REACT_APP_API_URL


function Login() {
    const [subject, setSubject] = useState([]);
    const [student, setStudent] = useState([]);
    const [Class, setClass] = useState([]);
    const [thamSo, setThamSo] = useState([]);
    useEffect(() => {
       const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/class`)
                setClass(response.data)
            } catch (error) {
               console.log("Error fetching data: ",error) 
           }
           try {
               const response = await axios.get(`${url}/students`)
               setStudent(response.data)
           } catch (error) {
            
           }
            try {
                const response = await axios.get(`${url}/monhoc`)
                setSubject(response.data)
           } catch (error) {
            
           }
            try {
                const response = await axios.get(`${url}/thamso`)
                setThamSo(response.data[0])
                console.log('tham so: ', Object.keys(thamSo).length)
           } catch (error) {
            
           }
        }
        fetchData() 
    },[])
    return (
        <div className="flex flex-col px-16">
            <div class=" flex flex-row w-full h-max">
                <Card description='Số môn' number={subject.length} color="#74A8DC"/>
                <Card description='Số học sinh' number={student.length} color="#A174DC"/>
                <Card description='Số lớp' number={Class.length} color="#81C3CF" />
                <Card description='Tham số' number={Object.keys(thamSo).length} color="#91B0BF"/>
            </div>
            <StudentTable />
            <div className="w-max container ">
                <ClassTable />
                <SubjectTable />
                <ThamSoTable data={ thamSo} />
                {/* <ThemHocSinh /> */}
            </div>
        </div>
    )
}

export default Login;