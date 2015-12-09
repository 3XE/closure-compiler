/**
 * @fileoverview Externs for Knockout.js
 *
 * API Reference: http://knockoutjs.com/documentation/introduction.html
 *
 * @externs
 */

 /** @const - Knockout namespace */
 var ko = {};

/**
 * @constructor
 * @param {?} initialValue
 * @return {ko.observable}
 */
ko.observable = function(initialValue) {};

/**
 * @param  {function(?):?} callback       [description]
 * @param  {null=}   callbackTarget [description]
 * @param  {string=}   event          [description]
 */
ko.observable.prototype.subscribe = function (callback, callbackTarget, event) {};

ko.observableArray

ko.computed

ko.components.register
ko.components.isRegistered
ko.components
ko.components.get
ko.components.clearCachedDefinition

ko.jqueryTmplTemplateEngine
ko.nativeTemplateEngine
ko.setTemplateEngine
ko.templateEngine
ko.templateSources
ko.templateSources.domElement

ko.utils
ko.utils.arrayForEach
ko.utils.arrayFirst
ko.utils.arrayFilter
ko.utils.compareArrays
ko.utils.domData
ko.utils.domData.clear
ko.utils.domNodeDisposal
ko.utils.domNodeDisposal.addDisposeCallback
ko.utils.parseHtmlFragment
ko.utils.setDomNodeChildrenFromArrayMapping
ko.utils.setHtml

ko.isComputed
ko.isObservable
ko.isWriteableObservable

ko.toJS
ko.toJSON

ko.virtualElements
ko.virtualElements.allowedBindings
ko.virtualElements.emptyNode

ko.expressionRewriting
ko.expressionRewriting.bindingRewriteValidators
ko.bindingProvider
ko.extenders
ko.computedContext
ko.computedContext.getDependenciesCount

ko.memoization
ko.memoization.memoize
ko.memoization.unmemoize

ko.tasks
ko.tasks.schedule

ko.cleanNode
ko.removeNode

ko.selectExtensions
ko.selectExtensions.readValue
ko.selectExtensions.writeValue
