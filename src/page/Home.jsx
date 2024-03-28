import React from 'react'
import Texte from '../component/text/text'
import { BtnPrivate, ButtonWhite } from '../component/button/button'
import { InputEmail } from '../component/input/input'
import RatingTest from '../component/stars component/Rating'

function Home() {
    return (
        <div className="home-page">

            {/* hero section */}

            <div className="hero-section">
                <img src="src/assets/picture/homePageHero.svg" alt="" />
                <div className='hero-title'>
                    <p>
                        <span>
                            <img src="src/assets/logo/mountedArrowIcon.svg" alt="" />
                        </span>
                        85% would mal=ke this again
                    </p>
                    <h2>Easy cheesecake</h2>
                    <p>
                        Inspired by Cheesecake Factory, this New York-style cheesecake is rich, dense yet creamy and not overly sweet
                    </p>
                    <img src="src/assets/logo/arrowLeftIcon.svg" className='arrow' />
                </div>
            </div>

            {/* sidebar section */}

            <div className="side-main-container">
                <aside className='asidebar-container'>
                    <div className="filter-recipes">
                        <h4>Filter Recipes</h4>
                        <div className="recipe">
                            <h3>Diet</h3>
                            <ul>
                                <li>Dairy free</li>
                                <li>Egg free</li>
                                <li>Sugar free</li>
                                <li>Glutten free</li>
                            </ul>
                        </div>
                        <div className="recipe">
                            <h3>Allergies</h3>
                            <ul>
                                <li>Glutten</li>
                                <li>Legme</li>
                                <li>Fruite</li>
                                <li>Grain</li>
                            </ul>
                        </div>
                        <div className="recipe">
                            <h3>Cuisines</h3>
                            <ul>
                                <li>Asian</li>
                                <li>Italian</li>
                                <li>Mexican</li>
                                <li>Thai</li>
                            </ul>
                        </div>
                        <div className="recipe">
                            <h3>Goals</h3>
                            <ul>
                                <li>Wheight loss</li>
                                <li>Freshness</li>
                                <li>Activeness</li>
                                <li>Rich nutritions</li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* private and public menu food */}

                {/* salt */}

                <div className="private-public-menu">
                    <div className="salt-food">
                        <Texte
                            content={"Super Delicious"}
                            as={"h3"}
                        />
                        <div className="item">
                            <img src="src/assets/picture/burger.svg" alt="" />
                            <RatingTest />
                            <Texte
                                content={"Chees burger"}
                                as={"h4"}
                            />
                            <button className='public'>public</button>
                        </div>
                        <div className="item">
                            <img src="src/assets/picture/chees.svg" alt="" />
                            <RatingTest />
                            <Texte
                                content={"Mac & Cheesr"}
                                as={"h4"}
                            />
                            <button className='public'>public</button>
                        </div>
                        <div className="item">
                            <img src="src/assets/picture/chees.svg" alt="" />
                            <RatingTest />
                            <Texte
                                content={"Salad ceasar with chiken"}
                                as={"h4"}
                            />
                            <button className='private'>private</button>
                        </div>
                    </div>


                    {/* sweet */}

                    <div className="sweet-food">
                        <Texte
                            content={"Seety tooth"}
                            as={"h3"}
                        />
                        <div className="item">
                            <img src="src/assets/picture/caramel.svg" />
                            <RatingTest />
                            <Texte
                                content={"Caramel pots"}
                                as={"h4"}
                            />
                            <button className='public'>public</button>
                        </div>
                        <div className="item">
                            <img src="src/assets/picture/chesseCake.svg" alt="" />
                            <RatingTest />
                            <Texte
                                content={"Cheescake"}
                                as={"h4"}
                            />
                            <button className='public'>public</button>
                        </div>
                        <div className="item">
                            <img src="src/assets/picture/caramel.svg" alt="" />
                            <RatingTest />
                            <Texte
                                content={"Japanes pancake"}
                                as={"h4"}
                            />
                            <button className='private'>private</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* popular categories section  */}

            <div className="popular-categories-section">
                <Texte content={"Popular categories"} as={"h3"} />
                <div className="categories">
                    <div className="categorie">
                        <img src="src/assets/categoriesImage/pasta.svg" alt="" />
                        <Texte content={"Pasta"} as={"h4"} />
                    </div>
                    <div className="categorie">
                        <img src="src/assets/categoriesImage/pizza.svg" alt="" />
                        <Texte content={"Pizza"} as={"h4"} />
                    </div>
                    <div className="categorie">
                        <img src="src/assets/categoriesImage/vegane.svg" alt="" />
                        <Texte content={"Vegan"} as={"h4"} />
                    </div>
                    <div className="categorie">
                        <img src="src/assets/categoriesImage/dessert.svg" alt="" />
                        <Texte content={"Dessert"} as={"h4"} />
                    </div>
                    <div className="categorie">
                        <img src="src/assets/categoriesImage/pasta.svg" alt="" />
                        <Texte content={"Smoothie"} as={"h4"} />
                    </div>
                    <div className="categorie">
                        <img src="src/assets/categoriesImage/pizza.svg" alt="" />
                        <Texte content={"Breakfast"} as={"h4"} />
                    </div>
                    <div className="categorie">
                        <img src="src/assets/categoriesImage/vegane.svg" alt="" />
                        <Texte content={"Dinner"} as={"h4"} />
                    </div>
                </div>
            </div>

            {/* recipe book section */}

            <div className="recipe-book-container">
                <img src="src/assets/picture/reciepeBook.svg" alt="" />
                <img src="src/assets/picture/reciepeBook.svg" alt="" />
                <div className="mini-form">
                    <Texte
                        content={"Get the recipe book!!!"}
                        as={"h3"}
                    />
                    <Texte
                        content={"A recipe book , guiding both novice and experienced cooks through the art of preparing delightful dishes."}
                        as={"p"}
                    />
                    <Texte
                        content={"Or contact us  :+854 745 963"}
                        as={"p"}
                    />
                    <form >
                        <InputEmail />
                        <ButtonWhite
                            content={"Get"}
                            classe={"white-btn"}
                        />
                    </form>

                </div>
            </div>

            {/* hande-picked collection section */}

            <div className="coletion-container">
                <Texte
                    content={"Hand-Picked Collection"}
                    as={"h2"}
                />
                <div className="coletions">
                    <div className="colection">
                        <img src="src/assets/colection/collection1.svg" alt="" />
                        <Texte
                            content={"Sushi combos for your Next Party"}
                            as={"h2"}
                        />
                        <div>156 recipes</div>
                    </div>
                    <div className="colection">
                        <img src="src/assets/colection/colletion2.svg" alt="" />
                        <Texte
                            content={"Everything bagels"}
                            as={"h2"}
                        />
                        <div>156 recipes</div>
                    </div>
                    <div className="colection">
                        <img src="src/assets/colection/collection3.svg" alt="" />
                        <Texte
                            content={"Cook like chefs"}
                            as={"h2"}
                        />
                        <div>156 recipes</div>
                    </div>
                    <div className="colection">
                        <img src="src/assets/colection/collection4.svg" alt="" />
                        <Texte
                            content={"Excquise dinner made for you"}
                            as={"h2"}
                        />
                        <div>156 recipes</div>
                    </div>
                    <div className="colection">
                        <img src="src/assets/colection/collection5.svg" alt="" />
                        <Texte
                            content={"Made a good choicolate cookie"}
                            as={"h2"}
                        />
                        <div>156 recipes</div>
                    </div>
                    <div className="colection">
                        <img src="src/assets/colection/collection6.svg" alt="" />
                        <Texte
                            content={"Eat healthy"}
                            as={"h2"}
                        />
                        <div>156 recipes</div>
                    </div>
                </div>
            </div>

            {/* latest recipe section */}

            <div className="latest-recipe-container">
                <Texte
                    content={"Latest recipe"}
                    as={"h3"}
                />
                <div className="recipes">
                    <img
                        src="src/assets/logo/arrowLeftCircle.svg"
                        className='left'
                    />
                    <img
                        src="src/assets/logo/arrowRigthCircle.svg" className='rigth'
                    />
                    <img src="src/assets/picture/lastRecipe1.svg" alt="" />
                    <img src="src/assets/picture/lastRecipe1.svg" alt="" />
                    <img src="src/assets/picture/lastRecipe1.svg" alt="" />
                    <img src="src/assets/picture/lastRecipe1.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home