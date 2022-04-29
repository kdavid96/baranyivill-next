import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';


function Contact() {
    const [isVerified, setVerified] = useState(false);
    const [message, setMessage] = useState("");
    const recaptchaRef = React.createRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if(isVerified){
            setMessage("Sikeres küldés!");
            if(e.target.email.value !== "" && e.target.text.value !== ""){
                
                fetch('/api/contact', {
                    method: 'post',
                    body: JSON.stringify({email: e.target.email.value, text: e.target.text.value}),
                });

                e.target.email.value = "";
                e.target.text.value = "";

                recaptchaRef.current.reset();
                setVerified(false);
            }else{
                setMessage("A mezők kitöltése kötelező!");
            }
        } else{
            setMessage("Erősítse meg hogy nem robot!");
        }
    }

    const onReCAPTCHAChange = (captchaCode) => {
        if(!captchaCode) {
            return;
        }else{
            setVerified(true);
        }
    }

    return (
        <div id="contact" className='relative w-full bg-white container'>
            <div className='p-0 md:p-6 flex justify-start align-center flex-col bg-white rounded-lg shadow-none md:shadow-md w-auto'>
                <span className='my-0 mx-auto relative mb-8 px-12 py-4 bg-lime-600 rounded-2xl text-white font-semibold'>Kapcsolat</span>
                <div className='relative w-full'>
                    <form className='flex flex-col justify-start align-center p-8 w-full' onSubmit={sendEmail}>
                        <input className='p-2 rounded-md border-2 border-slate-200 mb-4 w-full text-left' type="email" id='email' placeholder='E-mail cím'/>
                        <textarea rows={5} className='p-2 rounded-md border-2 border-slate-200 mb-4 w-full text-left' type="text" id='text' placeholder='Üzenet szövege'/>
                        <div className='my-0 mx-auto w-fit'>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                render="explicit"
                                onChange={onReCAPTCHAChange}
                                />
                        </div>
                        <button className='mt-2 rounded-md bg-lime-600 text-white px-2 py-4' type="submit">Küldés</button>
                    </form>
                    <p className='font-semibold text-center text-red-600'>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact