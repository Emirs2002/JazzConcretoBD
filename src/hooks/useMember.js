import React, { useState } from "react";
import { query, where, getDocs, collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export function useMember() {
  const [isLoading, setLoading] = useState(false);
  const [members, setMember] = useState([]);
  const [memberParam, setMemberParam] = useState([]);
  const [singleMember, setSingleMember] = useState(null)

  const getAllMembers = async () => {
    setLoading(true);

    const memberQuery = query(collection(db, "members"));

    const results = await getDocs(memberQuery);

    const docArr = [];
    results.forEach((doc) => {
      docArr.push(doc.data());
    });

    setMember(docArr);

    setLoading(false);
  };

  const getMemberByParam = async (optionParam, inputValue) => {
    setLoading(true);

    const memberQuery = query(
      collection(db, "members"),
      where(optionParam, "==", inputValue)
    );

    const results = await getDocs(memberQuery);

    const MemArr = [];
    results.forEach((doc) => {
      MemArr.push(doc.data());
    });

    setMemberParam(MemArr);

    setLoading(false);
  };

  const getSingleMember = async (carnet) => {
    setLoading(true);
    const memberRef = doc(db, "members", carnet);
    const result = await getDoc(memberRef);
    setSingleMember(result.data());
    
    setLoading(false);
  };

  return { getAllMembers, isLoading, members, memberParam, getMemberByParam, getSingleMember, singleMember };
}
