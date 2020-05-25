import React,{Component} from 'react';
import Link from 'next/link';
import Alertsdropdown from "./alertsdropdown.js"
import { Icon } from 'semantic-ui-react'
class Navigation extends React.Component{
	constructor(props){
		super(props)
        this.state={
            show:false,
            showa:false,
            showb:false
        }
        this.backdropClickHandlert=this.backdropClickHandlert.bind(this)
        this.backdropClickHandlerf=this.backdropClickHandlerf.bind(this)
        this.backdropClickHandler1t=this.backdropClickHandler1t.bind(this)
        this.backdropClickHandler1f=this.backdropClickHandler1f.bind(this)
        this.twofunctionso=this.twofunctionso.bind(this)
        this.twofunctionsf=this.twofunctionsf.bind(this)
        this.twofunctionso1=this.twofunctionso1.bind(this)
        this.twofunctionsf1=this.twofunctionsf1.bind(this)
	}
  backdropClickHandler =() => {
    this.setState((prevState) => {
            return {show: !prevState.show};

        
    });


  };

    backdropClickHandler1 =() => {
    this.setState((prevState) => {
            return {showa: !prevState.showa};        
    });


  };
      backdropClickHandler2 =() => {
    this.setState((prevState) => {
            return {showb: !prevState.showb};        
    });


  };
  backdropClickHandlert(){
    this.setState({show:true})

  };
    backdropClickHandlerf(){
    this.setState({show:false})
  };
  backdropClickHandler1t(){
    this.setState({showa:true})

  };
    backdropClickHandler1f(){
    this.setState({showa:false})
  };
  twofunctionso(){
    this.backdropClickHandlert()
    this.backdropClickHandler1t()
  }
    twofunctionsf(){
    this.backdropClickHandlerf()
    this.backdropClickHandler1f()
  }
    twofunctionso1(){
    this.backdropClickHandlert()
    this.backdropClickHandler2()
  }
    twofunctionsf1(){
    this.backdropClickHandlerf()
    this.backdropClickHandler2()
  }
render(){
		return(
    <div>
        <nav className="designing">
            <li className="logo"> <img className="l1" src="logo.png"/>  </li>
            <li className="link1"   onMouseEnter={this.backdropClickHandlert}
               onMouseLeave={this.backdropClickHandlerf}
   > Exposed Information </li>

            <li className="link2"> Assets </li>
            <li className="link3"> Support </li>
            <li className="spacer"></li>
            <Link href="/" ><a><img src="usericon.png" className="userlogo"/></a></Link>
            <li className="demoaccount"> Demo account </li>
            <li > <img src="out.png" className="logo1"/> </li>
          </nav>
          <div className="dropdown-content"      style={{display:this.state.show?"flex":"none"}}
          onMouseEnter={this.backdropClickHandlert}   onMouseLeave={this.backdropClickHandlerf}    >
          <li className="spacer1"></li>
            <a href="#" className="dashboards">
            <img src="squares.png"/><p>DASHBOARDS</p>
            </a>
            <a href="#">
<img src="search.png" className="search"/>
<pre> </pre>
            KEYWORDS</a>
            <a href="#" onMouseEnter={this.backdropClickHandler1t}
               onMouseLeave={this.backdropClickHandler1f}
                 
             >
<img src="bell.png" className="alerts"/>
<pre> </pre>
            ALERTS
            <pre> </pre>
            <Icon flipped='horizontally' fitted name='caret down' size="large" />
            </a>
            <a href="#"
            onMouseEnter={this.backdropClickHandler2}
               onMouseLeave={this.backdropClickHandler2}>
<img src="sheald.png" className="sheald"
/>
<pre> </pre>

            REMEDIATION
            <pre> </pre>
            <Icon flipped='horizontally' fitted name='caret down' size="large" />
            </a>
            
            <a href="#">
<img src="seating.png" className="seating"/>

            SETTINGS</a>

          
        </div>

            <div className="dropdown-content1"  style={{display:this.state.showa?"flex":"none"}} 
            onMouseEnter={this.twofunctionso}   onMouseLeave={this.twofunctionsf} 
  
                 >
            
            <a href="#">
            
            All Alerts
            </a>
            <a href="#">
            Sensitive Information</a>
            <a href="#">
            Discussions</a>
            <a href="#">
            Black Markets</a>
            <a href="#">
            Financial</a>
            <a href="#">
            Exposed Credentials</a>
            <a href="#">
            Personal Information</a>
            <a href="#">
            Hacker Group Targeting</a>
            <a href="#">
            Attack & Compromises</a>
            <a href="#">
            Under Analysis</a>

            </div>
          
            <div className="dropdown-content3"  style={{display:this.state.showb?"flex":"none"}} 
            onMouseEnter={this.twofunctionso1}   onMouseLeave={this.twofunctionsf1} >
            <li className="spacer1"></li>
            <li href="#" className="dashboards">
            <p></p>
            </li>
            <li href="#">
            
            <pre> </pre>
            </li>
            <li href="#" >
            
            <pre> </pre>
            <pre> </pre>
            </li>
            <li href="#">
            <pre> </pre>
            <a className="d1">Actions</a>
            <pre>   </pre>
            <a className="d2">Log</a>
            </li>
            
            <li href="#">
            
            </li>




            </div>
          <style jsx>{`
            .l1{
                margin-top:0px;
                width:300px;
                height:40px;
            }
.designing{
  background: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;
  
  

}
.spacer2{
display:flex;
background:blue;
flex-basis:50%;
}
.search{
         width:24px;
    height:24px;  
}
.sheald{
      width:40px;
    height:40px;  
}
.alerts{
    width:25px;
    height:25px;
}
.designing >li {
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  list-style:none; 
}
.logo{
  display: flex;

  flex-basis: 40%;
}
.link1{
    display: flex;
    font-family: 'Gilroy', sans-serif;
  width:150px;
  font-size: 15px;
  border-bottom:3px solid transparent;
}
.link2{
    display: flex;
    width:70px;
    font-family: "Gilroy", sans-serif;
  font-size: 15px;
  border-bottom:3px solid transparent;
}
.link3{
    display: flex;
    width:70px;
       font-family: "Gilroy", sans-serif;
  font-size: 15px;
  border-bottom:3px solid transparent;
}
.spacer{
  display: flex;
  flex-basis: 20%;

  
}
.userlogo{
  display: flex;
flex-basis: 15%;
    justify-content: flex-end;
background: black;
  height: 25px;
  width: 25px;
}
.demoaccount{
    display: flex;
    justify-content: flex-end;
       font-family: "Gilroy", sans-serif;
   font-size: 14px;
   width: 110px;

}
.logo1{
 width:25px;
 height:25px;
}
/* Dropdown Button */


/* The container <div> - needed to position the dropdown content */

.spacer1{
  display: flex;
  flex-basis: 20%;
}

.dropdown-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
align-items: center;
  background: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  position:absolute;
  width:100%;
}
.seating{
    width:35px;
    height:30px;
}
/* Links inside the dropdown */
.dropdown-content >a {
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
  width: 180px;
  height:70px;
  opacity: 0.8;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {color: black;opacity: 1;}


.link1:hover {border-bottom:3px solid #0076ff; cursor: pointer;}


.dashboards{
  display: flex;
  flex-direction: row;
  align-items: center;
width: 100px;

}
.dashboards img{
    height:30px;
    width:30px;
}
.dropdown-content1 {
  display: flex;
  flex-direction: row;
align-items: center;
  background: white;
  justify-content:space-evenly;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
    position:absolute;
  width:100%;
  margin-top:70px;
}


.dropdown-content1 >a {
    color: gray;
  
  text-decoration: none;
    display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
      font-family: 'Gilroy', sans-serif;
  font-size: 12px;

  height:60px;
}
.dropdown-content1 a:hover {color: black;}

.dropdown-content3 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
align-items: center;
  background: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
      position:absolute;
  width:100%;
  margin-top:70px;
}


.dropdown-content3 >li {
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
  width: 180px;
  height:60px;
  opacity: 0.8;
  list-style:none;
     
    cursor: default;

}
.d1{
color:gray;
text-decoration:none;
}
.d2{
color:gray;
text-decoration:none;
}
.d1:hover {color: black;cursor: pointer;}
.d2:hover {color: black;cursor: pointer;}
 @media (max-width: 1024px) {
    .designing .link1 {
        display: none;
        
    }
    .designing .link2 {
        display: none;
    }
    .designing .link3 {
        display: none;
    }
}


}         

          `} </style>
    
    </div>
			)
	}
}
export default Navigation;