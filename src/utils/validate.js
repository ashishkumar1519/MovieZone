export const checkValidateData = (email,password)=>{

    // Email validation - checks basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    // Password validation - at least 8 chars, 1 uppercase, 1 lowercase, 1 number or special char
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/.test(password);
 
    if(!emailRegex){
        return {isValid: false, message: "Please enter a valid email address."};
    }
    if(!passwordRegex){
        return {isValid: false, message: "Password must be at least 8 characters with uppercase, lowercase, and number/special character."};
    }

    return {isValid: true, message: null};
}