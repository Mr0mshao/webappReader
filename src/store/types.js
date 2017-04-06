//模块内部的 action、mutation、和 getter 现在仍然注册在全局命名空间
//——样保证了多个模块能够响应同一 mutation 或 action。
//你可以通过添加前缀或后缀的方式隔离各模块，以避免名称冲突。


// actions types
export const FETCH_LOGIN = 'FETCH_LOGIN'                // 最新消息列表
export const FETCH_LOGOUT = 'FETCH_LOGOUT'                // 最新消息列表
export const FETCH_HOME_LIST = 'FETCH_HOME_LIST'                // 最新消息列表
export const FETCH_RANK_LIST = 'FETCH_RANK_LIST'                // 最新消息列表
export const FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST'                // 最新消息列表
export const FETCH_CHANNEL_LIST = 'FETCH_CHANNEL_LIST'                // 最新消息列表

// mutations types
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'              // 最新消息列表
export const TOGGLE_LOGOUT = 'TOGGLE_LOGOUT'              // 最新消息列表
export const TOGGLE_START_LOADING = 'TOGGLE_START_LOADING'              // 最新消息列表
export const TOGGLE_FINISH_LOADING = 'TOGGLE_FINISH_LOADING'              // 最新消息列表
export const TOGGLE_ISSHOWBACK_Y = 'TOGGLE_ISSHOWBACK_Y'              // 最新消息列表
export const TOGGLE_ISSHOWBACK_N = 'TOGGLE_ISSHOWBACK_N'              // 最新消息列表

export const TOGGLE_HOME_LIST = 'TOGGLE_HOME_LIST'              // 最新消息列表
export const TOGGLE_RANK_LIST = 'TOGGLE_RANK_LIST'              // 最新消息列表
export const TOGGLE_CATEGORY_LIST = 'TOGGLE_CATEGORY_LIST'              // 最新消息列表
export const TOGGLE_CHANNEL_LIST = 'TOGGLE_CHANNEL_LIST'              // 最新消息列表

//  getters types
export const DONE_LOADING = 'DONE_LOADING'                  // loading
export const DONE_ISSHOWBACK = 'DONE_ISSHOWBACK'            // 最新消息列表梗
export const DONE_ISLOGIN = 'DONE_ISLOGIN'                  // 最新消息列表
export const DONE_USERINFO = 'DONE_USERINFO'        // 更多消息

export const DONE_HOME_LIST = 'DONE_HOME_LIST'        // 更多消息
export const DONE_RANK_LIST = 'DONE_RANK_LIST'        // 更多消息
export const DONE_CATEGORY_LIST = 'DONE_CATEGORY_LIST'        // 更多消息
export const DONE_CHANNEL_LIST = 'DONE_CHANNEL_LIST'        // 更多消息

