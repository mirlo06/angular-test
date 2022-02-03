export interface RegisterRequestBody {
  email: string;
  password: string | {
    password1: string;
    password2: string;
  };
  tel?: string;
  card?: string;
  category?: string;
  profile?: string;
  city?: string;
  conditions?: boolean;
}

export interface LoginRequestBody {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
