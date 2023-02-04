import { useState } from "react";
import { nanoid } from "nanoid";
import './style.scss';

function InterCity({ deleteHandeler, id }: { deleteHandeler: any, id: string }) {
    return (
        <div>
            <input
                className='interCityInput'
                name={id}
                type="text"
                required
                placeholder='Intermediate City'
            />
            <input
                className='interCityButton'
                type="button"
                id="delete"
                value="Delete"
                onClick={deleteHandeler}
            />
        </div>
    );
}

function AddCity() {
    const [ids, setIds] = useState<string[]>([]);
    const addHandeler = () => {
        const newId = nanoid();
        setIds((ids) => [...ids, newId]);
    };

    const deleteHandeler = (removeId: string) =>
        setIds((ids) => ids.filter((id) => id !== removeId));

    return (
        <div>
            {ids.map((id) => (
                <InterCity key={id} id={id} deleteHandeler={(e: any) => deleteHandeler(id)} />
            ))}
            <input className='addButton' type="button" id="add" value="Add Intermediate Cities" onClick={addHandeler} />
        </div>
    );
}

export default AddCity;