import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
// import { Nav } from "@/components/ui/Nav";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
// import { FloatingNav } from "@/components/ui/FloatingNav";
// import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={[{name: 'Home', link: '/', icon: <FaHome />}]}
        
        /> */}
        <Nav />
        <Hero />
        <Grid />
        <Services />
        <RecentProjects />
        <Client />
        <Footer />
      </div>
    </main>
  );
}
