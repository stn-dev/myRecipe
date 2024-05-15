import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import Texte from '../../component/text/text'
import { InputInfos } from '../../component/input/input'
import { ButtonWhite } from '../../component/button/button'
import { CourseService } from '../../service/courseService'
<<<<<<< HEAD
import axios from 'axios'
import axiosInstance from '../../service/axios'

export const CourseCreationAction = async ({ request }) => {
    try {
        const course = await request.formData()
        const data = Object.fromEntries(course)

        const id = {
            author: localStorage.getItem("id")
        }

        const datas = { ...data, ...id }
        console.log(datas)

        const creatCourse = await CourseService.postCourse(datas)
        console.log(creatCourse)

        // const courses = await axios.post("http://localhost:4400/api/course", {
        //     headers: Authorisation = `Bearer ${localStorage.getItem("refreshToken")}`,
        //     body: datas
        // })

        return datas;

    } catch (error) {
        console.log(`il y a une erreur ${error.message}`)
    }
}
=======


export const courseAction = async ({ request }) => {
    try {
        const datas = await request.formData()
        const title = datas.get("title")
        const decription = datas.get("decription")
        const privacy = datas.get("privacy")
        const link = datas.get("link")
        const id = { "author": localStorage.getItem("id") }
        const error = {}

        const data = Object.fromEntries(datas)
        const allData = { ...data, ...id }
        console.log(allData)

        if (title === "") {
            error.title = alert("title section must containe someting")
            return null
        }
        if (decription === "") {
            error.decription = alert("decription section must containe someting")
            return null
        }
        if (link === "") {
            error.link = alert("link section must containe someting")
            return null
        }
        if (privacy === "") {
            error.privacy = alert("privacy section must containe someting")
            return null
        }

        const postCourse = await CourseService.postCourse(allData)
        console.log(postCourse)
        if (postCourse?.status == 200 || postCourse?.status == 201) {
            alert("course created")
            return null
        }

    } catch (error) {
        console.log(error.message)
    }
}

>>>>>>> new-dynamisation

function CourseCreation() {
    const navigate = useNavigate()
    return (
        <div className="courseCreationPage">
            <h2            >
                <img
                    src="src/assets/logo/arrowRigthIcon.svg"
                    onClick={() => navigate(-1)}
                />
                Creation Of Course
            </h2>
            <Form
                method='POST'
            >
                <div className="courseForms">

                    {/* left side of the form  */}

                    <div className="leftSide">
                        <div className="courseForm">
                            <Texte
                                content={"Name"}
                                as={"h4"}
                            />
                            <InputInfos
                                logo={"src/assets/arrowDown.svg"}
                                name={"name"}
                                placeholder={"Ex: Asiatique"}
                                classe={"inputInfoContainer"}
                            />
                        </div>
                        <div className="courseForm">
                            <Texte
<<<<<<< HEAD
                                content={"Title"}
                                as={"h4"}
                            />
                            <InputInfos
                                name={"title"}
=======
                                content={"title "}
                                as={"h4"}
                            />
                            <InputInfos
                                name={"title "}
>>>>>>> new-dynamisation
                                placeholder={"Ex: Chocolate chip cookies"}
                                classe={"inputInfoContainer"}
                            />
                        </div>
                        <div className="courseForm">
                            <Texte
                                content={"Ingredients"}
                                as={"h4"}
                            />
                            <InputInfos
                                name={"Ingredients"}
                                placeholder={"Ex: Chocolate, sugar, ..."}
                                classe={"inputInfoContainer"}
                            />
                        </div>
                        <div className="courseForm">
                            <Texte
<<<<<<< HEAD
                                content={"privacy"}
=======
                                content={"pricavy*"}
>>>>>>> new-dynamisation
                                as={"h4"}
                            />
                            <InputInfos
                                logo={"src/assets/arrowDown.svg"}
<<<<<<< HEAD
                                name={"privacy"}
                                placeholder={"Ex: pan, bowl ..."}
=======
                                name={"pricavy"}
                                placeholder={"private / public"}
>>>>>>> new-dynamisation
                                classe={"inputInfoContainer"}
                            />
                        </div>
                    </div>

                    {/* rigth side of the form  */}

                    <div className="rigthSide">
                        <div className="courseForm">
                            <Texte
                                content={"Description of course "}
                                as={"h4"}
                            />
                            <textarea
                                name="description"
                                cols="20"
                                rows="5"
                            >
                            </textarea>
                            <img src="src/assets/logo/edit.svg" className='edit' />

                        </div>
                        <div className="courseForm">
                            <Texte
                                content={"link"}
                                as={"h4"}
                            />
                            <InputInfos
                                name={"link"}
                                placeholder={"Link"}
                                classe={"inputInfoContainer"}
                            />
                        </div>
                        <div className="courseForm">
                            <Texte
                                content={"Add Picture"}
                                as={"h4"}
                            />
                            <div className="add">
                                <img src="src/assets/logo/addIcon.svg" />
                                <h4>Add picture</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submitCourseForm">
                    <ButtonWhite
                        content={"Publish"}
                        classe={"white-btn"}
                        type={"sunmit"}
                    />
                    <ButtonWhite
                        content={"Cancel"}
                        classe={"orange-btn"}
                        type={"reset"}
                    />
                </div>
            </Form>
        </div>
    )
}

export default CourseCreation
