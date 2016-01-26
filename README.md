## jsdoc-export-default-interop
[![npm](https://img.shields.io/npm/v/jsdoc-export-default-interop.svg?style=flat-square)]()
[![Dependency Status](https://david-dm.org/nathanmarks/jsdoc-export-default-interop.svg?style=flat-square)](https://david-dm.org/nathanmarks/jsdoc-export-default-interop)

#### What is this?
A jsdoc plugin for changing exports behaviour so es6 default exports that are not interopable with commonjs module requires are properly documented

#### Installation

Install via NPM.

```bash
$ npm install jsdoc-export-default-interop --save-dev
```

Add plugin to jsdoc conf.json.

```json
{
    "tags": {
        "allowUnknownTags": true
    },
    "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "plugins": ["../node_modules/jsdoc-export-default-interop/dist/index"],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false,
        "default": {
            "outputSourceFiles": true
        }
    }
}
```

---

# API Reference

<a name="module_jsdoc-export-default-interop"></a>
## jsdoc-export-default-interop
A jsdoc plugin for changing exports behaviour
so es6 default exports that are not interopable
with commonjs module requires are properly documented


* [jsdoc-export-default-interop](#module_jsdoc-export-default-interop)
    * [~astNodeVisitor](#module_jsdoc-export-default-interop..astNodeVisitor) : <code>Object</code>
        * [.visitNode(node, e)](#module_jsdoc-export-default-interop..astNodeVisitor.visitNode)


-----

<a name="module_jsdoc-export-default-interop..astNodeVisitor"></a>
### jsdoc-export-default-interop~astNodeVisitor : <code>Object</code>
The plugin object.

**Kind**: inner constant of <code>[jsdoc-export-default-interop](#module_jsdoc-export-default-interop)</code>
**See**: http://usejsdoc.org/about-plugins.html

-----

<a name="module_jsdoc-export-default-interop..astNodeVisitor.visitNode"></a>
#### astNodeVisitor.visitNode(node, e)
Processes nodes as jsdoc walks the syntax tree
and sets default exports to named declarations.

This is to create es5 compatible docs when using
an es6 transpiler such as babel 6 without exporting
defaults in a format that is interopable with commonjs requires

**Kind**: static method of <code>[astNodeVisitor](#module_jsdoc-export-default-interop..astNodeVisitor)</code>

| Param | Type | Description |
| --- | --- | --- |
| node | <code>astNode</code> | JavaScript objects that use the format defined by the Mozilla Parser API |
| e | <code>Object</code> | jsdoc event object |


-----

