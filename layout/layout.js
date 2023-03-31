import React from 'react'
import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>First Next App</title>
                <link rel="icon" href="logo.png" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/
                dist/css/bootstrap.min.css" rel="stylesheet" 
                integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
                 crossorigin="anonymous"></link>
            </Head>
            <NavBar />
            <main>
            {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout