import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const url = process.env.REACT_APP_API_URL

export default function ChinhSuaSubject({id}) {
   const [openModal, setOpenModal] = useState(false);
  const [Subject, setSubject] = useState();
      useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`${url}/monhoc/${id}`)
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }
        }
        fetchData()
    },[])
  return (
    <>
          <div onClick={() => setOpenModal(true)}>
              <FontAwesomeIcon icon={faPen}  />
      </div>
        <Modal  show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thay đổi</Modal.Header>
        <Modal.Body >
                  <div className="flex flex-col">
            <label for="tenlop">
              Tên lớp
            </label>
            <input type="text" name="tenlop">
              
            </input>
                  </div>
        </Modal.Body>
        <Modal.Footer>
                  <Button color="gray" onClick={() => {
                      setOpenModal(false)
          }}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}