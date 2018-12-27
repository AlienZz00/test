$(document).ready(function () {

  $("#news").val(sessionStorage.getItem('news'));
  $("#position1").val(sessionStorage.getItem('position1'));
  $("#position2").val(sessionStorage.getItem('position2'));
  $("#my_salary_want").val(sessionStorage.getItem('my_salary_want'));
  $("#my_date_readywork").val(sessionStorage.getItem('my_date_readywork'));
  $("#my_date_regis").val(sessionStorage.getItem('my_date_regis'));
  $("#my_title").val(sessionStorage.getItem('my_title'));
  $("#my_Fname").val(sessionStorage.getItem('my_Fname'));
  $("#my_Lname").val(sessionStorage.getItem('my_Lname'));
  $("#gender").val(sessionStorage.getItem('gender'));



  $("#sol_affilia").val(sessionStorage.getItem('sol_affilia'));

  $("#sol_where").val(sessionStorage.getItem('sol_where'));

  $("#sol_date").val(sessionStorage.getItem('sol_date'));

  $("#year_drafted").val(sessionStorage.getItem('year_drafted'));

  $("#exam_except").val(sessionStorage.getItem('exam_except'));


  $("#my_birth_date").val(sessionStorage.getItem('my_birth_date'));

  $("#my_age").val(sessionStorage.getItem('my_age'));

  $("#my_height").val(sessionStorage.getItem('my_height'));

  $("#my_weight").val(sessionStorage.getItem('my_weight'));


  $("#my_religion").val(sessionStorage.getItem('my_religion'));

  $("#nationality").val(sessionStorage.getItem('nationality'));

  $("#race").val(sessionStorage.getItem('race'));


  $("#my_scar").val(sessionStorage.getItem('my_scar'));

  $("#my_body").val(sessionStorage.getItem('my_body'));

  $("#my_skin").val(sessionStorage.getItem('my_skin'));

  $("#my_blood_group").val(sessionStorage.getItem('my_blood_group'));

  $("#my_ID_card").val(sessionStorage.getItem('my_ID_card'));

  $("#my_expried_date").val(sessionStorage.getItem('my_expried_date'));

  $("#my_issued_at").val(sessionStorage.getItem('my_issued_at'));

  $("#my_issued_province").val(sessionStorage.getItem('my_issued_province'));


  $("#re_house_code").val(sessionStorage.getItem('re_house_code'));

  $("#re_village_code").val(sessionStorage.getItem('re_village_code'));

  $("#re_village").val(sessionStorage.getItem('re_village'));

  $("#re_road").val(sessionStorage.getItem('re_road'));

  $("#re_province").val(sessionStorage.getItem('re_province'));

  $("#re_area").val(sessionStorage.getItem('re_area'));

  $("#re_sub_district").val(sessionStorage.getItem('re_sub_district'));

  $("#re_postal_code").val(sessionStorage.getItem('re_postal_code'));


  $("#pr_house_code").val(sessionStorage.getItem('pr_house_code'));

  $("#pr_village_code").val(sessionStorage.getItem('pr_village_code'));

  $("#pr_village").val(sessionStorage.getItem('pr_village'));

  $("#pr_road").val(sessionStorage.getItem('pr_road'));

  $("#pr_sub_district").val(sessionStorage.getItem('pr_sub_district'));

  $("#pr_area").val(sessionStorage.getItem('pr_area'));

  $("#pr_province").val(sessionStorage.getItem('pr_province'));

  $("#pr_postal_code").val(sessionStorage.getItem('pr_postal_code'));


  $("#posi_neigh").val(sessionStorage.getItem('posi_neigh'));

  $("#my_tel").val(sessionStorage.getItem('my_tel'));


  $("#parent_house").val(sessionStorage.getItem('parent_house'));

  $("#my_marrital_status").val(sessionStorage.getItem('my_marrital_status'));


  $("#other_house").val(sessionStorage.getItem('other_house'));

  $("#wi_title").val(sessionStorage.getItem('wi_title'));




  $("#wi_title").val(sessionStorage.getItem('wi_title'));
  $("#wi_Fname").val(sessionStorage.getItem('wi_Fname'));
  $("#wi_Lname").val(sessionStorage.getItem('wi_Lname'));

  $("#wi_age").val(sessionStorage.getItem('wi_age'));
  $("#wi_Occ").val(sessionStorage.getItem('wi_Occ'));
  $("#wi_place").val(sessionStorage.getItem('wi_place'));
  $("#wi_tel").val(sessionStorage.getItem('wi_tel'));


  $("#basic_url").val(sessionStorage.getItem('basic_url'));

  $("#imageprev").val(sessionStorage.getItem('imageprev'));
  $("#img_upload").val(sessionStorage.getItem('img_upload'));






  var load_image = sessionStorage.getItem('load_image');
  if (load_image == 'อัพโหลดรูปภาพ') {
    $("#load_image1").attr('checked', 'checked');
    $('.upload_img').show("slow");
    $('.take_snapshot').hide("slow");
  } else if (load_image == 'ถ่ายภาพจากกล้อง') {
    $("#load_image2").attr('checked', 'checked');
    $('.take_snapshot').show("slow");
    $('.upload_img').hide("slow");
  }



  var marry = sessionStorage.getItem('marry');
  if (marry == 'มี') {
    $("#marry1").attr('checked', 'checked');
  } else if (marry == 'ไม่มี') {
    $("#marry2").attr('checked', 'checked');
  }

  var soldier = sessionStorage.getItem('soldier')
  if (soldier == 'เคย') {
    $("#soldier1").attr('checked', 'checked');
    $('.soldier_ever').show("slow");
    $('.soldier_never').hide("slow");
  } else if (soldier == 'ไม่เคย') {
    $("#soldier2").attr('checked', 'checked');
    $('.soldier_never').show("slow");
    $('.soldier_ever').hide("slow");
  }

  var monkhood = sessionStorage.getItem('monkhood')
  if (monkhood == 'อุปสมบทแล้ว') {
    $("#monkhood1").attr('checked', 'checked');

  } else if (monkhood == 'ยังไม่เคยอุปสมบท') {
    $("#monkhood2").attr('checked', 'checked');

  }


  var my_title = sessionStorage.getItem('my_title');
  if (my_title == 'นาย') {
    $("#male").attr('selected', 'selected');
    $('.box').show();
  } else if (my_title == 'นาง') {
    $("#female").attr('selected', 'selected');
  } else if (my_title == 'นางสาว') {
    $("#other").attr('selected', 'selected');
  }


  //========================================================================

  var parent_house = sessionStorage.getItem('parent_house');
  if (parent_house == 'ของญาติ') {
    $("#my_relative").attr('selected', 'selected');
  } else if (parent_house == 'หอพัก') {
    $("#my_apartment").attr('selected', 'selected');
  } else if (parent_house == 'ของคนรู้จัก') {
    $("#my_acquaint").attr('selected', 'selected');
  } else if (parent_house == 'อาศัยผู้อื่น') {
    $("#my_friend").attr('selected', 'selected');
    $('.parent_house').show();
  } else if (parent_house == 'ตนเอง') {
    $("#my_home").attr('selected', 'selected');
  }

  //========================================================================

  var my_marrital_status = sessionStorage.getItem('my_marrital_status');
  if (my_marrital_status == 'สมรส') {
    $("#married").attr('selected', 'selected');
    $('.my_marrital_status').show();
  } else if (my_marrital_status == 'หย่า') {
    $("#divorced").attr('selected', 'selected');
  } else if (my_marrital_status == 'แยกกันอยู่') {
    $("#seperated").attr('selected', 'selected');
  } else if (my_marrital_status == 'หม้าย') {
    $("#widowed").attr('selected', 'selected');
  } else if (my_marrital_status == 'โสด') {
    $("#single").attr('selected', 'selected');
  }
  //========================================================================

  var dataImage = sessionStorage.getItem('imgData');
  imgData = document.getElementById('img_upload');
  img_upload.src = "data:image/jqg;base64," + dataImage;


  //========================================================================

  var img = sessionStorage.getItem('imgData');
  if (img) {
    document.getElementById('img_upload').innerHTML =
      '<img name="img_upload" id="img_upload" src="' + img + '"/>';
  }
});

