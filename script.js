let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (onoff) {
      if (e.target.innerHTML == "=") {
        string = eval(string);
      } else if (e.target.innerHTML == "C") {
        string = "";
      } else if (e.target.innerHTML == "←") {
        string = string.substring(0, string.length - 1);
      } else {
        console.log(e.target);
        string += e.target.innerHTML;
      }
      document.querySelector("input").value = string;
      pressedKey(e.target.innerHTML);
    }
    // action();
  });
});

// document.addEventListener("keypress", (e) => {
//   if (e.key == "Enter") {
//     string = eval(string);
//   } else if (e.key == "C" || e.key == "c") {
//     string = "";
//   } else if (e.key === "Backspace") {
//     // string = string.substring(0, string.length - 1);
//     string = string.slice(0, -1);
//   } else {
//     console.log(e.target);
//     string += e.key;
//   }
//   document.querySelector("input").value = string;
// });
document.addEventListener("keydown", (e) => {
  //   console.log("Key pressed:", e.key); // Debugging log

  if (onoff) {
    if (e.key === "Enter") {
      string = eval(string);
    } else if (e.key === "C" || e.key === "c") {
      string = "";
    } else if (e.key === "Backspace") {
      string = string.slice(0, -1);
    } else if (
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "*" ||
      e.key === "/" ||
      e.key === "."
    ) {
      string += e.key;
    }

    document.querySelector("input").value = string;
    pressedKey(e.key);
  }
});

const pressedKey = function (key) {
  switch (key) {
    case "1":
      document.querySelector(".one").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".one").classList.remove("pressed");
      }, 300);
      break;
    case "2":
      document.querySelector(".two").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".two").classList.remove("pressed");
      }, 300);
      break;
    case "3":
      document.querySelector(".three").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".three").classList.remove("pressed");
      }, 300);
      break;
    case "4":
      document.querySelector(".four").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".four").classList.remove("pressed");
      }, 300);
      break;
    case "5":
      document.querySelector(".five").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".five").classList.remove("pressed");
      }, 300);
      break;
    case "6":
      document.querySelector(".six").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".six").classList.remove("pressed");
      }, 300);
      break;
    case "7":
      document.querySelector(".seven").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".seven").classList.remove("pressed");
      }, 300);
      break;
    case "8":
      document.querySelector(".eight").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".eight").classList.remove("pressed");
      }, 300);
      break;
    case "9":
      document.querySelector(".nine").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".nine").classList.remove("pressed");
      }, 300);
      break;
    case "0":
      document.querySelector(".zero").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".zero").classList.remove("pressed");
      }, 300);
      break;
    case "00":
      document.querySelector(".dzero").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".dzero").classList.remove("pressed");
      }, 300);
      break;
    case "+":
      document.querySelector(".plus").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".plus").classList.remove("pressed");
      }, 300);
      break;
    case "-":
      document.querySelector(".minus").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".minus").classList.remove("pressed");
      }, 300);
      break;
    case "*":
      document.querySelector(".multi").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".multi").classList.remove("pressed");
      }, 300);
      break;
    case "/":
      document.querySelector(".divide").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".divide").classList.remove("pressed");
      }, 300);
      break;
    case "=":
      document.querySelector(".equal").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".equal").classList.remove("pressed");
      }, 300);
      break;
    case "Enter":
      document.querySelector(".equal").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".equal").classList.remove("pressed");
      }, 300);
      break;
    case ".":
      document.querySelector(".dot").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".dot").classList.remove("pressed");
      }, 300);
      break;
    case "c":
      document.querySelector(".c").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".c").classList.remove("pressed");
      }, 300);
      break;
    case "C":
      document.querySelector(".c").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".c").classList.remove("pressed");
      }, 300);
      break;
    case "←":
      document.querySelector(".back").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".back").classList.remove("pressed");
      }, 300);
      break;
    case "Backspace":
      document.querySelector(".back").classList.add("pressed");
      setTimeout(() => {
        document.querySelector(".back").classList.remove("pressed");
      }, 300);
      break;
  }
};

let onoff = false;
let gate = document.querySelector(".onoff").addEventListener("click", () => {
  onoff = !onoff;
  action(onoff);
  console.log(onoff);
});

const action = function (onoff) {
  if (onoff) {
    // document.querySelector("input".classList.remove("off"));
    document.querySelector("input").classList.add("on");
    document.querySelector("input").placeholder = "calculate...";
    document.querySelector(".onLight").classList.add("on-green");
  } else {
    string = "";
    document.querySelector("input").value = string;
    document.querySelector("input").classList.remove("on");
    document.querySelector("input").placeholder = "";
    document.querySelector(".onLight").classList.remove("on-green");
    document.querySelector(".offLight").classList.add("alert");
    // document.querySelector(".input").classList.add("off");
    // document.querySelector(".offLight").classList.add("alert");
    setTimeout(() => {
      document.querySelector(".offLight").classList.remove("alert");
    }, 1000);
  }
};
