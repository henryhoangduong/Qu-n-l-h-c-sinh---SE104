import "./ThemHocSinh.css";
import React, { useState } from "react";
import axios from 'axios';
import StudentTable from "./StudentTable";
import { SuccessAlert } from "../../layouts/Components/Alert/Success";
import { FailAlert } from "../../layouts/Components/Alert/Fail";

const url = process.env.REACT_APP_API_URL

function ThemHocSinh() {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [success, seSuccess] = useState(false)
    const [fail,setFail] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formattedBirthday = `${year}-${month}-${day}`;
        setBirthday(formattedBirthday);
        axios.post(`${url}/students/create`, {
            email: email,
            password: password,
            hoten: name,
            ngaysinh: birthday,
            gioitinh: gender,
            diachi: address
        })
            .then(function (response) {
                console.log(response);
                seSuccess(true);
                setTimeout(() => {
                    seSuccess(false);
                }, 5000);
            })
            .catch(function (error) {
                console.log(error);
                setFail(true);
                setTimeout(() => {
                    setFail(false);
                }, 5000);
            });
    };

    return (
        <>
             <div class="flex relative overflow-x-auto rounded-lg" style={{border: 'black solid 3px'}}>
                
                <div className="profile-content" style={{ marginLeft: 40, width: "100vw" }}>
                    <form className="flex flex-col">
                        <div className="flex mt-3">
                            <div class="form-group">
                                <label for="mail" class="article">
                                    Email
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    id="mail"
                                    class="input-article"
                                />
                            </div>
                            <div class="form-group">
                                <label for="id" class="article">
                                    Mật khẩu
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="text"
                                    id="password"
                                    class="input-article"
                                />
                            </div>

                        </div>

                        <div className="flex mt-3">
                            <div class="form-group">
                                <label for="name" class="article">
                                    Họ và Tên
                                </label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    id="name"
                                    class="input-article"
                                />
                            </div>
                            <div class="form-group">
                                <label for="gender" class="article">
                                    Giới tính
                                </label>

                                <div class="flex">
                                    <div class="flex items-center me-4 mt-3">
                                        <input onChange={(e) => setGender(true)} id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-8 h-8 text-black-600 bg-gray-100 border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="inline-radio" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Nam</label>
                                    </div>
                                    <div class="flex items-center me-4 mt-3">
                                        <input onChange={(e) => setGender(false)} id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-8 h-8 text-black-600 bg-gray-100 border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="inline-2-radio" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Nữ</label>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex mt-3">
                            <div class="form-group">
                                <label for="birthday" class="article">
                                    Ngày sinh
                                </label>
                                <div className="flex flex-row">
                                    <input
                                        onChange={(e) => setDay(e.target.value)}
                                        type="text"
                                        id="birthday"
                                        class="input-article-bd"
                                        placeholder="day"
                                    />
                                    <input
                                        onChange={(e) => setMonth(e.target.value)}
                                        type="text"
                                        id="birthday"
                                        class="input-article-bd"
                                        placeholder="month"
                                    />
                                    <input
                                        onChange={(e) => setYear(e.target.value)}
                                        type="text"
                                        id="birthday"
                                        class="input-article-bd"
                                        placeholder="year"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="address" class="article">
                                    Địa chỉ
                                </label>
                                <input
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    id="address"
                                    class="input-article"
                                    title="This field is read-only"
                                />
                            </div>

                        </div>
                        <div style={{ width: "90%" }}>
                            <button type="submit" className="button button--light mb-1" onClick={handleSubmit}>
                                Thêm học sinh
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <StudentTable />
            <SuccessAlert isopen={success} message='Thêm học sinh thành công' />
            <FailAlert isopen={fail} message='Thêm học sinh không thành công'/>
        </>
    );
}

export default ThemHocSinh;