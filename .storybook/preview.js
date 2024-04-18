/** @type { import('@storybook/react').Preview } */
import './main.css'
import 'ol/ol.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { html } from 'lit-html';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');
const htmlElement = document.documentElement;
if(htmlElement) {
  htmlElement.setAttribute('class', 'sl-theme-dark');
}
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
