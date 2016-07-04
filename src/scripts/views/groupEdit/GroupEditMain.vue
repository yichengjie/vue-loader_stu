<template>
	<div class="container">
		<div class="col-sm-8">
			<validator name="validation">
			<form class="form-horizontal" novalidate>
			  <div class="form-group" :class="{ 'has-error': $validation.email.minlength }">
			    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
			    <div class="col-sm-6">
			      <input type="text" class="form-control" v-validate:email="{ minlength: 2, maxlength: 10 }"
			      id="inputEmail3"  placeholder="Email">
			    </div>
			    <div class="col-sm-4 errors">
			    	 <span v-show="$validation.email.minlength">Your comment is too short.</span>
      				<span v-show="$validation.email.maxlength">Your comment is too long.</span>
			    </div>
			  </div>
			  <div class="form-group">
			    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
			    <div class="col-sm-6">
			      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
			    </div>
			  </div>
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-6">
			      <div class="checkbox">
			        <label>
			          <input type="checkbox"> Remember me
			        </label>
			      </div>
			    </div>
			  </div>
			  <div class="form-group">
			    <div class="col-sm-offset-2 col-sm-10">
			      <button type="button" class="btn btn-default">Sign in</button>
			    </div>
			  </div>
			</form>
			</validator>
		</div>
	</div>
</template>

<style>
	.errors{
		color:red;
		margin-top: 7px;
	}
</style>