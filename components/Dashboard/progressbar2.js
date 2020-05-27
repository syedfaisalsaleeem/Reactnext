import React from 'react'
import { Progress } from 'semantic-ui-react'
class Progressbar extends React.Component{
    constructor(props){
        super()
        this.state={
            numberComplete:10
        }
    }    
    
render(){
    return(
        <div className="progress">
            <div>
            <Progress  progress='value' value={35} color=' olive' />
            </div>
        <style jsx>
            {`

            
            
            
            `}
        </style>
        
        </div>
    )
}
}
export default Progressbar