import React from 'react'

function SidebarComponent({ logo, content }) {
    return (
        <div className="sidebarAdminComponent">
            <img src={logo} />
            <h4> {content} </h4>
        </div>
    )
}

export default SidebarComponent