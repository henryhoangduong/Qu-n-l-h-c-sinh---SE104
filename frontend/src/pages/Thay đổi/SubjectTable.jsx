import axios from 'axios';
import { useEffect, useState } from 'react';
import ChinhSuaSubject from './ChinhSuaSubject';
import ThemMonhoc from './ThemMonhoc';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const url = process.env.REACT_APP_API_URL;

function SubjectTable() {
    const [subject, setSubject] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/monhoc`);
                setSubject(response.data);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);
    const handleDelete = async (mamonhoc) => {
            try {
                const response = await axios.delete(`${url}/monhoc/${mamonhoc}`);
            } catch (error) {
                console.log("Error deleting data: ", error);
            }
    }

    return (
        <div className="m-6 h-max w-max relative overflow-x-auto rounded-lg" style={{ border: 'black solid 3px' }}>
            <table className="w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase" style={{ backgroundColor: '#B2CCFE', borderBottom: 'black solid 3px' }}>
                    <tr>
                        <th scope="col" className="px-6 py-3">Mã</th>
                        <th scope="col" className="px-6 py-3">Môn học</th>
                        <th scope="col" className="px-6 py-3">Hệ số</th>
                        <th scope="col" className="px-6 py-3">Xóa</th>
                        <th scope="col" className="px-6 py-3">Chỉnh sửa</th>
                        <th scope="col" className="px-6 py-3"><ThemMonhoc/></th>
                    </tr>
                </thead>
                <tbody>
                    {subject.map((item) => (
                        <tr key={item.mamonhoc} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.mamonhoc}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.tenmonhoc.slice(0, 1).toUpperCase() + item.tenmonhoc.slice(1)}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.heso}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <FontAwesomeIcon onClick={()=>{handleDelete(item.mamonhoc)}} icon={ faTrash} />
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <ChinhSuaSubject id={item.mamonhoc}/>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SubjectTable;
