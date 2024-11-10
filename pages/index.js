import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import Github from '../components/Github';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Alexander Roylance welcomes <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Counter name={"Counter +1"} mult={1} size={2}/>
      <Counter name={"Counter +3"} mult={3} size={1}/>

      <hr
        style={{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <Github />

      <hr
        style={{
          width: "80%",
          marginTop: "1em",
        }}
      />

      <p>Check out my <Link href="/store" style={{ color: 'blue', textDecoration: 'underline' }}>Fake Store</Link>.</p>
    </div>


  );
}
