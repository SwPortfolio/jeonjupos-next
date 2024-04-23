'use client'

import React, { useState, useEffect } from "react";
import {useRouter} from "next/navigation";

export const MainTop = () => {

  const router = useRouter();

  const [now, setNow] = useState('');
  const [tableNo, setTableNo] = useState(2);

  setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    setNow(`${year}-${month<10 ? 0 + '' + month : month}-${day<10 ? 0 + '' + day : day} ${hours<10 ? 0 + '' + hours : hours}:${minutes<10 ? 0 + '' + minutes : minutes}`);
  }, 1000);

  const homeOnClick = () => {
    router.push(`/main`);
  }

  return (
    <main className={'d-flex items-center justify-between p-10 bg-warning align-items-center rounded-4 rounded-top-0'} style={{height: '80px'}} >
      <div className={'flex-col items-start justify-content-center col-6'}>
        <span
          className={'fs-2 mb-0 ps-5 text-white h-100'}
          onClick={(e: any) => {homeOnClick()}}
        >전주POS</span>
      </div>
      <div className={'flex-col justify-center col-6 text-end pe-3'}>
        <p className={'fs-7 mb-0  text-white'}>{now}</p>
        <p className={'fs-7 mb-0'}>테이블 : {tableNo}</p>
      </div>
    </main>
  )
}
