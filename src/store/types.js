//模块内部的 action、mutation、和 getter 现在仍然注册在全局命名空间
//——样保证了多个模块能够响应同一 mutation 或 action。
//你可以通过添加前缀或后缀的方式隔离各模块，以避免名称冲突。


// actions types
export const FETCH_LOGIN = 'FETCH_LOGIN'                		// 登录
export const FETCH_LOGIN_SESSION = 'FETCH_LOGIN_SESSION'                		// session登录
export const FETCH_LOGOUT = 'FETCH_LOGOUT'                      // 注销
export const FETCH_REGISTER = 'FETCH_REGISTER'                  // 注册
export const FETCH_HOME_LIST = 'FETCH_HOME_LIST'                // 获取主页数据列表
export const FETCH_RANK_LIST = 'FETCH_RANK_LIST'                // 获取排行
export const FETCH_CATEGORY_LIST = 'FETCH_CATEGORY_LIST'        // 获取分类
export const FETCH_CHANNEL_LIST = 'FETCH_CHANNEL_LIST'          // 获取频道
export const FETCH_BOOK_DETAIL = 'FETCH_BOOK_DETAIL'            // 获取书籍
export const FETCH_CATALOGUR = 'FETCH_CATALOGUR'            // 获取目录
export const FETCH_ALERTSHOW = 'FETCH_ALERTSHOW'            // 重置alert的显示

// mutations types
export const TOGGLE_PAGETITLE = 'TOGGLE_PAGETITLE'              // 页面标题
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'              		// 登录
export const TOGGLE_LOGIN_FAILURE = 'TOGGLE_LOGIN_FAILURE'      // 登录失败
export const TOGGLE_REGISTER = 'TOGGLE_REGISTER'              	// 注册
export const TOGGLE_REGISTER_FAILED = 'TOGGLE_REGISTER_FAILED'  // 注册失败
export const TOGGLE_LOGOUT = 'TOGGLE_LOGOUT'              		// 注销
export const TOGGLE_START_LOADING = 'TOGGLE_START_LOADING'      // 开启加载动画
export const TOGGLE_FINISH_LOADING = 'TOGGLE_FINISH_LOADING'    // 关闭加载动画
export const TOGGLE_ISSHOWBACK_Y = 'TOGGLE_ISSHOWBACK_Y'        // 显示页面头部返回icon
export const TOGGLE_ISSHOWBACK_N = 'TOGGLE_ISSHOWBACK_N'         // 取消显示页面头部返回
export const TOGGLE_ALERTSHOW_Y = 'TOGGLE_ALERTSHOW_Y'           // 显示消息弹出框
export const TOGGLE_CATALOGUR = 'TOGGLE_CATALOGUR'               // 显示目录

export const TOGGLE_HOME_LIST = 'TOGGLE_HOME_LIST'              // 主页
export const TOGGLE_RANK_LIST = 'TOGGLE_RANK_LIST'              // 排行
export const TOGGLE_CATEGORY_LIST = 'TOGGLE_CATEGORY_LIST'              // 分类
export const TOGGLE_CHANNEL_LIST = 'TOGGLE_CHANNEL_LIST'              // 频道
export const TOGGLE_BOOK_DETAIL = 'TOGGLE_BOOK_DETAIL'              // 书籍

//  getters types
export const DONE_LOADING = 'DONE_LOADING'                  // loading
export const DONE_PAGETITLE = 'DONE_PAGETITLE'                  // 页面标题
export const DONE_REGISTER_STATE = 'DONE_REGISTER_STATE'                // 注册状态，失败，成功
export const DONE_ALERTSHOW = 'DONE_ALERTSHOW'                  // 消息提示框状态
export const DONE_ISSHOWBACK = 'DONE_ISSHOWBACK'            // 返回ICON显示状态
export const DONE_ISLOGIN = 'DONE_ISLOGIN'                  // 登录状态
export const DONE_USERINFO = 'DONE_USERINFO'        // 用户信息

export const DONE_HOME_LIST = 'DONE_HOME_LIST'        // 主页
export const DONE_RANK_LIST = 'DONE_RANK_LIST'        // 排行
export const DONE_CATEGORY_LIST = 'DONE_CATEGORY_LIST'        // 分类
export const DONE_CHANNEL_LIST = 'DONE_CHANNEL_LIST'        // 频道
export const DONE_BOOK_DETAIL = 'DONE_BOOK_DETAIL'        // 书籍
export const DONE_CATALOGUR = 'DONE_CATALOGUR'        // 目录

