//Form5 
$(document).ready(function () {
  //wไทย
  var speaking_thai = sessionStorage.getItem('speaking_thai');
  if (speaking_thai == 'ดี') {
    $("#speaking_thai1").attr('checked', 'checked');
  } else if (speaking_thai == 'พอใช้') {
    $("#speaking_thai2").attr('checked', 'checked');
  }

  var reading_thai = sessionStorage.getItem('reading_thai');
  if (reading_thai == 'ดี') {
    $("#reading_thai1").attr('checked', 'checked');
  } else if (reading_thai == 'พอใช้') {
    $("#reading_thai2").attr('checked', 'checked');
  }

  var writing_thai = sessionStorage.getItem('writing_thai');
  if (writing_thai == 'ดี') {
    $("#writing_thai1").attr('checked', 'checked');
  } else if (writing_thai == 'พอใช้') {
    $("#writing_thai2").attr('checked', 'checked');
  }

  //อังกฤษ
  var speaking_eng = sessionStorage.getItem('speaking_eng');
  if (speaking_eng == 'ดี') {
    $("#speaking_eng1").attr('checked', 'checked');
  } else if (speaking_eng == 'พอใช้') {
    $("#speaking_eng2").attr('checked', 'checked');
  }

  var reading_eng = sessionStorage.getItem('reading_eng');
  if (reading_eng == 'ดี') {
    $("#reading_eng1").attr('checked', 'checked');
  } else if (reading_eng == 'พอใช้') {
    $("#reading_eng2").attr('checked', 'checked');
  }

  var writing_eng = sessionStorage.getItem('writing_eng');
  if (writing_eng == 'ดี') {
    $("#writing_eng1").attr('checked', 'checked');
  } else if (writing_eng == 'พอใช้') {
    $("#writing_eng2").attr('checked', 'checked');
  }

  //ภาษาอื่นๆ 1
  var speaking_other_lang = sessionStorage.getItem('speaking_other_lang');
  if (speaking_other_lang == 'ดี') {
    $("#speaking_other_lang1").attr('checked', 'checked');
  } else if (speaking_other_lang == 'พอใช้') {
    $("#speaking_other_lang2").attr('checked', 'checked');
  }

  var reading_other_lang = sessionStorage.getItem('reading_other_lang');
  if (reading_other_lang == 'ดี') {
    $("#reading_other_lang1").attr('checked', 'checked');
  } else if (reading_other_lang1 == 'พอใช้') {
    $("#reading_other_lang2").attr('checked', 'checked');
  }

  var writing_other_lang = sessionStorage.getItem('writing_other_lang');
  if (writing_other_lang == 'ดี') {
    $("#writing_other_lang1").attr('checked', 'checked');
  } else if (writing_other_lang == 'พอใช้') {
    $("#writing_other_lang2").attr('checked', 'checked');
  }


  //ภาษาอื่นๆ 2
  var speaking_other_lang2 = sessionStorage.getItem('speaking_other_lang2');
  if (speaking_other_lang2 == 'ดี') {
    $("#speaking_other_lang3").attr('checked', 'checked');
  } else if (speaking_other_lang2 == 'พอใช้') {
    $("#speaking_other_lang4").attr('checked', 'checked');
  }

  var reading_other_lang2 = sessionStorage.getItem('reading_other_lang2');
  if (reading_other_lang2 == 'ดี') {
    $("#reading_other_lang3").attr('checked', 'checked');
  } else if (reading_other_lang2 == 'พอใช้') {
    $("#reading_other_lang4").attr('checked', 'checked');
  }

  var writing_other_lang2 = sessionStorage.getItem('writing_other_lang2');
  if (writing_other_lang2 == 'ดี') {
    $("#writing_other_lang3").attr('checked', 'checked');
  } else if (writing_other_lang2 == 'พอใช้') {
    $("#writing_other_lang4").attr('checked', 'checked');
  }

  //ขับรถ==========================================================================



  var driver_ability = sessionStorage.getItem('driver_ability');
  if (driver_ability == 'ได้') {
    $("#driver_ability1").attr('checked', 'checked');
    $('.driver_ability').show();
  } else if (driver_ability == 'ไม่ได้') {
    $("#driver_ability2").attr('checked', 'checked');
    $('.driver_ability').hide();
  }

  var motorcycle_ability = sessionStorage.getItem('motorcycle_ability');
  if (motorcycle_ability == 'ได้') {
    $("#motorcycle_ability1").attr('checked', 'checked');
    $('.motorcycle_ability').show();
  } else if (motorcycle_ability == 'ไม่ได้') {
    $("#motorcycle_ability2").attr('checked', 'checked');
  }


  // Form5 ขับรถ ==================================================================




  $("#driver_type").val(sessionStorage.getItem('driver_type'));

  $("#driver_id").val(sessionStorage.getItem('driver_id'));

  $("#driver_province").val(sessionStorage.getItem('driver_province'));

  $("#date_card_driver").val(sessionStorage.getItem('date_card_driver'));
  $("#driver_type_motorcycle").val(sessionStorage.getItem('driver_type_motorcycle'));

  $("#driver_id_motorcycle").val(sessionStorage.getItem('driver_id_motorcycle'));

  $("#driver_province_motorcycle").val(sessionStorage.getItem('driver_province_motorcycle'));

  $("#date_card_motorcycle").val(sessionStorage.getItem('date_card_motorcycle'));

  $("#com_thai_write").val(sessionStorage.getItem('com_thai_write'));
  $("#com_eng_write").val(sessionStorage.getItem('com_eng_write'));

  $("#com_lang1").val(sessionStorage.getItem('com_lang1'));
  $("#com_lang2").val(sessionStorage.getItem('com_lang2'));
  $("#com_lang3").val(sessionStorage.getItem('com_lang3'));
  $("#any_abilites1").val(sessionStorage.getItem('any_abilites1'));
  $("#any_abilites2").val(sessionStorage.getItem('any_abilites2'));
  $("#hobblies1").val(sessionStorage.getItem('hobblies1'));
  $("#hobblies2").val(sessionStorage.getItem('hobblies2'));





});