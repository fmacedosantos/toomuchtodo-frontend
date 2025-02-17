import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Task } from '../types';
import { Container, Row, Col } from 'react-bootstrap';
import TodoItem from '../components/TodoItem';

const DashboardPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await api.get<Task[]>('/task');
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Minhas Tarefas</h2>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} sm={6} md={4} lg={3}>
            <TodoItem task={task} onUpdate={fetchTasks} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashboardPage;
