import {controller} from '../../classes/classController';
import m from '../../model/users/userModel'

let model = new m()
let rtr = controller(model)

module.exports = rtr