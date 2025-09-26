import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Update cht history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // delay 600ms before showing "Thinking..." and generating Response
    setTimeout(() => {
      // Add a "Thinking..." plceholder for the bot's response
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." }
      ]);
      //   Call the function to generate the bot's response
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: `using the details provided above, please address this query: ${userMessage}` }
      ]);
    }, 600);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ask something..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
