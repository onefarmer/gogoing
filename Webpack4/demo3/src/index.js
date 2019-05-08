import "./css/index.css"
import youImg from '../src/images/you.jpg' // 引入图片
let oImg = new Image() // IMG对象
oImg.onload = function(){
    document.body.appendChild(oImg)
}
oImg.src = youImg;
document.write(' == nmb, this is your father,mother,and GrandFather ......')