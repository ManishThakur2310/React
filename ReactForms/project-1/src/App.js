import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => {
      setTimeout((resolve), 3000)
    });
    console.log("submitting the form", data)

  }
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div>
    //     <div>
    //       <label >First Name</label>
    //       <input className={errors.firstName ? 'input-first-errors' : ""}
    //         {...register("firstName",
    //           {
    //             required: true,
    //             minLength: { value: 3, message: "Min length atleast 3" },
    //             maxLength: { value: 6, message: "Maximum Length is 6" }
    //           })} />
    //       {errors.firstName && <p>{errors.firstName.message}</p>}
    //     </div>
    //     <div>
    //       <label >Middle Name</label>
    //       <input className={errors.middleName ? 'input-middle-errors' : ""}
    //         {...register("middleName", { required: true, minLength: { value: 3, message: "Min length atleast 3" }, maxLength: { value: 6, message: "Maximum Length is 6" } })}
    //       />
    //       {errors.middleName && <p>{errors.middleName.message}</p>}

    //     </div>
    //     <div>
    //       <label >Last Name</label>
    //       <input className={errors.lastName ? 'input-last-errors' : ""}
    //         {...register("lastName", { required: true, minLength: { value: 3, message: "Min length atleast 3" }, maxLength: { value: 6, message: "Maximum Length is 6" } })}
    //       />
    //       {errors.lastName && <p>{errors.lastName.message}</p>}
    //     </div>
    //     <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>
    //   </div>
    // </form>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Contact Form</h2>

      <div>
        <label >Full Name:</label>
        <input className={errors.fullName? "input-error-fullname":""}
          { ...register("fullName", { required: true, minLength: { value: 5, message: "Min length atleast 5" }, maxLength: { value: 20, message: "Maximum Length is 20" } }) } 
          />
          {errors.fullName && <p className='error-class'>{errors.fullName.message}</p>}
      </div>

      <div>
        <label > Email Address:</label>
        <input  className={errors.email? "input-error-fullname":""}
          { ...register("email", { required: true, minLength: { value: 10, message: "Min length atleast 10" }, maxLength: { value: 30, message: "Maximum Length is 30" } }) } 
          />
          {errors.email && <p className='error-class'>{errors.email.message}</p>}
      </div>

      <div>
        <label >Phone Number:</label>
        <input  className={errors.phoneNumber? "input-error-fullname":""}{ ...register("phoneNumber", { required: true, minLength: { value: 10, message: "Min atleast 10" } }) } 
          />
          {errors.phoneNumber && <p className='error-class'>{errors.phoneNumber.message}</p>}
      </div>

      <div>
        <label >Message:</label>
        <textarea  {...register("message")}></textarea>
      </div>

      <input type="submit" disabled = {isSubmitting} value={isSubmitting? "Submitting" : "Submit"} />
      </div>
    </form>
    </div>
  );
}

export default App;
