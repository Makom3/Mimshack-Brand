const pieces = [
  {
    name: "Sepedi celebration dress",
    category: "traditional",
    categoryLabel: "Traditional",
    price: "From R1,500",
    image: "img/sepedi-dress-01.jpg",
    gallery: ["img/sepedi-dress-01.jpg", "img/sepedi-dress-02.jpg", "img/sepedi-dress-03.jpg", "img/sepedi-dress-06.jpg"],
    alt: "Handmade Sepedi celebration dress",
    description: "A joyful traditional look, tailored to your celebration."
  },
    {
    name: "Sepedi Dress",
    category: "traditional",
    categoryLabel: "Traditional",
    price: "From R1,500",
    image: "img/sepedi-dress-07.png",
    gallery: ["img/sepedi-dress-07.png", "img/sepedi-dress-08.png", "img/dress-abc-01.png", "img/dress-abc-02.png"],
    alt: "Coordinated handmade outfits for two",
    description: "Matching details and individual fits, made as a pair."
  },
  {
    name: "The occasion dress",
    category: "occasion",
    categoryLabel: "Occasionwear",
    price: "From R500",
    image: "img/dress-d-01.jpg",
    gallery: ["img/dress-d-01.jpg", "img/dress-d-02.jpg", "img/dress-d-03.jpg"],
    alt: "White handmade occasion gown with feather detail",
    description: "A show-stopping silhouette for your unforgettable moment."
  },
  {
    name: "Modern heritage dress",
    category: "traditional",
    categoryLabel: "Traditional",
    price: "From R1,200",
    image: "img/dress-ab-01.jpg",
    gallery: ["img/dress-ab-01.jpg", "img/dress-ab-02.jpg", "img/dress-ab-03.jpg", "img/dress-ab-04.jpg"],
    alt: "Colourful handmade dress with traditional-inspired details",
    description: "A fresh take on a favourite, made to fit your story."
  },
  {
    name: "Made-for-two set",
    category: "traditional",
    categoryLabel: "Traditional",
    price: "From R3,200",
    image: "img/couple-01.jpg",
    gallery: ["img/couple-01.jpg", "img/couple-02.jpg", "img/couple-03.jpg", "img/couple-04.jpg"],
    alt: "Coordinated handmade outfits for two",
    description: "Matching details and individual fits, made as a pair."
  },
  {
    name: "Plain Colour Sepheka",
    category: "traditional",
    categoryLabel: "Traditional",
    price: "From R200",
    image: "img/sepheka-01.jpg",
    gallery: ["img/sepheka-01.jpg", "img/sepheka-02.jpg", "img/sepheka-03.jpg", "img/sepheka-04.jpg"],
    alt: "Handmade Sepheka dress",
    description: "A striking traditional look, finished with thoughtful detail."
  },
  {
    name: "A little celebration",
    category: "occasion",
    categoryLabel: "Occasionwear",
    price: "From R500",
    image: "img/dress-e-01.jpg",
    gallery: ["img/dress-e-01.jpg", "img/dress-e-02.jpg", "img/dress-e-04.jpg", "img/dress-e-023.jpg"],
    alt: "Handmade special occasion dress",
    description: "A playful, made-to-measure look for their big day."
  },
  {
    name: "Matric dance look",
    category: "occasion",
    categoryLabel: "Occasionwear",
    price: "From R500",
    image: "img/matricdance-01.jpg",
    gallery: ["img/matricdance-01.jpg", "img/matricdance-02.jpg", "img/matricdance-03.jpg"],
    alt: "Handmade matric dance outfit",
    description: "A memorable, custom-fitted look for a night to celebrate."
  },
  {
    name: "The evening dress",
    category: "occasion",
    categoryLabel: "Occasionwear",
    price: "From R1,200",
    image: "img/dress-b-01.jpg",
    gallery: ["img/dress-b-01.jpg", "img/dress-b-02.jpg", "img/dress-b-03.jpg", "img/dress-b-04.jpg"],
    alt: "Handmade evening dress",
    description: "A graceful occasion piece, tailored around your style."
  },
  {
    name: "School Sweater",
    category: "everyday",
    categoryLabel: "Everyday",
    price: "From R850",
    image: "img/sweater-a-01.jpg",
    gallery: ["img/sweater-a-01.jpg", "img/sweater-a-02.jpg", "img/sweater-a-03.jpg", "img/sweater-a-04.jpg"],
    alt: "Handmade sweater",
    description: "An easy favourite, thoughtfully made for everyday."
  },
  {
    name: "The easy top",
    category: "everyday",
    categoryLabel: "Everyday",
    price: "From R650",
    image: "img/top-01.jpg",
    gallery: ["img/top-01.jpg", "img/top-02.jpg", "img/top-03.jpg", "img/top-04.jpg"],
    alt: "Handmade everyday top",
    description: "A versatile staple with a fit that feels like yours."
  },
  {
    name: "School tracksuit",
    category: "everyday",
    categoryLabel: "Everyday",
    price: "From R1,100",
    image: "img/tracksuits-01.jpg",
    gallery: ["img/tracksuits-01.jpg", "img/tracksuits-02.jpg", "img/tracksuits-03.jpg"],
    alt: "Handmade tracksuit",
    description: "A comfortable everyday set, made with your fit in mind."
  },
    {
    name: "Klass Mothapo tees",
    category: "everyday",
    categoryLabel: "Everyday",
    price: "N/A",
    image: "img/klassmothato-01.jpg",
    gallery: ["img/klassmothato-01.jpg", "img/klassmothato-02.jpg"],
    alt: "Handmade school t-shirt",
    description: "A  handmade and printed school t-shirt with either a simple design or a more elaborate pattern."
  },
  {
    name: "Pre-School tee",
    category: "everyday",
    categoryLabel: "Everyday",
    price: "From R180",
    image: "img/tee-kids-01.jpg",
    gallery: ["img/tee-kids-01.jpg", "img/tee-kids-02.jpg"],
    alt: "Handmade children's tee",
    description: "A soft, cheerful essential for little everyday adventures."
  },
  {
    name: "Apron set",
    category: "accessories",
    categoryLabel: "Accessories",
    price: "From R120",
    image: "img/aprons-ab-01.jpg",
    gallery: ["img/aprons-ab-01.jpg", "img/aprons-ab-02.jpg" , "img/aprons-ab-03.png", "img/aprons-ab-04.png"],
    alt: "Handmade apron",
    description: "A practical, personal piece for the heart of your home."
  },
  {
    name: "Mimshack Brand bag",
    category: "accessories",
    categoryLabel: "Accessories",
    price: "From R150",
    image: "img/bag-01.jpg",
    gallery: ["img/bag-01.jpg", "img/bag-02.jpg"],
    alt: "Handmade fabric bag",
    description: "A one-of-a-kind carry-all, made with your favourite fabric."
  },

  // {
  //   name: "Kitchen apron",
  //   category: "accessories",
  //   categoryLabel: "Accessories",
  //   price: "From R480",
  //   image: "img/aprons-ab-02.jpg",
  //   gallery: ["img/aprons-ab-02.jpg", "img/aprons-ab-01.jpg"],
  //   alt: "Handmade kitchen apron",
  //   description: "A useful, personal touch for cooking, crafting, and gifting."
  // }
];

