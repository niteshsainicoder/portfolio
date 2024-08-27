

function NavItem({ item }) {
  const scrollToDiv = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the offset to scroll the section into the center of the viewport
      const offset = element.offsetTop - (window.innerHeight / 2) + (element.offsetHeight / 2);
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div onClick={() => { scrollToDiv(item) }} className=" w-fit h-fit hover:scale-105 hover:cursor-pointer hover:text-neutral-500 ">
      {item}
    </div>
  )
}

export default NavItem
