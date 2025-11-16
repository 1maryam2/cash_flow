import { type FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'; 
import type { Account } from '../../types/types';
import { getAccountById } from '../../utils/api';
import './AccountPage.css';

import { Container } from 'react-bootstrap'; 

export const AccountPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadAccount(parseInt(id));
    }
  }, [id]);

  const loadAccount = async (accountId: number) => {
    setLoading(true);
    try {
      const data = await getAccountById(accountId);
      setAccount(data);
    } catch (error) {
      console.error('Error loading account:', error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <Container className="text-center p-5">Загрузка...</Container>
    );
  }

  if (!account) {
    return (
      <Container className="text-center p-5">Счет не найден</Container>
    );
  }
  return (
    <Container as="main" className="main-content">
      <Breadcrumbs pageTitle={account?.title} />
      
      <div className="details-card">
        <Link to="/accounts" className="back-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#FFFFFF">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </Link>
        
        <div className="card-title-group">
          <img 
            src={account.image || 'default-image.jpg'} 
            alt={account.title} 
            className="details-icon"
            onError={(e) => {
              if (!e.currentTarget.src.endsWith('default-image.jpg')) {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'default-image.jpg'; 
              }
            }}
          />
          <h1>{account.title}</h1>
        </div>
        <p>{account.description}</p>
      </div>
    </Container>
  );
};