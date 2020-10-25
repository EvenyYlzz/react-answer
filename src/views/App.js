import React from 'react';
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'
import '../assets/css/style.css'

//将state映射到props函数
function mapStateToProps(state){
    return {...state}
}


//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch){
    return {
        onAddClick:()=>{dispatch({type:'add'})},
    }
}

class Counter extends React.Component{
    
    render(){
        
        return (
            <div className="indexApp">
                <div className="btn">
                    <Button onClick={this.goDatiPage}>随机答题</Button>
                </div>
                <div className="btn">
                    <Button onClick={this.props.onAddClick5}>闯关答题</Button>
                </div>
                <div className="btn">
                    <Button onClick={this.props.onAddClick5}>抽奖答题</Button>
                </div>
            </div>
        )


    }
    goDatiPage=()=>{
        //console.log(this.props)
        this.props.history.push("/dati")
    }
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default App