import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

      <div className={styles.center}>
        <div className='gap-2'>
          <button className='flex w-full h-10 px-4 border border-gray-500 text-slate-800 items-center justify-center rounded-full'>
            Login
          </button>

          <button className='flex w-full h-10 px-4 border border-gray-500 text-slate-200 bg-gray-800 items-center justify-center rounded-full mt-3'>
            Logout
          </button>
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
            Template <span>-&gt;</span>
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
