import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const LoginPage = () => {
    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        const decoded = jwtDecode(res.credential);
        console.log(decoded);
        // setAccount(decoded);
    }
    const onLoginError = (res) => {
        console.log('Login Failed', res);
    }

    return (<>
        <dialog id="my_modal_4" className="modal modal-open">
            <div className="modal-box w-10/12 mr-4 max-w-5xl bg-white h-5/6 shadow-none flex flex-col backdrop-blur-none">
                <div className='flex flex-row justify-around items-center mt-5'>
                    <div>
                        <h3 className="text-2xl py-4">
                            Use WhatsApp on your computer:
                        </h3>
                        <ul className='ml-5 space-y-3 mb-10'>
                            <li>1. Open WhatsApp on your phone</li>
                            <li>2. Tap Menu setting and select WhatsApp web</li>
                            <li>3. Point your phone to this screen to capture the code</li>
                        </ul>
                    </div>
                    <div className='relative'>
                        <img src={qrCodeImage} alt="qr-code"
                            className='mx-5'
                        />
                        <div className='absolute top-1/2 translate-x-1/2 -translate-y-4'>
                            <GoogleLogin
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full text-center mt-20'>
                    The WhatsApp Clone
                </div>
            </div>
        </dialog>
    </>
    )
}

export default LoginPage