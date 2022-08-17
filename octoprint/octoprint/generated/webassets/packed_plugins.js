// JS assets for plugin mqtt
(function () {
    try {
        // source: plugin/mqtt/js/mqtt.js
        $(function() {
            function MQTTViewModel(parameters) {
                var self = this;
        
                self.global_settings = parameters[0];
        
                self.showUserCredentials = ko.observable(false);
                self.showClientID = ko.observable(false);
        
                self.settings = undefined;
                self.availableProtocols = ko.observableArray(['MQTTv31','MQTTv311']);
        
                self.onBeforeBinding = function () {
                    self.settings = self.global_settings.settings.plugins.mqtt;
        
                    // show credential options if username is set
                    self.showUserCredentials(!!self.settings.broker.username());
        
                    // show client_id options if client_id is set
                    self.showClientID(!!self.settings.client.client_id());
                };
            }
        
            ADDITIONAL_VIEWMODELS.push([
                MQTTViewModel,
                ["settingsViewModel"],
                ["#settings_plugin_mqtt"]
            ]);
        });
        
        ;
        
    } catch (error) {
        log.error("Error in JS assets for plugin mqtt:", (error.stack || error));
    }
})();

// JS assets for plugin mqttsubscribe
(function () {
    try {
        // source: plugin/mqttsubscribe/js/jquery-ui.min.js
        /*! jQuery UI - v1.12.1 - 2018-11-18
        * http://jqueryui.com
        * Includes: widget.js, data.js, disable-selection.js, scroll-parent.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/mouse.js
        * Copyright jQuery Foundation and other contributors; Licensed MIT */
        
        (function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var s=!1;t(document).on("mouseup",function(){s=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!s){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),s=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,s=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))
        },_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,o=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&n(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(o=!0,!1):void 0}),o?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var n=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,l=a+e.helperProportions.height,h=i.offset.left,c=i.offset.top,u=h+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=h&&u>=r&&a>=c&&d>=l;case"intersect":return o+e.helperProportions.width/2>h&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,h,i.proportions().width);case"touch":return(a>=c&&d>=a||l>=c&&d>=l||c>a&&l>d)&&(o>=h&&u>=o||r>=h&&u>=r||h>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&n(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,o,a,r=n(e,this,this.options.tolerance,i),l=!r&&this.isover?"isout":r&&!this.isover?"isover":null;l&&(this.options.greedy&&(o=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===o}),a.length&&(s=t(a[0]).droppable("instance"),s.greedyChild="isover"===l)),s&&"isover"===l&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[l]=!0,this["isout"===l?"isover":"isout"]=!1,this["isover"===l?"_over":"_out"].call(this,i),s&&"isout"===l&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,l=this._change[o];return this._updatePrevProperties(),l?(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),n&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=l._num(e.css("padding"+s))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,n=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:n,l.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,h=l[0]||1,c=l[1]||1,u=Math.round((n.width-o.width)/h)*h,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=l,_&&(p+=h),v&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,l=e.pageY;return o>r&&(i=r,r=o,o=i),a>l&&(i=l,l=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:l-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?h=!(c.left>r||o>c.right||c.top>l||a>c.bottom):"fit"===n.tolerance&&(h=c.left>o&&r>c.right&&c.top>a&&l>c.bottom),h?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
        this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+h>r&&l>s+h,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&l>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],l=[],h=this._connectWith();if(h&&e)for(s=h.length-1;s>=0;s--)for(o=t(h[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=l.length-1;s>=0;s--)l[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,h=r.length;h>s;s++)l=t(r[s]),l.data(this.widgetName+"-item",a),c.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,l,h,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(l=this.items[s].item.offset()[a],h=!1,e[u]-l>this.items[s][r]/2&&(h=!0),n>Math.abs(e[u]-l)&&(n=Math.abs(e[u]-l),o=this.items[s],this.direction=h?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})});
        ;
        
        // source: plugin/mqttsubscribe/js/knockout-sortable.1.2.0.js
        // knockout-sortable 1.2.0 | (c) 2019 Ryan Niemeyer |  http://www.opensource.org/licenses/mit-license
        ;(function(factory) {
            if (typeof define === "function" && define.amd) {
                // AMD anonymous module
                define(["knockout", "jquery", "jquery-ui/ui/widgets/sortable", "jquery-ui/ui/widgets/draggable", "jquery-ui/ui/widgets/droppable"], factory);
            } else if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
                // CommonJS module
                var ko = require("knockout"),
                    jQuery = require("jquery");
                require("jquery-ui/ui/widgets/sortable");
                require("jquery-ui/ui/widgets/draggable");
                require("jquery-ui/ui/widgets/droppable");
                factory(ko, jQuery);
            } else {
                // No module loader (plain <script> tag) - put directly in global namespace
                factory(window.ko, window.jQuery);
            }
        })(function(ko, $) {
            var ITEMKEY = "ko_sortItem",
                INDEXKEY = "ko_sourceIndex",
                LISTKEY = "ko_sortList",
                PARENTKEY = "ko_parentList",
                DRAGKEY = "ko_dragItem",
                unwrap = ko.utils.unwrapObservable,
                dataGet = ko.utils.domData.get,
                dataSet = ko.utils.domData.set,
                version = $.ui && $.ui.version,
                //1.8.24 included a fix for how events were triggered in nested sortables. indexOf checks will fail if version starts with that value (0 vs. -1)
                hasNestedSortableFix = version && version.indexOf("1.6.") && version.indexOf("1.7.") && (version.indexOf("1.8.") || version === "1.8.24");
        
            //internal afterRender that adds meta-data to children
            var addMetaDataAfterRender = function(elements, data) {
                ko.utils.arrayForEach(elements, function(element) {
                    if (element.nodeType === 1) {
                        dataSet(element, ITEMKEY, data);
                        dataSet(element, PARENTKEY, dataGet(element.parentNode, LISTKEY));
                    }
                });
            };
        
            //prepare the proper options for the template binding
            var prepareTemplateOptions = function(valueAccessor, dataName) {
                var result = {},
                    options = {},
                    actualAfterRender;
        
                //build our options to pass to the template engine
                if (ko.utils.peekObservable(valueAccessor()).data) {
                    options = unwrap(valueAccessor() || {});
                    result[dataName] = options.data;
                    if (options.hasOwnProperty("template")) {
                        result.name = options.template;
                    }
                } else {
                    result[dataName] = valueAccessor();
                }
        
                ko.utils.arrayForEach(["afterAdd", "afterRender", "as", "beforeRemove", "includeDestroyed", "templateEngine", "templateOptions", "nodes"], function (option) {
                    if (options.hasOwnProperty(option)) {
                        result[option] = options[option];
                    } else if (ko.bindingHandlers.sortable.hasOwnProperty(option)) {
                        result[option] = ko.bindingHandlers.sortable[option];
                    }
                });
        
                //use an afterRender function to add meta-data
                if (dataName === "foreach") {
                    if (result.afterRender) {
                        //wrap the existing function, if it was passed
                        actualAfterRender = result.afterRender;
                        result.afterRender = function(element, data) {
                            addMetaDataAfterRender.call(data, element, data);
                            actualAfterRender.call(data, element, data);
                        };
                    } else {
                        result.afterRender = addMetaDataAfterRender;
                    }
                }
        
                //return options to pass to the template binding
                return result;
            };
        
            var updateIndexFromDestroyedItems = function(index, items) {
                var unwrapped = unwrap(items);
        
                if (unwrapped) {
                    for (var i = 0; i <= index; i++) {
                        //add one for every destroyed item we find before the targetIndex in the target array
                        if (unwrapped[i] && unwrap(unwrapped[i]._destroy)) {
                            index++;
                        }
                    }
                }
        
                return index;
            };
        
            //remove problematic leading/trailing whitespace from templates
            var stripTemplateWhitespace = function(element, name) {
                var templateSource,
                    templateElement;
        
                //process named templates
                if (name) {
                    templateElement = document.getElementById(name);
                    if (templateElement) {
                        templateSource = new ko.templateSources.domElement(templateElement);
                        templateSource.text($.trim(templateSource.text()));
                    }
                }
                else {
                    //remove leading/trailing non-elements from anonymous templates
                    $(element).contents().each(function() {
                        if (this && this.nodeType !== 1) {
                            element.removeChild(this);
                        }
                    });
                }
            };
        
            //connect items with observableArrays
            ko.bindingHandlers.sortable = {
                init: function(element, valueAccessor, allBindingsAccessor, data, context) {
                    var $element = $(element),
                        value = unwrap(valueAccessor()) || {},
                        templateOptions = prepareTemplateOptions(valueAccessor, "foreach"),
                        sortable = {},
                        startActual, updateActual;
        
                    stripTemplateWhitespace(element, templateOptions.name);
        
                    //build a new object that has the global options with overrides from the binding
                    $.extend(true, sortable, ko.bindingHandlers.sortable);
                    if (value.options && sortable.options) {
                        ko.utils.extend(sortable.options, value.options);
                        delete value.options;
                    }
                    ko.utils.extend(sortable, value);
        
                    //if allowDrop is an observable or a function, then execute it in a computed observable
                    if (sortable.connectClass && (ko.isObservable(sortable.allowDrop) || typeof sortable.allowDrop == "function")) {
                        ko.computed({
                            read: function() {
                                var value = unwrap(sortable.allowDrop),
                                    shouldAdd = typeof value == "function" ? value.call(this, templateOptions.foreach) : value;
                                ko.utils.toggleDomNodeCssClass(element, sortable.connectClass, shouldAdd);
                            },
                            disposeWhenNodeIsRemoved: element
                        }, this);
                    } else {
                        ko.utils.toggleDomNodeCssClass(element, sortable.connectClass, sortable.allowDrop);
                    }
        
                    //wrap the template binding
                    ko.bindingHandlers.template.init(element, function() { return templateOptions; }, allBindingsAccessor, data, context);
        
                    //keep a reference to start/update functions that might have been passed in
                    startActual = sortable.options.start;
                    updateActual = sortable.options.update;
        
                    //ensure draggable table row cells maintain their width while dragging (unless a helper is provided)
                    if ( !sortable.options.helper ) {
                        sortable.options.helper = function(e, ui) {
                            if (ui.is("tr")) {
                                ui.children().each(function() {
                                    $(this).width($(this).width());
                                });
                            }
                            return ui;
                        };
                    }
        
                    //initialize sortable binding after template binding has rendered in update function
                    var createTimeout = setTimeout(function() {
                        var dragItem;
                        var originalReceive = sortable.options.receive;
        
                        $element.sortable(ko.utils.extend(sortable.options, {
                            start: function(event, ui) {
                                //track original index
                                var el = ui.item[0];
                                dataSet(el, INDEXKEY, ko.utils.arrayIndexOf(ui.item.parent().children(), el));
        
                                //make sure that fields have a chance to update model
                                ui.item.find("input:focus").change();
                                if (startActual) {
                                    startActual.apply(this, arguments);
                                }
                            },
                            receive: function(event, ui) {
                                //optionally apply an existing receive handler
                                if (typeof originalReceive === "function") {
                                    originalReceive.call(this, event, ui);
                                }
        
                                dragItem = dataGet(ui.item[0], DRAGKEY);
                                if (dragItem) {
                                    //copy the model item, if a clone option is provided
                                    if (dragItem.clone) {
                                        dragItem = dragItem.clone();
                                    }
        
                                    //configure a handler to potentially manipulate item before drop
                                    if (sortable.dragged) {
                                        dragItem = sortable.dragged.call(this, dragItem, event, ui) || dragItem;
                                    }
                                }
                            },
                            update: function(event, ui) {
                                var sourceParent, targetParent, sourceIndex, targetIndex, arg,
                                    el = ui.item[0],
                                    parentEl = ui.item.parent()[0],
                                    item = dataGet(el, ITEMKEY) || dragItem;
        
                                if (!item) {
                                    $(el).remove();
                                }
                                dragItem = null;
        
                                //make sure that moves only run once, as update fires on multiple containers
                                if (item && (this === parentEl) || (!hasNestedSortableFix && $.contains(this, parentEl))) {
                                    //identify parents
                                    sourceParent = dataGet(el, PARENTKEY);
                                    sourceIndex = dataGet(el, INDEXKEY);
                                    targetParent = dataGet(el.parentNode, LISTKEY);
                                    targetIndex = ko.utils.arrayIndexOf(ui.item.parent().children(), el);
        
                                    //take destroyed items into consideration
                                    if (!templateOptions.includeDestroyed) {
                                        sourceIndex = updateIndexFromDestroyedItems(sourceIndex, sourceParent);
                                        targetIndex = updateIndexFromDestroyedItems(targetIndex, targetParent);
                                    }
        
                                    //build up args for the callbacks
                                    if (sortable.beforeMove || sortable.afterMove) {
                                        arg = {
                                            item: item,
                                            sourceParent: sourceParent,
                                            sourceParentNode: sourceParent && ui.sender || el.parentNode,
                                            sourceIndex: sourceIndex,
                                            targetParent: targetParent,
                                            targetIndex: targetIndex,
                                            cancelDrop: false
                                        };
        
                                        //execute the configured callback prior to actually moving items
                                        if (sortable.beforeMove) {
                                            sortable.beforeMove.call(this, arg, event, ui);
                                        }
                                    }
        
                                    //call cancel on the correct list, so KO can take care of DOM manipulation
                                    if (sourceParent) {
                                        $(sourceParent === targetParent ? this : ui.sender || this).sortable("cancel");
                                    }
                                    //for a draggable item just remove the element
                                    else {
                                        $(el).remove();
                                    }
        
                                    //if beforeMove told us to cancel, then we are done
                                    if (arg && arg.cancelDrop) {
                                        return;
                                    }
        
                                    //if the strategy option is unset or false, employ the order strategy involving removal and insertion of items
                                    if (!sortable.hasOwnProperty("strategyMove") || sortable.strategyMove === false) {
                                        //do the actual move
                                        if (targetIndex >= 0) {
                                            if (sourceParent) {
                                                sourceParent.splice(sourceIndex, 1);
        
                                                //if using deferred updates plugin, force updates
                                                if (ko.processAllDeferredBindingUpdates) {
                                                    ko.processAllDeferredBindingUpdates();
                                                }
        
                                                //if using deferred updates on knockout 3.4, force updates
                                                if (ko.options && ko.options.deferUpdates) {
                                                    ko.tasks.runEarly();
                                                }
                                            }
        
                                            targetParent.splice(targetIndex, 0, item);
                                        }
        
                                        //rendering is handled by manipulating the observableArray; ignore dropped element
                                        dataSet(el, ITEMKEY, null);
                                    }
                                    else { //employ the strategy of moving items
                                        if (targetIndex >= 0) {
                                            if (sourceParent) {
                                                if (sourceParent !== targetParent) {
                                                    // moving from one list to another
        
                                                    sourceParent.splice(sourceIndex, 1);
                                                    targetParent.splice(targetIndex, 0, item);
        
                                                    //rendering is handled by manipulating the observableArray; ignore dropped element
                                                    dataSet(el, ITEMKEY, null);
                                                    ui.item.remove();
                                                }
                                                else {
                                                    // moving within same list
                                                    var underlyingList = unwrap(sourceParent);
        
                                                    // notify 'beforeChange' subscribers
                                                    if (sourceParent.valueWillMutate) {
                                                        sourceParent.valueWillMutate();
                                                    }
        
                                                    // move from source index ...
                                                    underlyingList.splice(sourceIndex, 1);
                                                    // ... to target index
                                                    underlyingList.splice(targetIndex, 0, item);
        
                                                    // notify subscribers
                                                    if (sourceParent.valueHasMutated) {
                                                        sourceParent.valueHasMutated();
                                                    }
                                                }
                                            }
                                            else {
                                                // drop new element from outside
                                                targetParent.splice(targetIndex, 0, item);
        
                                                //rendering is handled by manipulating the observableArray; ignore dropped element
                                                dataSet(el, ITEMKEY, null);
                                                ui.item.remove();
                                            }
                                        }
                                    }
        
                                    //if using deferred updates plugin, force updates
                                    if (ko.processAllDeferredBindingUpdates) {
                                        ko.processAllDeferredBindingUpdates();
                                    }
        
                                    //allow binding to accept a function to execute after moving the item
                                    if (sortable.afterMove) {
                                        sortable.afterMove.call(this, arg, event, ui);
                                    }
                                }
        
                                if (updateActual) {
                                    updateActual.apply(this, arguments);
                                }
                            },
                            connectWith: sortable.connectClass ? "." + sortable.connectClass : false
                        }));
        
                        //handle enabling/disabling sorting
                        if (sortable.isEnabled !== undefined) {
                            ko.computed({
                                read: function() {
                                    $element.sortable(unwrap(sortable.isEnabled) ? "enable" : "disable");
                                },
                                disposeWhenNodeIsRemoved: element
                            });
                        }
                    }, 0);
        
                    //handle disposal
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                        //only call destroy if sortable has been created
                        if ($element.data("ui-sortable") || $element.data("sortable")) {
                            $element.sortable("destroy");
                        }
        
                        ko.utils.toggleDomNodeCssClass(element, sortable.connectClass, false);
        
                        //do not create the sortable if the element has been removed from DOM
                        clearTimeout(createTimeout);
                    });
        
                    return { 'controlsDescendantBindings': true };
                },
                update: function(element, valueAccessor, allBindingsAccessor, data, context) {
                    var templateOptions = prepareTemplateOptions(valueAccessor, "foreach");
        
                    //attach meta-data
                    dataSet(element, LISTKEY, templateOptions.foreach);
        
                    //call template binding's update with correct options
                    ko.bindingHandlers.template.update(element, function() { return templateOptions; }, allBindingsAccessor, data, context);
                },
                connectClass: 'ko_container',
                allowDrop: true,
                afterMove: null,
                beforeMove: null,
                options: {}
            };
        
            //create a draggable that is appropriate for dropping into a sortable
            ko.bindingHandlers.draggable = {
                init: function(element, valueAccessor, allBindingsAccessor, data, context) {
                    var value = unwrap(valueAccessor()) || {},
                        options = value.options || {},
                        draggableOptions = ko.utils.extend({}, ko.bindingHandlers.draggable.options),
                        templateOptions = prepareTemplateOptions(valueAccessor, "data"),
                        connectClass = value.connectClass || ko.bindingHandlers.draggable.connectClass,
                        isEnabled = value.isEnabled !== undefined ? value.isEnabled : ko.bindingHandlers.draggable.isEnabled;
        
                    value = "data" in value ? value.data : value;
        
                    //set meta-data
                    dataSet(element, DRAGKEY, value);
        
                    //override global options with override options passed in
                    ko.utils.extend(draggableOptions, options);
        
                    //setup connection to a sortable
                    draggableOptions.connectToSortable = connectClass ? "." + connectClass : false;
        
                    //initialize draggable
                    $(element).draggable(draggableOptions);
        
                    //handle enabling/disabling sorting
                    if (isEnabled !== undefined) {
                        ko.computed({
                            read: function() {
                                $(element).draggable(unwrap(isEnabled) ? "enable" : "disable");
                            },
                            disposeWhenNodeIsRemoved: element
                        });
                    }
        
                    //handle disposal
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                        $(element).draggable("destroy");
                    });
        
                    return ko.bindingHandlers.template.init(element, function() { return templateOptions; }, allBindingsAccessor, data, context);
                },
                update: function(element, valueAccessor, allBindingsAccessor, data, context) {
                    var templateOptions = prepareTemplateOptions(valueAccessor, "data");
        
                    return ko.bindingHandlers.template.update(element, function() { return templateOptions; }, allBindingsAccessor, data, context);
                },
                connectClass: ko.bindingHandlers.sortable.connectClass,
                options: {
                    helper: "clone"
                }
            };
        
            // Simple Droppable Implementation
            // binding that updates (function or observable)
            ko.bindingHandlers.droppable = {
                init: function(element, valueAccessor, allBindingsAccessor, data, context) {
                    var value = unwrap(valueAccessor()) || {},
                        options = value.options || {},
                        droppableOptions = ko.utils.extend({}, ko.bindingHandlers.droppable.options),
                        isEnabled = value.isEnabled !== undefined ? value.isEnabled : ko.bindingHandlers.droppable.isEnabled;
        
                    //override global options with override options passed in
                    ko.utils.extend(droppableOptions, options);
        
                    //get reference to drop method
                    value = "data" in value ? value.data : valueAccessor();
        
                    //set drop method
                    droppableOptions.drop = function(event, ui) {
                        var droppedItem = dataGet(ui.draggable[0], DRAGKEY) || dataGet(ui.draggable[0], ITEMKEY);
                        value(droppedItem);
                    };
        
                    //initialize droppable
                    $(element).droppable(droppableOptions);
        
                    //handle enabling/disabling droppable
                    if (isEnabled !== undefined) {
                        ko.computed({
                            read: function() {
                                $(element).droppable(unwrap(isEnabled) ? "enable": "disable");
                            },
                            disposeWhenNodeIsRemoved: element
                        });
                    }
        
                    //handle disposal
                    ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                        $(element).droppable("destroy");
                    });
                },
                options: {
                    accept: "*"
                }
            };
        });
        
        ;
        
        // source: plugin/mqttsubscribe/js/mqttsubscribe.js
        /*
         * View model for OctoPrint-MQTTSubscribe
         *
         * Author: jneilliii
         * License: AGPLv3
         */
        $(function() {
        	function MQTTSubscribeViewModel(parameters) {
        		var self = this;
        
        		self.loginStateViewModel = parameters[0];
        		self.settingsViewModel = parameters[1];
        
        		self.topics = ko.observableArray();
        		self.selected_topic = ko.observable();
        
        		self.retrieving_key = ko.observable(false);
        
        		self.onBeforeBinding = function() {
        			self.topics(self.settingsViewModel.settings.plugins.mqttsubscribe.topics());
        		}
        
        		self.onEventSettingsUpdated = function(payload) {
        			self.topics(self.settingsViewModel.settings.plugins.mqttsubscribe.topics());
        		}
        
        		self.onDataUpdaterPluginMessage = function(plugin, data) {
        			if (plugin !== "mqttsubscribe") {
        				return;
        			}
        
        			if(data.topic) {
        				new PNotify({
        					title: 'MQTT Command Received for ' + data.topic,
        					text: 'message: <pre>' + data.message + '</pre>',
        					type: 'info',
        					hide: true
        					});
        			}
        
        			if(data.error) {
        				new PNotify({
        					title: 'MQTTSubscribe Error',
        					text: '<pre>' + data.error + '</pre>',
        					type: 'error',
        					hide: false
        					});
        			}
        		};
        
        		self.getAppKey = function() {
        			self.retrieving_key(true);
        			OctoPrint.plugins.appkeys.authenticate("MQTT Subscribe", self.loginStateViewModel.userMenuText())
        				.done(function(api_key) {
        					self.settingsViewModel.settings.plugins.mqttsubscribe.api_key(api_key);
        					self.retrieving_key(false);
        				})
        				.fail(function() {
        					self.retrieving_key(false);
        					new PNotify({
        						title: 'MQTTSubscribe Error',
        						text: 'There was an error requesting an API key or the request was denied.',
        						type: 'error',
        						hide: true
        						});
        				});
        		}
        
        		self.showEditor = function(data) {
        			self.selected_topic(data);
        			$('#mqttTopicEditor').modal('show');
        		};
        
        		self.copyKey = function(data){
        			copyToClipboard(data.settingsViewModel.settings.plugins.mqttsubscribe.api_key());
        		}
        
        		self.removeKey = function(data){
        			self.settingsViewModel.settings.plugins.mqttsubscribe.api_key('');
        		}
        
        		self.addTopic = function(data) {
        			self.selected_topic({'topic':ko.observable(''),
        								'extract':ko.observable(''),
        								'type':ko.observable('post'),
        								'rest':ko.observable(''),
        								'command':ko.observable(''),
        								'disable_popup':ko.observable(false)
        								});
        			self.settingsViewModel.settings.plugins.mqttsubscribe.topics.push(self.selected_topic());
        			$('#mqttTopicEditor').modal('show');
        		}
        
        		self.copyTopic = function(data) {
        			self.selected_topic({'topic':ko.observable(data.topic()),
        							'extract':ko.observable(data.extract()),
        							'type':ko.observable(data.type()),
        							'rest':ko.observable(data.rest()),
        							'command':ko.observable(data.command()),
        							'disable_popup':ko.observable(data.disable_popup())
        							});
        			self.settingsViewModel.settings.plugins.mqttsubscribe.topics.push(self.selected_topic());
        			$('#mqttTopicEditor').modal('show');
        		}
        
        		self.removeTopic = function(data) {
        			self.settingsViewModel.settings.plugins.mqttsubscribe.topics.remove(data);
        		}
        	}
        
        	OCTOPRINT_VIEWMODELS.push({
        		construct: MQTTSubscribeViewModel,
        		dependencies: ["loginStateViewModel", "settingsViewModel"],
        		elements: ["#settings_plugin_mqttsubscribe"]
        	});
        });
        
        ;
        
    } catch (error) {
        log.error("Error in JS assets for plugin mqttsubscribe:", (error.stack || error));
    }
})();

