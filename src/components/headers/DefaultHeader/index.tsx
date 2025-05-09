import styles from './styles.module.scss';

export default function DefaultHeader() {
  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <div className={styles['header__container__icon']}>
          <img src="/logos/logo_white.svg" alt="Logotipo da freelando" />
        </div>

        <nav className={styles['header__container__navigation']}>
          <span>Login</span>
        </nav>
      </div>
    </header>
  );
}
