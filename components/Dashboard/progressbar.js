import React from 'react'

class Progressbar extends React.Component{
    constructor(props){
        super()
        this.state={
            numberComplete:10
        }
    }    
    
render(props){
    return(
        <div className="progress">
            <div className="progress-bar" style={{width:this.props.values}}>
                
            </div>
        <style jsx>
            {`
            .progress {
                display:flex;
                background-color: #eee;
                
                width: 100%;;
                height: 2rem;
                border-radius: 10rem;
                margin-bottom: 3rem;

            }
            .progress-bar {
                display:flex;
                background: linear-gradient(to right, #F2709C, #FF9472);
                width:0%;
                height: 100%;
                border-radius: 10rem;
                color: #fff;
                
                opacity: 1;
                transition: width 1s ease-in-out;
                
                
                justify-content: flex-end;
                align-items: center;
            }
            
            
            
            `}
        </style>
        
        </div>
    )
}
}
export default Progressbar