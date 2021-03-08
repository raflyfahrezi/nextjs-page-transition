import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import PageWrapper from '../components/pageWrapper'

const Home = () => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href='https://nextjs.org'>Next.js!</a>
                    </h1>

                    <ul>
                        <li>
                            <Link href='/products'>
                                <a>Products</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/aboutus'>
                                <a>About Us</a>
                            </Link>
                        </li>
                    </ul>
                </main>
            </div>
        </PageWrapper>
    )
}

export default Home
