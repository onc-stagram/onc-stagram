import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>ONC Stagraam</title>
        <meta name="description" content="Create by nextjs app"/>
        <meta></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
           <Header/>

               {/*   Feed  */}
            <Feed />               
               {/* Modal*/}
           
    </div>
  );
}
