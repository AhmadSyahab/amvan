<template>
	    <li  class="list-group-item">
	    	<span class="glyphicon glyphicon-hand-right"></span> {{ amvan.desc }}  
	    	<span @click="removeAmvan(amvan['.key'])" class="glyphicon glyphicon-remove pull-right"></span> 
	    	<span data-toggle="modal" data-target="#modalBacklog" class="glyphicon glyphicon-edit pull-right"></span> 
	    	<span class="badge pull-left">{{ amvan.point }}</span> 

			<!-- Modal -->
			<div class="modal fade" id="modalBacklog" tabindex="-1" role="dialog" 
			     aria-labelledby="myModalLabel" aria-hidden="true">
			    <div class="modal-dialog">
			        <div class="modal-content">
			            <!-- Modal Header -->
			            <div class="modal-header">
			                <button type="button" class="close" 
			                   data-dismiss="modal">
			                       <span aria-hidden="true">&times;</span>
			                       <span class="sr-only">Close</span>
			                </button>
			                <h4 class="modal-title" id="myModalLabel">
			                    Add your question
			                </h4>
			            </div>
			            
			            <!-- Modal Body -->
			            <div class="modal-body">
			                
			                <form class="form-horizontal" role="form">
			                  <div class="form-group">
			                    <label  class="col-sm-2 control-label"
			                              for="title">Title</label>
			                    <div class="col-sm-10">
			                        <input v-model="title" type="text" class="form-control" 
			                        id="inputEmail3" :placeholder="amvan.title"/>
			                    </div>
			                  </div>
			                  <div class="form-group">
			                    <label class="col-sm-2 control-label"
			                          for="ask">Desc</label>
			                    <div class="col-sm-10">
			                        <textarea v-model="desc" id="area" type="text" class="form-control" :placeholder="amvan.desc"/>
			                    </div>
			                  </div>
			                  <div class="form-group">
			                    <label class="col-sm-2 control-label"
			                          for="ask">Point</label>
			                    <div class="col-sm-10">
			                        <input v-model="point" type="text" class="form-control" 
			                        id="inputEmail3" :placeholder="amvan.point"/>
			                    </div>
			                  </div>
			                  <div class="form-group">
				                 <label for="task_status">Task Status:</label>
				                  <select v-model="status" class="form-control">
				                    <option value="backlog">Backlog</option>
				                    <option value="todo">Todo </option>
				                    <option value="doing">Doing</option>
				                    <option value="done">Done</option>
				                  </select>
			                  </div>			                  			                  
			                </form>     
			            </div>    
			            <!-- Modal Footer -->
			            <div class="modal-footer">
			                <button type="button" class="btn btn-default"
			                        data-dismiss="modal">
			                            Close
			                </button>
			                <button  data-dismiss="modal" type="button" class="btn btn-primary">
			                    Submit
			                </button>
			            </div>
			        </div>
			    </div>
			</div>				    	
	    </li>   				
</template>

<script>
export default {
	props: ['amvan'],
	data () {
		return {
			title: '',
			desc: '',
			point: '',
			status: ''
		}
	},	
}	
</script>