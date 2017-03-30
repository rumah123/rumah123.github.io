// load
$(document).ready(function() {
    $("#formsatu").addClass("active");
    $("#syarat-page").addClass("display-none");
    $("#produk-page").addClass("display-none");
});


// nav-bar

$(document).ready(function() {
    $("#ajukan").click(function() {
        $("#ajukan").addClass("btn-active");
        $("#ajukan-page").removeClass("display-none");

        $("#syarat").removeClass("btn-active");
        $("#syarat-page").addClass("display-none");
            
        $("#produk").removeClass("btn-active");
        $("#produk-page").addClass("display-none");
    });

    $("#syarat").click(function() {
        $("#syarat").addClass("btn-active");
        $("#syarat-page").removeClass("display-none");

        $("#ajukan").removeClass("btn-active");
        $("#ajukan-page").addClass("display-none");
          
        $("#produk").removeClass("btn-active");
        $("#produk-page").addClass("display-none");


    });
    $("#produk").click(function() {
        $("#produk").addClass("btn-active");
        $("#produk-page").removeClass("display-none");

        $("#ajukan").removeClass("btn-active");
        $("#ajukan-page").addClass("display-none");  
              
        $("#syarat").removeClass("btn-active");
        $("#syarat-page").addClass("display-none");


    });
});




// form-transition
$(document).ready(function() {
    $("#step-form1").click(function() {
        $("#formsatu").fadeIn("slow");
        $("#formdua").fadeOut("fast");
        $("#formtiga").fadeOut("fast");
        $("#formempat").fadeOut("fast");

    });
    $("#step-form2").click(function() {
        $("#formdua").fadeIn("slow");
        $("#formsatu").fadeOut("fast");
        $("#formtiga").fadeOut("fast");
        $("#formempat").fadeOut("fast");

    });
    $("#step-form3").click(function() {
        $("#formtiga").fadeIn("slow");
        $("#formsatu").fadeOut("fast");
        $("#formdua").fadeOut("fast");
        $("#formempat").fadeOut("fast");

    });
    $("#step-form4").click(function() {
        $("#formempat").fadeIn("slow");
        $("#formsatu").fadeOut("fast");
        $("#formdua").fadeOut("fast");
        $("#formtiga").fadeOut("fast");

    });


});
// new script 20170316
$(document).ready(function(){
    // calculator 
    $(".calc-show").click(function () {
        $("#sinarmas-calc").slideToggle("slow");
    });
    $('#button_count').click(function(){
        $('#count-form').hide();
        $('#result-form').show();
    });
    $('#button_result').click(function(){
        $('#count-form').show();
        $('#result-form').hide();
    });

    // married & single section
    $('#marital-status').change(function(){
        $('.family-data').show();
        $('#' + $(this).val()).hide();
    });
    $('.for-married-selection').hide();
    $('#marital-status').change(function(){
        var married = $('#marital-status option:selected').val();
        if(married == 'married'){
            $('.for-married-selection').show();
        }else{
            $('.for-married-selection').hide();
        }
    });
    $('#div-prop').checkboxpicker({
        html: true,
        offLabel: 'Tidak',
        onLabel: 'Ya'
    });
    if($('#div-prop').prop('checked', false)){
        $('.for-married-input').attr('disabled', function(){
            $(this).css({'opacity':'0.5'});
        });
    }else{
        $('.for-married-input').removeAttr('disabled', function(){
            $(this).css({'opacity':'1'});
        });
    }

    // select bidang usaha
    $('#business-field').change(function(){
        var other = $('#business-field option:selected').val();
        if (other == 'other') {
            $('#other-business').show();
        }else{
            $('#other-business').hide();
        }
    });

    // job selection
    $('#job-select').change(function(){
        $('.income').hide();
        $('#' + $(this).val()).show();
        $('.by-income').show();
        if ($('#for-employee').css('display') == 'block') {
            $('#non-fixed-income').hide();
        }else if ($('#for-non-employee').css('display') == 'block') {
            $('#fixed-income').hide();
        }
    });

    // prev-next button
    $('.next').click(function(){
        $('.nav-tabs > .active').next('li').find('a').trigger('click');
        $('html, body').animate({scrollTop : +450},1000);
        return false;
    });
    $('.prev').click(function(){
        $('.nav-tabs > .active').prev('li').find('a').trigger('click');
        $('html, body').animate({scrollTop : +450},1000);
        return false;
    });
});
