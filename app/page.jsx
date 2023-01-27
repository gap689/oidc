'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState } from 'react';
import firebaseApp from '../firebase/credentials'

import { getAuth, signInWithPopUp, signOut, OAuthProvider, onAuthStateChanged, signInWithCredential} from "firebase/auth";


const auth = getAuth(firebaseApp);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser);
    } else {
      setUser(null);
    }
  })

  //open id connect
  const provider = new OAuthProvider('oidc.germanoidc');

  const credential = provider.credential({
    idToken: "mU1HLxvMgqsSGXrdkXAoR93zIhNMgVOutXjFZxKZ",});

   function submitHandler(e) {
    e.preventDefault();

    console.log("testing");
    //window.alert("testing");
    // Firebase Logic

    signInWithCredential(auth, credential)
    .then((result) => {
        //User is signed in.

        //IdP data available in result.additionalUserInfo.profile.
        const userInfo = result.additionalUserfInfo.profile

        //Get the OAuth access token and ID Token
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;

        console.log("data", credential, accessToken, idToken, userInfo)
    })
    .catch((error) => {
        //Handle error.
        window.alert(error)
    });
  }

  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
        <p>
          Test OIDC Firebase Auth&nbsp;
          {/* <code className={styles.code}>firebase.google.com/docs/auth/web/openid-connect?hl=en</code> */}
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className='flex w-full justify-center items-center mt-14 mb-10'>
        <div className='flex w-full flex-col gap-2 items-center'>
          <div className='flex w-full text-lg font-semibold justify-center'>Inicie Sesión</div>
          {/* form */}
          <form onSubmit={submitHandler}>
            <label htmlFor='email' className='mt-3 text-gray-600'>open ID</label>
              <input id="email" type="email" placeholder="email@monterrey.gob.mx" className='flex peer placeholder:text-sm h-11 py-2 outline-none invalid:border-pink-600 invalid:text-pink-600 w-full max-w-[400px] rounded-lg px-4'/>
            
            <p className='mt-1 invisible peer-invalid:visible text-pink-600 text-xs'>Porfavor ingrese un email válido</p>

            <label htmlFor="password" className=' text-gray-600'> password </label>
              <input id="password" type="password" placeholder="" className='flex peer text-sm sm:text-base h-11 py-2 outline-none invalid:border-pink-600 invalid:text-pink-600 w-full max-w-[400px] rounded-lg px-4'/>

              <input className='flex w-full mt-3 h-10 px-4 border border-gray-500 text-slate-700 items-center justify-center rounded-full max-w-[400px] disabled:opacity-60'
                type="submit"
                value="Login"
              />
          </form>
          
          {
            user ?
            <button className='flex w-full h-10 px-4 border border-gray-500 text-slate-200 bg-gray-800 items-center justify-center rounded-full mt-3 max-w-[400px]' disabled={false} onClick={() => signOut(auth)}>
            Logout
            </button>
            : 
            null
          }

          {/* <button className='flex w-full mt-3 h-10 px-4 border border-gray-500 text-slate-700 items-center justify-center rounded-full max-w-[400px] disabled:opacity-60' disabled={false}>
              Login
            </button> */}
          
          </div>
          
        </div>
        


      <div className={styles.grid}>
        <a
          href="https://firebase.google.com/docs/auth/web/openid-connect?authuser=0"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Firebase OIDC Authentication.
          </p>
        </a>

        <a
          href="https://github.com/gap689/oidc"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Github Template<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://oidc-steel.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Deployment site to visualize the work.
          </p>
        </a>
      </div>
    </main>
  )
}
