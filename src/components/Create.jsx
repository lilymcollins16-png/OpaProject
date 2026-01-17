import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [groups, setGroups] = useState('');
  const navigate = useNavigate();

  return (
    <form onSubmit={() => navigate('/dashboard')}>
      <h2>Create Event</h2>
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input
        type="date"
        id="dateInput"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Event Date"
        required
      />
      <select id='dropdown'>
        <option>Whole School</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
}