import About from "@/components/about/About";
import InfoBox from "@/components/skills_tools/InfoBox";
import SkillsTools from "@/components/skills_tools/SkillsTools";
import Index from "@/components/hero/Index";
import Top from "@/components/nav/Top";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Project";
import Link from "next/link";

const index = () => { 
  
  return ( 
    <div>
    <div className="px-2 sm:px-5 md:px-10 lg:px-20 xl:px-64 relative">
      <div className="absolute w-full h-full left-0  bg-[url('/imgs/bg-icons.svg')] bg-blend-multiply  -z-10 bg-[#000000b4]"></div>
      <Top/>
      <Index/>
    </div>
    <div className="px-2 sm:px-5 md:px-10 lg:px-20 xl:px-64 rounded bg-[#2B2B2B] ">
    <About/>
  </div>
  <div className="px-2 sm:px-5 md:px-10 lg:px-20 mt-10 xl:px-64 " id="skill_and_tools">
  <SkillsTools/>

  </div>
  <div className="px-2 sm:px-5 md:px-10 lg:px-20 xl:px-64 mb-20 rounded bg-[#2B2B2B]">
    <InfoBox/>
  </div>
 
  <div className="" id="experience">
  <Experience/>
  </div>

  <div className="project" id="project">
  <Projects/>
  </div>

  <footer className="bg-gray-300 p-8 mt-10 text-center text-black rounded-tl-xl rounded-tr-xl">
    <p>This is not the end but the beginning of our Journey  together. 
Make sure you <Link href={'#contacts'} className="text-blue-600">contact me</Link>    </p>
  </footer>
 
  </div>
   );
}
 
export default index;

