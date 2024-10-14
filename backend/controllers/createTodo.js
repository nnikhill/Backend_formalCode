// controllers/todoController.js
const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        // Using .create() to add a new Todo
        const response = await Todo.create({ title, description });
        res.status(200).json({
            message: "Todo created successfully",
            success: true,
            data: response
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error creating todo",
            success: false,
            data: null
        });
    }
};
