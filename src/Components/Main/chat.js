export const chats = [
  {
    id: 1,
    title: "Alice",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    lastMessage: "Salut ! Tu es dispo ?",
    time: "09:21",
    unread: 2,
    status: "En ligne",
    messages: [
      { id: 1, text: "Salut 👋", sender: "other", time: Date.now()-1000*60*60 },
      { id: 2, text: "Bienvenue dans le chat !", sender: "other", time: Date.now()-1000*60*30 },
    ],
  },
  {
    id: 2,
    title: "Benoît",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Ok super, merci !",
    time: "Dim",
    unread: 0,
    status: "Vu récemment",
    messages: [
      { id: 1, text: "Tu as vu le projet ?", sender: "other", time: Date.now()-1000*60*60*24 },
    ],
  },
  {
    id: 3,
    title: "Groupe Dev",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140043.png",
    lastMessage: "Push fait ✔️",
    time: "18:05",
    unread: 0,
    status: "Actif",
    messages: [],
  },
];
