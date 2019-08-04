<template>
	<div class="page-container">
		<div class="title">计算结果</div>
		<div class="count">共{{count}}注</div>
		<div class="random-box">
			<div v-for="i,index in randomArr" :key="index">
				<div class="single-btn" :key="index" v-if="i < GLOBAL.pailiesanResult.length">
					<mu-button round color="success" @click="random(i)">随机{{i}}注</mu-button>
				</div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div class="result-box">
			<div class="single-result" v-for="i in result">{{i}}</div>
			<div style="clear: both;"></div>
		</div>
		<div class="bottom-btn">
			<mu-button full-width color="primary" large
				v-clipboard:copy="copyResult"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">复制结果</mu-button>
		</div>
	</div>
</template>

<script>
export default {

	name: 'shiyixuanwu-result',

	data() {
		return {
			allResult: this.GLOBAL.pailiesanResult,
			result: this.GLOBAL.pailiesanResult,
			count: 10,
			randomArr: [1, 5, 10, 20, 50, 100]
		}
	},

	created() {
		console.log(this.GLOBAL)
		this.count = this.GLOBAL.pailiesanResult.length
		this.copyRandom()
	},

	mounted() {

	},

	methods: {

		random(value) {
			this.result = this.getRandomArrayElements(this.allResult, value)
			this.copyRandom()
		},

		copyRandom() {
			this.copyResult = this.result.join('\n')
		},

	  getRandomArrayElements(arr, count) {
	    var shuffled = arr.slice(0),
	      i = arr.length,
	      min = i - count,
	      temp, index
	    while (i-- > min) {
	      index = Math.floor((i + 1) * Math.random())
	      temp = shuffled[index]
	      shuffled[index] = shuffled[i]
	      shuffled[i] = temp
	    }
	    return shuffled.slice(min)
	  },

	  onCopy() {
			this.$toast.success('复制成功！')
	  },

	  onError() {

	  }

	}
}	
</script>

<style scoped lang="scss">

	.page-container {
		padding-bottom: 74px;
	}

	.title {
		color: #f44336;
		text-align: center;
		font-size: 18px;
		margin: 20px 0 15px;
	}

	.count {
		color: #607d8b;
		text-align: center;
		font-size: 14px;
		margin-bottom: 15px;
	}

	.random-box {
		.single-btn {
			width: 33%;
			float: left;
			button {
				width: 100px;
				display: block;
				margin: 15px auto 0;
			}
		}
	}

	.result-box {
		padding-top: 10px;
		.single-result {
			width: 33%;
			text-align: center;
			float: left;
			margin: 10px 0;
		}
	}
	
	.bottom-btn {
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 15px;
	}

</style>