import './app.css'
import App from './App.svelte'
import App2 from './App2.svelte';

const app = new App2({
  target: document.getElementById('app'),
});

export default app
