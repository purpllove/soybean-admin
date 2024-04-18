import { $t } from '@/locales';
import { transformObjectToOption } from './_shared';

export const loginModuleLabels: Record<UnionKey.LoginModule, string> = {
  'pwd-login': $t('page.login.pwdLogin.title'),
  'code-login': $t('page.login.codeLogin.title'),
  register: $t('page.login.register.title'),
  'reset-pwd': $t('page.login.resetPwd.title'),
  'bind-wechat': $t('page.login.bindWeChat.title')
};

export const userRoleLabels: Record<Auth.RoleType, string> = {
  super: $t('page.login.pwdLogin.superAdmin'),
  admin: $t('page.login.pwdLogin.admin'),
  user: $t('page.login.pwdLogin.user')
};
export const userRoleOptions = transformObjectToOption(userRoleLabels);

/** 用户性别 */
export const genderLabels: Record<UserManagement.GenderKey, string> = {
  0: '女',
  1: '男'
};
export const genderOptions = transformObjectToOption(genderLabels);

/** 用户状态 */
export const userStatusLabels: Record<UserManagement.UserStatusKey, string> = {
  1: '启用',
  2: '禁用',
  3: '冻结',
  4: '软删除'
};
export const userStatusOptions = transformObjectToOption(userStatusLabels);

export const enableStatusRecord: Record<Common.EnableStatus, I18nType.I18nKey> = {
  '1': 'page.manage.common.status.enable',
  '2': 'page.manage.common.status.disable'
};

export const enableStatusOptions = transformObjectToOption(enableStatusRecord);

export const menuTypeRecord: Record<ApiSystemManagement.MenuType, I18nType.I18nKey> = {
  '1': 'page.manage.menu.type.directory',
  '2': 'page.manage.menu.type.childMenu',
  '3': 'page.manage.menu.type.menu',
  '4': 'page.manage.menu.type.datailMenu'
};

export const menuTypeOptions = transformObjectToOption(menuTypeRecord);

export const menuIconTypeRecord: Record<ApiSystemManagement.IconType, I18nType.I18nKey> = {
  '1': 'page.manage.menu.iconType.iconify',
  '2': 'page.manage.menu.iconType.local'
};

export const menuIconTypeOptions = transformObjectToOption(menuIconTypeRecord);
