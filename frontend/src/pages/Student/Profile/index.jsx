import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faPenToSquare,
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../../layouts/Components/SideBarStudent";
import React, { useEffect, useState } from "react";
import axios from 'axios';


function Profile() {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formattedBirthday = `${year}-${month}-${day}`;
        setBirthday(formattedBirthday);
        axios.post('http://localhost:3000/students', {
            email: email,
            password: password,
            hoten: name,
            ngaysinh: birthday,
            gioitinh: gender,
            diachi: address
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="profile-content" style={{ marginLeft: 40, width: "100vw" }}>
                    <h1 className="font-medium text-3xl mt-16">Student Management</h1>

                    {/* line 1 */}
                    <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

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
                                    Password
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
                                    Full Name
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
                                    Gender
                                </label>

                                <div class="flex">
                                    <div class="flex items-center me-4 mt-3">
                                        <input onChange={(e) => setGender(true)} id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-8 h-8 text-black-600 bg-gray-100 border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="inline-radio" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Male</label>
                                    </div>
                                    <div class="flex items-center me-4 mt-3">
                                        <input onChange={(e) => setGender(false)} id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-8 h-8 text-black-600 bg-gray-100 border-gray-300 focus:ring-black-500 dark:focus:ring-black-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="inline-2-radio" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Female</label>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="flex mt-3">
                            <div class="form-group">
                                <label for="birthday" class="article">
                                    Birthday
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
                                    Address
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
                            <button type="submit" className="button button--light" onClick={handleSubmit}>
                                Add
                            </button>
                        </div>
                    </form>

                    {/* line 3 */}
                    <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Profile;
