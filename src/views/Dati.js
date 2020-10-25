import React from 'react';
import {connect} from 'react-redux'
// import {Button} from 'antd-mobile'
import fns from '../store/asyncMethods'
import loadingImg from '../assets/img/loading.gif' 

//将state映射到props函数
function mapStateToProps(state){
    return {...state}
}


//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch){
    return {
        onAddClick:()=>{dispatch({type:'add'})},
        getTimu:async ()=>{
            let list = await fns.TmList()
            dispatch({
                type:"setTimu",
                content:list
            })
        }
    }
}

class DatiCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentTimu:0,
            optionsStyle:['optionItem','optionItem','optionItem','optionItem'],
            isChoose:false,
            score:0
        }
        
    }
    
    componentDidMount(){
        this.props.getTimu()
    }
    render(){
        
        let timuArr = this.props.timuList;
        let currentNum = this.state.currentTimu;
        let oStyle = this.state.optionsStyle;
        
        
        //如果数据没有加载进来，就设置为loading
        if(timuArr.length>0){
            let options = JSON.parse(timuArr[currentNum].options)
            return (
                <div className="datiPage">
                    <h2>
                       {currentNum+1}-{timuArr[currentNum].quiz}
                    </h2>
                    <div className="options">
                        {
                            options.map((item,index)=>{
                                return (
                                    <div key={index} className={oStyle[index]} onClick={()=>this.answerEvent(index)}>
                                        {index+1}: {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <img alt="img" src={loadingImg} />
                </div>
            )
            
        }
        


    }
    goDatiPage=()=>{
        //console.log(this.props)
        this.props.history.push("/dati")
    }
    answerEvent=(index)=>{
        if(this.state.isChoose){
            return true;
        }

        let currentAnswer = this.props.timuList[this.state.currentTimu].answer;
        //  判断答案
        let score = this.state.score;
        if((index+1)===Number(currentAnswer)){
            let optionsStyle = this.state.optionsStyle;
            optionsStyle[index] = "optionItem correct";
            this.setState({
                optionsStyle:optionsStyle,
                isChoose:true,
                score:score+10
            })
        }else{
            let optionsStyle = this.state.optionsStyle;
            optionsStyle[index] = "optionItem error";
            optionsStyle[(Number(currentAnswer)-1)] = "optionItem correct"
            this.setState({
                optionsStyle:optionsStyle,
                isChoose:true
            })
        }
        //2秒跳转至下一题
        setTimeout(() => {
            let currentNum = this.state.currentTimu
            currentNum++
            if(currentNum===10){
                this.props.history.push('/result',{score:this.state.score})
            }else{
                this.setState({
                    currentTimu:currentNum,
                    optionsStyle:['optionItem','optionItem','optionItem','optionItem'],
                    isChoose:false
                })

            }
            
        }, 2000);
        
    }
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const Dati = connect(
    mapStateToProps,
    mapDispatchToProps
)(DatiCom)

export default Dati