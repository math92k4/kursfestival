const submitBtn = document.querySelector("#submit_frivillig_form");

submitBtn.addEventListener("click", showValues);

function showValues() {
  const frivilligNavnValue = document.querySelector("#frivillig_navn").value;
  const frivilligEmailValue = document.querySelector("#frivillig_email").value;
  const frivilligTelefonValue = document.querySelector("#frivillig_telefon").value;
  const frivilligFilValue = document.querySelector("#frivillig_fil").value;
}
