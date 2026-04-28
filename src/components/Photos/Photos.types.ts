export interface PhotoTypes {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  asset_type: string;
  alternative_slugs: Record<string, string>;
  urls: PhotoUrls;
  links: PhotoLinks;
  user: UnsplashUser;
  likes: number;
  liked_by_user: boolean;
  bookmarked: boolean;
  sponsorship: Sponsorship | null;
}

export interface PhotoProps {
  photos: PhotoTypes[] | undefined;
  lastImageElementRef: (node: HTMLLIElement) => void;
}

interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3?: string;
}

interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface UnsplashUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string | null;
  twitter_username?: string | null;
  portfolio_url?: string | null;
  bio?: string | null;
  location?: string | null;
  links?: Record<string, string>;
  profile_image?: Record<string, string>;
  instagram_username?: string | null;
  total_collections?: number;
  total_likes?: number;
  total_photos?: number;
  accepted_tos?: boolean;
  for_hire?: boolean;
  social?: Record<string, string | null>;
}

interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: Partial<UnsplashUser>;
}
