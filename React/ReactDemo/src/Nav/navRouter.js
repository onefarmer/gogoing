import PropsTransfer from '../Components/PropsTransfer/parents' // 父子传值与方法，以及定义值与类型
import Message from '../Components/Message'// 留言板
import AnimateCont from '../Components/TransitionGroup/animateLsit' // 动画导航
import RouterNav from '../Router/router' 
import Form from '../Components/form'
import GotoList from '../Components/GodoList'
import FetchJsonp from '../Me/Ajax/FetchJsonp'
import Axios from '../Me/Ajax/Axios'
import LifeCycle from '../Me/Lifecycle/LifeIndex'// 生命周期
import RouterComponent from '../router4/route'
import Order from '../order/orderRouter'
import Shop from '../routerNest/routerShop'

let routes = [
    {
        path: "/",
        component: PropsTransfer,
        exact:true
    },
    {
        path: "/message",
        component: Message
    },
    {
        path: "/animate",
        component: AnimateCont       
    },
    {
        path: "/routeNav",
        component: RouterNav          
    },
    {
        path: "/routeNew",
        component: RouterComponent          
    },
    {
        path: "/form",
        component: Form          
    },
    {
        path: "/gotoList",
        component: GotoList   
    },
    {
        path: "/fetchjsonp",
        component: FetchJsonp   
    },
    {
        path: "/axios",
        component: Axios   
    },
    {
        path: "/lifeStyle",
        component: LifeCycle   
    },
    {
        path: "/order",
        component: Order   
    },
    {
        path: "/shop",
        component: Shop   
    }
]

export default routes;