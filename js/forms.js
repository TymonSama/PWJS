function checkFormName()
{
  var error=false;
  var contact = document.getElementById("contactName");

  if (contact.value == "")
  {
      document.getElementById("error1").className="form-group has-error";
      document.getElementById("errorName").className="alert alert-danger";
      document.getElementById("contactName").style.background = "White";
      error=true;
  }
  else
  {
      document.getElementById("error1").className="form-group has-success";
      document.getElementById("errorName").className="alert alert-danger collapse";
      document.getElementById("contactName").style.background = "Chartreuse";
  }

}

function checkFormLastName()
{
  var error=false;
  var contact = document.getElementById("contactLastName");

  if (contact.value == "")
  {
      document.getElementById("error2").className="form-group has-error";
      document.getElementById("errorLastName").className="alert alert-danger";
        document.getElementById("contactLastName").style.background = "White";
      error=true;
  }
  else
  {
      document.getElementById("error2").className="form-group has-success";
      document.getElementById("errorLastName").className="alert alert-danger collapse";
      document.getElementById("contactLastName").style.background = "Chartreuse";
  }

}

function checkFormEmail()
{
  var error=false;
  var contact = document.getElementById("contactEmail");

  if(contact.value == "")
  {
      document.getElementById("error3").className="form-group has-error";
      document.getElementById("errorEmail").className="alert alert-danger";
      document.getElementById("contactEmail").style.background = "White";
      error=true;
  }
  else
  {
      var email = contact.value;
      var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
      if(regex.test(email)==false)
      {
          document.getElementById("error3").className="form-group has-error";
          document.getElementById("errorEmail").innerHTML="Zły format!";
          document.getElementById("errorEmail").className="alert alert-danger";
          document.getElementById("contactEmail").style.background = "White";
          error=true;
      }
      else
      {
       document.getElementById("error3").className="form-group has-success";
       document.getElementById("errorEmail").className="alert alert-danger collapse";
       document.getElementById("contactEmail").style.background = "Chartreuse";
      }
  }

}

function checkFormInformation()
{
  var error=false;
  var contact = document.getElementById("contactInfo");

  if (contactInfo.value == "")
  {
      document.getElementById("error4").className="form-group has-error";
      document.getElementById("errorInfo").className="alert alert-danger";
      document.getElementById("contactInfo").style.background = "White";
      error=true;
  }
  else
  {
      var info = contactInfo.value;

      if(info.length >= 250)
      {
        document.getElementById("error4").className="form-group has-error";
        document.getElementById('errorInfoLength').className='alert alert-danger';
        document.getElementById("contactInfo").style.background = "White";
        error=true;
      }
      else
      {
        document.getElementById("error4").className="form-group has-success";
        document.getElementById('errorInfoLength').className='alert alert-danger collapse';
        document.getElementById("errorInfo").className="alert alert-danger collapse";
        document.getElementById("contactInfo").style.background = "Chartreuse";
      }
  }
}


function checkForm()
{
    var error=false; //to znaczy, że danych nie brakuje
    var contactName = document.getElementById("contactName");
    var contactLastName = document.getElementById("contactLastName");
    var contactEmail = document.getElementById("contactEmail");
    var contactInfo = document.getElementById("contactInfo");

    if (contactName.value == "")
    {
        document.getElementById("error1").className="form-group has-error";
        document.getElementById("errorName").className="alert alert-danger";
        error=true;
    }
    else
    {
        document.getElementById("error1").className="form-group has-success";
    }

    if (contactLastName.value == "")
    {
        document.getElementById("error2").className="form-group has-error";
        document.getElementById("errorLastName").className="alert alert-danger";
        error=true;
    }
    else
    {
        document.getElementById("error2").className="form-group has-success";
    }

    if(contactEmail.value == "")
    {
        document.getElementById("error3").className="form-group has-error";
        document.getElementById("errorEmail").className="alert alert-danger";
        error=true;
    }
    else
    {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false)
        {
            document.getElementById("error3").className="form-group has-error";
            document.getElementById("errorEmail").innerHTML="Zły format!";
            document.getElementById("errorEmail").className="alert alert-danger";
            error=true;
        }
        else
        {
         document.getElementById("error3").className="form-group has-success";
        }
    }

    if (contactInfo.value == "")
    {
        document.getElementById("error4").className="form-group has-error";
        document.getElementById("errorInfo").className="alert alert-danger";
        error=true;
    }
    else
    {
        var info = contactInfo.value;

        if(info.length >= 250)
        {
          document.getElementById("error4").className="form-group has-error";
          document.getElementById('errorInfoLength').className='alert alertdanger';
          error=true;
        }
        else
        {
          document.getElementById("error4").className="form-group has-success";
        }
    }

    if (!error) return true;
    else return false;
}
