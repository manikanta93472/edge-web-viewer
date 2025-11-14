import './styles.css';
import { createViewer } from './viewer';

const root = document.getElementById('app')!;
root.appendChild(createViewer());
