import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useReducer, useEffect } from 'react';
import style from '../styles/home.module.css';
import Modal from '../components/waitlistModal';
import axios from 'axios';

const formReducer = (state: Record<string, any>, event: React.ChangeEvent<HTMLInputElement>) => {
  return {
      ...state,
      [event.target.name]: event.target.value
  }
}

const Home: NextPage = () => {
  useEffect(() => {
    const rotate = () => {
      let show = document.querySelector('.mask span[data-show]');
      let next = show?.nextElementSibling || document.querySelector('.mask span:first-child');
      let up = document.querySelector('.mask span[data-up]');

      if (up) {
        up.removeAttribute('data-up');
      }

      show?.removeAttribute('data-show');
      show?.setAttribute('data-up', '');

      next?.setAttribute('data-show', '');
    }

    const intervalId = setInterval(rotate, 2850);

    // Cleanup function to clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Check if the email field is filled
    if (formData.email) {
      setIsOpen(true);
      formData.formType = 'emailForm'; // Add the form type
      delete formData.name; // Remove unnecessary fields
      delete formData.city; // Remove unnecessary fields
    } else {
      // Handle form validation errors
      return;
    }
  
    // Send form data to the backend
    axios
      .post('/api/waitlist', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  };

  return (
    <>
      <Head>
        <title>Homy | Marknadsplats för att köpa och sälja ditt hem</title>
      </Head>

      <Modal open={isOpen} onClose={() => { setIsOpen(false); }} />

      <main className='relative'>
        <div className={`container ${style.hero} `}>
          <div className='hero-container'>
            <h1>Glöm allt du vet om</h1>
            <div className='mask'>
              <span data-show>att köpa en bostad</span>
              <span>att sälja en bostad</span>
              <span>att hyra en bostad</span>
            </div>
          </div>
          <p className={style['hero-text']}>Glöm pappersarbetet - gå med i väntelistan för att få veta mer</p>
          <div>
            <form className={style.form} action="" method='POST' onSubmit={handleSubmit}>
              <input onChange={setFormData} placeholder='Email' name='email' type="email" required/>
              <button type='submit'>Gå Med</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;