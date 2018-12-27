var counter = 0;

$(function () {
    $("#btnAdd").bind("click", function () {
      var div = $("<tr />");
      counter++;
      div.html(GetDynamicTextBox1(""));
      $("#TextBoxContainer").append(div);
     

    });

    $("body").on("click", ".remove", function () {
      $(this).closest("tr").remove();
    });
  });

  function GetDynamicTextBox1(value) {
    return '<td><input name = "bro_name'+ counter + '" type="text" value = "' + value + '" class="form-control" /></td>' +
       
      '<td><input name="bro_old'+ counter + '"  type="number" value = "' + value + '" class="form-control"/></td>' +
     
      '<td><input name = "bro_career'+ counter + '"  type="text" value = "' + value + '"class="form-control" /></td>' +

      '<td><input name = "bro_where'+ counter + '"  type="text" value = "' + value + '" class="form-control"/></td>' +
 
      '<td><input name = "bro_tel'+ counter + '"  type="number" value = "' + value + '" class="form-control"/></td>' +
     
      '<td><button  type="button" class="btn btn-danger remove">ลบ</button></td>'
  }