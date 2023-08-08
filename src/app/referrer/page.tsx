'use client'

import { useEffect, useState } from "react";

export default function Referrer () {
    const [referrer, setReferrer] = useState('')

    useEffect(() => {
        setReferrer(document.referrer)
    }, [])

  return (
    <p>referrer{referrer}</p>
  );
};