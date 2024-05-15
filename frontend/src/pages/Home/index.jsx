import React from "react"
import SideBar from "../../layouts/Components/Sidebar";
import ClassTable from "./ClassTable"
import SubjectTable from "./SubjectTable";
import StudentTable from "./StudentTable";

function Login() {
    
    return (
        <div className="w-max container">
            <SideBar />
            <div className="w-max container ">
                <ClassTable />
                <SubjectTable />
            </div>
            <StudentTable />
        </div>
    )
}

export default Login;