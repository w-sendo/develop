'use client'

import { useEffect, useState } from "react";

export default function Referrer () {
    const [referrer, setReferrer] = useState('')
    const [browser, setBrowser] = useState('')

    useEffect(() => {
        setReferrer(document.referrer)
        setBrowser(window.navigator.userAgent)
    }, [])

  return (<>
    <p>referrer:{referrer}</p>
    <p>browser:{browser}</p>
  </>
  );
};