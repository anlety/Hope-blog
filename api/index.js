import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import commentRoutes from './routes/comment.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
dotenv.config();

mongoose.connect(process.env.MONGODB_API).then(()=> {console.log('MongoDB is connected')}).catch(err => {console.log(err)});

const app = express();

// To allow json
app.use(express.json())
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment', commentRoutes)

// Middleware for errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})