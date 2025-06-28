const message = "hello";
const sendInterval = 5000; // 5 seconds

const sendMessage = () => {
  const textbox = document.querySelector('[role="textbox"]');
  if (!textbox) {
    console.error("❌ Textbox not found. Make sure you're in an open DM.");
    return;
  }

  // Focus and simulate typing
  textbox.focus();

  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(textbox);
  sel.removeAllRanges();
  sel.addRange(range);

  document.execCommand("insertText", false, message);

  // Wait a bit for DOM update
  setTimeout(() => {
    const divs = document.querySelectorAll("div");
    let sendBtn = null;

    divs.forEach(div => {
      if (div.textContent.trim().toLowerCase() === "send") {
        sendBtn = div;
      }
    });

    if (sendBtn) {
      sendBtn.click();
      console.log("✅ Message sent:", message, new Date().toLocaleTimeString());
    } else {
      console.error("❌ Send div not found.");
    }
  }, 300);
};

const intervalId = setInterval(sendMessage, sendInterval);

// To stop it later:
clearInterval(intervalId);
