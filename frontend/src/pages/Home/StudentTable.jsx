import { useEffect, useState } from "react"
import axios from 'axios'

function StudentTable() {
    const [student, setStudent] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:3001/students')
                setStudent(response.data)
                console.log('response: ',response.data)
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }
        }
        fetchData()
    })
    return (
        

<div class="m-6 w-max relative overflow-x-auto">
  <div class="overflow-auto max-h-96">
    <table class="w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
        <tr>
          <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
            Họ và tên
          </th>
          <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
            Giới tính
          </th>
          <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
            Ngày sinh
          </th>
          <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-700">
            Địa chỉ
          </th>
        </tr>
      </thead>
      <tbody>
        {student.map((item) => (
          <tr key={item.malop} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.hoten}
            </th>
            <td className="px-6 py-4">
              Nam
            </td>
            <td className="px-6 py-4">
              {item.ngaysinh}
            </td>
            <td className="px-6 py-4">
              {item.diachi}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


    )
}

export default StudentTable