const productGrid = document.querySelector("#product-grid");
const pieceCount = document.querySelector("#piece-count");
const filterButtons = document.querySelectorAll(".filter-button");
const enquiryDialog = document.querySelector("#enquiry-dialog");
const productDialog = document.querySelector("#product-dialog");
const enquiryMessage = document.querySelector("#enquiry-message");
const whatsappEnquiry = document.querySelector("#whatsapp-enquiry");
const copyFeedback = document.querySelector("#copy-feedback");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
let selectedPiece;

function updateWhatsAppLink() {
  whatsappEnquiry.href = `https://wa.me/27713751901?text=${encodeURIComponent(enquiryMessage.value)}`;
}

function selectGalleryPhoto(photoIndex) {
  const image = selectedPiece.gallery[photoIndex];
  const mainImage = document.querySelector("#product-dialog-main-image");
  mainImage.src = image;
  mainImage.alt = `${selectedPiece.name}, photo ${photoIndex + 1}`;
  document.querySelectorAll(".gallery-thumb").forEach((thumb) => {
    const isSelected = Number(thumb.dataset.photoIndex) === photoIndex;
    thumb.classList.toggle("is-selected", isSelected);
    thumb.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderPieces(filter = "all") {
  const filteredPieces = filter === "all" ? pieces : pieces.filter((piece) => piece.category === filter);
  productGrid.innerHTML = filteredPieces.map((piece) => `
    <article class="product-card">
      <button class="product-image-wrap product-image-button" type="button" aria-label="View ${piece.name} and the ${piece.categoryLabel} collection" data-piece-index="${pieces.indexOf(piece)}">
        <img src="${piece.image}" alt="${piece.alt}" loading="lazy">
        <span class="product-tag">${piece.categoryLabel}</span>
      </button>
      <div class="product-info">
        <div class="product-topline">
          <h3>${piece.name}</h3>
          <span class="product-price">${piece.price}</span>
        </div>
        <p class="product-description">${piece.description}</p>
        <button class="product-enquire" type="button" data-piece="${piece.name}" data-price="${piece.price}">Ask about this piece <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  `).join("");
  pieceCount.textContent = `${filteredPieces.length} ${filteredPieces.length === 1 ? "piece" : "pieces"}`;
}

function selectGalleryPiece(pieceIndex) {
  selectedPiece = pieces[pieceIndex];
  document.querySelector("#product-dialog-category").textContent = selectedPiece.categoryLabel;
  document.querySelector("#product-dialog-title").textContent = selectedPiece.name;
  document.querySelector("#product-dialog-description").textContent = selectedPiece.description;
  document.querySelector("#product-dialog-price").textContent = selectedPiece.price;
  document.querySelector("#product-dialog-enquire").dataset.piece = selectedPiece.name;
  document.querySelector("#product-dialog-enquire").dataset.price = selectedPiece.price;
  document.querySelector("#product-dialog-thumbnails").innerHTML = selectedPiece.gallery.map((image, photoIndex) => `
    <button class="gallery-thumb" type="button" aria-label="View photo ${photoIndex + 1} of ${selectedPiece.name}" aria-pressed="false" data-photo-index="${photoIndex}">
      <img src="${image}" alt="">
    </button>
  `).join("");
  selectGalleryPhoto(0);
}

function openProduct(pieceIndex) {
  const piece = pieces[pieceIndex];
  selectGalleryPiece(pieceIndex);
  productDialog.showModal();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    renderPieces(button.dataset.filter);
  });
});

