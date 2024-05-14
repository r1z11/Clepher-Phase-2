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

// Post Engagements
export type PostEngagements = {
    id: number;
    icon: string;
    name: string;
    eu: {
        engaged: number;
        unique: number;
    },
    acquired: number;
    conversion: string;
}