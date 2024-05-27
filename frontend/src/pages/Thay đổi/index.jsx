import ThayDoiThamSo from "./ThayDoiThamSo"
import SubjectTable from "./SubjectTable"
import ClassTable from "./ClassTable"
import { SuccessAlert } from "../../layouts/Components/Alert/Success"
import { FailAlert } from "../../layouts/Components/Alert/Fail"
import { useState } from "react"

function Change() {
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)
    return (
        <div>
            <ThayDoiThamSo setFail={setFail} setSuccess={setSuccess} />
            <div className="flex flex-row">
                <ClassTable setFail={setFail} setSuccess={setSuccess}/>
                <SubjectTable setFail={setFail} setSuccess={setSuccess}/>
            </div>
            <SuccessAlert isopen={success} message='Thay đổi thành công'/>
            <FailAlert isopen={fail} message="Thay đổi không thành công"/>
        </div>
    )
}
export default Change