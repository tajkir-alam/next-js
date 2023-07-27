"use client"
import { AuthContext } from '@/Provider/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa';
import { HiOutlineLockClosed } from "react-icons/hi2";
import Swal from 'sweetalert2';

const Page = () => {
    const [Error, setError] = useState('');
    const router = useRouter();

    const { emailSignup, logOut, loader, setLoader } = useContext(AuthContext)

    const backgroundImageStyle = {
        backgroundImage: "url('/authenticationBG.png')"
    };
    const bgOverlayStyle = {
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.42%, rgba(0, 0, 0, 0.50) 100%)'
    }


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        setError('');
        setLoader(true);
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const userInfo = { name, email, role: 'viewer' }
        emailSignup(name, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    fetch('/api/users', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(userInfo),
                    })
                        .then(res => res.json())
                        .then(() => {
                            router.push('/login');
                            Toast.fire({
                                icon: 'success',
                                title: 'Signed in successfully'
                            });
                            reset();
                        })
                }
                setLoader(false);
                logOut();
            })
            .catch(error => {
                setError(error.message.split('(')[1].split(')')[0].split('/')[1])
                console.log(error.message);
                setLoader(false)
            })
    }

    return (
        <div className='w-full h-fit bg-center bg-no-repeat bg-cover rounded-3xl relative' style={backgroundImageStyle}>
            <div className="mx-4 lg:mx-44 py-20 flex flex-col items-center lg:items-stretch lg:flex-row">
                <div className='bg-[#319DFF] py-4 lg:py-20 px-4 lg:px-0 flex flex-col justify-center items-center text-white text-center w-full lg:w-[40%] space-y-5'>
                    <h1 className='text-4xl lg:text-5xl'>Welcome Back</h1>
                    <p className='text-sm'>
                        To keep connected with us please <br />
                        login with your personal info
                    </p>
                    <button onClick={() => router.push('/login')} className="btn btn-outline border-2 border-white hover:border-white text-white hover:bg-transparent rounded-3xl px-12">
                        sign in
                    </button>
                </div>
                <div className='w-full lg:w-[60%] py-12 lg:py-36 backdrop-sepia-0 bg-white/30'>
                    <div className="text-white">
                        <div className='text-center'>
                            <h1 className='text-4xl lg:text-5xl text-[#319DFF]'>Create Account</h1>
                            <p className='text-sm mt-3'>
                                Use your email for registration
                            </p>
                        </div>
                        <div className='mt-6'>
                            <form onSubmit={handleSubmit(onSubmit)} className='w-full px-6 lg:px-28'>
                                <label htmlFor="name" className='flex gap-1 items-center'>
                                    <FaRegUser />
                                    <p>Name</p>
                                </label>
                                <input {...register("name", { required: true })} className='w-full mb-5 bg-transparent border-b-2 outline-none px-1 border-b-white' />
                                <label htmlFor="email" className='flex gap-1 items-center'>
                                    <FaRegEnvelope />
                                    <p>Email</p>
                                </label>
                                <input {...register("email", { required: true })} className='w-full mb-5 bg-transparent border-b-2 outline-none px-1 border-b-white' />
                                <label htmlFor="password" className='flex gap-1 items-center'>
                                    <HiOutlineLockClosed className='text-xl' />
                                    <p>Password</p>
                                </label>
                                <input {...register("password", { required: true, minLength: 5 })} type='password' className='w-full bg-transparent border-b-2 outline-none px-1 border-b-white' />
                                {errors.password &&
                                    <p className='text-white my-5 text-center tracking-widest font-semibold capitalize '>
                                        Password have to be more than 6 characters.
                                    </p>
                                }
                                <p className='text-white my-5 text-center tracking-widest font-semibold capitalize '>
                                    {Error}
                                </p>
                                {loader &&
                                    <p className='text-white my-5 text-center tracking-widest font-semibold capitalize '>
                                        <span className="loading loading-bars loading-lg"></span>
                                    </p>
                                }
                                <span className='flex justify-center items-center'>
                                    <input type="submit" className='btn bg-[#319DFF] rounded-3xl text-white border-0 px-12 hover:bg-[#319DFF]' />
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;