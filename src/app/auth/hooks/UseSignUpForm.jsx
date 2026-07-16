import API_CONFIG from "@/config/api.config";
import useMutation from "@/lib/hooks/useMutation";
import { useForm } from "react-hook-form";

const useSignUpForm = () => {

    const {data, pending, mutate} = useMutation(API_CONFIG.AUTH.SIGn_UP, 'POST');

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
        },
        onError: (err) => {
            console.log(err);
        }
    })
  }



  return {form, handleSignUpSubmit};

}

export {useSignUpForm};