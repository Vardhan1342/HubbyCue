import AddNew from "@/components/AddNew";
import Community from "@/components/Community";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Features />
      <AddNew />
      <Testimonial />
      <Community />
     <Footer />
    </main>
  );
}
