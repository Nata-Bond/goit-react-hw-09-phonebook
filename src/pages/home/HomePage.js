import React from 'react'
import s from './homepage.module.css'
import contactImg from "./../../images/contacts.jpeg"

const Home = () => {
    return (
        <div className={s.container}>
        <h1 className={s.title}>START YOUR OWN PHONEBOOK</h1>
        <img src={contactImg} alt="wrap" width="720" height="520"/>
        </div>
    );
}

export default Home;