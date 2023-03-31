import Link from 'next/link'
import React , {useEffect} from 'react'
import { useRouter } from "next/router";


const Error = () => {
  const router = useRouter();
  useEffect(()=>{
    setTimeout(()=>{router.push("/")}, 2000)

  }, []

  )
  return (
    <div className='container'>
        <h1>page not found</h1>
        <Link legacyBehavior href='/'>
        <a className='btn btn-dark' >Go Home</a>
        </Link>
        
    </div>
  )
}

export default Error