
import Home from '../home';
import User from '../user';
import Shop from '../shop';
import News from '../news';
// 嵌套
import UserList from '../User/UserList';
import UserAdd from '../User/UserAdd';
import UserEdit from '../User/UserEdit';
import Info from '../User/Info';
import Main from '../User/Main';

let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    {
      path: "/shop",
      component: Shop
    },
    {
      path: "/user",
      component: User,  
      routes:[   /*嵌套路由*/
        {
            path: "/user/",
            component: Main
        },
        {
            path: "/user/info",
            component: Info
        },
        {
          path: "/user/list",
          component: UserList
        },
        {
          path: "/user/add",
          component: UserAdd
        },
        {
          path: "/user/edit",
          component: UserEdit
        }
      ]
    },
    {
      path: "/news",
      component: News
    }
];

export default routes;