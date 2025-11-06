
export enum Sender {
  User = 'user',
  AI = 'ai',
}

export interface Message {
  id: number;
  sender: Sender;
  text: string;
  shloka?: string;
  reference?: string;
}

export interface AIResponse {
  answer: string;
  shloka: string;
  reference: string;
}
