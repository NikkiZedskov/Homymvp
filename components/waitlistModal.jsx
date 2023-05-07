import styles from '../styles/waitlistModal.module.css';
import { useRef, useEffect } from 'react';
import { FiCopy } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/Io';

const Modal = ({open, onClose}) => {
  
  if(!open) return null;

  const modalRef = useRef(null);

  const onClickBackground = e => {
    if (modalRef.current && e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  const text = "https://homy.digital/";

    return (
        <>
          <div className={styles.modalBackground} onClick={onClickBackground}>
            <div className={styles.modal} ref={modalRef}>
                <button className={styles.close_modal} onClick={onClose}><IoIosClose /></button>
                <h2>Tack!</h2>
                <p className={styles.first_p}>Vi har lagt till dig i väntelistan</p>
                <p className={styles.share_p}>Dela med dina vänner för att få erbjudanden</p>
                <div className={styles.share}>
                  <div className={styles.text}>{text}</div>
                  <button onClick={() => {
                    navigator.clipboard.writeText(text);}}>
                    <FiCopy />
                  </button>
                </div>
            </div>
          </div>
        </>
    );
}
 
export default Modal;