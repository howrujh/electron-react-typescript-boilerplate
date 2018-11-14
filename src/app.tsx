import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
  }
`

import Application from './components/Application';
import store from './store';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <React.Fragment>
            <AppContainer>
                <Provider store={store}>
                    <Component />
                </Provider>
            </AppContainer>
            <GlobalStyle/>

        </React.Fragment>
        ,
        mainElement
    );
};

render(Application);

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
    module.hot.accept('./components/Application', () => {
        import('./components/Application').then(World => {
            render(World.default);
        });
    });
}
