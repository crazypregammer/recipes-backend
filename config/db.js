const mongoose = require('mongoose');

const connection = async (req, res) => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
        const dbName = dbConnection.connections[0].name;
        console.log(`Connected to MONGODB: ${dbName}`);
    } catch (error) {
        console.log(error);
    }
}

connection();