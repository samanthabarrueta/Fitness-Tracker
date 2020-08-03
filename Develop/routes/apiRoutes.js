const Workout = require('../models/workout')

module.exports = (app) => {

    app.get('/api/workouts', (req, res)=> {
        Workout.find()
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            });    
    });

}
