import React, { useState, useEffect } from "react";
import axios from "axios";
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";
export default function Transaction() {
const [amount, setAmount] useState("");
const [user, setUser) useState(null);
const [transactions, setTransactions] useState(());
const [receiverUpi, setReceiverUpi] = useState("");
const [message, setMessage) useState("");
useEffect(() => (
const fetchUserAndTransactions async () => {
try {
const storedUser JSON.parse(localStorage.getItem("user"));
setUser(storedUser);
fetchTransactions (storedUser.upi_id);
fetchBalance(storedUser.upi_id);
} catch (error) {
console.error("Error fetching user data:", error);
}
fetchUserAndTransactions();
}, []);
const fetchTransactions async (upi_id) => {
try {
const response await axios.get(
http://localhost:4003/api/transactions/${upi_id}
);
setTransactions(response.data);
} catch (error) {
console.error("Error fetching transactions:", error);
}
};
const fetchBalance async (upi_id) => {
try {
const response = await axios.get(
http://localhost:4003/api/user/${upi_id}`
);
setUser (response.data);
} catch (error) {
}
}
