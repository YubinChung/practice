
//js 는 기능별로 나눈다!
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
});

$.getScript("assets/js/modules/modal.js", function(){
	modal.init();
})

$.getScript("assets/js/table/table.js", function(){
	table.init();
})


