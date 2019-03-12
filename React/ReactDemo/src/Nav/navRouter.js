import PropsTransfer from '../Components/PropsTransfer/parents' // 父子传值与方法，以及定义值与类型
import Message from '../Components/Message'// message board

let routes = [
    {
        path: "/",
        component: PropsTransfer,
        exact:true
    },
    {
        path: "/message",
        component: Message
    }
]

export default routes;