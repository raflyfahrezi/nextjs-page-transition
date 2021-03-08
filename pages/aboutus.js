import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import PageWrapper from '../components/pageWrapper'

const AboutUs = () => {
    return (
        <PageWrapper>
            <div className={styles.container}>
                <Head>
                    <title>About Us</title>
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>About Us</h1>

                    <ul>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                    </ul>
                </main>
            </div>
        </PageWrapper>
    )
}

export default AboutUs
