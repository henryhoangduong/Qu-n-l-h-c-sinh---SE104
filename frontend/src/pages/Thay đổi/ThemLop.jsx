import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import axios from 'axios';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const url = process.env.REACT_APP_API_URL


export default function ThemLop() {
    const [openModal, setOpenModal] = useState(false);
    const [Class, setClass] = useState({});
    
    const handleSave = async () => {
      try {
          console.log(Class)
            const response = await axios.post(`${url}/class`,Class);
            console.log(response);
        } catch (error) {
            console.log("Error saving data:", error);
        }
        setOpenModal(false);
    };
    return (
<>
          <div onClick={() => setOpenModal(true)}>
              <FontAwesomeIcon icon={faPlus}  />
      </div>
        <Modal  show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thêm lớp</Modal.Header>
        <Modal.Body >
                  <div className="flex flex-col">
                        <label htmlFor="tenlop">Tên môn học</label>
                        <input
                            type="text"
                            name="tenlop"
                            onChange={(e) => {
                                setClass({
                  "tenlop":e.target.value
              })}}
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
    </>
    )
}