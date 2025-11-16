import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel } from 'react-bootstrap';
import './MainPage.css';

export const MainPage: FC = () => {
  return (
    <Container as="main" className="main-content text-center">
      <div className="hero-section">
        <h1>Добро пожаловать в CashFlow</h1>
        <p className="lead">
          Ваш персональный инструмент для анализа и прогнозирования денежных потоков.
          Добавляйте счета, отслеживайте доходы и расходы, стройте точные прогнозы для вашего бизнеса.
        </p>
        <hr />
        <Carousel>
          <Carousel.Item>
            <Link to="/accounts" className="carousel-link">
              <img
                className="d-block w-100"
                src="first_carousel.png"
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Анализируйте доходы</h3>
              <p>Отслеживайте все поступления в реальном времени</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/accounts" className="carousel-link">
              <img
                className="d-block w-100"
                src="second_carousel.png"
                alt="Second slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Контролируйте расходы</h3>
              <p>Следите за всеми тратами и оптимизируйте бюджет</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/accounts" className="carousel-link">
              <img
                className="d-block w-100"
                src="third_carousel.png"
                alt="Third slide"
              />
            </Link>
            <Carousel.Caption>
              <h3>Стройте прогнозы</h3>
              <p>Прогнозируйте будущее финансовое состояние вашего бизнеса</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};