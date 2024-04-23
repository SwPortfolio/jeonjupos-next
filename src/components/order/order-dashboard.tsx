export const OrderDashboard = (props: any) => {
  return (
    <main className={'col-6 border rounded-2'}>
      <div className={'d-flex'}>
        <p className={'col-8 ps-2'}>총 주문금액</p><p className={'col-4 text-end pe-2'}>0</p>
      </div>
      <div className={'d-flex'}>
        <p className={'col-8 ps-2'}>주문금액</p><p className={'col-4 text-end pe-2'}>0</p>
      </div>
      <div className={'d-flex'}>
        <p className={'col-8 ps-2'}>결제금액</p><p className={'col-4 text-end pe-2'}>0</p>
      </div>
      <div className={'d-flex'}>
        <p className={'col-8 ps-2'}>결제할금액</p><p className={'col-4 text-end pe-2'}>0</p>
      </div>
    </main>
  )
}
