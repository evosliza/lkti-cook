export interface UserModel {
  email: string;
  password?: string | null;
  isAdmin?: boolean;
  displayName: string;
}
