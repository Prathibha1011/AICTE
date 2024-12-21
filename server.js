const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
mongoose.connect('mongodb+srv://v01d:puiQNMy3fUkvJra7@test-db.dxurd.mongodb.net/?retryWrites=true&w=majority&appName=test-db',
{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
const userSchema = new mongoose.Schema({
name: {type: String, required: true },
email: {type: String, required: true, unique: true },
password: { type: String, required: true },
upi_id: { type: String, unique: true},
balance: {type: Number}
});
const User = mongoose.model('User', userSchema);
const transactionSchema = new mongoose.Schema({
sender_upi_id: { type: String, required: true },
receiver_upi_id: { type: String, required: true },
amount: { type: Number, required: true },
timestamp: { type: Date, default: Date.now }
});
const Transaction = mongoose.model('Transaction', transactionSchema);
const generateUIP = () => {
const randomId = crypto.randomBytes(4).toString('hex'); // Generates a ran
return '${randomId}@fastpay';
};
app.post('/api/signup', async (req, res) => {
try {
const { name, email, password } = req.body;
let user = await User.findOne({ email });
if (user) {
return res.status(400).send({ message: 'User already exists' });
const upi_id = generateUIP();
const balance= 1000;
user = new User({ name, email, password, upi_id, balance });
await user.save();
res.status(201).send({ message: 'User registered successfully!", upi_id });
}} catch (error) {
console.error(error);
res.status(500).send({ message: 'Server error' });
}
}
});
app.get('/api/user/:upi_id', async (req, res) => {
try {
const { upi_id} = req.params;
const user await User.findOne({upi_id });
if (!user) {
return res.status(404).send({ message: 'User not found' });
}
res.status(200).send(user);
} catch (error) {
console.error('Error fetching user:', error);
}
});
