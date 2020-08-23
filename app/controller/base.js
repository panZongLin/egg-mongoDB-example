const { Controller } = require('egg');

class BaseController extends Controller {
  
  success(msg, data) {
    this.ctx.body = {
      code: 100,
      msg,
      data,
    };
  }

  notGood(msg, data={}) {
    this.ctx.body = {
      code: -100,
      msg,
      data,
    };
  } 

  fail(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;