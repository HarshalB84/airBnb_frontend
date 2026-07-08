import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import LocationInput from "./LocationInput";
import DateSelectInput from "./DateSelectInput";
import { Button } from "@/components/ui/Button";
import OccupancyInput from "./OccupancyInput";

const Search = () => {

    const form = useForm();

    function onSubmit(data){
        console.log("Data : ",data);
    }

    return (
        <section className="container">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 p-1 bg-yellow-500 
                lg:flex-row lg:items-center rounded h-14">
                    <LocationInput form={form}/>
                    <DateSelectInput form={form}/>
                    <OccupancyInput form={form}/>
                    <Button type="submit" className="text-lg h-full">Search</Button>
                </form>
            </Form>
        </section>
    )
}

export default Search;