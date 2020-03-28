import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Welcome, APAD</span>

        <Link className="button" to="/incidents/new">Add new incident</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Incidents added</h1>

      <ul>
        <li>
          <strong>CASE:</strong>
          <p>Test case</p>

          <strong>DESCRIPTION:</strong>
          <p>Description test</p>

          <strong>VALUE:</strong>
          <p>£ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASE:</strong>
          <p>Test case</p>

          <strong>DESCRIPTION:</strong>
          <p>Description test</p>

          <strong>VALUE:</strong>
          <p>£ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASE:</strong>
          <p>Test case</p>

          <strong>DESCRIPTION:</strong>
          <p>Description test</p>

          <strong>VALUE:</strong>
          <p>£ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASE:</strong>
          <p>Test case</p>

          <strong>DESCRIPTION</strong>
          <p>Description test</p>

          <strong>VALUE:</strong>
          <p>£ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
