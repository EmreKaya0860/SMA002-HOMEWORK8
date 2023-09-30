import { useState } from "react";
import emojis from "./emojis.json";
import "./App.css";

function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    navigator.clipboard.writeText(emoji);
  };

  const filteredEmojis = emojis.filter((emojiData) =>
    emojiData.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="header">
        <h1>😸 Emoji Arama Motoru 😸</h1>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar"
        />
      </div>
      <table>
        <tbody>
          {filteredEmojis.map((emojiData, index) => (
            <tr key={index} onClick={() => handleEmojiClick(emojiData.emoji)}>
              <td className="tableItems">
                {emojiData.emoji} {emojiData.name} <p>Emoji Kopyala</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
