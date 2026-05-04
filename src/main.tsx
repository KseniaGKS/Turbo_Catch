import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import bridge from '@vkontakte/vk-bridge';

// Инициализация ВК
bridge.send("VKWebAppInit");

createRoot(document.getElementById('root')!).render(
    <App />,
)
