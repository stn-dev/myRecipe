import React, { useState } from 'react'
import Texte from '../text/text'
import { UserService } from '../../service/userService'

function ProfilPicture() {
    const [btn, setBtn] = useState(false)
    const [image, setImage] = useState(null)
    const formData = new FormData()
    const id = localStorage.getItem("id")
    const avatar = localStorage.getItem("avatar")


    const selectAvatar = (e) => {
        setBtn(true)
        setImage(e.target.files[0])
    }

    const postAvatar = async () => {
        try {
            formData.append("file", image)
            formData.append("userId", id)
            const toPost = await UserService.createAvatar(formData)
            console.log(toPost)
            if (toPost.status == 200 || toPost.status == 201) {
                const newAvatar = toPost.data.image.nameHashed
                localStorage.setItem('avatar', `http://localhost:4400/${newAvatar}`)
                alert("refresh the page to see new avatar")
                return formData
            }
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className="profilPictureContainer">

            <label
                className="avatar"
                htmlFor='avatarIpt'
            >
                <img src={avatar ? avatar : "src/assets/logo/profilPictureLogo.svg"} />
            </label>
            <input
                onChange={selectAvatar}
                type="file"
                name="file"
                id="avatarIpt"
            />
            {
                btn &&
                <button
                    onClick={postAvatar}
                >
                    change avatar
                </button>

            }
            <Texte
                content={"My profil"}
                as={"h3"}
            />
            <div className="profilInfos">
                <p>User: {localStorage.getItem("username")} </p>
                <p>gender: man </p>
                <p>Registred Since: 10/21/24 </p>
            </div>
        </div>
    )
}

export default ProfilPicture