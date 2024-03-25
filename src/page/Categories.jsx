import React from 'react'
import Texte from '../component/text/text'
import { BtnCategories } from '../component/button/button'
import { InputForCategories, InputWhite } from '../component/input/input'

function Categories() {
    const arrCategories = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className="categories-page">
            <Texte
                content={"Categories"}
                as={"h2"}
            />
            <div className="search-bar">
                <BtnCategories
                    classe={"btnCategorieOrange"}
                />
                <div className="search">
                    <img src="src/assets/logo/parameterIcons.svg" alt="" />
                    <InputForCategories />
                </div>
            </div>

            {/* the whole items  */}

            <div className="categories-container">
                {
                    arrCategories.map((items, id) => (
                        <div className="blocks" key={id}>
                            <div className="block">
                                <img src="src/assets/categoriesImage/vegane.svg" alt="" />
                                <h4>vegan</h4>
                            </div>
                            <div className="block">
                                <img src="src/assets/categoriesImage/dessert.svg" alt="" />
                                <h4>dessert</h4>
                            </div>
                            <div className="block">
                                <img src="src/assets/categoriesImage/pasta.svg" alt="" />
                                <h4>pasta</h4>
                            </div>
                            <div className="block">
                                <img src="src/assets/categoriesImage/pizza.svg" alt="" />
                                <h4>pizza</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories