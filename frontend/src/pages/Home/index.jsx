import React from "react"
import SideBar from "../../layouts/Components/Sidebar";
import ClassTable from "./ClassTable"
import SubjectTable from "./SubjectTable";
import StudentTable from "./StudentTable";
import Card from "../../layouts/Components/Card";

function Login() {
    
    return (
        <div className="flex flex-col px-16">
            <div class=" flex flex-row w-full h-max">
                <Card description='Số môn' number='10' color="#c1fbc0"/>
                <Card description='Số học sinh' number='10' color="#F0D0FB"/>
                <Card description='Số lớp' number='10' />
                <Card description='Tham số' number='10' color="#f3fd99"/>
            </div>
            <StudentTable />
            <div className="w-max container ">
                <ClassTable />
                <SubjectTable />
            </div>
            
        </div>
    )
}

export default Login;