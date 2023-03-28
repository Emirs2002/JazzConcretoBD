import React, { useState } from "react";
import { query, where, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export function useMember() {
  const [isLoading, setLoading] = useState(false);
  const [members, setMember] = useState([]);

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

  return {getAllMembers, isLoading, members};
}
