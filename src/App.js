import React from 'react';
import ListaTarefas from './components/ListaTarefas';

const App = () => {
    return (
        <div>
            <h1>Meu Gerenciador de Tarefas</h1>
            <ListaTarefas tarefas={[
              'Estudar React',
              'Fazer exercícios de programação',
              'Ler um livro sobre tecnologia',
              'Desenvolver um projeto prático',
              ]} />
        </div>
    );
};

export default App;
