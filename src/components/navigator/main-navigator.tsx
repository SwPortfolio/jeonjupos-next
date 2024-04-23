'use client'

import {useRouter} from "next/navigation";

const navigatorList = [
  {nvName: '매출내역', path: '/'},
  {nvName: '주문내역', path: '/'},
  {nvName: '메뉴관리', path: '/'}
]

export const MainNavigator = (props: any) => {

  const router = useRouter();

  return (
    <main className={'col-2'}>
      <div className={'mt-5'}>
        {
          navigatorList.map((item: any, index: number) => {
            return (
              <button
                key={index}
                className={'btn btn-outline-info col-11 m-1 rounded-2 fs-3'}
                onClick={() => {router.push(item.path);}}
              >
                {item.nvName}
              </button>
            )
          })
        }
      </div>
    </main>
  )
}
