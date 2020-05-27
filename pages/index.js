import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Landingcontent from '../components/landingcontent';
import Head from 'next/head';
import Link from 'next/link';
const Index =() => (
<div>
<Head>
<title>Main Page </title>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
</Head>
<main>
<Navigation/> 

<Landingcontent/>
<Link href="/dashboardpage">
	<a>faisal</a>
</Link>
<Footer/>
</main>
</div>
	)
export default Index;
