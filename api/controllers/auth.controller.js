import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'


// Sign up controller
export const signup = async(req, res, next) => {
  const {username, email, password} = req.body;

  if(!username || !email || !password || username === '' || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'))
  }
  // Hashing the password using bcryptjs
  
const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({username, email, password:hashedPassword})


  try {
    await newUser.save()
  res.json( "Sign up successful")
  } catch (error) {
    next(error);
  }
  
}

// Sign in Controller
export const signin = async(req, res, next) => {
  const {email, password} = req.body;

  if(!email || !password || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required'));
}
try {
  // 1 Check email
  const validUser = await User.findOne({email})
  if(!validUser) { return next(errorHandler(404, 'Your email or password are not valid')); }

    // Check password
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if(!validPassword) { return next(errorHandler(400, 'Your email or password are not valid'))};

    // 3.Create token with jsonwebtoken
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)

    // Remove the password from the cookie
    const {password: pass, ...rest} = validUser._doc;

    // 4.Create a cookie
    res.status(200).cookie('access_token', token, {
      httpOnly: true}).json(rest)

} catch (error) {
  next(error)
}
}