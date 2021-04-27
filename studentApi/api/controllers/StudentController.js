/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `StudentController.index()`
   */
  index: async function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },

  /**
 * `StudentController.index()`
 */
    demo: async function (req, res) {
    return res.render("demo/demo", {title: "démo"})
  }

};

