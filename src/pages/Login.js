import React from 'react';
import { GoogleLogo, githubLogo , googleLogo } from '../assets';

import {
    GoogleAuthProvider , getAuth , signInWithPopup , signOut,
} from 'firebase/auth';
import { addUser, removeUser } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const auth = getAuth()
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();
    const userInfo = useSelector((state)=>state.bazar.userInfo);

    const handleGoogleLogin = (e)=>
    {
        e.preventDefault();
        signInWithPopup(auth , provider).then((result)=>
        {
            const user = result.user;
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL
            } ));
            setTimeout(()=>{
                navigate("/")
            } , 1500)
        }).catch(
            (error)=>{
                console.log(error);
            }
        )
        

    };

    const handleSignOut=()=>
    {
        signOut(auth).then(()=>
        {
            toast.success("Logged Out Succesfully");
            dispatch(removeUser());
        })
        .catch((error)=>
        {
            toast.error("Could not sign out");
            console.log(error);
        })
    }


  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-10'>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick = { userInfo ? undefined : handleGoogleLogin} className='text-2xl font-bold w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>

                <img className='w-8' src={GoogleLogo} altimg="googlLogo"></img>
                { !userInfo &&
                
                    <span className='text-sm text-gray-900'> Sign in with Google </span>


                }
                
            </div>
            <button onClick = {handleSignOut} className='bg-black text-white test-base py-3 px-8 tracking-wisde rounded-md hover:bg-gray-800 duration-300 ' > Sign Out </button>

        </div>
        {/* <div className='w-full flex items-center justify-center gap-10'>
            <div className='text-2xl font-bold w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>

                <img className='w-8' src={githubLogo} altimg="googleLogo"></img>
                <span className='text-sm text-gray-900'> Sign in with GitHub </span>
            </div>
            <button className='bg-black text-white test-base py-3 px-8 tracking-wisde rounded-md hover:bg-gray-800 duration-300 ' > Sign Out </button>

        </div> */}
        <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>

  )
}

export default Login;