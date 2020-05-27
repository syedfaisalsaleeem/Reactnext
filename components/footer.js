import React from 'react';
class Footer extends React.Component{
	constructor(props){
		super(props)
        
    }
render(){
return(
    <div>
            <div  className="footer">
			<p> Copyright 2020 © Cyber Intelligence House</p>
			</div>
    
    <style jsx>{`
    .footer{
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        padding-left:100px;
        color: gray;
        text-align: left;
    }

    `}


    </style>
    
    </div>

)
}
}
export default Footer;