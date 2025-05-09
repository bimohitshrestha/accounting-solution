interface FAQCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    faq_count: number;
  }
  
 export interface FAQItem {
    id: number;
    title: string;
    slug: string;
    category: FAQCategory;
    question: string;
    answer: string;
    meta_title: string;
    meta_description: string;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
    is_active: boolean;
  }
  