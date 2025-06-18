export interface Profile {
  id: number;
  Address: string | null;
  Avatar: string | null;
  Birthday: string | null;
  Department: string | null;
  Education: string | null;
  Email: string;
  Factory: number;
  Gender: "Male" | "Female" | "Other" | string;
  Grade: string | null;
  Group: string;
  HiredDate: string | null;
  IdentityCard: string | null;
  IsMarried: boolean | null;
  IsOnline: boolean;
  IsResigned: boolean;
  JobTitle: string | null;
  LeaderLine: string | null;
  Name: string;
  Nation: string | null;
  PermanentAddress: string | null;
  Phone: string | null;
  User: string;
  UserId: string;
  WebviewPermission: string;
  WorkingLine: string | null;
  created_date: string;
  updated_date: string;
}

// Main user type
export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  date_joined: string;
  last_login: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  groups: any[]; // consider replacing 'any' with a specific Group type
  user_permissions: any[]; // consider defining a Permission type
  profile: Profile;
}
