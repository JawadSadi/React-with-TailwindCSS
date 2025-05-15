import { useForm, type SubmitHandler } from "react-hook-form";

interface FormType {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

export const AdvanceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">FirstName : </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "firstName is required" })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">LastName : </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "lastName is required" })}
          />
          {errors.lastName && (
            <p style={{ color: "red" }}>{errors.lastName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid Email",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="city">City : </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "city is required" })}
          />
          {errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}
        </div>
        <div>
          <label htmlFor="state">State : </label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "state is required" })}
          />
          {errors.state && (
            <p style={{ color: "red" }}>{errors.state.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="zip">ZipCode : </label>
          <input
            type="text"
            id="zip"
            {...register("zip", { required: "ZipCode is required" })}
          />
          {errors.zip && <p style={{ color: "red" }}>{errors.zip.message}</p>}
        </div>
        <div>
          <label htmlFor="country">Country : </label>
          <input
            type="text"
            id="country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <p style={{ color: "red" }}>{errors.country.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="completeLocation">Complete Location: </label>
          <input
            type="text"
            id="completeLocation"
            {...register("completeLocation", {
              required: "Complete Location is required",
            })}
          />
          {errors.completeLocation && (
            <p style={{ color: "red" }}>{errors.completeLocation.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdvanceForm;
