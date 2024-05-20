import { useEffect, useState } from "react"
import axios from 'axios'

const url = process.env.REACT_APP_API_URL

function NhapDiem() {
    return (
        <>
            <h1>Nhập điểm</h1>
            <StudentTable />
        </>
    )
}

function StudentTable() {
    const [student, setStudent] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/students`)
                setStudent(response.data)
            } catch (error) {
                console.log("Error fetching data: ", error)
            }
        }
        fetchData()
    }, [])
    return (
        <div class="mt-6 relative overflow-x-auto rounded-lg" style={{ border: 'black solid 3px', width: '1020px' }}>
            <div class="overflow-x-hidden ">
                <table class="w-max text-sm text-left rtl:text-right text-gray-500 " style={{ width: '1020px' }}>
                    <thead class="text-xs text-black uppercase  " style={{ backgroundColor: '#BA9CE8', borderBottom: 'black solid 3px' }}>
                        <tr>
                            <th scope="col" class="px-6 py-3 ">
                                Họ và tên
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Giới tính
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                Ngày sinh
                            </th>
                            <th scope="col" class="px-6 py-3 ">
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

export default NhapDiem;