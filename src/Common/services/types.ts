export interface LoginRequestObject {
  username: string;
  password: string;
}

export interface SignupRequestObject extends LoginRequestObject {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}