productGrid.addEventListener("click", (event) => {
  const imageButton = event.target.closest(".product-image-button");
  if (imageButton) {
    openProduct(Number(imageButton.dataset.pieceIndex));
    return;
  }
  const button = event.target.closest(".product-enquire");
  if (!button) return;
  const piece = button.dataset.piece;
  const price = button.dataset.price;
  document.querySelector("#dialog-piece").textContent = `${piece} · ${price}`;
  enquiryMessage.value = `Hello Mimshack Atelier! I'm interested in the ${piece} (${price}).\n\nMy name is:\nMy preferred contact details:\nMy ideas or questions:`;
  updateWhatsAppLink();
  copyFeedback.textContent = "";
  enquiryDialog.showModal();
});

document.querySelector("#product-dialog-thumbnails").addEventListener("click", (event) => {
  const button = event.target.closest(".gallery-thumb");
  if (button) selectGalleryPhoto(Number(button.dataset.photoIndex));
});

document.querySelector("#product-dialog-enquire").addEventListener("click", () => {
  document.querySelector("#dialog-piece").textContent = `${selectedPiece.name} · ${selectedPiece.price}`;
  enquiryMessage.value = `Hello Mimshack Atelier! I'm interested in the ${selectedPiece.name} (${selectedPiece.price}).\n\nMy name is:\nMy preferred contact details:\nMy ideas or questions:`;
  updateWhatsAppLink();
  copyFeedback.textContent = "";
  productDialog.close();
  enquiryDialog.showModal();
});

document.querySelector(".product-dialog-close").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

document.querySelector(".enquiry-dialog-close").addEventListener("click", () => enquiryDialog.close());
enquiryDialog.addEventListener("click", (event) => {
  if (event.target === enquiryDialog) enquiryDialog.close();
});

enquiryMessage.addEventListener("input", updateWhatsAppLink);

document.querySelector("#copy-enquiry").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(enquiryMessage.value);
    copyFeedback.textContent = "Enquiry copied. Paste it into your message to the atelier.";
  } catch {
    enquiryMessage.focus();
    enquiryMessage.select();
    copyFeedback.textContent = "Select and copy your enquiry to send it to the atelier.";
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderPieces();
