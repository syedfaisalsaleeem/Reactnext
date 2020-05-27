import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Landingcontent from '../components/landingcontent';
import Head from 'next/head';
const Index =() => (
<div>
<Head>
<title>Main Page </title>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
</Head>
<main>
<Navigation/> 

<Landingcontent/>
<Footer/>
</main>
</div>
	)
export default Index;
