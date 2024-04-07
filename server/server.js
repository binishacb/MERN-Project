const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express(); 
const mongoose = require('mongoose');

const Employee = require("./models/emp")

const Student = require("./models/registration")
const College = require("./models/reg")
const mongodbUrl ="mongodb://localhost:27017/demoDB"
mongoose.connect(mongodbUrl)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log("server running on port 5000");
});

//-------------

app.post('/api/addemp', async (req, res) => {
    try {
        const { firstname, lastname, age, email } = req.body;
        console.log(req.body)
        const employee = new Employee({
            firstname,
            lastname,
            age,
            email
        });
        await employee.save();
        res.status(201).json({ message: 'Employee created successfully',employee });
    } catch (err) {
        console.error("Error creating employee:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
      const users = await Employee.find(); // Retrieve all users from the collection
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// //-----------
// app.delete('/users/:id', async (req, res) => {
//     const userId = req.params.id;
//     console.log("userId",userId)
//     try {
//       // Use Mongoose to find and delete the user by ID
//       const deletedUser = await Employee.findByIdAndDelete(userId);

//       if (!deletedUser) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       res.json({ message: 'User deleted successfully', deletedUser });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });


app.post('/api/students', async (req, res) => {
  try {
      const { firstname, lastname, email } = req.body;
      console.log(req.body)
      const student = new Student({
          firstname,
          lastname,
          email
      });
      await student.save();
      res.status(201).json({ message: 'student created successfully',student });
  } catch (err) {
      console.error("Error creating student:", err);
      res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/api/college1', async (req, res) => {
    try {
        const {name,email,phone,dob } = req.body;
        console.log(req.body)
        const college = new College({
            name,
            email,
            phone,
            dob
        });
        await college.save();
        res.status(201).json({ message: 'College created successfully',college });
    } catch (err) {
        console.error("Error creating College:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
  });