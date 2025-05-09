interface Subscriber {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_subscribed: boolean;
    created_at: string; 
    updated_at: string;
  }
  
 export interface NewsItem {
    id: number;
    title: string;
    slug: string;
    content: string;
    subscribers: Subscriber[];
    subscriber_count: number;
    sent_at: string;
    created_at: string;
    updated_at: string;
  }
  