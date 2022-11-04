export interface Person {
  id: number;
  name: string;
  avatar: string;
}

export interface Message {
  id: number;
  content: string;
  sendTime: Date;
  sender: Person;
}
