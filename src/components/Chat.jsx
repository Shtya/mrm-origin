

//   import { StreamChat } from 'stream-chat';
//   import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
  
//   const chatClient = StreamChat.getInstance('YOUR_API_KEY');
//   chatClient.connectUser({ id: 'user-id' }, userToken);
  


//   function ChatComponent() {
//     return (
//       <Chat client={chatClient} theme={'messaging light'}>
//         <ChannelList />
//         <Channel />
//         <Window />
//       </Chat>
//     );
//   }


//   export function WhatsAppButton() {
//     const handleWhatsAppClick = () => {
//       const message = encodeURIComponent('Hello, I want to chat with you!');
//       window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
//     };
  
//     return (
//       <button onClick={handleWhatsAppClick}>Chat on WhatsApp</button>
//     );
//   }
  