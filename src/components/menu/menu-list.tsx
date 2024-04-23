'use client'

export const MenuList = (props: any) => {

  const menuOnClick = (e: any) => {

  }

  return (
    <main className={'me-3'}>
      <div className={'d-flex btn-group'}>
        {
          props.isMenuCategoryList.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={'w-25 text-center align-items-center m-1'}
                style={{height: '50px'}}
              >
                <button
                  type={'button'}
                  className={'btn btn-warning text-black h-100 w-100 fs-4'}
                >{item.categoryName}</button>
              </div>
            )
          })
        }
      </div>
      <div className={'d-flex flex-wrap align-content-start mt-2 rounded-2'} style={{height: '65vh'}}>
        {
          props.isMenuList.map((item: any, index: number) => {
            return (
              <button
                key={index}
                className={'m-1 btn btn-outline-secondary text-center align-items-center'}
                style={{height: '22%', width: '24%'}}
                onClick={(e) => {}}
              >
                <p>{item.menuName}</p>
                <p>{item.salePrice.toLocaleString()}</p>
              </button>
            )
          })
        }
      </div>
    </main>
  )
}
