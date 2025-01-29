import React from 'react';
import PropTypes from 'prop-types';

const ListaTarefas = (props) => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            {props.tarefas.length > 0 ? (
                <ul>
                    {props.tarefas.map((tarefa, index) => (
                        <li key={index}>{tarefa}</li>
                    ))}
                </ul>
            ) : (
                <p>Nenhuma tarefa adicionada</p>
            )}
        </div>
    );
};

ListaTarefas.propTypes = {
    tarefas: PropTypes.arrayOf(PropTypes.string),
};

ListaTarefas.defaultProps = {
    tarefas: [],
};

export default ListaTarefas;
