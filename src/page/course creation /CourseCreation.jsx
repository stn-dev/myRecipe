import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import Texte from '../../component/text/text'
import { InputInfos } from '../../component/input/input'
import { ButtonWhite } from '../../component/button/button'
import { CousrseService } from '../../service/courseService'

export const courseCreationAction = async ({ requseet }) => {
    const course = await requseet.formData()
    const data = Object.fromEntries(course)

    const id = {
        author: localStorage.getItem("id").toString()
    }

    const setCourse = await CousrseService.postCourse(...data, ...id)
    console.log(setCourse)

    return data;
}

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
                                content={"Title "}
                                as={"h4"}
                            />
                            <InputInfos
                                name={"title "}
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
                                content={"privacy"}
                                as={"h4"}
                            />
                            <InputInfos
                                logo={"src/assets/arrowDown.svg"}
                                name={"privacy"}
                                placeholder={"Ex: pan, bowl ..."}
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
                                name="Description"
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
