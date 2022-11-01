
let students = [
    {
       name: "Name",
       grade: "7"
   }
];

module.exports = {
    overview: (req, res) => {
        res.render('students/studentlist', {
            title: "Studentlist",
            students
        });
    },
    create: (req, res) => {
        const student = {
            name : req.body.name,
            grade: req.body.grade
        }

        students.push(student);
        res.redirect('/', {
            title: "Studentlist",
            students})
    },
    create_get: (req, res) => {
        res.render('students/studentForm', {title: "Add student"})
    }
}
