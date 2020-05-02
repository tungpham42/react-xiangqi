import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'enzyme';
import App from 'App';

test('renders without crashing', () => {
  // eslint-disable-next-line no-undef
  const store = mockStore({ loginForm: {}, games: [] });

  const wrapper = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});