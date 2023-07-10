function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6I7PxeEIF3f":
        Script1();
        break;
      case "6Yb46UYqEae":
        Script2();
        break;
  }
}

function Script1()
{
  var recipe = "how-to-make-waffles/docs/yummy-waffles.pdf";
  window.open(recipe);
}

function Script2()
{
  var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;
var player = GetPlayer();
var name = player.GetVar("uName"); 
var doc = new jsPDF({
orientation: 'landscape' 
})
var img = new Image;
img.onload = function() {
doc.addImage(this, 0, 0, 297, 210);

/* font, size, and color */
doc.setFontSize(40); 
doc.setTextColor(0, 0, 0); 
doc.setFont('Times-Bold');

/* coordinates */
doc.text(name, (doc.internal.pageSize.width / 2), 120, null, null, 'center'); 
doc.setFont('Times-Roman');
doc.setFontSize(15);
doc.text(date, (doc.internal.pageSize.width / 2), 172, null, null, 'center'); 
/* name */
doc.save("i-made-waffles.pdf"); 
};

/* source */
img.crossOrigin = "";  
img.src = "how-to-make-waffles\docs\waffles.pdf"; 
}

