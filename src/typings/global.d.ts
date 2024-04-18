interface Window {
  $loadingBar?: import('naive-ui').LoadingBarProviderInst;
  $dialog?: import('naive-ui').DialogProviderInst;
  $message?: import('naive-ui').MessageProviderInst;
  $notification?: import('naive-ui').NotificationProviderInst;
}

interface ViewTransition {
  ready: Promise<void>;
}

interface Document {
  startViewTransition?: (callback: () => Promise<void> | void) => ViewTransition;
}

/** 通用类型 */
declare namespace Common {
  /**
   * 策略模式
   * [状态, 为true时执行的回调函数]
   */
  type StrategyAction = [boolean, () => void];

  /** 选项数据 */
  type OptionWithKey<K> = { value: K; label: string };

  /** common params of paginating */
  interface PaginatingCommonParams {
    /** current page number */
    current: number;
    /** page size */
    size: number;
    /** total count */
    total: number;
  }

  /** common params of paginating query list data */
  interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
    records: T[];
  }

  /**
   * enable status
   *
   * - "1": enabled
   * - "2": disabled
   */
  type EnableStatus = '1' | '2';

  /** common record */
  type CommonRecord<T = any> = {
    /** record id */
    id: number;
    /** record creator */
    createBy?: string;
    /** record create time */
    createTime?: string;
    /** record updater */
    updateBy?: string;
    /** record update time */
    updateTime?: string;
    /** record status */
    status: EnableStatus | null;
  } & T;

  type YesOrNo = 'Y' | 'N';
}

/** 构建时间 */
declare const PROJECT_BUILD_TIME: string;
