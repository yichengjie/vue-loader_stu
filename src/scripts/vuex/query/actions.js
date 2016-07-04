// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
export const queryBrandGroup = function ({ dispatch, state },params) {
	console.info('查询参数 : ' + params) ;
	//模拟从后台取出数据
	setTimeout(function(){
		var list = [1,2,3,4,5] ;
  		dispatch('INITLIST', list) ;
	},1000) ;
} ;