export interface User {
    username: string;
    first_name: string;
    last_name?: string;
    mobile: string;
    email: string;
}
export interface UserCreate extends User {
    confirmpassword: string;
    ageConsent: boolean;
    password: string;
}