// JS assets for plugin psucontrol
(function () {
    try {
        // source: plugin/psucontrol/js/psucontrol.js
        $(function() {
            function PSUControlViewModel(parameters) {
                var self = this;
        
                self.settingsViewModel = parameters[0]
                self.loginState = parameters[1];
                
                self.settings = undefined;
        
                self.sensingPlugin_old = "";
                self.switchingPlugin_old = "";
        
                self.scripts_gcode_psucontrol_post_on = ko.observable(undefined);
                self.scripts_gcode_psucontrol_pre_off = ko.observable(undefined);
        
                self.isPSUOn = ko.observable(undefined);
        
                self.psu_indicator = $("#psucontrol_indicator");
        
                self.onBeforeBinding = function() {
                    self.settings = self.settingsViewModel.settings;
        
                    self.settings.plugins.psucontrol.sensingPlugin.subscribe(function(oldValue) {
                        self.sensingPlugin_old = oldValue;
                    }, this, 'beforeChange');
        
                    self.settings.plugins.psucontrol.switchingPlugin.subscribe(function(oldValue) {
                        self.switchingPlugin_old = oldValue;
                    }, this, 'beforeChange');
        
                    self.settings.plugins.psucontrol.sensingPlugin.subscribe(function(newValue) {
                        if (newValue === "_GET_MORE_") {
                            self.openGetMore();
                            self.settings.plugins.psucontrol.sensingPlugin(self.sensingPlugin_old);
                        }
                    });
        
                    self.settings.plugins.psucontrol.switchingPlugin.subscribe(function(newValue) {
                        if (newValue === "_GET_MORE_") {
                            self.openGetMore();
                            self.settings.plugins.psucontrol.switchingPlugin(self.switchingPlugin_old);
                        }
                    });
        
                    self.sensingPlugin_old = self.settings.plugins.psucontrol.sensingPlugin();
                    self.switchingPlugin_old = self.settings.plugins.psucontrol.switchingPlugin();
                };
        
                self.onSettingsShown = function () {
                    self.scripts_gcode_psucontrol_post_on(self.settings.scripts.gcode["psucontrol_post_on"]());
                    self.scripts_gcode_psucontrol_pre_off(self.settings.scripts.gcode["psucontrol_pre_off"]());
                };
        
                self.onSettingsHidden = function () {
                    self.settings.plugins.psucontrol.scripts_gcode_psucontrol_post_on = null;
                    self.settings.plugins.psucontrol.scripts_gcode_psucontrol_pre_off = null;
                };
        
                self.onSettingsBeforeSave = function () {
                    if (self.scripts_gcode_psucontrol_post_on() !== undefined) {
                        if (self.scripts_gcode_psucontrol_post_on() != self.settings.scripts.gcode["psucontrol_post_on"]()) {
                            self.settings.plugins.psucontrol.scripts_gcode_psucontrol_post_on = self.scripts_gcode_psucontrol_post_on;
                            self.settings.scripts.gcode["psucontrol_post_on"](self.scripts_gcode_psucontrol_post_on());
                        }
                    }
        
                    if (self.scripts_gcode_psucontrol_pre_off() !== undefined) {
                        if (self.scripts_gcode_psucontrol_pre_off() != self.settings.scripts.gcode["psucontrol_pre_off"]()) {
                            self.settings.plugins.psucontrol.scripts_gcode_psucontrol_pre_off = self.scripts_gcode_psucontrol_pre_off;
                            self.settings.scripts.gcode["psucontrol_pre_off"](self.scripts_gcode_psucontrol_pre_off());
                        }
                    }
                };
        
                self.onStartup = function () {
                    self.isPSUOn.subscribe(function() {
                        if (self.isPSUOn()) {
                            self.psu_indicator.removeClass("off").addClass("on");
                        } else {
                            self.psu_indicator.removeClass("on").addClass("off");
                        }   
                    });
        
                    $.ajax({
                        url: API_BASEURL + "plugin/psucontrol",
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify({
                            command: "getPSUState"
                        }),
                        contentType: "application/json; charset=UTF-8"
                    }).done(function(data) {
                        self.isPSUOn(data.isPSUOn);
                    });
                }
        
                self.onDataUpdaterPluginMessage = function(plugin, data) {
                    if (plugin != "psucontrol") {
                        return;
                    }
        
                    if (data.isPSUOn !== undefined) {
                        self.isPSUOn(data.isPSUOn);
                    }
                };
        
                self.togglePSU = function() {
                    if (self.isPSUOn()) {
                        if (self.settings.plugins.psucontrol.enablePowerOffWarningDialog()) {
                            showConfirmationDialog({
                                message: "You are about to turn off the PSU.",
                                onproceed: function() {
                                    self.turnPSUOff();
                                }
                            });
                        } else {
                            self.turnPSUOff();
                        }
                    } else {
                        self.turnPSUOn();
                    }
                };
        
                self.turnPSUOn = function() {
                    $.ajax({
                        url: API_BASEURL + "plugin/psucontrol",
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify({
                            command: "turnPSUOn"
                        }),
                        contentType: "application/json; charset=UTF-8"
                    })
                };
        
            	self.turnPSUOff = function() {
                    $.ajax({
                        url: API_BASEURL + "plugin/psucontrol",
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify({
                            command: "turnPSUOff"
                        }),
                        contentType: "application/json; charset=UTF-8"
                    })
                };
        
                self.subPluginTabExists = function(id) {
                    return $('#settings_plugin_' + id).length > 0
                };
        
                self.openGetMore = function() {
                    window.open("https://plugins.octoprint.org/by_tag/#tag-psucontrol-subplugin", "_blank");
                };
            }
        
            ADDITIONAL_VIEWMODELS.push([
                PSUControlViewModel,
                ["settingsViewModel", "loginStateViewModel"],
                ["#navbar_plugin_psucontrol", "#settings_plugin_psucontrol"]
            ]);
        });
        
        ;
        
    } catch (error) {
        log.error("Error in JS assets for plugin psucontrol:", (error.stack || error));
    }
})();

// JS assets for plugin telegram
(function () {
    try {
        // source: plugin/telegram/js/telegram.js
        /*
         * View model for OctoPrint-Telegram
         *
         * Author: Fabian Schlenz
         * License: AGPLv3
         */
        $(function() {
            function TelegramViewModel(parameters) {
                var self = this;
        
                // assign the injected parameters, e.g.:
                // self.loginStateViewModel = parameters[0];
                self.settings = parameters[0];
                //else
                 //   self.settings=self.settings;
                console.log(String(self.settings));
        
                // TODO: Implement your plugin's view model here.
                
                self.chatListHelper = new ItemListHelper(
                    "known_chats",
                    {
                        "title": function(a, b) {
                            if(a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) return -1;
                            if(a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) return 1;
                            return 0;
                        }
                    },
                    {},
                    "title",
                    [],
                    [],
                    999);
        
                self.cmdCnt = 1;
                self.msgCnt = 1;
                self.reloadPending = 0;
                self.reloadUsr = ko.observable(false);
                self.connection_state_str = ko.observable("Unknown");
                self.isloading = ko.observable(false);
                self.errored = ko.observable(false);
                self.token_state_str = ko.observable("Unknown");
                self.setCommandList_state_str = ko.observable("");
            	self.editChatDialog = undefined;  
                self.varInfoDialog = undefined;      
                self.emoInfoDialog = undefined;
                self.mupInfoDialog = undefined;  
                self.timeInfoDialog = undefined;  
            	self.currChatID = "Unknown";
                self.currChatTitle = ko.observable("Unknown");
                self.bind_cmd = {}; 
                self.markupFrom = [];
                self.onBindLoad = false;
            
                self.requestData = function(ignore,update) {
        
                    ignore = typeof ignore !== 'undefined' ? ignore : false;
                    update = typeof update !== 'undefined' ? update : false;
        
                    if (update)
                        urlPath = "plugin/telegram?id="+self.currChatID+"&cmd="+$('#telegram-acccmd-chkbox-box').prop( "checked" )+"&note="+$('#telegram-notify-chkbox-box').prop( "checked" )+"&allow="+$('#telegram-user-allowed-chkbox-box').prop( "checked" );
                    else
                        urlPath = "plugin/telegram";
                    if(self.reloadUsr() || ignore){
                        self.isloading(true);
                        $.ajax({
                            url: API_BASEURL + urlPath,
                            type: "GET",
                            dataType: "json",
                            success: self.fromResponse
                        });
                        
                       if(!ignore) self.reloadPending = setTimeout(self.requestData,20000);
                    }
                    else
                        self.reloadPending = setTimeout(self.requestData,500);
                };
        
                self.requestBindings = function() {
                    self.isloading(true);
                    $.ajax({
                        url: API_BASEURL + "plugin/telegram?bindings=true",
                        type: "GET",
                        dataType: "json",
                        success: self.fromBindings
                    });      
                };
        
                self.fromBindings = function(response){
                    self.bind = {}
                    self.bind["commands"] = response.bind_cmd;
                    self.bind["notifications"] = response.bind_msg;
                    self.bind['no_setting'] = response.no_setting;
                    self.bind['bind_text'] = response.bind_text;
                    var ShowGifBtn = self.settings.settings.plugins.telegram.send_gif()
                    var ShowGifBtn = self.settings.settings.plugins.telegram.send_gif()
        
                    if (ShowGifBtn)
                    {
                        $('.gif-options').toggle();
                    }
        
                    
                    
                    if (ShowGifBtn)
                    {
                        $('.gif-options').toggle();
                    }
        
                    self.onBindLoad = true;
                    $("#telegram_msg_list").empty();
                    keys = self.bind["notifications"].sort();
                    for(var id in keys) {
                        bind_text = '';
                        if(keys[id] in self.bind['bind_text']){
                            bind_text = '<span class="muted"><br /><small>Also for:';
                            ks = self.bind['bind_text'][keys[id]].sort();
                            for (var k in ks)
                                bind_text += "<br>" + ks[k];
                            bind_text += "</small></span>";
                        }
                        img = "camera";
                        hideMup = "";
                        hideComb = "";
                        if(self.settings.settings.plugins.telegram.messages[keys[id]].image()){
                            img = "camera";
                            btn = "success";
                            txt = "Send Image";
                            hideMup = "display:none";
                            hideComb = "";
                        }
                        else{
                            img = "ban-circle";
                            btn = "warning";
                            txt = "No Image";
                            hideMup = "";
                            hideComb = "display:none"
                        }
        
                        if(self.settings.settings.plugins.telegram.messages[keys[id]].silent()) {
                          imgSilent = "volume-off";
                          bSilent = "warning";
                          txtSilent = "Silent";
                          hideMup = "";
                          hideComb = "";
                        } else{
                          imgSilent = "volume-up";
                          bSilent = "success";
                          txtSilent = "Notification";
                          hideMup = "";
                          hideComb = ""
                        }
                        if(self.settings.settings.plugins.telegram.messages[keys[id]].gif()){
                            imgGif = "camera";
                            bGif = "success";
                            txtGif = "Send Gif";
                            hideMup = "";
                            hideComb = "";
                        }
                        else{
                            imgGif = "ban-circle";
                            bGif = "warning";
                            txtGif = "No Gif";
                            hideMup = "";
                            hideComb = ""
                        }
                        if (ShowGifBtn)
                        {
                            showGif = ""
                        }
                        else
                        {
                            showGif = "display:none"
                        }
                        // TODO set to second message setting
                        if(self.settings.settings.plugins.telegram.messages[keys[id]].combined()){
                            img2 = "comment";
                            btn2 = "danger";
                            txt2 = "Combined";
                            if(hideComb === "")
                                hideMup = "display:none";
                        }
                        else{
                            img2 = "comments";
                            btn2 = "info";
                            txt2 = "Separated";
                            hideMup = "";
                        }
                        if(self.settings.settings.plugins.telegram.messages[keys[id]].markup()==="HTML"){
                            bOff = "info";
                            bHtml = "danger active";
                            bMd = "info";
                            self.markupFrom[self.msgCnt] = 'HTML';
                        }
                        else if(self.settings.settings.plugins.telegram.messages[keys[id]].markup()==="Markdown"){
                            bOff = "info";
                            bHtml = "info";
                            bMd = "danger active";
                            self.markupFrom[self.msgCnt] = 'Markdown';
                        }
                        else{
                            bOff = "danger active"
                            bHtml = "info"
                            bMd = "info"
                            self.markupFrom[self.msgCnt] = 'off';
                        }
                        var btnGrp = '<span id="mupBut'+self.msgCnt+'" style="' + hideMup + '"><span class="muted"><small>Markup Selection<br></small></span><span class="btn-group" data-toggle="buttons-radio">';
                        btnGrp += '<button id="off'+self.msgCnt+'" type="button" class="btn btn-'+bOff+' btn-mini" data-bind="click: toggleMarkup.bind($data,\''+self.msgCnt+'\',\'off\',\''+keys[id]+'\')">Off</button>';
                        btnGrp += '<button id="HTML'+self.msgCnt+'" type="button" class="btn btn-'+bHtml+' btn-mini" data-bind="click: toggleMarkup.bind($data,\''+self.msgCnt+'\',\'HTML\',\''+keys[id]+'\')">HTML</button>';
                        btnGrp += '<button id="Markdown'+self.msgCnt+'" type="button" class="btn btn-'+bMd+' btn-mini" data-bind="click: toggleMarkup.bind($data,\''+self.msgCnt+'\',\'Markdown\',\''+keys[id]+'\')">MD</button>';
                        btnGrp += '</span><br></span>';
        
                        var btnImg = '<span class="muted"><small>Send with image?<br></small></span>';
                        btnImg += '<label id="chkBtn'+self.msgCnt+'" class="btn btn-'+btn+' btn-mini" title="Toggle \'Send with image\'">';
                        btnImg += '<input type="checkbox" style="display:none" data-bind="checked: settings.settings.plugins.telegram.messages.'+keys[id]+'.image, click: toggleImg(\''+self.msgCnt+'\')"/>';
                        btnImg += '<i id="chkImg'+self.msgCnt+'" class="icon-'+img+'"></i> ';
                        btnImg += '<span id="chkTxt'+self.msgCnt+'">'+txt+'</span></label><br>';
        
                        var btnSilent = '<span class="muted"><small>Send silently?<br></small></span>';
                        btnSilent += '<label id="chkSilentBtn'+self.msgCnt+'" class="btn btn-'+bSilent+' btn-mini" title="Toggle \'Silence\'">';
                        btnSilent += '<input type="checkbox" style="display:none" data-bind="checked: settings.settings.plugins.telegram.messages.'+keys[id]+'.silent, click: toggleSilent(\''+self.msgCnt+'\')"/>';
                        btnSilent += '<i id="chkSilent'+self.msgCnt+'" class="icon-'+imgSilent+'"></i> ';
                        btnSilent += '<span id="chkSilentTxt'+self.msgCnt+'">'+txtSilent+'</span></label><br>';
        
                        var btnGif = '<span class="muted" id="chkGifLbl'+self.msgCnt+'" style="' + showGif + '" ><small>Send with gif?<br></small></span>';
                        btnGif += '<label id="chkGifBtn'+self.msgCnt+'"  style="' + showGif + '" class="btn btn-'+bGif+' btn-mini" title="Toggle \'Send with gif\'">';
                        btnGif += '<input type="checkbox" style="display:none" data-bind="checked: settings.settings.plugins.telegram.messages.'+keys[id]+'.gif, click: toggleGif(\''+self.msgCnt+'\')"/>';
                        btnGif += '<i id="chkGif'+self.msgCnt+'"  style="' + showGif + '" class="icon-'+imgGif+'"></i> ';
                        btnGif += '<span id="chkGifTxt'+self.msgCnt+'"  style="' + showGif + '">'+txtGif+'</span></label><br>';
        
                        var btnSecMsg = '<span id="combBut'+self.msgCnt+'" style="' + hideComb + '"> <span class="muted"><small>Combined message?<br></small></span>';
                        btnSecMsg += '<label id="chk2Btn'+self.msgCnt+'" class="btn btn-'+btn2+' btn-mini" title="Toggle \'Send image in a second message\'">';
                        btnSecMsg += '<input type="checkbox" style="display:none" data-bind="checked: settings.settings.plugins.telegram.messages.'+keys[id]+'.combined, click: toggleImg2(\''+self.msgCnt+'\')"/>';
                        btnSecMsg += '<i id="chk2Img'+self.msgCnt+'" class="icon-'+img2+'"></i> ';
                        btnSecMsg += '<span id="chk2Txt'+self.msgCnt+'">'+txt2+'</span></label><br></span>';
        
                        var msgEdt = '<div class="control-group"><div class="controls " ><hr style="margin:0px 0px 0px -90px;"></div></div><div class="control-group" id="telegramMsgText'+self.msgCnt+'">';
                            msgEdt += '<label class="control-label"><strong>'+keys[id]+ '</strong>'+bind_text + '</label>';
                            msgEdt += '<div class="controls " >';
                                msgEdt += '<div class="row">';
                                    msgEdt += '<div class="span9"><textarea rows="4" style="margin-left:7px;" class="block" data-bind="value: settings.settings.plugins.telegram.messages.'+keys[id]+'.text"></textarea></div>';
                                    msgEdt += '<div class="span3" style="text-align:center;">' + btnImg + btnGif + btnSecMsg + btnSilent + btnGrp + '</div>';
                                msgEdt += '</div></div></div>';
        
                        $('#telegram_msg_list').append(msgEdt);
                        ko.applyBindings(self, $("#telegramMsgText"+self.msgCnt++)[0]);
                    }
                    self.isloading(false);
                    $('#chkImg0').removeClass("icon-camera");
                    $('#chkImg0').removeClass("icon-ban-circle");
                    $('#chkGif0').removeClass("icon-camera");
                    $('#chkGif0').removeClass("icon-ban-circle");
                    $('#chkBtn0').removeClass("btn-success");
                    $('#chkBtn0').removeClass("btn-warning");
                    $('#chkTxt0').text("");
                    $('#chkGifBtn0').removeClass("btn-success");
                    $('#chkGifBtn0').removeClass("btn-warning");
                    $('#chkGifTxt0').text("");
                    if(self.settings.settings.plugins.telegram.image_not_connected()){
                        $('#chkImg0').addClass("icon-camera");
                        $('#chkBtn0').addClass("btn-success");
                        $('#chkTxt0').text("Send Image");
                    }
                    else{
                        $('#chkImg0').addClass("icon-ban-circle");
                        $('#chkBtn0').addClass("btn-warning");
                        $('#chkTxt0').text("No Image");
                    }
                    /*if(self.settings.settings.plugins.telegram.gif_not_connected()){
                        $('#chkGif0').addClass("icon-camera");
                        $('#chkGifBtn0').addClass("btn-success");
                        $('#chkGifTxt0').text("Send Gif");
                    }
                    else{
                        $('#chkGif0').addClass("icon-ban-circle");
                        $('#chkGifBtn0').addClass("btn-warning");
                        $('#chkGifTxt0').text("No Gif");
                    }*/
                    
                    self.onBindLoad = false;
                }
        
        
                self.toggleMarkup = function(data,sender,msg){
                    if(!self.onBindLoad){
                        if(self.markupFrom[data] !== sender){
                            $('#'+sender+data).toggleClass("btn-info btn-danger");
                            $('#'+self.markupFrom[data]+data).toggleClass("btn-info btn-danger");
                            self.settings.settings.plugins.telegram.messages[msg].markup(sender);
                        }
                        self.markupFrom[data] = sender;
                    }
                }
        
        
                self.toggleImg = function(data){
                    if(!self.onBindLoad){
                        $('#chkImg'+data).toggleClass("icon-ban-circle icon-camera");
                        $('#chkBtn'+data).toggleClass("btn-success btn-warning");
                        if($('#chkTxt'+data).text()==="Send Image"){
                            $('#chkTxt'+data).text("No Image");
                            if(data !== "0"){
                                $('#mupBut'+data).show();
                                $('#combBut'+data).hide();
                            }
                        }
                        else{
                            $('#chkTxt'+data).text("Send Image");
                            if(data !== "0"){
                                if($('#chk2Txt'+data).text()==="Combined")
                                    $('#mupBut'+data).hide();    
                                else
                                    $('#mupBut'+data).show();   
                            
                                $('#combBut'+data).show();
                            }
                        }
                    }
                }
        
                self.toggleSilent = function(data){
                  if(!self.onBindLoad){
                      $('#chkSilent'+data).toggleClass("icon-volume-off icon-volume-up");
                      $('#chkSilentBtn'+data).toggleClass("btn-success btn-warning");
                      if($('#chkSilentTxt'+data).text()==="Silent"){
                          $('#chkSilentTxt'+data).text("Notification");
                      }
                      else{
                          $('#chkSilentTxt'+data).text("Silent");
                      }
                  }
              }
        
                self.toggleGif = function(data){
                    if(!self.onBindLoad){
                        $('#chkGif'+data).toggleClass("icon-ban-circle icon-camera");
                        $('#chkGifBtn'+data).toggleClass("btn-success btn-warning");
                        $('#lblGifwar'+data).toggle();
                        if($('#chkGifTxt'+data).text()==="Send Gif"){
                            $('#chkGifTxt'+data).text("No Gif");
                        }
                        else{
                            $('#chkGifTxt'+data).text("Send Gif");
                            
                        }
                    }
                }
        
                self.toggleGifGen = function(){
                    if(!self.onBindLoad){
                        $('[id*="chkGifBtn"]').toggle();
                        $('[id*="chkGifTxt"]').toggle();
                        $('[id*="chkGifLbl"]').toggle();
                        $('.gif-options').toggle();
                    }
                }
                
        
                self.toggleImg2 = function(data){
                    if(!self.onBindLoad){
                        $('#chk2Img'+data).toggleClass("icon-comment icon-comments");
                        $('#chk2Btn'+data).toggleClass("btn-info btn-danger");
                        if($('#chk2Txt'+data).text()==="Separated"){
                            $('#chk2Txt'+data).text("Combined"); 
                            $('#mupBut'+data).hide();   
                        }
                        else{
                            $('#chk2Txt'+data).text("Separated");  
                            $('#mupBut'+data).show();
                        }
                    }
                }
        
                self.updateChat = function(data) {
                    self.requestData(true,true);
                    self.editChatDialog.modal("hide");
                }
            
                self.testToken = function(data, event) {
                    self.isloading(true);
                    console.log("Testing token " + $('#settings_plugin_telegram_token').val());
                    $.ajax({
                        url: API_BASEURL + "plugin/telegram",
                        type: "POST",
                        dataType: "json",
                        data: JSON.stringify({ "command": "testToken", "token": $('#settings_plugin_telegram_token').val()}),
                        contentType: "application/json",
                        success: self.testResponse
                    });
                }
                
                self.testResponse = function(response) {
                    self.isloading(false);
                    self.token_state_str(response.connection_state_str);
                    self.errored(!response.ok);
                    if(!response.ok){
                        $('#teleErrored').addClass("text-error");
                        $('#teleErrored').removeClass("text-success");
                        $('#teleErrored2').addClass("text-error");
                        $('#teleErrored2').removeClass("text-success");
                    }
                    else{
                        $('#teleErrored').addClass("text-success");
                        $('#teleErrored').removeClass("text-error");
                        $('#teleErrored2').addClass("text-success");
                        $('#teleErrored2').removeClass("text-error");
                    }
        
                }
        
                self.setCommandResponse = function(response) {
                    self.setCommandList_state_str(response.setMyCommands_state_str);
                    self.errored(!response.ok);
                    if(!response.ok){
                        $('#CmdteleErrored').removeClass("text-warning");
                        $('#CmdteleErrored').addClass("text-error");
                    }
                    else{
                        $('#CmdteleErrored').removeClass("text-warning");
                        $('#CmdteleErrored').addClass("text-success");
                    }
        
                }
        
                self.setCommandList = function(data, event) {
                    console.log("StartSetCommandList");
                    $('#CmdteleErrored').addClass("text-warning"); 
                    $('#CmdteleErrored').removeClass("text-danger"); 
                    $('#CmdteleErrored').removeClass("text-sucess"); 
                    self.setCommandList_state_str("Please wait ...")
                    var callback = function() {
                        $.ajax({ 
                            url: API_BASEURL + "plugin/telegram",
                            type: "POST",
                            dataType: "json",
                            data: JSON.stringify({ "command": "setCommandList", "force": 'True'}),
                            contentType: "application/json",
                            success: self.setCommandResponse
                        });
                    };
                    showConfirmationDialog('Do you really want to set default commands ', function (e) {
                        callback();
                    });
                }
                
                self.fromResponse = function(response) {
                    if(response === undefined) return;
                    if(response.hasOwnProperty("connection_state_str"))
                        self.connection_state_str(response.connection_state_str);
                    if(response.hasOwnProperty("connection_ok"))
                        //self.errored(!response.connection_ok);
                    var entries = response.chats;
                    if (entries === undefined) return;
                    var array = [];
                    var formerChats = _.pluck(self.chatListHelper.allItems, 'id');
                    var currentChats = [];
                    var newChats = false;
                    for(var id in entries) {
                        var data = entries[id];
                        data['id'] = id;
                        data['image'] = data['image'];
                        if(data['new']) {
                            data['newUsr'] = true;
                        } else {
                            data['newUsr'] = false;
                        }
                        array.push(data);
                        currentChats.push(id);
                        newChats = newChats || !_.includes(formerChats, id);
                    }
        
                    var deletedChatIds = _.difference(formerChats, currentChats);
                    if (newChats || (deletedChatIds && deletedChatIds.length)) {
                        // Transfer the chats back to the server settings (because just hitting "save" on the Settings dialog
                        // won't transfer anything we haven't explicitely set).
        
                        // TODO: This whole workflow should be optimized!
                        // Currently it takes two full server/client round trips to get the chats in sync, and just reusing
                        // the plugin's API for that purpose would probably be way way more efficient and less error prone.
                        self.settings.saveData({plugins: {telegram: {chats: entries}}});
                    }
                    self.chatListHelper.updateItems(array);
                    self.isloading(false);
                };
        
        
        
                self.showEditChatDialog = function(data) {
                    if (data === undefined) return;
                    //ko.cleanNode($("#telegram-acccmd-chkbox-box")[0]);
                    $("#telegram-acccmd-chkbox").empty();
                    $('#telegram-acccmd-chkbox').append('<input id="telegram-acccmd-chkbox-box" type="checkbox" data-bind="checked: settings.settings.plugins.telegram.chats[\''+data['id']+'\'][\'accept_commands\']"> Allow to send commands <span class="help-block"><small id="telegram-groupNotify-hint"></small></span>');
                    ko.applyBindings(self, $("#telegram-acccmd-chkbox-box")[0]);
        
                    //ko.cleanNode($("#telegram-notify-chkbox-box")[0]);
                    $("#telegram-notify-chkbox").empty();
                    $('#telegram-notify-chkbox').append('<input id="telegram-notify-chkbox-box" type="checkbox" data-bind="checked: settings.settings.plugins.telegram.chats[\''+data['id']+'\'][\'send_notifications\']"> Send notifications<span class=\"help-block\"><small>After enabling this option, the enabled notifications will be received. You have to enable individual notifications by clicking the blue notify button in the list after closing this dialog.</small></span>');
                    ko.applyBindings(self, $("#telegram-notify-chkbox-box")[0]);
        
                    self.currChatTitle(data.title);
                    self.currChatID = data.id;
        
                    $('#telegram-groupNotify-hint').empty();
                    $('#telegram-user-allowed-chkbox').empty();
                    if(!data.private){
                        $('#telegram-groupNotify-hint').append("After enabling this option, EVERY user of this group is allowed to send enabled commands. You have to set permissions for individual commands by clicking the blue command icon in the list after closing this dialog. If 'Allow user commands' is enabled, these users still use their private settings in addition to the group settings.");
                        $('#telegram-user-allowed-chkbox').append("<div class=\"control-group\"><div class=\"controls\"><label class=\"checkbox\"><input id=\"telegram-user-allowed-chkbox-box\" type=\"checkbox\" data-bind=\"checked: settings.settings.plugins.telegram.chats['"+data['id']+"']['allow_users']\"> Allow user commands <span class=\"help-block\"><small>When this is enabled, users with command access are allowed to send their individual enabled commands from this group. No other user in this group is allowed to send commands.</small></span></label></div></div>");
                        ko.applyBindings(self, $("#telegram-user-allowed-chkbox-box")[0]);
                    }
                    else{
                        $('#telegram-groupNotify-hint').append("After enabling this option, you have to set permissions for individual commands by clicking the blue command icon in the list after closing this dialog.");
                        $('#telegram-user-allowed-chkbox').append("<input id=\"telegram-user-allowed-chkbox-box\" style=\"display:none\" type=\"checkbox\" data-bind=\"checked: settings.settings.plugins.telegram.chats['"+data['id']+"']['allow_users']\"> ");
                        ko.applyBindings(self, $("#telegram-user-allowed-chkbox-box")[0]);
                    }
                    
        	        self.editChatDialog.modal("show");
                }
        
                self.showEditCmdDialog = function(data,option) {
                    if (data === undefined) return;
                    self.currChatTitle("Edit " + option + ": " +data.title);
                    for(self.cmdCnt;self.cmdCnt>0;self.cmdCnt--)
                        $("#telegram-cmd-chkbox"+(self.cmdCnt-1)).remove();
                    keys = self.bind[option].sort();
                    for(var id in keys) {
                        if( self.bind['no_setting'].indexOf(keys[id]) < 0) {
                            $("#telegram-cmd-chkbox-grp").append('<span id="telegram-cmd-chkbox'+self.cmdCnt+'"><label class="checkbox"><input  type="checkbox" data-bind="checked: settings.settings.plugins.telegram.chats[\''+data['id']+'\'][\''+option+'\'][\''+keys[id]+'\']"> <span>'+keys[id]     +'</span><label></span>');
                            ko.applyBindings(self, $("#telegram-cmd-chkbox"+self.cmdCnt++)[0]);
                        }
                    }
                    $('#tele-edit-control-label').empty();
                    if (option == "commands")
                        $('#tele-edit-control-label').append("<strong>Allowed commands:</strong>");
                    else
                        $('#tele-edit-control-label').append("<strong>Get Notification at...</strong>")
                    self.editCmdDialog.modal("show");
                }
        
                self.delChat = function(data) {
                    if (data === undefined) return;
                    var callback = function() {
                            self.isloading(true);
                            data['command'] = "delChat";
                            data['ID'] = data.id
                            console.log("Delete Chat Data " + String(data['ID']));
                            $.ajax({
                                url: API_BASEURL + "plugin/telegram",
                                type: "POST",
                                dataType: "json",
                                data: JSON.stringify(data),
                                contentType: "application/json",
                                success: self.fromResponse
                            });
                        };
                    showConfirmationDialog('Do you really want to delete ' + data.title, function (e) {
                        callback();
                    });
          
                }
        
                self.onSettingsHidden = function() {
                    clearTimeout(self.reloadPending);
                }
        
                self.onSettingsShown = function() {
                    self.requestData(true,false);
                    self.requestData();
                    self.requestBindings();
                    self.testToken();
                    self.editChatDialog = $("#settings-telegramDialogEditChat");
                    self.editCmdDialog = $("#settings-telegramDialogEditCommands");
                    self.varInfoDialog = $('#settings-telegramDialogVarInfo');
                    self.emoInfoDialog = $('#settings-telegramDialogEmoInfo');
                    self.mupInfoDialog = $('#settings-telegramDialogMupInfo');
                    self.timeInfoDialog = $('#settings-telegramDialogTimeInfo');
                    $('.teleEmojiImg').each( function(){
                        $(this).attr('src','/plugin/telegram/static/img/'+$(this).attr('id')+".png")
                    });
                    
                }
        
                self.isNumber = function(number) {
                    return !isNaN(parseFloat(number)) && isFinite(number);
                }
        
                self.onSettingsBeforeSave = function() {
        	        // Check specific settings to be a number, not a null
        	        // In case it's not a number set it to be 0
                    var settings = self.settings.settings.plugins.telegram;
                    var settings_to_check_number = [
                        settings.notification_height,
                        settings.notification_time,
                        settings.message_at_print_done_delay
                    ];
                    for (var i = 0; i < settings_to_check_number.length; i++) {
                        if (!self.isNumber(settings_to_check_number[i]())) {
                            settings_to_check_number[i](0);
                        }
                    }
                }
        
                self.onServerDisconnect = function(){
                    clearTimeout(self.reloadPending);
                }
        
                self.onDataUpdaterReconnect = function(){
                    if(self.reloadUsr())
                        self.requestData();
                    else
                        self.requestData(true,false);
                        self.requestData();
                    self.requestBindings();
                }
        
            }
        
            // view model class, parameters for constructor, container to bind to
            OCTOPRINT_VIEWMODELS.push([
                TelegramViewModel,
        
                // e.g. loginStateViewModel, settingsViewModel, ...
                [ "settingsViewModel" ],
        
                // e.g. #settings_plugin_telegram, #tab_plugin_telegram, ...
                [ '#settings_plugin_telegram','#wizard_plugin_telegram']
            ]);
        });
        
        ;
        
    } catch (error) {
        log.error("Error in JS assets for plugin telegram:", (error.stack || error));
    }
})();

