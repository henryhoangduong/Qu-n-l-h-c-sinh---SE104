import StudentTable from "./StudentTable"
import Filter from './Filter/Filter'
import SearchByName from "./SearchByName"
import { useState,useEffect } from "react"
import axios from "axios"

const url = process.env.REACT_APP_API_URL

function TraCuu() {
    const [name, setName] = useState({ 'hoten': '' });
    const [students, setStudents] = useState([]);
    const handleSearch = (value) => {
        setName({ 'hoten':value})
    }
    const Search = async (name) => {
        try {
            const response = await axios.post(`${url}/students/findByOptions`, name)
            setStudents([response.data])
        } catch (error) {
            console.log('Error calling findOptions endpoint: ',error)
        }
    }
    return (
        <div className="flex flex-col ">
            <Filter />
            <div className='flex flex-row justify-between items-center'>
                <SearchByName handleSearch={handleSearch} />
                <div className="px-3 rounded-lg"  onClick={() => { Search(name) }} style={{border:'black solid 3px',cursor:'pointer'}}>
                Tìm
            </div>  
            </div> 
            <StudentTable data={students}/>
        </div>
    )
}
export default TraCuu