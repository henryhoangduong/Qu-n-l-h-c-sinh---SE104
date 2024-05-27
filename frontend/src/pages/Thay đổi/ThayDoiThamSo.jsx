import { useEffect } from "react"
import axios from "axios"
import styles from  './ThayDoiThamSo.module.css'
import { useState } from "react"

const url = process.env.REACT_APP_API_URL

function ThayDoiThamSo({setSuccess, setFail}) {

    const [thamso, setThamso] = useState({
        'diemdat': '', 'tuoitoithieu': '',
        'tuoitoida': '', 'sisotoida': '', 'diemdatmon': '',
        'diemtoithieu':'','diemtoida':''
    })
    const handleChange = (e) => {
        setThamso(current => ({
            ...current,
            [e.target.name] : e.target.value
        }));
        console.log(thamso)
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/thamso`)
                console.log('datafetch')
                setThamso(response.data[0])
            } catch (error) {
               console.log("Error fetching data: ",error) 
            }   
        }
        fetchData()
    }, [])
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/thamso`, thamso)
            setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
        } catch (error) {
            setFail(true);
                setTimeout(() => {
                    setFail(false);
                }, 5000);
            console.log('Error saving tham so: ',error)   
        }
    }
    return (
        <div className={`flex h-80 ${styles.form_area}`} style={{width: '60vw'}}>
                <div className="profile-content" style={{ width: "60vw",paddingLeft: '30px',paddingBottom:'10px' }}>
                    <h1 className="font-medium text-3xl mt-8">Thay đổi tham số</h1>
                    {/* line 1 */}
                    <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                    <form className="flex flex-col">
                        <div class="form-group">
                            <label for="user" class="article">
                                Tuổi tối thiểu
                            </label>
                        <input
                        onChange={handleChange}
                            defaultValue={thamso.tuoitoithieu}
                            name='tuoitoithieu'
                            type="user"
                            id="last"
                            class={styles.input_article}
                            style={{ width: "90%" }}
                            />
                        </div>

                        <div className="flex mt-1">
                            <div class={styles.form_group}>
                                <label for="email" class="article">
                                    Tuổi tối đa
                                </label>
                            <input
                                onChange={handleChange}
                                defaultValue={thamso.tuoitoida}
                                name ='tuoitoida'
                                type="text"
                                id="email"
                                class={styles.input_article}
                                title="This field is read-only"
                                />
                            </div>
                            <div class={styles.form_group}>
                                <label for="phone" class="article">
                                    Sỉ số tối đa
                                </label>
                            <input
                                onChange={handleChange}
                                defaultValue={thamso.sisotoida}
                                name ='sisotoida'
                                type="text"
                                id="phone"
                                class={styles.input_article}
                                />
                            </div>
                        </div>
                    <div class="flex mt-1">
                        <div class="form-group">
                            <label htmlFor="last1" class="article">
                                Điểm đạt
                            </label>
                            <input
                                onChange={handleChange}
                                defaultValue={thamso.diemdat}
                                type="text"
                                name='diemdat'
                                class={styles.input_article}
                                style={{ width: "90%" }}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="last1" class="article">
                                Điểm đạt môn
                            </label>
                            <input
                                onChange={handleChange}
                                defaultValue={thamso.diemdatmon}
                                type="text"
                                name='diemdatmon'
                                class={styles.input_article}
                                style={{ width: "90%" }}
                            />
                        </div>
                    </div>
                    <div class="flex mt-1">
                        <div class="form-group">
                            <label htmlFor="last1" class="article">
                                Điểm tối thiểu
                            </label>
                            <input
                                onChange={handleChange}
                                defaultValue={thamso.diemtoithieu}
                                type="text"
                                name='diemtoithieu'
                                class={styles.input_article}
                                style={{ width: "90%" }}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="last1" class="article">
                                Điểm tối đa
                            </label>
                            <input
                                onChange={handleChange}
                                defaultValue={thamso.diemtoida}
                                type="text"
                                name='diemtoida'
                                class={styles.input_article}
                                style={{ width: "90%" }}
                            />
                        </div>
                        </div>
                        <div style={{ width: "90%" }}>
                        <button onClick={(event) => { handleSave(event) }} className="button button--light">
                                Save Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default ThayDoiThamSo