const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const result = await Task.find();
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: `Oop!, ${err}` });
    }

}

exports.createTask = async (req, res) => {
    const { title, description, completed } = req.body;

    if (title !== '' && description !== '') {

        try {
            const newTask = new Task({ title, description, completed });
            const result = await newTask.save();
            res.status(201).json(result);
        } catch (err) {
            res.status(404).json({ message: `Oop!, ${err}` });
        }

    } else {
        res.status(400).json({
            message: 'please complete request body'
        });
    }
}

exports.getTask = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Task.findById(id);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({ message: `Oop!, ${err}` });
    }

}

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (title !== '' && description !== '') {

        try {
            await Task.findByIdAndUpdate(id, { title, description, completed });
            res.json({ message: `task ${id} update` });
        } catch (err) {
            res.status(404).json({ message: `Oop!, ${err}` });
        }

    } else {
        res.status(400).json({
            message: 'please complete request body'
        });
    }

}

exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Task.findByIdAndDelete(id);
        res.status(200).json({
            message: `task ${id} deleted`,
            result
        });
    } catch (err) {
        res.status(404).json({ message: `Oop!, ${err}` });
    }

}
