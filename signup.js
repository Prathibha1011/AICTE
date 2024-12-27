import React, { useState) from "react";
import { Link) from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default function Signup() {
const [name, setName] = useState("");
const [email, setEmail] = useState(""); I
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage = useState("");
const handleSubmit (e) => {
e.preventDefault();
const user = (name, email, password);
axios
.post("http://localhost:4003/api/signup", user) // Updated port
.then((res) => {
alert("Signup successful");
setName("");
setEmail("");
setPassword("");
setErrorMessage("");
age.json
})
.catch((err) => {
console.error(
"Signup error:",
err.response?.data?.message || err.message
);
setErrorMessage(err.response?.data?.message || "Error signing up");
});
};
return (
<div className="container d-flex justify-content-center align-items-center min-vh-100">
<div className="row">
<div className="">
<div className="card p-4 shadow-sm">
<h2 className="card-title mb-4 text-center">CREATE AN ACCOUNT</h2>
<form onSubmit=(handleSubmit)>
<div className="mb-3">
<label htmlFor="name" className="form-label">
Name
</label>
<input
type="text"
id="name"
className="form-control"
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label">
</div>
);
}