// JS assets for plugin touchui
(function () {
    try {
        // source: plugin/touchui/js/touchui.libraries.js
        /*! jQuery UI Virtual Keyboard v1.27.2 */
        !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var t=e.keyboard=function(a,i){var n,s=this;s.version="1.27.2",s.$el=e(a),s.el=a,s.$el.data("keyboard",s),s.init=function(){s.initialized=!1;var a,o,r,l=t.css,c=t.events;s.settings=i||{},i&&i.position&&(o=e.extend({},i.position),i.position=null),s.options=n=e.extend(!0,{},t.defaultOptions,i),o&&(n.position=o,i.position=o),s.el.active=!0,s.namespace=".keyboard"+Math.random().toString(16).slice(2),s.extensionNamespace=[],s.shiftActive=s.altActive=s.metaActive=s.sets=s.capsLock=!1,s.rows=["","-shift","-alt","-alt-shift"],s.inPlaceholder=s.$el.attr("placeholder")||"",s.watermark=t.watermark&&""!==s.inPlaceholder,s.repeatTime=1e3/(n.repeatRate||20),n.preventDoubleEventTime=n.preventDoubleEventTime||100,s.isOpen=!1,s.wheel=e.isFunction(e.fn.mousewheel),s.escapeRegex=/[-\/\\^$*+?.()|[\]{}]/g,s.isContentEditable=!/(input|textarea)/i.test(s.el.nodeName)&&s.el.isContentEditable,a=t.keyCodes,s.alwaysAllowed=[a.capsLock,a.pageUp,a.pageDown,a.end,a.home,a.left,a.up,a.right,a.down,a.insert,a.delete],s.$keyboard=[],s.enabled=!0,s.checkCaret=n.lockInput||t.checkCaretSupport(),s.isContentEditable&&(n.usePreview=!1),s.last={start:0,end:0,key:"",val:"",preVal:"",layout:"",virtual:!0,keyset:[!1,!1,!1],wheel_$Keys:null,wheelIndex:0,wheelLayers:[]},s.temp=["",0,0],e.each([c.kbInit,c.kbBeforeVisible,c.kbVisible,c.kbHidden,c.inputCanceled,c.inputAccepted,c.kbBeforeClose,c.inputRestricted],function(t,a){e.isFunction(n[a])&&s.$el.bind(a+s.namespace+"callbacks",n[a])}),n.alwaysOpen&&(n.stayOpen=!0),r=e(document),s.el.ownerDocument!==document&&(r=r.add(s.el.ownerDocument));var d="keyup checkkeyboard mousedown touchstart ";n.closeByClickEvent&&(d+="click "),r.bind(d.split(" ").join(s.namespace+" "),function(e){clearTimeout(s.timer3),s.timer3=setTimeout(function(){s.checkClose(e)},1)}),s.$el.addClass(l.input+" "+n.css.input).attr({"aria-haspopup":"true",role:"textbox"}),(n.lockInput||s.el.readOnly)&&(n.lockInput=!0,s.$el.addClass(l.locked).attr({readonly:"readonly"})),(s.$el.is(":disabled")||s.$el.attr("readonly")&&!s.$el.hasClass(l.locked))&&s.$el.addClass(l.noKeyboard),n.openOn&&s.bindFocus(),s.watermark||""!==s.getValue(s.$el)||""===s.inPlaceholder||""===s.$el.attr("placeholder")||(s.$el.addClass(l.placeholder),s.setValue(s.inPlaceholder,s.$el)),s.$el.trigger(c.kbInit,[s,s.el]),n.alwaysOpen&&s.reveal(),s.initialized=!0},s.toggle=function(){if(s.hasKeyboard()){var e=s.$keyboard.find("."+t.css.keyToggle),a=!s.enabled;return s.preview.readonly=a||s.options.lockInput,s.$keyboard.toggleClass(t.css.keyDisabled,a).find("."+t.css.keyButton).not(e).attr("aria-disabled",a).each(function(){this.disabled=a}),e.toggleClass(t.css.keyDisabled,a),a&&s.typing_options&&(s.typing_options.text=""),s}},s.setCurrent=function(){var a=t.css,i=e("."+a.isCurrent),n=i.data("keyboard");e.isEmptyObject(n)||n.el===s.el||n.close(!!n.options.autoAccept&&"true"),i.removeClass(a.isCurrent),e("."+a.hasFocus).removeClass(a.hasFocus),s.$el.addClass(a.isCurrent),s.$keyboard.addClass(a.hasFocus),s.isCurrent(!0),s.isOpen=!0},s.isCurrent=function(e){var a=t.currentKeyboard||!1;return e?a=t.currentKeyboard=s.el:!1===e&&a===s.el&&(a=t.currentKeyboard=""),a===s.el},s.hasKeyboard=function(){return s.$keyboard&&s.$keyboard.length>0},s.isVisible=function(){return!!s.hasKeyboard()&&s.$keyboard.is(":visible")},s.setFocus=function(){var e=s.$preview||s.$el;n.noFocus||e.focus(),s.isContentEditable?t.setEditableCaret(e,s.last.start,s.last.end):t.caret(e,s.last)},s.focusOn=function(){!s&&s.el.active||(s.isVisible()?s.setCurrent():(clearTimeout(s.timer),s.reveal()))},s.redraw=function(e){return e&&(s.options.layout=e),s.$keyboard.length&&(s.last.preVal=""+s.last.val,s.saveLastChange(),s.setValue(s.last.val,s.$el),s.removeKeyboard(),s.shiftActive=s.altActive=s.metaActive=!1),s.isOpen=n.alwaysOpen,s.reveal(!0),s},s.reveal=function(a){var i,o=s.isOpen,r=t.css;if(s.opening=!o,e("."+r.keyboard).not("."+r.alwaysOpen).each(function(){var t=e(this).data("keyboard");e.isEmptyObject(t)||t.close(!!t.options.autoAccept&&"true")}),!(s.$el.is(":disabled")||s.$el.attr("readonly")&&!s.$el.hasClass(r.locked)))return s.$el.removeClass(r.noKeyboard),n.openOn&&s.$el.unbind(e.trim((n.openOn+" ").split(/\s+/).join(s.namespace+" "))),s.$keyboard&&(!s.$keyboard||s.$keyboard.length&&!e.contains(s.el.ownerDocument.body,s.$keyboard[0]))||s.startup(),s.watermark||s.getValue()!==s.inPlaceholder||(s.$el.removeClass(r.placeholder),s.setValue("",s.$el)),s.originalContent=s.isContentEditable?s.$el.html():s.getValue(s.$el),s.el===s.preview||s.isContentEditable||s.setValue(s.originalContent),n.acceptValid&&s.checkValid(),n.resetDefault&&(s.shiftActive=s.altActive=s.metaActive=!1),s.showSet(),s.isVisible()||s.$el.trigger(t.events.kbBeforeVisible,[s,s.el]),(s.initialized||n.initialFocus||!n.initialFocus&&s.$el.hasClass(t.css.initialFocus))&&s.setCurrent(),s.toggle(),s.$keyboard.show(),n.usePreview&&t.msie&&(void 0===s.width&&(s.$preview.hide(),s.width=Math.ceil(s.$keyboard.width()),s.$preview.show()),s.$preview.width(s.width)),s.reposition(),s.checkDecimal(),s.lineHeight=parseInt(s.$preview.css("lineHeight"),10)||parseInt(s.$preview.css("font-size"),10)+4,n.caretToEnd&&(i=s.isContentEditable?t.getEditableLength(s.el):s.originalContent.length,s.saveCaret(i,i)),t.allie&&(0===s.last.end&&s.last.start>0&&(s.last.end=s.last.start),s.last.start<0&&(s.last.start=s.last.end=s.originalContent.length)),o||a?(t.caret(s.$preview,s.last),s):(s.timer2=setTimeout(function(){s.opening=!1,/(number|email)/i.test(s.el.type)||n.caretToEnd||s.saveCaret(void 0,void 0,s.$el),(n.initialFocus||s.$el.hasClass(t.css.initialFocus))&&t.caret(s.$preview,s.last),s.last.eventTime=(new Date).getTime(),s.$el.trigger(t.events.kbVisible,[s,s.el]),s.timer=setTimeout(function(){s&&s.saveCaret()},200)},10),s);s.$el.addClass(r.noKeyboard)},s.updateLanguage=function(){var a=t.layouts,i=n.language||a[n.layout]&&a[n.layout].lang&&a[n.layout].lang||[n.language||"en"],o=t.language;i=e.isArray(i)?i[0]:i,s.language=i,i=i.split("-")[0],n.display=e.extend(!0,{},o.en.display,o[i]&&o[i].display||{},s.settings.display),n.combos=e.extend(!0,{},o.en.combos,o[i]&&o[i].combos||{},s.settings.combos),n.wheelMessage=o[i]&&o[i].wheelMessage||o.en.wheelMessage,n.rtl=a[n.layout]&&a[n.layout].rtl||o[i]&&o[i].rtl||!1,s.regex=o[i]&&o[i].comboRegex||t.comboRegex,s.decimal=/^\./.test(n.display.dec),s.$el.toggleClass("rtl",n.rtl).css("direction",n.rtl?"rtl":"")},s.startup=function(){var a=t.css;(n.alwaysOpen||n.userClosed)&&s.$preview||s.makePreview(),s.hasKeyboard()||("custom"===n.layout&&(n.layoutHash="custom"+s.customHash()),s.layout="custom"===n.layout?n.layoutHash:n.layout,s.last.layout=s.layout,s.updateLanguage(),void 0===t.builtLayouts[s.layout]&&(e.isFunction(n.create)?s.$keyboard=n.create(s):s.$keyboard.length||s.buildKeyboard(s.layout,!0)),s.$keyboard=t.builtLayouts[s.layout].$keyboard.clone(),s.$keyboard.data("keyboard",s),""!==(s.el.id||"")&&s.$keyboard.attr("id",s.el.id+t.css.idSuffix),s.makePreview()),s.$keyboard.attr("data-"+a.keyboard+"-layout",n.layout).attr("data-"+a.keyboard+"-language",s.language),s.$decBtn=s.$keyboard.find("."+a.keyPrefix+"dec"),(n.enterNavigation||"TEXTAREA"===s.el.nodeName)&&s.alwaysAllowed.push(13),s.bindKeyboard(),s.$keyboard.appendTo(n.appendLocally?s.$el.parent():n.appendTo||"body"),s.bindKeys(),n.reposition&&e.ui&&e.ui.position&&"body"==n.appendTo&&e(window).bind("resize"+s.namespace,function(){s.reposition()})},s.reposition=function(){return s.position=!e.isEmptyObject(n.position)&&n.position,e.ui&&e.ui.position&&s.position&&(s.position.of=s.position.of||s.$el.data("keyboardPosition")||s.$el,s.position.collision=s.position.collision||"flipfit flipfit",s.position.at=n.usePreview?n.position.at:n.position.at2,s.isVisible()&&s.$keyboard.position(s.position)),s},s.makePreview=function(){if(n.usePreview){var a,i,o,r,l=t.css;for(s.$preview=s.$el.clone(!1).data("keyboard",s).removeClass(l.placeholder+" "+l.input).addClass(l.preview+" "+n.css.input).attr("tabindex","-1").show(),s.preview=s.$preview[0],"number"===s.preview.type&&(s.preview.type="text"),r=/^(data-|id|aria-haspopup)/i,a=(i=s.$preview.get(0).attributes).length-1;a>=0;a--)o=i[a]&&i[a].name,r.test(o)&&s.preview.removeAttribute(o);e("<div />").addClass(l.wrapper).append(s.$preview).prependTo(s.$keyboard)}else s.$preview=s.$el,s.preview=s.el},s.caret=function(a,i){var n=t.caret(s.$preview,a,i);return n instanceof e?(s.saveCaret(n.start,n.end),s):n},s.saveCaret=function(e,a,i){if(s.isCurrent()){var n;n=void 0===e?t.caret(i||s.$preview):t.caret(i||s.$preview,e,a),s.last.start=void 0===e?n.start:e,s.last.end=void 0===a?n.end:a}},s.saveLastChange=function(e){s.last.val=e||s.getValue(s.$preview||s.$el),s.isContentEditable&&(s.last.elms=s.el.cloneNode(!0))},s.setScroll=function(){if(!s.isContentEditable&&s.last.virtual){var e,a,i,o,r="TEXTAREA"===s.preview.nodeName,l=s.last.val.substring(0,Math.max(s.last.start,s.last.end));s.$previewCopy||(s.$previewCopy=s.$preview.clone().removeAttr("id").css({position:"absolute",left:0,zIndex:-10,visibility:"hidden"}).addClass(t.css.inputClone),s.$previewCopy[0].disabled=!0,r||s.$previewCopy.css({"white-space":"pre",width:0}),n.usePreview?s.$preview.after(s.$previewCopy):s.$keyboard.prepend(s.$previewCopy)),r?(s.$previewCopy.height(s.lineHeight).val(l),s.preview.scrollTop=s.lineHeight*(Math.floor(s.$previewCopy[0].scrollHeight/s.lineHeight)-1)):(s.$previewCopy.val(l.replace(/\s/g," ")),i=/c/i.test(n.scrollAdjustment)?s.preview.clientWidth/2:n.scrollAdjustment,e=s.$previewCopy[0].scrollWidth-1,void 0===s.last.scrollWidth&&(s.last.scrollWidth=e,s.last.direction=!0),o=s.last.scrollWidth===e?s.last.direction:s.last.scrollWidth<e,a=s.preview.clientWidth-i,o?s.preview.scrollLeft=e<a?0:e-a:e>=s.preview.scrollWidth-a?s.preview.scrollLeft=s.preview.scrollWidth-i:s.preview.scrollLeft=e-i>0?e-i:0,s.last.scrollWidth=e,s.last.direction=o)}},s.bindFocus=function(){n.openOn&&s&&s.el.active&&(s.$el.bind(n.openOn+s.namespace,function(){s.focusOn()}),e(":focus")[0]===s.el&&s.$el.blur())},s.bindKeyboard=function(){var a,i=t.keyCodes,o=t.builtLayouts[s.layout],r=s.namespace+"keybindings";s.$preview.unbind(s.namespace).bind("click"+r+" touchstart"+r,function(){n.alwaysOpen&&!s.isCurrent()&&s.reveal(),s.timer2=setTimeout(function(){s&&s.saveCaret()},150)}).bind("keypress"+r,function(r){if(n.lockInput)return!1;if(s.isCurrent()){var l=r.charCode||r.which,c=l>=i.A&&l<=i.Z,d=l>=i.a&&l<=i.z,u=s.last.key=String.fromCharCode(l);if(!(l<i.space)){if(s.last.virtual=!1,s.last.event=r,s.last.$key=[],s.checkCaret&&s.saveCaret(),l!==i.capsLock&&(c||d)&&(s.capsLock=c&&!r.shiftKey||d&&r.shiftKey,s.capsLock&&!s.shiftActive&&(s.shiftActive=!0,s.showSet())),n.restrictInput){if((r.which===i.backSpace||0===r.which)&&e.inArray(r.keyCode,s.alwaysAllowed))return;-1===e.inArray(u,o.acceptedKeys)&&(r.preventDefault(),(a=e.extend({},r)).type=t.events.inputRestricted,s.$el.trigger(a,[s,s.el]))}else if((r.ctrlKey||r.metaKey)&&(r.which===i.A||r.which===i.C||r.which===i.V||r.which>=i.X&&r.which<=i.Z))return;o.hasMappedKeys&&o.mappedKeys.hasOwnProperty(u)&&(s.last.key=o.mappedKeys[u],s.insertText(s.last.key),r.preventDefault()),"function"==typeof n.beforeInsert&&(s.insertText(s.last.key),r.preventDefault()),s.checkMaxLength()}}}).bind("keyup"+r,function(a){if(s.isCurrent()){switch(s.last.virtual=!1,a.which){case i.tab:if(s.tab&&n.tabNavigation&&!n.lockInput){s.shiftActive=a.shiftKey;var o=t.keyaction.tab(s);if(s.tab=!1,!o)return!1}else a.preventDefault();break;case i.escape:return n.ignoreEsc||s.close(!(!n.autoAccept||!n.autoAcceptOnEsc)&&"true"),!1}clearTimeout(s.throttled),s.throttled=setTimeout(function(){s&&s.isVisible()&&s.checkCombos()},100),s.checkMaxLength(),s.last.preVal=""+s.last.val,s.saveLastChange();var r=e.Event(t.events.kbChange);if(r.action=s.last.key,s.$el.trigger(r,[s,s.el]),e.isFunction(n.change))return r.type=t.events.inputChange,n.change(r,s,s.el),!1;n.acceptValid&&n.autoAcceptOnValid&&e.isFunction(n.validate)&&n.validate(s,s.getValue(s.$preview))&&(s.$preview.blur(),s.accept())}}).bind("keydown"+r,function(e){if(s.last.keyPress=e.which,n.alwaysOpen&&!s.isCurrent()&&s.reveal(),e.which===i.tab)return s.tab=!0,!1;if(n.lockInput)return!1;switch(s.last.virtual=!1,e.which){case i.backSpace:t.keyaction.bksp(s,null,e),e.preventDefault();break;case i.enter:t.keyaction.enter(s,null,e);break;case i.capsLock:s.shiftActive=s.capsLock=!s.capsLock,s.showSet();break;case i.V:if(e.ctrlKey||e.metaKey){if(n.preventPaste)return void e.preventDefault();s.checkCombos()}}}).bind("mouseup touchend ".split(" ").join(r+" "),function(){s.last.virtual=!0,s.saveCaret()}),s.$keyboard.bind("mousedown click touchstart ".split(" ").join(s.namespace+" "),function(t){t.stopPropagation(),s.isCurrent()||(s.reveal(),e(s.el.ownerDocument).trigger("checkkeyboard"+s.namespace)),s.setFocus()}),n.preventPaste&&(s.$preview.bind("contextmenu"+s.namespace,function(e){e.preventDefault()}),s.$el.bind("contextmenu"+s.namespace,function(e){e.preventDefault()}))},s.bindKeys=function(){var a=t.css;s.$allKeys=s.$keyboard.find("button."+a.keyButton).unbind(s.namespace+" "+s.namespace+"kb").bind("mouseenter mouseleave touchstart ".split(" ").join(s.namespace+" "),function(t){if(!n.alwaysOpen&&!n.userClosed||"mouseleave"===t.type||s.isCurrent()||(s.reveal(),s.setFocus()),s.isCurrent()&&!this.disabled){var a,i,o=s.last,r=e(this),l=t.type;n.useWheel&&s.wheel&&(a=s.getLayers(r),i=(a.length?a.map(function(){return e(this).attr("data-value")||""}).get():"")||[r.text()],o.wheel_$Keys=a,o.wheelLayers=i,o.wheelIndex=e.inArray(r.attr("data-value"),i)),"mouseenter"!==l&&"touchstart"!==l||"password"===s.el.type||r.hasClass(n.css.buttonDisabled)||(r.addClass(n.css.buttonHover),n.useWheel&&s.wheel&&r.attr("title",function(e,t){return s.wheel&&""===t&&s.sets&&i.length>1&&"touchstart"!==l?n.wheelMessage:t})),"mouseleave"===l&&(r.removeClass("password"===s.el.type?"":n.css.buttonHover),n.useWheel&&s.wheel&&(o.wheelIndex=0,o.wheelLayers=[],o.wheel_$Keys=null,r.attr("title",function(e,t){return t===n.wheelMessage?"":t}).html(r.attr("data-html"))))}}).bind(n.keyBinding.split(" ").join(s.namespace+" ")+s.namespace+" "+t.events.kbRepeater,function(i){if(i.preventDefault(),!s.$keyboard.is(":visible")||this.disabled)return!1;var o,r,l=s.last,c=e(this),d=(new Date).getTime();if(n.useWheel&&s.wheel&&(c=(r=l.wheel_$Keys)&&l.wheelIndex>-1?r.eq(l.wheelIndex):c),o=c.attr("data-action"),!(d-(l.eventTime||0)<n.preventDoubleEventTime)){if(l.eventTime=d,l.event=i,l.virtual=!0,l.$key=c,l.key=c.attr("data-value"),l.keyPress="",s.setFocus(),/^meta/.test(o)&&(o="meta"),o===l.key&&"string"==typeof t.keyaction[o])l.key=o=t.keyaction[o];else if(o in t.keyaction&&e.isFunction(t.keyaction[o])){if(!1===t.keyaction[o](s,this,i))return!1;o=null}return!!s.hasKeyboard()&&(void 0!==o&&null!==o&&(l.key=e(this).hasClass(a.keyAction)?o:l.key,s.insertText(l.key),s.capsLock||n.stickyShift||i.shiftKey||(s.shiftActive=!1,s.showSet(c.attr("data-name")))),t.caret(s.$preview,l),s.checkCombos(),i.type=t.events.kbChange,i.action=l.key,s.$el.trigger(i,[s,s.el]),l.preVal=""+l.val,s.saveLastChange(),e.isFunction(n.change)?(i.type=t.events.inputChange,n.change(i,s,s.el),!1):void 0)}}).bind("mouseup"+s.namespace+" "+"mouseleave touchend touchmove touchcancel ".split(" ").join(s.namespace+"kb "),function(a){s.last.virtual=!0;var i,o=e(this);if("touchmove"===a.type){if(i=o.offset(),i.right=i.left+o.outerWidth(),i.bottom=i.top+o.outerHeight(),a.originalEvent.touches[0].pageX>=i.left&&a.originalEvent.touches[0].pageX<i.right&&a.originalEvent.touches[0].pageY>=i.top&&a.originalEvent.touches[0].pageY<i.bottom)return!0}else/(mouseleave|touchend|touchcancel)/i.test(a.type)?o.removeClass(n.css.buttonHover):(!n.noFocus&&s.isCurrent()&&s.isVisible()&&s.$preview.focus(),s.checkCaret&&t.caret(s.$preview,s.last));return s.mouseRepeat=[!1,""],clearTimeout(s.repeater),n.acceptValid&&n.autoAcceptOnValid&&e.isFunction(n.validate)&&n.validate(s,s.getValue())&&(s.$preview.blur(),s.accept()),!1}).bind("click"+s.namespace,function(){return!1}).not("."+a.keyAction).bind("mousewheel"+s.namespace,function(t,a){if(n.useWheel&&s.wheel){a=a||t.deltaY;var i,o=s.last.wheelLayers||[];return o.length>1?((i=s.last.wheelIndex+(a>0?-1:1))>o.length-1&&(i=0),i<0&&(i=o.length-1)):i=0,s.last.wheelIndex=i,e(this).html(o[i]),!1}}).add("."+a.keyPrefix+"tab bksp space enter".split(" ").join(",."+a.keyPrefix),s.$keyboard).bind("mousedown touchstart ".split(" ").join(s.namespace+"kb "),function(){if(0!==n.repeatRate){var t=e(this);s.mouseRepeat=[!0,t],setTimeout(function(){s&&s.mouseRepeat[0]&&s.mouseRepeat[1]===t&&!t[0].disabled&&s.repeatKey(t)},n.repeatDelay)}return!1})},s.execCommand=function(e,t){s.el.ownerDocument.execCommand(e,!1,t),s.el.normalize(),n.reposition&&s.reposition()},s.getValue=function(e){return(e=e||s.$preview)[s.isContentEditable?"text":"val"]()},s.setValue=function(e,a){return a=a||s.$preview,s.isContentEditable?e!==a.text()&&(t.replaceContent(a,e),s.saveCaret()):a.val(e),s},s.insertText=function(e){if(!s.$preview)return s;if("function"==typeof n.beforeInsert&&(e=n.beforeInsert(s.last.event,s,s.el,e)),void 0===e||!1===e)return s.last.key="",s;if(s.isContentEditable)return s.insertContentEditable(e);var a,i=!1,o="\b"===e,r=s.getValue(),l=t.caret(s.$preview),c=r.length;return l.end<l.start&&(l.end=l.start),l.start>c&&(l.end=l.start=c),"TEXTAREA"===s.preview.nodeName&&t.msie&&"\n"===r.substr(l.start,1)&&(l.start+=1,l.end+=1),a=l.start,"{d}"===e&&(e="",l.end+=1),o&&(e="",i=o&&a===l.end&&a>0),r=r.substr(0,a-(i?1:0))+e+r.substr(l.end),a+=i?-1:e.length,s.setValue(r),s.saveCaret(a,a),s.setScroll(),s},s.insertContentEditable=function(e){return s.$preview.focus(),s.execCommand("insertText",e),s.saveCaret(),s},s.checkMaxLength=function(){if(s.$preview){var e,a,i=s.getValue(),o=s.isContentEditable?t.getEditableLength(s.el):i.length;return!1!==n.maxLength&&o>n.maxLength&&(e=t.caret(s.$preview).start,a=Math.min(e,n.maxLength),n.maxInsert||(i=s.last.val,a=e-1),s.setValue(i.substring(0,n.maxLength)),s.saveCaret(a,a)),s.$decBtn.length&&s.checkDecimal(),s}},s.repeatKey=function(e){e.trigger(t.events.kbRepeater),s.mouseRepeat[0]&&(s.repeater=setTimeout(function(){s&&s.repeatKey(e)},s.repeatTime))},s.getKeySet=function(){var e=[];return s.altActive&&e.push("alt"),s.shiftActive&&e.push("shift"),s.metaActive&&e.push(s.metaActive),e.length?e.join("+"):"normal"},s.showKeySet=function(e){return"string"==typeof e?(s.last.keyset=[s.shiftActive,s.altActive,s.metaActive],s.shiftActive=/shift/i.test(e),s.altActive=/alt/i.test(e),/\bmeta/.test(e)?(s.metaActive=!0,s.showSet(e.match(/\bmeta[\w-]+/i)[0])):(s.metaActive=!1,s.showSet())):s.showSet(e),s},s.showSet=function(e){if(s.hasKeyboard()){n=s.options;var a=t.css,i="."+a.keyPrefix,o=n.css.buttonActive,r="",l=(s.shiftActive?1:0)+(s.altActive?2:0);if(s.shiftActive||(s.capsLock=!1),s.metaActive?(s.shiftActive&&(e=(e||"").replace("-shift","")),s.altActive&&(e=(e||"").replace("-alt","")),""===(r=/^meta/i.test(e)?e:"")?r=!0===s.metaActive?"":s.metaActive:s.metaActive=r,(!n.stickyShift&&s.last.keyset[2]!==s.metaActive||(s.shiftActive||s.altActive)&&!s.$keyboard.find("."+a.keySet+"-"+r+s.rows[l]).length)&&(s.shiftActive=s.altActive=!1)):!n.stickyShift&&s.last.keyset[2]!==s.metaActive&&s.shiftActive&&(s.shiftActive=s.altActive=!1),l=(s.shiftActive?1:0)+(s.altActive?2:0),r=0!==l||s.metaActive?""===r?"":"-"+r:"-normal",!s.$keyboard.find("."+a.keySet+r+s.rows[l]).length)return s.shiftActive=s.last.keyset[0],s.altActive=s.last.keyset[1],void(s.metaActive=s.last.keyset[2]);s.$keyboard.find(i+"alt,"+i+"shift,."+a.keyAction+"[class*=meta]").removeClass(o).end().find(i+"alt").toggleClass(o,s.altActive).end().find(i+"shift").toggleClass(o,s.shiftActive).end().find(i+"lock").toggleClass(o,s.capsLock).end().find("."+a.keySet).hide().end().find("."+(a.keyAction+i+r).replace("--","-")).addClass(o),s.$keyboard.find("."+a.keySet+r+s.rows[l])[0].style.display="inline-block",s.metaActive&&s.$keyboard.find(i+s.metaActive).toggleClass(o,!1!==s.metaActive),s.last.keyset=[s.shiftActive,s.altActive,s.metaActive],s.$el.trigger(t.events.kbKeysetChange,[s,s.el]),n.reposition&&s.reposition()}},s.checkCombos=function(){if(!(s.isVisible()||s.hasKeyboard()&&s.$keyboard.hasClass(t.css.hasFocus)))return s.getValue(s.$preview||s.$el);var i,o,r,l,c=s.getValue(),d=t.caret(s.$preview),u=t.builtLayouts[s.layout],p=s.isContentEditable?t.getEditableLength(s.el):c.length,h=p;return""===c?(n.acceptValid&&s.checkValid(),c):(d.end<d.start&&(d.end=d.start),d.start>h&&(d.end=d.start=h),t.msie&&"\n"===c.substr(d.start,1)&&(d.start+=1,d.end+=1),n.useCombos&&(t.msie?c=c.replace(s.regex,function(e,t,a){return n.combos.hasOwnProperty(t)?n.combos[t][a]||e:e}):s.$preview.length&&(o=d.start-(d.start-2>=0?2:0),t.caret(s.$preview,o,d.end),r=(l=function(e){return(e||"").replace(s.regex,function(e,t,a){return n.combos.hasOwnProperty(t)?n.combos[t][a]||e:e})})((o=t.caret(s.$preview)).text),o&&o.replaceStr&&r!==o.text&&(s.isContentEditable?t.replaceContent(a,l):s.setValue(o.replaceStr(r))),c=s.getValue())),n.restrictInput&&""!==c&&(o=u.acceptedKeys.length,(i=u.acceptedKeysRegex)||(r=e.map(u.acceptedKeys,function(e){return e.replace(s.escapeRegex,"\\$&")}),i=u.acceptedKeysRegex=new RegExp("("+r.join("|")+")","g")),(r=c.match(i))?c=r.join(""):(c="",h=0)),d.start+=p-h,d.end+=p-h,s.setValue(c),s.saveCaret(d.start,d.end),s.setScroll(),s.checkMaxLength(),n.acceptValid&&s.checkValid(),c)},s.checkValid=function(){var a=t.css,i=s.$keyboard.find("."+a.keyPrefix+"accept"),o=!0;e.isFunction(n.validate)&&(o=n.validate(s,s.getValue(),!1)),i.toggleClass(a.inputInvalid,!o).toggleClass(a.inputValid,o).attr("title",i.attr("data-title")+" ("+n.display[o?"valid":"invalid"]+")")},s.checkDecimal=function(){s.decimal&&/\./g.test(s.preview.value)||!s.decimal&&/\,/g.test(s.preview.value)?s.$decBtn.attr({disabled:"disabled","aria-disabled":"true"}).removeClass(n.css.buttonHover).addClass(n.css.buttonDisabled):s.$decBtn.removeAttr("disabled").attr({"aria-disabled":"false"}).addClass(n.css.buttonDefault).removeClass(n.css.buttonDisabled)},s.getLayers=function(a){var i=t.css,n=a.attr("data-pos");return a.closest("."+i.keyboard).find('button[data-pos="'+n+'"]').filter(function(){return""!==e(this).find("."+i.keyText).text()}).add(a)},s.switchInput=function(t,a){if(e.isFunction(n.switchInput))n.switchInput(s,t,a);else{s.$keyboard.length&&s.$keyboard.hide();var i,o=!1,r=e("button, input, select, textarea, a, [contenteditable]").filter(":visible").not(":disabled"),l=r.index(s.$el)+(t?1:-1);if(s.$keyboard.length&&s.$keyboard.show(),l>r.length-1&&(o=n.stopAtEnd,l=0),l<0&&(o=n.stopAtEnd,l=r.length-1),!o){if(!(a=s.close(a)))return;(i=r.eq(l).data("keyboard"))&&i.options.openOn.length?i.focusOn():r.eq(l).focus()}}return!1},s.close=function(a){if(s.isOpen&&s.$keyboard.length){clearTimeout(s.throttled);var i=t.css,o=t.events,r=a?s.checkCombos():s.originalContent;if(a&&e.isFunction(n.validate)&&!n.validate(s,r,!0)&&(r=s.originalContent,a=!1,n.cancelClose))return;s.isCurrent(!1),s.isOpen=n.alwaysOpen||n.userClosed,s.isContentEditable&&!a?s.$el.html(r):s.setValue(r,s.$el),s.$el.removeClass(i.isCurrent+" "+i.inputAutoAccepted).addClass(a?!0===a?"":i.inputAutoAccepted:"").trigger(o.inputChange),n.alwaysOpen||s.$el.trigger(o.kbBeforeClose,[s,s.el,a||!1]),t.caret(s.$preview,s.last),s.$el.trigger(a?o.inputAccepted:o.inputCanceled,[s,s.el]).trigger(n.alwaysOpen?o.kbInactive:o.kbHidden,[s,s.el]).blur(),s&&(s.last.eventTime=(new Date).getTime(),n.alwaysOpen||n.userClosed&&"true"===a||!s.$keyboard.length||(s.removeKeyboard(),s.timer=setTimeout(function(){s&&s.bindFocus()},500)),s.watermark||""!==s.el.value||""===s.inPlaceholder||(s.$el.addClass(i.placeholder),s.setValue(s.inPlaceholder,s.$el)))}return!!a},s.accept=function(){return s.close(!0)},s.checkClose=function(t){if(!s.opening){var a=e.keyboard.css,i=t.target.nodeName,o="INPUT"===i||"TEXTAREA"===i?e(t.target):e(t.target).closest("[contenteditable]");if(s.escClose(t,o),o.hasClass(a.input)){var r=o.data("keyboard");r!==s&&!r.$el.hasClass(a.isCurrent)&&r.options.openOn&&t.type===n.openOn&&r.focusOn()}}},s.escCloseCallback={keepOpen:function(e){return!s.isOpen}},s.escClose=function(a,i){if(a&&"keyup"===a.type)return a.which!==t.keyCodes.escape||n.ignoreEsc?"":s.close(!(!n.autoAccept||!n.autoAcceptOnEsc)&&"true");var o=!1,r=i||e(a.target);if(e.each(s.escCloseCallback,function(e,t){"function"==typeof t&&(o=o||t(r))}),!o&&(!s.isCurrent()&&s.isOpen||s.isOpen&&r[0]!==s.el)){if((n.stayOpen||n.userClosed)&&!r.hasClass(t.css.input))return;if(t.allie&&a.preventDefault(),n.closeByClickEvent){var l=r[0].nodeName.toLowerCase();"input"!==l&&"textarea"!==l&&"click"!==a.type||s.close(!!n.autoAccept&&"true")}else s.close(!!n.autoAccept&&"true")}},s.keyBtn=e("<button />").attr({role:"button",type:"button","aria-disabled":"false",tabindex:"-1"}).addClass(t.css.keyButton),s.processName=function(e){var t,a,i=(e||"").replace(/[^a-z0-9-_]/gi,""),n=i.length,s=[];if(n>1&&e===i)return e;if(n=e.length){for(t=0;t<n;t++)a=e[t],s.push(/[a-z0-9-_]/i.test(a)?/[-_]/.test(a)&&0!==t?"":a:(0===t?"":"-")+a.charCodeAt(0));return s.join("")}return e},s.processKeys=function(t){var a,i=t.split(":"),n={name:null,map:"",title:""};return/\(.+\)/.test(i[0])||/^:\(.+\)/.test(t)||/\([(:)]\)/.test(t)?/\([(:)]\)/.test(t)?(a=i[0].match(/([^(]+)\((.+)\)/))&&a.length?(n.name=a[1],n.map=a[2],n.title=i.length>1?i.slice(1).join(":"):""):(n.name=t.match(/([^(]+)/)[0],":"===n.name&&(i=i.slice(1)),null===a&&(n.map=":",i=i.slice(2)),n.title=i.length?i.join(":"):""):(n.map=t.match(/\(([^()]+?)\)/)[1],""===(a=(t=t.replace(/\(([^()]+)\)/,"")).split(":"))[0]?(n.name=":",i=i.slice(1)):n.name=a[0],n.title=i.length>1?i.slice(1).join(":"):""):(""!==t&&""===i[0]?(n.name=":",i=i.slice(1)):n.name=i[0],n.title=i.length>1?i.slice(1).join(":"):""),n.title=e.trim(n.title).replace(/_/g," "),n},s.addKey=function(e,a,i){var o,r,l,c={},d=s.processKeys(i?e:a),u=t.css;return!i&&n.display[d.name]?(l=s.processKeys(n.display[d.name])).action=s.processKeys(e).name:(l=d).action=d.name,c.name=s.processName(d.name),""!==l.name&&(""!==l.map?(t.builtLayouts[s.layout].mappedKeys[l.map]=l.name,t.builtLayouts[s.layout].acceptedKeys.push(l.name)):i&&t.builtLayouts[s.layout].acceptedKeys.push(l.name)),o=i?""===c.name?"":u.keyPrefix+c.name:u.keyAction+" "+u.keyPrefix+l.action,o+=(l.name.length>2?" "+u.keyWide:"")+" "+n.css.buttonDefault,c.html='<span class="'+u.keyText+'">'+l.name.replace(/[\u00A0-\u9999]/gim,function(e){return"&#"+e.charCodeAt(0)+";"})+"</span>",c.$key=s.keyBtn.clone().attr({"data-value":i?l.name:l.action,"data-name":l.action,"data-pos":s.temp[1]+","+s.temp[2],"data-action":l.action,"data-html":c.html}).addClass(o).html(c.html).appendTo(s.temp[0]),l.map&&c.$key.attr("data-mapped",l.map),(l.title||d.title)&&c.$key.attr({"data-title":d.title||l.title,title:d.title||l.title}),"function"==typeof n.buildKey&&(r=(c=n.buildKey(s,c)).$key.html(),c.$key.attr("data-html",r)),c.$key},s.customHash=function(e){var t,a,i,s,o=[],r=[];e=void 0===e?n.customLayout:e;for(a in e)e.hasOwnProperty(a)&&o.push(e[a]);if(r=r.concat.apply(r,o).join(" "),i=0,0===(s=r.length))return i;for(t=0;t<s;t++)i=(i<<5)-i+r.charCodeAt(t),i&=i;return i},s.buildKeyboard=function(a,i){e.isEmptyObject(n.display)&&s.updateLanguage();var o,r,l,c,d=t.css,u=0,p=t.builtLayouts[a||s.layout||n.layout]={mappedKeys:{},acceptedKeys:[]},h=p.acceptedKeys=n.restrictInclude?(""+n.restrictInclude).split(/\s+/)||[]:[],y=d.keyboard+" "+n.css.popup+" "+n.css.container+(n.alwaysOpen||n.userClosed?" "+d.alwaysOpen:""),b=e("<div />").addClass(y).attr({role:"textbox"}).hide();return(o=e.inArray("{space}",h))>-1&&(h[o]=" "),i&&"custom"===n.layout||!t.layouts.hasOwnProperty(n.layout)?(n.layout="custom",y=t.layouts.custom=n.customLayout||{normal:["{cancel}"]}):y=t.layouts[i?n.layout:a||s.layout||n.layout],e.each(y,function(t,a){if(""!==t&&!/^(name|lang|rtl)$/i.test(t))for("default"===t&&(t="normal"),u++,l=e("<div />").attr("name",t).addClass(d.keySet+" "+d.keySet+"-"+t).appendTo(b).toggle("normal"===t),r=0;r<a.length;r++)c=e.trim(a[r]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g,"{$1:$2}"),s.buildRow(l,r,c.split(/\s+/),h),l.find("."+d.keyButton+",."+d.keySpacer).filter(":last").after('<br class="'+d.endRow+'"/>')}),u>1&&(s.sets=!0),p.hasMappedKeys=!e.isEmptyObject(p.mappedKeys),p.$keyboard=b,b},s.buildRow=function(a,i,o,r){var l,c,d,u,p,h,y=t.css;for(d=0;d<o.length;d++)if(s.temp=[a,i,d],u=!1,0!==o[d].length)if(/^\{\S+\}$/.test(o[d])){if(p=o[d].match(/^\{(\S+)\}$/)[1],/\!\!/.test(p)&&(p=p.replace("!!",""),u=!0),/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i.test(p)&&(h=parseFloat(p.replace(/,/,".").match(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1]||0),e('<span class="'+y.keyText+'"></span>').width(p.match(/px/i)?h+"px":2*h+"em").addClass(y.keySpacer).appendTo(a)),/^empty(:((\d+)?([\.|,]\d+)?)(em|px)?)?$/i.test(p)){h=/:/.test(p)?parseFloat(p.replace(/,/,".").match(/^empty:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1]||0):"",s.addKey(""," ",!0).addClass(n.css.buttonDisabled+" "+n.css.buttonEmpty).attr("aria-disabled",!0).width(h?p.match("px")?h+"px":2*h+"em":"");continue}if(/^meta[\w-]+\:?(\w+)?/i.test(p)){s.addKey(p.split(":")[0],p).addClass(y.keyHasActive);continue}switch((c=p.split(":"))[0].toLowerCase()){case"a":case"accept":s.addKey("accept",p).addClass(n.css.buttonAction+" "+y.keyAction);break;case"alt":case"altgr":s.addKey("alt",p).addClass(y.keyHasActive);break;case"b":case"bksp":s.addKey("bksp",p);break;case"c":case"cancel":s.addKey("cancel",p).addClass(n.css.buttonAction+" "+y.keyAction);break;case"combo":s.addKey("combo",p).addClass(y.keyHasActive).attr("title",function(e,t){return t+" "+n.display[n.useCombos?"active":"disabled"]}).toggleClass(n.css.buttonActive,n.useCombos);break;case"dec":r.push(s.decimal?".":","),s.addKey("dec",p);break;case"e":case"enter":s.addKey("enter",p).addClass(n.css.buttonAction+" "+y.keyAction);break;case"lock":s.addKey("lock",p).addClass(y.keyHasActive);break;case"s":case"shift":s.addKey("shift",p).addClass(y.keyHasActive);break;case"sign":r.push("-"),s.addKey("sign",p);break;case"space":r.push(" "),s.addKey("space",p);break;case"t":case"tab":s.addKey("tab",p);break;default:t.keyaction.hasOwnProperty(c[0])&&s.addKey(c[0],p).toggleClass(n.css.buttonAction+" "+y.keyAction,u)}}else l=o[d],s.addKey(l,l,!0)},s.removeBindings=function(t){e(document).unbind(t),s.el.ownerDocument!==document&&e(s.el.ownerDocument).unbind(t),e(window).unbind(t),s.$el.unbind(t)},s.removeKeyboard=function(){s.$allKeys=[],s.$decBtn=[],n.usePreview&&s.$preview.removeData("keyboard"),s.$preview.unbind(s.namespace+"keybindings"),s.preview=null,s.$preview=null,s.$previewCopy=null,s.$keyboard.removeData("keyboard"),s.$keyboard.remove(),s.$keyboard=[],s.isOpen=!1,s.isCurrent(!1)},s.destroy=function(e){var a,i=t.css,o=s.extensionNamespace.length,r=[i.input,i.locked,i.placeholder,i.noKeyboard,i.alwaysOpen,n.css.input,i.isCurrent].join(" ");for(clearTimeout(s.timer),clearTimeout(s.timer2),clearTimeout(s.timer3),s.$keyboard.length&&s.removeKeyboard(),s.removeBindings(s.namespace),s.removeBindings(s.namespace+"callbacks"),a=0;a<o;a++)s.removeBindings(s.extensionNamespace[a]);s.el.active=!1,s.$el.removeClass(r).removeAttr("aria-haspopup").removeAttr("role").removeData("keyboard"),s=null,"function"==typeof e&&e()},s.init()};return t.keyCodes={backSpace:8,tab:9,enter:13,capsLock:20,escape:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46,A:65,Z:90,V:86,C:67,X:88,a:97,z:122},t.css={idSuffix:"_keyboard",initialFocus:"keyboard-init-focus",input:"ui-keyboard-input",inputClone:"ui-keyboard-preview-clone",wrapper:"ui-keyboard-preview-wrapper",preview:"ui-keyboard-preview",keyboard:"ui-keyboard",keySet:"ui-keyboard-keyset",keyButton:"ui-keyboard-button",keyWide:"ui-keyboard-widekey",keyPrefix:"ui-keyboard-",keyText:"ui-keyboard-text",keyHasActive:"ui-keyboard-hasactivestate",keyAction:"ui-keyboard-actionkey",keySpacer:"ui-keyboard-spacer",keyToggle:"ui-keyboard-toggle",keyDisabled:"ui-keyboard-disabled",divWrapperCE:"ui-keyboard-div-wrapper",locked:"ui-keyboard-lockedinput",alwaysOpen:"ui-keyboard-always-open",noKeyboard:"ui-keyboard-nokeyboard",placeholder:"ui-keyboard-placeholder",hasFocus:"ui-keyboard-has-focus",isCurrent:"ui-keyboard-input-current",inputValid:"ui-keyboard-valid-input",inputInvalid:"ui-keyboard-invalid-input",inputAutoAccepted:"ui-keyboard-autoaccepted",endRow:"ui-keyboard-button-endrow"},t.events={kbChange:"keyboardChange",kbBeforeClose:"beforeClose",kbBeforeVisible:"beforeVisible",kbVisible:"visible",kbInit:"initialized",kbInactive:"inactive",kbHidden:"hidden",kbRepeater:"repeater",kbKeysetChange:"keysetChange",inputAccepted:"accepted",inputCanceled:"canceled",inputChange:"change",inputRestricted:"restricted"},t.keyaction={accept:function(e){return e.close(!0),!1},alt:function(e){e.altActive=!e.altActive,e.showSet()},bksp:function(e){e.isContentEditable?(e.execCommand("delete"),e.saveCaret()):e.insertText("\b")},cancel:function(e){return e.close(),!1},clear:function(e){e.$preview[e.isContentEditable?"text":"val"](""),e.$decBtn.length&&e.checkDecimal()},combo:function(e){var a=e.options,i=!a.useCombos,n=e.$keyboard.find("."+t.css.keyPrefix+"combo");return a.useCombos=i,n.toggleClass(a.css.buttonActive,i).attr("title",n.attr("data-title")+" ("+a.display[i?"active":"disabled"]+")"),i&&e.checkCombos(),!1},dec:function(e){e.insertText(e.decimal?".":",")},del:function(e){e.isContentEditable?e.execCommand("forwardDelete"):e.insertText("{d}")},default:function(e){e.shiftActive=e.altActive=e.metaActive=!1,e.showSet()},enter:function(a,i,n){var s=a.el.nodeName,o=a.options;return n.shiftKey?o.enterNavigation?a.switchInput(!n[o.enterMod],!0):a.close(!0):o.enterNavigation&&("TEXTAREA"!==s||n[o.enterMod])?a.switchInput(!n[o.enterMod],!!o.autoAccept&&"true"):("TEXTAREA"===s&&e(n.target).closest("button").length&&a.insertText((t.msie?" ":"")+"\n"),void(a.isContentEditable&&!o.enterNavigation&&(a.execCommand("insertHTML",'<div><br class="'+t.css.divWrapperCE+'"></div>'),setTimeout(function(){t.keyaction.right(a),a.saveCaret()},0))))},lock:function(e){e.last.keyset[0]=e.shiftActive=e.capsLock=!e.capsLock,e.showSet()},left:function(e){var a=t.caret(e.$preview);a.start-1>=0&&(e.last.start=e.last.end=a.start-1,t.caret(e.$preview,e.last),e.setScroll())},meta:function(t,a){var i=e(a);t.metaActive=!i.hasClass(t.options.css.buttonActive),t.showSet(i.attr("data-name"))},next:function(e){return e.switchInput(!0,e.options.autoAccept),!1},normal:function(e){e.shiftActive=e.altActive=e.metaActive=!1,e.showSet()},prev:function(e){return e.switchInput(!1,e.options.autoAccept),!1},right:function(e){var a=t.caret(e.$preview),i=e.isContentEditable?t.getEditableLength(e.el):e.getValue().length;a.end+1<=i&&(e.last.start=e.last.end=a.end+1,t.caret(e.$preview,e.last),e.setScroll())},shift:function(e){e.last.keyset[0]=e.shiftActive=!e.shiftActive,e.showSet()},sign:function(e){if(/^[+-]?\d*\.?\d*$/.test(e.getValue())){var a,i=t.caret(e.$preview),n=e.getValue(),s=e.isContentEditable?t.getEditableLength(e.el):n.length;e.setValue(-1*n),a=s-n.length,e.last.start=i.start+a,e.last.end=i.end+a,t.caret(e.$preview,e.last),e.setScroll()}},space:function(e){e.insertText(" ")},tab:function(e){var t=e.el.nodeName,a=e.options;if("TEXTAREA"!==t){if(a.tabNavigation)return e.switchInput(!e.shiftActive,!0);if("INPUT"===t)return!1}e.insertText("\t")},toggle:function(e){e.enabled=!e.enabled,e.toggle()},NBSP:" ",ZWSP:"​",ZWNJ:"‌",ZWJ:"‍",LRM:"‎",RLM:"‏"},t.builtLayouts={},t.layouts={alpha:{normal:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} a b c d e f g h i j [ ] \\","k l m n o p q r s ; ' {enter}","{shift} t u v w x y z , . / {shift}","{accept} {space} {cancel}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} A B C D E F G H I J { } |",'K L M N O P Q R S : " {enter}',"{shift} T U V W X Y Z < > ? {shift}","{accept} {space} {cancel}"]},qwerty:{normal:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}","{accept} {space} {cancel}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}","{accept} {space} {cancel}"]},international:{normal:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}","{accept} {alt} {space} {alt} {cancel}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}","{accept} {alt} {space} {alt} {cancel}"],alt:["~ ¡ ² ³ ¤ € ¼ ½ ¾ ‘ ’ ¥ × {bksp}","{tab} ä å é ® þ ü ú í ó ö « » ¬","á ß ð f g h j k ø ¶ ´ {enter}","{shift} æ x © v b ñ µ ç > ¿ {shift}","{accept} {alt} {space} {alt} {cancel}"],"alt-shift":["~ ¹ ² ³ £ € ¼ ½ ¾ ‘ ’ ¥ ÷ {bksp}","{tab} Ä Å É ® Þ Ü Ú Í Ó Ö « » ¦","Ä § Ð F G H J K Ø ° ¨ {enter}","{shift} Æ X ¢ V B Ñ µ Ç . ¿ {shift}","{accept} {alt} {space} {alt} {cancel}"]},colemak:{normal:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w f p g j l u y ; [ ] \\","{bksp} a r s t d h n e i o ' {enter}","{shift} z x c v b k m , . / {shift}","{accept} {space} {cancel}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W F P G J L U Y : { } |",'{bksp} A R S T D H N E I O " {enter}',"{shift} Z X C V B K M < > ? {shift}","{accept} {space} {cancel}"]},dvorak:{normal:["` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}","{tab} ' , . p y f g c r l / = \\","a o e u i d h t n s - {enter}","{shift} ; q j k x b m w v z {shift}","{accept} {space} {cancel}"],shift:["~ ! @ # $ % ^ & * ( ) { } {bksp}",'{tab} " < > P Y F G C R L ? + |',"A O E U I D H T N S _ {enter}","{shift} : Q J K X B M W V Z {shift}","{accept} {space} {cancel}"]},num:{normal:["= ( ) {b}","{clear} / * -","7 8 9 +","4 5 6 {sign}","1 2 3 %","0 {dec} {a} {c}"]}},t.language={en:{display:{a:"✔:Accept (Shift+Enter)",accept:"Accept:Accept (Shift+Enter)",alt:"Alt:⌥ AltGr",b:"⌫:Backspace",bksp:"Bksp:Backspace",c:"✖:Cancel (Esc)",cancel:"Cancel:Cancel (Esc)",clear:"C:Clear",combo:"ö:Toggle Combo Keys",dec:".:Decimal",e:"⏎:Enter",empty:" ",enter:"Enter:Enter ⏎",left:"←",lock:"Lock:⇪ Caps Lock",next:"Next ⇨",prev:"⇦ Prev",right:"→",s:"⇧:Shift",shift:"Shift:Shift",sign:"±:Change Sign",space:" :Space",t:"⇥:Tab",tab:"⇥ Tab:Tab",toggle:" ",valid:"valid",invalid:"invalid",active:"active",disabled:"disabled"},wheelMessage:"Use mousewheel to see other keys",comboRegex:/([`\'~\^\"ao])([a-z])/gim,combos:{"`":{a:"à",A:"À",e:"è",E:"È",i:"ì",I:"Ì",o:"ò",O:"Ò",u:"ù",U:"Ù",y:"ỳ",Y:"Ỳ"},"'":{a:"á",A:"Á",e:"é",E:"É",i:"í",I:"Í",o:"ó",O:"Ó",u:"ú",U:"Ú",y:"ý",Y:"Ý"},'"':{a:"ä",A:"Ä",e:"ë",E:"Ë",i:"ï",I:"Ï",o:"ö",O:"Ö",u:"ü",U:"Ü",y:"ÿ",Y:"Ÿ"},"^":{a:"â",A:"Â",e:"ê",E:"Ê",i:"î",I:"Î",o:"ô",O:"Ô",u:"û",U:"Û",y:"ŷ",Y:"Ŷ"},"~":{a:"ã",A:"Ã",e:"ẽ",E:"Ẽ",i:"ĩ",I:"Ĩ",o:"õ",O:"Õ",u:"ũ",U:"Ũ",y:"ỹ",Y:"Ỹ",n:"ñ",N:"Ñ"}}}},t.defaultOptions={language:null,rtl:!1,layout:"qwerty",customLayout:null,position:{of:null,my:"center top",at:"center top",at2:"center bottom"},reposition:!0,usePreview:!0,alwaysOpen:!1,initialFocus:!0,noFocus:!1,stayOpen:!1,userClosed:!1,ignoreEsc:!1,closeByClickEvent:!1,css:{input:"ui-widget-content ui-corner-all",container:"ui-widget-content ui-widget ui-corner-all ui-helper-clearfix",popup:"",buttonDefault:"ui-state-default ui-corner-all",buttonHover:"ui-state-hover",buttonAction:"ui-state-active",buttonActive:"ui-state-active",buttonDisabled:"ui-state-disabled",buttonEmpty:"ui-keyboard-empty"},autoAccept:!1,autoAcceptOnEsc:!1,lockInput:!1,restrictInput:!1,restrictInclude:"",acceptValid:!1,autoAcceptOnValid:!1,cancelClose:!0,tabNavigation:!1,enterNavigation:!1,enterMod:"altKey",stopAtEnd:!0,appendLocally:!1,appendTo:"body",wrapBRs:!0,stickyShift:!0,preventPaste:!1,caretToEnd:!1,scrollAdjustment:10,maxLength:!1,maxInsert:!0,repeatDelay:500,repeatRate:20,resetDefault:!0,openOn:"focus",keyBinding:"mousedown touchstart",useWheel:!0,useCombos:!0,validate:function(e,t,a){return!0}},t.comboRegex=/([`\'~\^\"ao])([a-z])/gim,t.currentKeyboard="",e('\x3c!--[if lte IE 8]><script>jQuery("body").addClass("oldie");<\/script><![endif]--\x3e\x3c!--[if IE]><script>jQuery("body").addClass("ie");<\/script><![endif]--\x3e').appendTo("body").remove(),t.msie=e("body").hasClass("oldie"),t.allie=e("body").hasClass("ie"),t.watermark=void 0!==document.createElement("input").placeholder,t.checkCaretSupport=function(){if("boolean"!=typeof t.checkCaret){var a=e('<div style="height:0px;width:0px;overflow:hidden;position:fixed;top:0;left:-100px;"><input type="text" value="testing"/></div>').prependTo("body");t.caret(a.find("input"),3,3),t.checkCaret=3!==t.caret(a.find("input").hide().show()).start,a.remove()}return t.checkCaret},t.caret=function(e,a,i){if(!e.length||e.is(":hidden")||"hidden"===e.css("visibility"))return{};var n,s,o,r,l=e.data("keyboard"),c=l&&l.options.noFocus,d=/(textarea|input)/i.test(e[0].nodeName);return c||e.focus(),void 0!==a?("object"==typeof a&&"start"in a&&"end"in a?(n=a.start,s=a.end):void 0===i&&(i=a),"number"==typeof a&&"number"==typeof i?(n=a,s=i):"start"===a?n=s=0:"string"==typeof a&&(n=s="end"),d?e.caret(n,s,c):t.setEditableCaret(e,n,s)):(r=d?e.caret():t.getEditableCaret(e[0]),n=r.start,s=r.end,o=d&&e[0].value||e.text()||"",{start:n,end:s,text:o.substring(n,s),replaceStr:function(e){return o.substring(0,n)+e+o.substring(s,o.length)}})},t.isTextNode=function(e){return e&&3===e.nodeType},t.isBlock=function(e,t){var a=e.ownerDocument.defaultView;return t&&1===t.nodeType&&t!==e&&"block"===a.getComputedStyle(t).display?1:0},t.wrapBRs=function(a){var i=e(a).find("br:not(."+t.css.divWrapperCE+")");i.length&&e.each(i,function(i,n){var s=n.parentNode.childNodes.length;(1!==s||1===s&&!t.isBlock(a,n.parentNode))&&e(n).addClass(t.css.divWrapperCE).wrap("<div>")})},t.getEditableCaret=function(a){function i(i,n){function s(e){e&&(u+=e,c+=o&&o.replaceCR||"\n")}for(var r,l,c="",d=!1,u=0,p=e.makeArray(a.childNodes);!d&&p.length;){if((r=p.shift())===i&&(d=!0),l=t.isBlock(a,r.previousSibling),s(l),t.isTextNode(r)){if(u+=d?n:r.length,c+=r.textContent,d)return{position:u,text:c}}else!d&&r.childNodes&&(p=e.makeArray(r.childNodes).concat(p));s(l=t.isTextNode(r.previousSibling)&&t.isBlock(a,r))}return{position:u,text:c}}if(!(a=e(a)[0]).isContentEditable)return{};var n,s,o=(e(a).data("keyboard")||{}).options,r=a.ownerDocument.getSelection().getRangeAt(0),l=i(r.startContainer,r.startOffset),c=l.position;return!1!==o.wrapBRs&&t.wrapBRs(a),r.endContainer===r.startContainer&&r.endOffset===r.startOffset?(n=c,s=""):(n=(l=i(r.endContainer,r.endOffset)).position,s=l.text.substring(c,n)),{start:c,end:n,text:s}},t.getEditableLength=function(e){var a=t.setEditableCaret(e,"getMax");return"number"==typeof a?a:null},t.setEditableCaret=function(a,i,n){function s(i){function n(e){return l+=e?c&&c.replaceCR||"\n":"",e>0}function s(e){var t=u+e;return p=h,h+=e,i-t>=0?(u=t,i-u<=0):i-t<=0}"end"===i?i=a.innerHTML.length:i<0&&(i=0);for(var o,r,l="",d=!1,u=0,p=0,h=0,y=e.makeArray(a.childNodes);!d&&y.length;)if(o=y.shift(),r=t.isBlock(a,o.previousSibling),n(r)&&s(r)&&(d=!0),r=t.isTextNode(o.previousSibling)&&t.isBlock(a,o),n(r)&&s(r)&&(d=!0),t.isTextNode(o)){if(l+=o.textContent,s(o.length))return r=i-u==0&&u-p>=1?o.length:i-u,{node:o,offset:r,position:i,text:l}}else!d&&o.childNodes&&(y=e.makeArray(o.childNodes).concat(y));return y.length?{node:o,offset:i-u,position:i,text:l}:{node:o,offset:o&&o.length||0,position:h,text:l}}if(!(a=e(a)[0]).isContentEditable)return{};var o=a.ownerDocument,r=o.createRange(),l=o.getSelection(),c=(e(a).data("keyboard")||{}).options,d=i,u=n,p="",h=s("getMax"===i?"end":i);if(h.node){if(d=h.position,"getMax"===i)return d;r.setStart(h.node,h.offset),void 0!==n&&n!==i&&(h=s(n)),h.node&&(u=h.position,r.setEnd(h.node,h.offset),p=d===u?"":h.text.substring(d,u)),l.removeAllRanges(),l.addRange(r)}return{start:d,end:u,text:p}},t.replaceContent=function(a,i){a=e(a)[0];for(var n,s,o,r=typeof i,l=t.getEditableCaret(a).start,c=0,d=[a];n=d.pop();)if(t.isTextNode(n))"function"===r?l>=c&&l<=c+n.length&&(n.textContent=i(n.textContent)):"string"===r&&(o=i.substring(c,c+n.length))!==n.textContent&&(n.textContent=o),c+=n.length;else if(n&&n.childNodes)for(s=n.childNodes.length;s--;)d.push(n.childNodes[s]);s=t.getEditableCaret(a),t.setEditableCaret(a,s.start,s.start)},e.fn.keyboard=function(t){return this.each(function(){e(this).data("keyboard")||new e.keyboard(this,t)})},e.fn.getkeyboard=function(){return this.data("keyboard")},e.fn.caret=function(e,t,a){if(void 0===this[0]||this.is(":hidden")||"hidden"===this.css("visibility")||!/(INPUT|TEXTAREA)/.test(this[0].nodeName))return this;var i,n,s,o,r,l=this,c=l[0],d=c.ownerDocument.selection,u=c.scrollTop,p=!1,h=!0;try{p="selectionStart"in c}catch(e){h=!1}return h&&void 0!==e?(/(email|number)/i.test(c.type)||(p?(c.selectionStart=e,c.selectionEnd=t):((i=c.createTextRange()).collapse(!0),i.moveStart("character",e),i.moveEnd("character",t-e),i.select())),a||!l.is(":visible")&&"hidden"===l.css("visibility")||c.focus(),c.scrollTop=u,this):(/(email|number)/i.test(c.type)?e=t=l.val().length:p?(e=c.selectionStart,t=c.selectionEnd):d?"TEXTAREA"===c.nodeName?(r=l.val(),(s=(n=d.createRange()).duplicate()).moveToElementText(c),s.setEndPoint("EndToEnd",n),e=s.text.replace(/\r/g,"\n").length,t=e+n.text.replace(/\r/g,"\n").length):(r=l.val().replace(/\r/g,"\n"),(n=d.createRange().duplicate()).moveEnd("character",r.length),e=""===n.text?r.length:r.lastIndexOf(n.text),(n=d.createRange().duplicate()).moveStart("character",-r.length),t=n.text.length):e=t=(c.value||"").length,o=c.value||"",{start:e,end:t,text:o.substring(e,t),replace:function(a){return o.substring(0,e)+a+o.substring(t,o.length)}})},t});
        /*
         jquery.fullscreen 1.1.5
         https://github.com/kayahr/jquery-fullscreen-plugin
         Copyright (C) 2012-2013 Klaus Reimer <k@ailis.de>
         Licensed under the MIT license
         (See http://www.opensource.org/licenses/mit-license)
        */
        function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=
        b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;
        e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});
        !function(n,r,p){var m=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(t){n.setTimeout(t,1e3/60)},f=function(){var e={},o=r.createElement("div").style,i=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,s=t.length;i<s;i++)if(t[i]+"ransform"in o)return t[i].substr(0,t[i].length-1);return!1}();function t(t){return!1!==i&&(""===i?t:i+t.charAt(0).toUpperCase()+t.substr(1))}e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,i){for(var s in i)t[s]=i[s]},e.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},e.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},e.prefixPointerEvent=function(t){return n.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},e.momentum=function(t,i,s,e,o,n){var r,h,a=t-i,l=p.abs(a)/s;return h=l/(n=void 0===n?6e-4:n),(r=t+l*l/(2*n)*(a<0?-1:1))<e?(r=o?e-o/2.5*(l/8):e,h=(a=p.abs(r-t))/l):0<r&&(r=o?o/2.5*(l/8):0,h=(a=p.abs(t)+r)/l),{destination:p.round(r),duration:h}};var s=t("transform");return e.extend(e,{hasTransform:!1!==s,hasPerspective:t("perspective")in o,hasTouch:"ontouchstart"in n,hasPointer:!(!n.PointerEvent&&!n.MSPointerEvent),hasTransition:t("transition")in o}),e.isBadAndroid=function(){var t=n.navigator.appVersion;if(!/Android/.test(t)||/Chrome\/\d/.test(t))return!1;var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&2<=i.length)||parseFloat(i[1])<535.19}(),e.extend(e.style={},{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),e.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},e.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},e.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return p.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return--t*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*p.pow(2,-10*t)*p.sin((t-.055)*(2*p.PI)/.22)+1}}}),e.tap=function(t,i){var s=r.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},e.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||((i=r.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,t.view,1,s.screenX,s.screenY,s.clientX,s.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,s.dispatchEvent(i))},e}();function t(t,i){for(var s in this.wrapper="string"==typeof t?r.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!f.hasPointer,disableTouch:f.hasPointer||!f.hasTouch,disableMouse:f.hasPointer||f.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===n.onmousedown},i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&f.hasPerspective?" translateZ(0)":"",this.options.useTransition=f.hasTransition&&this.options.useTransition,this.options.useTransform=f.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?f.ease[this.options.bounceEasing]||f.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function h(t,i,s){var e=r.createElement("div"),o=r.createElement("div");return!0===s&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator","h"==t?(!0===s&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(!0===s&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),e.className="iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function a(t,i){for(var s in this.wrapper="string"==typeof i.el?r.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(f.addEvent(this.indicator,"touchstart",this),f.addEvent(n,"touchend",this)),this.options.disablePointer||(f.addEvent(this.indicator,f.prefixPointerEvent("pointerdown"),this),f.addEvent(n,f.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(f.addEvent(this.indicator,"mousedown",this),f.addEvent(n,"mouseup",this))),this.options.fade){this.wrapperStyle[f.style.transform]=this.scroller.translateZ;var e=f.style.transitionDuration;this.wrapperStyle[e]=f.isBadAndroid?"0.0001ms":"0ms";var o=this;f.isBadAndroid&&m(function(){"0.0001ms"===o.wrapperStyle[e]&&(o.wrapperStyle[e]="0s")}),this.wrapperStyle.opacity="0"}}t.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=f.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||f.eventType[t.type]===this.initiated)){!this.options.preventDefault||f.isBadAndroid||f.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=f.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=f.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&f.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,h=n.pageY-this.pointY,a=f.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=h,e=p.abs(this.distX),o=p.abs(this.distY),!(300<a-this.endTime&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,h=this.hasVerticalScroll?h:0,i=this.x+r,s=this.y+h,(0<i||i<this.maxScrollX)&&(i=this.options.bounce?this.x+r/3:0<i?0:this.maxScrollX),(0<s||s<this.maxScrollY)&&(s=this.options.bounce?this.y+h/3:0<s?0:this.maxScrollY),this.directionX=0<r?-1:r<0?1:0,this.directionY=0<h?-1:h<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),300<a-this.startTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&f.eventType[t.type]===this.initiated){this.options.preventDefault&&!f.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,s,e=f.getTime()-this.startTime,o=p.round(this.x),n=p.round(this.y),r=p.abs(o-this.startX),h=p.abs(n-this.startY),a=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=f.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&f.tap(t,this.options.tap),this.options.click&&f.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&r<100&&h<100)this._execEvent("flick");else{if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?f.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?f.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,a=p.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(o,n);this.currentPage=c,a=this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-c.x),1e3),p.min(p.abs(n-c.y),1e3)),300),o=c.x,n=c.y,this.directionX=0,this.directionY=0,l=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(0<o||o<this.maxScrollX||0<n||n<this.maxScrollY)&&(l=f.ease.quadratic),void this.scrollTo(o,n,a,l);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||0<this.x?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||0<this.y?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=f.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);-1<s&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||f.ease.circular,this.isInTransition=this.options.useTransition&&0<s;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=f.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===s&&(s=p.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===e&&(e=p.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=s||0,n.top-=e||0,n.left=0<n.left?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=0<n.top?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=null==i||"auto"===i?p.max(p.abs(this.x-n.left),p.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){t=t||0;var i=f.style.transitionDuration;if(this.scrollerStyle[i]=t+"ms",!t&&f.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;m(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[f.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[f.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=p.round(t),i=p.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?f.removeEvent:f.addEvent,s=this.options.bindToWrapper?this.wrapper:n;i(n,"orientationchange",this),i(n,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),f.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,f.prefixPointerEvent("pointerdown"),this),i(s,f.prefixPointerEvent("pointermove"),this),i(s,f.prefixPointerEvent("pointercancel"),this),i(s,f.prefixPointerEvent("pointerup"),this)),f.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=n.getComputedStyle(this.scroller,null);return i=this.options.useTransform?(t=+((s=s[f.style.transform].split(")")[0].split(", "))[12]||s[4]),+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){var t,i=this.options.interactiveScrollbars,s="string"!=typeof this.options.scrollbars,e=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:h("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),e.push(t)),this.options.scrollX&&(t={el:h("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),e.push(t))),this.options.indicators&&(e=e.concat(this.options.indicators));for(var n=e.length;n--;)this.indicators.push(new a(this,e[n]));function r(t){if(o.indicators)for(var i=o.indicators.length;i--;)t.call(o.indicators[i])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()})}),this.on("scrollCancel",function(){r(function(){this.fade()})}),this.on("scrollStart",function(){r(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)})})),this.on("refresh",function(){r(function(){this.refresh()})}),this.on("destroy",function(){r(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){f.addEvent(this.wrapper,"wheel",this),f.addEvent(this.wrapper,"mousewheel",this),f.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,f.removeEvent(this.wrapper,"wheel",this),f.removeEvent(this.wrapper,"mousewheel",this),f.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)s=1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,0<i?e--:i<0&&e++,0<s?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+p.round(this.hasHorizontalScroll?i:0),o=this.y+p.round(this.hasVerticalScroll?s:0),this.directionX=0<i?-1:i<0?1:0,this.directionY=0<s?-1:s<0?1:0,0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<o?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r=0,h=0,a=0,l=this.options.snapStepX||this.wrapperWidth,c=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(s=p.round(l/2),e=p.round(c/2);a>-this.scrollerWidth;){for(this.pages[r]=[],o=t=0;o>-this.scrollerHeight;)this.pages[r][t]={x:p.max(a,this.maxScrollX),y:p.max(o,this.maxScrollY),width:l,height:c,cx:a-s,cy:o-e},o-=c,t++;a-=l,r++}else for(t=(n=this.options.snap).length,i=-1;r<t;r++)(0===r||n[r].offsetLeft<=n[r-1].offsetLeft)&&(h=0,i++),this.pages[h]||(this.pages[h]=[]),a=p.max(-n[r].offsetLeft,this.maxScrollX),o=p.max(-n[r].offsetTop,this.maxScrollY),s=a-p.round(n[r].offsetWidth/2),e=o-p.round(n[r].offsetHeight/2),this.pages[h][i]={x:a,y:o,width:n[r].offsetWidth,height:n[r].offsetHeight,cx:s,cy:e},a>this.maxScrollX&&h++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.x-this.startX),1e3),p.min(p.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(p.abs(t-this.absStartX)<this.snapThresholdX&&p.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(0<t?t=0:t<this.maxScrollX&&(t=this.maxScrollX),0<i?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&((s+=this.directionX)<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-this.x),1e3),p.min(p.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;++s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;--s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];f.addEvent(n,"keydown",this),this.on("destroy",function(){f.removeEvent(n,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=f.getTime(),r=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-r<200?p.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=e=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}s?this.goToPage(e,o):(0<e?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),0<o?(o=0,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n)}},_animate:function(n,r,h,a){var l=this,c=this.x,p=this.y,d=f.getTime(),u=d+h;this.isAnimating=!0,function t(){var i,s,e,o=f.getTime();if(u<=o)return l.isAnimating=!1,l._translate(n,r),void(l.resetPosition(l.options.bounceTime)||l._execEvent("scrollEnd"));e=a(o=(o-d)/h),i=(n-c)*e+c,s=(r-p)*e+p,l._translate(i,s),l.isAnimating&&m(t)}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},a.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(f.removeEvent(this.indicator,"touchstart",this),f.removeEvent(this.indicator,f.prefixPointerEvent("pointerdown"),this),f.removeEvent(this.indicator,"mousedown",this),f.removeEvent(n,"touchmove",this),f.removeEvent(n,f.prefixPointerEvent("pointermove"),this),f.removeEvent(n,"mousemove",this),f.removeEvent(n,"touchend",this),f.removeEvent(n,f.prefixPointerEvent("pointerup"),this),f.removeEvent(n,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=f.getTime(),this.options.disableTouch||f.addEvent(n,"touchmove",this),this.options.disablePointer||f.addEvent(n,f.prefixPointerEvent("pointermove"),this),this.options.disableMouse||f.addEvent(n,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;f.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),f.removeEvent(n,"touchmove",this),f.removeEvent(n,f.prefixPointerEvent("pointermove"),this),f.removeEvent(n,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.scroller.x-i.x),1e3),p.min(p.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var i=f.style.transitionDuration;if(this.indicatorStyle[i]=t+"ms",!t&&f.isBadAndroid){this.indicatorStyle[i]="0.0001ms";var s=this;m(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[f.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(f.addClass(this.wrapper,"iScrollBothScrollbars"),f.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(f.removeClass(this.wrapper,"iScrollBothScrollbars"),f.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=p.max(p.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=p.max(p.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&p.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&p.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=p.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?t="scale"==this.options.shrink?(this.width=p.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",this.maxPosX+this.indicatorWidth-this.width):this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=p.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?i="scale"==this.options.shrink?(this.height=p.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",this.maxPosY+this.indicatorHeight-this.height):this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[f.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?p.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?p.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[f.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},t.utils=f,"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):n.IScroll=t}(window,document,Math);
        /*! tinycolorpicker - v0.9.4 - 2015-11-20
         * http://www.baijs.com/tinycolorpicker
         *
         * Copyright (c) 2015 Maarten Baijs <wieringen@gmail.com>;
         * Licensed under the MIT license */
        
        !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b,e){function f(){return s?(m=a("<canvas></canvas>"),k.append(m),q=m[0].getContext("2d"),g()):a.each(j.options.colors,function(a,b){var c=p.clone();c.css("backgroundColor",b),c.attr("data-color",b),o.append(c)}),h(),j}function g(){var b=new Image,c=k.css("background-image").replace(/"/g,"").replace(/url\(|\)$/gi,"");b.crossOrigin="Anonymous",k.css("background-image","none"),a(b).on("load",function(){m.attr("width",this.width),m.attr("height",this.height),q.drawImage(b,0,0,this.width,this.height)}),b.src=j.options.backgroundUrl||c}function h(){var b=t?"touchstart":"mousedown";s?(l.bind(b,function(b){b.preventDefault(),b.stopPropagation(),k.toggle(),a(document).bind("mousedown.colorpicker",function(b){a(document).unbind(".colorpicker"),j.close()})}),t?(m.bind("touchstart",function(a){return r=!0,i(a.originalEvent.touches[0]),!1}),m.bind("touchmove",function(a){return i(a.originalEvent.touches[0]),!1}),m.bind("touchend",function(a){return j.close(),!1})):(m.mousedown(function(b){return r=!0,i(b),a(document).bind("mouseup.colorpicker",function(b){return a(document).unbind(".colorpicker"),j.close(),!1}),!1}),m.mousemove(i))):(l.bind("mousedown",function(a){a.preventDefault(),a.stopPropagation(),o.toggle()}),o.delegate("li","mousedown",function(b){b.preventDefault(),b.stopImmediatePropagation();var c=a(this).attr("data-color");j.setColor(c),o.hide()}))}function i(c){if(r){var d=a(c.target),e=d.offset(),f=q.getImageData(c.pageX-e.left,c.pageY-e.top,1,1).data;j.setColor("rgb("+f[0]+","+f[1]+","+f[2]+")"),b.trigger("change",[j.colorHex,j.colorRGB])}}this.options=a.extend({},d,e),this._defaults=d,this._name=c;var j=this,k=b.find(".track"),l=b.find(".color"),m=null,n=b.find(".colorInput"),o=b.find(".dropdown"),p=o.find("li").remove(),q=null,r=!1,s=!!document.createElement("canvas").getContext,t="ontouchstart"in document.documentElement;return this.colorHex="",this.colorRGB="",this.setColor=function(a){a.indexOf("#")>=0?(j.colorHex=a,j.colorRGB=j.hexToRgb(j.colorHex)):(j.colorRGB=a,j.colorHex=j.rgbToHex(j.colorRGB)),l.find(".colorInner").css("backgroundColor",j.colorHex),n.val(j.colorHex)},this.close=function(){r=!1,k.hide()},this.hexToRgb=function(a){var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return"rgb("+parseInt(b[1],16)+","+parseInt(b[2],16)+","+parseInt(b[3],16)+")"},this.rgbToHex=function(a){function b(a){var b=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");return isNaN(a)?"00":b[(a-a%16)/16]+b[a%16]}var c=a.match(/\d+/g);return"#"+b(c[0])+b(c[1])+b(c[2])},f()}var c="tinycolorpicker",d={colors:["#ffffff","#A7194B","#FE2712","#FB9902","#FABC02","#FEFE33","#D0EA2B","#66B032","#0391CE","#0247FE","#3D01A5","#8601AF"],backgroundUrl:null};a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(a(this),d))})}});
        ;
        
        // source: plugin/touchui/js/touchui.bundled.js
        var TouchUI = function() {
        	this.core.init.call(this);
        	this.knockout.viewModel.call(this);
        	this.knockout.bindings.call(this);
        	return this.core.bridge.call(this);
        };
        
        TouchUI.prototype = {
        	constructor: TouchUI,
        	isActive: ko.observable(false),
        
        	settings: {
        		id: "touch",
        		version: 0,
        		requiredBootloaderVersion: 1,
        
        		isFullscreen: ko.observable(false),
        		isTouchscreen: ko.observable(false),
        
        		isEpiphanyOrKweb: window.navigator.userAgent.indexOf("AppleWebKit") !== -1 && window.navigator.userAgent.indexOf("ARM Mac OS X") !== -1,
        		isChromiumArm: window.navigator.userAgent.indexOf("X11") !== -1 && window.navigator.userAgent.indexOf("Chromium") !== -1 && window.navigator.userAgent.indexOf("armv7l") !== -1,
        
        		hasBootloader: window.navigator.userAgent.indexOf("TouchUI") !== -1,
        		hasFullscreen: ko.observable(document.webkitCancelFullScreen || document.msCancelFullScreen || document.oCancelFullScreen || document.mozCancelFullScreen || document.cancelFullScreen),
        		hasLocalStorage: ('localStorage' in window),
        		hasTouch: ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0),
        
        		canBoot: {
        			resolution: $("#touchui_auto_load_resolution").length > 0,
        			touch: $("#touchui_auto_load_touch").length > 0
        		},
        
        		whatsNew: ko.observable(false)
        	},
        
        	core: {},
        	components: {},
        	knockout: {},
        	plugins: {},
        	animate: {
        		isHidebarActive: ko.observable(false)
        	},
        	DOM: {
        		create: {},
        		move: {},
        		overwrite: {}
        	},
        	scroll: {
        
        		defaults: {
        			iScroll: {
        				eventPassthrough: 'horizontal',
        				scrollbars: true,
        				mouseWheel: true,
        				interactiveScrollbars: true,
        				shrinkScrollbars: "scale",
        				fadeScrollbars: true
        			}
        		},
        
        		iScrolls: {},
        		currentActive: null
        	}
        
        }
        
        TouchUI.prototype.animate.hide = function(what) {
        	var self = this;
        
        	//Lets hide the navbar by scroll
        	if( what === "navbar" ) {
        		if( this.animate.isHidebarActive() ) {
        			var navbar = $("#navbar"),
        				navbarHeight = parseFloat(navbar.height());
        
        			if( this.settings.hasTouch ) {
        				// Hide navigation bar on mobile
        				window.scrollTo(0,1);
        
        				if(parseFloat($("html,body").prop('scrollHeight')) > ($(window).height() + navbarHeight)) {//hasEnoughScroll?
        					$("html,body").stop().animate({
        						scrollTop: navbarHeight
        					}, 160, "swing");
        				}
        
        			} else {
        				var scroll = self.scroll.iScrolls.body;
        
        				if(scroll.isAnimating) {
        					setTimeout(function() {
        						self.animate.hide.call(self, what);
        					}, 10);
        					return;
        				}
        
        				setTimeout(function() {
        					if(Math.abs(scroll.maxScrollY) > 0) {
        						scroll.scrollTo(0, -navbarHeight, 160);
        					}
        				}, 0);
        
        			}
        		}
        	}
        
        }
        
        TouchUI.prototype.components.dropdown = {
        
        	init: function() {
        		this.components.dropdown.toggleSubmenu.call( this );
        		this.components.dropdown.toggle.call( this );
        	},
        
        	// Rewrite opening of dropdowns
        	toggle: function() {
        		var self = this;
        		var namespace = ".touchui.dropdown";
        
        		$(document)
        			.off('.dropdown')
        			.on('touchstart.dropdown.data-api', '.dropdown-menu', function (e) { e.stopPropagation() })
        			.on('click.dropdown.data-api', '[data-toggle=dropdown]', function(e) {
        				var $dropdownToggle = $(e.currentTarget);
        				var $dropdownContainer = $dropdownToggle.parent();
        
        				// Stop the hashtag from propagating
        				e.preventDefault();
        
        				// Toggle the targeted dropdown
        				$dropdownContainer.toggleClass("open");
        
        				// Refresh current scroll and add a min-height so we can reach the dropdown if needed
        				self.components.dropdown.containerMinHeight.call(self, $dropdownContainer, $dropdownToggle);
        
        				// Skip everything if we are in a dropdown toggling a dropdown (one click event is enuff!)
        				if( $dropdownContainer.parents('.open > .dropdown-menu').length > 0 ) {
        					return;
        				}
        
        				// Remove all other active dropdowns
        				$('.open [data-toggle="dropdown"]').not($dropdownToggle).parent().removeClass('open');
        
        				if ( !self.settings.hasTouch ) {
        					self.scroll.iScrolls.terminal.disable();
        				}
        
        				$(document).off("click"+namespace).on("click"+namespace, function(eve) {
        					// Check if we scrolled (touch devices wont trigger this click event after scrolling so assume we didn't move)
        					var moved = ( !self.settings.hasTouch ) ? self.scroll.currentActive.moved : false,
        						$target = $(eve.target);
        
        					if (
        						!moved && // If scrolling did not move
        						$target.parents(".ui-pnotify").length === 0 && // if not a click within notifiaction
        						(
        							!$target.parents().is($dropdownContainer) || // if clicks are not made within the dropdown container
        							$target.is('a:not([data-toggle="dropdown"])') // Unless it's a link but not a [data-toggle]
        						)
        					) {
        						$(document).off(eve);
        						$dropdownContainer.removeClass('open');
        
        						if ( !self.settings.hasTouch ) {
        							$('.octoprint-container').css("min-height", 0);
        							self.scroll.currentActive.refresh();
        							self.scroll.iScrolls.terminal.enable();
        						}
        					}
        				});
        			});
        
        	},
        
        	// Support 1.3.0 onMouseOver dropdowns
        	toggleSubmenu: function() {
        		$(".dropdown-submenu").addClass("dropdown");
        		$(".dropdown-submenu > a").attr("data-toggle", "dropdown");
        	},
        
        	// Refresh current scroll and add a min-height so we can reach the dropdown if needed
        	containerMinHeight: function($dropdownContainer, $dropdownToggle) {
        		var self = this;
        
        		// Touch devices can reach the dropdown by CSS, only if we're using iScroll
        		if ( !self.settings.hasTouch ) {
        			// Get active container
        			var $container = ($dropdownContainer.parents('.modal').length === 0 ) ? $('.octoprint-container') : $dropdownContainer.parents('.modal .modal-body');
        
        			// If we toggle within the dropdown then get the parent dropdown for total height
        			var $dropdownMenu = ( $dropdownContainer.parents('.open > .dropdown-menu').length > 0 ) ? $dropdownContainer.parents('.open > .dropdown-menu') : $dropdownToggle.next();
        
        			setTimeout(function() {
        
        				//If the main dropdown has closed (by toggle) then let's remove the min-height else
        				if(!$dropdownMenu.parent().hasClass("open")) {
        					$container.css("min-height", 0);
        					self.scroll.currentActive.refresh();
        				} else {
        					var y = Math.abs(self.scroll.currentActive.y),
        						height = $dropdownMenu.outerHeight(),
        						top = $dropdownMenu.offset().top;
        
        					$container.css("min-height", y + top + height);
        					self.scroll.currentActive.refresh();
        				}
        
        			}, 0);
        		}
        	}
        
        }
        
        TouchUI.prototype.components.fullscreen = {
        	init: function() {
        		var self = this;
        
        		// Bind fullscreenChange to knockout
        		$(document).bind("fullscreenchange", function() {
        			self.settings.isFullscreen($(document).fullScreen() !== false);
        			self.DOM.storage.set("fullscreen", self.settings.isFullscreen());
        		});
        
        	}
        }
        
        TouchUI.prototype.components.keyboard = {
        
        	isActive: ko.observable(false),
        	config: {
        
        		default: {
        			usePreview: false,
        			autoAccept: true,
        
        			display: {
        				'accept' :  'Save',
        				'bksp'   :  ' ',
        				'default': 'ABC',
        				'meta1'  : '.?123',
        				'meta2'  : '#+='
        			},
        
        			layout: 'custom',
        			customLayout: {
        				'default': [
        					'q w e r t y u i o p',
        					'a s d f g h j k l',
        					'{bksp} {s} z x c v b n m',
        					'{accept} {c} {left} {right} {meta1} {space}'
        				],
        				'shift': [
        					'Q W E R T Y U I O P',
        					'A S D F G H J K L',
        					'{bksp} {s} Z X C V B N M',
        					'{accept} {c} {left} {right} {meta1} {space}'
        				],
        				'meta1': [
        					'1 2 3 4 5 6 7 8 9 0',
        					'- / : ; ( ) \u20ac & @',
        					'{bksp} {meta2} . , ? ! \' "',
        					'{accept} {c} {left} {right} {default} {space}'
        				],
        				'meta2': [
        					'[ ] { } # % ^ * + =',
        					'_ \\ | ~ < > $ \u00a3 \u00a5',
        					'{bksp} {meta1} . , ? ! \' "',
        					'{accept} {c} {left} {right} {default} {space}'
        				]
        			}
        
        		},
        		terminal: {
        			usePreview: false,
        			autoAccept: true,
        
        			display: {
        				'bksp'   :  ' ',
        				'accept' : 'Save',
        				'default': 'ABC',
        				'meta1'  : '.?123',
        				'meta2'  : '#+='
        			},
        
        			layout: 'custom',
        			customLayout: {
        				'default': [
        					'Q W E R T Y U I O P',
        					'A S D F G H J K L',
        					'{bksp} {s} Z X C V B N M',
        					'{accept} {c} {left} {right} {meta1} {space}'
        				],
        				'meta1': [
        					'1 2 3 4 5 6 7 8 9 0',
        					'- / : ; ( ) \u20ac & @',
        					'{bksp} {meta2} . , ? ! \' "',
        					'{accept} {c} {left} {right} {default} {space}'
        				],
        				'meta2': [
        					'[ ] { } # % ^ * + =',
        					'_ \\ | ~ < > $ \u00a3 \u00a5',
        					'{bksp} {meta1} . , ? ! \' "',
        					'{accept} {c} {left} {right} {default} {space}'
        				]
        			}
        
        		},
        		number: {
        			usePreview: false,
        			autoAccept: true,
        
        			display: {
        				'bksp'   :  ' ',
        				'a'      :  'Save',
        				'c'      :  'Cancel'
        			},
        
        			layout: 'custom',
        			customLayout: {
        				'default' : [
        					'{bksp} 1 2 3 4 5 6 7 ',
        					'{accept} {c} 8 9 0 - , . '
        				]
        			},
        		}
        
        
        	},
        
        	init: function() {
        		var self = this;
        
        		// Add virtual keyboard
        		var obj = {
        			visible: self.components.keyboard.onShow.bind(self),
        			beforeClose: self.components.keyboard.onClose
        		};
        
        		var notThis = ['[type="file"]','[type="checkbox"]','[type="radio"]'];
        		$(document).on("mousedown", 'input:not('+notThis+'), textarea', function(e) {
        			var $elm = $(e.target);
        
        			if(!self.components.keyboard.isActive()) {
        
        				if($elm.data("keyboard")) {
        					$elm.data("keyboard").close().destroy();
        				}
        
        			} else {
        				// $elm already has a keyboard
        				if($elm.data("keyboard")) {
        					$elm.data('keyboard').reveal();
        					return;
        				}
        
        				if($elm.attr("type") === "number") {
        					$elm.keyboard($.extend(self.components.keyboard.config.number, obj));
        				} else if($elm.attr("id") === "terminal-command") {
        					$elm.keyboard($.extend(self.components.keyboard.config.terminal, obj));
        				} else {
        					$elm.keyboard($.extend(self.components.keyboard.config.default, obj));
        				}
        			}
        
        		});
        	},
        
        	onShow: function(event, keyboard, el) {
        		var self = this;
        
        		keyboard.$keyboard.find("button").on("mousedown, touchstart", function(e) {
        			var $elm = $(e.target);
        			$elm.addClass("touch-focus");
        
        			if($elm.data("timeout")) {
        				clearTimeout($elm.data("timeout"));
        			}
        
        			var timeout = setTimeout(function() {
        				$elm.removeClass("touch-focus").data("timeout", "");
        			}, 1000);
        
        			$elm.data("timeout", timeout);
        		});
        
        		if(!self.settings.hasTouch) {
        			var height = keyboard.$keyboard.height();
        			$('#page-container-main').css('padding-bottom', height);
        
        			// Force iScroll to stop following the mouse (bug)
        			self.scroll.currentActive._end(new Event('click'));
        			setTimeout(function() {
        				self.scroll.currentActive.scrollToElement(keyboard.$el[0], 200, 0, -30);
        			}, 100);
        
        		}
        	},
        
        	onClose: function(event, keyboard, el) {
        		keyboard.$keyboard.find("button").off("mousedown, touchstart");
        		$('#page-container-main').css('padding-bottom', 0);
        	}
        
        }
        
        TouchUI.prototype.components.modal = {
        
        	init: function() {
        		if($("#settings_dialog_menu").length > 0) {
        			this.components.modal.dropdown.create.call(this, "#settings_dialog_menu", "special-dropdown-uni", "#settings_dialog_label");
        		}
        		if($("#usersettings_dialog ul.nav").length > 0) {
        			this.components.modal.dropdown.create.call(this, "#usersettings_dialog ul.nav", "special-dropdown-uni-2", "#usersettings_dialog h3");
        		}
        	},
        
        	dropdown: {
        		create: function(cloneId, newId, appendTo) {
        			var self = this;
        
        			// Remove unwanted whitespaces
        			$(appendTo).text($(appendTo).text().trim());
        
        			// Create a label that is clickable
        			var $settingsLabel = $("<span></span>")
        				.addClass("hidden")
        				.attr("id", newId)
        				.appendTo(appendTo)
        				.text($(cloneId+" .active").text().trim())
        				.on("click", function(e) {
        
        					// Stop if we clicked on the dropdown and stop the dropdown from regenerating more then once
        					if(e.target !== this || (e.target === this && $(".show-dropdown").length > 0)) {
        						return;
        					}
        
        					// Clone the main settings menu
        					var elm = $(cloneId)
        						.clone()
        						.attr("id", "")
        						.appendTo(this)
        						.addClass("show-dropdown");
        
        					// Add click binder to close down the dropdown
        					$(document).on("click", function(event) {
        
        						if(
        							$(event.target).closest('[data-toggle="tab"]').length > 0 || //Check if we clicked on a tab-link
        							$(event.target).closest("#"+newId).length === 0 //Check if we clicked outside the dropdown
        						) {
        							var href = $settingsLabel.find(".active").find('[data-toggle="tab"]').attr("href");
        							$(document).off(event).trigger("dropdown-closed.touchui"); // Trigger event for enabling scrolling
        
        							$('.show-dropdown').remove();
        							$('[href="'+href+'"]').click();
        							$settingsLabel.text($('[href="'+href+'"]').text());
        
        							if( !self.settings.hasTouch ) {
        								setTimeout(function() {
        									self.scroll.modal.stack[self.scroll.modal.stack.length-1].refresh();
        								}, 0);
        							}
        						}
        
        					});
        
        					// Trigger event for disabling scrolling
        					$(document).trigger("dropdown-open.touchui", elm[0]);
        				});
        
        			// reset the active text in dropdown on open
        			$(appendTo)
        				.closest(".modal")
        				.on("modal.touchui", function() {
        					var href = $(cloneId)
        						.find(".active")
        						.find('[data-toggle="tab"]')
        						.attr("href");
        
        					$settingsLabel.text($('[href="'+href+'"]').text());
        				});
        
        		}
        	}
        }
        
        TouchUI.prototype.components.slider = {
        
        	init: function() {
        
        		ko.bindingHandlers.slider = {
        			init: function (element, valueAccessor) {
        				var $element = $(element);
        
        				// Set value on input field
        				$element.val(valueAccessor().value());
        
        				// Create container
        				var div = $('<div class="slider-container"></div>').insertBefore(element);
        
        				// Wait untill next DOM bindings are executed
        				setTimeout(function() {
        					var $button = $(element).next('button');
        					var id = _.uniqueId("ui-inp");
        					var text = $button.text().split(":")[0].replace(" ", "");
        
        					$button.appendTo(div);
        					$element.appendTo(div);
        
        					$(div).find('input').attr("id", id);
        
        					var lbl = $('<label for="' + id + '" style="display: inline-block;">' + text + ':</label>');
        					lbl.appendTo('.octoprint-container')
        					$element.attr("style", "padding-left:" + (lbl.width() + 15) + "px");
        					lbl.appendTo(div);
        
        					if (valueAccessor().tools && valueAccessor().tools.length === 0) {
        						div.hide();
        					} else {
        						div.show();
        					}
        
        				}, 60);
        
        				$element.on("change", function(e) {
        					valueAccessor().value(parseFloat($element.val()));
        				}).attr({
        					max: valueAccessor().max,
        					min: valueAccessor().min,
        					step: valueAccessor().step,
        				});
        
        			},
        			update: function (element, valueAccessor) {
        				$(element).val(parseFloat(valueAccessor().value()));
        
        				if (valueAccessor().tools && valueAccessor().tools.length === 0) {
        					$(element).parent().hide();
        				} else {
        					$(element).parent().show();
        				}
        			}
        		};
        
        	}
        
        }
        
        TouchUI.prototype.components.touchList = {
        	init: function() {
        
        		/* Add touch friendly files list */
        		var self = this;
        		var touch = false;
        		var start = 0;
        		var namespace = ".files.touchui";
        
        		$(document).on("mousedown touchstart", "#files .entry:not(.back), #temp .row-fluid", function(e) {
        			try {
        				touch = e.currentTarget;
        				start = e.pageX || e.originalEvent.targetTouches[0].pageX;
        			} catch(err) {
        				return;
        			}
        
        			$(document).one("mouseup"+namespace+" touchend"+namespace, function(e) {
        				touch = false;
        				start = 0;
        
        				$(document).off(namespace);
        			});
        
        			$(document).on("mousemove"+namespace+" touchmove"+namespace, function(event) {
        				if(touch !== false) {
        					try {
        						var current = event.pageX || event.originalEvent.targetTouches[0].pageX;
        
        						if(current > start + 80) {
        							$(document).trigger("fileclose" + namespace, event.target);
        							$(touch).removeClass("open");
        							start = current;
        						} else if(current < start - 80) {
        							$(document).trigger("fileopen" + namespace, event.target);
        							$(touch).addClass("open");
        							start = current;
        
        							if( $(touch).find(".btn-group").children().length > 4 ) {
        								$(touch).addClass("large");
        							}
        						}
        					} catch(err) {
        						//Ignore step
        					}
        				}
        			});
        
        		});
        
        	}
        
        }
        
        TouchUI.prototype.components.touchscreen = {
        
        	init: function () {
        		$("html").addClass("isTouchscreenUI");
        
        		if (this.settings.isEpiphanyOrKweb) {
        			this.settings.hasTouch = false;
        			this.scroll.defaults.iScroll.disableTouch = true;
        			this.scroll.defaults.iScroll.disableMouse = false;
        		}
        
        		this.settings.isTouchscreen(true);
        
        		if (this.settings.hasBootloader) {
        			this.settings.hasFullscreen(false);
        		}
        
        		$('.modal.fade').removeClass('fade');
        		$('#gcode_link').remove();
        
        		// Improve performace
        		this.scroll.defaults.iScroll.scrollbars = false;
        		this.scroll.defaults.iScroll.interactiveScrollbars = false;
        		this.scroll.defaults.iScroll.useTransition = false;
        		// this.scroll.defaults.iScroll.useTransform = false;
        		// this.scroll.defaults.iScroll.HWCompositing = false;
        
        		// Remove any links opening in a new tab
        		$('[target="_blank"]').each(function(ind, elm) {
        			$(elm)
        				.attr("target", "")
        				.on("click", function(e) {
        					return confirm("Do you want to navigate away from TouchUI?");
        				});
        		});
        
        		// disable dashboard layer progress
        		if ($('.dashboardGridItem').length > 0) {
        			$('.dashboardGridItem').each(function(i, elm) {
        				if ($(elm).find('[title="Layer Progress"]').length > 0) {
        					$(elm).remove();
        				}
        			});
        		}
        	},
        
        	isLoading: function (viewModels) {
        
        		if(this.settings.isTouchscreen()) {
        			// Disable fancy functionality
        			if(viewModels.terminalViewModel.enableFancyFunctionality) { //TODO: check if 1.2.9 to not throw errors in 1.2.8<
        				 viewModels.terminalViewModel.enableFancyFunctionality(false);
        			}
        
        			// Disable GCodeViewer in touchscreen mode
        			if (viewModels.gcodeViewModel) {
        				console.info("TouchUI: GCodeViewer is disabled while TouchUI is active and in touchscreen mode.");
        				viewModels.gcodeViewModel.enabled = false;
        				viewModels.gcodeViewModel.initialize = _.noop;
        				viewModels.gcodeViewModel.clear = _.noop;
        				viewModels.gcodeViewModel._processData = _.noop;
        			}
        		}
        
        	}
        
        }
        
        TouchUI.prototype.core.init = function() {
        
        	// Migrate old cookies into localstorage
        	this.DOM.storage.migration.call(this);
        
        	// Bootup TouchUI if Touch, Small resolution or storage say's so
        	if (this.core.boot.call(this)) {
        
        		// Send Touchscreen loading status
        		if (window.top.postMessage) {
        			window.top.postMessage("loading", "*");
        		}
        
        		// Attach id for TouchUI styling
        		$("html").attr("id", this.settings.id);
        
        		// Force mobile browser to set the window size to their format
        		$('<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, user-scalable=no, minimal-ui">').appendTo("head");
        		$('<meta name="apple-mobile-web-app-capable" content="yes">').appendTo("head");
        		$('<meta name="mobile-web-app-capable" content="yes">').appendTo("head");
        
        		this.isActive(true);
        
        		// Enforce active cookie
        		this.DOM.storage.set("active", true);
        
        		var isTouchDevice = this.settings.isEpiphanyOrKweb || this.settings.isChromiumArm || this.settings.hasBootloader;
        
        		// Create keyboard cookie if not existing
        		if (this.DOM.storage.get("keyboardActive") === undefined) {
        			if (!this.settings.hasTouch || isTouchDevice) {
        				this.DOM.storage.set("keyboardActive", true);
        			} else {
        				this.DOM.storage.set("keyboardActive", false);
        			}
        		}
        
        		// Create hide navbar on click if not existing
        		if (this.DOM.storage.get("hideNavbarActive") === undefined) {
        			this.DOM.storage.set("hideNavbarActive", false);
        		}
        
        		// Treat KWEB3 as a special Touchscreen mode or enabled by cookie
        		if (
        			this.DOM.storage.get("touchscreenActive") ||
        			(
        				isTouchDevice &&
        				this.DOM.storage.get("touchscreenActive") === undefined
        			)
        		) {
        			this.components.touchscreen.init.call(this);
        		}
        
        		// If TouchUI has been started through bootloader then initialize the process during reloads
        		if (this.settings.hasBootloader && window.top.postMessage) {
        			window.onbeforeunload = function() {
        				window.top.postMessage("reset", "*");
        			};
        		}
        
        		// Get state of cookies and store them in KO
        		this.components.keyboard.isActive(this.DOM.storage.get("keyboardActive"));
        		this.animate.isHidebarActive(this.DOM.storage.get("hideNavbarActive"));
        		this.settings.isFullscreen($(document).fullScreen() !== false);
        	}
        
        }
        
        TouchUI.prototype.core.boot = function() {
        
        	// This should always start TouchUI
        	if(
        		document.location.hash === "#touch" ||
        		document.location.href.indexOf("?touch") > 0 ||
        		this.DOM.storage.get("active") ||
        		this.settings.hasBootloader
        	) {
        
        		return true;
        
        	} else if(
        		this.DOM.storage.get("active") !== false
        	) {
        
        		if($(window).width() < 980 && this.settings.canBoot.resolution) {
        			return true;
        		}
        
        		if(this.settings.hasTouch && this.settings.canBoot.touch) {
        			return true;
        		}
        
        	}
        
        	return false;
        
        }
        
        TouchUI.prototype.core.bridge = function() {
        	var self = this;
        
        	this.core.bridge = {
        
        		allViewModels: {},
        		TOUCHUI_REQUIRED_VIEWMODELS: [
        			"terminalViewModel",
        			"connectionViewModel",
        			"settingsViewModel",
        			"softwareUpdateViewModel",
        			"controlViewModel",
        			"gcodeFilesViewModel",
        			"navigationViewModel",
        			"pluginManagerViewModel",
        			"temperatureViewModel",
        			"loginStateViewModel"
        		],
        		TOUCHUI_ELEMENTS: [
        			"#touchui_settings_dialog",
        			"#settings_plugin_touchui",
        			"#navbar_plugin_touchui"
        		],
        
        		domLoading: function() {
        			if (self.isActive()) {
        				self.scroll.beforeLoad.call(self);
        				self.DOM.init.call(self);
        
        				if (moment && moment.locale) {
        					// Overwrite the 'moment.locale' fuction and call original:
        					// The purpose is that we want to remove data before
        					// registering it to OctoPrint. Moment.locale is called
        					// just before this happens.
        					var old = moment.locale;
        					moment.locale = function() {
        						self.plugins.disable.init.call(self);
        						old.apply(moment, arguments);
        					};
        				}
        			}
        		},
        
        		domReady: function() {
        			if (self.isActive()) {
        
        				if($("#gcode").length > 0) {
        					self.core.bridge.TOUCHUI_REQUIRED_VIEWMODELS = self.core.bridge.TOUCHUI_REQUIRED_VIEWMODELS.concat(["gcodeViewModel"]);
        				}
        
        				self.components.dropdown.init.call(self);
        				self.components.fullscreen.init.call(self);
        				self.components.keyboard.init.call(self);
        				self.components.modal.init.call(self);
        				self.components.touchList.init.call(self);
        				self.components.slider.init.call(self);
        
        				self.scroll.init.call(self);
        			}
        		},
        
        		koStartup: function TouchUIViewModel(viewModels) {
        			self.core.bridge.allViewModels = _.object(self.core.bridge.TOUCHUI_REQUIRED_VIEWMODELS, viewModels);
        			self.knockout.isLoading.call(self, self.core.bridge.allViewModels);
        			return self;
        		}
        	}
        
        	return this.core.bridge;
        }
        
        TouchUI.prototype.core.less = {
        
        	options: {
        		template: {
        			importUrl:	"./plugin/touchui/static/less/touchui.bundled.less?t=" + new Date().getTime(),
        			import:		'@import "{importUrl}"; \n',
        			variables:	"@main-color: {mainColor}; \n" +
        						"@terminal-color: {termColor}; \n" +
        						"@text-color: {textColor}; \n" +
        						"@main-font-size: {fontSize}px; \n" +
        						"@main-background: {bgColor}; \n\n"
        		},
        		API: "./plugin/touchui/css"
        	},
        
        	save: function() {
        		var options = this.core.less.options;
        		var self = this;
        
        		if(self.settings.useCustomization()) {
        			if(self.settings.colors.useLocalFile()) {
        
        				$.get(options.API, {
        						path: self.settings.colors.customPath()
        					})
        					.done(function(response) {
        						self.core.less.render.call(self, options.template.import.replace("{importUrl}", options.template.importUrl) + response);
        					})
        					.error(function(error) {
        						self.core.less.error.call(self, error);
        					});
        
        			} else {
        
        				self.core.less.render.call(self, "" +
        					options.template.import.replace("{importUrl}", options.template.importUrl) +
        					options.template.variables.replace("{mainColor}", self.settings.colors.mainColor())
        						.replace("{termColor}", self.settings.colors.termColor())
        						.replace("{textColor}", self.settings.colors.textColor())
        						.replace("{bgColor}", self.settings.colors.bgColor())
        						.replace("{fontSize}", self.settings.colors.fontSize())
        				);
        
        			}
        		}
        	},
        
        	render: function(data) {
        		var self = this;
        		var callback = function(error, result) {
        
        				if (error) {
        					self.core.less.error.call(self, { responseText: 'Less parser: ' + error.message, status: 0 });
        					console.error(error);
        				} else {
        					result.css = result.css.replace(/mixin\:placeholder\;/g, '');
        
        					$.post(self.core.less.options.API, {
        							css: result.css
        						})
        						.done(function() {
        							self.settings.refreshCSS(true);
        							$(window).trigger('resize');
        						})
        						.fail(function(error) {
        							self.core.less.error.call(self, error);
        						});
        
        				}
        			}
        
        		if(window.less.render) {
        			window.less.render(data, {
        				compress: true
        			}, callback);
        		} else {
        			window.less.Parser({}).parse(data, function(error, result) {
        				if(result) {
        					result = {
        						css: result.toCSS({
        							compress: true
        						})
        					}
        				}
        				callback.call(this, error, result);
        			});
        		}
        	},
        
        	error: function(error) {
        		var content = error.responseText;
        		if(content && content.trim() && error.status !== 401) {
        			new PNotify({
        				title: 'TouchUI: Whoops, something went wrong...',
        				text: content,
        				icon: 'glyphicon glyphicon-question-sign',
        				type: 'error',
        				hide: false
        			});
        		}
        
        	}
        
        }
        
        TouchUI.prototype.core.version = {
        
        	init: function(softwareUpdateViewModel) {
        		var self = this;
        
        		$("<span></span>").appendTo("#terminal-output");
        
        		if(softwareUpdateViewModel) {
        
        			softwareUpdateViewModel.versions.items.subscribe(function(changes) {
        
        				var touchui = softwareUpdateViewModel.versions.getItem(function(elm) {
        					return (elm.key === "touchui");
        				}, true) || false;
        
        				if( touchui !== false && touchui.information !== null ) {
        					var remote = Number(touchui.information.remote.value.split('.').join('')),
        						local = Number(touchui.information.local.value.split('.').join(''));
        
        					if(remote > local) {
        						$("#touch_updates_css").remove();
        						$('head').append('<style id="touch_updates_css">#term pre span:first-child:before{ content: "v'+touchui.information.local.value+" outdated, new version: v"+touchui.information.remote.value+'" !important; }</style>');
        					} else {
        						if( $("#touch_updates_css").length === 0 ) {
        							$('head').append('<style id="touch_updates_css">#term pre span:first-child:before{ content: "v'+touchui.information.local.value+'" !important; }</style>');
        						}
        					}
        				}
        
        			});
        
        		}
        
        	}
        
        }
        
        TouchUI.prototype.DOM.init = function() {
        
        	// Create new tab with printer status and make it active
        	this.DOM.create.printer.init(this.DOM.create.tabbar);
        	this.DOM.create.printer.menu.$elm.find('a').trigger("click");
        
        	// Create a new persistent dropdown
        	this.DOM.create.dropdown.init.call( this.DOM.create.dropdown );
        
        	// Add a webcam tab if it's defined
        	if ($("#webcam_container").length > 0) {
        		this.DOM.create.webcam.init(this.DOM.create.tabbar);
        	}
        
        	// Move all other items from tabbar into dropdown
        	this.DOM.move.sidebar.init.call(this);
        	this.DOM.move.navbar.init.call(this);
        	this.DOM.move.tabbar.init.call(this);
        	this.DOM.move.afterTabAndNav.call(this);
        	this.DOM.move.overlays.init.call(this);
        	this.DOM.move.terminal.init.call(this);
        
        	// Move connection sidebar into a new modal
        	this.DOM.move.connection.init(this.DOM.create.tabbar);
        
        	// Manipulate controls div
        	this.DOM.move.controls.init();
        
        	// Disable these bootstrap/jquery plugins
        	this.DOM.overwrite.tabdrop.call(this);
        	this.DOM.overwrite.modal.call(this);
        	this.DOM.overwrite.pnotify.call(this);
        
        	// Add class with how many tab-items
        	$("#tabs, #navbar").addClass("items-" + $("#tabs li:not(.hidden_touch)").length);
        
        	// Remove active class when clicking on a tab in the tabbar
        	$('#tabs [data-toggle=tab]').on("click", function() {
        		$("#all_touchui_settings").removeClass("item_active");
        	});
        
        	// If touch emulator is enabled, then disable dragging of a menu item for scrolling
        	if(!this.settings.hasTouch) {
        		$("#navbar ul.nav > li a").on("dragstart drop", function(e) {
        			return false;
        		});
        	}
        }
        
        TouchUI.prototype.DOM.cookies = {
        
        	get: function(key, isPlain) {
        		var name = (isPlain) ? key + "=" : "TouchUI." + key + "=";
        		var ca = document.cookie.split(';');
        		var tmp;
        		for(var i=0; i<ca.length; i++) {
        			var c = ca[i];
        			while (c.charAt(0)==' ') c = c.substring(1);
        			if (c.indexOf(name) == 0) tmp = c.substring(name.length,c.length);
        			return (isPlain) ? tmp : $.parseJSON(tmp);
        			
        		}
        		return undefined;
        	},
        
        	set: function(key, value, isPlain) {
        		key = (isPlain) ? key + "=" : "TouchUI." + key + "=";
        		var d = new Date();
        		d.setTime(d.getTime()+(360*24*60*60*1000));
        		var expires = "expires="+d.toUTCString();
        		document.cookie = key + value + "; " + expires;
        	},
        
        	toggleBoolean: function(key, isPlain) {
        		var value = $.parseJSON(this.get(key, isPlain) || "false");
        
        		if(value === true) {
        			this.set(key, "false", isPlain);
        		} else {
        			this.set(key, "true", isPlain);
        		}
        
        		return !value;
        
        	}
        
        }
        
        TouchUI.prototype.DOM.localstorage = {
        	store: JSON.parse(localStorage["TouchUI"] || "{}"),
        
        	get: function (key) {
        		return this.store[key];
        	},
        
        	set: function (key, value) {
        		this.store[key] = value;
        		localStorage["TouchUI"] = JSON.stringify(this.store);
        		return this.store[key];
        	},
        
        	toggleBoolean: function (key) {
        		var value = this.store[key] || false;
        
        		if(value === true) {
        			this.set(key, false);
        		} else {
        			this.set(key, true);
        		}
        
        		return !value;
        
        	}
        
        }
        
        // Since I messed up by releasing start_kweb3.xinit without disabling private
        // mode, we now need to check if we can store anything at all in localstorage
        // the missing -P will prevent any localstorage
        if (TouchUI.prototype.settings.hasLocalStorage) {
        	try {
        		localStorage["TouchUIcanWeHazStorage"] = "true";
        		TouchUI.prototype.DOM.storage = TouchUI.prototype.DOM.localstorage;
        		delete localStorage["TouchUIcanWeHazStorage"];
        	} catch(err) {
        
        		// TODO: remove this is future
        		if(TouchUI.prototype.settings.isEpiphanyOrKweb) {
        			$(function() {
        				new PNotify({
        					type: 'error',
        					title: "Private Mode detection:",
        					text: "Edit the startup file 'start_kweb3.xinit' in '~/OctoPrint-TouchUI-autostart/' "+
        						"and add the parameter 'P' after the dash. \n\n" +
        						"For more information see the v0.3.3 release notes.",
        					hide: false
        				});
        			});
        		}
        
        		console.info("Localstorage defined but failback to cookies due to errors.");
        		TouchUI.prototype.DOM.storage = TouchUI.prototype.DOM.cookies;
        	}
        } else {
        	TouchUI.prototype.DOM.storage = TouchUI.prototype.DOM.cookies;
        }
        
        TouchUI.prototype.DOM.storage.migration = (TouchUI.prototype.DOM.storage === TouchUI.prototype.DOM.localstorage) ? function migration() {
        
        	if (this.settings.hasLocalStorage) {
        		if (document.cookie.indexOf("TouchUI.") !== -1) {
        			console.info("TouchUI cookies migration.");
        
        			var name = "TouchUI.";
        			var ca = document.cookie.split(';');
        			for (var i=0; i<ca.length; i++) {
        				var c = ca[i];
        				while (c.charAt(0)==' ') c = c.substring(1);
        				if (c.indexOf(name) == 0) {
        					var string = c.substring(name.length,c.length);
        					string = string.split("=");
        					var value = $.parseJSON(string[1]);
        
        					console.info("Saving cookie", string[0], "with value", value, "to localstorage.");
        					this.DOM.storage.set(string[0], value);
        
        					console.info("Removing cookie", string[0]);
        					document.cookie = "TouchUI." + string[0] + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        				}
        			}
        		}
        	}
        
        } : _.noop;
        
        TouchUI.prototype.knockout.bindings = function() {
        	var self = this;
        
        	this.bindings = {
        
        		toggleTouch: function() {
        			if (self.DOM.storage.toggleBoolean("active")) {
        				document.location.hash = "#touch";
        			} else {
        				document.location.hash = "";
        			}
        			document.location.reload();
        		},
        
        		toggleKeyboard: function() {
        			if (self.isActive()) {
        				self.components.keyboard.isActive(self.DOM.storage.toggleBoolean("keyboardActive"));
        			}
        		},
        
        		toggleHidebar: function() {
        			if (self.isActive()) {
        				self.animate.isHidebarActive(self.DOM.storage.toggleBoolean("hideNavbarActive"));
        			}
        		},
        
        		toggleFullscreen: function() {
        			$(document).toggleFullScreen();
        		},
        
        		toggleTouchscreen: function() {
        			if (self.isActive()) {
        				self.settings.isTouchscreen(self.DOM.storage.toggleBoolean("touchscreenActive"));
        				document.location.reload();
        			}
        		},
        
        		show: function() {
        			$('#touchui_settings_dialog').modal("show").trigger('click');
        		}
        
        	}
        
        }
        
        TouchUI.prototype.knockout.isLoading = function (viewModels) {
        	var self = this;
        
        	if(self.isActive()) {
        		self.components.touchscreen.isLoading.call(self, viewModels);
        
        		// Reload dimensions of webcam with onload event
        		// Legacy code from 1.3.3
        		// Fixes bug #78
        		if(viewModels.controlViewModel && viewModels.controlViewModel.updateRotatorWidth) {
        			$("#webcam_image").on("load", function() {
        				viewModels.controlViewModel.updateRotatorWidth();
        			});
        		}
        
        		// Prevent user from double clicking in a short period on buttons
        		$(document).on("click", "button:not(#login_button, .box, .distance, .dropdown-toggle, .btn-input-inc, .btn-input-dec, .temperature_target .btn-group button)", function(e) {
        			var printer = $(e.target);
        			printer.prop('disabled', true);
        
        			setTimeout(function() {
        				printer.prop('disabled', false);
        			}, 600);
        		});
        
        		// Update scroll area if new items arrived
        		if( !self.settings.hasTouch ) {
        			viewModels.gcodeFilesViewModel.listHelper.paginatedItems.subscribe(function(a) {
        				setTimeout(function() {
        					self.scroll.iScrolls.body.refresh();
        				}, 300);
        			});
        		}
        
        		// Watch the operational binder for visual online/offline
        		viewModels.connectionViewModel.isOperational.subscribe(function(newOperationalState) {
        			var printLink = $("#all_touchui_settings");
        			if( !newOperationalState ) {
        				printLink.addClass("offline").removeClass("online");
        				$("#conn_link2").addClass("offline").removeClass("online");
        			} else {
        				printLink.removeClass("offline").addClass("online");
        				$("#conn_link2").removeClass("offline").addClass("online");
        				$('#connection_dialog').modal('hide');
        			}
        		});
        	}
        
        	// Check if we can show whats new in this version
        	self.settings.whatsNew.subscribe(function(whatsNew) {
        		if(whatsNew !== false && whatsNew.trim() != "") {
        			new PNotify({
        				title: 'TouchUI: What\'s new?',
        				text: whatsNew,
        				icon: 'glyphicon glyphicon-question-sign',
        				type: 'info',
        				hide: false
        			});
        		}
        	});
        
        }
        
        TouchUI.prototype.knockout.isReady = function (viewModels) {
        	var self = this;
        
        	if(self.isActive()) {
        		// Repaint graph after resize (.e.g orientation changed)
        		$(window).on("resize", function() {
        			viewModels.temperatureViewModel.updatePlot();
        		});
        
        		// Remove slimScroll from files list
        		$('.gcode_files').slimScroll({destroy: true});
        		$('.slimScrollDiv').slimScroll({destroy: true});
        
        		// Remove active keyboard when disabled
        		self.components.keyboard.isActive.subscribe(function(isActive) {
        			if (!isActive) {
        				$(".ui-keyboard-input").each(function(ind, elm) {
        					$(elm).data("keyboard").destroy();
        				});
        			}
        		});
        
        		// Remove drag files into website feature
        		$(document).off("drag");
        		$(document).off("dragover");
        		if (viewModels.gcodeFilesViewModel && viewModels.gcodeFilesViewModel._enableDragNDrop) {
        			viewModels.gcodeFilesViewModel._enableDragNDrop(false);
        			viewModels.gcodeFilesViewModel._enableDragNDrop = function() {};
        			viewModels.gcodeFilesViewModel._forceEndDragNDrop = function() {};
        		}
        
        		// Hide the dropdown after login
        		viewModels.settingsViewModel.loginState.loggedIn.subscribe(function(isLoggedIn) {
        			if (isLoggedIn && $(".open > .dropdown-menu").length > 0) {
        				$(document).trigger("click");
        			}
        		});
        
        		// Redo scroll-to-end interface
        		$("#term .terminal small.pull-right").html('<a href="#"><i class="fa fa-angle-double-down"></i></a>').on("click", function() {
        			viewModels.terminalViewModel.scrollToEnd();
        			return false;
        		});
        
        		// Resize height of low-fi terminal to enable scrolling
        		if ($("#terminal-output-lowfi").prop("scrollHeight")) {
        			viewModels.terminalViewModel.plainLogOutput.subscribe(function() {
        				$("#terminal-output-lowfi").height($("#terminal-output-lowfi").prop("scrollHeight"));
        			});
        		}
        
        		// Overwrite terminal knockout functions (i.e. scroll to end)
        		this.scroll.overwrite.call(this, viewModels.terminalViewModel);
        
        		// Setup version tracking in terminal
        		this.core.version.init.call(this, viewModels.softwareUpdateViewModel);
        
        		// (Re-)Apply bindings to the new webcam div
        		if ($("#webcam").length) {
        			ko.applyBindings(viewModels.controlViewModel, $("#webcam")[0]);
        		}
        
        		// (Re-)Apply bindings to the new navigation div
        		if ($("#navbar_login").length) {
        			try {
        				ko.applyBindings(viewModels.navigationViewModel, $("#navbar_login")[0]);
        			} catch(err) {}
        
        			viewModels.navigationViewModel.loginState.loggedIn.subscribe(function() {
        				// Refresh scroll view when login state changed
        				if( !self.settings.hasTouch ) {
        					setTimeout(function() {
        						self.scroll.currentActive.refresh();
        					}, 0);
        				}
        			});
        		}
        
        		// (Re-)Apply bindings to the new system commands div
        		if ($("#navbar_systemmenu").length) {
        			ko.applyBindings(viewModels.navigationViewModel, $("#navbar_systemmenu")[0]);
        			ko.applyBindings(viewModels.navigationViewModel, $("#divider_systemmenu")[0]);
        		}
        
        		// Force knockout to read the change
        		$('.colorPicker').tinycolorpicker().on("change", function(e, hex, rgb, isTriggered) {
        			if(isTriggered !== false) {
        				$(this).find("input").trigger("change", [hex, rgb, false]);
        			}
        		});
        
        		// Reuse for code below
        		var refreshUrl = function(href) {
        			return href.split("?")[0] + "?ts=" + new Date().getTime();
        		}
        
        		// Reload CSS if needed
        		self.settings.refreshCSS.subscribe(function(hasRefresh) {
        			if (hasRefresh || hasRefresh === "fast") {
        				// Wait 2 seconds, so we're not too early
        				setTimeout(function() {
        					var $css = $("#touchui-css");
        					$css.attr("href", refreshUrl($css.attr("href")));
        					self.settings.refreshCSS(false);
        				}, (hasRefresh === "fast") ? 0 : 1200);
        			}
        		});
        
        		// Reload CSS or LESS after saving our settings
        		self.settings.hasCustom.subscribe(function(customCSS) {
        			if(customCSS !== "") {
        				var $css = $("#touchui-css");
        				var href = $css.attr("href");
        
        				if(customCSS) {
        					href = href.replace("touchui.css", "touchui.custom.css");
        				} else {
        					href = href.replace("touchui.custom.css", "touchui.css");
        				}
        
        				$css.attr("href", refreshUrl(href));
        			}
        		});
        
        		// Check if we need to update an old LESS file with a new LESS one
        		var requireNewCSS = ko.computed(function() {
        			return self.settings.requireNewCSS() && viewModels.loginStateViewModel.isAdmin();
        		});
        		requireNewCSS.subscribe(function(requireNewCSS) {
        			if(requireNewCSS) {
        				setTimeout(function() {
        					self.core.less.save.call(self, self);
        				}, 100);
        			}
        		});
        
        		// Evuluate computed subscriber defined above:
        		// In OctoPrint >1.3.5 the settings will be defined upfront
        		requireNewCSS.notifySubscribers(self.settings.requireNewCSS() && viewModels.loginStateViewModel.isAdmin());
        
        		//TODO: move this
        		$("li.dropdown#navbar_login > a.dropdown-toggle").off("click").on("click", function(e) {
        			e.stopImmediatePropagation();
        			e.preventDefault();
        
        			$(this).parent().toggleClass("open");
        		});
        
        		if (window.top.postMessage) {
        			// Tell bootloader we're ready with giving him the expected version for the bootloader
        			// if version is lower on the bootloader, then the bootloader will throw an update msg
        			window.top.postMessage(self.settings.requiredBootloaderVersion, "*");
        
        			// Sync customization with bootloader
        			window.top.postMessage([true, self.settings.colors.mainColor(), self.settings.colors.bgColor()], "*");
        
        			ko.computed(function() {
        				window.top.postMessage([true, self.settings.colors.mainColor(), self.settings.colors.bgColor()], "*");
        			});
        
        			// Stop watching for errors
        			$(window).off("error.touchui");
        
        			// Trigger wake-up for iScroll
        			if(window.dispatchEvent) {
        				window.dispatchEvent(new Event('resize'));
        			}
        		}
        
        		// Re-render tabbar
        		$(window).trigger('resize.touchui.tabbar');
        
        		// We will win the DOM manipulation war!
        		setTimeout(function() {
        			self.plugins.multiWebCam.call(self);
        		}, 0);
        
        		// Disable clicking outside models
        		if (viewModels.settingsViewModel.appearance_closeModalsWithClick) {
        			$('#settings-appearanceCloseModalsWithClick').parent().addClass('touchui_disabled');
        			$('<span>(Disabled and managed by TouchUI)</span>').appendTo($('#settings-appearanceCloseModalsWithClick').parent());
        
        			this.settings.closeDialogsOutside.subscribe(function(close) {
        				viewModels.settingsViewModel.appearance_closeModalsWithClick(close);
        			});
        
        			this.settings.closeDialogsOutside.valueHasMutated();
        		}
        	}
        }
        
        TouchUI.prototype.knockout.viewModel = function() {
        	var self = this;
        
        	// Subscribe to OctoPrint events
        	self.onStartupComplete = function () {
        		if (self.isActive()) {
        			self.DOM.overwrite.tabbar.call(self);
        		}
        		self.knockout.isReady.call(self, self.core.bridge.allViewModels);
        		if (self.isActive()) {
        			self.plugins.init.call(self, self.core.bridge.allViewModels);
        		}
        	}
        
        	self.onBeforeBinding = function() {
        		ko.mapping.fromJS(self.core.bridge.allViewModels.settingsViewModel.settings.plugins.touchui, {}, self.settings);
        	}
        
        	self.onSettingsBeforeSave = function() {
        		self.core.less.save.call(self);
        	}
        
        	self.onTabChange = function() {
        		if (self.isActive()) {
        			self.animate.hide.call(self, "navbar");
        
        			if(!self.settings.hasTouch && self.scroll.currentActive) {
        				self.scroll.currentActive.refresh();
        				setTimeout(function() {
        					self.scroll.currentActive.refresh();
        				}, 0);
        			}
        		}
        	}
        }
        
        TouchUI.prototype.plugins.init = function (viewModels) {
        	this.plugins.screenSquish(viewModels.pluginManagerViewModel);
        }
        
        TouchUI.prototype.plugins.disable = {
        	plugins: [
        		{
        			htmlId: '#settings_plugin_themeify',
        			name: 'Themeify'
        		}, {
        			functionName: 'TempsgraphViewModel',
        			name: 'TempsGraph'
        		}, {
        			functionName: 'WebcamTabViewModel',
        			name: 'WebcamTab',
        			extra: function() {
        				$('#tab_plugin_webcamtab_link').remove();
        			}
        		}, {
        			functionName: 'AblExpertViewModel',
        			name: 'ABLExpert',
        			extra: function() {
        				$('#settings_plugin_ABL_Expert').hide();
        				$('#settings_plugin_ABL_Expert_link').hide();
        				$('#processing_dialog_plugin_ABL_Expert').hide();
        				$('#results_dialog_plugin_ABL_Expert').hide();
        			}
        		}
        	],
        
        	init: function () {
        		var self = this;
        
        		_.remove(OCTOPRINT_VIEWMODELS, function(viewModel) {
        			return _.some(
        				self.plugins.disable.plugins,
        				self.plugins.disable.find.bind(
        					_.flattenDeep(
        						_.isPlainObject(viewModel) ? _.values(viewModel) : viewModel
        					)
        				)
        			);
        		});
        	},
        
        	find: function(plugin) {
        		var result = false;
        
        		if (plugin.htmlId) {
        			result = this.indexOf(plugin.htmlId) !== -1;
        		}
        
        		if (plugin.functionName) {
        			result = _.some(this, function(viewModelProp) {
        				return viewModelProp.name && viewModelProp.name === plugin.functionName;
        			});
        		}
        
        		if (result) {
        			console.info("TouchUI: " + plugin.name + " is disabled while TouchUI is active.");
        
        			if (plugin.extra) {
        				plugin.extra();
        			}
        		}
        
        		return result;
        	}
        }
        
        TouchUI.prototype.plugins.multiWebCam = function() {
        
        	// Manually move multiWebCam (hard move)
        	if( $("#camControl").length) {
        		$("#camControl").appendTo('#webcam');
        	}
        
        }
        
        TouchUI.prototype.plugins.psuControl = function() {
        
        	// Manually move navbar temp (hard move)
        	if( $("#navbar_plugin_psucontrol a").length > 0 ) {
        		$("#navbar_plugin_psucontrol a")
        			.text('PSU Control');
        	}
        
        }
        
        TouchUI.prototype.plugins.screenSquish = function(pluginManagerViewModel) {
        	var shown = false;
        
        	pluginManagerViewModel.plugins.items.subscribe(function() {
        
        		var ScreenSquish = pluginManagerViewModel.plugins.getItem(function(elm) {
        			return (elm.key === "ScreenSquish");
        		}, true) || false;
        
        		if(!shown && ScreenSquish && ScreenSquish.enabled) {
        			shown = true;
        			new PNotify({
        				title: 'TouchUI: ScreenSquish is running',
        				text: 'Running ScreenSquish and TouchUI will give issues since both plugins try the same, we recommend turning off ScreenSquish.',
        				icon: 'glyphicon glyphicon-question-sign',
        				type: 'error',
        				hide: false,
        				confirm: {
        					confirm: true,
        					buttons: [{
        						text: 'Disable ScreenSquish',
        						addClass: 'btn-primary',
        						click: function(notice) {
        							if(!ScreenSquish.pending_disable) {
        								pluginManagerViewModel.togglePlugin(ScreenSquish);
        							}
        							notice.remove();
        						}
        					}]
        				},
        			});
        		}
        
        	});
        
        };
        
        TouchUI.prototype.scroll.beforeLoad = function() {
        
        	// Manipulate DOM for iScroll before knockout binding kicks in
        	if (!this.settings.hasTouch) {
        		$('<div id="scroll"></div>').insertBefore('.page-container');
        		$('.page-container').appendTo("#scroll");
        	}
        
        }
        
        TouchUI.prototype.scroll.init = function() {
        	var self = this;
        
        	if ( this.settings.hasTouch ) {
        		var width = $(window).width();
        
        		// Covert VH to the initial height (prevent height from jumping when navigation bar hides/shows)
        		$("#temperature-graph").parent().height($("#temperature-graph").parent().outerHeight());
        		$("#terminal-scroll").height($("#terminal-scroll").outerHeight());
        		$("#terminal-sendpanel").css("top", $("#terminal-scroll").outerHeight()-1);
        
        		$(window).on("resize", function() {
        
        			if(width !== $(window).width()) {
        				$("#temperature-graph").parent().height($("#temperature-graph").parent().outerHeight());
        				$("#terminal-scroll").css("height", "").height($("#terminal-scroll").outerHeight());
        				$("#terminal-sendpanel").css("top", $("#terminal-scroll").outerHeight()-1);
        				width = $(window).width();
        			}
        
        
        		});
        
        	} else {
        
        		// Set overflow hidden for best performance
        		$("html").addClass("emulateTouch");
        
        		self.scroll.terminal.init.call(self);
        		self.scroll.body.init.call(self);
        		self.scroll.modal.init.call(self);
        		self.scroll.overlay.init.call(self);
        
        		$(document).on("slideCompleted", function() {
        			self.scroll.currentActive.refresh();
        		});
        
        		// Refresh body on dropdown click
        		$(document).on("click", ".pagination ul li a", function() {
        			setTimeout(function() {
        				self.scroll.currentActive.refresh();
        			}, 0);
        		});
        
        	}
        
        }
        
        TouchUI.prototype.scroll.blockEvents = {
        	className: "no-pointer",
        
        	scrollStart: function($elm, iScrollInstance) {
        		$elm.addClass(this.className);
        	},
        
        	scrollEnd: function($elm, iScrollInstance) {
        		$elm.removeClass(this.className);
        		iScrollInstance.refresh();
        	}
        
        }
        
        TouchUI.prototype.scroll.body = {
        
        	init: function() {
        		var self = this;
        		var scrollStart = false;
        		var $noPointer = $('.page-container');
        
        		// Create main body scroll
        		self.scroll.iScrolls.body = new IScroll("#scroll", self.scroll.defaults.iScroll);
        		self.scroll.currentActive = self.scroll.iScrolls.body;
        
        		// Block everthing while scrolling
        		var scrollStart = self.scroll.blockEvents.scrollStart.bind(self.scroll.blockEvents, $noPointer, self.scroll.iScrolls.body),
        			scrollEnd = self.scroll.blockEvents.scrollEnd.bind(self.scroll.blockEvents, $noPointer, self.scroll.iScrolls.body);
        
        		// Disable all JS events while scrolling for best performance
        		self.scroll.iScrolls.body.on("scrollStart", scrollStart);
        		self.scroll.iScrolls.body.on("onBeforeScrollStart", scrollStart);
        		self.scroll.iScrolls.body.on("scrollEnd", scrollEnd);
        		self.scroll.iScrolls.body.on("scrollCancel", scrollEnd);
        
        		// Prevent any misfortune
        		$(document).on("mouseup.prevent.pointer touchend.prevent.pointer", function() {
        			$noPointer.removeClass('no-pointer');
        		});
        
        	}
        
        }
        
        TouchUI.prototype.scroll.modal = {
        	stack: [],
        	dropdown: null,
        
        	init: function() {
        		var $document = $(document),
        			self = this;
        
        		$document.on("modal.touchui", function(e, elm) {
        			var $modalElm = $(elm),
        				$modalContainer = $(elm).parent();
        
        			// Create temp iScroll within the modal
        			var curModal = new IScroll($modalContainer[0], self.scroll.defaults.iScroll);
        
        			// Store into stack
        			self.scroll.modal.stack.push(curModal);
        			self.scroll.currentActive = curModal;
        
        			// Force iScroll to get the correct scrollHeight
        			setTimeout(function() {
        				if(curModal) {
        					curModal.refresh();
        				}
        			}, 0);
        			// And Refresh again after animation
        			setTimeout(function() {
        				if(curModal) {
        					curModal.refresh();
        				}
        			}, 800);
        
        			// Store bindings into variable for future reference
        			var scrollStart = self.scroll.blockEvents.scrollStart.bind(self.scroll.blockEvents, $modalElm, curModal),
        				scrollEnd = self.scroll.blockEvents.scrollEnd.bind(self.scroll.blockEvents, $modalElm, curModal);
        
        			// Disable all JS events while scrolling for best performance
        			curModal.on("scrollStart", scrollStart);
        			curModal.on("scrollEnd", scrollEnd);
        			curModal.on("scrollCancel", scrollEnd);
        
        			// Refresh the scrollHeight and scroll back to top with these actions:
        			$document.on("click.scrollHeightTouchUI", '[data-toggle="tab"], .pagination ul li a', function(e) {
        				curModal._end(e);
        
        				setTimeout(function() {
        					curModal.refresh();
        					curModal.scrollTo(0, 0);
        				}, 0);
        			});
        
        			// Kill it with fire!
        			$modalElm.one("destroy", function() {
        				$document.off("click.scrollHeightTouchUI");
        				self.scroll.modal.stack.pop();
        
        				if(self.scroll.modal.stack.length > 0) {
        					self.scroll.currentActive = self.scroll.modal.stack[self.scroll.modal.stack.length-1];
        				} else {
        					self.scroll.currentActive = self.scroll.iScrolls.body;
        				}
        
        				curModal.destroy();
        				curModal.off("scrollStart", scrollStart);
        				curModal.off("scrollEnd", scrollEnd);
        				curModal.off("scrollCancel", scrollEnd);
        				curModal = undefined;
        			});
        
        		});
        
        		// Triggered when we create the dropdown and need scrolling
        		$document.on("dropdown-open.touchui", function(e, elm) {
        			var $elm = $(elm);
        
        			// Create dropdown scroll
        			self.scroll.modal.dropdown = new IScroll(elm, {
        				scrollbars: true,
        				mouseWheel: true,
        				interactiveScrollbars: true,
        				shrinkScrollbars: "scale"
        			});
        
        			// Set scroll to active item
        			self.scroll.modal.dropdown.scrollToElement($elm.find('li.active')[0], 0, 0, -30);
        
        			// Disable scrolling in active modal
        			self.scroll.modal.stack[self.scroll.modal.stack.length-1].disable();
        
        			// Store bindings into variable for future reference
        			var scrollStart = self.scroll.blockEvents.scrollStart.bind(self.scroll.blockEvents, $elm, self.scroll.modal.dropdown),
        				scrollEnd = self.scroll.blockEvents.scrollEnd.bind(self.scroll.blockEvents, $elm, self.scroll.modal.dropdown);
        
        			// Disable all JS events for smooth scrolling
        			self.scroll.modal.dropdown.on("scrollStart", scrollStart);
        			self.scroll.modal.dropdown.on("scrollEnd", scrollEnd);
        			self.scroll.modal.dropdown.on("scrollCancel", scrollEnd);
        
        			$document.on("dropdown-closed.touchui", function() {
        				// Enable active modal
        				self.scroll.modal.stack[self.scroll.modal.stack.length-1].enable();
        
        				self.scroll.modal.dropdown.off("scrollStart", scrollStart);
        				self.scroll.modal.dropdown.off("scrollEnd", scrollEnd);
        				self.scroll.modal.dropdown.off("scrollCancel", scrollEnd);
        			});
        
        		});
        
        	}
        }
        
        TouchUI.prototype.scroll.overlay = {
        
        	mainItems: ['#offline_overlay', '#reloadui_overlay'],
        	init: function() {
        		var self = this;
        
        		self.scroll.iScrolls.overlay = [];
        
        		var $items = $(this.scroll.overlay.mainItems);
        		$items.each(function(ind, elm) {
        			var child = $(elm).children("#" + $(elm).attr("id") + "_wrapper");
        			var div = $('<div></div>').prependTo(elm);
        			child.appendTo(div);
        
        			$(elm).addClass("iscroll");
        
        			self.scroll.iScrolls.overlay[ind] = new IScroll(elm, self.scroll.defaults.iScroll);
        		});
        
        	},
        
        	refresh: function() {
        		var self = this;
        
        		setTimeout(function() {
        			$.each(self.scroll.iScrolls.overlay, function(ind) {
        				self.scroll.iScrolls.overlay[ind].refresh();
        			});
        		}, 0);
        
        	}
        
        }
        
        TouchUI.prototype.scroll.overwrite = function(terminalViewModel) {
        	var self = this;
        
        	if ( !this.settings.hasTouch ) {
        
        		// Enforce no scroll jumping
        		$("#scroll").on("scroll", function() {
        			if($("#scroll").scrollTop() !== 0) {
        				$("#scroll").scrollTop(0);
        			}
        		});
        
        		// Refresh terminal scroll height
        		terminalViewModel.displayedLines.subscribe(function() {
        			self.scroll.iScrolls.terminal.refresh();
        		});
        
        		// Overwrite scrollToEnd function with iScroll functions
        		terminalViewModel.scrollToEnd = function() {
        			self.scroll.iScrolls.terminal.refresh();
        			self.scroll.iScrolls.terminal.scrollTo(0, self.scroll.iScrolls.terminal.maxScrollY);
        		};
        
        		// Overwrite orginal helper, add one step and call the orginal function
        		var showOfflineOverlay = window.showOfflineOverlay;
        		window.showOfflineOverlay = function(title, message, reconnectCallback) {
        			showOfflineOverlay.call(this, title, message, reconnectCallback);
        			self.scroll.overlay.refresh.call(self);
        		};
        
        		// Overwrite orginal helper, add one step and call the orginal function
        		var showConfirmationDialog = window.showConfirmationDialog;
        		window.showConfirmationDialog = function(message, onacknowledge) {
        			self.scroll.iScrolls.body.scrollTo(0, 0, 500);
        			showConfirmationDialog.call(this, message, onacknowledge);
        		};
        
        		// Overwrite orginal helper, add one step and call the orginal function
        		var showReloadOverlay = $.fn.show;
        		$.fn.show = function(e,r,i) {
        			if($(this).hasClass("iscroll")) {
        				setTimeout(function() {
        					self.scroll.overlay.refresh.call(self);
        				}, 0);
        			}
        
        			return showReloadOverlay.call(this,e,r,i);
        		}
        
        	} else {
        
        		// Overwrite scrollToEnd function with #terminal-scroll as scroller
        		terminalViewModel.scrollToEnd = function() {
        			var $container = $("#terminal-scroll");
        			if ($container.length) {
        				$container.scrollTop($container[0].scrollHeight - $container.height())
        			}
        		}
        
        	}
        }
        
        TouchUI.prototype.scroll.terminal = {
        
        	init: function() {
        		var self = this;
        
        		// Create scrolling for terminal
        		self.scroll.iScrolls.terminal = new IScroll("#terminal-scroll", self.scroll.defaults.iScroll);
        
        		// Enforce the right scrollheight and disable main scrolling if we have a scrolling content
        		self.scroll.iScrolls.terminal.on("beforeScrollStart", function() {
        			self.scroll.iScrolls.terminal.refresh();
        
        			if(this.hasVerticalScroll) {
        				self.scroll.iScrolls.body.disable();
        			}
        		});
        		self.scroll.iScrolls.terminal.on("scrollEnd", function() {
        			self.scroll.iScrolls.body.enable();
        		});
        
        	}
        }
        
        TouchUI.prototype.DOM.create.dropdown = {
        
        	menuItem: {
        		cloneTo: $('#navbar ul.nav')
        	},
        	container: null,
        
        	init: function() {
        
        		this.menuItem.menu = $('' +
        			'<li id="all_touchui_settings" class="dropdown">' +
        				'<a href="#" class="dropdown-toggle" data-toggle="dropdown">' +
        					$('navbar_show_settings').text() || $('navbar_show_settings').attr("title") +
        				'</a>' +
        			'</li>').prependTo(this.menuItem.cloneTo);
        
        		this.container = $('<ul class="dropdown-menu"></ul>').appendTo(this.menuItem.menu);
        	}
        
        }
        
        TouchUI.prototype.DOM.create.printer = {
        
        	menu: {
        		cloneTo: "#tabs"
        	},
        
        	container: {
        		cloneTo: "#temp"
        	},
        
        	move: {
        		$state: $("#state_wrapper"),
        		$files: $("#files_wrapper")
        	},
        
        	init: function( tabbar ) {
        		this.menu.$elm = tabbar.createItem("print_link", "printer", "tab").prependTo(this.menu.cloneTo);
        		this.container.$elm = $('<div id="printer" class="tab-pane active"><div class="row-fluid"></div></div>').insertBefore(this.container.cloneTo);
        
        		// Move the contents of the hidden accordions to the new print status and files tab
        		this.move.$state.appendTo(this.container.$elm.find(".row-fluid"));
        		this.move.$files.insertAfter(this.container.$elm.find(".row-fluid #state_wrapper"));
        
        		// Create an upload button in the header
        		$('<div class="upload-trigger accordion-heading-button btn-group" data-bind="enable: $root.loginState.isUser(), css: {disabled: !$root.loginState.isUser()}">' +
        			'<a href="#" title="' + $('.upload-buttons .fileinput-button:first-child > span').text()  +'">' +
        				'<i class="fa fa-upload"></i>' +
        			'</a>' +
        		'</div>')
        			.appendTo('#files_wrapper .accordion-heading')
        			.find('a[href="#"]')
        			.on('click', function(e) {
        				e.preventDefault();
        				$('#gcode_upload').click();
        			});
        	}
        
        }
        
        TouchUI.prototype.DOM.create.tabbar = {
        
        	createItem: function(itemId, linkId, toggle, text) {
        		text = (text) ? text : "";
        		return $('<li id="'+itemId+'"><a href="#'+linkId+'" data-toggle="'+toggle+'">'+text+'</a></li>');
        
        	}
        }
        
        TouchUI.prototype.DOM.create.webcam = {
        
        	menu: {
        		webcam: {
        			cloneTo: "#tabs #control_link"
        		}
        	},
        
        	container: {
        		cloneTo: "#tabs + .tab-content",
        
        		webcam: {
        			$container: $("#webcam_container"),
        			cloneTo: "#webcam"
        		}
        	},
        
        	init: function( tabbar ) {
        		this.container.$elm = $('<div id="webcam" class="tab-pane"></div>').appendTo(this.container.cloneTo);
        		this.menu.webcam.$elm = tabbar.createItem("webcam_link", "webcam", "tab").insertAfter(this.menu.webcam.cloneTo).find('a').text('Webcam');
        
        		this.container.webcam.$container.next().appendTo(this.container.webcam.cloneTo);
        		this.container.webcam.$container.prependTo(this.container.webcam.cloneTo);
        
        		$('<!-- ko allowBindings: false -->').insertBefore(this.container.$elm);
        		$('<!-- /ko -->').insertAfter(this.container.$elm);
        
        		$("#webcam_container").attr("data-bind", $("#webcam_container").attr("data-bind").replace("keydown: onKeyDown, ", ""));
        		$("#webcam_image").on("mousedown", function(e) {
        			e.preventDefault();
        		});
        	}
        
        }
        
        TouchUI.prototype.DOM.move.afterTabAndNav = function() {
        
        	this.DOM.create.dropdown.container.children().each(function(ind, elm) {
        		var $elm = $(elm);
        		$('<!-- ko allowBindings: false -->').insertBefore($elm);
        		$('<!-- /ko -->').insertAfter($elm);
        	});
        
        	//Add hr before the settings icon
        	$('<li class="divider"></li>').insertBefore("#navbar_settings");
        	$('<li class="divider" id="divider_systemmenu" style="display: none;"></li>').insertBefore("#navbar_systemmenu").attr("data-bind", $("#navbar_systemmenu").attr("data-bind"));
        
        	if ($("#touchui_text_nonlink_container").length > 0) {
        		$('<li class="divider"></li>').insertBefore($("#touchui_text_nonlink_container").parent());
        	}
        }
        
        TouchUI.prototype.DOM.move.connection = {
        	$container: null,
        	containerId: "connection_dialog",
        	$cloneContainer: $("#usersettings_dialog"),
        	$cloneModal: $("#connection_wrapper"),
        	cloneTo: "#all_touchui_settings > ul",
        
        	init: function( tabbar ) {
        		var text = this.$cloneModal.find(".accordion-heading").text().trim();
        
        		// Clone usersettings modal
        		this.$container = this.$cloneContainer.clone().attr("id", this.containerId).insertAfter(this.$cloneContainer);
        		this.$containerBody = this.$container.find(".modal-body");
        
        		// Remove all html from clone
        		this.$containerBody.html("");
        
        		// Append tab contents to modal
        		this.$cloneModal.appendTo(this.$containerBody);
        
        		// Set modal header to accordion header
        		this.$container.find(".modal-header h3").text(text);
        
        		// Create a link in the dropdown
        		this.$menuItem = tabbar.createItem("conn_link2", this.containerId, "modal", text)
        			.attr("data-bind", "visible: loginState.isAdmin")
        			.prependTo(this.cloneTo);
        	}
        }
        
        TouchUI.prototype.DOM.move.controls = {
        
        	init: function() {
        
        		if($('#control-jog-feedrate .input-append').length === 0) {
        			// <1.4.1
        			$("#control-jog-feedrate").insertBefore("#control-jog-extrusion");
        			$("#control-jog-extrusion button:last-child").prependTo("#control-jog-feedrate");
        			$("#control-jog-extrusion input:last-child").attr('data-bind', $("#control-jog-extrusion input:last-child").attr('data-bind').replace('slider: {', 'slider: {tools: tools(), ')).prependTo("#control-jog-feedrate");
        			$("#control-jog-extrusion .slider:last-child").prependTo("#control-jog-feedrate");
        		}
        
        		// Move Z-panel
        		$("#control-jog-general").insertAfter("#control-jog-z");
        
        		// Create panel
        		var $jog = $('<div/>').attr('id', 'control-jog-rate').insertBefore('#control-jog-extrusion');
        		$("#control div.distance").appendTo($jog);
        		$("#control-jog-feedrate").appendTo($jog);
        		$("#control-jog-flowrate").appendTo($jog);
        	}
        
        }
        
        TouchUI.prototype.DOM.move.navbar = {
        	mainItems: ['#all_touchui_settings', '#navbar_login', '.hidden_touch', '#touchui_auto_load_touch', '#touchui_auto_load_resolution'],
        	init: function() {
        
        		var $items = $("#navbar ul.nav > li:not("+this.DOM.move.navbar.mainItems+")");
        		var hasTextLinks = false;
        		$($items.get().reverse()).each(function(ind, elm) {
        			var $elm = $(elm);
        
        			if($elm.children('a').length > 0) {
        				var elme = $elm.children('a')[0];
        
        				$elm.prependTo(this.DOM.create.dropdown.container);
        
        				$.each(elme.childNodes, function(key, node) {
        					if(node.nodeName === "#text") {
        						node.nodeValue = node.nodeValue.trim();
        					}
        				});
        
        				if(!$(elme).text()) {
        					if(!$(elme).text()) {
        						$(elme).text($(elme).attr('title'));
        					}
        				}
        			} else {
        				if(!hasTextLinks) {
        					hasTextLinks = true;
        					$('<li><ul id="touchui_text_nonlink_container"></ul></li>').appendTo(this.DOM.create.dropdown.container);
        				}
        
        				$elm.appendTo("#touchui_text_nonlink_container");
        			}
        		}.bind(this));
        
        		$(document).on('click', function(elm) {
        			if($(elm.target).parents('#tabs').length > 0) {
        				$('#tabs .itemActive').removeClass('itemActive');
        				$(elm.target).addClass('itemActive');
        			}
        		});
        
        		$('[href="'+document.location.hash+'"]').addClass('itemActive');
        
        		// Move TouchUI to main dropdown
        		$("#navbar_plugin_touchui").insertAfter("#navbar_settings");
        
        		// Create and Move login form to main dropdown
        		$('<li><ul id="youcanhazlogin"></ul></li>').insertAfter("#navbar_plugin_touchui");
        
        		$('#navbar_login')
        			.appendTo('#youcanhazlogin')
        			.find('a.dropdown-toggle')
        			.text($('#youcanhazlogin').find('a.dropdown-toggle').text().trim())
        			.attr("data-bind", "visible: !loginState.loggedIn()");
        
        		// Create a fake dropdown link that will be overlapped by settings icon
        		$('<li id="touchui_dropdown_link"><a href="#"></a></li>').appendTo("#tabs");
        
        		// Move the navbar temp plugin
        		this.plugins.psuControl.call(this);
        	}
        
        }
        
        TouchUI.prototype.DOM.move.overlays = {
        
        	mainItems: ['#offline_overlay', '#reloadui_overlay', '#drop_overlay'],
        	init: function() {
        
        		$(this.DOM.move.overlays.mainItems).each(function(ind, elm) {
        			var $elm = $(elm);
        			$elm.appendTo('body');
        		}.bind(this));
        
        	}
        
        }
        
        TouchUI.prototype.DOM.move.sidebar = {
        
        	items: ".octoprint-container > .row > .accordion > div",
        
        	menu: {
        		cloneTo: "#tabs"
        	},
        
        	container: {
        		cloneTo: "#temp"
        	},
        
        	doNotMove: [
        		'#sidebar_plugin_printer_safety_check_wrapper',
        		'#connection_wrapper'
        	],
        
        	init: function() {
        		var tabbar = this.DOM.create.tabbar;
        		$(this.DOM.move.sidebar.items + ':not(' + this.DOM.move.sidebar.doNotMove + ')').each(function(ind, elm) {
        			var id = $(elm).attr('id');
        			
        			tabbar.createItem(id + "_link", id, "tab")
        				.appendTo(this.menu.cloneTo)
        				.find('[data-toggle="tab"]')
        				.text($(elm).find('.accordion-toggle').text().trim());
        
        			$('<div id="' + id + '" class="tab-pane touchui touchui-accordion"><div class="row-fluid"></div></div>')
        				.insertBefore(this.container.cloneTo)
        				.children().get(0)
        				.prepend(elm);
        
        		}.bind(this.DOM.move.sidebar));
        
        	}
        
        }
        
        TouchUI.prototype.DOM.move.tabbar = {
        	init: function(viewModels) {
        
        		var $items = $("#tabs > li:not(#print_link, #touchui_dropdown_link, .hidden_touch)");
        		$($items.get().reverse()).each(function(ind, elm) {
        			var $elm = $(elm);
        
        			// Clone the items into the dropdown, and make it click the orginal link
        			$elm
        				.clone()
        				.attr("id", $elm.attr("id")+"2")
        				.removeAttr('style')
        				.removeAttr('data-bind')
        				.prependTo(this.DOM.create.dropdown.container)
        				.find("a")
        				.off("click")
        				.on("click", function(e) {
        					$elm.find('a').click();
        					$("#all_touchui_settings").addClass("item_active");
        					e.preventDefault();
        					return false;
        				});
        
        			// $elm.addClass("hidden_touch");
        		}.bind(this));
        
        		$("#tabs > li > a").each(function(ind, elm) {
        			$(elm).text("");
        		});
        
        		var resize = function() {
        			var width = $('#print_link').width();
        			var winWidth = $(window).width();
        			var $items = $('#tabs > li:not("#touchui_dropdown_link")');
        			var itemsFit = Math.floor(winWidth / width) - 2;
        
        			// Loop over items; if they contain display: none; then do
        			// not show them in the dropdown menu and filter them out from items
        			$items = $items.filter(function(i, elm) {
        				if (($(elm).attr('style') || "").indexOf('none') !== -1) {
        					$('#' + $(elm).attr('id') + '2').addClass('hidden_touch');
        					return false;
        				}
        
        				return true;
        			});
        
        			if (winWidth > (width * 2)) {
        				$items.each(function(key, elm) {
        					if (key > itemsFit) {
        						$(elm).addClass('hidden_touch');
        						$('#' + $(elm).attr('id') + '2').removeClass('hidden_touch');
        					} else {
        						$(elm).removeClass('hidden_touch');
        						$('#' + $(elm).attr('id') + '2').addClass('hidden_touch');
        					}
        				});
        			}
        
        			// Sync width of dropdown link
        			$('#all_touchui_settings').width(width);
        		}
        
        		$(window).on('resize.touchui.tabbar', resize);
        		$(window).on('resize.touchui.tabbar', _.debounce(resize, 200));
        		$(window).on('resize.touchui.tabbar', _.debounce(resize, 600));
        
        		$(window).trigger('resize.touchui.tabbar');
        	}
        }
        
        TouchUI.prototype.DOM.move.terminal = {
        
        	init: function() {
        
        		// Add version number placeholder
        		$('<span></span>').prependTo("#terminal-output");
        
        		// Create iScroll container for terminal
        		var container = $('<div id="terminal-scroll"></div>').insertBefore("#terminal-output");
        		var inner = $('<div id="terminal-scroll-inner"></div>').appendTo(container);
        		$("#terminal-output").appendTo(inner);
        		$("#terminal-output-lowfi").appendTo(inner);
        
        	}
        
        };
        
        TouchUI.prototype.DOM.overwrite.modal = function() {
        
        	//We need a reliable event for catching new modals for attaching a scrolling bar
        	$.fn.modalBup = $.fn.modal;
        	$.fn.modal = function(options, args) {
        		// Update any other modifications made by others (i.e. OctoPrint itself)
        		$.fn.modalBup.defaults = $.fn.modal.defaults;
        
        		// Create modal, store into variable so we can trigger an event first before return
        		var tmp = $(this).modalBup(options, args);
        		if (options !== "hide") {
        			$(this).trigger("modal.touchui", this);
        		}
        		return tmp;
        	};
        	$.fn.modal.prototype = { constructor: $.fn.modal };
        	$.fn.modal.Constructor = $.fn.modal;
        	$.fn.modal.defaults = $.fn.modalBup.defaults;
        
        }
        
        TouchUI.prototype.DOM.overwrite.pnotify = function() {
        
        	if(!this.settings.hasTouch) {
        		var tmp = PNotify.prototype.options.stack;
        		tmp.context = $('#scroll .page-container');
        		PNotify.prototype.options.stack = tmp;
        	}
        
        }
        
        TouchUI.prototype.DOM.overwrite.tabbar = function() {
        
        	// Force the webcam tab to load the webcam feed that original is located on the controls tab
        	$('#tabs [data-toggle=tab]').each(function(ind, elm) {
        
        		var data_event = jQuery._data(elm, "events");
        		if (data_event && data_event.show) {
        
        			// Get the currently attached events to the toggle
        			var events = $.extend([], data_event.show),
        				$elm = $(elm);
        
        			// Remove all previous set events and call them after manipulating a few things
        			$elm.off("show").on("show", function(e) {
        				var scope = this,
        					current = e.target.hash,
        					previous = e.relatedTarget.hash;
        
        				current = (current === "#control") ? "#control_without_webcam" : current;
        				current = (current === "#webcam") ? "#control" : current;
        
        				previous = (previous === "#control") ? "#control_without_webcam" : previous;
        				previous = (previous === "#webcam") ? "#control" : previous;
        
        				// Call previous unset functions (e.g. let's trigger the event onTabChange in all the viewModels)
        				$.each(events, function(key, event) {
        					event.handler.call(scope, {
        						target: {
        							hash: current
        						},
        						relatedTarget: {
        							hash: previous
        						}
        					});
        				});
        			});
        		}
        
        	});
        
        }
        
        TouchUI.prototype.DOM.overwrite.tabdrop = function() {
        	$.fn.tabdrop = function() {};
        	$.fn.tabdrop.prototype = { constructor: $.fn.tabdrop };
        	$.fn.tabdrop.Constructor = $.fn.tabdrop;
        }
        
        ;
        
        // source: plugin/touchui/js/touchui.bootstrap.js
        !function(){if(TouchUI.prototype.settings.hasBootloader&&window.log&&window.log.error){var r=window.log.error;window.log.error=function(o,n){window.top.postMessage([n,""],"*"),r.apply(window.log,arguments)}}var o=new TouchUI;o.domLoading(),$(function(){o.domReady(),OCTOPRINT_VIEWMODELS.push([o.koStartup,o.TOUCHUI_REQUIRED_VIEWMODELS,o.TOUCHUI_ELEMENTS,o.TOUCHUI_REQUIRED_VIEWMODELS])})}();
        ;
        
    } catch (error) {
        log.error("Error in JS assets for plugin touchui:", (error.stack || error));
    }
})();
