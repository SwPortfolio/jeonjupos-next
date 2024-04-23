'use client'

import React from "react";

const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00'];
const controllerKeys = ['All', 'Enter', 'Delete'];

export const NumberPad = (props: any) => {

  const [isNumber, setNumber] = React.useState<string>('0');

  const numberOnClick = (e: any) => {
    if (parseInt(isNumber) < props.isTotalPrice) {
      if (isNumber === '0') {
        setNumber(e.target.value);
      } else {
        setNumber(isNumber + e.target.value);
      }
    } else {
      alert('총 결제할 금액 만큼만 설정가능합니다.');
    }
  }

  const controllerOnClick = (e: any) => {
    if(e.target.value === '+') {

    } else if (e.target.value === 'All') {
      setNumber(props.isTotalPrice.toString());
    } else if (e.target.value === 'Enter') {

    } else if (e.target.value === 'Delete') {
      setNumber('0');
    }
  }

  return (
    <main className={'col-6 ps-1'}>
      <div className={''} style={{height: '10%'}}>
        <p className={'text-end h-100 pe-2 border rounded-2'}>{parseInt(isNumber).toLocaleString()}</p>
      </div>
      <div className={'d-flex pt-1'} style={{height:'90%'}}>
        <div className={'col-9 d-flex flex-wrap'}>
          {
            numbers.map((number, index) => {
              return (
                <button
                  type={'button'}
                  className={'btn btn-outline-secondary col-4 text-center p-2 rounded-2'}
                  key={index}
                  value={number}
                  onClick={(e: any) => {numberOnClick(e)}}
                >{number}</button>
              )
            })
          }
        </div>
        <div className={'col-3 d-flex flex-wrap'}>
          {
            controllerKeys.map((controller, index) => {
              return (
                <button
                  type={'button'}
                  className={'btn btn-outline-secondary col-12 text-center p-2 rounded-2 m-0'}
                  key={index}
                  value={controller}
                  onClick={(e: any) => {controllerOnClick(e)}}
                >{controller}</button>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
