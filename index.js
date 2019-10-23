
 console.log(5);
    alert('Click OK to see my website.');
    console.log('this is my website and I am learning how to use javascript properly.')
    console.log('It is still a work in progress.')
    var x = document.getElementsByClassName("Button");

    $(document).ready(function(){
      $("p").click(function(){
        $(this).hide();
      });
    });

    function myFunction() {
        console.log(document.getElementById("demo"));
      document.getElementById("demo").innerHTML = "Ta-da."; 
    }
