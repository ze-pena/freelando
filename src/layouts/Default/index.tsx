import DefaultHeader from '@components/headers/DefaultHeader';
import DefaultFooter from '@components/footers/DefaultFooter';

import styles from './styles.module.scss';

export default function Default({ children }: React.PropsWithChildren) {
  return (
    <div className={styles['default']}>
      <DefaultHeader />

      <main className={styles['default__main']}>
        <div className={styles['default__main__container']}>{children}</div>
      </main>

      <DefaultFooter />
    </div>
  );
}
