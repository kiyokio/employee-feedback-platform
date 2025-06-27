import type { LoginParams, UserInfo } from '@/types/user';
import http from '@/api/http';

/**
 * 用户登录
 * @param params 登录参数
 */
export const login = (params: LoginParams) => {
  return http.post<{ token: string }>('/auth/login', params);
};

/**
 * 用户登出
 */
export const logout = () => {
  return http.post('/auth/logout');
};

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return http.get<UserInfo>('/user/info');
};