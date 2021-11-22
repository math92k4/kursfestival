<section>

<form action="frivillig_signup" id="frivillig_signup">
<fieldset>
<legend>Udfyld denne formular for at blive frivillig</legend>
<div class="form_ctrl">
<label for="frivillig_navn">Navn</label>
<input type="text" name="frivillig_navn">
</div>
<div class="form_ctrl">
<label for="frivillig_email">Email</label>
<input type="email" name="frivillig_email">
</div>
<div class="form_ctrl">
<label for="frivillig_telefon">Telefon</label>
<input type="text" name="frivillig_telefon" maxlength="8">
</div>
<div class="form_ctrl">
<label for="file">Vedhæft en motiveret ansøgning</label>
<input type="file" name="frivillig_fil"> 
</div>
</fieldset>


<fieldset>
<legend>Hvilket område vil du arbejde med?</legend>
<input type="radio" id="omraade_kommunikation" name="omraade_kommunikation" value="kommunikation">
  <label for="omraade_kommunikation">Kommunikation</label><br>
<input type="radio" id="omraade_booking" name="omraade_booking" value="booking">
  <label for="omraade_program">Booking</label><br>
<input type="radio" id="omraade_program" name="omraade_program" value="program">
  <label for="omraade_program">Program</label><br>
<input type="radio" id="omraade_sikkerhed" name="omraade_sikkerhed" value="sikkerged">
  <label for="omraade_sikkerhed">Sikkerhed</label><br>
</fieldset>


<input type="submit" value="Send">
</form>
