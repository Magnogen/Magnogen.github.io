let me = document.querySelector("[nav]");
let path = me.getAttribute('path').split(/[\/\\]/);
let rules = {};
for (let rule of me.getAttribute('rules').split(","))
  rules[rule.split(":")[0]] = rule.split(":")[1];

let html = "", upto = "";
for (let node of path) {
  let css = "";
  if (rules.hasOwnProperty(node)) {
    upto += rules[node] + "/";
    if (rules[node].charAt(0) == ".")
      css = rules[node].slice(1);
  } else upto += node + "/";
  html += `<a href="${upto.slice(0, -1)}"${css == "" ? "" : ` class="${css}"`}>${node}</a>/`;
}

html = `<nav>${html.slice(0, -1)}</nav>`;

me.insertAdjacentHTML("afterend", html);
me.remove();
