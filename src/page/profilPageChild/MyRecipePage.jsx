import React from 'react'
import ProfilPicture from '../../component/profileChildAnd Component/ProfilPicture'
import ProfilPageNav from '../../component/profileChildAnd Component/ProfilPageNav'
import ProfilFooterSetting from '../../component/profileChildAnd Component/ProfilFooterSetting'
import RecipeComponent from '../../component/profileChildAnd Component/RecipeComponent'

function MyRecipePage() {
    return (
        <div className="myRecipePage">
            <ProfilPicture
                userName={"mario"}
                gender={"Man"}
                registrationDate={"14/02/24"}
            />
            <ProfilPageNav />
            <RecipeComponent />
            <ProfilFooterSetting />
        </div>
    )
}

export default MyRecipePage