import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import { useUsers } from "./userProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Login() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const { users } = useUsers();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const isInUsers = users.some(
      (user) => user.mobile === data.mobile && user.password === data.password
    );
    const user = users.find((u) => u.mobile === data.mobile);
    localStorage.setItem("user", JSON.stringify(user));
    if (isInUsers) {
      navigate("/");
    } else {
      toast.error("شماره تماس یا رمز ورود اشتباه است");
    }
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
        <h1 className="text-center sm:text-start font-bold text-lg">ورود</h1>
        <TextField
          label="شماره موبایل"
          name="mobile"
          register={register}
          required
        />
        <TextField
          label="رمزعبور"
          name="password"
          register={register}
          required
          type="password"
          placeholder="رمزعبور"
        />
         
        <p className="text-primary-900">بازیابی رمزعبور</p>
        <Button type="submit" variant="secondary">
          ورود
        </Button>
        <p>حساب کاربری ندارید؟<Link to="/signup"><span className="text-primary-900">ثبت نام</span></Link> کنید</p>
      </form>
    </div>
  );
}

export default Login;
