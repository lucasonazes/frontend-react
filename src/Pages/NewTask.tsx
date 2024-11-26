import React, { useState } from 'react';

const NewTask: React.FC = () => {
    const [titulo, setTitulo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');

    function handleSubmit (e: any) {
        e.preventDefault();

        const novaTarefa = {
            titulo,
            descricao,
        };

        fetch('http://localhost:5000/api/tarefas/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaTarefa)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            setTitulo('');
            setDescricao('');
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    };

    return (
        <div>
            <h2>Cadastrar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Titulo:
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                </label>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default NewTask;