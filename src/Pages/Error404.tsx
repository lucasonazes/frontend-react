// src/components/Error404.js
import { Link } from 'react-router-dom';
import '../GlobalStyles.css';  // Importando o CSS

export default function Error404() {
    return (
        <div className="error-container">
            <h1>404 - Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}
