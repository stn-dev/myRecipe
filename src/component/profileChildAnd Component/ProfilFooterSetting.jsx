import React from 'react'
import Texte from '../../component/text/text'

function ProfilFooterSetting() {
    return (
        <div className="profilSettingFooterContainer">
            <div className="incitation">
                <p>
                    <span>Let's Cook</span>, data controller, collects this data in order to:manage your account and allow you to benefit from the services to which it gives you access, improve the quality of its services and develop new ones, provide the functionalities necessary for the operation of its services and meet legal or regulatory obligations weighing on it and court decisions,to send you personalized commercial communications and measure their performance if you have consented to thisand subject to your agreement in the <span>cookie configuration module</span> which you can withdraw at any time, to reconcile this data with other data concerning you in order to enrich the profile on the basis of which the content and advertisements are personalized and you display personalized content and advertisements. To find out more about the management of your personal data and to exercise your rights, you can consult our <span>personal data protection policy</span>
                </p>
            </div>
            <div className="setting">
                <Texte
                    content={"Delete my account"}
                    as={"h3"}
                />
                <Texte
                    content={"Cookies Settings"}
                    as={"h4"}
                />
            </div>
        </div>
    )
}

export default ProfilFooterSetting