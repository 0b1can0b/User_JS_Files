setTimeout(() => {
  document.querySelector("body").onpaste = () => {
    const bodyFun = () => {
      let i1 = 0;
      const popEle = document.querySelector(".popup-send-photo");
      if (popEle) {
        let i2 = 0;
        function mainFun() {
          const checkbox = document.querySelector("#input-compress-items");
          const inpEle = document.querySelector(
            '[data-placeholder="Add a caption..."]'
          );
          if (checkbox && checkbox.checked == true) {
            checkbox.click();
            inpEle.focus();
          } else {
            if (i2 > 20) {
              console.warn("Main Function Failed");
              return;
            }
            i2++;
            setTimeout(() => mainFun(), 100);
          }
        }
        mainFun();
      } else {
        if (i1 > 20) {
          console.warn("Body Function Failed");
          return;
        }
        i1++;
        setTimeout(() => bodyFun(), 100);
      }
    };
    bodyFun();
  };
}, 1000);
