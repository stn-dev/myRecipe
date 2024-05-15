import React, { useState } from 'react';

// classe => inputWhiteContainer (input-white) / inputOrangeContainer (input-black)

export function InputWhite({ id, classe, inputClass, placeholder }) {
    return (
        <div className={classe} >
            <input type="search" className={inputClass} id={id} placeholder={placeholder} />
            <label htmlFor={id}><div className="searchWhite"></div></label>
        </div>
    )
}

export function InputForCategories() {
    return (
        <div className="InputCategoriesContainer" >
            <input type="search" className="input-White" id="categories" placeholder="Search by food name" />
            <label htmlFor="categories"><div className="searchWhite"></div></label>
        </div>
    )
}

export function InputEmail() {
    return (
        <input type="email" name="mail" placeholder='E-mail...' className='input-mail' />
    )
}

// classe => inputInfoContainer / inputFormContainer / inputFormName

export function InputInfos({ logo, type, name, placeholder, classe, value, styles }) {
    const [image, setImage] = useState(logo)
    const [genre, setGenre] = useState(type)

    const overView = "src/assets/logo/overViewLogo.svg"
    // console.log(overView)

    const showPass = () => {
        if (genre === "password") {
            setGenre("text")
            setImage(overView)
        } else {
            setGenre(type)
            setImage(logo)
        }
    }
    return (
        <div className={classe}>
            <img
                src={image}
                onClick={showPass}
            />
            <input
                type={genre}
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                style={styles}
            />
        </div>
    )
}

export function InputForm({ logo, type, name, placeholder }) {

    const [types, setTypes] = useState(type)

    const handleClick = () => {
        console.log("that s ok")
        if (types === "password") {
            setTypes("text")
        } else {
            setTypes(type)
        }
    }
    return (
        <div className="inputFormContainer">
            <img src={logo} alt="" onClick={handleClick} />
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

