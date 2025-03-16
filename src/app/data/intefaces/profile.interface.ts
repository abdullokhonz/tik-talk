export interface Profile {
  id: number;
  username: string,
  description: string,
  avatarUrl: string | null,
  subscribersAmount: number,
  firstName: string,
  lastName: string,
  isActive: boolean,
  stack: string[],
  city: string
}
