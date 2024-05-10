import "./Attendance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faCalendarDays, faCircleCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../../layouts/Components/SideBarStudent";
import React, { useEffect, useState } from "react";


function CurrentDate() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const monthName = monthNames[monthIndex];

    const formattedDate = `${date} ${monthName} ${year}`;
    return (
        <div>
            <p>{formattedDate}</p>
        </div>
    );
}

function CurrentDay() {
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();

    const dayNames = [
        "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
        "Sunday"
    ]

    const dayName = dayNames[dayIndex];

    return (
        <div>
            <p>{dayName}</p>
        </div>
    );
}

function Attendance() {

    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="attendance-content" style={{ marginLeft: 40, width: "100vw" }}>
                    <h1 className="font-medium text-3xl mt-16">Attendance</h1>
                    <div className="flex">
                        <div className="attendanceday-content">
                            <div className="box1">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <div className="ml-2">ATTENDANCE DAY</div>
                            </div>
                            <div className="box2">
                                <div className="time-mark">
                                    <div className="current-time justify-center">
                                        <div className="date text-sm">
                                            20 Days in
                                        </div>
                                    </div>
                                    <form class="w-30 my-7 mr-5 flex justify-center">
                                        <select id="months" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Choose a month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                    </form>
                                    <div className="calendar-content">
                                        <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="flex ml-10">
                            <div className="attendanceday-content">
                                <div className="box1">
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <div className="ml-2">ABSENT DAY</div>
                                </div>
                                <div className="box2">
                                    <div className="time-mark">
                                        <div className="current-time justify-center">
                                            <div className="date text-sm">
                                                3 Days in
                                            </div>
                                        </div>
                                        <form class="w-30 my-7 mr-5 flex justify-center">
                                            <select id="months" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a month</option>
                                                <option value="1">January</option>
                                                <option value="2">February</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">August</option>
                                                <option value="9">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                        </form>
                                        <div className="calendar-content">
                                            <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* line 1 */}
                    <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                    <div className="flex">
                        <div className="flex">
                            <div className="mark-content">
                                <div className="box1">
                                    <FontAwesomeIcon icon={faUserCheck} />
                                    <div className="ml-2">MARK ATTENDANCE</div>
                                </div>
                                <div className="box2">
                                    <div className="time-mark">
                                        <div className="current-time">
                                            <div className="date">
                                                {CurrentDate()}
                                            </div>
                                            <div className="day">
                                                {CurrentDay()}
                                            </div>
                                        </div>

                                        <div className="calendar-content">
                                            <FontAwesomeIcon icon={faCalendarDays} size="3x" />
                                        </div>
                                    </div>
                                </div>
                                <div className="box3">
                                    <button className="btn-mark">
                                        Mark Attendance
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Attendance;
