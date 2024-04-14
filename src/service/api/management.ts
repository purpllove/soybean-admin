import { adapter } from '@/utils';
// import { mockRequest } from '../request';
import { request } from '../request';
import { adapterOfFetchUserList } from './management.adapter';

/** 获取用户列表 */
export const fetchUserList = async () => {
  // const data = await request.post<ApiUserManagement.User[] | null>('/getAllUserList');
  const data = await request.post<ApiUserManagement.User[] | null>('/getAllUserList');
  return adapter(adapterOfFetchUserList, data);
};

// export const fetchUserList = () => {
//   const data = request.get<ApiUserManagement.User[] | null>('/systemManage/getUserList');
//   return data;
// };

/** 新增修改用户 */
export const addUser = async (user: UserManagement.User | null, update: boolean) => {
  const data = await request.post<ApiUserManagement.User[] | null>(update ? '/addUser' : '/editUser', user);
  return data;
};

/** 删除用户 */
export const deleteUser = (id: string | null) => {
  const url = `/deleteUser?userId=${id}`;
  const data = request.get<ApiUserManagement.User[] | null>(url);
  return data;
};

/** getRends */
export const getRends = async () => {
  const data = await request.post<ApiChartManagement.Rend[] | null>('/getRends');
  return data;
};

/** getPages */
export const getPages = async () => {
  const data = await request.post<Any[] | null>('/getPages');
  return data;
};
