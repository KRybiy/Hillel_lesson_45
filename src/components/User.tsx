import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { setUsername } from "../redux/userSlice";

const User = () => {
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(event.target.value.trim());
  }

  const handleUsernameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUsername(newUsername));
  }
  return (
    <div>
      <h1>User</h1>
      <p>Name: {name}</p>
      <form onSubmit={handleUsernameSubmit}>
        <input type="text" value={newUsername} onChange={handleUsernameChange}/>
        <button type="submit">Change Username</button>
      </form>
    </div>
  );
} 

export default User