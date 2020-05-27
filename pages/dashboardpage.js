import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Dashboardheading from '../components/Dashboard/dashboardheading';
import Dashboardcontent from '../components/Dashboard/dashboardcontent';
import Head from 'next/head';
class Dashboard extends React.Component{
    constructor(props){
        super()

    }
render(){
    return(
        <div>
            <Head>
            <title>Dashboard</title>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            
</Head>
            <main>
            <Navigation/> 
            <Dashboardheading/>
           
            <Footer/>
            </main>
        </div>
    )


    }



}
export default Dashboard;