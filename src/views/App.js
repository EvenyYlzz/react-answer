import React from 'react';
import {connect} from 'react-redux'
import { Button } from 'antd-mobile';


//  将store的state映射到组件里的props的函数
function mapStateToProps(state) {
    return {
        value:state.num
    }
}

//  将修改state数据的方法，映射到props，默认会传入store里的dispatch方法，实现了方法的共享
function mapDispatchToprops(dispatch) {
    return {
        onAddClick:() => {dispatch({type:'add'})},
        onAddClick5:() => {dispatch({type:'addNum',num:5})}
    }
}

class Counter extends React.Component{

    render() {
      // 计数，通过store的state传给props，直接通过props就可以将state的数据获取
      let value = this.props.value
      // 将修改数据的事件或者方法传入到props
      let onAddClick = this.props.onAddClick
      let onAddClick5 = this.props.onAddClick5

      //  等同于vuex的mapMutation mapState

      return (
        <div>
          
          <h1>计数的数量：{value}</h1>
          <Button onClick={onAddClick}>数字+1</Button>
          <Button onClick={onAddClick5}>数字+5</Button>
        </div>
      )
    }
}

//  connect 将组件和数据（方法）进行连接
//  将上面的这两个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件
const App = connect(
    mapStateToProps,
    mapDispatchToprops
)(Counter)

export default App