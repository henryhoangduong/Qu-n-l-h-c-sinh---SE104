import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const url = process.env.REACT_APP_API_URL;

export default function ChinhSuaClass({ id }) {
    const [openModal, setOpenModal] = useState(false);
    const [Class, setClass] = useState({});

    console.log('Mã lớp:', id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('try');
                const response = await axios.get(`${url}/class/${id}`);
                setClass(response.data);
                console.log(response);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleSave = async () => {
        try {
            console.log(Class);
            const response = await axios.put(`${url}/class/${id}`, Class);
            console.log(response);
        } catch (error) {
            console.log("Error saving data:", error);
        }
        setOpenModal(false);
    };

    return (
        <>
            <div onClick={() => setOpenModal(true)} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPen} />
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Thay đổi</Modal.Header>
                <Modal.Body>
                    <div className="flex flex-col">
                        <label htmlFor="tenlop">Tên lớp</label>
                        <input
                            defaultValue={Class.tenlop}
                            type="text"
                            name="tenlop"
                            onChange={(e) => setClass({
                                'tenlop': e.target.value
                            })}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={handleSave}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
