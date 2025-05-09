import styles from './styles.module.scss';

export default function DefaultFooter() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__container__message']}>
          <img src="/logos/logo_white.svg" alt="Logotipo da freelando" />
          <span>Desenvolvido por Alura. Projeto fictícios sem fins comerciais.</span>
        </div>

        <div className={styles['footer__container__social']}>
          <span>Acesse nossas redes sociais</span>

          <ul>
            <li>
              <img src="icons/social/icon_whatsapp.svg" alt="Logotipo do Whatsapp" />
            </li>
            <li>
              <img src="icons/social/icon_twitch.svg" alt="Logotipo da Twitch" />
            </li>
            <li>
              <img src="icons/social/icon_instagram.svg" alt="Logotipo do Instagram" />
            </li>
            <li>
              <img src="icons/social/icon_twitter.svg" alt="Logotipo do Twitter" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
