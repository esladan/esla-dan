const SkillsTools = () => {
    return (  
        <div className="relative py-10 pb-5">
            <h2 className="text-3xl font-bold ">Skills & Tools</h2>
            <div className="relative md:w-[105%]">

          
            <div className="box  md:-ms-12 overflow-x-scroll  whitespace-nowrap scrollbar-hide ">
                
                <SkillsToolsBox filename={'Js.svg'} custom={'-left-14'}/>
                <SkillsToolsBox filename={'Nodejs.svg'}/>

                <SkillsToolsBox filename={'Python.svg'}/>

                <SkillsToolsBox filename={'React.svg'}/>
                <SkillsToolsBox filename={'Mongodb.svg'}/>

                <SkillsToolsBox filename={'Machine-learning.svg'}/>
                <SkillsToolsBox filename={'Backend-development.svg'} custom={'-right-14'}/>

            

                


                
            </div>
             
            <div className="hidden md:block w-10 h-full bg-gradient-to-r from-[#000000] absolute top-0 md:-left-[60px] shadow-black"></div>
            <div className="hidden md:block w-10 h-full bg-gradient-to-l from-[#000000] absolute top-0 md:-right-[10px] shadow-black"></div>
 </div>
        </div>
    );
}
 
export default SkillsTools;

const SkillsToolsBox = ({filename, custom}) => {
    return ( 
        <div style={{...custom}} className={`w-4/12 sm:w-4/12 md:w-3/12 lg:w-2/12 bg-[#2B2B2B] aspect-square m-2 p-4 flex justify-center items-center active:m-0 active:bg-[#1d1d1d] md:${custom? custom: ''}`}>
            <img src={`./imgs/skills_tools/${filename}`} width={"80%"}  alt=""   />
        </div>
     );
}