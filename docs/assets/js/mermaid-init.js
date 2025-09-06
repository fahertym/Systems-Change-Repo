document.addEventListener("DOMContentLoaded", function () {
  if (window.mermaid) {
    mermaid.initialize({ startOnLoad: true });
    // Convert fenced code blocks to mermaid if needed
    document.querySelectorAll("pre code.language-mermaid").forEach(function(code){
      const wrapper = document.createElement("div");
      wrapper.className = "mermaid";
      wrapper.textContent = code.textContent;
      const pre = code.parentElement;
      pre.parentElement.replaceChild(wrapper, pre);
    });
    mermaid.run();
  }
});
