'use client'

export const OrderList = (props: any) => {
  return (
    <main className={'border rounded-2'}>
      <div className={''}>
        <div className={'d-flex align-items-center bg-dark-subtle rounded-top-2'}>
          <span className={'col-6 text-center'}>매뉴명</span>
          <span className={'col-1 text-center'}>단가</span>
          <span className={'col-1 text-center'}>수량</span>
          <span className={'col-4 text-center'}>가격</span>
        </div>
        <div style={{height: '40vh'}}>
          {
            props.isOrderMenuList.map((item: any, index: number) => {
              return (
                <div key={index} className={'d-flex align-items-center border border-top-0 border-start-0 border-end-0'}>
                  <span className={'col-6 text-start ps-3'} style={{height: '20px'}}>{item.menuName}</span>
                  <span className={'col-1 text-center'}>{item.salePrice.toLocaleString()}</span>
                  <span className={'col-1 text-center'}>{item.orderCount.toLocaleString()}</span>
                  <span className={'col-4 text-center'}>{item.orderPrice.toLocaleString()}</span>
                </div>
              )
            })
          }
        </div>
        <div className={'d-flex align-items-center bg-dark-subtle rounded-bottom-2'}>
          <span className={'col-2 text-center'}>총수량 : </span>
          <span className={'col-4 text-center'}>0</span>
          <span className={'col-2 text-center'}>총가격 : </span>
          <span className={'col-4 text-center'}>0</span>
        </div>
      </div>
    </main>
  )
}
