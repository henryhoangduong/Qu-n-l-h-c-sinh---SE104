import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faPenToSquare,
    faPencil,
} from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../layouts/Components/SideBar";
import React, { useEffect, useState } from "react";


function Profile() {

    return (
        <>
            <div className="flex">
                <SideBar/>
                <div className="profile-content" style={{ marginLeft: 40, width: "100vw" }}>
                    <h1 className="font-medium text-3xl mt-16">Profile Settings</h1>
                    <div className="flex">
                        <div className="flex-2">
                            <label for="avatar-upload" className="avatar-container mt-2">
                                <img
                                    alt="avatar"
                                    className="avatar-input"
                                    id="avartar"
                                />
                                <div
                                    className="overlay"
                                >
                                    <FontAwesomeIcon icon={faCamera} />
                                </div>
                            </label>
                            <input
                                type="file"
                                id="avatar-upload"
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className="vertical-line"></div>
                        <div style={{ flex: 4 }}>
                            <p className="font-medium underline mt-4">Mr. </p>
                            <p>
                                {" "}
                                (Customer's address)
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-button" />
                            </p>

                            <p>
                                I am Monkey D Luffy - who will become King Of Pirate in the
                                future (Customer's bio)
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-button" />
                            </p>
                        </div>
                        <div className="flex-5 flex justify-center items-center"></div>
                    </div>

                    {/* line 1 */}
                    <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                    <form className="flex flex-col">
                        <div class="form-group">
                            <label for="user" class="article">
                                Full Name
                            </label>
                            <input
                                type="user"
                                id="last"
                                class="input-article"
                                style={{ width: "90%" }}
                            />
                        </div>

                        <div className="flex mt-3">
                            <div class="form-group">
                                <label for="email" class="article">
                                    Email Address
                                </label>
                                <input
                                    readOnly
                                    type="text"
                                    id="email"
                                    class="input-article"
                                    title="This field is read-only"
                                />
                            </div>
                            <div class="form-group">
                                <label for="phone" class="article">
                                    Phone Numer
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    class="input-article"
                                />
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <label htmlFor="last1" class="article">
                                Home Address
                            </label>
                            <input
                                type="text"
                                name="last1"
                                class="input-article"
                                style={{ width: "90%" }}
                            />
                        </div>
                        <div style={{ width: "90%" }}>
                            <button type="submit" className="button button--light">
                                Save Change
                            </button>
                        </div>
                    </form>

                    {/* line 3 */}
                    <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                    <form className="flex flex-col">
                        <div className="flex">
                            <div class="form-group">
                                <label for="cr" class="article">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    id="cr"
                                    class="input-article"
                                />
                            </div>
                            <div class="form-group">
                                <label for="ne" class="article">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="ne"
                                    class="input-article"
                                />
                            </div>
                        </div>
                        <div class="form-group" style={{ marginTop: 15 }}>
                            <label for="user" class="article">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                id="user"
                                class="input-article"
                                style={{ width: "90%" }}
                            />
                        </div>

                        <div style={{ width: "90%" }}>
                            {/* <button className="button button--light mb-10">Cancel</button> */}
                            <button className="button button--light mb-10">
                                Save Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Profile;
