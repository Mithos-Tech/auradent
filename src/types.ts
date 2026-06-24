export interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  status: 'Calificado' | 'Cliente Potencial';
  treatment: string;
  date: string;
  time?: string;
  lastMessage: string;
  transcript: Message[];
}

export interface Metrics {
  totalConversations: number;
  qualifiedLeads: number;
  scheduledAppointments: number;
  conversionRate: number; // percentage
}
