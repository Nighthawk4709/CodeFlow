const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://aniket1835:password@cluster0.pms4e.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define a simple Mongoose model and schema
const Todo = mongoose.model('Todo', {
    text: String,
    completed: Boolean
  });
  
  // Middleware to parse JSON request bodies
  app.use(express.json());
  
  // Define API routes
  
  // Create a new todo
  app.post('/api/todos', async (req, res) => {
    try {
      const { text, completed } = req.body;
      const todo = new Todo({ text, completed });
      await todo.save();
      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create todo' });
    }
  });
  
  // Get all todos
  app.get('/api/todos', async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve todos' });
    }
  });
  
  // Update a todo by ID
  app.put('/api/todos/:id', async (req, res) => {
    try {
      const { text, completed } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { text, completed }, { new: true });
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update todo' });
    }
  });
  
  // Delete a todo by ID
  app.delete('/api/todos/:id', async (req, res) => {
    try {
      await Todo.findByIdAndRemove(req.params.id);
      res.json({ message: 'Todo deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  });
  
  // Start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });