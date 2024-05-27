import ThayDoiThamSo from "./ThayDoiThamSo"
import SubjectTable from "./SubjectTable"
import ClassTable from "./ClassTable"
import { SuccessAlert } from "../../layouts/Components/Alert/Success"
import { FailAlert } from "../../layouts/Components/Alert/Fail"
import { useState } from "react"

function Change() {
    const [success, seSuccess] = useState(false)
    const [fail,setFail] = useState(false)
    return (
        <div>
            <ThayDoiThamSo setFail={setFail} seSuccess={seSuccess} />
            <div className="flex flex-row">
                <ClassTable />
                <SubjectTable/>
            </div>
            <SuccessAlert isopen={success}/>
            <FailAlert isopen={fail}/>
        </div>
    )
}
export default Change