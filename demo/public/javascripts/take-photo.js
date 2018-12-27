/* JS camera */
/* Code to handle taking the snapshot and displaying it locally */

  // Configure a few settings and attach camera
  function configure() {
    Webcam.set({
      width: 320,
      height: 240,
      image_format: 'jpeg',
      jpeg_quality: 90
    });
    Webcam.attach('#my_camera');
  }
  // A button for taking snaps


  // preload shutter audio clip
  var shutter = new Audio();
  shutter.autoplay = false;
  

  function take_snapshot() {
    // play sound effect
    shutter.play();

    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
      // display results in page
      // document.getElementById('img_upload').innerHTML =
      //   '<img name="imageprev" id="imageprev" src="' + data_uri + '"/>';

      $("#img_upload").attr("src", data_uri);
        sessionStorage.setItem("imgData", data_uri);
    });

  }