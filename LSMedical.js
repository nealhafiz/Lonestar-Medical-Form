<!--
Program name: Lonestar Medical Patient Form (HTML)
Author: Neal Hafiz
Date created: 2/3/2025
Date last edited: 3/05/2025
Version: 2.7
Description: Patient Registration Page for Lonestar Medical.
  -->

  <!DOCTYPE html>
  <html>
  <head> <meta charset="UTF-8"> <!-- Without this, I had an A with accent that kept appearing on the page-->
  <link rel="stylesheet" href="LSMedical.css">
  <title>Lonestar Medical New Patient Form</title>

  <script defer src="LSMedical.js"> </script> <!--External Javacript Sheet; defer needed to execute page after page is finished parsing-->

  </head>
  <body>
  <div style="text-align: center;">
  <!--LS Medical Logo-->
  <img src="LSMedical.png" alt="Lonestar Medical" width="700" height="100"> 
  <!--https://www.quora.com/How-do-I-add-the-current-date-in-HTML-code#:~:text=Today's%20date%20is%3A,%2Fspan%3E-->
  <p>Please fill out the form below so we can better assist your needs.<br><br> Today's Date: <span id="today"></span></p>
  </div>
  
  <!--Black Line Header-->
  <div style="height: 2px; background-color: black; width: 50%; margin: 20px auto;">
      <br>
      <h2>Patient Registation Form</h2> <!--Area Header-->
  </div>
  
  <br><br><br>
  <table> <!--Table created for spacing and alignment-->
    <tr>
      <td>
        <form action="#" id="medicalform" onsubmit="return PasswordCheck()" onsubmit="return usernamepasscheck()"> <!--Form Action-->
          <tr> <!-- First, M.I., and Last Name Row-->
            <td>
           <!-- First Name and Last Name inputs on the same line -->
          <input type="text" id="first" name="first" placeholder="John" maxlength="30" pattern="[a-zA-Z'-]+" title="Only A-Z, apostraphe and dashes are allowed"> &nbsp 
          <input type="text" id="middle" name="middle" size="2" maxlength="1" placeholder="A"> &nbsp
          <input type="text" id="last" name="last" placeholder="Doe" maxlength="30"><br>
  
          <!-- Labels below each input field -->
          <label for="first">First Name</label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <!--No break space added for spacing and alignment-->
          <lable for="middleint">M.I.</label> &nbsp &nbsp &nbsp
          <label for="last">Last Name</label><br><br>
          <td>
            <tr>
  
          <tr> <!--Date of Birth Row and SSN Row-->
            <td>
          <input type="date" id="date" name="date"> &nbsp 
          <input type="password" id="SSN" name="SSN" size="23" maxlength="9"><br>
  
          <label for="date">Date of Birth</label> &nbsp &nbsp 
          <label for="SSN">Social Security</label><br><br>
          <td>
            <tr>
          
          <tr> <!--Address 1 & 2 Row -->
            <td>
              <input type="text" id="address1" name="address1"size="25" maxlength="30" placeholder="Primary" required> &nbsp
              <input type="text" id="address2" name="address2"size="25" maxlength="30"placeholder="Secondary"><br>
  
              <label for="address1">Primary Address</label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
              <label for="address2">Secondary Address</label><br><br>
              <td>
            <tr>
  
          <tr> <!--City, State and Zip Row-->
            <td>
              <input type="text" id="city" name="city" size="30" maxlength="30"> &nbsp 
              <select required name="states" id="states">
                <option value=""></option>
                <option value="Alabama">AL</option>
                <option value="Alaska">AK</option>
                <option value="Arizona">AZ</option>
                <option value="Arkansas">AR</option>
                <option value="California">CA</option>
                <option value="Colorado">CO</option>
                <option value="Conneticut">CT</option>
                <option value="District of Columbia">DC</option>
                <option value="Deleware">DE</option>
                <option value="Florida">FL</option>
                <option value="Georgia">GA</option>
                <option value="Hawaii">HI</option>
                <option value="Idaho">ID</option>
                <option value="Illinois">IL</option>
                <option value="Indiana">IN</option>
                <option value="Indiana">IO</option>
                <option value="Kansas">KS</option>
                <option value="Kentucky">KY</option>
                <option value="Louisiana">LA</option>
                <option value="Maine">ME</option>
                <option value="Maryland">MD</option>
                <option value="Massachusetts">MA</option>
                <option value="Michigan">MI</option>
                <option value="Minnesota">MN</option>
                <option value="Mississippi">MS</option>
                <option value="Missouri">MO</option>
                <option value="Montana">MT</option>
                <option value="Nebraska">NE</option>
                <option value="Nevada">NV</option>
                <option value="New Hampshire">NH</option>
                <option value="New Jersey">NJ</option>
                <option value="New Mexico">NM</option>
                <option value="New York">NY</option>
                <option value="North Carolina">NC</option>
                <option value="North Dakota">ND</option>
                <option value="Ohio">OH</option>
                <option value="Oklahoma">OK</option>
                <option value="Oregon">OR</option>
                <option value="Pennsylvania">PA</option>
                <option value="Puerto Rico">PR</option>
                <option value="Rhode Island">RI</option>
                <option value="South Carolina">SC</option>
                <option value="South Dakota">SD</option>
                <option value="Tennessee">TN</option>
                <option value="Texas">TX</option>
                <option value="Utah">UT</option>
                <option value="Vermont">VT</option>
                <option value="Virginia">VA</option>
                <option value="Washington">WA</option>
                <option value="West Virgninia">WV</option>
                <option value="Wisconsin">WI</option>
                <option value="Wyoming">WY</option>
                </select> &nbsp
                <!--Zip Code input-->
                <input type="text" id="zip" name="zip" maxlength="5" size="11">
               <!--Labels for City, State, and Zip-->
                <br>
                <label for="city">City</label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
                <label for="states">State</label> &nbsp &nbsp
                <label for="zip">Zip Code</label><br><br>
            <td>
          <tr>
  
        <!--Email Row-->
        <tr>
          <td>
            <input type="email" id="email" name="email" size="30" placeholder="name@domain.tld" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"><br> <!--Used existing pattern off https://www.w3schools.com/TAGs/tryit.asp?filename=tryhtml5_input_pattern-->
            <label for="email">Email</label>
          <td>
        <tr>
  
      <!--Header for Health Section/Questionaire-->
        <tr>
        <td>
          <h3>___________________________________<h3>
          <h3>Your Current Health Information<h3>
        <td>  
        </tr>
  
       <!--Symptoms Text Area-->
       <tr>
        <td>
          <textarea id="symptoms" name="symptoms" rows="4" cols="50" placeholder="Describe your current symptoms..."></textarea><br>
          <label for="symptoms">Current Symptoms</label><br>
        <td>
        </tr>
  
       <!--Checkbox section-->
        <tr>
          <td>
            <p>Please check if you had the any of the following below:<p>
            &nbsp &nbsp<input type="checkbox" id="chickenpox" name="chickenpox" value="chickenpox">
            <label for="chickenpox1"> Chicken Pox</label><br><br>
  
             &nbsp &nbsp<input type="checkbox" id="measles" name="measles" value="Measles">
            <label for="measles">Measles</label><br><br>
  
             &nbsp &nbsp<input type="checkbox" id="covid" name="covid" value="covid">
            <label for="covid">Covid-19</label><br><br>
  
             &nbsp &nbsp<input type="checkbox" id="smallpox" name="smallpox" value="smallpox">
            <label for="smallpox">Small Pox</label><br><br>
  
             &nbsp &nbsp<input type="checkbox" id="tetanu" name="tetanus" value="tetanus">
            <label for="tetanus">Tetanus</label><br><br>
  
             &nbsp &nbsp<input type="checkbox" id="unsure" name="unsure" value="unsure">
            <label for="unsure">Not sure</label><br>
            </td>
          </tr>
  
       <!--Radio Options-->
       <!--*leave both input name's set to gender so only one option can be selected*-->
        <tr>
          <td>
           <p>Gender<p>
          &nbsp<input type="radio" id="male" name="gender" value="male">
          <label for="male">Male</label>   
          &nbsp<input type="radio" id="female" name="gender" value="female"> &nbsp
          <label for="female">  Female</label>
          &nbsp<input type="radio" id="other" name="gender" value="other"> &nbsp
          <label for="female">Other</label>
          <td>
        <tr>
  
        <!--Vaccine Radio Button Area-->
        <tr>
          <td>
           <p>Have you been vaccinated?<p>
          &nbsp<input type="radio" id="Yes" name="vaccine" value="Yes">
          <label for="Yes">Yes</label>   
          &nbsp<input type="radio" id="No" name="vaccine" value="No"> &nbsp
          <label for="No">No</label>
          <td>
        <tr>
  
         <tr>
          <td>
           <p>Do You Have Insurance?<p>
          &nbsp<input type="radio" id="Yes" name="Insurance" value="Yes">
          <label for="Yes">Yes</label>   
          &nbsp<input type="radio" id="No" name="Insurance" value="No"> &nbsp
          <label for="No">No</label>
          <td>
         <tr>
  
          <tr>
            <td>
              <p>Use the scale below to show us how you are feeling today? <br> (10 being the worst) </p>
  
             <!-- Used slider from https://www.w3schools.com/howto/howto_js_rangeslider.asp-->
              <div class="slider">
              <input type="range" min="1" max="10" value="1" class="slider" id="Range">
              <p>Value: <span id="slider"></span></p>
             </div>
         </td>
         </tr>
        
         <!--Account login setup-->
         <tr>
          <td>
            <h3>____________________________________<br>Account Login Setup</h3>
            <input type="text" id="username" name="username" size="30" maxlength="30" minlength="5" placeholder="Username" pattern="^[A-Za-z][A-Za-z0-9_-]*$" title="Username must start with a letter and contain numbers and dashes following. No spaces allowed" required><br>
            <label for="username">Username</label><br><br>
  
            <input type="password" id="password" name="password"size="25" maxlength="20" placeholder="Password" required> &nbsp &nbsp &nbsp
            <input type="password" id="passcheck" name="passcheck"size="25" maxlength="30" minlength="8" placeholder="Re-Enter Password" required><br>
  
            <label for="password">Password</label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
            <label for="passcheck">Re-Enter Password</label><br>
  
          </td>
        </tr>
        
  
         <!--Section Seperator-->
         <tr>
          <td>
             <h3>____________________________________</h3>
            </td>
          </tr>
  
      
        <!--Submit and clear button row-->
        <tr>
          <td>
            <div style="text-align: center;">
            <input type="submit" value="Submit"> &nbsp &nbsp &nbsp 
            <input type="reset" value="Clear"> &nbsp &nbsp &nbsp 
            <button type="button" onclick="reviewdata()">Review Data</button>
            </div>
          </td>
          </tr> 
  
        </form>
      </td>
    </tr>
  </table>
  
  <br>

  <!--WS3 Password Validator Message Block-->
  <div id="message">
    <h3>Password must have all of the following:</h3>
    <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
    <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
    <p id="number" class="invalid">A <b>number</b></p>
    <p id="length" class="invalid">Minimum <b>8 characters</b></p>
  </div>


  <!-- Footer Tag https://www.w3schools.com/TAgs/tag_footer.asp-->
  <footer>
    <p>
      _______________________________<br>
      Medical Lonestar <br>
      PO BOX 77721 <br>
      Houston, TX 77017<br>
      Call us at (281)-777-25790 <br>
      Follow us on Facebook and Instagram!
      </p>
    </footer>
  
  </body>
  
  </html>
