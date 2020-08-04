const Workout = require('../models/workout')

module.exports = (app) => {

    app.get('/api/workouts', (req, res) => {
        Workout.find()
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            });    
    });

    app.post('/api/workouts', (req, res) => {
        
        Workout.create({'exercises' : req.body}, (error, data) => {
            if (error) {
            res.send(error);
        } else {
            res.send(data);
            }
        });
    });

};
