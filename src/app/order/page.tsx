'use client'

import {MainTop} from "@/components/main/main-top";
import {OrderList} from "@/components/order/order-list";
import { useState } from "react";
import {MenuList} from "@/components/menu/menu-list";
import {NumberPad} from "@/components/keypad/number-pad";
import {OrderDashboard} from "@/components/order/order-dashboard";
import {OrderBtn} from "@/components/button/order-btn";

export default function OrderPage(props: any) {
  console.log(props);

  const [isOrderMenuList, setOrderMenuList] = useState([
    {menuName: '칼국수', salePrice: 8000, orderCount: 1, orderPrice: 8000}
  ]);
  const [isMenuCategoryList, setMenuCategoryList] = useState([
    {categoryPkey: 1, categoryName: '밥'},
    {categoryPkey: 1, categoryName: '면'},
    {categoryPkey: 1, categoryName: '고기'},
    {categoryPkey: 1, categoryName: '술/음료'},
    {categoryPkey: 1, categoryName: '기타'},
  ])
  const [isTotalPrice, setTotalPrice] = useState(100000);
  const [isMenuList, setIsMenuList] = useState([
    {menuPkey: 1, menuName: '칼국수', salePrice: 8000},
    {menuPkey: 1, menuName: '수제비', salePrice: 8000},
    {menuPkey: 1, menuName: '콩국수', salePrice: 8000},
    {menuPkey: 1, menuName: '김치찌개', salePrice: 8000},
    {menuPkey: 1, menuName: '된장찌개', salePrice: 8000},
    {menuPkey: 1, menuName: '순두부찌개', salePrice: 8000},
  ]);

  return (
    <>
      <MainTop/>
      <div className={'ms-2 mt-2 d-flex'}>
        <div className={'col-5'}>
          <OrderList isOrderMenuList={isOrderMenuList}/>
          <div className={'d-flex mt-2'} style={{height: '40vh'}}>
            <OrderDashboard/>
            <NumberPad isTotalPrice={isTotalPrice}/>
          </div>
        </div>
        <div className={'col-7 ms-2'}>
          <MenuList isMenuCategoryList={isMenuCategoryList} isMenuList={isMenuList}/>
          <OrderBtn/>
        </div>
      </div>
    </>
  )
}
