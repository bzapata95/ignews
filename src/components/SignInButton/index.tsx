import { memo } from "react";
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import  styles from "./styles.module.scss";

function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button type="button" className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
        {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}

export default memo(SignInButton)