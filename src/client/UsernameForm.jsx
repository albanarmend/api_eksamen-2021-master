import React, { useState } from "react";

export function UsernameForm({ onUsername }) {
  const [usernameField, setUsernameField] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onUsername(usernameField);
      }}
    >
        <h1>Welcome to exam chat</h1>
      <h2>Pleas, enter your username</h2>

        <div>
            <label>Username</label>
            <input
            autoFocus={true}
            type="text"
            value={usernameField}
            onChange={(e) => setUsernameField(e.target.value)}
            />
        </div>
        <div>
            <label>Password</label>
            <input type="text"  />
        </div>
      <button>Submit</button>
    </form>
  );
}