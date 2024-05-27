import ThayDoiThamSo from "./ThayDoiThamSo"
import SubjectTable from "./SubjectTable"
import ClassTable from "./ClassTable"
function Change() {
    return (
        <div>
            <ThayDoiThamSo />
            <div className="flex flex-row">
                <ClassTable />
                <SubjectTable/>
            </div>
        </div>
    )
}
export default Change