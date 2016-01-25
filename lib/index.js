import { Syntax } from 'jsdoc/src/syntax';
import { getInfo } from 'jsdoc/src/astnode';

/**
 * A jsdoc plugin for detecting the use of a commonjs
 * interop in default exports from es6 module export syntax.
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

function setNodeToNamed (name = 'default') {
  this.astnode.type = Syntax.ExportNamedDeclaration;
  this.code = getInfo(this.astnode);
  this.code.name = `exports.${name}`;
}
