import React from "react";
import { Link } from "react-router-dom";

export function Card({ member }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 md:justify-center md:items-center h-auto p-2 mt-10 md:w-64 w-full 
    container mx-auto bg-[#226c87] rounded-xl shadow-md mb-5 hover:bg-[#488297] cursor-pointer">
      <div className=" md:flex md:justify-center">
        <img
          className="md:w-44 w-40 h-auto rounded-2xl"
          src={member.photoUrl}
          alt={member.name}
        />
      </div>
      <div className="md:flex md:flex-col md:items-center">
        <div className="pt-1 text-white text-xl font-bold">
          <Link to={`/integrantes/${member.carnet}`}>{member.name} {member.lastname}</Link>
        </div>
        <div className="text-white flex justify-start m-2">
          Carrera: {member.carrera}
        </div>
        <div className=" w-auto p-2 grid justify-items-center rounded-xl text-white bg-[#17c3d2] mt-4">
          Instrumento: {member.instrumento}
        </div>
      </div>
    </div>
  );
}
