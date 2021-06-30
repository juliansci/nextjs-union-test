import styles from '../styles/Home.module.css';
import { Button as UButton } from '@xo-union/tk-component-buttons';
import Link from 'next/link';

export default function Home({ propsData }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Union Button</h2>
        <Link href='/category/subcategory/dashboard' passHref>
          <a>
            <UButton block size="lg" color="primary" onClick={() => console.log('click')}>
              Go to Dashboard
            </UButton>
          </a>
        </Link>
      </main>
    </div>
  );
}
export const getServerSideProps = async () => {
  return {
    props: {
      data: 'propsData',
    },
  }
}