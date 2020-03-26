const db = require("../models")

module.exports = function (app) {
    app.post("/api/workouts", function ({body}, res)  {
        db.Workout.create({})
            .then(dbExercise => {
                console.log(dbExercise);
                res.json(dbExercise);
            })
            .catch(({notification}) => {
                console.log(notification);
            });
    })
    app.put("/api/workouts/:id", function(req, res) {
        const id= req.params.id;
        db.Workout.findOneAndUpdate({_id: id}, {
            type: req.body.type,
            name: req.body.name,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps,
            duration: req.body.totalDuration
        }).then(dbUpdate => {
            res.send(dbUpdate);
        })
    })
    app.get("/api/workouts/", function(req, res) {
        db.Workout.find({})
            .then(dbExercise => {
                res.json(dbExercise);
            })
    })

}