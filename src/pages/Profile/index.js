import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      },
    }).then((response) => {
      setIncidents(response.data);
    });
  }, [ongId]);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>
          Welcome,
          {' '}
          {ongName}
        </span>

        <Link className="button" to="/incidents/new">Add new incident</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Incidents added</h1>

      <ul>
        {
          incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASE:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIPTION:</strong>
              <p>{incident.description}</p>

              <strong>VALUE:</strong>
              <p>
                {
                Intl.NumberFormat(
                  'en',
                  { style: 'currency', currency: 'GBP' },
                ).format(incident.value)
                }
              </p>

              <button type="button">
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
