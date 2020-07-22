<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en" role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>

  <script type="text/javascript">
    (function(){
    var AMP_KEY="tCe3Qoaw9dC7eGgatH5F9xFXsF4QHHK";window._AMP_CONF=window._AMP_CONF || {};window._AMP_CONF.key=AMP_KEY;
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.simplifeye.co/tCe3Qoaw9dC7eGgatH5F9xFXsF4QHHK/embed';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
  </script>
</body>
</html>
