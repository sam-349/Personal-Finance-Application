import React, { useState, useEffect } from "react";
import "./Notes.css"; // optional styling

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() === "") return;
    if (editingIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingIndex] = newNote;
      setNotes(updatedNotes);
      setEditingIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }
    setNewNote("");
  };

  const editNote = (index) => {
    setNewNote(notes[index]);
    setEditingIndex(index);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-container">
      <h3>📝 Notes</h3>
      <div className="notes-input">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your note here..."
        />
        <button onClick={addNote}>
          {editingIndex !== null ? "Update" : "Add"} Note
        </button>
      </div>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index}>
            <span>{note}</span>
            <div>
              <button onClick={() => editNote(index)}>✏️</button>
              <button onClick={() => deleteNote(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
