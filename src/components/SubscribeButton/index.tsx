import { memo } from 'react';

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}

export default memo(SubscribeButton);