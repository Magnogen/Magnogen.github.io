(_=>{
  let me = document.currentScript;
  let path = me.getAttribute('path')
               .split(/\s+[\/]\s+/);
  let rules = {};
  for (let rule of me.getAttribute('rules').split(","))
    rules[rule.split(":")[0]] = rule.split(":")[1];

  let html = "", upto = "";
  for (let node of path) {
    let css = "";
    if (rules.hasOwnProperty(node)) {
      if (rules[node].includes("."))
        css = rules[node].split(".")[1];
      upto += (rules[node].split(".")[0]=="_"?node:rules[node].split(".")[0]) + "/";
    } else upto += node + "/";
    html += `<a href="${upto.slice(0, -1).toLowerCase()}"${css == "" ? "" : ` class="${css}"`}>${node}</a>/`;
  }

  html = `<div nav><nav>${html.slice(0, -1)}</nav></div>`;

  me.insertAdjacentHTML("afterend", html);
  me.remove();
})();


