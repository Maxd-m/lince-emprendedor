import { LoginForm } from "@/features/auth";

function Login(params: any) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
