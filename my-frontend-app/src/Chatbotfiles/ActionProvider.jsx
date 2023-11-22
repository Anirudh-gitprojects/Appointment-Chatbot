// in ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      { widget: "dogPicture" }
    );
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  };
  // Put the handleHello function in the actions object to pass to the MessageParser
  const handleButton = () => {
    const botMessage = createChatBotMessage("Pick a slot!", {
      widget: "Button",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleButton,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
