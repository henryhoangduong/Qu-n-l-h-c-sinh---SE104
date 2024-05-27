import { useEffect,useState } from "react";
import DropDownClass from "./DropDownClass";
import DropDownAge from "./DropDownAge";
import axios from "axios";
import DropDownMark from "./DropDownMark";

const url = process.env.REACT_APP_API_URL

function Filter() {
    const age = [{ 'tuoi': '15' }, { 'tuoi': '16' }, { 'tuoi': '17' }, { 'tuoi': '18' }, { 'tuoi': '19' }, { 'tuoi': '20' }]
    const mark = [{'diem':'1'},{'diem':'2'},{'diem':'3'},{'diem':'4'},{'diem':'5'},{'diem':'6'},{'diem':'7'},{'diem':'8'},{'diem':'9'},{'diem':'10'}]
    const [Class, setClass] = useState([]);
    const [options,setOptions] = useState({'malop':'','diem':'','tuoi':''})
    const handleOptions = (name,value) => {
        setOptions(current => ({
            ...current,
           name : value
        }));
        
    }
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
    },[])
    return (
        <div class='flex flex-row justify-between '>
            <div class='flex flex-row  items-center'>
                <span className="mr-3"> Lọc theo: </span>
                <DropDownClass data={Class} name='Lớp' option={handleOptions}/>
                <DropDownMark data={mark} name='Điểm' option={handleOptions}/>
                <DropDownAge data={age} name='Tuổi' option={handleOptions}/>
            </div>
            <div className="px-3 rounded-lg" style={{border:'black solid 3px',cursor:'pointer', backgroundColor :'#81C3CF' , padding : '5px 20px'}}>
                Lọc
            </div>
    </div>    
    )
}

export default Filter;