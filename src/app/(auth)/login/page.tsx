import { FormLogin } from "./form-login";

export default function Login() {
  return (
      <div className="w-full h-screen bg-gradient-to-r from-gray-100 via-blue-100 to-gray-200 flex items-center justify-center">
          <div className="bg-white p-10 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <FormLogin />
          </div>
      </div>
  );
}