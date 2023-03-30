import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useMember } from "../../hooks/useMember";
import { ADDMEMBER_PAGE } from "../../constants/url";

export function HomePage() {
  const { getAllMembers, isLoading, members, memberParam, getMemberByParam } =
    useMember();
  const [searchMode, setSearch] = useState(false);
  const [campo, setCampo] = useState(null);
  const inputValue = document.getElementById("searchbar");

  useEffect(() => {
    getAllMembers();
    
    if (inputValue?.value == null) {
    } else {
      getMemberByParam(campo, inputValue.value);
    }
  }, []);

  const handleSearch = async () => {
    setSearch(true);
    if (inputValue?.value == null) {
    } else {
      getMemberByParam(campo, inputValue.value);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 w-1/2 bg-[#FEF9EF] rounded-md border-4 border-black">
        <h1 className="font-buttonfont font-bold text-4xl text-center">
          ¡BIENVENIDO A LA BASE DE DATOS DE JAZZ EN CONCRETO!
        </h1>
      </div>
      <div className="mt-10 text-2xl font-bold">
        <Link to={ADDMEMBER_PAGE}>
          <button className="bg-[#FFCB77] rounded-md text-[#FEF9EF] p-4">
            Añadir integrantes
          </button>
        </Link>
      </div>

      <h1 className="mt-20 text-xl font-bold">
        ----------- BUSCAR INTEGRANTES -----------
      </h1>
      <div className="w-90 mt-10 mb-6 flex">
        <input
          placeholder="Escriba aquí..."
          id="searchbar"
          className="h-10 border-solid border-black border-2 rounded-sm pl-2"
        />
        <select
          className="border-solid border-l-0 border-r-0 cursor-pointer border-black border-2 bg-[#FE6D73] font-semibold font-maintext"
          onChange={(e) => {
            setCampo(e.target.value);
          }}
        >
          <option value="none">Elegir filtro</option>
          <option value="name">Nombre</option>
          <option value="instrumento">Instrumento</option>
          <option value="carrera">Carrera</option>
        </select>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/jazz-concreto.appspot.com/o/profilepics%2Flupa.png?alt=media&token=9e43dca8-f037-4e91-acd7-dcf96d15d9de"
          className="h-10 w-auto border-solid border-black border-2 bg-[#b03034] cursor-pointer rounded-sm"
          onClick={handleSearch}
        />
      </div>
      <h1 className="mt-20 text-2xl font-bold">
        CONOCE A NUESTROS INTEGRANTES
      </h1>
      {isLoading && (
        <>
          <h1 className="font-bold text-2xl">CARGANDO INTEGRANTES...</h1>
        </>
      )}
      <div className="border-2 border-dashed rounded-xl border-black w-5/6 grid grid-cols-3 my-6">
        {!isLoading &&
          !searchMode &&
          (members.map((member) => {
            return <Card member={member} />;
          }))}
        {!isLoading &&
          searchMode &&
          (memberParam.map((member) => {
            return <Card member={member} />;
          }))}
      </div>
    </div>
  );
}
