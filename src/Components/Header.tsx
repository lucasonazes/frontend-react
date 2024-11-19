import { Link } from 'react-router-dom';
import '../GlobalStyles.css';

export default function Header() {
    return (
        <nav className="header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages/tasks/list">Listar tarefas</Link></li>
                <li><Link to="/pages/tasks/new">Cadastrar tarefa</Link></li>
                <li><Link to="/pages/tasks/search">Consultar tarefas</Link></li>
            </ul>
        </nav>
    );
}
