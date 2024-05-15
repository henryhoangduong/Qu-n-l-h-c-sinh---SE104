import axios from 'axios'
import { useEffect, useState } from 'react';

function SubjectTable() {
    const [subject, setSubject] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:3001/monhoc')
                setSubject(response.data)
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }
            
        }
        fetchData()
    })
    return (
        
<div class="m-6 w-max relative overflow-x-auto">
    <table class="w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Môn học
                </th>
            </tr>
        </thead>
                <tbody>
                    {subject.map((item) => (
  <tr key={item.malop} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {item.tenmonhoc}
    </th>
  </tr>
))}
    
        </tbody>
    </table>
</div>

    )
}

export default SubjectTable;