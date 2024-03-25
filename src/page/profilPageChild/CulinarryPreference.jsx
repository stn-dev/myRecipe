import React from 'react'
import ProfilPicture from '../../component/profileChildAnd Component/ProfilPicture'
import ProfilPageNav from '../../component/profileChildAnd Component/ProfilPageNav'
import ProfileEditForm from '../../component/profileChildAnd Component/profileEditForm'
import ProfilFooterSetting from '../../component/profileChildAnd Component/ProfilFooterSetting'
import CullinaryPreferenceForm from '../../component/profileChildAnd Component/CullinaryPreferenceForm'

function CullinarryPreference() {
    return (
        <div className="cullinarryPreferencePage">
            <ProfilPicture
                userName={"mario"}
                gender={"Man"}
                registrationDate={"14/02/24"}
            />
            <ProfilPageNav />
            <CullinaryPreferenceForm />
            <ProfilFooterSetting />
        </div>
    )
}

export default CullinarryPreference