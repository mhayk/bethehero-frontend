import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

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

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro to delete the incident, try again!');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

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
        <button
          onClick={handleLogout}
          type="button"
        >
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

              <button
                onClick={() => handleDeleteIncident(incident.id)}
                type="button"
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
