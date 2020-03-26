import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />

        <form>
          <h1>Log in</h1>

          <input placeholder="Your ID" />
          <button className="button" type="submit">Enter</button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            I don't have my account
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
