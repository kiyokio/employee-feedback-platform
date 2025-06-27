/**
 * 登录参数
 */
export interface LoginParams {
  username: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * 用户信息
 */
export interface UserInfo {
  id: number;
  username: string;
  nickname: string;
  avatar?: string;
  roles: string[];
  permissions: string[];
}