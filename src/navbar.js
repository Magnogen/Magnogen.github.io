let me = document.querySelector("[nav]");
let path = me.getAttribute('path').replace(/\s+/g, '').split(/[\/\\]/);
let rules = {};
for (let rule of me.getAttribute('rules').split(","))
  rules[rule.split(":")[0]] = rule.split(":")[1];

let html = "", upto = "";
for (let node of path) {
  let css = "";
  if (rules.hasOwnProperty(node)) {
    if (rules[node].includes("."))
      css = rules[node].split(".")[1];
    upto += rules[node].split(".")[0] + "/";
  } else upto += node + "/";
  html += `<a href="${upto.slice(0, -1)}"${css == "" ? "" : ` class="${css}"`}>${node}</a>/`;
}

html = `<nav>${html.slice(0, -1)}</nav>`;

me.insertAdjacentHTML("afterend", html);
me.remove();
