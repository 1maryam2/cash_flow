import { type FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setFilter } from '../../store/filterSlice';
import { CartButton } from '../../components/CartButton/CartButton';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import type { Account } from '../../types/types';
import { getAccounts, getCartItemsCount } from '../../utils/api';
import './AccountsListPage.css';

import { Container, Form, Button, InputGroup, Row, Col, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
const defaultImageSrc = `${import.meta.env.BASE_URL}default-image.jpg`;
export const AccountsListPage: FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAccounts(filters);
        setAccounts(data);
      } catch (error) {
        console.error('Error loading accounts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  useEffect(() => {
    loadCartCount();
  }, []);
  const loadCartCount = async () => {
    try {
      const count = await getCartItemsCount();
      setCartItemsCount(count);
    } catch (error) {
      console.error('Error loading cart count:', error);
    }
  };

  const handleAddToCart = async (accountId: number) => {
    console.log('Add to cart:', accountId);
    await loadCartCount();
  };

  return (
    <>
      <Container as="main" className="main-content">
        <Breadcrumbs />
        <h1 className="text-center">Добавьте счёт в ваш прогноз</h1>
        <div className="search-container">
          <Form className="w-100">
            <Row className="g-3">
              <Col xs={12}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Введите название операции"
                    value={filters.search}
                    onChange={(e) => dispatch(setFilter({ filterName: 'search', value: e.target.value }))}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </div>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Загрузка...</span>
            </Spinner>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {accounts.map((account) => (
              <Col key={account.id}>
              <div className="card h-100">
                <img
                  src={account.image || defaultImageSrc}
                  alt={account.title}
                  className="icon-wrapper"
                  onError={(e) => {
                    if (!e.currentTarget.src.endsWith(defaultImageSrc)) {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = defaultImageSrc;
                    }
                  }}
                />
                <div className="card-body">
                  <h3 className="card-title">{account.title}</h3>
                  <div className="card-buttons">
                    <LinkContainer to={`/account/${account.id}`}>
                      <Button variant="outline-light">
                        Подробнее
                      </Button>
                    </LinkContainer>
                    
                    {account.inCart ? (
                      <Button variant="dark" disabled>Добавлено</Button>
                    ) : (
                      <Button variant="secondary" onClick={() => handleAddToCart(account.id)}>
                        Добавить
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        )}
      </Container>
      <CartButton itemsCount={cartItemsCount} />
    </>
  );
};