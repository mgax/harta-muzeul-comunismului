(function() {

function extract(block) {
  const content = block.firstChild.innerHTML;
  block.innerHTML = "<a href='#'>modal please</a>";
  const button = block.firstChild;
  button.addEventListener("click", (event) => {
    console.log(content);
  });
  // block.parentNode.remove(block);
}

function inject(src, ready) {
  // https://stackoverflow.com/a/8578840
  const script = document.createElement("script");
  script.async = true;
  script.onload = ready;
  script.src = src;
  document.querySelector("head").appendChild(script);
}

function install_modal() {
  // https://micromodal.now.sh/
  const html = `
    <div id="modal-1" aria-hidden="true">
      <div tabindex="-1" data-micromodal-close>
        <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
          <header>
            <h2 id="modal-1-title">
              Modal Title
            </h2>
            <button aria-label="Close modal" data-micromodal-close></button>
          </header>
          <div id="modal-1-content">
            Modal Content
          </div>
        </div>
      </div>
    </div>
  `;
  const temp = document.createElement("div");
  temp.innerHTML = html;
  const modal_div = temp.querySelector("#modal-1")
  document.querySelector("body").append(modal_div);
  MicroModal.init({
    debugMode: true,
  });
}

function main() {
  install_modal();

  for (let block of [... document.querySelectorAll(".wp-block-group")]) {
    extract(block);
  }

  console.log("Muzeul Comunismului The Map Was Here Again!")
}

window.addEventListener("load", () => {
  inject("https://unpkg.com/micromodal@0.4.6/dist/micromodal.js", main);
});

})();
