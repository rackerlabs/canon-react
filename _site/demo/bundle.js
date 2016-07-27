(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":15}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":16}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":17}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":18}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":19}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":20}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":21}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":22}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
},{"../core-js/object/define-property":4}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":2}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":7,"../helpers/typeof":14}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":14}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj; }

exports.default = function (obj) {
  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":8}],15:[function(require,module,exports){
var core = require('../../modules/$.core');
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
};
},{"../../modules/$.core":26}],16:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/$.core').Object.assign;
},{"../../modules/$.core":26,"../../modules/es6.object.assign":54}],17:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":40}],18:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":40}],19:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/$.core').Object.getPrototypeOf;
},{"../../modules/$.core":26,"../../modules/es6.object.get-prototype-of":55}],20:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":26,"../../modules/es6.object.keys":56}],21:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":26,"../../modules/es6.object.set-prototype-of":57}],22:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":26,"../../modules/es6.object.to-string":58,"../../modules/es6.symbol":59}],23:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],24:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":39}],25:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],26:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],27:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":23}],28:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],29:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":32}],30:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":40}],31:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":26,"./$.ctx":27,"./$.global":34}],32:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],33:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":40,"./$.to-iobject":50}],34:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],35:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],36:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":40,"./$.descriptors":29,"./$.property-desc":45}],37:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":25}],38:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":25}],39:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],40:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],41:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":40,"./$.to-iobject":50}],42:[function(require,module,exports){
module.exports = true;
},{}],43:[function(require,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = require('./$')
  , toObject = require('./$.to-object')
  , IObject  = require('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = require('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":40,"./$.fails":32,"./$.iobject":37,"./$.to-object":51}],44:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./$.export')
  , core    = require('./$.core')
  , fails   = require('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":26,"./$.export":31,"./$.fails":32}],45:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],46:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":36}],47:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":40,"./$.an-object":24,"./$.ctx":27,"./$.is-object":39}],48:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":40,"./$.has":35,"./$.wks":53}],49:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":34}],50:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":28,"./$.iobject":37}],51:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":28}],52:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],53:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":34,"./$.shared":49,"./$.uid":52}],54:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./$.export');

$export($export.S + $export.F, 'Object', {assign: require('./$.object-assign')});
},{"./$.export":31,"./$.object-assign":43}],55:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('getPrototypeOf', function($getPrototypeOf){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./$.object-sap":44,"./$.to-object":51}],56:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":44,"./$.to-object":51}],57:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":31,"./$.set-proto":47}],58:[function(require,module,exports){

},{}],59:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":40,"./$.an-object":24,"./$.descriptors":29,"./$.enum-keys":30,"./$.export":31,"./$.fails":32,"./$.get-names":33,"./$.global":34,"./$.has":35,"./$.is-array":38,"./$.keyof":41,"./$.library":42,"./$.property-desc":45,"./$.redefine":46,"./$.set-to-string-tag":48,"./$.shared":49,"./$.to-iobject":50,"./$.uid":52,"./$.wks":53}],60:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],61:[function(require,module,exports){
/*! tether 1.2.0 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

function getScrollParent(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;

  if (position === 'fixed') {
    return el;
  }

  var parent = el;
  while (parent = parent.parentNode) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      return parent;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        return parent;
      }
    }
  }

  return document.body;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin(doc) {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = doc._tetherZeroElement;
  if (typeof node === 'undefined') {
    node = doc.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    doc.body.appendChild(node);

    doc._tetherZeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = {};

    var rect = node.getBoundingClientRect();
    for (var k in rect) {
      // Can't use extend, as on IE9, elements don't resolve to be hasOwnProperty
      zeroPosCache[id][k] = rect[k];
    }

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = {};
  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = el.getBoundingClientRect();
  for (var k in rect) {
    box[k] = rect[k];
  }

  var origin = getOrigin(doc);

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

function getScrollBarSize() {
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  return { width: width, height: width };
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  if (el.className instanceof SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings !== 'undefined' && typeof this.bindings[event] !== 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getScrollParent: getScrollParent,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParent = _TetherBase$Utils.getScrollParent;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (typeof pendingTimeout !== 'undefined') {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function () {
  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParent !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParent = this.target;
      } else {
        this.scrollParent = getScrollParent(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      if (this.scrollParent !== document) {
        this.scrollParent.addEventListener('scroll', this.position);
      }

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParent !== 'undefined') {
        this.scrollParent.removeEventListener('scroll', this.position);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this3) {
          tethers.splice(i, 1);
          return;
        }
      });
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this4 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this4.getClass('element-attached') + '-' + side);
        all.push(_this4.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this4._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this4.element, _this4._addAttachClasses, all);
        if (!(_this4.options.addTargetClasses === false)) {
          updateClasses(_this4.target, _this4._addAttachClasses, all);
        }

        delete _this4._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this5 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this5.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this5.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var scrollbarSize = undefined;
      if (document.body.scrollWidth > window.innerWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (document.body.scrollHeight > window.innerHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(document.body.style.position) === -1 || ['', 'static'].indexOf(document.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = document.body.scrollHeight - top - height;
        next.page.right = document.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this5.cache('target-offsetparent', function () {
            return getOffsetParent(_this5.target);
          });
          var offsetPosition = _this5.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this6 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this6.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this6.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this6.cache('target-offsetparent', function () {
            return getOffsetParent(_this6.target);
          });

          if (getOffsetParent(_this6.element) !== offsetParent) {
            defer(function () {
              _this6.element.parentNode.removeChild(_this6.element);
              offsetParent.appendChild(_this6.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        var offsetParentIsBody = true;
        var currentNode = this.element.parentNode;
        while (currentNode && currentNode.tagName !== 'BODY') {
          if (getComputedStyle(currentNode).position !== 'static') {
            offsetParentIsBody = false;
            break;
          }

          currentNode = currentNode.parentNode;
        }

        if (!offsetParentIsBody) {
          this.element.parentNode.removeChild(this.element);
          document.body.appendChild(this.element);
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== '' && val !== '' && ['top', 'left', 'bottom', 'right'].indexOf(key) >= 0) {
          elVal = parseFloat(elVal);
          val = parseFloat(val);
        }

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this6.element.style, writeCSS);
        });
      }
    }
  }]);

  return TetherClass;
})();

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParent;
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom') {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top') {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top -= height;
            eAttachment.top = 'bottom';
          }
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top') {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom') {
            top -= targetHeight;
            tAttachment.top = 'top';

            top += height;
            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));

},{}],62:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUTTON_TYPES = {
  'action': 'rs-btn rs-btn-action',
  'primary': 'rs-btn rs-btn-primary',
  'link': 'rs-btn rs-btn-link',
  'login': 'rs-btn rs-btn-login',
  'secondary': 'rs-btn',
  'cog': 'rs-cog',
  'delete': 'rs-delete',
  'edit': 'rs-edit',
  'plus': 'rs-plus'
};

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var classes = void 0;

      classes = (0, _classnames2.default)(this.props.className, { 'disabled': !this.props.enabled }, BUTTON_TYPES[this.props.canonStyle], { 'rs-hidden': this.props.hidden });

      if (this.props.canonStyle === 'action') {
        return _react2.default.createElement(
          'button',
          (0, _extends3.default)({}, this.props, { className: classes, onClick: this._handleClick.bind(this) }),
          _react2.default.createElement('span', { className: 'rs-cog' }),
          ' ',
          this.props.children,
          ' ',
          _react2.default.createElement('span', { className: 'rs-caret' })
        );
      }

      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({}, this.props, { className: classes, onClick: this._handleClick.bind(this) }),
        this.props.children
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      if (this.props.enabled) {
        this.props.onClick(e);
        return e;
      }
      e.preventDefault();
    }
  }]);
  return Button;
}(_react2.default.Component);

Button.propTypes = {
  enabled: _react2.default.PropTypes.bool,
  onClick: _react2.default.PropTypes.func,
  canonStyle: _react2.default.PropTypes.oneOf(['action', 'primary', 'link', 'login', 'secondary', 'cog', 'delete', 'edit', 'plus']),
  hidden: _react2.default.PropTypes.bool,
  type: _react2.default.PropTypes.string
};

Button.defaultProps = {
  enabled: true,
  canonStyle: 'secondary',
  hidden: false
};

exports.default = Button;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],63:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function (_React$Component) {
  (0, _inherits3.default)(ButtonGroup, _React$Component);

  function ButtonGroup() {
    (0, _classCallCheck3.default)(this, ButtonGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var classes = void 0;

      classes = (0, _classnames2.default)('rs-btn-group', this.props.className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, { className: classes }),
        this.props.children
      );
    }
  }]);
  return ButtonGroup;
}(_react2.default.Component);

exports.default = ButtonGroup;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],64:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Criteria = function (_React$Component) {
  (0, _inherits3.default)(Criteria, _React$Component);

  function Criteria() {
    (0, _classCallCheck3.default)(this, Criteria);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Criteria).apply(this, arguments));
  }

  (0, _createClass3.default)(Criteria, [{
    key: 'render',
    value: function render() {
      var countText = void 0,
          itemClasses = void 0;

      if (this.props.count !== undefined) {
        countText = '(' + this.props.count + ')';
      }

      itemClasses = (0, _classnames2.default)('rs-facet-item', { 'selected': this.props.isSelected }, { 'disabled': this.props.disabled }, { 'rs-hidden': this.props.hidden });

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'li',
          { className: itemClasses, onClick: this._handleSelectionChange.bind(this), title: this.props.label },
          _react2.default.createElement('span', { className: this.props.iconClass }),
          _react2.default.createElement(
            'div',
            { className: 'rs-facet-label' },
            this.props.label
          ),
          _react2.default.createElement(
            'div',
            { className: 'rs-facet-count' },
            countText
          )
        )
      );
    }
  }, {
    key: '_handleSelectionChange',
    value: function _handleSelectionChange() {
      if (!this.props.disabled && this.props.onSelectionChanged) {
        this.props.onSelectionChanged(!this.props.isSelected, this.props.id);
      }
    }
  }]);
  return Criteria;
}(_react2.default.Component);

Criteria.propTypes = {
  label: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  count: _react2.default.PropTypes.number,
  iconClass: _react2.default.PropTypes.string,
  isSelected: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  hidden: _react2.default.PropTypes.bool,
  onSelectionChanged: _react2.default.PropTypes.func
};

exports.default = Criteria;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],65:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoActionMenu = function (_React$Component) {
  (0, _inherits3.default)(DemoActionMenu, _React$Component);

  function DemoActionMenu() {
    (0, _classCallCheck3.default)(this, DemoActionMenu);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoActionMenu).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoActionMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Dropdown2.default,
        (0, _extends3.default)({}, this.props, { type: 'action' }),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'category' },
          'Identify'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Rename Server...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Tag Server...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'category' },
          'Image'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Create Image...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Schedule Daily Image...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'category' },
          'Recover'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Rebuild From Image...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link', enabled: false },
          'Enter Rescue Mode...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'category' },
          'Manage'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Connect Via Terminal...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Reboot Server...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Resize Server...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link', enabled: false },
          'Change Password...'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Delete Server...'
        )
      );
    }
  }]);
  return DemoActionMenu;
}(_react2.default.Component);

exports.default = DemoActionMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Dropdown":79,"./DropdownItem":80,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],66:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ProcessingIndicator = require('./ProcessingIndicator');

var _ProcessingIndicator2 = _interopRequireDefault(_ProcessingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoButtonGroupSection = function (_React$Component) {
  (0, _inherits3.default)(DemoButtonGroupSection, _React$Component);

  function DemoButtonGroupSection() {
    (0, _classCallCheck3.default)(this, DemoButtonGroupSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoButtonGroupSection).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoButtonGroupSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Button Group'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            _ButtonGroup2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'primary', enabled: true },
              'Primary'
            ),
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'secondary', enabled: true },
              'Secondary'
            ),
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'link', enabled: true },
              'Cancel'
            ),
            _react2.default.createElement(_ProcessingIndicator2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            'h3',
            null,
            'Submitting State'
          ),
          _react2.default.createElement(
            _ButtonGroup2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'primary', enabled: false },
              'Primary'
            ),
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'secondary', enabled: false },
              'Secondary'
            ),
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'link', enabled: false, hidden: true },
              'Cancel'
            ),
            _react2.default.createElement(_ProcessingIndicator2.default, { hidden: false })
          )
        )
      );
    }
  }]);
  return DemoButtonGroupSection;
}(_react2.default.Component);

exports.default = DemoButtonGroupSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button":62,"./ButtonGroup":63,"./ProcessingIndicator":90,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],67:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoButtonSection = function (_React$Component) {
  (0, _inherits3.default)(DemoButtonSection, _React$Component);

  function DemoButtonSection() {
    (0, _classCallCheck3.default)(this, DemoButtonSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoButtonSection).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoButtonSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Buttons'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Button'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Type'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Source'
                )
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'primary' },
                    'Primary'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Primary'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='primary'>Primary</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'secondary' },
                    'Secondary'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Secondary'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='secondary'>Secondary</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'login' },
                    'Login'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Login'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='login'>Login</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'link' },
                    'Cancel'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Link'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='link'>Cancel</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'delete' },
                    'Delete'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Delete'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='delete'>Delete</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'edit' },
                    'Edit'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Edit'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='edit'>Edit</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'plus' },
                    'Plus'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Plus'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='plus'>Plus</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'action' },
                    'Actions'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Action'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='action'>Actions</Button>"
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            'h3',
            null,
            'Disabled Buttons'
          ),
          _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Button'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Type'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Source'
                )
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'primary', enabled: false },
                    'Primary'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Primary'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='primary' enabled={false}>Primary</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'secondary', enabled: false },
                    'Secondary'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Secondary'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='secondary' enabled={false}>Secondary</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'login', enabled: false },
                    'Login'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Login'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='login' enabled={false}>Login</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'link', enabled: false },
                    'Cancel'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Link'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='link' enabled={false}>Cancel</Button>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { canonStyle: 'edit', enabled: false },
                    'Edit'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Edit'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<Button canonStyle='edit' enabled={false}>Edit</Button>"
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return DemoButtonSection;
}(_react2.default.Component);

exports.default = DemoButtonSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button":62,"./ButtonGroup":63,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],68:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _DemoActionMenu = require('./DemoActionMenu');

var _DemoActionMenu2 = _interopRequireDefault(_DemoActionMenu);

var _DemoPrimaryDropdown = require('./DemoPrimaryDropdown');

var _DemoPrimaryDropdown2 = _interopRequireDefault(_DemoPrimaryDropdown);

var _DemoUtilityDropdown = require('./DemoUtilityDropdown');

var _DemoUtilityDropdown2 = _interopRequireDefault(_DemoUtilityDropdown);

var _DropdownTrigger = require('./DropdownTrigger');

var _DropdownTrigger2 = _interopRequireDefault(_DropdownTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoDropdownSection = function (_React$Component) {
  (0, _inherits3.default)(DemoDropdownSection, _React$Component);

  function DemoDropdownSection() {
    (0, _classCallCheck3.default)(this, DemoDropdownSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoDropdownSection).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoDropdownSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Dropdowns'
          ),
          _react2.default.createElement(
            'div',
            null,
            'The buttons on the left demonstrate the default alignment value of \'left\', whereas the \'Action\' button on the right demonstrates and alignment value of \'right\'.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            _ButtonGroup2.default,
            null,
            _react2.default.createElement(
              _DropdownTrigger2.default,
              { dropdown: _react2.default.createElement(_DemoPrimaryDropdown2.default, null) },
              _react2.default.createElement(
                _Button2.default,
                null,
                'Primary Dropdown'
              )
            ),
            _react2.default.createElement(
              _DropdownTrigger2.default,
              { dropdown: _react2.default.createElement(_DemoUtilityDropdown2.default, null) },
              _react2.default.createElement(
                _Button2.default,
                null,
                'Utility Dropdown'
              )
            ),
            _react2.default.createElement(
              _DropdownTrigger2.default,
              { dropdown: _react2.default.createElement(_DemoActionMenu2.default, null), alignment: 'right' },
              _react2.default.createElement(
                'div',
                { style: { float: 'right' } },
                _react2.default.createElement(
                  _Button2.default,
                  { canonStyle: 'action' },
                  'Actions'
                )
              )
            ),
            _react2.default.createElement(
              _DropdownTrigger2.default,
              { dropdown: _react2.default.createElement(_DemoActionMenu2.default, null) },
              _react2.default.createElement('div', { className: 'rs-cog rs-dropdown-toggle' })
            )
          )
        )
      );
    }
  }]);
  return DemoDropdownSection;
}(_react2.default.Component);

exports.default = DemoDropdownSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button":62,"./ButtonGroup":63,"./DemoActionMenu":65,"./DemoPrimaryDropdown":72,"./DemoUtilityDropdown":76,"./DropdownTrigger":81,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],69:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Criteria = require('./Criteria');

var _Criteria2 = _interopRequireDefault(_Criteria);

var _Facet = require('./Facet');

var _Facet2 = _interopRequireDefault(_Facet);

var _FacetsSection = require('./FacetsSection');

var _FacetsSection2 = _interopRequireDefault(_FacetsSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoFacetsSection = function (_React$Component) {
  (0, _inherits3.default)(DemoFacetsSection, _React$Component);

  function DemoFacetsSection(props) {
    (0, _classCallCheck3.default)(this, DemoFacetsSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoFacetsSection).call(this, props));

    _this.state = {
      selectedCriteria: {}
    };
    return _this;
  }

  (0, _createClass3.default)(DemoFacetsSection, [{
    key: 'render',
    value: function render() {
      var style = void 0;

      style = { maxWidth: '270px' };
      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Facets'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body', style: style },
          _react2.default.createElement(
            _FacetsSection2.default,
            {
              sectionHeader: "Filter Products",
              selectedCriteria: this.state.selectedCriteria,
              onSelectionChanged: this._handleSelectionChanged.bind(this) },
            _react2.default.createElement(
              _Facet2.default,
              { label: 'Tags', id: 'Tags' },
              _react2.default.createElement(_Criteria2.default, { label: 'No Count', id: 'No-Count' }),
              _react2.default.createElement(_Criteria2.default, { label: 'Zero Count', id: 'Zero Count', count: 0 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Disabled', id: 'Disabled', count: 0, disabled: true }),
              _react2.default.createElement(_Criteria2.default, { label: 'Development', id: 'Development', count: 3 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Staging', id: 'Staging', count: 1 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Production', id: 'Production', count: 1 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Billing', id: 'Billing', count: 3 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Marketing', id: 'Marketing', count: 2 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Product', id: 'Product', count: 8 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Engineering', id: 'Engineering', count: 2 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Sales', id: 'Sales', count: 1 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Finance', id: 'Finance', count: 1 })
            ),
            _react2.default.createElement(
              _Facet2.default,
              { label: 'Status', id: 'Status' },
              _react2.default.createElement(_Criteria2.default, { label: 'Error', id: 'Error', count: 2, iconClass: 'rs-status-error' }),
              _react2.default.createElement(_Criteria2.default, { label: 'Rebooting', id: 'Rebooting', count: 3, iconClass: 'rs-status-warning' }),
              _react2.default.createElement(_Criteria2.default, { label: 'Active', id: 'Active', count: 5, iconClass: 'rs-status-ok' })
            ),
            _react2.default.createElement(
              _Facet2.default,
              { label: 'Image', id: 'Image' },
              _react2.default.createElement(_Criteria2.default, { label: 'Ubuntu', id: 'Ubuntu', count: 3 }),
              _react2.default.createElement(_Criteria2.default, { label: 'RHEL 6.4', id: 'rhel6.4', count: 1 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Debian 7 Wheezy', id: 'Debian7Wheezy', count: 2 }),
              _react2.default.createElement(_Criteria2.default, { label: 'Vyatta Network OS 6.5R2', id: 'VyattaNetworkOS-6.5R2', count: 4 })
            ),
            _react2.default.createElement(
              _Facet2.default,
              { label: 'Flavor', id: 'Flavor' },
              _react2.default.createElement(_Criteria2.default, { label: '2 GB Standard Instance', id: '2 GB Standard Instance', count: 10 }),
              _react2.default.createElement(_Criteria2.default, { label: '512 MB Standard Instance', id: '512 MB Standard Instance', count: 10 })
            )
          )
        )
      );
    }
  }, {
    key: '_handleSelectionChanged',
    value: function _handleSelectionChanged(selectedCriteria) {
      this.setState({ selectedCriteria: selectedCriteria });
    }
  }]);
  return DemoFacetsSection;
}(_react2.default.Component);

exports.default = DemoFacetsSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Criteria":64,"./Facet":82,"./FacetsSection":84,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],70:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Popover = require('./Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverOverlay = require('./PopoverOverlay');

var _PopoverOverlay2 = _interopRequireDefault(_PopoverOverlay);

var _PopoverBody = require('./PopoverBody');

var _PopoverBody2 = _interopRequireDefault(_PopoverBody);

var _PopoverFooter = require('./PopoverFooter');

var _PopoverFooter2 = _interopRequireDefault(_PopoverFooter);

var _ProcessingIndicator = require('./ProcessingIndicator');

var _ProcessingIndicator2 = _interopRequireDefault(_ProcessingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoPopover = function (_React$Component) {
  (0, _inherits3.default)(DemoPopover, _React$Component);

  function DemoPopover() {
    (0, _classCallCheck3.default)(this, DemoPopover);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoPopover).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoPopover, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Popover2.default,
        { placement: this.props.placement, isOpen: this.props.isOpen, onRequestClose: this.props.onRequestClose, target: this.props.target, isModal: this.props.isModal },
        _react2.default.createElement(
          _PopoverOverlay2.default,
          null,
          _react2.default.createElement(
            _PopoverBody2.default,
            null,
            _react2.default.createElement(
              'form',
              { className: 'rs-form-horizontal rs-form-medium' },
              _react2.default.createElement(
                'div',
                { className: 'rs-control-group' },
                _react2.default.createElement(
                  'label',
                  { className: 'rs-control-label' },
                  'Field 1'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'rs-controls' },
                  _react2.default.createElement('input', { autoFocus: true, type: 'text' })
                )
              )
            )
          ),
          _react2.default.createElement(
            _PopoverFooter2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'primary', onClick: this.props.onRequestClose },
              'Save'
            ),
            _react2.default.createElement(
              _Button2.default,
              { canonStyle: 'link', onClick: this.props.onRequestClose },
              'Cancel'
            ),
            _react2.default.createElement(_ProcessingIndicator2.default, { hidden: true })
          )
        )
      );
    }
  }]);
  return DemoPopover;
}(_react2.default.Component);

DemoPopover.propTypes = {
  isOpen: _react2.default.PropTypes.bool,
  onRequestClose: _react2.default.PropTypes.func
};

exports.default = DemoPopover;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button":62,"./Popover":85,"./PopoverBody":87,"./PopoverFooter":88,"./PopoverOverlay":89,"./ProcessingIndicator":90,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],71:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DemoPopover = require('./DemoPopover');

var _DemoPopover2 = _interopRequireDefault(_DemoPopover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoPopoverSection = function (_React$Component) {
  (0, _inherits3.default)(DemoPopoverSection, _React$Component);

  function DemoPopoverSection(props) {
    (0, _classCallCheck3.default)(this, DemoPopoverSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoPopoverSection).call(this, props));

    _this.state = {
      rightPopoverOpen: false,
      leftPopoverOpen: false,
      bottomRightPopoverOpen: false,
      bottomLeftPopoverOpen: false,
      bottomRightFunctionPopoverOpen: false,
      bottomLeftModalPopoverOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(DemoPopoverSection, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Popovers'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { id: 'right-button-id', onClick: function onClick() {
                        _this2.setState({ rightPopoverOpen: true });
                      } },
                    'Right'
                  ),
                  _react2.default.createElement(_DemoPopover2.default, {
                    placement: 'right',
                    target: 'right-button-id',
                    isOpen: this.state.rightPopoverOpen,
                    onRequestClose: function onRequestClose() {
                      _this2.setState({ rightPopoverOpen: false });
                    } })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { id: 'left-button-id', onClick: function onClick() {
                        _this2.setState({ leftPopoverOpen: true });
                      } },
                    'Left'
                  ),
                  _react2.default.createElement(_DemoPopover2.default, {
                    placement: 'left',
                    target: 'left-button-id',
                    isOpen: this.state.leftPopoverOpen,
                    onRequestClose: function onRequestClose() {
                      _this2.setState({ leftPopoverOpen: false });
                    } })
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { id: 'bottom-right-button-id', onClick: function onClick() {
                        _this2.setState({ bottomRightPopoverOpen: true });
                      } },
                    'Bottom Right'
                  ),
                  _react2.default.createElement(_DemoPopover2.default, {
                    placement: 'bottom-right',
                    target: 'bottom-right-button-id',
                    isOpen: this.state.bottomRightPopoverOpen,
                    onRequestClose: function onRequestClose() {
                      _this2.setState({ bottomRightPopoverOpen: false });
                    } })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { id: 'bottom-left-button-id', ref: 'bottomLeftButton', onClick: function onClick() {
                        _this2.setState({ bottomLeftPopoverOpen: true });
                      } },
                    'Bottom Left'
                  ),
                  _react2.default.createElement(_DemoPopover2.default, {
                    placement: 'bottom-left',
                    target: function target() {
                      return _reactDom2.default.findDOMNode(_this2.refs.bottomLeftButton);
                    },
                    isOpen: this.state.bottomLeftPopoverOpen,
                    onRequestClose: function onRequestClose() {
                      _this2.setState({ bottomLeftPopoverOpen: false });
                    } })
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { id: 'bottom-right-function-button-id', onClick: function onClick() {
                        _this2.setState({ bottomRightFunctionPopoverOpen: true });
                      } },
                    'Bottom Right Function'
                  ),
                  _react2.default.createElement(_DemoPopover2.default, {
                    placement: 'bottom-right',
                    target: function target() {
                      return document.getElementById('bottom-right-function-button-id');
                    },
                    isOpen: this.state.bottomRightFunctionPopoverOpen,
                    onRequestClose: function onRequestClose() {
                      _this2.setState({ bottomRightFunctionPopoverOpen: false });
                    } })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _Button2.default,
                    { id: 'bottom-left-modal-button-id', onClick: function onClick() {
                        _this2.setState({ bottomLeftModalPopoverOpen: true });
                      } },
                    'Modal'
                  ),
                  _react2.default.createElement(_DemoPopover2.default, {
                    placement: 'center',
                    target: function target() {
                      return document.body;
                    },
                    isOpen: this.state.bottomLeftModalPopoverOpen,
                    isModal: true,
                    onRequestClose: function onRequestClose() {
                      _this2.setState({ bottomLeftModalPopoverOpen: false });
                    } })
                )
              )
            )
          )
        )
      );
    }
  }]);
  return DemoPopoverSection;
}(_react2.default.Component);

exports.default = DemoPopoverSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button":62,"./DemoPopover":70,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],72:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoPrimaryDropdown = function (_React$Component) {
  (0, _inherits3.default)(DemoPrimaryDropdown, _React$Component);

  function DemoPrimaryDropdown() {
    (0, _classCallCheck3.default)(this, DemoPrimaryDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoPrimaryDropdown).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoPrimaryDropdown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Dropdown2.default,
        (0, _extends3.default)({}, this.props, { type: 'primary' }),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'category' },
          'Infrastructure'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Servers'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Load Balancers'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'DNS'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'category' },
          'Automation'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link', enabled: false },
          'Deployments'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Autoscaling'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'category' },
          'Developer Tools'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Queues'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Mailgun ',
          _react2.default.createElement('i', { className: 'rs-icon-external' })
        )
      );
    }
  }]);
  return DemoPrimaryDropdown;
}(_react2.default.Component);

exports.default = DemoPrimaryDropdown;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Dropdown":79,"./DropdownItem":80,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],73:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoProgressBarSection = function (_React$Component) {
  (0, _inherits3.default)(DemoProgressBarSection, _React$Component);

  function DemoProgressBarSection() {
    (0, _classCallCheck3.default)(this, DemoProgressBarSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoProgressBarSection).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoProgressBarSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Progress Bars'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, type: 'solid', status: 'ok' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 75, type: 'striped', status: 'ok' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, type: 'solid', status: 'warning' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 75, type: 'striped', status: 'warning' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, type: 'solid', status: 'error' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 75, type: 'striped', status: 'error' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, type: 'solid', status: 'info' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 75, type: 'striped', status: 'info' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            'h3',
            null,
            'Fixed Width'
          ),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, size: 'xsmall' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, size: 'small' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, size: 'medium' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, size: 'large' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(_ProgressBar2.default, { progress: 25, size: 'xlarge' })
        )
      );
    }
  }]);
  return DemoProgressBarSection;
}(_react2.default.Component);

exports.default = DemoProgressBarSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ProgressBar":91,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],74:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _StatusIndicator = require('./StatusIndicator');

var _StatusIndicator2 = _interopRequireDefault(_StatusIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoStatusIndicatorSection = function (_React$Component) {
  (0, _inherits3.default)(DemoStatusIndicatorSection, _React$Component);

  function DemoStatusIndicatorSection() {
    (0, _classCallCheck3.default)(this, DemoStatusIndicatorSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoStatusIndicatorSection).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoStatusIndicatorSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Status Indicators'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Status Indicator'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Type'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Source'
                )
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _StatusIndicator2.default,
                    { status: 'ok' },
                    'Active'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Ok'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<StatusIndicator status='ok'>Active</StatusIndicator>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _StatusIndicator2.default,
                    { status: 'processing' },
                    'Building'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Processing'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<StatusIndicator status='processing'>Building</StatusIndicator>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _StatusIndicator2.default,
                    { status: 'warning' },
                    'Warning'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Warning'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<StatusIndicator status='warning'>Warning</StatusIndicator>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _StatusIndicator2.default,
                    { status: 'error' },
                    'Error'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Error'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<StatusIndicator status='error'>Warning</StatusIndicator>"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _StatusIndicator2.default,
                    { status: 'disabled' },
                    'Disabled'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  'Disabled'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'pre',
                    null,
                    _react2.default.createElement(
                      'code',
                      null,
                      "<StatusIndicator status='disabled'>Disabled</StatusIndicator>"
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return DemoStatusIndicatorSection;
}(_react2.default.Component);

exports.default = DemoStatusIndicatorSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./StatusIndicator":92,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],75:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _TooltipTrigger = require('./TooltipTrigger');

var _TooltipTrigger2 = _interopRequireDefault(_TooltipTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoTooltipSection = function (_React$Component) {
  (0, _inherits3.default)(DemoTooltipSection, _React$Component);

  function DemoTooltipSection() {
    (0, _classCallCheck3.default)(this, DemoTooltipSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoTooltipSection).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoTooltipSection, [{
    key: 'render',
    value: function render() {
      var tooltipContent = _react2.default.createElement(
        'span',
        null,
        'This is a tooltip'
      );
      return _react2.default.createElement(
        'div',
        { className: 'rs-detail-section' },
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-header' },
          _react2.default.createElement(
            'h2',
            null,
            'Tooltips'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-detail-section-body' },
          _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'bottom-right', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Bottom Right'
                    )
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'bottom-left', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Bottom Left'
                    )
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'top', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Top'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'top-right', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Top Right'
                    )
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'top-left', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Top Left'
                    )
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'bottom', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Bottom'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'right', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Right'
                    )
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { placement: 'left', content: tooltipContent },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Left'
                    )
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _TooltipTrigger2.default,
                    { content: tooltipContent },
                    _react2.default.createElement(
                      'button',
                      null,
                      'Focus'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return DemoTooltipSection;
}(_react2.default.Component);

exports.default = DemoTooltipSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Button":62,"./TooltipTrigger":93,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],76:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoUtilityDropdown = function (_React$Component) {
  (0, _inherits3.default)(DemoUtilityDropdown, _React$Component);

  function DemoUtilityDropdown() {
    (0, _classCallCheck3.default)(this, DemoUtilityDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoUtilityDropdown).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoUtilityDropdown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Dropdown2.default,
        (0, _extends3.default)({}, this.props, { type: 'utility' }),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'text' },
          'Account# 1234567'
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Billing'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Usage'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link', enabled: false },
          'User Management'
        ),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Settings'
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _DropdownItem2.default,
          { type: 'link' },
          'Logout'
        )
      );
    }
  }]);
  return DemoUtilityDropdown;
}(_react2.default.Component);

exports.default = DemoUtilityDropdown;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./Divider":78,"./Dropdown":79,"./DropdownItem":80,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],77:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _DemoButtonSection = require('./DemoButtonSection');

var _DemoButtonSection2 = _interopRequireDefault(_DemoButtonSection);

var _DemoButtonGroupSection = require('./DemoButtonGroupSection');

var _DemoButtonGroupSection2 = _interopRequireDefault(_DemoButtonGroupSection);

var _DemoPopoverSection = require('./DemoPopoverSection');

var _DemoPopoverSection2 = _interopRequireDefault(_DemoPopoverSection);

var _DemoProgressBarSection = require('./DemoProgressBarSection');

var _DemoProgressBarSection2 = _interopRequireDefault(_DemoProgressBarSection);

var _DemoStatusIndicatorSection = require('./DemoStatusIndicatorSection');

var _DemoStatusIndicatorSection2 = _interopRequireDefault(_DemoStatusIndicatorSection);

var _DemoTooltipSection = require('./DemoTooltipSection');

var _DemoTooltipSection2 = _interopRequireDefault(_DemoTooltipSection);

var _DemoDropdownSection = require('./DemoDropdownSection');

var _DemoDropdownSection2 = _interopRequireDefault(_DemoDropdownSection);

var _DemoFacetsSection = require('./DemoFacetsSection');

var _DemoFacetsSection2 = _interopRequireDefault(_DemoFacetsSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoView = function (_React$Component) {
  (0, _inherits3.default)(DemoView, _React$Component);

  function DemoView() {
    (0, _classCallCheck3.default)(this, DemoView);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DemoView).apply(this, arguments));
  }

  (0, _createClass3.default)(DemoView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DemoButtonSection2.default, null),
        _react2.default.createElement(_DemoButtonGroupSection2.default, null),
        _react2.default.createElement(_DemoProgressBarSection2.default, null),
        _react2.default.createElement(_DemoStatusIndicatorSection2.default, null),
        _react2.default.createElement(_DemoPopoverSection2.default, null),
        _react2.default.createElement(_DemoTooltipSection2.default, null),
        _react2.default.createElement(_DemoDropdownSection2.default, null),
        _react2.default.createElement(_DemoFacetsSection2.default, null)
      );
    }
  }]);
  return DemoView;
}(_react2.default.Component);

exports.default = DemoView;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./DemoButtonGroupSection":66,"./DemoButtonSection":67,"./DemoDropdownSection":68,"./DemoFacetsSection":69,"./DemoPopoverSection":71,"./DemoProgressBarSection":73,"./DemoStatusIndicatorSection":74,"./DemoTooltipSection":75,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],78:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function (_React$Component) {
  (0, _inherits3.default)(Divider, _React$Component);

  function Divider() {
    (0, _classCallCheck3.default)(this, Divider);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Divider).apply(this, arguments));
  }

  (0, _createClass3.default)(Divider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('li', { className: 'rs-divider' });
    }
  }]);
  return Divider;
}(_react2.default.Component);

exports.default = Divider;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],79:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DROPDOWN_TYPES = {
  'primary': 'rs-nav-item rs-dropdown rs-primary-dropdown',
  'utility': 'rs-nav-item rs-dropdown rs-utility-dropdown',
  'action': 'rs-dropdown'
};

var Dropdown = function (_React$Component) {
  (0, _inherits3.default)(Dropdown, _React$Component);

  function Dropdown() {
    (0, _classCallCheck3.default)(this, Dropdown);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Dropdown).apply(this, arguments));
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var dropdownStyle = void 0,
          menuStyle = void 0,
          classes = void 0;

      dropdownStyle = { float: 'left' };

      if (this.props.alignment) {
        menuStyle = { position: 'static' };
      }

      classes = (0, _classnames2.default)(this.props.className, DROPDOWN_TYPES[this.props.type]);

      return _react2.default.createElement(
        'div',
        { className: classes, style: dropdownStyle },
        _react2.default.createElement(
          'ul',
          { className: 'rs-dropdown-menu visible', style: menuStyle },
          this._children()
        )
      );
    }
  }, {
    key: '_children',
    value: function _children() {
      var _this2 = this;

      return _react2.default.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, { hideCallback: _this2.props.hideCallback });
      });
    }
  }]);
  return Dropdown;
}(_react2.default.Component);

Dropdown.defaultProps = {
  type: 'action',
  alignment: 'left'
};

Dropdown.propTypes = {
  type: _react2.default.PropTypes.oneOf(['primary', 'utility', 'action']),
  alignment: _react2.default.PropTypes.oneOf(['left', 'right']),
  hideCallback: _react2.default.PropTypes.func.isRequired
};

exports.default = Dropdown;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],80:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownItem = function (_React$Component) {
  (0, _inherits3.default)(DropdownItem, _React$Component);

  function DropdownItem() {
    (0, _classCallCheck3.default)(this, DropdownItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropdownItem).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownItem, [{
    key: 'render',
    value: function render() {
      var itemClasses = void 0;

      itemClasses = (0, _classnames2.default)('rs-dropdown-item', this.props.className, { 'disabled': !this.props.enabled });

      return _react2.default.createElement(
        'li',
        (0, _extends3.default)({}, this.props, { className: itemClasses, onClick: this._handleClick.bind(this) }),
        this._innerElement()
      );
    }
  }, {
    key: '_innerElement',
    value: function _innerElement() {
      var innerElement = void 0;

      switch (this.props.type) {
        case 'link':
          innerElement = _react2.default.createElement(
            'a',
            { className: 'rs-dropdown-link' },
            this.props.children
          );
          break;
        case 'category':
          innerElement = _react2.default.createElement(
            'span',
            { className: 'rs-dropdown-category' },
            this.props.children
          );
          break;
        case 'text':
          innerElement = _react2.default.createElement(
            'span',
            { className: 'rs-dropdown-text' },
            this.props.children
          );
          break;
      }

      return innerElement;
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      if (this.props.enabled) {
        this.props.onClick(e);
        this.props.hideCallback();
        return e;
      }
      e.preventDefault();
    }
  }]);
  return DropdownItem;
}(_react2.default.Component);

DropdownItem.defaultProps = {
  enabled: true,
  onClick: function onClick() {},
  hideCallback: function hideCallback() {},
  type: 'link'
};

DropdownItem.propTypes = {
  enabled: _react2.default.PropTypes.bool,
  onClick: _react2.default.PropTypes.func,
  hideCallback: _react2.default.PropTypes.func,
  type: _react2.default.PropTypes.oneOf(['link', 'category', 'text'])
};

exports.default = DropdownItem;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],81:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownTrigger = function (_React$Component) {
  (0, _inherits3.default)(DropdownTrigger, _React$Component);

  function DropdownTrigger(props) {
    (0, _classCallCheck3.default)(this, DropdownTrigger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropdownTrigger).call(this, props));

    _this._documentClickHandler = _this._handleDocumentClick.bind(_this);
    _this._escapeHandler = _this._handleEscapePress.bind(_this);

    _this.state = {
      isDropdownDisplayed: false
    };
    return _this;
  }

  (0, _createClass3.default)(DropdownTrigger, [{
    key: 'render',
    value: function render() {
      var props = void 0;

      props = {
        onClick: this._onTriggerClick.bind(this)
      };

      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unrenderDropdown();
      document.body.removeChild(this._containerDiv);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._containerDiv = document.createElement('div');
      this._containerDiv.className = 'dropdown-container';
      document.body.appendChild(this._containerDiv);
    }
  }, {
    key: '_onTriggerClick',
    value: function _onTriggerClick() {
      if (this.state.isDropdownDisplayed) {
        this._hide();
      } else {
        this._show();
      }
    }
  }, {
    key: '_hide',
    value: function _hide() {
      this._unrenderDropdown();
      this.setState({ isDropdownDisplayed: false });
    }
  }, {
    key: '_unrenderDropdown',
    value: function _unrenderDropdown() {
      this._removeDocumentListeners();
      if (this._tether) {
        this._tether.destroy();
        this._tether = null;
      }
      if (this._dropdownNode) {
        _reactDom2.default.unmountComponentAtNode(this._containerDiv);
        this._dropdownNode = null;
      }
    }
  }, {
    key: '_removeDocumentListeners',
    value: function _removeDocumentListeners() {
      document.removeEventListener('click', this._documentClickHandler, false);
      document.removeEventListener('keyup', this._escapeHandler, false);
    }
  }, {
    key: '_show',
    value: function _show() {
      this._renderDropdown();
      this._listenToRootCloseEvents();
      this.setState({ isDropdownDisplayed: true });
      this._tether.position();
    }
  }, {
    key: '_renderDropdown',
    value: function _renderDropdown() {
      var dropdown = void 0;

      dropdown = _react2.default.cloneElement(this.props.dropdown, {
        hideCallback: this._hide.bind(this),
        tether: this.props.alignment
      });

      this._dropdownNode = _reactDom2.default.render(dropdown, this._containerDiv);
      this._tether = this._createTether(this._getTetherConfig());
    }

    // This is a seam for testing

  }, {
    key: '_createTether',
    value: function _createTether(tetherConfig) {
      return new _tether2.default(tetherConfig);
    }
  }, {
    key: '_getTetherConfig',
    value: function _getTetherConfig() {
      var tetherConfig = void 0;

      tetherConfig = {
        attachment: 'top ' + this.props.alignment,
        targetAttachment: 'bottom ' + this.props.alignment
      };

      tetherConfig.element = _reactDom2.default.findDOMNode(this._containerDiv);
      tetherConfig.target = _reactDom2.default.findDOMNode(this);

      return tetherConfig;
    }
  }, {
    key: '_listenToRootCloseEvents',
    value: function _listenToRootCloseEvents() {
      this._listenToClicksOutsideOfDropdown();
      this._listenToEscape();
    }
  }, {
    key: '_listenToClicksOutsideOfDropdown',
    value: function _listenToClicksOutsideOfDropdown() {
      document.addEventListener('click', this._documentClickHandler, false);
    }
  }, {
    key: '_handleDocumentClick',
    value: function _handleDocumentClick(e) {
      if (_reactDom2.default.findDOMNode(this._dropdownNode).contains(e.target)) {
        return;
      }
      this._hide();
    }
  }, {
    key: '_listenToEscape',
    value: function _listenToEscape() {
      document.addEventListener('keyup', this._escapeHandler, false);
    }
  }, {
    key: '_handleEscapePress',
    value: function _handleEscapePress(e) {
      if (e.keyCode === 27) {
        this._hide();
      }
    }
  }]);
  return DropdownTrigger;
}(_react2.default.Component);

DropdownTrigger.propTypes = {
  dropdown: _react2.default.PropTypes.element,
  alignment: _react2.default.PropTypes.oneOf(['left', 'right'])
};

DropdownTrigger.defaultProps = {
  alignment: 'left'
};

exports.default = DropdownTrigger;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"tether":61}],82:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FacetToggler = require('./FacetToggler');

var _FacetToggler2 = _interopRequireDefault(_FacetToggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Facet = function (_React$Component) {
  (0, _inherits3.default)(Facet, _React$Component);

  function Facet(props) {
    (0, _classCallCheck3.default)(this, Facet);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Facet).call(this, props));

    _this.state = {
      criteriaTruncated: props.truncationEnabled
    };
    return _this;
  }

  (0, _createClass3.default)(Facet, [{
    key: 'render',
    value: function render() {
      var criteriaElements = void 0,
          clearLinkClasses = void 0,
          facetToggler = void 0,
          expandedClass = void 0,
          sectionClasses = void 0;

      criteriaElements = this._getCriteriaElements();
      facetToggler = this._getMoreOrLessToggle(criteriaElements);

      clearLinkClasses = (0, _classnames2.default)('rs-facet-clear-link', { 'rs-hidden': !this._facetHasSelectedCriteria() });

      expandedClass = this.state.criteriaTruncated ? 'collapsed' : 'expanded';
      sectionClasses = (0, _classnames2.default)('rs-facet-section', expandedClass);

      return _react2.default.createElement(
        'div',
        { className: sectionClasses },
        _react2.default.createElement(
          'div',
          { className: 'rs-facet-section-header' },
          _react2.default.createElement(
            'div',
            { className: clearLinkClasses, onClick: this._handleClear.bind(this) },
            'clear'
          ),
          _react2.default.createElement(
            'div',
            { className: 'rs-facet-section-title' },
            this.props.label
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rs-facet-section-body' },
          _react2.default.createElement(
            'ul',
            { className: 'rs-facet-list' },
            criteriaElements,
            facetToggler
          )
        )
      );
    }
  }, {
    key: '_handleSelectionChanged',
    value: function _handleSelectionChanged(isSelected, criteriaId) {
      if (this.props.onSelectionChanged) {
        this.props.onSelectionChanged(isSelected, this.props.id, criteriaId);
      }
    }
  }, {
    key: '_handleClear',
    value: function _handleClear() {
      if (this.props.onFacetClear) {
        this.props.onFacetClear(this.props.id);
      }
    }
  }, {
    key: '_getCriteriaElements',
    value: function _getCriteriaElements() {
      var _this2 = this;

      var index = void 0;

      index = 0;
      return _react2.default.Children.map(this.props.children, function (child) {
        var isSelected = void 0,
            isTruncated = void 0,
            isHidden = void 0;

        isSelected = !!_this2.props.selectedCriteria[child.props.id];

        isTruncated = _this2.state.criteriaTruncated && index++ >= _this2.props.truncationLength;
        isHidden = child.props.isHidden || isTruncated;
        return _react2.default.cloneElement(child, {
          isSelected: isSelected,
          hidden: isHidden,
          onSelectionChanged: _this2._handleSelectionChanged.bind(_this2)
        });
      }, this);
    }
  }, {
    key: '_getMoreOrLessToggle',
    value: function _getMoreOrLessToggle() {
      if (this.props.truncationEnabled && _react2.default.Children.count(this.props.children) > this.props.truncationLength) {
        return _react2.default.createElement(_FacetToggler2.default, {
          criteriaTruncated: this.state.criteriaTruncated,
          onToggleChange: this._toggleShowLess.bind(this) });
      }
      return null;
    }
  }, {
    key: '_toggleShowLess',
    value: function _toggleShowLess(truncationChange) {
      this.setState({ criteriaTruncated: truncationChange });
    }
  }, {
    key: '_facetHasSelectedCriteria',
    value: function _facetHasSelectedCriteria() {
      return (0, _keys2.default)(this.props.selectedCriteria).length > 0;
    }
  }]);
  return Facet;
}(_react2.default.Component);

Facet.defaultProps = {
  selectedCriteria: {},
  truncationLength: 5,
  truncationEnabled: true
};

Facet.propTypes = {
  label: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  onSelectionChanged: _react2.default.PropTypes.func,
  onFacetClear: _react2.default.PropTypes.func,
  selectedCriteria: _react2.default.PropTypes.object,
  truncationLength: _react2.default.PropTypes.number,
  truncationEnabled: _react2.default.PropTypes.bool
};

exports.default = Facet;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./FacetToggler":83,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],83:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacetToggler = function (_React$Component) {
  (0, _inherits3.default)(FacetToggler, _React$Component);

  function FacetToggler() {
    (0, _classCallCheck3.default)(this, FacetToggler);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FacetToggler).apply(this, arguments));
  }

  (0, _createClass3.default)(FacetToggler, [{
    key: 'render',
    value: function render() {
      var toggleText = void 0;

      toggleText = this.props.criteriaTruncated ? 'more' : 'less';

      return _react2.default.createElement(
        'li',
        { className: 'rs-facet-section-toggle', onClick: this._handleToggleChange.bind(this) },
        _react2.default.createElement('i', { className: 'rs-facet-toggle-arrow' }),
        toggleText
      );
    }
  }, {
    key: '_handleToggleChange',
    value: function _handleToggleChange() {
      this.props.onToggleChange(!this.props.criteriaTruncated);
    }
  }]);
  return FacetToggler;
}(_react2.default.Component);

FacetToggler.propTypes = {
  criteriaTruncated: _react2.default.PropTypes.bool.isRequired,
  onToggleChange: _react2.default.PropTypes.func.isRequired
};

exports.default = FacetToggler;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],84:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacetsSection = function (_React$Component) {
  (0, _inherits3.default)(FacetsSection, _React$Component);

  function FacetsSection() {
    (0, _classCallCheck3.default)(this, FacetsSection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FacetsSection).apply(this, arguments));
  }

  (0, _createClass3.default)(FacetsSection, [{
    key: 'render',
    value: function render() {
      var facets = void 0,
          itemClasses = void 0;

      if (!this.props.children) {
        return null;
      }

      facets = this._getFacetElements();

      itemClasses = (0, _classnames2.default)('rs-facet-clear-link', { 'rs-hidden': !(0, _keys2.default)(this.props.selectedCriteria).length });

      return _react2.default.createElement(
        'span',
        { className: 'rs-facets' },
        _react2.default.createElement(
          'div',
          { className: 'rs-inner' },
          _react2.default.createElement(
            'div',
            { className: 'rs-facet-header' },
            _react2.default.createElement(
              'div',
              { className: itemClasses, onClick: this._handleClearAll.bind(this) },
              'clear all'
            ),
            _react2.default.createElement(
              'div',
              { className: 'rs-facet-title' },
              this.props.sectionHeader
            )
          ),
          facets
        )
      );
    }
  }, {
    key: '_getFacetElements',
    value: function _getFacetElements() {
      var _this2 = this;

      return _react2.default.Children.map(this.props.children, function (child) {
        var selectedCriteria = void 0;

        selectedCriteria = _this2.props.selectedCriteria[child.props.id] || {};
        return _react2.default.cloneElement(child, {
          onSelectionChanged: _this2._handleSelectionChanged.bind(_this2),
          selectedCriteria: selectedCriteria,
          onFacetClear: _this2._handleFacetClear.bind(_this2)
        });
      }, this);
    }
  }, {
    key: '_handleSelectionChanged',
    value: function _handleSelectionChanged(isSelected, facetId, criteriaId) {
      if (isSelected) {
        this._handleCriteriaSelection(facetId, criteriaId);
      } else {
        this._handleCriteriaDeselection(facetId, criteriaId);
      }
    }
  }, {
    key: '_handleCriteriaSelection',
    value: function _handleCriteriaSelection(facetId, criteriaId) {
      var selectedCriteria = void 0;

      selectedCriteria = this._cloneSelectedCriteria();

      selectedCriteria[facetId] = selectedCriteria[facetId] || {};
      selectedCriteria[facetId][criteriaId] = true;

      this.props.onCriteriaSelection(facetId, criteriaId);
      this.props.onSelectionChanged(selectedCriteria);
    }
  }, {
    key: '_handleCriteriaDeselection',
    value: function _handleCriteriaDeselection(facetId, criteriaId) {
      var selectedCriteria = void 0;

      selectedCriteria = this._cloneSelectedCriteria();

      if (selectedCriteria[facetId]) {
        delete selectedCriteria[facetId][criteriaId];
        if (!(0, _keys2.default)(selectedCriteria[facetId]).length) {
          delete selectedCriteria[facetId];
        }
      }

      this.props.onCriteriaDeselection(facetId, criteriaId);
      this.props.onSelectionChanged(selectedCriteria);
    }
  }, {
    key: '_handleFacetClear',
    value: function _handleFacetClear(facetId) {
      var selectedCriteria = void 0;

      selectedCriteria = this._cloneSelectedCriteria();
      delete selectedCriteria[facetId];

      this.props.onFacetClear(facetId);
      this.props.onSelectionChanged(selectedCriteria);
    }
  }, {
    key: '_handleClearAll',
    value: function _handleClearAll() {
      this.props.onClearAll();
      this.props.onSelectionChanged({});
    }
  }, {
    key: '_cloneSelectedCriteria',
    value: function _cloneSelectedCriteria() {
      return JSON.parse((0, _stringify2.default)(this.props.selectedCriteria));
    }
  }]);
  return FacetsSection;
}(_react2.default.Component);

FacetsSection.defaultProps = {
  selectedCriteria: {},
  onCriteriaSelection: function onCriteriaSelection() {},
  onCriteriaDeselection: function onCriteriaDeselection() {},
  onFacetClear: function onFacetClear() {},
  onClearAll: function onClearAll() {}
};

FacetsSection.propTypes = {
  sectionHeader: _react2.default.PropTypes.string.isRequired,
  selectedCriteria: _react2.default.PropTypes.object,
  onSelectionChanged: _react2.default.PropTypes.func.isRequired,
  onCriteriaSelection: _react2.default.PropTypes.func,
  onCriteriaDeselection: _react2.default.PropTypes.func,
  onFacetClear: _react2.default.PropTypes.func,
  onClearAll: _react2.default.PropTypes.func
};

exports.default = FacetsSection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],85:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

var _PopoverBackground = require('./PopoverBackground');

var _PopoverBackground2 = _interopRequireDefault(_PopoverBackground);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popover = function (_React$Component) {
  (0, _inherits3.default)(Popover, _React$Component);

  function Popover(props) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Popover).call(this, props));

    _this._escapeHandler = _this._handleEscapePress.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Popover, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._hide();
      document.body.removeChild(this._containerDiv);
      document.body.removeChild(this._backgroundDiv);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._containerDiv = document.createElement('div');
      document.body.appendChild(this._containerDiv);
      this._backgroundDiv = document.createElement('div');
      this._backgroundDiv.style.display = 'none';
      document.body.appendChild(this._backgroundDiv);
      this._togglePopoverOverlay();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._togglePopoverOverlay();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: '_togglePopoverOverlay',
    value: function _togglePopoverOverlay() {
      if (this.props.isOpen) {
        this._show();
      } else {
        this._hide();
      }
    }
  }, {
    key: '_hide',
    value: function _hide() {
      this._hidePopoverOverlay();
      this._hidePopoverBackgroundOverlay();
    }
  }, {
    key: '_hidePopoverOverlay',
    value: function _hidePopoverOverlay() {
      this._removeDocumentListeners();
      this._containerDiv.className = this._containerDiv.className.replace(/(?:^|\s)rs-popover(?!\S)/g, '');
      if (this._tether) {
        this._tether.destroy();
        this._tether = null;
      }
      if (this._popoverNode) {
        _reactDom2.default.unmountComponentAtNode(this._containerDiv);
        this._popoverNode = null;
      }
    }
  }, {
    key: '_hidePopoverBackgroundOverlay',
    value: function _hidePopoverBackgroundOverlay() {
      this._backgroundDiv.style.display = 'none';
      _reactDom2.default.unmountComponentAtNode(this._backgroundDiv);
    }
  }, {
    key: '_removeDocumentListeners',
    value: function _removeDocumentListeners() {
      document.removeEventListener('keyup', this._escapeHandler, false);
    }
  }, {
    key: '_show',
    value: function _show() {
      this._renderPopoverOverlay();
      this._listenForEscapePress();
    }
  }, {
    key: '_renderPopoverOverlay',
    value: function _renderPopoverOverlay() {
      var popover = void 0;

      this._backgroundDiv.style.display = 'block';
      _reactDom2.default.render(_react2.default.createElement(_PopoverBackground2.default, { isModal: this.props.isModal, onRequestClose: this.props.onRequestClose }), this._backgroundDiv);

      var containerClasses = this._containerDiv.className.split(' ');
      this._containerDiv.className = (0, _classnames2.default)(containerClasses, { 'rs-popover': containerClasses.indexOf('rs-popover') < 0 });

      if (!this._tether) {
        this._tether = this._createTether(this._getTetherConfig());
      }
      popover = _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
        placement: this.props.placement
      });

      // render the subtree into a container so the popover will receive the context from the parent
      this._popoverNode = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, popover, this._containerDiv);

      this._tether.position();
    }

    // This is a seam for testing

  }, {
    key: '_createTether',
    value: function _createTether(tetherConfig) {
      return new _tether2.default(tetherConfig);
    }
  }, {
    key: '_getTetherConfig',
    value: function _getTetherConfig() {
      var tetherConfig = void 0;

      switch (this.props.placement) {
        case 'left':
          tetherConfig = {
            attachment: 'top right',
            targetAttachment: 'middle left',
            offset: '38px 20px'
          };
          break;
        case 'bottom-left':
          tetherConfig = {
            attachment: 'top right',
            targetAttachment: 'bottom left',
            offset: '-20px -45px'
          };
          break;
        case 'bottom-right':
          tetherConfig = {
            attachment: 'top left',
            targetAttachment: 'bottom right',
            offset: '-20px 45px'
          };
          break;
        case 'right':
          tetherConfig = {
            attachment: 'top left',
            targetAttachment: 'middle right',
            offset: '38px -20px'
          };
          break;
        case 'center':
          tetherConfig = {
            attachment: 'middle center',
            targetAttachment: 'middle center',
            targetModifier: 'visible'
          };
          break;
        default:
          tetherConfig = {
            attachment: 'top left',
            targetAttachment: 'middle right',
            offset: '38px -20px'
          };
      }

      if (this.props.tetherConfig) {
        tetherConfig = (0, _assign2.default)(tetherConfig, this.props.tetherConfig);
      }
      tetherConfig.element = _reactDom2.default.findDOMNode(this._containerDiv);
      tetherConfig.target = this._getTarget();
      return tetherConfig;
    }
  }, {
    key: '_getTarget',
    value: function _getTarget() {
      var target = void 0;

      target = this.props.target;

      if (target instanceof Function) {
        return this.props.target();
      }

      return document.getElementById(target);
    }
  }, {
    key: '_listenForEscapePress',
    value: function _listenForEscapePress() {
      document.addEventListener('keyup', this._escapeHandler, false);
    }
  }, {
    key: '_handleEscapePress',
    value: function _handleEscapePress(e) {
      if (e.keyCode === 27) {
        this.props.onRequestClose();
      }
    }
  }]);
  return Popover;
}(_react2.default.Component);

Popover.defaultProps = {
  placement: 'right',
  isOpen: false
};

Popover.propTypes = {
  children: _react2.default.PropTypes.element.isRequired,
  isModal: _react2.default.PropTypes.bool,
  isOpen: _react2.default.PropTypes.bool,
  onRequestClose: _react2.default.PropTypes.func.isRequired,
  placement: _react2.default.PropTypes.oneOf(['right', 'bottom-right', 'left', 'bottom-left', 'center']),
  target: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func]).isRequired,
  tetherConfig: _react2.default.PropTypes.object
};

exports.default = Popover;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./PopoverBackground":86,"babel-runtime/core-js/object/assign":2,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60,"tether":61}],86:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverBackground = function (_React$Component) {
  (0, _inherits3.default)(PopoverBackground, _React$Component);

  function PopoverBackground(props) {
    (0, _classCallCheck3.default)(this, PopoverBackground);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PopoverBackground).call(this, props));
  }

  (0, _createClass3.default)(PopoverBackground, [{
    key: 'render',
    value: function render() {
      var style = void 0;

      style = {
        'position': 'fixed',
        'left': 0,
        'top': 0,
        'width': '100%',
        'height': '100%',
        'zIndex': 999
      };

      if (this.props.isModal) {
        style['backgroundColor'] = 'rgba(0, 0, 0, 0.5)';
      }

      return _react2.default.createElement('div', { className: 'rs-popover-background-overlay', onClick: this.props.onRequestClose, style: style });
    }
  }]);
  return PopoverBackground;
}(_react2.default.Component);

PopoverBackground.propTypes = {
  isModal: _react2.default.PropTypes.bool,
  onRequestClose: _react2.default.PropTypes.func
};

exports.default = PopoverBackground;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],87:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverBody = function (_React$Component) {
  (0, _inherits3.default)(PopoverBody, _React$Component);

  function PopoverBody() {
    (0, _classCallCheck3.default)(this, PopoverBody);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PopoverBody).apply(this, arguments));
  }

  (0, _createClass3.default)(PopoverBody, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rs-popover-body', this.props.className) },
        this.props.children
      );
    }
  }]);
  return PopoverBody;
}(_react2.default.Component);

exports.default = PopoverBody;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],88:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverFooter = function (_React$Component) {
  (0, _inherits3.default)(PopoverFooter, _React$Component);

  function PopoverFooter() {
    (0, _classCallCheck3.default)(this, PopoverFooter);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PopoverFooter).apply(this, arguments));
  }

  (0, _createClass3.default)(PopoverFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ButtonGroup2.default,
        { className: (0, _classnames2.default)('rs-popover-footer', this.props.className) },
        this.props.children
      );
    }
  }]);
  return PopoverFooter;
}(_react2.default.Component);

exports.default = PopoverFooter;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ButtonGroup":63,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],89:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ARROW_POSITIONS = {
  'right': 'rs-popover-arrow-left-top',
  'bottom-right': 'rs-popover-arrow-top-left',
  'left': 'rs-popover-arrow-right-top',
  'bottom-left': 'rs-popover-arrow-top-right'
};

var PopoverOverlay = function (_React$Component) {
  (0, _inherits3.default)(PopoverOverlay, _React$Component);

  function PopoverOverlay() {
    (0, _classCallCheck3.default)(this, PopoverOverlay);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PopoverOverlay).apply(this, arguments));
  }

  (0, _createClass3.default)(PopoverOverlay, [{
    key: '_shouldShowArrow',
    value: function _shouldShowArrow() {
      return this.props.placement !== 'center';
    }
  }, {
    key: 'render',
    value: function render() {
      var arrowPlacement = void 0;

      arrowPlacement = (0, _classnames2.default)('rs-popover-arrow', ARROW_POSITIONS[this.props.placement]);

      if (this._shouldShowArrow()) {
        return _react2.default.createElement(
          'div',
          { className: this.props.className },
          _react2.default.createElement('div', { className: arrowPlacement }),
          _react2.default.createElement(
            'div',
            { className: 'rs-popover-content' },
            this.props.children
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: this.props.className },
          _react2.default.createElement(
            'div',
            { className: 'rs-popover-content' },
            this.props.children
          )
        );
      }
    }
  }]);
  return PopoverOverlay;
}(_react2.default.Component);

PopoverOverlay.defaultProps = {
  placement: 'right'
};

PopoverOverlay.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  placement: _react2.default.PropTypes.oneOf(['right', 'bottom-right', 'left', 'bottom-left', 'center'])
};

exports.default = PopoverOverlay;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],90:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProcessingIndicator = function (_React$Component) {
  (0, _inherits3.default)(ProcessingIndicator, _React$Component);

  function ProcessingIndicator() {
    (0, _classCallCheck3.default)(this, ProcessingIndicator);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProcessingIndicator).apply(this, arguments));
  }

  (0, _createClass3.default)(ProcessingIndicator, [{
    key: 'render',
    value: function render() {
      var classes = void 0;

      classes = (0, _classnames2.default)('rs-processing-indicator', { 'rs-hidden': this.props.hidden });

      return _react2.default.createElement('i', { className: classes });
    }
  }]);
  return ProcessingIndicator;
}(_react2.default.Component);

ProcessingIndicator.propTypes = {
  hidden: _react2.default.PropTypes.bool
};

ProcessingIndicator.defaultProps = {
  hidden: true
};

exports.default = ProcessingIndicator;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],91:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZE_CLASSES = {
  'xsmall': 'rs-progress-xsmall',
  'small': 'rs-progress-small',
  'medium': 'rs-progress-medium',
  'large': 'rs-progress-large',
  'xlarge': 'rs-progress-xlarge'
};

var STATUS_CLASSES = {
  'ok': 'rs-status-ok',
  'error': 'rs-status-error',
  'warning': 'rs-status-warning',
  'info': 'rs-status-info'
};

var TYPE_CLASSES = {
  'solid': 'rs-bar-solid',
  'striped': 'rs-bar-striped'
};

var ProgressBar = function (_React$Component) {
  (0, _inherits3.default)(ProgressBar, _React$Component);

  function ProgressBar() {
    (0, _classCallCheck3.default)(this, ProgressBar);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ProgressBar).apply(this, arguments));
  }

  (0, _createClass3.default)(ProgressBar, [{
    key: '_getSizeClass',
    value: function _getSizeClass() {
      return (0, _classnames2.default)('rs-progress', SIZE_CLASSES[this.props.size]);
    }
  }, {
    key: '_getStatusClass',
    value: function _getStatusClass() {
      return (0, _classnames2.default)('rs-bar', STATUS_CLASSES[this.props.status], TYPE_CLASSES[this.props.type]);
    }
  }, {
    key: 'render',
    value: function render() {
      var style = void 0,
          width = void 0;

      width = this.props.progress + '%';
      style = { 'width': width };

      return _react2.default.createElement(
        'div',
        { className: this._getSizeClass() },
        _react2.default.createElement(
          'div',
          { className: 'rs-progress-inner' },
          _react2.default.createElement(
            'div',
            { className: 'rs-segment', style: style },
            _react2.default.createElement('div', { className: this._getStatusClass() })
          )
        )
      );
    }
  }]);
  return ProgressBar;
}(_react2.default.Component);

ProgressBar.propTypes = {
  progress: _react2.default.PropTypes.number,
  status: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.string
};

ProgressBar.defaultProps = {
  progress: 0,
  status: 'ok',
  type: 'solid'
};

exports.default = ProgressBar;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],92:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_INDICATOR = {
  'error': 'rs-status rs-status-error',
  'processing': 'rs-status rs-status-processing',
  'warning': 'rs-status rs-status-warning',
  'ok': 'rs-status rs-status-ok',
  'disabled': 'rs-status rs-status-disabled'
};

var StatusIndicator = function (_React$Component) {
  (0, _inherits3.default)(StatusIndicator, _React$Component);

  function StatusIndicator() {
    (0, _classCallCheck3.default)(this, StatusIndicator);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StatusIndicator).apply(this, arguments));
  }

  (0, _createClass3.default)(StatusIndicator, [{
    key: 'render',
    value: function render() {
      var classes = void 0;

      classes = (0, _classnames2.default)(this.props.className, STATUS_INDICATOR[this.props.status], { 'rs-hidden': this.props.hidden });
      return _react2.default.createElement(
        'span',
        (0, _extends3.default)({}, this.props, { className: classes }),
        this.props.children
      );
    }
  }]);
  return StatusIndicator;
}(_react2.default.Component);

StatusIndicator.propTypes = {
  status: _react2.default.PropTypes.oneOf(['ok', 'error', 'processing', 'warning', 'disabled']),
  hidden: _react2.default.PropTypes.bool
};

StatusIndicator.defaultProps = {
  status: 'ok',
  hidden: false
};

exports.default = StatusIndicator;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"classnames":60}],93:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TooltipTrigger = function (_React$Component) {
  (0, _inherits3.default)(TooltipTrigger, _React$Component);

  function TooltipTrigger(props) {
    (0, _classCallCheck3.default)(this, TooltipTrigger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TooltipTrigger).call(this, props));

    _this.state = {
      isTooltipOpen: false,
      isMouseInTooltip: false
    };
    return _this;
  }

  (0, _createClass3.default)(TooltipTrigger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._containerDiv = document.createElement('div');
      this._containerDiv.className = 'rs-tooltip';
      document.body.appendChild(this._containerDiv);
      this._updateTooltipVisibility();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._hideTimer) {
        clearInterval(this._hideTimer);
      }

      if (this._showTimer) {
        clearInterval(this._showTimer);
      }

      if (this._hideOnLeavingTooltipTimer) {
        clearInterval(this._hideOnLeavingTooltipTimer);
      }

      this._hideTooltip();
      document.body.removeChild(this._containerDiv);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateTooltipVisibility();
    }
  }, {
    key: '_updateTooltipVisibility',
    value: function _updateTooltipVisibility() {
      if (this._shouldShowTooltip()) {
        this._showTooltip();
      } else {
        this._hideTooltip();
      }
    }
  }, {
    key: '_hideTooltip',
    value: function _hideTooltip() {
      this._containerDiv.className = this._containerDiv.className.replace(/(?:^|\s)visible(?!\S)/g, '');
      if (this._tether) {
        this._tether.destroy();
        this._tether = null;
      }

      if (this._tooltipNode) {
        _reactDom2.default.unmountComponentAtNode(this._containerDiv);
        this._tooltipNode = null;
      }
    }
  }, {
    key: '_showTooltip',
    value: function _showTooltip() {
      this._containerDiv.className += ' visible';
      this._tooltipNode = _reactDom2.default.render(_react2.default.createElement(
        'div',
        { className: 'rs-tooltip-inner',
          onMouseOver: this._mouseEnteringTooltip.bind(this),
          onMouseLeave: this._mouseLeavingTooltip.bind(this) },
        this.props.content
      ), this._containerDiv);
      if (!this._tether) {
        this._tether = this._createTether(this._getTetherConfig());
      }
    }
  }, {
    key: '_createTether',
    value: function _createTether(tetherConfig) {
      return new _tether2.default(tetherConfig);
    }
  }, {
    key: '_getTetherConfig',
    value: function _getTetherConfig() {
      var tetherConfig = void 0;

      switch (this.props.placement) {
        case 'left':
          tetherConfig = {
            attachment: 'middle right',
            targetAttachment: 'middle left'
          };
          break;
        case 'bottom-left':
          tetherConfig = {
            attachment: 'top right',
            targetAttachment: 'bottom left'
          };
          break;
        case 'top-left':
          tetherConfig = {
            attachment: 'bottom right',
            targetAttachment: 'top left'
          };
          break;
        case 'top':
          tetherConfig = {
            attachment: 'bottom middle',
            targetAttachment: 'top middle'
          };
          break;
        case 'bottom':
          tetherConfig = {
            attachment: 'top middle',
            targetAttachment: 'bottom middle'
          };
          break;
        case 'right':
          tetherConfig = {
            attachment: 'middle left',
            targetAttachment: 'middle right'
          };
          break;
        case 'top-right':
          tetherConfig = {
            attachment: 'bottom left',
            targetAttachment: 'top right'
          };
          break;
        case 'bottom-right':
        default:
          tetherConfig = {
            attachment: 'top left',
            targetAttachment: 'bottom right'
          };
          break;
      }

      tetherConfig.targetModifier = 'visible';
      tetherConfig.element = _reactDom2.default.findDOMNode(this._containerDiv);
      tetherConfig.target = this._getTarget();
      tetherConfig.constraints = [{ to: 'window', pin: true, attachment: 'together' }];

      return tetherConfig;
    }
  }, {
    key: 'render',
    value: function render() {
      var triggerProps = void 0,
          showTooltipfunc = void 0,
          hideTooltipFunc = void 0;

      showTooltipfunc = this._showTooltipOnInterval.bind(this);
      hideTooltipFunc = this._hideTooltipOnInterval.bind(this);
      triggerProps = {
        onMouseOver: showTooltipfunc,
        onMouseLeave: hideTooltipFunc,
        onFocus: showTooltipfunc,
        onBlur: hideTooltipFunc,
        ref: 'trigger'
      };

      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), triggerProps);
    }
  }, {
    key: '_showTooltipOnInterval',
    value: function _showTooltipOnInterval() {
      var _this2 = this;

      if (this._hideTimer) {
        clearInterval(this._hideTimer);
      }
      this._showTimer = setTimeout(function () {
        _this2.setState({ isTooltipOpen: true });
      }, 200);
    }
  }, {
    key: '_hideTooltipOnInterval',
    value: function _hideTooltipOnInterval() {
      var _this3 = this;

      if (this._showTimer) {
        clearInterval(this._showTimer);
      }
      this._hideTimer = setTimeout(function () {
        _this3.setState({ isTooltipOpen: false });
      }, 200);
    }
  }, {
    key: '_shouldShowTooltip',
    value: function _shouldShowTooltip() {
      return this.state.isTooltipOpen || this.state.isMouseInTooltip;
    }
  }, {
    key: '_getTarget',
    value: function _getTarget() {
      return _reactDom2.default.findDOMNode(this.refs.trigger);
    }
  }, {
    key: '_mouseLeavingTooltip',
    value: function _mouseLeavingTooltip() {
      var _this4 = this;

      this._hideOnLeavingTooltipTimer = setTimeout(function () {
        _this4.setState({ isMouseInTooltip: false });
      }, 250);
    }
  }, {
    key: '_mouseEnteringTooltip',
    value: function _mouseEnteringTooltip() {
      if (this._hideOnLeavingTooltipTimer) {
        clearInterval(this._hideOnLeavingTooltipTimer);
      }
      this.setState({ isMouseInTooltip: true });
    }
  }]);
  return TooltipTrigger;
}(_react2.default.Component);

TooltipTrigger.propTypes = {
  content: _react2.default.PropTypes.node.isRequired,
  placement: _react2.default.PropTypes.oneOf(['right', 'bottom-right', 'top-right', 'top', 'left', 'bottom-left', 'top-left', 'bottom'])
};

TooltipTrigger.defaultProps = {
  placement: 'bottom-right'
};

exports.default = TooltipTrigger;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13,"tether":61}],94:[function(require,module,exports){
(function (global){
'use strict';

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DemoView = require('./DemoView');

var _DemoView2 = _interopRequireDefault(_DemoView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  _reactDom2.default.render(_react2.default.createElement(_DemoView2.default, null), document.getElementById('content'));
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./DemoView":77}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipTrigger = exports.StatusIndicator = exports.ProgressBar = exports.PopoverOverlay = exports.ProcessingIndicator = exports.PopoverFooter = exports.PopoverBody = exports.Popover = exports.FacetsSection = exports.Facet = exports.DropdownTrigger = exports.DropdownItem = exports.Dropdown = exports.Divider = exports.Criteria = exports.ButtonGroup = exports.Button = undefined;

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Criteria = require('./Criteria');

var _Criteria2 = _interopRequireDefault(_Criteria);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownItem = require('./DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownTrigger = require('./DropdownTrigger');

var _DropdownTrigger2 = _interopRequireDefault(_DropdownTrigger);

var _Facet = require('./Facet');

var _Facet2 = _interopRequireDefault(_Facet);

var _FacetsSection = require('./FacetsSection');

var _FacetsSection2 = _interopRequireDefault(_FacetsSection);

var _Popover = require('./Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverBody = require('./PopoverBody');

var _PopoverBody2 = _interopRequireDefault(_PopoverBody);

var _PopoverFooter = require('./PopoverFooter');

var _PopoverFooter2 = _interopRequireDefault(_PopoverFooter);

var _ProcessingIndicator = require('./ProcessingIndicator');

var _ProcessingIndicator2 = _interopRequireDefault(_ProcessingIndicator);

var _PopoverOverlay = require('./PopoverOverlay');

var _PopoverOverlay2 = _interopRequireDefault(_PopoverOverlay);

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _StatusIndicator = require('./StatusIndicator');

var _StatusIndicator2 = _interopRequireDefault(_StatusIndicator);

var _TooltipTrigger = require('./TooltipTrigger');

var _TooltipTrigger2 = _interopRequireDefault(_TooltipTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.ButtonGroup = _ButtonGroup2.default;
exports.Criteria = _Criteria2.default;
exports.Divider = _Divider2.default;
exports.Dropdown = _Dropdown2.default;
exports.DropdownItem = _DropdownItem2.default;
exports.DropdownTrigger = _DropdownTrigger2.default;
exports.Facet = _Facet2.default;
exports.FacetsSection = _FacetsSection2.default;
exports.Popover = _Popover2.default;
exports.PopoverBody = _PopoverBody2.default;
exports.PopoverFooter = _PopoverFooter2.default;
exports.ProcessingIndicator = _ProcessingIndicator2.default;
exports.PopoverOverlay = _PopoverOverlay2.default;
exports.ProgressBar = _ProgressBar2.default;
exports.StatusIndicator = _StatusIndicator2.default;
exports.TooltipTrigger = _TooltipTrigger2.default;

},{"./Button":62,"./ButtonGroup":63,"./Criteria":64,"./Divider":78,"./Dropdown":79,"./DropdownItem":80,"./DropdownTrigger":81,"./Facet":82,"./FacetsSection":84,"./Popover":85,"./PopoverBody":87,"./PopoverFooter":88,"./PopoverOverlay":89,"./ProcessingIndicator":90,"./ProgressBar":91,"./StatusIndicator":92,"./TooltipTrigger":93}]},{},[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95]);
