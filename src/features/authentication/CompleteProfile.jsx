import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import AppLayout from "../../ui/AppLayout";
import { useUsers } from "./userProvider";



function CompleteProfile() {
const{editUser}=useUsers()
const onSubmit=(data)=>{
    const user=JSON.parse(localStorage.getItem("user")) || {}
    const id=user.mobile
editUser({id,data})
console.log(data);
}


 
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <AppLayout>
      <h1 className="mt-4">مشخصات حساب کاربری</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/3 mx-auto text-sm grid grid-cols-1 sm:grid-cols-2 space-y-4 sm:space-y-0 gap-4 p-4 ">
        <TextField
          label="نام"
          name="name"
          type="text"
          register={register}
          required
          validationSchema={{
            required: "نام ضروری است",
            minLength: {
              value: 3,

              message: "  نام نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label=" نام خانوادگی"
          name="family"
          type="text"
          register={register}
          required
          validationSchema={{
            required: "نام خانوادگی ضروری است",
          }}
          errors={errors}
        />
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
            required: "  ایمیل ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="آدرس"
          name="address"
          type="text"
          register={register}
          required
          validationSchema={{
            required: "آدرس ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label="تلفن منزل"
          name="homeNumber"
          type="text"
          register={register}
        />

        <div className="w-full sm:text-left pt-10 sm:col-span-2">
          <Button type="submit" variant="secondary" className="w-full sm:w-fit">
            ذخیره تغییرات
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}

export default CompleteProfile;
