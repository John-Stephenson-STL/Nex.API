import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';

const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      {/* <link rel="stylesheet" 
            href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      /> */}
      <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
    />
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;