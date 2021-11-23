<section class="frivillig_form">
    <?php get_template_part("/theme-parts/gitter") ?>
                

<form action="frivillig_signup" id="frivillig_signup">
<div id="form_wrapper">
<fieldset id="frivillig_info">
<div class="form_ctrl">
<label for="frivillig_navn">Fulde navn</label>
<input type="text" name="frivillig_navn" minlength="2" placeholder="Frivillig Frivilligsen" id="frivillig_navn">
</div>
<div class="form_ctrl">
<label for="frivillig_email">E-mail</label>
<input type="email" name="frivillig_email" minlength="2" placeholder="frivillig@frivillig.dk" id="frivillig_email">
</div>
<div class="form_ctrl">
<label for="frivillig_telefon">Telefon</label>
<input type="text" name="frivillig_telefon" maxlength="8" placeholder="12345678" id="frivillig_telefon">
</div>
<div class="form_ctrl">
</div>
</fieldset>


<fieldset id="frivillig_omraade">
<legend>Område</legend>
<input type="radio" id="omraade_kommunikation" name="omraade" value="kommunikation">
  <label for="omraade_kommunikation" class="radio_label">Kommunikation</label><br>
<input type="radio" id="omraade_booking" name="omraade" value="booking">
  <label for="omraade_program" class="radio_label">Booking</label><br>
<input type="radio" id="omraade_program" name="omraade" value="program">
  <label for="omraade_program" class="radio_label">Program</label><br>
<input type="radio" id="omraade_sikkerhed" name="omraade" value="sikkerged">
  <label for="omraade_sikkerhed" class="radio_label">Sikkerhed</label><br>
<label for="file">Motiveret ansøgning</label>

<input type="file" name="frivillig_fil" id="frivillig_fil"> 

</fieldset>
</div>
<div id="submit_wrapper">
<input type="submit" value="SEND" id="submit_frivillig_form">
</div>
</form>


</section>

<script>
  const submitBtn = document.querySelector("#submit_frivillig_form");
  submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    getValues(); 
  });

function getValues() {


    // DATA minus files
    const url = "https://kursfestival-884a.restdb.io/rest/frivillig"; 
  const navn = document.querySelector("#frivillig_navn").value;
  const email = document.querySelector("#frivillig_email").value;
  const telefon =
    document.querySelector("#frivillig_telefon").value;
  const fil = document.querySelector("#frivillig_fil").value;
  const omraade = document.querySelector("input[name=omraade]:checked").value;

  const data = {
      frivillignavn: navn, 
      frivilligemail: email, 
      frivilligtelefon: telefon, 
      frivilligfil: fil, 
      frivilligomraade: omraade,
  }
  console.log(data); 
  post(data, url);



}

 function post(data, url) {
     console.log(data); 

    const headers = {
  "Content-Type": "application/json",
  "x-apikey": "619634edfc71545b0f5e090f",
  "cache-control": "no-cache",
};
  const postData = JSON.stringify(data);
  fetch(url, {
    method: "post",
    headers: headers,
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}


</script>
