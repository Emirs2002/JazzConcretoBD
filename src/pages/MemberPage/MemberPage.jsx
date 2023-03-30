import React, { useEffect, useState } from 'react'
import { useMember } from '../../hooks/useMember'
import { useParams } from "react-router-dom";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { useUser } from '../../contexts/userContext';

export function MemberPage() {
  const { carnet } = useParams();
  const { getSingleMember, isLoading, singleMember } = useMember();

  useEffect(() => {
    if (!isLoading && carnet) {
      getSingleMember(carnet)
    }
  }, [])

  console.log(singleMember)

  return (
    <div className="flex items-center  m-10">
      <div className="bg-[#226c87]  shadow-sm shadow-gray-500 rounded-md w-1/2 p-10 h-auto">
        <div className="flex flex-col items-center justify-center mb-2">
          <img
            src={singleMember && singleMember.photoUrl}
            alt=""
            className="rounded-full mb-2 w-44 h-auto border-2 border-gray-300"
          />
          <h1 className="text-[#FE6D73] uppercase items-center tracking-widest text-lg font-bold">
            {singleMember && singleMember.name}{" "}
            {singleMember && singleMember.lastname}
          </h1>
          <hr className="w-2/6 mt-2 mb-5"></hr>
          <h1 className="text-[#fae4fd] text-sm">
            Telf: {singleMember && singleMember.phone}
          </h1>
          <h1 className="text-[#fae4fd] text-sm">
            Correo: {singleMember && singleMember.email}
          </h1>
        </div>
      </div>
      <div className="bg-[#FFCB77]  shadow-sm shadow-gray-500 rounded-md w-full m-2 p-10 h-auto">
        <h1 className="text-[#226c87]  mt-2 uppercase tracking-widest text-lg font-bold">
          Instrumento
        </h1>
        <hr className="w-2/6 mt-2 mb-2" />
        <h1 className="text-[#226c87]  mb-1 text-sm">
          {singleMember && singleMember.instrumento}
        </h1>
        <h1 className="text-[#226c87]  mb-1 text-sm">
          Carrera: {singleMember && singleMember.carrera}
        </h1>
      </div>
    </div>
  )
}
