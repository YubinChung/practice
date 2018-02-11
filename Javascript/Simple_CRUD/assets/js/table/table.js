
var table = {
	edit: function(){

		var tdNameValue = $(this).closest('tr').find('td.name').text();
		var tdEmailValue = $(this).closest('tr').find('td.email').text();
		var tdNum = $(this).closest('tr').find('td.num').text();
		
		// 인풋값에 기존 입력된 값 넣기
		$('#InputName').val(tdNameValue);
		$('#InputEmail').val(tdEmailValue);

		//modal 에 데이터 아이디 어트리뷰트 추가 
		$('#myModal').attr('data-id', tdNum);

		modal.modeChange('edit');

		// if( mode == 'edit') {
		// 	console.log('edit!!');

		// 	var InputNameValue = $('#InputName').val();
		// 	var InputEmailValue = $('#InputEmail').val();

		// 	var tdNameValue = $(this).parent().siblings('td.name').text(InputNameValue)
		// 	var tdEmailValue = $(this).parent().siblings('td.email').text(InputEmailValue);

		// 	table.mode = 'add';
		// 	$('#myModal').modal('hide');
		// }

		//return modal.init();

		
		
	},
	del: function(){
		$(this).closest('tr').remove();

	},
	setEvent: function(){
		$('.table').on('click', '.table__action-del', this.del);
		$('.table').on('click', '.table__action-edit', this.edit);

	},
	init : function(){
		this.setEvent()
	}
}