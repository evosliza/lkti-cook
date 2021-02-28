export interface UserModel {
  uid: string;
  email: string;
  password?: string | null;
  isAdmin?: boolean;
  displayName: string;
}
