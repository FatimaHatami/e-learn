import React from "react";
import Course from "./course/Course";
import CourseImg from '../../assets/img/video-img.svg';
import EnglishFlagIcon from '../../assets/img/English.svg';

import './Courses.scss';
import Button from "../buttons/Button";

const Courses=()=>{
    const coursesData=[
        {
            courseName:"General English",
            courseDescription:"You learn in small groups and benefit from 15 hours per week.",
            courseDuration:"10 weeks",
            startDate:"12 febuary",
            languageFlag:EnglishFlagIcon,
            courseImage:CourseImg
        },
        {
            courseName:"General English",
            courseDescription:"You learn in small groups and benefit from 15 hours per week.",
            courseDuration:"10 weeks",
            startDate:"12 febuary",
            languageFlag:EnglishFlagIcon,
            courseImage:CourseImg
        },
        {
            courseName:"General English",
            courseDescription:"You learn in small groups and benefit from 15 hours per week.",
            courseDuration:"10 weeks",
            startDate:"12 febuary",
            languageFlag:EnglishFlagIcon,
            courseImage:CourseImg
        },
        {
            courseName:"General English",
            courseDescription:"You learn in small groups and benefit from 15 hours per week.",
            courseDuration:"10 weeks",
            startDate:"12 febuary",
            languageFlag:EnglishFlagIcon,
            courseImage:CourseImg
        },
    ]
    return(
        <div className="courses">
            <h2>Featured Videos</h2>
            <p>Find a Course</p>
            {coursesData.map(course=>(
                <Course
                cover={course.courseImage}
                name={course.courseName}
                desc={course.courseDescription}
                duration={course.courseDuration}
                start={course.startDate}
                flag={course.languageFlag}
                />
            ))}
            <Button
            className="courses__button"
            value="Show All"
            />
            
        </div>
    )
}

export default Courses;