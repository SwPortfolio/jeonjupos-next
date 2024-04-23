import {useRouter} from "next/navigation";

const orderBtnList = [
  {btnName: '주문', variant: 'btn-secondary', action: 'order'},
  {btnName: '결제', variant: 'btn-success', action: 'pay'},
  {btnName: '취소', variant: 'btn-danger', action: 'cancel'},
]

export const OrderBtn = () => {

  const router = useRouter();

  const btnOnClick = (e: any) => {
    if (e.target.value === 'order') {
      alert('주문');
    } else if (e.target.value === 'pay') {
      alert('결제');
    } else if (e.target.value === 'cancel') {
      router.push(`/`);
    }
  }

  return (
    <main>
      <div
        className={'mt-2'}
        style={{height:'13vh'}}
      >
        {
          orderBtnList.map((item, index) => {
            return (
              <button
                key={index}
                className={`btn ${item.variant} col-3 h-100 me-2 fs-3`}
                onClick={(e: any) => {btnOnClick(e)}}
                value={item.action}
              >
                {item.btnName}
              </button>
            )
          })
        }
      </div>
    </main>
  )
}
