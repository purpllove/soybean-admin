// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  interface Token {
    token: string;
    refreshToken: string;
  }
  /** 返回的用户信息 */
  type UserInfo = Auth.UserInfo;
}

/** 后端返回的路由相关类型 */
declare namespace ApiRoute {
  /** 后端返回的路由数据类型 */
  interface Route {
    /** 动态路由 */
    routes: AuthRoute.Route[];
    /** 路由首页对应的key */
    home: AuthRoute.AllRouteKey;
  }
}

declare namespace ApiUserManagement {
  interface User {
    /** 用户id */
    id: string;
    /** 用户名 */
    userName: string | null;
    /** 用户年龄 */
    age: number | null;
    /**
     * 用户性别
     * - 0: 女
     * - 1: 男
     */
    gender: '0' | '1' | null;
    /** 用户手机号码 */
    phone: string;
    /** 用户邮箱 */
    email: string | null;
    /**
     * 用户状态
     * - 1: 启用
     * - 2: 禁用
     * - 3: 冻结
     * - 4: 软删除
     */
    userStatus: '1' | '2' | '3' | '4' | null;
  }
}

declare namespace ApiChartManagement {
  interface Rend {
    name: string | null;
    date: string | null;
    list: number[] | null;
  }
}

declare namespace ApiPageManagement {
  interface Page {
    id?: number;
    name: string;
    description?: string;
    site?: string;
    icon?: string;
    iconColor?: string;
    type: number;
    orderBy?: number;
  }

  interface LegacyPage {
    list: Page[];
    types: number[];
  }
  type RecordNullable<T> = {
    [K in keyof T]?: T[K] | null;
  };
  type PageSearchParams = RecordNullable<Pick<ApiPageManagement.Page, 'name' | 'type'>>;
}

declare namespace ApiSystemManagement {
  /**
   * menu type
   *
   * - "1": directory
   * - "2": menu
   */
  type MenuType = '1' | '2' | '3' | '4';

  type MenuButton = {
    /**
     * button code
     *
     * it can be used to control the button permission
     */
    code: string;
    /** button description */
    desc: string;
  };

  /**
   * icon type
   *
   * - "1": iconify icon
   * - "2": local icon
   */
  type IconType = '1' | '2';

  type Menu = Common.CommonRecord<{
    /** parent menu id */
    parentId: number;
    /** menu type */
    menuType: MenuType;
    /** menu name */
    menuName: string | null;
    /** route name */
    routeName: string;
    /** route path */
    routePath: string;
    /** component */
    component?: string;
    /**
     * i18n key
     *
     * it is for internationalization
     */
    i18nKey?: I18nType.I18nKey;
    /** iconify icon name or local icon name */
    icon: string;
    /** icon type */
    iconType: IconType;
    /** menu order */
    order: number;
    /** whether to cache the route */
    keepAlive?: boolean;
    /** outer link */
    href?: string;
    /** whether to hide the route in the menu */
    hideInMenu?: boolean;
    /**
     * The menu key will be activated when entering the route
     *
     * The route is not in the menu
     *
     * @example
     *   the route is "user_detail", if it is set to "user_list", the menu "user_list" will be activated
     */
    // activeMenu?: import('@elegant-router/types').LastLevelRouteKey;
    /** By default, the same route path will use one tab, if set to true, it will use multiple tabs */
    multiTab?: boolean;
    /** If set, the route will be fixed in tabs, and the value is the order of fixed tabs */
    fixedIndexInTab?: number;
    /** menu buttons */
    buttons?: MenuButton[];
    /** children menu */
    children?: Menu[];
    directory?: boolean;
  }>;

  /** menu list */
  type MenuList = Common.PaginatingQueryRecord<Menu>;

  type MenuTree = {
    id: number;
    label: string;
    pId: number;
    children?: MenuTree[];
  };
}
