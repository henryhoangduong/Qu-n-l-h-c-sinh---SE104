import axios from 'axios';
import { useEffect, useState } from 'react';
import ChinhSuaClass from './ChinhSuaClass';
import ThemLop from './ThemLop';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const url = process.env.REACT_APP_API_URL;

function ClassTable() {
    const [Class, setClass] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/class`);
                setClass(response.data);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="m-6 h-max w-max rounded-lg overflow-x-auto" style={{ border: 'black solid 3px' }}>
            <table className="w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase" style={{ backgroundColor: '#B2CCFE', borderBottom: 'black solid 3px' }}>
                    <tr>
                        <th scope="col" className="px-6 py-3">Mã lớp</th>
                        <th scope="col" className="px-6 py-3">Lớp</th>
                        <th scope="col" className="px-6 py-3">Sỉ số</th>
                        <th scope="col" className="px-6 py-3">Khối</th>
                        <th scope="col" className="px-6 py-3">Xóa</th>
                        <th scope="col" className="px-6 py-3">Chỉnh sửa</th>
                        <th scope="col" className="px-6 py-3"><ThemLop/></th>
                    </tr>
                </thead>
                <tbody>
                    {Class.map((item) => (
                        <tr key={item.malop} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.malop}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.tenlop}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.siso}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.tenlop.slice(0, 2)}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <FontAwesomeIcon icon={faTrash} />
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <ChinhSuaClass id={item.malop} />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClassTable;
