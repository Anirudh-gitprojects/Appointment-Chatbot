import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
import ButtonReply from "./Button";
const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`),
  ],
  widgets: [    {      widgetName: 'dogPicture',      widgetFunc: (props) => <DogPicture {...props} />,    },  {widgetName: 'button',  widgetFunc: (props) => <ButtonReply {...props} />,} ],
};

export default config;
