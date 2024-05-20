import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from './Modal.module.css'
const url = process.env.REACT_APP_API_URL

export default function ChonHocSinhModal({handleClick}) {
    const [openModal, setOpenModal] = useState(false);
    const [studentChoose, setStudentChoose]=useState([])
    const [student, setStudent] = useState([])
      useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`${url}/students`)
                setStudent(response.data)
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }
        }
        fetchData()
    },[])
  return (
    <>
      <div style={{border: 'black solid 3px', padding:'5px 10px 5px 10px',backgroundColor:'#c1fbc0',cursor:'pointer'}} onClick={() => setOpenModal(true)}>Toggle modal</div>
        <Modal  show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Danh sách học sinh</Modal.Header>
        <Modal.Body >
                  <div className="space-y-6">
        <table className={styles.studentTable}>
        {student.map((item) => (
            <tr onClick={() => {
                const newStudentChoose = [...studentChoose, item];
                setStudentChoose(newStudentChoose)
            }} key={item.malop} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.mahocsinh}
            </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.hoten}
            </th>
            <td className="px-6 py-4">
              Nam
            </td>
            <td className="px-6 py-4">
              {item.ngaysinh}
            </td>
          </tr> 
            ))}                  
        </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
                  <Button color="gray" onClick={() => {
                      handleClick(studentChoose)
                      setOpenModal(false)
          }}>
            Chọn
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}