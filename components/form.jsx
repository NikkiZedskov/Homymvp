import styles from '../styles/waitlist.module.css';
import { useReducer, useState } from 'react';
import Modal from './waitlistModal';
import axios from 'axios';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = e => {
        e.preventDefault();
        if(Object.keys(formData).length != 0) {
            setIsOpen(true);
        }

        // Add formType to formData
        formData.formType = 'waitlistForm';

        // send form data to backend
        axios.post('/api/waitlist', formData)
        .then((response) => {
        console.log(response.data);
        // handle success
        })
        .catch((error) => {
        console.log(error);
        // handle error
        });
    }

    return (
        <>  
            <Modal open={isOpen} onClose={() => { setIsOpen(false); }} />
            <form className={styles.form} action="" method='POST' onSubmit={handleSubmit}>
                <label htmlFor="name">Namn</label><br/>
                <input onChange={setFormData} name='name' type="text" placeholder='Ditt namn' required id='name'/><br/>
                <label htmlFor="city">Stad</label><br/>
                <input onChange={setFormData} name='city' type="text" placeholder='Stad' required id='email'/><br/>
                <label htmlFor="email">Email</label><br/>
                <input onChange={setFormData} name='email' type="email" placeholder='Din email' required id='email'/><br/>
                <button type='submit'>Gå Med</button>
            </form>
        </>
    )
}

export default Form;