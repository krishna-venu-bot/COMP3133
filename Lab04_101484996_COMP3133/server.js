const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Import routes
const userRoutes = require("./routes/UserRoutes");
app.use("/", userRoutes);

// MongoDB Atlas Connection
mongoose.connect(
  "mongodb+srv://krishnavenu_db_user:zLMdLa4JY4CHQlQo@labex04.c6sbann.mongodb.net/?appName=LabEx04",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
