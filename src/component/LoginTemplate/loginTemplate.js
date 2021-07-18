import './loginTemplate.css';
import logo1 from '../../assets/images/cta-logo-one.svg';
import logo2 from '../../assets/images/cta-logo-two.png';
const LoginTemplate = (props)=>{
    const handleShow =()=>{
        props.setPage(false)
    }
    return<>
    <div className="loginTemplate">
        <div className="loginContent">
                <div className="CTA">
                    <img className="CTALogoOne" src={logo1} alt="" />
                    <div className="SignUp" onClick={handleShow}>GET ALL THERE</div>
                    <div className="Description">
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </div>
                    <img className="CTALogoTwo" src={logo2} alt="" />
                </div>
                <div className="BgImage"/>
        </div>
    </div>
    </>;
}

export default LoginTemplate;