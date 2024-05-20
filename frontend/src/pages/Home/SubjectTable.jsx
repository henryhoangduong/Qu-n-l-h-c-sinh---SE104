import axios from 'axios'
import { useEffect, useState } from 'react';

const url = process.env.REACT_APP_API_URL

function SubjectTable() {
    const [subject, setSubject] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`${url}/monhoc`)
                setSubject(response.data)
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }
            
        }
        fetchData()
    },[])
    return (
        
<div class="m-6 w-max relative overflow-x-auto rounded-lg" style={{border: 'black solid 3px'}}>
    <table class="w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-black uppercase  " style={{backgroundColor:'#B2CCFE',borderBottom:'black solid 3px'}}>
            <tr>
                <th scope="col" class="px-6 py-3">
                    Mã
                        </th>
                                <th scope="col" class="px-6 py-3">
                    Môn học
                        </th>
                                <th scope="col" class="px-6 py-3">
                    Hệ số
                </th>
            </tr>
        </thead>
                <tbody>
                    {subject.map((item) => (
  <tr key={item.malop} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {item.mamonhoc}
    </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {item.tenmonhoc}
                            </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {item.heso}
    </th>
  </tr>
))}
    
        </tbody>
    </table>
</div>

    )
}

export default SubjectTable;