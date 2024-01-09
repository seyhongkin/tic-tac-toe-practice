import { useState } from "react";

export function Player({ name, symbol, isActive, onChangeName }) {
  const [isEdit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    setEdit((editing) => !editing);

    isEdit && onChangeName(symbol, playerName);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  let editableName = !isEdit ? (
    <span className="player-name">{playerName}</span>
  ) : (
    <input
      type="text"
      required
      value={playerName}
      onChange={handleNameChange}
    />
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
