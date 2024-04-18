import '@testing-library/jest-dom';

import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
global.IS_REACT_ACT_ENVIRONMENT = true

// Override render method for React 18
global.render = (ui, { container, ...options } = {}) => {
  

  const rootContainer = container || document.createElement('div');
  let queries;
  const root = createRoot(rootContainer);

  act(() => {
    root.render(ui);
  });
  queries = require('@testing-library/react').getQueriesForElement(rootContainer);

  return { ...root, container: rootContainer, ...queries };
};
