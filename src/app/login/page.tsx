'use client'

import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";

export default function LoginPage(props: any) {

  const router = useRouter();

  const [isId, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const idOnChange = (e: any) => {
    setId(e.target.value);
  }

  const passwordOnChange = (e: any) => {
    setPassword(e.target.value);
  }

  const loginOnClick = () => {
    // 로그인 진행
    router.push('/main')
  }

  return (
    <main>
      <div className={'col-12 d-flex justify-content-center mt-5'}>
        <div className="row g-3 align-items-center col-5 ms-4">
          <div className="col-2">
            <label htmlFor="inputId" className="col-form-label">ID</label>
          </div>
          <div className="col-auto">
            <input type="text" id="inputId" className="form-control" aria-describedby="passwordHelpInline" onChange={(e) => idOnChange(e)}/>
          </div>
          <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Must be 8-20 characters long.
          </span>
          </div>
        </div>
      </div>
      <div className={'col-12 d-flex justify-content-center mt-5'}>
        <div className="row g-3 align-items-center col-5 ms-4">
          <div className="col-2">
            <label htmlFor="inputPassword" className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpInline" onChange={(e) => passwordOnChange(e)}/>
          </div>
          <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Must be 8-20 characters long.
          </span>
          </div>
        </div>
      </div>
      <div className={'col-12 d-flex justify-content-center mt-5'}>
        <button
          className={'btn btn-outline-info col-4 rounded-2 fs-3'}
          onClick={() => {
            loginOnClick()
          }}
        >
          로그인
        </button>
      </div>
    </main>
  )
}
