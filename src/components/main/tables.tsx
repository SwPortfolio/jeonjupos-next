'use client'

import {useState} from "react";
import Router, { useRouter } from "next/navigation";

export const Tables = (props: any) => {

  const router = useRouter();

  const [tableList, setTableList] = useState([
    {tablePkey: 1, tableno: 1, totalPrice: 10000, orderMenuList: [{menuName: '김치찌개', count: 2, orderPrice: 10000}, {menuName: '칼국수', count: 1, orderPrice: 5000}]},
    {tablePkey: 2, tableno: 2, totalPrice: 0, orderMenuList: []},
    {tablePkey: 3, tableno: 3, totalPrice: 10000, orderMenuList: [{menuName: '김치찌개', count: 2, orderPrice: 10000}, {menuName: '칼국수', count: 1, orderPrice: 5000}, {menuName: '칼국수', count: 1, orderPrice: 5000}, {menuName: '칼국수', count: 1, orderPrice: 5000}, {menuName: '칼국수', count: 1, orderPrice: 5000}, {menuName: '칼국수', count: 1, orderPrice: 5000}, {menuName: '칼국수', count: 1, orderPrice: 5000}, {menuName: '칼국수', count: 1, orderPrice: 5000}]},
    {tablePkey: 4, tableno: 4, totalPrice: 10000, orderMenuList: []},
    {tablePkey: 5, tableno: 5, totalPrice: 0, orderMenuList: []},
    {tablePkey: 6, tableno: 6, totalPrice: 0, orderMenuList: []},
    {tablePkey: 7, tableno: 7, totalPrice: 0, orderMenuList: []},
    {tablePkey: 8, tableno: 8, totalPrice: 0, orderMenuList: []},
    {tablePkey: 9, tableno: 9, totalPrice: 0, orderMenuList: []},
    {tablePkey: 10, tableno: 10, totalPrice: 0, orderMenuList: []},
    {tablePkey: 11, tableno: 11, totalPrice: 0, orderMenuList: []},
    {tablePkey: 12, tableno: 12, totalPrice: 0, orderMenuList: []},
    {tablePkey: 12, tableno: 12, totalPrice: 0, orderMenuList: []},
    {tablePkey: 12, tableno: 12, totalPrice: 0, orderMenuList: []},
    {tablePkey: 12, tableno: 12, totalPrice: 0, orderMenuList: []},
  ])

  const tableOnClick = (tablePkey: number) => {
    router.push(`/order?tablePkey=${tablePkey}`);
  }

  return (
    <main className={'col-10 d-flex flex-wrap mt-5 ms-1'} style={{height: '82vh'}} >
      {tableList.map((table, index) => {
        return (
          <div
            key={index}
            className={'m-1 border border-warning rounded-4'}
            style={{ backgroundClip: 'content-box', width: '24%', height: '24%' }}
            onClick={(e: any) => {
              tableOnClick(table.tablePkey)
              // router.push({ pathname: `/order`, query: { tablePkey: table.tablePkey} });
            }}
          >
            <p
              className={'text-end fw-bold mb-0 pe-2 border-top-0 border-start-0 border-end-0 border-white'}
              style={{height:'15%'}}
            >no.{table.tableno}</p>
            <div className={''} style={{height: '70%', overflowY: 'auto'}}>
              {
                table.orderMenuList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={'d-flex'}
                      style={{height: '20%'}}
                    >
                      <p className={'col-6 text-start ps-2 h-100'} style={{fontSize: '13px'}}>{item.menuName}</p>
                      <p className={'col-3 text-end pe-2 h-100'} style={{fontSize: '13px'}}>{item.count.toLocaleString()}</p>
                      <p className={'col-3 text-end pe-2 h-100'} style={{fontSize: '13px'}}>{item.orderPrice.toLocaleString()}</p>
                    </div>
                  )
                })
              }
            </div>
            <p className={'text-end pe-2'} style={{height: '15%'}}>총가격 : {table.totalPrice.toLocaleString()}</p>
          </div>
        )
      })}
    </main>
  )
}
