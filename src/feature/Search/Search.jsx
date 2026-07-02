import { Form, useForm } from "react-hook-form";

const Search = () => {

    const form = useForm();

    function onSubmit(data){
        console.log("Data : ",data);
    }

    return (
        <section className="container">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    
                </form>
            </Form>
        </section>
    )
}

export default Search;