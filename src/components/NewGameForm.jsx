import {z} from "zod";
import {useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {Badge} from "@/components/ui/badge.jsx";
import {CircleMinus, CirclePlus} from "lucide-react";
import {useState} from "react";

const PLAYER_NAME_LENGTH = 3;

const formSchema = z.object({
    initialBalance: z.coerce.number({
        required_error: "Starting balance is required",
        invalid_type_error: "Starting balance must be a number",
    }).min(0).max(10000, "Starting balance must be less than or equal to 10000"),
    players: z.array(
        z.object(
            {
                id: z.coerce.number(),
                name: z.string()
                    .trim()
                    .min(PLAYER_NAME_LENGTH, `Name must contain at least ${PLAYER_NAME_LENGTH} characters`)
            }
        )
    ).min(3, "Minimum 3 players are required ")
})

const NewGameForm = ({playersData}) => {

    const [players, setPlayers] = useState(() => playersData);

    const form = useForm({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            initialBalance: 1000,
            players: players
        },
    })

    const {fields, append, remove} = useFieldArray({
        name: "players",
        control: form.control,
        rules: {minLength: 4, required: true}
    });

    const onSubmit = (values) => {
        console.log(fields.length)
        console.log(values)
    }

    const onRemove = (e, index) => {
        e.preventDefault();
        remove(index)
        console.log(form.getValues("players").length)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Badge variant="outline" className='text-xl mb-1 border-none'>Starting Balance</Badge>
                <FormField
                    control={form.control}
                    name="initialBalance"
                    render={({field}) => (
                        <div className="flex justify-center">
                            <FormItem className='flex flex-col align-middle'>
                                <FormControl className='text-center w-100'>
                                    <Input className='my-1' {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500 text-xs my-2"/>
                            </FormItem>
                        </div>
                    )}
                />
                <Separator className='my-1'/>
                <Badge variant="outline" className='text-2xl my-1 border-none'>Add/Remove Players</Badge>
                {fields.map((field, index) => {
                    return (
                        <FormField
                            control={form.control}
                            key={field.id}
                            name={`players.${index}.name`}
                            render={({field}) => (
                                <div className="flex justify-center">
                                    <Button onClick={(e) => onRemove(e, index)}
                                            className='bg-background mx-4 hover:bg-red-700 px-2 py-1'>
                                        <CircleMinus className='fill-red-700'/>
                                    </Button>
                                    <FormItem>
                                        <FormControl className='text-center w-100'>
                                            <Input className='my-1' {...field}/>
                                        </FormControl>
                                        <FormMessage className="text-red-500 text-xs"/>
                                    </FormItem>
                                    <Button onClick={() => append({id: null, name: ""})}
                                            className='bg-background mx-4 hover:bg-green-700 px-2 py-1'>
                                        <CirclePlus className='fill-green-700'/>
                                    </Button>
                                </div>
                            )}
                        />
                    )
                })}
                <FormItem>
                    <FormMessage></FormMessage>
                    <Button variant='outline' className='border-2 rounded-xl my-2 px-9 py-6 text-[1rem]
                hover:bg-accent-foreground hover:text-background'
                            type="submit" disabled={!form.formState.isValid}>Submit</Button>
                </FormItem>
            </form>
        </Form>
    )
};

export default NewGameForm;
