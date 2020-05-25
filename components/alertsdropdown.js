import React,{Component} from 'react';
class Alertsdropdown extends React.Component{
	constructor(props){
		super(props)

	}


  render(props){
  return(
            <div className="dropdown-content"      style={{display:this.props.call?"flex":"none"}}
            onMouseEnter={console.log(this.props.clickt)} onMouseLeave={this.props.clickingf } 
                 >
            <li className="spacer1"></li>
            <a href="#" className="dashboards">
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

          <style jsx>{`
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
              height:70px;
            }

            /* Links inside the dropdown */
            .dropdown-content >a {
              color: black;
              text-decoration: none;
                display:flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
                  font-family: 'Gilroy', sans-serif;
              font-size: 14px;
              width: 170px;
              height:70px;
            }

            /* Change color of dropdown links on hover */
            .dropdown-content a:hover {background-color: #ddd;}

            /* Show the dropdown menu on hover */


            /* Change the background color of the dropdown button when the dropdown content is shown */
            .link1:hover {background-color: #3e8e41;}


            .dashboards{
              display: flex;
              flex-direction: row;
              align-items: center;
            width: 100px;

            }


            `}</style>
        


        </div>
  )

  }
}

export default Alertsdropdown;