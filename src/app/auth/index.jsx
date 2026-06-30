import SignUp from "./SignUpPage";
import SignIn from "./SignInPage";
import AuthLayout from "@/components/layouts/Auth.Layout";


export const SignInPage = () => {
    return (
        <AuthLayout title="Welcome Back" description="Please enter your details to Sign In">
            <SignIn />
        </AuthLayout>
    )
}

export const SignUpPage = () => {
    return (
        <AuthLayout title="Create Account" description="Please fill the form to Sign Up">
            <SignUp />
        </AuthLayout>
    )
}
