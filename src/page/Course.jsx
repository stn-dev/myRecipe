import React from 'react'
import Texte from '../component/text/text'
import { BtnCourseCreation, BtnPrivate, ButtonWhite } from '../component/button/button'

function Course() {
    const arrCourse = [1, 2, 3]
    return (
        <div className="course-page">
            {/* hero section  */}
            <div className="hero-section-course">
                <div className="coocking-lesson">
                    <Texte
                        content={"Coocking Lesson"}
                        as={"h2"}
                    />
                    <Texte
                        content={"Discover the pleasure of cooking with our experienced and passionate Chefs."}
                        as={"p"}
                    />
                    <ButtonWhite
                        content={"Discover our Chefs"}
                        classe={"white-btn"}
                    />
                </div>
            </div>

            <div className="bodyOfThePage">

                {/* sidebar section  */}

                <aside className='sidebar-course'>
                    <div className="diary">
                        <button>Diary
                            <img src="src/assets/logo/calendarWhite.svg" />
                        </button>
                    </div>
                    <div className="filter-course">
                        <Texte
                            content={"Filter Course"}
                            as={"h2"}
                        />
                        <Texte
                            content={"View all content"}
                            as={"h3"}
                        />
                        <ul>
                            <li>Asiatique</li>
                            <li>BBQ</li>
                            <li>Bakeries</li>
                            <li>Super delicious</li>
                            <li>Sweat food</li>
                            <li>Culinary camp</li>
                            <li>WinesCulinary camp</li>
                            <li>International cuisine</li>
                            <li>Demonstration</li>
                            <li>Cocktail</li>
                            <li>Pastry</li>
                            <li>Basic technique</li>
                            <li>Themes</li>
                            <li>Vegetarian</li>
                        </ul>
                    </div>
                </aside>

                {/* private and public body section  */}

                <div className="private-public-course">
                    <div className="courseCreationBar">
                        <BtnCourseCreation />
                        <div>
                            Sort by : Featured
                            <img src="src/assets/arrowDown.svg" />
                        </div>
                    </div>
                    <div className="courses-container">
                        {
                            arrCourse.map((course, id) => (
                                <div
                                    className="courses"
                                    key={id}

                                >
                                    <div className="course">
                                        <img src="src/assets/course image/apricot.svg" />
                                        <img src="src/assets/logo/starsIcons.svg" />
                                        <Texte
                                            content={"Apricot Danish"}
                                            as={"h4"}
                                        />
                                        <BtnPrivate content={"private"} />
                                    </div>
                                    <div className="course">
                                        <img src="src/assets/course image/kaibi.svg" />
                                        <img src="src/assets/logo/starsIcons.svg" />
                                        <Texte
                                            content={"Kalbi Korean"}
                                            as={"h4"}
                                        />
                                        <BtnPrivate content={"public"} />
                                    </div>

                                    <div className="course">
                                        <img src="src/assets/course image/chow.svg" />
                                        <img src="src/assets/logo/starsIcons.svg" />
                                        <Texte
                                            content={"Chow mein"}
                                            as={"h4"}
                                        />
                                        <BtnPrivate content={"private"} />
                                    </div>
                                    <div className="course">
                                        <img src="src/assets/course image/ssq.svg" />
                                        <img src="src/assets/logo/starsIcons.svg" />
                                        <Texte
                                            content={"BBQ"}
                                            as={"h4"}
                                        />
                                        <BtnPrivate content={"public"} />
                                    </div>
                                    <div className="course">
                                        <img src="src/assets/course image/barbecue.svg" />
                                        <img src="src/assets/logo/starsIcons.svg" />
                                        <Texte
                                            content={"Barbecue sea food"}
                                            as={"h4"}
                                        />
                                        <BtnPrivate content={"private"} />
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className='seeMoreCourse'>
                        <button>
                            see more course
                        </button>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Course