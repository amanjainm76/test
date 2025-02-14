const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  if (!URI) {
    console.error("MongoDB URI is not defined in environment variables.");
    process.exit(1); // Exit with failure code
  }

  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connection Successful to DB");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
