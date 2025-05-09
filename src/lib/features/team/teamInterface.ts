interface Specialization {
    id: number;
    name: string;
    icon: string;
  }
  
  interface SocialMedia {
    id: number;
    display_name: string;
    platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | string;
    url: string;
  }
  
 export interface TeamItem {
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
  