// Bot
export type Bot = {
    id: number;
    avatar: string;
    companyName: string;
    description?: string;
    url?: string;
    category: string;
    totalSubscribers: number;
    activeSubscribers: number;
    unsubscribed?: number;
}