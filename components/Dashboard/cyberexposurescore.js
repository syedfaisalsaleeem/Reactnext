import React from 'react'
import Progressbar from "./progressbar"



class CyberExposureScore extends React.Component{
    constructor(props){
        super()
        this.state={
            count:0,
            calculate:0,
            minvalue:0,
            increment:0,
            thevalue:120
        };
        this.calculate=this.calculate.bind(this)
    
    }
    calculate = ()=>{
        let char;
        char=(this.state.thevalue/300)*100;
        console.log(char,"char")
        this.setState({calculate:String(char).concat("%")})

    }
    componentDidMount(){
        this.calculate()
        this.timeout=setTimeout(()=> {
            this.setState({count:this.state.calculate,minvalue:this.state.thevalue}
                
                );
        },1000);
        this.interval=setInterval(()=>{
            this.setState({increment:this.state.increment+1})
            if(this.state.increment===this.state.thevalue){
                clearInterval(this.interval);
            }
        },10);

        
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
        
    }

render(){

    return(
        <div className="ces">
            <div className="ces1">
                <p> Cyber Exposure Score</p>
            </div>
            <div className="ces2">
                <p><small>
                Companies are given exposure score based on identified risk
                divided by employee count on last 12 months. Score ranges from 0
                to 300+.Companies with no exposure during the past 12 months have score 0.
                Companies that have score 300+ represent the top 10% most exposed Companies.
                </small>
                    
                </p>
            </div>
            <div className="ces3">
                <div className="ces31">
                    <h1 style={{display:"block"}}> {this.state.increment}</h1>
                </div>
                <div className="ces32">
                    <p>/300</p>
                    
                </div>
                

            </div>

            <div className="ces4">
                <div className="ces42">
                <Progressbar values={this.state.count}/>
                </div>
                <div className="ces41">
                    <div className="ces411">
                        <p><small>0</small></p>
                    </div>
                    <div className="ces412">
                    <p><small>300</small></p>
                    </div>
                    
                </div>
            </div>
        
        <style jsx>{`
        .ces411{
            display:flex;
            width:50%;
            align-items:flex-start;
            justify-content:flex-start;
            border-left:1px solid gray;
        }
        .ces412{
            display:flex;
            width:50%;
            align-items:flex-start;
            justify-content:flex-end;
            border-right:1px solid gray;
        }
        .ces42{
            display:flex;
            height:50%;
            width:100%;
            
        }
        .ces41{
            display:flex;
            width:100%;
            align-items:center;
            justify-content:center;
            
        }
        .ces{
            display:flex;
            flex-direction:column;
            
            margin-left:5%;
            height:100%;
            width:90%;
            justify-content:space-evenly;
        }
        .ces1{
            display:flex;
            align-items:flex-start;
            justify-content:center;
            
            font-size:20px;
            height:10%;
            over-flow:auto;
            
        }
        .ces2{
            
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            height:20%;
            over-flow:auto;
            
        }
        .ces3{
            display:flex;
            flex-direction:row;
            
            height:20%;
            justify-content:space-evenly;
            
        }
        .ces31{
            display:flex;
            height:90%;
            width:49%;
            align-items:center;
            justify-content:flex-end;
            font-size:31px;
            padding-top:30px;
        }
        .ces32{
            display:flex;
            width:49%;
            height:100%;
            align-items:center;
            justify-content:flex-start;
            font-size:25px;
            padding-top:34px;
        }
        .ces4{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:flex-start;
            
            height:20%;
            width:100%;
        }
        ces31 h1{
            display:none;
            transition: display 1s ease-in-out;
        }
        
        `}


        </style>
        
        </div>
    )

}

}
export default CyberExposureScore;