import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';


function ToastShelf() {
    const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant}  id={toast.id}>
            {toast.message}
        </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
