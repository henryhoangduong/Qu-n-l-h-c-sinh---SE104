import { useEffect, useState } from "react"
import axios from 'axios'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BangDiem.css';


const url = process.env.REACT_APP_API_URL

const subjectMapping = {
    1: 'Toán',
    2: 'Vật lý',
    3: 'Hóa học',
    4: 'Sinh học',
    5: 'Lịch sử',
    6: 'Địa lý',
    7: 'Văn học',
    8: 'Đạo đức',
    9: 'Thể dục'
};

function BangDiem() {
    return (
        <>
            <h1>Bảng Điểm</h1>
            <StudentTable />
        </>
    )
}

function Modal({ mahs, closeModal, handleMahsChange }) {
    const [mabangdiemmon, setMabangdiemmon] = useState([])
    const [malhkt, setMalhkt] = useState([])
    const [diem, setDiem] = useState([])

    const [student, setStudent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/score`);
                console.log(response);
                if (response.data && Array.isArray(response.data.data)) {
                    const filteredData1 = response.data.data.filter(item => item.mahocsinh === mahs && item.malhkt === 1);
                    const filteredData2 = response.data.data.filter(item => item.mahocsinh === mahs && item.malhkt === 2);
                    
                    const map1 = new Map();
                    filteredData1.forEach(item => {
                        map1.set(`${item.mahocsinh}-${item.mabangdiemmon}`, item);
                    });

                    const filteredData3 = filteredData2.map(item => {
                        const key = `${item.mahocsinh}-${item.mabangdiemmon}`;
                        const correspondingItem = map1.get(key);
                        if (correspondingItem) {
                            return {
                                mahs: item.mahocsinh,
                                mabangdiemmon: item.mabangdiemmon,
                                diem15: correspondingItem.diem,
                                diem45: item.diem,
                            };
                        }
                        return null;
                    }).filter(item => item !== null);
                   
                    setStudent(filteredData3);
                } else {
                    console.error('Response data is not in the expected format:', response.data);
                }
            } catch (error) {
                console.log("Error fetching data: ", error)
            }
        }
        fetchData()
    }, [])




    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="bg-white p-6 rounded-lg shadow-lgw-3/4 h-3/4 overflow-auto">
                <button
                    type="button"
                    onClick={closeModal}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Đóng bảng điểm
                </button>

                <div class="container mx-auto p-6 h-full">
                    <table class="min-w-full border-collapse border border-gray-300 ">
                        <thead>
                            <tr class="bg-purple-300 border-b-3 border-black">
                                <th class="px-6 py-3 border border-gray-300">Môn học</th>
                                <th class="px-6 py-3 w-40 border border-gray-300"> 15p</th>
                                <th class="px-6 py-3 w-40 border border-gray-300">Điểm 45p</th>
                                <th class="px-6 py-3 w-40  border border-gray-300">Điểm Tổng Kết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white border-b' : 'bg-gray-50 border-b'}>
                                    <td className="px-6 py-4 border border-gray-300">
                                        {subjectMapping[item.mabangdiemmon] || item.mabangdiemmon}
                                    </td>
                                    <td className="px-6 py-4 border border-gray-300">{item.diem15}</td>
                                    <td className="px-6 py-4 border border-gray-300">{item.diem45}</td>
                                    <td className="px-6 py-4 border border-gray-300">{(1/4 * item.diem15 + 3/4 * item.diem45).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mahs, setMahs] = useState([])
    const handleMahsChange = (event) => {
        setMahs(event.target.value);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div class="mt-6 relative overflow-x-auto rounded-lg" style={{ border: 'black solid 3px', width: '1020px' }}>
            <div class="overflow-x-hidden overflow-y-auto">
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
                            <th scope="col" class="pl-6 pr-0 py-3 ">
                                Địa chỉ
                            </th>
                            <th scope="col" class="py-3 flex justify-center">
                                Xem điểm
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
                                <td className="pl-6 pr-0 py-4">
                                    {item.diachi}

                                </td>
                                <td className="py-4 flex justify-center">
                                    <FontAwesomeIcon icon={faEye} className='sidebar__icon'
                                        onClick={() => {
                                            openModal();
                                            setMahs(item.mahocsinh)
                                        }}
                                    />
                                    {isModalOpen && (
                                        <Modal
                                            mahs={mahs}
                                            closeModal={closeModal}
                                            handleMahsChange={handleMahsChange}
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default BangDiem;