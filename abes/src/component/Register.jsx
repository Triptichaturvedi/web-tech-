import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ margin: "40px" }}>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Enter Name" /><br/><br/>
        <input type="email" placeholder="Enter Email" /><br/><br/>
        <input type="password" placeholder="Enter Password" /><br/><br/>
        <button>Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login Here</Link></p>
    </div>
  );
}

export default Register;
