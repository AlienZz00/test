//wไทย
var first_regis = sessionStorage.getItem('first_regis');
if (first_regis == 'ใช่') {
    $("#first_regis1").attr('checked', 'checked');
} else if (first_regis == 'ไม่ใช่') {
    $("#first_regis2").attr('checked', 'checked');
    $('.first_regis').show("slow");
}

var outside = sessionStorage.getItem('outside');
if (outside == 'ได้') {
    $("#outside1").attr('checked', 'checked');
} else if (outside == 'ไม่ได้') {
    $("#outside2").attr('checked', 'checked');
    $('.outside').show("slow");
}

var acquain = sessionStorage.getItem('acquain');
if (acquain == 'มี') {
    $("#acquain1").attr('checked', 'checked');
    $('.acquain').show("slow");
} else if (acquain == 'ไม่มี') {
    $("#acquain2").attr('checked', 'checked');
}

//อังกฤษ
var prison = sessionStorage.getItem('prison');
if (prison == 'เคย') {
    $("#prison1").attr('checked', 'checked');
    $('.prison').show("slow");
} else if (prison == 'ไม่เคย') {
    $("#prison2").attr('checked', 'checked');
}

var my_club = sessionStorage.getItem('my_club');
if (my_club == 'เป็น') {
    $("#my_club1").attr('checked', 'checked');
    $('.my_club').show("slow");
} else if (my_club == 'ไม่เป็น') {
    $("#my_club2").attr('checked', 'checked');
}


$("#first_regis3").val(sessionStorage.getItem('first_regis3'));
$("#outside3").val(sessionStorage.getItem('outside3'));
$("#acquain_name").val(sessionStorage.getItem('acquain_name'));
$("#acquain_rela").val(sessionStorage.getItem('acquain_rela'));
$("#acquain_depart").val(sessionStorage.getItem('acquain_depart'));
$("#acquain_name2").val(sessionStorage.getItem('acquain_name2'));
$("#acquain_rela2").val(sessionStorage.getItem('acquain_rela2'));
$("#acquain_depart2").val(sessionStorage.getItem('acquain_depart2'));
$("#prison3").val(sessionStorage.getItem('prison3'));
$("#my_club3").val(sessionStorage.getItem('my_club3'));
$("#my_bonus").val(sessionStorage.getItem('my_bonus'));
$("#my_reserve").val(sessionStorage.getItem('my_reserve'));
$("#my_medical").val(sessionStorage.getItem('my_medical'));
$("#Life_insurance").val(sessionStorage.getItem('Life_insurance'));
$("#Position_value").val(sessionStorage.getItem('Position_value'));
$("#traveling_expen").val(sessionStorage.getItem('traveling_expen'));
$("#diligence").val(sessionStorage.getItem('diligence'));
$("#Subsidy").val(sessionStorage.getItem('Subsidy'));