import React from 'react';
import '../app/styles/reset.css';
import '../app/styles/globals.css';
import RootLayout from '../app/layout';


/**
 * MyApp é o componente de aplicativo personalizado para Next.js. Ele encapsula todos os componentes da página com um componente de layout.
 * 
 * @param {Object} props - As propriedades passadas para o componente App.
 * @param {React.ComponentType} props. Componente - O componente de página ativa.
 * @param {Object} props.pageProps - Os props iniciais pré-carregados para a página ativa.
 * @returns {React.ReactElement} O elemento React que representa o aplicativo.
 */
function MyApp({Component, pageProps}) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
