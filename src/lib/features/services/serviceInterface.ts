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
  cta_text: string;
  cta_url: string;
  meta_title: string;
  meta_description: string;
  created_at: string; 
  updated_at: string; 
  is_active: boolean;
}
