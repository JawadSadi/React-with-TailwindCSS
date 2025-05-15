import { useForm, type SubmitHandler } from "react-hook-form";

interface FormType {
  name: string;
  gmail: string;
  password: string;
}

export const FormApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="gmail">Email</label>
        <input
          type="text"
          id="gmail"
          placeholder="Enter your Email"
          {...register("gmail", {
            required: "Email is required",
            pattern: { value: /^[A-Z-9._%+-]/i, message: "Invalid Email" },
          })}
        />
        {errors.gmail && <p style={{ color: "red" }}>{errors.gmail.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be more than 8 character",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default FormApp;
