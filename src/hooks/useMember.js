import React, { useState } from "react";
import { query, where, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export function useMember() {
  const [isLoading, setLoading] = useState(false);
  const [members, setMember] = useState([]);
  const [memberParam, setMemberParam] = useState([]);

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

  return { getAllMembers, isLoading, members, memberParam, getMemberByParam };
}
