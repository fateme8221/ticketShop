"use client";


import { useForm } from "react-hook-form";

const RegisterForm = ({ setPageType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-5 p-5 mt-10" onSubmit={onSubmit}>
      <h2 className="text-xl text-gray-800 text-center font-bold  pb-4 border-slate-300">
        ثبت نام کنید
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-600 text-sm font-bold flex-1">
          نام
          <input
            className="border-b mb-2 h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal"
            {...register("name", { required: "باید یک نام وارد کنید!" })}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-600 text-sm font-bold flex-1">
        ایمیل
        <input
          type="email"
          className="border-b mb-2 h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal"
          {...register("email", { required: "باید یک ایمیل وارد کنید" })}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-600 text-sm font-bold flex-1">
        رمز
        <input
          type="password"
          className="border-b mb-2 h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal"
          {...register("password", {
            required: "رمزتان را وارد کنید",
            minLength: {
              value: 6,
              message: "رمز باید بیشتر از 6 کاراکتر باشد",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="bg-[#F6A602] duration-200 text-white p-2 font-bold hover:bg-[#db9406] text-lg rounded-md"
      >
        ثبت نام
      </button>
      <div className="flex items-center gap-2 text-xs">
        <h2 className="text-gray-500 font-medium">اکانت دارید؟</h2>
        <p onClick={() => setPageType('login')} className="text-blue-600 cursor-pointer" >
          وارد شوید
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
