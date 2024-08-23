import React, { useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

function CustomMail({ threadId, onClose }) {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendReply = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        { to, from, subject, body },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      onClose();
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-[#1F1F1F] p-8 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-lg font-bold dark:text-white">Reply</h2>
          <FaTimes
            className="cursor-pointer text-gray-500 dark:text-white"
            onClick={onClose}
          />
        </div>
        <input
          className="border p-2 w-full mb-4 rounded-md"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4 rounded-md"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4 rounded-md"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-4 rounded-md"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSendReply}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;
