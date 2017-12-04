<template>
<div class="col-md-3 panelspace">
  <div class="panel panel-info">
    <div class="panel-heading">Backlog</div>
    <div class="panel-body">
      <ul class="list-group"  v-for="amvan in amvans" :key="amvan['.key']" :amvan="amvan" v-if="amvan.status == 'backlog'">
	    <li  
	    class="list-group-item">
	    <div>
	    	<span class="glyphicon glyphicon-ban-circle"></span> {{ amvan.desc }}
	    </div>
	    <div>
	    	<span @click="removeAmvan(amvan['.key'])" class="glyphicon glyphicon-remove pull-right"></span> 
	    </div>	
	    <div>
	    	<span data-toggle="modal" :data-target="`#${amvan['.key']}`" class="glyphicon glyphicon-edit pull-right"></span>
	    </div>	
	    	<span> <small> Assign To {{ amvan.assignto}} </small> </span>
	    	<span class="badge pull-left"> <small> {{ amvan.point }} </small></span> 

			<!-- Modal -->
			<div class="modal fade" :id="amvan['.key']" tabindex="-1" role="dialog" 
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
			                <h4 class="modal-assignto" id="myModalLabel">
			                    Add your question
			                </h4>
			            </div>
			            
			            <!-- Modal Body -->
			            <div class="modal-body">
			                
			                <form class="form-horizontal" role="form">
			                  <div class="form-group">
			                    <label  class="col-sm-2 control-label"
			                              for="assignto">AssignTo</label>
			                    <div class="col-sm-10">
			                        <input v-model="assignto" type="text" class="form-control" 
			                        id="inputEmail3" :placeholder="amvan.assignto"/>
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
			                <button @click="editAmvan(amvan['.key'],amvan)" data-dismiss="modal" type="button" class="btn btn-primary">
			                    Submit
			                </button>
			            </div>
			        </div>
			    </div>
			</div>	    	
	    </li>    	
      </ul>
    </div>
  </div>
</div>      	
</template>

<script>
import {amvanRef} from '../firebase'
export default {
	props: ['amvans'],
	data () {
		return {
			assignto: '',
			desc: '',
			point: '',
			status: ''
		}
	},
	methods : {
		removeAmvan(key) {
			console.log(key)
 			amvanRef.child(key).remove();
		},
		editAmvan(key, exist) {
			console.log(exist)
			amvanRef.child(key).update({
				assignto: this.assignto || exist.assignto, 
				desc: this.desc || exist.desc,
				point: this.point || exist.point,
				status: this.status || exist.status
			})
		}		
	}
}
</script>