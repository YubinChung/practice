var todos = {
	add : function(e){
		if (e.charCode == 13){
			
			var todoList = $('#todoList');
			var todoItems = todoList.find('li');
			var todoContents = $('#InputTodo').val();
			var count = todoItems.length + 1;
			

			if( todoContents !== '') {
				todoList.append('<li class="listItem__'+ count + '"><span class="todolist--button-del"><i class="fa fa-trash-o"></i></span>'+ todoContents +'</li>')
			}


			todos.reset();

			return false;	
		}
	},
	reset: function(){
		var todoContents = $('#InputTodo').val('');
	},
	delete: function(){
		console.log('delete');
		$(this).closest('li').hide();
	},
	toggle: function(){
		$('#InputTodo').toggle();
	},
	setEvent: function(){
		$('.container').on('keypress','#InputTodo', todos.add);
		$('.container').on('click', '.todolist--button-del', todos.delete);
		$('.container').on('click','.btn_toggle', todos.toggle)
		
	},
	init: function(){
		todos.setEvent();
	}
}

