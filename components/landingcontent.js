import React,{Component} from 'react';
import { Icon } from 'semantic-ui-react'
class Landingcontent extends React.Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div>
			<div className="main1">
				<div className="c1">
					<div className="c1main">
						<div className="m1">
						<p><b>112</b></p>
						<p> Matches for exposed Information</p>
						<hr/>
						</div>
						<div className="m2">
						<p><b>63</b></p>
						<p> Passwords found</p>
						</div>
						<div className="m3">
						<p><b>29</b></p>
						<p> Personal Information</p>
						</div>
						<div className="m4">
						<p><b>20</b></p>
						<p>Hacker Group Targeting</p>
						</div>
						<div className="m5">
						<a>
						<pre> View <b>Exposed Information</b> <Icon flipped='horizontally' fitted name='caret left' size="large" />
						</pre>
						</a>
						</div>
					</div>
				</div>
				<div className="c2">
					<div className="c1main">
						<div className="m1">
						<p><b>31</b></p>
						<p> Visible assets</p>
						<hr/>
						</div>
						<div className="m2">
						<p><b>31</b></p>
						<p> Confirmed assets</p>
						</div>
						<div className="m3">
						<p><b>0</b></p>
						<p> Pending assets</p>
						</div>
						<div className="m15">
						<a>
						<pre> View <b>Assets</b> <Icon flipped='horizontally' fitted name='caret left' size="large" />
						</pre>
						</a>
						</div>
					</div>
				</div>
				

				<div className="c3">
					<div className="c1main">
						<div className="m1">
						<p><b>0</b><p1><b>/</b></p1><p2><b>16</b></p2></p>
						<p> Assets in infrastructure testing</p>
						<hr/>
						</div>
						<div className="m2">
						<p><b>0</b><p1><b>/</b></p1><p2><b>1</b></p2></p>
						<p> Assets in application testing</p>
						</div>
						<div className="m3">
						<p><b>0</b><p1><b>/</b></p1><p2><b>1</b></p2></p>
						<p> Assets in penetration testing</p>
						</div>

						<div className="m15">
						<a>
						<pre> View <b>Continuous testing</b> <Icon flipped='horizontally' fitted name='caret left' size="large" />
						</pre>
						</a>
						</div>
					</div>
				</div>
			


			</div>
			<div className="needhelp">
				<div className="needhelp1">
					<h1> Need help? </h1>
					<p>You can get analyst support using our<br/>
					online chat or organise a call to our expert.
					</p>
				</div>
				<button className="btnsuccess">Support</button>
			</div>


			<style jsx>{`

				.btnsuccess {
				border: 2px solid black;
				background-color: white;
				color: black;
				padding: 14px 28px;
				font-size: 16px;
				cursor: pointer;
				}

				.btnsuccess:hover{
	  				border-color: gray;
  					color: gray;
						}
				.needhelp1{
							display:flex;
							flex-direction:column;
							width:100%;
							
							height:200px;
							
		
						}
				.needhelp{
					
					position:relative;
					
					height:400px;
					margin-top:40px;
					margin-left:50px;

				}
				.m5 a{
					color:gray;
				}
				.m5 a:hover{
					color:black;
					text-decoration:none;
					cursor:pointer;
				}
				.m15 a{
					color:gray;
				}
				.m15 a:hover{
					color:black;
					text-decoration:none;
					cursor:pointer;
				}
				.c1main{
					margin-left:15px;
					margin-top:30px;
					width:90%;
				}
				.m1 >p{
					line-height: 10px;
				}
				.m2{
					margin-top:15px;
				}
				.m2 >p{
					line-height: 10px;
				}
				.m3{
					margin-top:20px;
				}
				.m3 >p{
					line-height: 10px;
				}
				.m4{
					margin-top:20px;
				}
				.m4 >p{
					line-height: 10px;
				}
				.m5{
					display:flex;
					align-items:flex-end;
					justify-content:flex-end;
					margin-top:30px;


				}
				.m15{
					display:flex;
					align-items:flex-end;
					justify-content:flex-end;
					margin-top:90px;


				}

				
			
				.main1{

					display:flex;
					flex-direction:row;
					height:500px;
					margin-top:80px;
					align-items:center;
					justify-content:center;
					
					


				}
				.c1{
					display:flex;
					margin-top:60px;
					background:white;
					height:350px;
					width:350px;
					margin-left:10px;
					 border: 0.5px solid #dddfe6;;
					 box-shadow: 0 20px 60px 0 rgba(163, 171, 186, 0);
					
				}
				.c2{
					display:flex;
					width:350px;
					margin-left:10px;
					background:white;
					height:350px;
					 margin-top:60px;
					 border: 0.5px solid #dddfe6;;
					 box-shadow: 0 20px 60px 0 rgba(163, 171, 186, 0);
					
				}
				.c3{
					display:flex;
					width:350px;
					margin-left:10px;
					background:white;
					height:350px;
					 margin-top:60px;
					 border: 0.5px solid #dddfe6;;
					 box-shadow: 0 20px 60px 0 rgba(163, 171, 186, 0);
				}
				 @media (max-width: 1100px) {

					.c1{
						margin-left:0px;
					}
				    .main1{
				    display:flex;
					flex-direction:column;
					height:1400px;
					margin-top:80px;
					align-items:center;
					justify-content:space-around;
					width:100%;
					
				    }

					}
				`}</style>

			</div>

		)
	}
}
export default Landingcontent