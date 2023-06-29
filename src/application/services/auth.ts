import { API_URL } from '../../config';
import { AxiosRequest } from '../../lib/axios/Axios';
import { LoginDto, LoginResponseDto } from '../models/log-in';

export const login = async (dto: LoginDto): Promise<LoginResponseDto> => {
  const apiUrl = `${API_URL}/auth/login`;

  try {
    const res = await AxiosRequest.post<LoginResponseDto, LoginDto>(
      `${apiUrl}`,
      dto
    );
    return res.data;
  } catch (err: any) {
    console.error(`Login failed`, err.message);
    throw new Error('Login failed');
  }
};
