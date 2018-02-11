
var modal = {
	mode: 'add',
	modeChange: function(mode){
		modal.mode = 'edit';
	},
	save : function(){
		
		if(modal.mode == 'edit') {
			
			var dataId = $('#myModal').attr('data-id'); // 2
			var tr = $('.table-list tr.listItem__' + dataId);
			var name = $('#InputName').val();
			var email = $('#InputEmail').val();

			
			var tdName = tr.children('td.name').text(name);
			var tdEmail = tr.children('td.email').text(email);

			$('#myModal').attr('data-id', '0').modal('hide').find('input').val('');
			return modal.mode = 'add';
		} else {
			var count = $('#table-list tbody tr').length + 1;
			var tbody = $('#table-list tbody');
			var tr = tbody.find('.template').clone().addClass('listItem__'+ count).removeClass('template');

			var name = $('#InputName').val();
			var email = $('#InputEmail').val();

			var tdNum = tr.children('td.num').text(count);
			var tdName = tr.children('td.name').text(name);
			var tdEmail = tr.children('td.email').text(email);

			tbody.append(tr);
			

			$('#myModal').modal('hide').find('input').val('');
		
		}
	},
	close:function(){
		$('#myModal').modal('hide').find('input').val('');
	},
	setEvent: function(){
		$('.modal').on('click', '#btnSaveChanges', this.save);
		$('#btnClose').click(this.close);
		
	},
	init: function(){
		this.setEvent();
	}
}