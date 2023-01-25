import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import GamePanel from "@/components/GamePanel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Result } from "@/components/Modals/Result";
import { useGame } from "@/context/game.context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { result } = useGame();
  return (
    <>
      <Head>
        <title>Wordle Game</title>
      </Head>
      <main>
        <Navbar />
        <GamePanel />
        <ToastContainer />
        {result.show && <Result />}
      </main>
    </>
  );
}
