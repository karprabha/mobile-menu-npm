import "./styles/style.css";

const mobileMenu = () => {
    const menuItemsContainer = document.querySelector(".menu-items-container");
    const dropDownToggler = document.querySelector(".drop-down-toggle");
    const dropDownContainer = document.querySelector(".drop-down-container");
    const dropDownItemsContainer = document.querySelector(
        ".drop-down-items-container"
    );

    dropDownToggler.addEventListener("click", () => {
        dropDownContainer.classList.toggle("show-menu");
    });

    const moveItemsToDropDown = (itemCount) => {
        while (menuItemsContainer.childElementCount > itemCount) {
            const lastChild = menuItemsContainer.lastElementChild;
            dropDownItemsContainer.appendChild(lastChild);
        }
    };

    const addItemsFromDropDown = (itemCount) => {
        while (
            menuItemsContainer.childElementCount < itemCount &&
            dropDownItemsContainer.childElementCount !== 0
        ) {
            const lastChild = dropDownItemsContainer.lastElementChild;
            menuItemsContainer.appendChild(lastChild);
        }
    };

    const adjustMenuItems = () => {
        const currentWidth = menuItemsContainer.offsetWidth;
        const minItemWidth = 120;

        const itemCount = Math.floor(currentWidth / minItemWidth);

        if (menuItemsContainer.childElementCount > itemCount)
            moveItemsToDropDown(itemCount);
        else if (menuItemsContainer.childElementCount < itemCount)
            addItemsFromDropDown(itemCount);

        if (dropDownItemsContainer.childElementCount === 0)
            dropDownToggler.classList.add("hidden");
        else dropDownToggler.classList.remove("hidden");
    };

    window.addEventListener("resize", adjustMenuItems);
    adjustMenuItems();
};

export default mobileMenu;
