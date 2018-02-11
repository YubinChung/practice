var todos = {
	add : function(e){
		// Press Enter 
		if (e.charCode == 13){
			var todoContents = $('#InputTodo').val();
			var sendingJson = { 'name' : todoContents};
			
			// if value is nothing or null 
			if ( todoContents !== '' || todoContents !== null){
			
			/* 
			
				GET : $.get(url)
				POST: $.post(url, parameter) -> parameter have to be json format {key:value}
				PUT, DELETE : $.ajax({})
			
			*/


			$.post("http://139.59.230.182:3002/tasks", sendingJson).done(function(response){
					/* 
						.done(function(response)) 
						always exist response parameter in .done()
					*/

					alert('Success');
					// console.log(response);
					
					// to append data received
					$('#todoList').append('<li data-listitem="' + response._id + '"><span class="todolist--button-del"><i class="fa fa-trash-o"></i></span><p class="list_contents">'+ sendingJson['name'] +'</p></li>');
					
					// input value delete
					todos.reset();
				})
			
			} else {
				alert('Please write the contents');
			}
		}	
	},
	reset: function(){
		var todoContents = $('#InputTodo').val('');
	},
	update: function(){
		$(this).css({"text-decoration": "line-through", "color": "#676161"})
	},
	delete: function(){

		var dataId = $(this).closest('li').attr('data-listitem');
		var dataSendingUrl = "http://139.59.230.182:3002/tasks/" + dataId + "";

		$.ajax({
			url : dataSendingUrl,
			type : "DELETE"
			
		}).done(function(response){
			alert(response.message);
			$('#todoList').find('li[data-listitem="'+ dataId +'"]').remove();
		});
	},
	toggle: function(){
		$('#InputTodo').toggle();
	},
	setEvent: function(){
		$('.container').on('keypress', '#InputTodo', todos.add);
		$('.container').on('click', '.todolist--button-del', todos.delete);
		$('.container').on('click','.btn_toggle', todos.toggle);
		$('.container').on('click','.list_contents', todos.update);

		$.get("http://139.59.230.182:3002/tasks").done(function(response){
			var todoList = $('#todoList');
			var list = response;

			for(var items in list){
				todoList.append('<li data-listitem="'+ list[items]._id + '"><span class="todolist--button-del"><i class="fa fa-trash-o"></i></span><span class="list_contents">'+ list[items].name +'</span></li>')
			}
		});
	},
	init: function(){
		todos.setEvent();
	}
}

