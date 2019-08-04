<template>
	<div>
		<mu-appbar style="width: 100%;" title="11选5脱胆杀号过滤缩水" color="primary"></mu-appbar>
		<div class="box">
	    <mu-select label="选择玩法" v-model="currentResultCount" full-width>
	      <mu-option v-for="option,index in options" :key="option.value" :label="option.label" :value="option.value"></mu-option>
	    </mu-select>
	    <div class="group">
	    	<div class="" style="color: #4caf50;">请选择要脱胆的号码</div>
	    	<div class="ball">
		    	<div class="item-box" v-for="ball,ballIndex in ballArr">
		    		<div class="item" @click="changeFirstBallStatus(ball.status, ballIndex)" :style="{background: ball.status == '1' ? '#4caf50' : (ball.status == '2' ? '#f44336' : '')}">{{ball.value}}</div>
		    	</div>
	    	</div>
	    	<div style="clear: both;"></div>
	    </div>	    
	    <div class="group">
	    	<div class="" style="color: #f44336;">请选择要杀掉的号码</div>
	    	<div class="ball">
		    	<div class="item-box" v-for="ball,ballIndex in ballArr">
		    		<div class="item" @click="changeSecondBallStatus(ball.status, ballIndex)" :style="{background: ball.status == '1' ? '#4caf50' : (ball.status == '2' ? '#f44336' : '')}">{{ball.value}}</div>
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

	name: 'shiyixuanwu-index',

	data() {
		return {
			currentResultCount: 5,
			allBall: [],
			confirmBall: [],
			btnLoading: false,
			ballArr: [
				{
					value: 1,
					status: 0
				},
				{
					value: 2,
					status: 0
				},
				{
					value: 3,
					status: 0
				},
				{
					value: 4,
					status: 0
				},
				{
					value: 5,
					status: 0
				},
				{
					value: 6,
					status: 0
				},
				{
					value: 7,
					status: 0
				},
				{
					value: 8,
					status: 0
				},
				{
					value: 9,
					status: 0
				},
				{
					value: 10,
					status: 0
				},
				{
					value: 11,
					status: 0
				},
			],
			options: [
				{
					label: '11选3',
					value: 3,
				},
				{
					label: '11选4',
					value: 4,
				},
				{
					label: '11选5',
					value: 5,
				},
				{
					label: '11选6',
					value: 6,
				},
				{
					label: '11选7',
					value: 7,
				}
			]
		}
	},

	created() {

	},

	mounted() {

	},

	methods: {

		// 改变第一组球状态
		changeFirstBallStatus(status, index) {
			if (status == 0 || status == 2) {
				this.ballArr[index].status = 1
			} else if (status == 1) {
				this.ballArr[index].status = 0
			}
		},

		// 改变第二组球状态
		changeSecondBallStatus(status ,index) {
			if (status == 0 || status == 1) {
				this.ballArr[index].status = 2
			} else if (status == 2) {
				this.ballArr[index].status = 0
			}
		},

	  arrange(set, number) {
	    var result = [];
	    if (!this.is([], set)) {
	      return result;
	    };
	    (function walk(set, base) {
	      var base = base || [
	        []
	      ];
	      var depth = base[0].length;
	      var length = set.length;
	      var tmp = [];

	      if (depth == number) {
	        result = base;
	        return base;
	      }

	      if (depth == 0) {
	        for (var i = 0; i < length; i++) {
	          tmp.push([set[i]]);
	          result.push([set[i]]);
	        }
	        return walk(set, tmp);
	      } else if (depth == length) {
	        return base;
	      } else {
	        for (var i = 0; i < base.length; i++) {
	          for (var j = 0; j < length; j++) {
	            if (base[i].indexOf(set[j]) == -1) {
	              var arr = base[i].slice();
	              arr.push(set[j]);
	              tmp.push(arr);
	              result.push(arr);
	            }
	          }
	        }
	        return walk(set, tmp);
	      }
	    })(set);
	    return result;
	  },

	  is(type, val) {
	    var toString = ({}).toString;
	    return toString.call(type) === toString.call(val);
	  },

	  // 计算结果
	  computedResult(allBall, confirmBall) {
	    let result = this.arrange(allBall, this.currentResultCount)        // 当前结果个数
	    result.map(i => {
	      i.sort(this.sortNumber)
	    })
	    result = this.uniqueArr(result)
	    confirmBall.map(i => {
	      result = result.filter(j => {
	        return j.indexOf(i) != -1
	      })
	    })

	    this.GLOBAL.shiyixuanwuResult = result
	    this.btnLoading = false
	    this.$router.push('/shiyixuanwu/result')

	  },

	  // 排序
	  sortNumber(a, b) {
	    return a - b
	  },

	  // 去重数组
	  uniqueArr(arr) {
	    var hash = {}
	    var result = []
	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (!hash[arr[i]]) {
	        result.push(arr[i])
	        hash[arr[i]] = true
	      }
	    }
	    return result
	  },

		// 提交结果
		submit() {

			this.allBall = []
			this.confirmBall = []

			this.ballArr.forEach(i => {
				if (i.status == 0 || i.status == 1) {
					this.allBall.push(i.value)
				}
				if (i.status == 1) {
					this.confirmBall.push(i.value)
				}
			})

			// 判断最少要选择的个数
			if (this.allBall.length <= this.currentResultCount) {
				this.$toast.error(`最少选择${this.currentResultCount + 1}个数`)
				return
			}

			// 判断脱胆最多选择个数
			if (this.confirmBall.length >= this.currentResultCount) {
				this.$toast.error(`最多选择${this.currentResultCount - 1}个数脱胆`)
				return
			}

			this.btnLoading = true
			this.computedResult(this.allBall, this.confirmBall)

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