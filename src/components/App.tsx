import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Layout, Header, Body } from '@/components/lib/layout';
import { Logo } from '@/components/lib/Logo';
import { Navigation } from '@/components/shared/Navigation';
import { Router } from '@/components/shared/Router';
import theme from '@/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HashRouter>
          <Header>
            <Logo />
            <Navigation />
          </Header>
          <Body>
            <Router />
          </Body>
        </HashRouter>
      </Layout>
    </ThemeProvider>
  );
};
