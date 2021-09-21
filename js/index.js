function checkTravel(event) {
  event.preventDefault();
  let region = document.querySelector("#region");
  let checkIn = document.querySelector(".check-in-input");
  let checkOut = document.querySelector(".check-out-input");
  console.log(checkIn.value);
  console.log(region);
  if (region.value === "" || checkIn.value === "" || checkOut.value === "") {
    alert("please fill out all required fields");
  } else {
    alert(`We will call you to confirm your travel to ${region.value}`);
  }
}
let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", checkTravel);
