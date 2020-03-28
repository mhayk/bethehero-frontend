import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncidente() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Add a new incident</h1>
          <p>
            Describe the incident in detail to find a hero to solve it.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to home
          </Link>
        </section>
        <form>
          <input placeholder="NGO Title" />
          <textarea placeholder="Description" />
          <input placeholder="Value in Pounds" />


          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
