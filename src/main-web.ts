import './app.css'
import App from './App.svelte';

if (import.meta.env.VITE_ENVIRONMENT === "DATA") {
    console.log("Jank mode enabled.");
}

const app = new App({
    target: document.getElementById('app')
});

export default app;
