let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
 
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg"
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px"
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%"
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  }
};





// ab hum saare filters js ke through create karenge 
// pehle humne ek object create kardiya jisme saari properties rakhnge

const imginput = document.querySelector("#image-input")
const imagecanvas= document.querySelector("#image-canvas");
const filtersContainer = document.querySelector(".filters");
const canvasCtx = imagecanvas.getContext("2d")
const resetButton = document.querySelector("#reset-btn");
const downloadButton = document.querySelector("#download-btn");
const presetsContainer = document.querySelector(".presets");
let file = null
let image = null

function createFilterElement(name, unit = "%",value,min,max){
    const div = document.createElement("div");
    div.classList.add("filter")

const input = document.createElement("input");
input.type = "range";
input.min = min;
input.max = max;
input.value = value;
input.id = name;

const p = document.createElement("p");
p.innerText = name;

div.appendChild(p);
div.appendChild(input);

input.addEventListener("input",(event) => {
  // console.log(filters[name])
  // filters[name].value = input.value;
  filters[name].value = event.target.value;

  applyFilters();
  // console.log(name,filters[name]);
  // jab main slider mein kuch change karha hu toh uski value finally filters object ke andar change hojayegi 
  // ab hume is value change ko apply karna hai 
}) 
// kyuki hume chahiye ki kiai function se nhi brightness ya koi bhi filter hamare filter bar se ho 
// ab jo bhi values change horhi hain usse hume apne filters element ke andar 



return div

// ab ye jitni bhi properties hai filter mein eg brightness insab ke liye filters banane hain 
    
}

// Object.keys(filters) se hume object ki saari properties milti hain
// Ye properties ek array ke form mein hoti hain
// Har property ek string hoti hai (jaise: "brightness", "contrast", etc.)

// Object.keys(filters).forEach(filter => {
//     // console.log(filter); //ispe hume saare filters ke naam miljate 
//     console.log(filters[filter]); //isse hume saare filters ki value milti hai unke andar ki properties like min max 
//     // just like accessing afilters value 
//     // console.log(filters["brightness"])

// })





Object.keys(filters).forEach(key => {
    // console.log(key,filters[key]); //key print karwaya aur uske andar ki value bhi 
    const filterElement = createFilterElement(
  key,
  filters[key].unit,
  filters[key].value,
  filters[key].min,
  filters[key].max
  );
    filtersContainer.appendChild(filterElement)

    // isse saari ki saari properties create hojayengi 


})





function createFilters(){
  Object.keys(filters).forEach(key => {
    // console.log(key,filters[key]); //key print karwaya aur uske andar ki value bhi 
    const filterElement = createFilterElement(
  key,
  filters[key].unit,
  filters[key].value,
  filters[key].min,
  filters[key].max
  );
    filtersContainer.appendChild(filterElement)

    // isse saari ki saari properties create hojayengi 


})

}
createFilters();


// canvas se hum runtime mein ui ko change kar sakte hain 
// ab mujhe chahiye ki jo image main select karu uska preview mujhe dikhna chalu hojana chahiye 

imginput.addEventListener("change", (event) => {
    // console.log("change event fired")
    const name = event.target.id;
    const value = event.target.value;
    const file = event.target.files[0]
    // ab jaise hi file select hogi hum placeholder ko hata denge 
    const imageplaceholder = document.querySelector(".placeholder")
    imageplaceholder.style.display = "none";
    // console.log(file)
    imagecanvas.style.display = "block";

     const img = new Image()
     img.src = URL.createObjectURL(file)
     
    //  callback
     img.onload = () => {
        image = img
        imagecanvas.width = img.width;
        imagecanvas.height = img.height;
        canvasCtx.drawImage(img,0,0)

     }
 })
// pehle null value thi jabtak img choose nhi hui thi phir choose hui toh change hui value null se toh uspe event hoga 

function applyFilters() {
  // canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    canvasCtx.filter = `
        brightness(${filters.brightness.value}${filters.brightness.unit})
        contrast(${filters.contrast.value}${filters.contrast.unit})
        saturate(${filters.saturation.value}${filters.saturation.unit})
        hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
        blur(${filters.blur.value}${filters.blur.unit})
        grayscale(${filters.grayscale.value}${filters.grayscale.unit})
        sepia(${filters.sepia.value}${filters.sepia.unit})
        opacity(${filters.opacity.value}${filters.opacity.unit})
        invert(${filters.invert.value}${filters.invert.unit})
    `;

    canvasCtx.drawImage(image, 0, 0);
}

resetButton.addEventListener("click", () => {
  filters = {
    brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
 
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%"
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg"
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px"
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%"
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%"
  }
  }

  applyFilters();

  filtersContainer.innerHTML = ""
  createFilters();
})


downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imagecanvas.toDataURL();
  link.click();
});


const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  drama: {
    brightness: 90,
    contrast: 140,
    saturation: 110,
    hueRotation: 0,
    blur: 0,
    grayscale: 10,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 110,
    contrast: 90,
    saturation: 80,
    hueRotation: 10,
    blur: 0,
    grayscale: 20,
    sepia: 40,
    opacity: 100,
    invert: 0
  },

  oldSchool: {
    brightness: 95,
    contrast: 85,
    saturation: 70,
    hueRotation: 0,
    blur: 0,
    grayscale: 60,
    sepia: 60,
    opacity: 100,
    invert: 0
  },

  cool: {
    brightness: 100,
    contrast: 110,
    saturation: 120,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  warm: {
    brightness: 105,
    contrast: 105,
    saturation: 110,
    hueRotation: 20,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0
  },

  fade: {
    brightness: 110,
    contrast: 80,
    saturation: 90,
    hueRotation: 0,
    blur: 0,
    grayscale: 10,
    sepia: 20,
    opacity: 90,
    invert: 0
  },

  noir: {
    brightness: 100,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  invertPro: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 100
  }
};


Object.keys(presets).forEach(presetName => {
  const presetButton = document.createElement("button");
  presetButton.classList.add("preset-btn", "btn");
  presetButton.innerText = presetName;

  presetsContainer.appendChild(presetButton);
  presetButton.addEventListener("click", () => {

  const preset = presets[presetName];

  Object.keys(preset).forEach(filterName => {
    filters[filterName].value = preset[filterName];
  });

  applyFilters();
});

filtersContainer.innerHTML = "";
createFilters();

});
