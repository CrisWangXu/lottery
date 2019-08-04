<template>
	<div>
		<mu-appbar style="width: 100%;" title="3D排列三和值缩水" color="primary"></mu-appbar>
		<div class="box">    
	    <div class="group">
	    	<div class="title" style="color: #f44336;">请选择和值</div>
	    	<div class="ball">
		    	<div class="item-box" v-for="ball,ballIndex in ballArr">
		    		<div class="item" @click="changeBallStatus(ballIndex)" :style="{background: ball.selected ? '#4caf50' : ''}">{{ball.value}}</div>
		    	</div>
	    	</div>
	    	<div style="clear: both;"></div>
	    </div>
	    <div class="btn">
				<mu-button full-width color="primary" large @click="submit" :loading="btnLoading">确定</mu-button>
	    </div>
		</div>

	</div>
</template>

<script>
export default {

	name: 'pailiesan-index',

	data() {
		return {
			currentResultCount: 5,
			btnLoading: false,
			ballArr: [
				{
					value: 1,
					selected: false
				},
				{
					value: 2,
					selected: false
				},
				{
					value: 3,
					selected: false
				},
				{
					value: 4,
					selected: false
				},
				{
					value: 5,
					selected: false
				},
				{
					value: 6,
					selected: false
				},
				{
					value: 7,
					selected: false
				},
				{
					value: 8,
					selected: false
				},
				{
					value: 9,
					selected: false
				},
				{
					value: 10,
					selected: false
				},
				{
					value: 11,
					selected: false
				},
				{
					value: 12,
					selected: false
				},
				{
					value: 13,
					selected: false
				},
				{
					value: 14,
					selected: false
				},
				{
					value: 15,
					selected: false
				},
				{
					value: 16,
					selected: false
				},
				{
					value: 17,
					selected: false
				},
				{
					value: 18,
					selected: false
				},
				{
					value: 19,
					selected: false
				},
				{
					value: 20,
					selected: false
				},
				{
					value: 21,
					selected: false
				},
				{
					value: 22,
					selected: false
				},
				{
					value: 23,
					selected: false
				},
				{
					value: 24,
					selected: false
				},
				{
					value: 25,
					selected: false
				},
				{
					value: 26,
					selected: false
				},
				{
					value: 27,
					selected: false
				},
			],
		}
	},

	created() {

	},

	mounted() {

	},

	methods: {

		// 改变号码状态
		changeBallStatus(index) {
			this.ballArr[index].selected = !this.ballArr[index].selected
		},

	  // 计算结果
	  computedResult(arr) {
	    let finalArr = []
	    arr.map(m => {
	      let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	      let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	      let c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	      a.map(i => {
	        b.map(j => {
	          c.map(k => {
	            if (i + j + k == m) {
	              finalArr.push(String(i) + String(j) + String(k))
	            }
	          })
	        })
	      })
	    })
	    this.GLOBAL.pailiesanResult = finalArr
	    this.btnLoading = false
	    this.$router.push('/pailiesan/result')
	  },

		// 提交结果
		submit() {
			this.btnLoading = true
	    let arr = []
	    this.ballArr.map(i => {
	      if (i.selected) {
	        arr.push(i.value)
	      }
	    })
	    console.log(arr)
	    if (!arr.length) {
				this.$toast.error('最少要选择一个数字')
	      return
	    }
	    this.computedResult(arr)
		}

	}
}	
</script>

<style scoped lang="scss">
	.box {
		padding: 20px;
		.group {
			padding: 0;
			text-align: center;
			.title {
				margin: 10px 0;
			}
			.ball {
				padding: 20px 0;
				.item-box {
					width: 20%;
					float: left;
					margin-bottom: 15px;
					.item {
						margin: 0 auto;
						width: 40px;
						height: 40px;
						background: #bdbdbd;
						border-radius: 50%;
						color: #fff;
						line-height: 40px;
						text-align: center;
					}
				}
			}
		}
		.btn {
			padding: 10px;
		}
	}
</style>