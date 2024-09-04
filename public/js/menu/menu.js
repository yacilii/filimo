let Menu = async () => {
    let menu_link = "";
    try{
        let data = await fetch("http://localhost:3001/menu_link");
        let res = await data.json();
        menu_link = res.map((item) => {
            return `<div class="drop w-[100%] p-[8px] text-xs font-light hover:bg-[#474747] hover:text-white  ease-out duration-300"><a href=${item.href} >${item.name}</a></div>`;
        });
        document.querySelector(".menu_link").insertAdjacentHTML("afterbegin", menu_link.join(""));
    }catch (error) {
        console.log(error.message);
    }
};
export default Menu;