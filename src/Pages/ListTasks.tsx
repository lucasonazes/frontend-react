import { useEffect, useState } from "react";
import '../GlobalStyles.css';

interface Task {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    dueDate: string;
    finished: boolean;
}

export default function ListTasks() {
    const [employees, setEmployees] = useState<Task[]>([]);
    
    function searchEmployees() {
        fetch("http://localhost:5141/api/funcionario/listar")
            .then(response => response.json())
            .then((employees) => {
                setEmployees(employees);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    return (
        <div className="container">
            <h1>Listar Tarefas</h1>

            <button onClick={searchEmployees}>Listar</button>

            {employees.length > 0 ? (
                <ul>
                    {employees.map(employee => (
                        <li key={employee.id}>
                            <p>Id: {employee.id}</p>
                            <p>Nome: {employee.nome}</p>
                            <p>Cpf: {employee.cpf}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma tarefa encontrada.</p>
            )}
        </div>
    );
}
