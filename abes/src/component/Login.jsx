import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ margin: "40px" }}>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Enter Email" /><br/><br/>
        <input type="password" placeholder="Enter Password" /><br/><br/>
        <button>Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register Here</Link></p>
    </div>
  );
}

export default Login;
