export interface PhotoDetailsProps {
  profile_image?: string;
  user_name: string;
  username: string;
  download: string;
  likes: number;
  width: number;
  height: number;
  created_at: string;
  asset_type: string;
  alternative_slugs: Record<string, string>;
}
