import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Input from "../../Components/UI/Input.jsx";
import {emailValidation, passwordValidation} from "../../Utils/Validations.js";
import axios from "axios";
import {IoEye} from "react-icons/io5";
import {IoMdEyeOff} from "react-icons/io";


const Login = () => {
    const [users, setUsers] = useState([])
    const [inputType, setInputType] = useState("password");

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm({mode: 'all'});


    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:4000/users")
            setUsers(res.data)
        }catch(err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])

     const handleLogin = async (data) => {
        const {  email, password } = data;


       const findUser = users.find((user) => user.email === email && user.password === password);
       if (findUser) {
           localStorage.setItem('token', findUser.username)
           window.location.reload()
       }else {
           alert('User is not found')
       }
    }

    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <form
                className='w-[250px] h-[300px] border border-black rounded-lg p-3
                flex flex-col justify-around items-center'
                onSubmit={handleSubmit(handleLogin)}>
                <h1>Login</h1>
                <Input
                    name="email"
                    register={register}
                    type="email"
                    placeholder="Email"
                    validation={emailValidation}
                    error={errors.email && errors.email.message}
                />
               <div className='relative flex justify-center items-center'>
                   <Input
                       name="password"
                       register={register}
                       type={inputType}
                       placeholder="Password"
                       validation={passwordValidation}
                       error={errors.password && errors.password.message}
                   />

                   {inputType === "password" ? <IoEye
                       onClick={()=>{
                           setInputType(inputType === "password" ? "text" : "password");
                       }}
                       className="absolute right-2 text-2xl cursor-pointer"
                   /> : <IoMdEyeOff
                       onClick={()=>{
                           setInputType(inputType === "password" ? "text" : "password");
                       }}
                       className="absolute right-2 text-2xl cursor-pointer"
                   />}
               </div>


                <button
                    disabled={!isValid}
                    type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;