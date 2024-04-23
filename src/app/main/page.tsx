'use client'

import {MainTop} from "@/components/main/main-top";
import {Tables} from "@/components/main/tables";
import {MainNavigator} from "@/components/navigator/main-navigator";
import React from "react";

export default function MainPage() {

  return (
    <>
      <div>
        <MainTop/>
      </div>
      <div className={'d-flex'}>
        <Tables/>
        <MainNavigator/>
      </div>
    </>
  );
}
