const Training = require('../models/trainingModel');

exports.index = async (req, res) => {
    const trainings = await Training.find();
    res.render('index', { trainings });
};

exports.addForm = (req, res) => {
    res.render('add');
};

exports.addTraining = async (req, res) => {
    const training = new Training({
        ...req.body,
        date: new Date(req.body.date)
    });
    await training.save();
    res.redirect('/');
};

exports.editForm = async (req, res) => {
    const training = await Training.findById(req.params.id);
    res.render('edit', { training });
};

exports.updateTraining = async (req, res) => {
    await Training.findByIdAndUpdate(req.params.id, {
        ...req.body,
        date: new Date(req.body.date)
    });
    res.redirect('/');
};

exports.deleteTraining = async (req, res) => {
    await Training.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

exports.showStats = async (req, res) => {
    const { startDate, endDate } = req.query;

    let filter = {};
    if (startDate && endDate) {
        filter.date = {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
        };
    }

    const trainings = await Training.find(filter);
    const stats = {
        count: trainings.length,
        duration: trainings.reduce((sum, t) => sum + t.duration, 0)
    };

    res.render('stats', { stats, startDate, endDate });
};
