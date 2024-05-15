"use strict";
//data
// variable imageFiles gets declared and assigned an array []
// which contains objects representing an image file
let imageFiles = [
  {
    id: "1",
    path: "https://placehold.co/100x300",
    description: "placeholder 1",
  },
  {
    id: "2",
    path: "https://placehold.co/200x300",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x300",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/400x300",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/500x300",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/600x300",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/700x300",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/800x300",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/900x300",
    description: "placeholder 9",
  },
  {
    id: "10",
    path: "https://placehold.co/950x300",
    description: "placeholder 10",
  },
];

let imageList = document.getElementById("imageList");
let imageContainer = document.getElementById("imageContainer");
let displayImageButton = document.getElementById("displayImageBtn");

window.onload = function () {
  createImageList();

  displayImageButton.onclick = displayMatchingImages;
};

function createImageList() {
  for (const imageFile of imageFiles) {
    let imageOption = new Option("option");

    imageOption.innerText = imageFile.description;
    imageOption.value = imageFile.description;


    imageList.appendChild(imageOption);
  }
}

function displayMatchingImages() {

  for (const imageFile of imageFiles) {
    if (imageFile.description == imageList.value) {
      let image = document.createElement("img");
      image.src = imageFile.path;
      image.alt = imageFile.description;

      imageContainer.appendChild(image);
    }
  }
}
