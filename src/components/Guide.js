import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <h1>he</h1>
      <SignIn path="/login" routing="path" />
    </div>
  );
};

export default Login;
