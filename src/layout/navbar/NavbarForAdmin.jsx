import React from 'react'
import { InputWhite } from '../../component/input/input'
import Logo from '../../component/logo/logo';

function NavbarForAdmin() {
    return (
        <nav className='NavForAdmin'>
            <Logo />
            <InputWhite
                id={"inputAdmin"}
                classe={"inputWhiteContainer"}
                inputClass={"input-white"}
                placeholder={"Search..."}
            />
            <h4>Other menu</h4>
            <div className="notif">
                <img src="/src/assets/notifAdlmin.svg" alt="" />
                <img src="src/assets/alert.svg" alt="" />
                <h5>Allergic alert</h5>
            </div>
            <div className='admin-infos'>
                <div className="picture"></div>
                <div className="role">
                    <h4>
                        John Doe
                    </h4>
                    <p>
                        Super admin
                    </p>
                </div>
                <img src="src/assets/arrowDown.svg" alt="" />
            </div>
        </nav>
    )
}

export default NavbarForAdmin;