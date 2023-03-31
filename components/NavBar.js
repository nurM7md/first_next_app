import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";


const NavBar = () => {
    const router = useRouter();
    console.log(router);
    return (
        <header>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">


                    <Image src="/logo.png" alt="logo" width="40" height="40" />
                    <a className="navbar-brand d-flex align-items-center" href='/' >
                        <span className='ms-3'>ButterFlies</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link legacyBehavior href="/">
                                    <a className={"nav-link " + `${router.pathname === "/" ? "active" : ''}`} aria-current="page" >Home</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link legacyBehavior href="/about">
                                    <a className={"nav-link " + `${router.pathname === "/about" ? "active" : ''}`} >About</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link legacyBehavior href="/blog">
                                    <a className={"nav-link " + `${router.pathname === "/blog" ? "active" : ''}`} href="/blog">Blog</a>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default NavBar