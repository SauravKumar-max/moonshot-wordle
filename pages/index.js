import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { WordBoxes } from "@/components/WordBoxes";
import { KeyBoard } from "@/components/KeyBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Wordle Game</title>
      </Head>
      <main>
        <Navbar />
        <WordBoxes />
        <KeyBoard />
        <ToastContainer />
      </main>
    </>
  );
}
