interface Tag {
    id: number;
    name: string;
    slug: string;
  }
  
  interface Specialization {
    id: number;
    name: string;
    icon: string;
  }
  
  interface SocialMedia {
    id: number;
    display_name: string;
    platform: string;
    url: string;
  }
  
  interface Author {
    id: number;
    name: string;
    slug: string;
    designation: string;
    contact_number: string;
    phone_number: string;
    email: string;
    education: string;
    experience: string;
    specialization: Specialization[];
    image: string;
    image_alt_text: string;
    social_media: SocialMedia[];
    bio: string;
    meta_title: string;
    meta_description: string;
    created_at: string;
    updated_at: string;
    is_active: boolean;
  }
  
  interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    faq_count: number;
  }
  
 export interface BlogItem {
    id: number;
    title: string;
    slug: string;
    hero_image: string;
    hero_image_alt_text: string;
    category: Category;
    content: string;
    highlights: string;
    meta_title: string;
    meta_description: string;
    author: Author;
    tags: Tag[];
    created_at: string;
    updated_at: string;
    is_active: boolean;
  }
  