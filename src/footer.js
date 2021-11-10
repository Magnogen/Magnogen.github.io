(_=>{
  let me = document.currentScript;
  let colors = me.getAttribute('colors').split(',').map(e=>e.trim());

  html = `
<footer class="w3-center w3-padding-64">
  <div class="w3-xlarge w3-section">
    <a style="text-decoration: none;"
      href="https://github.com/Magnogen"
    > <i class="fa fa-github w3-hover-opacity"></i> </a> &nbsp
    <a style="text-decoration: none;"
      href="https://www.youtube.com/channel/UCosxKKKPJk4aZlwF_EFe2pw"
    > <i class="fa fa-youtube-play w3-hover-opacity"></i> </a > &nbsp
    <a style="text-decoration: none;"
      href="https://www.reddit.com/user/MagnogenOnTheMoon"
    > <i class="fa fa-reddit-alien w3-hover-opacity"></i> </a>
  </div>
  <p>Follow Me On My Socials!</p>
</footer>
`;

  me.insertAdjacentHTML("afterend", html);
  me.remove();
})();


