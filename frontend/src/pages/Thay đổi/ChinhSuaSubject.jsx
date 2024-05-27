import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const url = process.env.REACT_APP_API_URL

export default function ChinhSuaSubject({id}) {
   const [openModal, setOpenModal] = useState(false);
  const [Subject, setSubject] = useState({});
      useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`${url}/monhoc/${id}`)
              setSubject(response.data)
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }
        }
        fetchData()
      }, [])
      const handleSave = async () => {
        try {
            console.log(Subject);
            const response = await axios.put(`${url}/monhoc/${id}`, Subject);
            console.log(response);
        } catch (error) {
            console.log("Error saving data:", error);
        }
        setOpenModal(false);
    };
  return (
    <>
          <div onClick={() => setOpenModal(true)}>
              <FontAwesomeIcon icon={faPen}  cursor='pointer'/>
      </div>
        <Modal  show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thay đổi</Modal.Header>
        <Modal.Body >
                  <div className="flex flex-col">
                        <label htmlFor="tenlop">Tên môn học</label>
                        <input
                            defaultValue={Subject.tenmonhoc}
                            type="text"
                            name="tenlop"
              onChange={(e) => setSubject((current) => ({
                              ...current,
                                'tenmonhoc': e.target.value
                            }))}
                        />
          </div>
          <div className="flex flex-col">
                        <label htmlFor="heso">Hệ số</label>
                        <input
                            defaultValue={Subject.heso}
                            type="text"
                            name="heso"
                            onChange={(e) => setSubject((current) => ({
                              ...current,
                                'heso': e.target.value
                            }))}
                        />
                    </div>
        </Modal.Body>
        <Modal.Footer>
                  <Button color="gray" onClick={() => {
                      handleSave()
          }}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}