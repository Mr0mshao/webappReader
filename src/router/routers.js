export const commonRoute = [
  {
    path: '/',
    name: 'home',
    component: resolve => {require(['@/views/home'], resolve)}
  },
  {
    path:'/rank',
    name:'rank',
    component: resolve => {require(['@/views/rank'], resolve)}
  },
  {
    path:'/female',
    name:'female',
    component: resolve => {require(['@/views/channel'], resolve)}
  },{
    path:'/male',
    name:'male',
    component: resolve => {require(['@/views/channel2'], resolve)}
  },
  {
    path:'/category',
    name:'category',
    component: resolve => {require(['@/views/category'], resolve)},
  },{
    path:'/categorydetail/:id',
    name:'categoryDetail',
    component: resolve => {require(['@/views/category-detail'], resolve)}
  },
  {
    path:'/book/:id',
    name:'book',
    component: resolve => {require(['@/views/book'], resolve)}
  },
  {
    path:'/catalogue/:id',
    name:'catalogue',
    component: resolve => {require(['@/views/catalogue'], resolve)}
  },
  {
    path:'/reader/:bid&:id',
    name:'reader',
    component: resolve => {require(['@/views/reader'], resolve)}
  }
]
export const authRoute = [
  {
    path: '/userinfo',
    component: resolve => {require(['@/views/userinfo'], resolve)}
  }
]
export const Login = {
  path: '/login',
  component: resolve => {require(['@/views/login'], resolve)}
}
export const Register = {
  path: '/register',
  component: resolve => {require(['@/views/register'], resolve)}
}
export const routes = [
  Login,
  Register,
  ...commonRoute,
  ...authRoute
]