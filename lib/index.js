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
    console.log(node.type);
    if (node.type === Syntax.ExportDefaultDeclaration) {
      setNodeToNamed.call(e);
    }
  }

};

function setNodeToNamed (name = 'default') {
  this.astnode.type = Syntax.ExportNamedDeclaration;
  this.code = getInfo(this.astnode);
  this.code.name = `exports.${name}`;
}
