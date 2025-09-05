const LoginForm = () => {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
        <form className="mx-auto max-w-md">
          <div className="relative z-0 mb-5 w-full">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400"
            >
              이메일 주소
            </label>
          </div>
        </form>
      </div>
    );
  };
  
  export default LoginForm;