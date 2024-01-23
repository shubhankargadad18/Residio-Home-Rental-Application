const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('../models/User');
const user = require('../models/User');


//& Configuration of Multer for File Upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads') //^ Store uploaded files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname) //^ Use the original file name
    }
});

const upload = multer({ storage });



//* USER REGISTRATION
router.post('/register', upload.single('profileImage'), async (req, res) => {
    try {
        //& Take all the information from the FORM
        const { firstName, lastName, email, password } = req.body
        
        //! The uploaded file is available as req.file
        const profileImage = req.file
        if (!profileImage) return res.status(400).send("No file uploaded");

        //^ Path to the uploaded Profile Photo
        const profileImagePath = profileImage.path

        //& Check if the user already exists
        const oldUser = await User.findOne({ email });
        if (oldUser) return res.status(409).json("User with that email already exists");


        //& Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            Email: req.body.Email,
            password: hashedPassword,
            profileImage: req.file.path
        })

        //* Save the New User
        await newUser.save();

        //^ Send a successful message
        res.status(201).json({ message:"User Registered Successfully!", user: newUser});
    } catch (err) {
        console.log(err);
        res.status(500).json({message:"Registration Failed!", error:err.message});
    }
})