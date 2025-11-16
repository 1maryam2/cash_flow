import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

interface BreadcrumbsProps {
  pageTitle?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ pageTitle }) => {
  const location = useLocation();
  const { pathname } = location;
  if (pathname === '/' || pathname === '/mainPage') {
    return null;
  }
  if (pathname === '/accounts') {
    return (
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Главная
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Счета
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
  if (pathname.startsWith('/account/')) {
    return (
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Главная
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/accounts' }}>
          Счета
        </Breadcrumb.Item>
        {pageTitle && (
          <Breadcrumb.Item active>
            {pageTitle}
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    );
  }
  return null;
};