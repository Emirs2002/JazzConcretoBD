import React from "react";

export function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 w-1/2 bg-[#FEF9EF] rounded-md border-4 border-black">
        <h1 className="font-buttonfont font-bold text-4xl text-center">
          ¡BIENVENIDO A LA BASE DE DATOS DE JAZZ EN CONCRETO!
        </h1>
      </div>

      <h1 className="mt-20 text-xl font-bold">
        ----------- BUSCAR INTEGRANTES -----------
      </h1>
      <div className="w-90 mt-10 mb-6 flex">
        <input
          placeholder="Escriba aquí..."
          className="h-10 border-solid border-black border-2 rounded-sm pl-2"
        />
        <select className="border-solid border-l-0 border-r-0 border-black border-2 bg-[#FE6D73] font-semibold font-maintext">
          <option value="Nombre">Nombre</option>
          <option value="Especialidad">Instrumento</option>
        </select>
        <img
          src="src\assets\lupa.png"
          className="h-10 w-auto border-solid border-black border-2 bg-[#b03034] cursor-pointer rounded-sm"
        />
      </div>
    </div>
  );
}
