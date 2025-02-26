// Here's your personal Marvel Comics API information:

// Your public key
// b5025002fed92c379235ccd6df1878c1
// Your private key
// c594216bf76f5a1792d5e0ad5842d46d743b8832

// 1c594216bf76f5a1792d5e0ad5842d46d743b8832b5025002fed92c379235ccd6df1878c1

// md5 hash: 953185301aba7d4acdbf2a7ce85e009f

// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b5025002fed92c379235ccd6df1878c1&hash=953185301aba7d4acdbf2a7ce85e009f

//emailJS: template_dr7y6d7
//serviceID: service_o3e6n0g
//publicKey: TOTDZC7oKcYj2kEke

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_o3e6n0g",
      "template_dr7y6d7",
      event.target,
      "TOTDZC7oKcYj2kEke"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarilty unavailable. Please contact me directly on raymond@sleepbuttonpro.com."
      );
    });
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}