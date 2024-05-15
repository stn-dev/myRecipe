import React from 'react'
import ProfilPicture from '../component/profileChildAnd Component/ProfilPicture'
import ProfilPageNav from '../component/profileChildAnd Component/ProfilPageNav'
import ProfileEditForm from '../component/profileChildAnd Component/profileEditForm'
import ProfilFooterSetting from '../component/profileChildAnd Component/ProfilFooterSetting'
import { Outlet } from 'react-router-dom'

function ProfilPage() {
  return (
    <div className="profilPage">
      <ProfilPicture
        userName={"mario"}
        gender={"Man"}
        registrationDate={"14/02/24"}
      />
      <ProfilPageNav />
      <Outlet />
      <ProfilFooterSetting />
    </div>
  )
}

export default ProfilPage