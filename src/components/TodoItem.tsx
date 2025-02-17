import React from 'react';
import { Task } from '../types';
import { Card, Button } from 'react-bootstrap';
import api from '../services/api';

interface TodoItemProps {
  task: Task;
  onUpdate: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onUpdate }) => {
  const handleComplete = async () => {
    try {
      await api.put(`/task/${task.id}/complete`, { isCompleted: !task.is_completed });
      onUpdate();
    } catch (error) {
      console.error('Erro ao marcar como concluída:', error);
    }
  };

  const handleImportant = async () => {
    try {
      await api.put(`/task/${task.id}/important`, { isImportant: !task.is_important });
      onUpdate();
    } catch (error) {
      console.error('Erro ao marcar como importante:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/task/${task.id}`);
      onUpdate();
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        {task.description && <Card.Text>{task.description}</Card.Text>}
        <Button 
          variant={task.is_completed ? 'success' : 'outline-success'} 
          onClick={handleComplete} 
          className="me-2"
        >
          {task.is_completed ? 'Concluída' : 'Concluir'}
        </Button>
        <Button 
          variant={task.is_important ? 'warning' : 'outline-warning'} 
          onClick={handleImportant} 
          className="me-2"
        >
          {task.is_important ? 'Importante' : 'Marcar Importante'}
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Deletar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
