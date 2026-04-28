import type { PhotoTypes } from "../Photos/Photos.types";

export interface InputFieldProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setPhotos: React.Dispatch<React.SetStateAction<PhotoTypes[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
