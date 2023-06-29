export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  readonly userId: string;
  readonly roles: string[];
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly token: string;
  readonly mobile: string;
}
