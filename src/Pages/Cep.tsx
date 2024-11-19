import { useEffect, useState } from "react";
import '../GlobalStyles.css';

interface Employee {
    id: number;
    nome: string;
    cpf: string;
}

export default function Cep() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    
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
            <h1>Listar funcionários</h1>

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
                <p>Nenhum funcionário encontrado.</p>
            )}
        </div>
    );
}
