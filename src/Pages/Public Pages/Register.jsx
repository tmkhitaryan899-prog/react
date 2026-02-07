import React from 'react';
import {useForm} from "react-hook-form";
import Input from "../../Components/UI/Input.jsx";
import {emailValidation, passwordValidation, usernameValidation} from "../../Utils/Validations.js";
import axios from "axios";
import {notify} from "../../Utils/Notify.jsx";

const Register = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
    } = useForm({mode: 'all'});


  async function handleRegister(data) {
        const { username, email, password } = data;
        const newUser = {
            username,
            email,
            password,
        }
        try {
            const response = await axios.post("http://localhost:4000/users", newUser);

            // const response = await axios.get("http://localhost:4000/users");
            // const users = await response.data;
           reset();
           notify("Register successful")
            return response.data;
        }catch(err) {
            console.log(err);
        }


    }
    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <form
                className='w-[250px] h-[300px] border border-black rounded-lg p-3
                flex flex-col justify-around items-center'
                onSubmit={handleSubmit(handleRegister)}>
                <h1>Register</h1>
                <Input
                    name="username"
                    register={register}
                    type="text"
                    placeholder="Username"
                    validation={usernameValidation}
                    error={errors.username && errors.username.message}
                />
                <Input
                    name="email"
                    register={register}
                    type="email"
                    placeholder="Email"
                    validation={emailValidation}
                    error={errors.email && errors.email.message}
                />
                <Input
                    name="password"
                    register={register}
                    type="password"
                    placeholder="Password"
                    validation={passwordValidation}
                    error={errors.password && errors.password.message}
                />
                <button
                    disabled={!isValid}
                    type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;