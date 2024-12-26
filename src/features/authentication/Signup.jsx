import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import { useForm} from "react-hook-form";


import "react-phone-number-input/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "./userProvider";

function Signup() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { addUser } = useUsers();
  const onSubmit = (formData) => {
    const data = {
      id: formData.mobile,
      mobile: formData.mobile,
      email: formData.email,
      password: formData.password,
    };
    addUser(data);
  };

  return (
    <div className=" flex flex-col sm:flex-row-reverse container max-w-[348px]  sm:max-w-[768px] mt-10 gap-6">
      <div className="h-[20rem] sm:h-full">
        <img
          src="/images/Frame-login.png"
          alt="Login"
          className="h-full w-full"
        />
      </div>
      <form
        className=" top-80 sm:top-0 w-full bg-white flex flex-col gap-4 justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center sm:text-start font-bold text-lg">ثبت نام</h1>
        <TextField
          label="شماره موبایل"
          name="mobile"
          type="mobile"
          register={register}
          required
          validationSchema={{
            required: "موبایل ضروری است",
            minLength: {
              value: 11,

              message: " شماره موبایل نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label="ایمیل"
          name="email"
          type="email"
          register={register}
          required
          validationSchema={{
            required: "ایمیل ضروری است",
      
          }}
          errors={errors}
        />
        <TextField
          label="رمزعبور"
          name="password"
          register={register}
          required
          type="password"
          validationSchema={{
            required: "رمزعبور ضروری است",
           
            
          }}
          errors={errors}
        />

        <Button type="submit" variant="secondary" className="mt-4">
          ثبت نام
        </Button>
        <p>
          حساب کاربری دارید؟
          <Link to="/login">
            <span className="text-primary-900">وارد</span>
          </Link>{" "}
          شوید
        </p>
      </form>
    </div>
  );
}

export default Signup;
