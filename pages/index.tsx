import styles from '../styles/Home.module.css';
import { Button as UButton } from '@xo-union/tk-component-buttons';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Union Button</h2>
        <UButton block size="lg" color="primary" onClick={() => console.log('click')}>
          Union Button
        </UButton>
      </main>
    </div>
  );

}
