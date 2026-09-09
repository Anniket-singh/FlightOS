import { useState } from "react";
import { Link } from "react-router";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Registration submitted:", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="min-h-[calc(100vh-73px)] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="mb-6 text-3xl font-bold">📝 Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">Name</label>

            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded border p-3"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded border p-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">Password</label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded border p-3"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-black px-4 py-3 font-medium text-white"
          >
            Create Account
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-medium underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
