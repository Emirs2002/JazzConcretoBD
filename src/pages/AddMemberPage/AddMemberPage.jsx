import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function AddMemberPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {
      navigate(PROFILE_PAGE);
    } catch (error) {
      console.log(error);
    }
  };

  const onError = () => {
    console.log("error");
  };

  return (
    <div className="flex">
      <div className=" flex w-1/3 h-screen bg-[#E1BCE8] justify-center flex-col text-center">
        <h1 className="font-bold">Safe&Sound</h1>
        <p>
          Encuentra a los mejores especialistas que te brindarán terapias
          psicologicas .{" "}
        </p>
      </div>

      <div className=" flex w-2/3 h-screen bg-[#FBE8FE] flex-col">
        <div>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#FBE8FE]">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
              <h1 className="text-center">
                Regístrate para alcanzar el camino a tu bienestar
              </h1>

              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="mt-4">
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Nombre
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("name", {
                        required: "Nombre es obligatorio",
                      })}
                      type="name"
                      name="name"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.name?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Apellido
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("lastname", {
                        required: "Apellido es obligatorio",
                        maxLength: 20,
                      })}
                      type="text"
                      name="lastname"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.lastname?.message}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Email
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="email"
                      name="email"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.email?.message}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Teléfono
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("phone", {
                        required: "phone es obligatorio",
                        maxLength: {
                          value: 15,
                          // pattern:"[0-9]{5}[-][0-9]{7}[-][0-9]{1}",
                          message: "Ingreso mas de 15 caracteres",
                        },
                      })}
                      type="phone"
                      name="phone"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.phone?.message}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Contraseña
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      {...register("password", {
                        required: "Contraseña es obligatoria",
                        minLength: {
                          value: 6,
                          message: "Debe tener al menos 6 caracteres",
                        },
                      })}
                      type="password"
                      name="password"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <p>{errors.password?.message}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Soy mayor de edad.
                  </label>
                </div>

                <div className="flex items-center mt-4">
                  <button
                    onClick={onsubmit}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#3E0576] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Registrar miembro
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
