import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Page1 from "../components/Page1";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Page1 />
    </div>
  );
}
