interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface ServiceItem {
  id: number;
  name: string;
  title: string;
  slug: string;
  hero_image: string;
  hero_image_alt_text: string;
  content: string;
  features: string;
  content_image: string;
  content_image_alt_text: string;
  file: string;
  tags: Tag[];
  description:string;
  cta_text: string;
  cta_url: string;
  meta_title: string;
  meta_description: string;
  created_at: string; 
  updated_at: string; 
  is_active: boolean;
}
export interface QueryPayload {
  name: string;
  business_name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ClientData {
  id: number;
  client_name: string;
  company: string;
  content: string;
  image: string;
  image_alt_text: string;
  created_at: string; 
  updated_at: string; 
  is_active: boolean;
}

interface SocialMedia {
  id: number;
  display_name: string;
  platform: string;
  url: string;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  logo_alt_text: string;
  address: string;
  phone_number1: string;
  phone_number2: string;
  email: string;
  whatsapp: string;
  viber: string;
  social_media: SocialMedia[];
  location: string;
  about: string;
  meta_title: string;
  meta_description: string;
}
