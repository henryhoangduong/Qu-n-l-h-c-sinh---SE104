import { useEffect, useState } from "react"
import axios from 'axios'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NhapDiem.css';


const url = process.env.REACT_APP_API_URL


function NhapDiem() {
    return (
        <>
            <p className="Title">Nhập điểm</p>
            <StudentTable />
        </>
    )
}

function Modal({ mahs, closeModal, handleMahsChange }) {
    const [mabangdiemmon, setMabangdiemmon] = useState([])
    const [malhkt, setMalhkt] = useState([])
    const [diem, setDiem] = useState([])



    const handleSubmit = async (event) => {
      
       
        axios.post(`${url}/score`, {
            mabangdiemmon: mabangdiemmon,
            mahocsinh: mahs,
            malhkt: malhkt,
            diem: diem
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4 ">Nhập điểm</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Môn</label>
                        <select id="mon" onChange={(e) => setMabangdiemmon(e.target.value)} class="bg-gray-50 border border-gray-300 mt-1 ml-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Chọn môn</option>
                            <option value="1">Toán</option>
                            <option value="2">Vật lý</option>
                            <option value="3">Hóa học</option>
                            <option value="4">Sinh học</option>
                            <option value="5">Lịch sử</option>
                            <option value="6">Địa lý</option>
                            <option value="7">Văn học</option>
                            <option value="8">Đạo đức</option>
                            <option value="9">Thể dục</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Điểm</label>
                        <input
                            type="score"
                            id="score"
                            onChange={(e) => setDiem(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="flex block text-sm font-medium text-gray-700">Bài Kiểm Tra</label>
                        <div class="flex items-center me-4 mt-3">
                            <input id="inline-radio" type="radio" value="" onChange={(e) => setMalhkt(1)} name="inline-radio-group" class="w-8 h-8 text-black-600 bg-gray-100 border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-radio" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">15p</label>
                        </div>
                        <div class="flex items-center me-4 mt-3">
                            <input id="inline-2-radio" type="radio" value="" onChange={(e) => setMalhkt(2)} name="inline-radio-group" class="w-8 h-8 text-black-600 bg-gray-100 border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-2-radio" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">45p</label>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            handleSubmit();
                            closeModal();
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Xác nhận
                    </button>
                </form>
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
        <div class="mt-6 relative overflow-x-auto rounded-lg" style={{ border: 'black solid 3px', width: '100%' }}>
            <div class="overflow-x-hidden overflow-y-auto">
                <table class="w-max text-sm text-left rtl:text-right text-gray-500 " style={{ width: '100%' }}>
                    <thead class="text-xs text-black uppercase  " style={{ backgroundColor: '#51A9FF', borderBottom: 'black solid 3px' }}>
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
                                Nhập điểm
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
                                    <FontAwesomeIcon icon={faPen} className='sidebar__icon'
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

export default NhapDiem;