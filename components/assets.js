import React from 'react';
import { Icon } from 'semantic-ui-react'
class Assets extends React.Component{
	constructor(props){
		super(props)
        
    }
    twofunctionso1(){
        this.backdropClickHandler()

      }
    twofunctionsf1(){
        this.backdropClickHandler()
      }
render(props){
    return(
    <div>
        <div className="assetbar" style={{display:this.props.call?"flex":"none"}} onMouseEnter={this.props.c}   onMouseLeave={this.props.c}>
            <a>  Discovery    </a>
            <a>  List  </a>
            <a>  Map  </a>
        </div>
    
    <style jsx>{`
    .assetbar {
        display: flex;
        flex-direction: row;
        justify-content: center;
      align-items: center;
        background: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        position:absolute;
        width:108%;
      }
      .assetbar >a {
        color: gray;
        text-decoration: none;
          display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
            font-family: 'Gilroy', sans-serif;
        font-size: 14px;
        text-transform:uppercase;
        font-weight:400;
        flex-basis:100px;
        height:70px;
        opacity: 0.8;
      }
      .assetbar a:hover {color: black;opacity: 1;cursor: pointer;}
    `}</style>
    
    
    </div>
    );

}
}
export default Assets;