import React from "react";
import { chats, styles } from "../Main/chat"

export default function ChatMenu() {
  return (
    <div style={styles.container}>
      {chats.map((chat) => (
        <div key={chat.id} style={styles.chatItem}>
          <img src={chat.avatar} alt="avatar" style={styles.avatar} />

          <div style={styles.content}>
            <div style={styles.header}>
              <span style={styles.title}>{chat.title}</span>
              <span style={styles.time}>{chat.time}</span>
            </div>

            <div style={styles.messageRow}>
              <span style={styles.lastMessage}>{chat.lastMessage}</span>

              {chat.unread > 0 && (
                <span style={styles.badge}>{chat.unread}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
