<!-- 引导页 -->
<template>
	<div class="page-container" v-fullscreen>
		<div>
			<mu-container>
			  <router-link to="/shiyixuanwu/index">
			    <mu-list class="list-box">
			      <mu-list-item button :ripple="false"> 
			        <mu-list-item-action>
			          <mu-icon value="radio_button_checked" color="#ef5350"></mu-icon>
			        </mu-list-item-action>
			        <mu-list-item-title>11选5</mu-list-item-title>
			        <mu-list-item-action>
			          <!-- <mu-icon size="24" value="keyboard_arrow_right" color="#9e9e9e"></mu-icon> -->
			        </mu-list-item-action>
			      </mu-list-item>
			    </mu-list>
			  </router-link>
			  <router-link to="/pailiesan/index">
			    <mu-list class="list-box">
			      <mu-list-item button :ripple="false"> 
			        <mu-list-item-action>
			          <mu-icon value="radio_button_checked" color="#4caf50"></mu-icon>
			        </mu-list-item-action>
			        <mu-list-item-title>排列3</mu-list-item-title>
			        <mu-list-item-action>
			          <!-- <mu-icon size="24" value="keyboard_arrow_right" color="#9e9e9e"></mu-icon> -->
			        </mu-list-item-action>
			      </mu-list-item>
			    </mu-list>
			  </router-link>
			  <!-- <router-link to="/kuaisan/index"><mu-paper class="section" circle :z-depth="2">快三</mu-paper></router-link> -->
			</mu-container>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

	.page-container {
		padding-top: 20px;
		background: #f3f3f3;
	  .list-box {
	    background: #fff;
	    padding: 0;
	    margin-bottom: 15px;
	    .x-hr {
	      margin-left: 15px;
	      border-bottom: 1px solid rgba(0,0,0, .06);
	    }
	  }
	}

</style>