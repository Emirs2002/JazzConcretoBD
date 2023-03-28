import React from "react";

import { signInWithGoogle } from "../../firebase/auth-service";
import { useNavigate } from "react-router-dom";

import { HOME_PAGE } from "../../constants/url";

export function LoginPage() {
  const navigate = useNavigate();

  const handleSigninWithGoogle = async () => {
    await signInWithGoogle();
    navigate(HOME_PAGE);
  };

  return (
    <div className="flex flex-col items-center mb-20">
      <div className="my-16 flex flex-col items-center">
        <h1 className="font-extrabold text-5xl font-buttonfont">¡ÚNETE A LA BANDA!</h1>
        <img className="w-80" src="src\assets\Logo Banda.png" />
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <h1 className="text-center">
          Inicia sesión para interactuar con la BD de Jazz en Concreto
        </h1>

        <div className="my-6 space-y-2">
          <button
            onClick={handleSigninWithGoogle}
            role="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-[#FE6D73] bg-[#f78e8f] hover:text-white"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />
            <p className="font-bold ">Iniciar sesión con Google</p>
          </button>
        </div>
      </div>
    </div>
  );
}
