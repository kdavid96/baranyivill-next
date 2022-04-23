import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';


function Contact() {
    const [isVerified, setVerified] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if(isVerified){
            setMessage("Sikeres küldés!");
            if(e.target.email.value !== "" && e.target.message.value !== ""){
                console.log(e.target.email.value);
                console.log(e.target.message.value);
            }
            setMessage("A mezők kitöltése kötelező!");
        } else{
            setMessage("Erősítse meg hogy nem robot!");
        }
    }

    const sendEmailCaptcha = () => {
        console.log('captcha loaded');
    }

    const verifyCaptcha = (response) => {
        if(response){
            setVerified(true);
            setMessage("");
        }
    }
    return (
    <div id="contact" className='p-6 flex justify-center align-center flex-col'>
        <span className='my-0 mx-auto relative mb-8 px-12 py-4 bg-lime-400 rounded-2xl text-white font-semibold'>Kapcsolat</span>
        <div className='relative w-full'>
            <form className='flex flex-col justify-start align-center p-8 w-full' onSubmit={sendEmail}>
                <input className='p-2 rounded-md border-2 border-slate-200 mb-4 w-full text-left' type="email" id='email' placeholder='E-mail cím'/>
                <textarea rows={5} className='p-2 rounded-md border-2 border-slate-200 mb-4 w-full text-left' type="text" id='text' placeholder='Üzenet szövege'/>
                <button className='rounded-md bg-lime-600 text-white px-2 py-4' type="submit">Küldés</button>
            </form>
            <div className='my-0 mx-auto w-fit'>
                <ReCAPTCHA
                    size="normal"
                    sitekey="000a271c-3be2-4afc-aa28-ec2ed8de02ef"
                    render="explicit"
                    verifyCallback={verifyCaptcha}
                    onloadCallback={sendEmailCaptcha}
                    />
            </div>
        </div>
    </div>
    )
}

export default Contact