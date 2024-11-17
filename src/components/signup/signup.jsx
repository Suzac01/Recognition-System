import React from 'react';
import img from '../../assets/image.png';
import '../signup/signup.css';
import Navbar from '../navbar/navbar';
import Signupform from './signupform/signupform';
import Backgroundtext from '../navbar/backgroundtext/backgroundtext';

const Signup = () => {
    const [formData, setFormData] = React.useState({
        name:'',
        email:'',
        password:'',
    })

    return (
        <>
            <div className="container-fluid">
            
                <div className="image-wrapper">
                    <img src={img} alt="Background"/>
                    <div className="overlay"></div>
                    <div className="content">
                    {/* <Backgroundtext/> */}

                    </div>
                </div>
                <div>
                <Navbar/>
                </div>

                <div>

                    <Signupform/>
                </div>
            </div>
        </>
    );
}

export default Signup;
