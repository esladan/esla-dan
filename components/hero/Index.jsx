const Index = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <div className="img-box flex justify-center " id="contacts">
                <img src="./imgs/me.svg" alt="" width={"60%"} />
            </div>
            <p>Hi, I'm Esla</p>

            <ul className="grid grid-cols-4 my-5" id="contacts">
                <li>
                    <a href="">
                        <img src="./imgs/contact/GitHub.svg" alt="" width={"70%"} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./imgs/contact/Letter.svg" alt="" width={"70%"} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./imgs/contact/call.svg" alt="" width={"70%"} />

                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="./imgs/contact/LinkedIn 2.svg" alt="" width={"70%"} />

                    </a>
                </li>

            </ul>

            <div className="flex justify-center my-5">


                <h1 className=" text-[3rem] sm:text-[5rem] biggest text-center  lg:w-6/12 ">BUILDING PRODUCTS ADDING VALUE</h1>

            </div>

        </div>
    );
}

export default Index;