import React, { useState } from "react";
import { createNewMember } from "../../firebase/member-service";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HOME_PAGE } from "../../constants/url";
import { uploadPhoto } from "../../firebase/user-service"


export function AddMemberPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    try {

      const imgUrl = await uploadPhoto(data.photo[0], data.photo[0].name)
      
      await createNewMember({
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        carnet: data.carnet,
        email: data.email,
        carrera: data.carrera,
        instrumento: data.instrumento,
        beca:data.beca,
        photoUrl: imgUrl,
        
      })
      navigate(HOME_PAGE);
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <div className="flex flex-row">
      <img src="https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2Fmembers.jpg?alt=media&token=63b106c3-7a64-4db4-8c2b-1e1b94e5f24a" className="w-1/2"/>
      <div className="flex flex-col items-center w-full pt-6 mb-10">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <h1 className="font-semibold text-xl">
            Ingresa la información de un integrante
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
                htmlFor="carnet"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Carnet
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("carnet", {
                    required: "Carnet es obligatorio",
                    maxLength: 20,
                  })}
                  type="text"
                  name="carnet"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <p>{errors.carnet?.message}</p>
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
                htmlFor="carrera"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Carrera
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("carrera", {
                    required: "Carrera es obligatorio",
                  })}
                  type="text"
                  name="carrera"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <p>{errors.carrera?.message}</p>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="instrumento"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Instrumento
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("instrumento", {
                    required: "Instrumento es obligatorio",
                  })}
                  type="text"
                  name="instrumento"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <p>{errors.instrumento?.message}</p>
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
                      message: "Ingresó más de 15 caracteres",
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
              <div className="flex ">
                <input
                  {...register("beca")}
                  type="checkbox"
                  name="beca"
                />
                <label
                  htmlFor="beca"
                  className="block text-sm font-medium text-gray-700 undefined ml-4"
                >
                  ¿Tiene beca?
                </label>
                <p>{errors.beca?.message}</p>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Foto del integrante
              </label>
              <div className="flex flex-col items-start">
                <input
                  {...register("photo", {
                    required: "Foto es obligatoria",
                  })}
                  type="file"
                  name="photo"
                  accept="image/*"
                  multiple={false}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <p>{errors.photo?.message}</p>
              </div>
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
  );
}
