function calculateTotal()
{
  var total = getwebsitePagePrices()+designStyle() +responsiveDesign(2000)+socialMediaIntegration(1000)+imageSlider(200)+animatedImageGallery(1000)+contactForm(500);
  document.getElementById('totalPrice').innerText = total;
  console.log("total is: "+total);
}
function getwebsitePagePrices()
{
  var basepage = 1000;

    var websitePageTotalPrice=0;

 numpages = document.getElementById("no_of_pages").value;
if(isNaN(numpages))
{
alert('Please enter a number');

}
else if (numpages>1 && numpages<=5) {
  websitePageTotalPrice =  numpages * 1000;

}
else if (numpages>5 && numpages<=10) {
  websitePageTotalPrice =  numpages * 1000;

}
else if (numpages>100) {
  alert('Sorry!Maximum 100 pages only');

}

else if (numpages>10) {
  websitePageTotalPrice =  numpages * 1000;

}
else{
  websitePageTotalPrice =  numpages * basepage;

}
    return websitePageTotalPrice;
}
var designstyle_array = new Array(2);
designstyle_array['simple']= 0;
designstyle_array['attractive']= 1000;

function designStyle()
  {
    var design_style = document.getElementsByName('designstyle');
    var design_cost = 0;
    var check = 0;
    for (var i = 0; i < design_style.length; i++) {
      if(design_style[i].checked)
      {
        check++;
        design_cost = designstyle_array[design_style[i].value];
        console.log("got design style: "+design_style[i].value);
        return design_cost;
      }
    }
    if(check == 0)
    {
      return 0;
    }
  }
function responsiveDesign(price)
{
  var responsive_design = document.getElementsByName('responsivedesign');
  var check = 0;
  for (var i = 0; i < responsive_design.length; i++) {
    if(responsive_design[i].checked)
    {
      check++;
      return price;
    }
  }
  if(check == 0)
    {
      return 0;
    }
}
  function socialMediaIntegration(price)
{
  var social_media_integration = document.getElementsByName('socialmediaintegration');
  var check = 0;
  for (var i = 0; i < social_media_integration.length; i++) {
    if(social_media_integration[i].checked)
    {
      check++;
      return price;
    }
  }
  if(check == 0)
    {
      return 0;
    }
}
function imageSlider(price)
{
  var image_slider = document.getElementsByName('imageslider');
  var check = 0;
  for (var i = 0; i < image_slider.length; i++) {
    if(image_slider[i].checked)
    {
      check++;
      return price;
    }
  }
  if(check == 0)
    {
      return 0;
    }
}

  function animatedImageGallery(price)
{
  var animated_image_gallery = document.getElementsByName('animatedimagegallery');
  var check = 0;
  for (var i = 0; i < animated_image_gallery.length; i++) {
    if(animated_image_gallery[i].checked)
    {
      check++;
      return price;
    }
  }
  if(check == 0)
    {
      return 0;
    }
}
function contactForm(price)
{
  var contact_form = document.getElementsByName('contactform');
  var check = 0;
  for (var i = 0; i < contact_form.length; i++) {
    if(contact_form[i].checked)
    {
      check++;
      return price;
    }
  }
  if(check == 0)
    {
      return 0;
    }
}
