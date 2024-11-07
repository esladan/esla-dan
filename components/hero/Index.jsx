import Link from "next/link";

const Index = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <div className="img-box flex justify-center " id="contacts">
                <img src="./imgs/esla.jpeg" alt="" width={"60%"} className="rounded-full" />
            </div>
            <p>Hi, I'm Esla</p>

            <ul className="grid grid-cols-4 my-5" id="contacts">
                <li>
                    <Link href="https://github.com/esladan" >
                        <img src="./imgs/contact/GitHub.svg" alt="" width={"70%"} />
                    </Link>
                </li>
                <li>
                    <Link href="mailto:alsenad390@gmail.com">
                        <img src="./imgs/contact/Letter.svg" alt="" width={"70%"} />
                    </Link>
                </li>
                <li>
                    <Link href="phoneto:+2348135829978">
                        <img src="./imgs/contact/Call.svg" alt="" width={"70%"} />

                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/esla-dankuje-9455121b7/" >
                        <img src="./imgs/contact/LinkedIn 2.svg" alt="" width={"70%"} />

                    </Link>
                </li>

            </ul>

            <div className="flex justify-center my-5">


                <h1 className=" text-[3rem] sm:text-[5rem] biggest text-center  lg:w-6/12 ">BUILDING PRODUCTS ADDING VALUE</h1>

            </div>

        </div>
    );
}

export default Index;