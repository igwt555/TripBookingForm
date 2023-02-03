import './style.scss';

function CityInput({name, placeholder}:{name:string, placeholder:string}) {
    return (
        <div>
            <p>{name}</p>
            <input 
                type="text" 
                required
                placeholder={placeholder}
            />
        </div>
    );
}

export default CityInput;
