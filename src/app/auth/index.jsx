import SignUp from "./SignUpPage";
import SignIn from "./SignInPage";
import AuthLayout from "@/components/layouts/Auth.Layout";


export const SignInPage = () => {
    return (
        <AuthLayout>
            <SignIn />
        </AuthLayout>
    )
}

export const SignUpPage = () => {
    return (
        <AuthLayout>
            <SignUp />
        </AuthLayout>
    )
}
