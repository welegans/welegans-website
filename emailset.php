<?php
$to = "info@welegans.in";
$name =$_POST['name'];
$email=$_POST['email'];
$message=$_POST['comments'];

mail ($to, $name, $message, "From:".$email);

?>

<script type="text/javascript">
    setTimeout('ourRedirect()',0)
    function ourRedirect(){
        location.href='index.html'
    }
    </script>
<?php
  foreach ($_POST as $key => $value) {
    echo '<p><strong>' . $key.':</strong> '.$value.'</p>';
  }
?>
