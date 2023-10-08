import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var tasks = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {tasks: tasks});
})

app.post("/add", (req, res) => {
    const task = req.body.task;
    const taskDate = req.body.date;
    const taskObj = {
        name: req.body.task,
        date: req.body.date
    }
    tasks.push(taskObj);
    console.log(tasks);
    res.redirect('/');
})

app.post("/delete/:index", (req,res) => {
    console.log("hhhh");
    console.log(tasks);
    const taskIndexDeleted = req.params.index;
    console.log(req.params);
    console.log(taskIndexDeleted);

    if (taskIndexDeleted >= 0 && taskIndexDeleted < tasks.length) {
        tasks.splice(taskIndexDeleted, 1)
    }
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})