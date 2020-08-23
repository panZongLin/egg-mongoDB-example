const Controller = require('./base');

class NewsController extends Controller {
  async getUserInfo() {
    const ctx = this.ctx;
    // console.log('ctx', ctx)
    // console.log('app', this.app)
    
    const result = await ctx.model.User.find();
    this.success('获取成功', result);
  }

  async updateUserInfo() {
    const ctx = this.ctx;    
    const {userid, ...rest} = ctx.request.body;
    if(!userid) {
      this.notGood('缺少用户ID');
      return
    }
    const result = await ctx.model.User.update({userid}, rest);
    this.success('更新成功', await ctx.model.User.find({userid}) );
  }

  async createUserInfo() {
    const ctx = this.ctx;    
    const result = await ctx.model.User.create(ctx.request.body);
    this.success('添加成功', result);
  }

  async removeUserInfo() {
    const ctx = this.ctx;   
    const {userid, ...rest} = ctx.request.body;
    if(!userid) {
      this.notGood("缺少用户ID，将会删除整个集合，如果您确定的话，请加一行参数clear：'all' ");
      if(!rest.clear) {return}
    }
    const result = await ctx.model.User.remove(userid || {});
    this.success('删除成功', result);
  }

}

module.exports = NewsController;