

    var serious_sickness = sessionStorage.getItem('serious_sickness');
    if (serious_sickness == 'เคย') {
        $("#serious_sickness1").attr('checked', 'checked');
        $('.serious_sickness').show("slow");
    } else if (serious_sickness == 'ไม่เคย') {
        $("#serious_sickness2").attr('checked', 'checked');
    }

    $("#ser_sick1").val(sessionStorage.getItem('ser_sick1'));
    $("#ser_sick2").val(sessionStorage.getItem('ser_sick2'));
    $("#ser_sick3").val(sessionStorage.getItem('ser_sick3'));




    var disease = sessionStorage.getItem('disease');
    if (disease == 'มี') {
        $("#disease1").attr('checked', 'checked');
        $('.disease').show("slow");
    } else if (disease == 'ไม่มี') {
        $("#disease2").attr('checked', 'checked');
    }


    $("#disease10").val(sessionStorage.getItem('disease10'));
    $("#disease20").val(sessionStorage.getItem('disease20'));
    $("#disease3").val(sessionStorage.getItem('disease3'));

