import { Toaster } from "@/components/ui/sonner";
import API_CONFIG from "@/config/api.config";
import { PATHS } from "@/config/path.config";
import useMutation from "@/lib/hooks/useMutation";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useSignUpForm = () => {

    const navigate = useNavigate();

    const {data, pending, mutate} = useMutation(API_CONFIG.AUTH.SIGN_UP, 'POST');

    const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  function handleSignUpSubmit(data){
    mutate(data, {
        onSuccess: (response) => {
            console.log(response);
            toast("Sign up successfull", {
              description: "Use your credentials to Sign in",
              type: "success"
            })
            navigate(PATHS.SIGN_IN);
        },
        onError: (err) => {
            console.log(err);
        }
    })
  }



  return {form, handleSignUpSubmit};

}

export {useSignUpForm};