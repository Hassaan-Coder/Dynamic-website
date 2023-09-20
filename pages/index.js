import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex-1 lg:container text-center p-0 mx-auto overflow-x-hidden overflow-auto">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
