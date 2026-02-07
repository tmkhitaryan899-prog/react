let usernameRegex = /^[a-zA-Z]{2,}$/;
let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


export const usernameValidation = {
    pattern: {
        value: usernameRegex,
        message: 'Username Error',
    },
    required:{
        value: true,
        message: 'Username is required',
    }
}


export const emailValidation = {
    pattern: {
        value: emailRegex,
        message: "Email error"
    },
    required: {
        value: true,
        message: "Email is required"
    }
}



export const passwordValidation = {
    pattern: {
        value: passwordRegex,
        message: "Password error"
    },
    required: {
        value: true,
        message: "Password is required"
    }
}


export const productNameValidation = {
    required: {
        value: true,
        message: 'Product name is required',
    }
}