 $(document).ready(
function()
{
	$('#b1').click(
function(){
$('#sample').text('Front-end developer').css('color','red');
});
 });
 $(document).ready(
function()
{
	$('#b2').click(
function(){
$('#sample2').css('color','red');
});
});

$(document).ready(
function()
{
	$('#b3').click(
function(){
$('#sample3').css('color','red');
});
});

$(document).ready(
function()
{
	$('#b4').click(
function(){
$('.sample4').hide();
$('#b4').click(
function(){
$('.sample4').show();
});
});
});

$(document).ready(
function()
{
	$('#b5').click(
function(){
$('.sample5').hide();
$('#b5').click(
function(){
$('.sample5').show();
});
});
});


$(document).ready(
function()
{
	$('#b6').click(
function(){
$('.sample6').hide();
$('#b6').click(
function(){
$('.sample6').show();
});
});
});

$(document).ready(
function()
{
	$('#b7').click(
function(){
$('.sample7').hide();
$('#b7').click(
function(){
$('.sample7').show();
});
});
});

$(document).ready(
function()
{
	$('#b8').click(
function(){
$('.sample8').hide();
$('#b8').click(
function(){
$('.sample8').show();
});
});
});

$(document).ready(
function()
{
	$('#b9').click(
function(){
$('.sample9').hide();
$('#b9').click(
function(){
$('.sample9').show();
});
});
});

$("#tgl_flip").click(function(){
	$("#tgl_panel").slideToggle("slow");
})