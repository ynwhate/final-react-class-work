import monku from "../public/monku.jpg";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center bg-[#ffb703] mt-0 w-full">
        <div className="min-w-fit">
          <a href="/">
            <img className="h-14 m-4 rounded-lg" src={monku} alt="" />
          </a>
        </div>
        <div className="md:static md:min-h-fit absolute bg-inherit min-h-[30vh] left-0 top-[-100%] w-full flex items-center px-5">
          <ol className="flex md:flex-row flex-col md:items-center  md:gap-[4vw] gap-6 text-[#023047]">
            <li>
              <a
                className="hover:text-[#219ebc]"
                href="/products"
                target="_blank"
              >
                Our Products
              </a>
            </li>
            <li>
              <a className="hover:text-[#219ebc]" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#219ebc]" href="#">
                Contact Us
              </a>
            </li>
          </ol>
        </div>
        <div className="flex items-center gap-6 pr-4">
          <button className="bg-[#219ebc] px-4 py-2 md:rounded-full rounded-full text-[#023047] mr-5 mb-2 mt-2 md:w-[6rem]">
            Sign In
          </button>
          <i
            onClick={() => onToggleMenu(globalThis)}
            className="fa fa-bars text-xl cursor-pointer md:hidden"
          ></i>
        </div>
      </div>
    </header>
  );
}
export default Header;
