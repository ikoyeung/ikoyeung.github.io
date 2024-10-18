const getElements = () => {
  const nav = document.querySelector(".navbar");
  const menuBtn = document.querySelector("#menu-btn");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    nav.classList.remove("active");
  });
};

// const fetchHeader = async () => {
//   try {
//     const res = await fetch("../header.html");
//     const template = await res.text();
//     const parse = new DOMParser();
//     const html = parse.parseFromString(template, "text/html");
//     const header = html.querySelector("body header");

//     document.body.prepend(header);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const fetchFooter = async () => {
//   try {
//     const res = await fetch("../footer.html");
//     const template = await res.text();
//     const parse = new DOMParser();
//     const html = parse.parseFromString(template, "text/html");
//     const footer = html.querySelector("body footer");

//     document.body.append(footer);
//   } catch (err) {
//     console.log(err);
//   }
// };

const headerElement = document.querySelector("header");
const footerElement = document.querySelector("footer");

const fetchHeader = async () => {
  try {
    const res = await fetch("../header.txt");
    const template = await res.text();

    headerElement.innerHTML = template;
  } catch (err) {
    console.log(err);
  }
};

const fetchFooter = async () => {
  try {
    const res = await fetch("../footer.txt");
    const template = await res.text();

    footerElement.innerHTML = template;
  } catch (err) {
    console.log(err);
  }
};

fetchHeader().then(getElements);
fetchFooter();
