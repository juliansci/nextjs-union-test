import styles from '../../styles/Dashboard.module.css';
import dynamic from 'next/dynamic'

const Component1 = dynamic(() => import('../../components/Component1'));
const Component2 = dynamic(() => import('../../components/Component2'));

export default function Dashboard({ data }) {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Dashboard</h2>
        <Component1 />
        <Component2 />
        Server Side Props: {data}
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

