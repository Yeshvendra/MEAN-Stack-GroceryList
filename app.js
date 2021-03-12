let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyparser = require('body-parser');
let path = require('path');

let app = express();

// Initialize port number
const port = 3000;

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017');

// Event Listener for on connected
mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb on port number 27017');
});

// Event Listener for on error
mongoose.connection.on('error', (err) => {
    if(err)
    {
        console.log('Error: ' + err + ' in mongodb connection.');
    }
});

// Initialize middleware function
app.use(cors());
app.use(bodyparser.json());

// Initializing routes
const route = require('./routes/route');
app.use('/api', route);

// Hosting static files
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/healthCheck', (req, res) => {
    res.send('Healthy');
});

app.listen(port, () => {
    console.log('Server started at port: ' + port + '...');
});