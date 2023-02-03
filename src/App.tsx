import React from "react";
import { useForm, Resolver } from "react-hook-form";

import "./App.css";

type FormValues = {
  originCity: string;
  destinationCity: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.originCity ? {} : values,
    errors: !values.originCity
      ? {
        originCity: {
          type: "required",
          message: "This is required."
        }
      }
      : {}
  };
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: resolver
  });

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <div className="App">
      <h1>Enjoy Your Trip</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Origin City</label>
          <input {...register("originCity")} placeholder="Origin City" />
          {errors?.originCity && <p>{errors.originCity.message}</p>}
        </div>
        <button name='addCity' onClick={(e) => e.preventDefault()}>Add Intermediate Cities</button>
        <div>
          <label>Destination City</label>
          <input {...register("destinationCity")} placeholder="Destination City" />
          {errors?.destinationCity && <p>{errors.destinationCity.message}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
