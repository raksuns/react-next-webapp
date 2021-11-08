import Head from 'next/head';
import Link from 'next/link';
import layoutStyles from '../styles/layout.module.scss';

export default function Home() {
    return (
        <div className={layoutStyles.container}>
            <Head>
                <title>Grip Test</title>
            </Head>
            <main className={layoutStyles.main}>
                <Link href="/video-list">Video List</Link>
            </main>

            <footer className={layoutStyles.footer}>
                Footer
            </footer>
        </div>
    );
}
