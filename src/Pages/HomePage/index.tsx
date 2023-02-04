import { useForm } from "react-hook-form";
import AddCity from "../../components/AddCity";
import { useNavigate } from 'react-router-dom'
import "./style.scss";

type FormValues = {
    originCity: string;
    destinationCity: string;
    tripDate: string;
    passenger: number;
};

export default function HomePage() {
    const {
        register,
        handleSubmit,
        formState: { }
    } = useForm<FormValues>({
    });

    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data));
        navigate('/resultpage');
    });

    return (
        <div className="App">
            <h1>Enjoy Your Trip</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Origin City</label>
                    <input {...register("originCity")} placeholder="Origin City" required />
                </div>
                <AddCity />
                <div>
                    <label>Destination City</label>
                    <input {...register("destinationCity")} placeholder="Destination City" required />
                </div>
                <div>
                    <label>Pick Trip Date</label>
                    <input type='date' {...register("tripDate")} required />
                </div>
                <div>
                    <label>Number of Passengers</label>
                    <input type='number' {...register("passenger", { min: 1 })} required />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}
