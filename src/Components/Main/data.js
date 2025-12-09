import {
  MessageCircle,
  MessageSquare,
  UserRound,
  Lightbulb,
} from "lucide-react";

export const categories = [
  { id: 1, name: "Tous", count: 183, icon: MessageCircle },
  { id: 2, name: "Non lus", count: 183, icon: MessageSquare },
  { id: 3, name: "Personnel", count: 78, icon: UserRound },
  { id: 4, name: "cc", count: 78, icon: Lightbulb },
  { id: 5, name: "Les canaux", count: 1, icon: MessageSquare },
];

export const handleSelect = (cat) => {
  alert(`Catégorie sélectionnée : ${cat.name}`);
};

