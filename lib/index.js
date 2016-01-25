import { Syntax } from 'jsdoc/src/syntax';
import { getInfo } from 'jsdoc/src/astnode';

/**
 * A jsdoc plugin for changing exports behaviour
 * so es6 default exports that are not interopable
 * with commonjs module requires are properly documented
 *
 * @module jsdoc-export-default-interop
 */

/**
 * The plugin object.
 *
 * @see http://usejsdoc.org/about-plugins.html
 * @type {Object}
 */
export const astNodeVisitor = {

  visitNode (node, e) {
    if (node.type === Syntax.ExportDefaultDeclaration) {
      setNodeToNamed.call(e);
    }
  }

};

/**
 * Test comment
 *
 * @param {String} name Test desc
 */
function setNodeToNamed (name = 'default') {
  this.astnode.type = Syntax.ExportNamedDeclaration;
  this.code = getInfo(this.astnode);
  this.code.name = `exports.${name}`;
}
