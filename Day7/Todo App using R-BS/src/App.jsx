import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  const [task, setTask] = useState(''); // For managing the input field
  const [tasks, setTasks] = useState([]); // To store the list of tasks

  // Handle the form input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Handle the Add task button click
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); // Clear input field after adding
    }
  };

  // Handle the task removal
  const handleRemoveTask = (taskToRemove) => {
    setTasks(tasks.filter((t) => t !== taskToRemove));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-4">
      <div className="pb-4">
        <h1 className="display-4 text-center">ToDo App</h1>
      </div>

      {/* Input and Add Task Button */}
      <div className="d-flex flex-row mb-4">
        <Form.Control
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={handleChange}
          className="mr-2"
        />
        <Button variant="primary" onClick={handleAddTask} disabled={!task.trim()}>Add Task</Button>
      </div>

      {/* Task List */}
      <div className="w-50">
        <h3 className="text-center mb-3">Current Tasks</h3>
        <ListGroup>
          {tasks.length === 0 ? (
            <ListGroup.Item className="text-center">No tasks available</ListGroup.Item>
          ) : (
            tasks.map((task, index) => (
              <ListGroup.Item
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                {task}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveTask(task)}
                  className="ml-3"
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
