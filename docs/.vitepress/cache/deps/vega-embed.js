import {
  src_exports
} from "./chunk-YJPYEGSP.js";
import {
  isArray,
  isBoolean,
  isObject,
  isString,
  mergeConfig,
  vega_module_exports,
  writeConfig
} from "./chunk-XJDZ4BQV.js";
import "./chunk-AVDKQJKK.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/json-stringify-pretty-compact/index.js
var require_json_stringify_pretty_compact = __commonJS({
  "node_modules/json-stringify-pretty-compact/index.js"(exports, module4) {
    "use strict";
    var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g;
    module4.exports = function stringify3(passedObj, options) {
      var indent, maxLength, replacer2;
      options = options || {};
      indent = JSON.stringify(
        [1],
        void 0,
        options.indent === void 0 ? 2 : options.indent
      ).slice(2, -3);
      maxLength = indent === "" ? Infinity : options.maxLength === void 0 ? 80 : options.maxLength;
      replacer2 = options.replacer;
      return function _stringify(obj, currentIndent, reserved) {
        var end, index, items, key, keyPart, keys, length, nextIndent, prettified, start, string, value;
        if (obj && typeof obj.toJSON === "function") {
          obj = obj.toJSON();
        }
        string = JSON.stringify(obj, replacer2);
        if (string === void 0) {
          return string;
        }
        length = maxLength - currentIndent.length - reserved;
        if (string.length <= length) {
          prettified = string.replace(
            stringOrChar,
            function(match, stringLiteral) {
              return stringLiteral || match + " ";
            }
          );
          if (prettified.length <= length) {
            return prettified;
          }
        }
        if (replacer2 != null) {
          obj = JSON.parse(string);
          replacer2 = void 0;
        }
        if (typeof obj === "object" && obj !== null) {
          nextIndent = currentIndent + indent;
          items = [];
          index = 0;
          if (Array.isArray(obj)) {
            start = "[";
            end = "]";
            length = obj.length;
            for (; index < length; index++) {
              items.push(
                _stringify(obj[index], nextIndent, index === length - 1 ? 0 : 1) || "null"
              );
            }
          } else {
            start = "{";
            end = "}";
            keys = Object.keys(obj);
            length = keys.length;
            for (; index < length; index++) {
              key = keys[index];
              keyPart = JSON.stringify(key) + ": ";
              value = _stringify(
                obj[key],
                nextIndent,
                keyPart.length + (index === length - 1 ? 0 : 1)
              );
              if (value !== void 0) {
                items.push(keyPart + value);
              }
            }
          }
          if (items.length > 0) {
            return [start, indent + items.join(",\n" + nextIndent), end].join(
              "\n" + currentIndent
            );
          }
        }
        return string;
      }(passedObj, "", 0);
    };
  }
});

// node_modules/fast-json-patch/module/core.mjs
var core_exports = {};
__export(core_exports, {
  JsonPatchError: () => JsonPatchError,
  _areEquals: () => _areEquals,
  applyOperation: () => applyOperation,
  applyPatch: () => applyPatch,
  applyReducer: () => applyReducer,
  deepClone: () => deepClone,
  getValueByPointer: () => getValueByPointer,
  validate: () => validate,
  validator: () => validator
});

// node_modules/fast-json-patch/module/helpers.mjs
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
  return _hasOwnProperty.call(obj, key);
}
function _objectKeys(obj) {
  if (Array.isArray(obj)) {
    var keys_1 = new Array(obj.length);
    for (var k = 0; k < keys_1.length; k++) {
      keys_1[k] = "" + k;
    }
    return keys_1;
  }
  if (Object.keys) {
    return Object.keys(obj);
  }
  var keys = [];
  for (var i in obj) {
    if (hasOwnProperty(obj, i)) {
      keys.push(i);
    }
  }
  return keys;
}
function _deepClone(obj) {
  switch (typeof obj) {
    case "object":
      return JSON.parse(JSON.stringify(obj));
    case "undefined":
      return null;
    default:
      return obj;
  }
}
function isInteger(str) {
  var i = 0;
  var len = str.length;
  var charCode;
  while (i < len) {
    charCode = str.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      i++;
      continue;
    }
    return false;
  }
  return true;
}
function escapePathComponent(path) {
  if (path.indexOf("/") === -1 && path.indexOf("~") === -1)
    return path;
  return path.replace(/~/g, "~0").replace(/\//g, "~1");
}
function unescapePathComponent(path) {
  return path.replace(/~1/g, "/").replace(/~0/g, "~");
}
function hasUndefined(obj) {
  if (obj === void 0) {
    return true;
  }
  if (obj) {
    if (Array.isArray(obj)) {
      for (var i_1 = 0, len = obj.length; i_1 < len; i_1++) {
        if (hasUndefined(obj[i_1])) {
          return true;
        }
      }
    } else if (typeof obj === "object") {
      var objKeys = _objectKeys(obj);
      var objKeysLength = objKeys.length;
      for (var i = 0; i < objKeysLength; i++) {
        if (hasUndefined(obj[objKeys[i]])) {
          return true;
        }
      }
    }
  }
  return false;
}
function patchErrorMessageFormatter(message, args) {
  var messageParts = [message];
  for (var key in args) {
    var value = typeof args[key] === "object" ? JSON.stringify(args[key], null, 2) : args[key];
    if (typeof value !== "undefined") {
      messageParts.push(key + ": " + value);
    }
  }
  return messageParts.join("\n");
}
var PatchError = (
  /** @class */
  function(_super) {
    __extends(PatchError2, _super);
    function PatchError2(message, name4, index, operation, tree) {
      var _newTarget = this.constructor;
      var _this = _super.call(this, patchErrorMessageFormatter(message, { name: name4, index, operation, tree })) || this;
      _this.name = name4;
      _this.index = index;
      _this.operation = operation;
      _this.tree = tree;
      Object.setPrototypeOf(_this, _newTarget.prototype);
      _this.message = patchErrorMessageFormatter(message, { name: name4, index, operation, tree });
      return _this;
    }
    return PatchError2;
  }(Error)
);

// node_modules/fast-json-patch/module/core.mjs
var JsonPatchError = PatchError;
var deepClone = _deepClone;
var objOps = {
  add: function(obj, key, document2) {
    obj[key] = this.value;
    return { newDocument: document2 };
  },
  remove: function(obj, key, document2) {
    var removed = obj[key];
    delete obj[key];
    return { newDocument: document2, removed };
  },
  replace: function(obj, key, document2) {
    var removed = obj[key];
    obj[key] = this.value;
    return { newDocument: document2, removed };
  },
  move: function(obj, key, document2) {
    var removed = getValueByPointer(document2, this.path);
    if (removed) {
      removed = _deepClone(removed);
    }
    var originalValue = applyOperation(document2, { op: "remove", path: this.from }).removed;
    applyOperation(document2, { op: "add", path: this.path, value: originalValue });
    return { newDocument: document2, removed };
  },
  copy: function(obj, key, document2) {
    var valueToCopy = getValueByPointer(document2, this.from);
    applyOperation(document2, { op: "add", path: this.path, value: _deepClone(valueToCopy) });
    return { newDocument: document2 };
  },
  test: function(obj, key, document2) {
    return { newDocument: document2, test: _areEquals(obj[key], this.value) };
  },
  _get: function(obj, key, document2) {
    this.value = obj[key];
    return { newDocument: document2 };
  }
};
var arrOps = {
  add: function(arr, i, document2) {
    if (isInteger(i)) {
      arr.splice(i, 0, this.value);
    } else {
      arr[i] = this.value;
    }
    return { newDocument: document2, index: i };
  },
  remove: function(arr, i, document2) {
    var removedList = arr.splice(i, 1);
    return { newDocument: document2, removed: removedList[0] };
  },
  replace: function(arr, i, document2) {
    var removed = arr[i];
    arr[i] = this.value;
    return { newDocument: document2, removed };
  },
  move: objOps.move,
  copy: objOps.copy,
  test: objOps.test,
  _get: objOps._get
};
function getValueByPointer(document2, pointer) {
  if (pointer == "") {
    return document2;
  }
  var getOriginalDestination = { op: "_get", path: pointer };
  applyOperation(document2, getOriginalDestination);
  return getOriginalDestination.value;
}
function applyOperation(document2, operation, validateOperation, mutateDocument, banPrototypeModifications, index) {
  if (validateOperation === void 0) {
    validateOperation = false;
  }
  if (mutateDocument === void 0) {
    mutateDocument = true;
  }
  if (banPrototypeModifications === void 0) {
    banPrototypeModifications = true;
  }
  if (index === void 0) {
    index = 0;
  }
  if (validateOperation) {
    if (typeof validateOperation == "function") {
      validateOperation(operation, 0, document2, operation.path);
    } else {
      validator(operation, 0);
    }
  }
  if (operation.path === "") {
    var returnValue = { newDocument: document2 };
    if (operation.op === "add") {
      returnValue.newDocument = operation.value;
      return returnValue;
    } else if (operation.op === "replace") {
      returnValue.newDocument = operation.value;
      returnValue.removed = document2;
      return returnValue;
    } else if (operation.op === "move" || operation.op === "copy") {
      returnValue.newDocument = getValueByPointer(document2, operation.from);
      if (operation.op === "move") {
        returnValue.removed = document2;
      }
      return returnValue;
    } else if (operation.op === "test") {
      returnValue.test = _areEquals(document2, operation.value);
      if (returnValue.test === false) {
        throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
      }
      returnValue.newDocument = document2;
      return returnValue;
    } else if (operation.op === "remove") {
      returnValue.removed = document2;
      returnValue.newDocument = null;
      return returnValue;
    } else if (operation.op === "_get") {
      operation.value = document2;
      return returnValue;
    } else {
      if (validateOperation) {
        throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document2);
      } else {
        return returnValue;
      }
    }
  } else {
    if (!mutateDocument) {
      document2 = _deepClone(document2);
    }
    var path = operation.path || "";
    var keys = path.split("/");
    var obj = document2;
    var t2 = 1;
    var len = keys.length;
    var existingPathFragment = void 0;
    var key = void 0;
    var validateFunction = void 0;
    if (typeof validateOperation == "function") {
      validateFunction = validateOperation;
    } else {
      validateFunction = validator;
    }
    while (true) {
      key = keys[t2];
      if (key && key.indexOf("~") != -1) {
        key = unescapePathComponent(key);
      }
      if (banPrototypeModifications && (key == "__proto__" || key == "prototype" && t2 > 0 && keys[t2 - 1] == "constructor")) {
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      }
      if (validateOperation) {
        if (existingPathFragment === void 0) {
          if (obj[key] === void 0) {
            existingPathFragment = keys.slice(0, t2).join("/");
          } else if (t2 == len - 1) {
            existingPathFragment = operation.path;
          }
          if (existingPathFragment !== void 0) {
            validateFunction(operation, 0, document2, existingPathFragment);
          }
        }
      }
      t2++;
      if (Array.isArray(obj)) {
        if (key === "-") {
          key = obj.length;
        } else {
          if (validateOperation && !isInteger(key)) {
            throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document2);
          } else if (isInteger(key)) {
            key = ~~key;
          }
        }
        if (t2 >= len) {
          if (validateOperation && operation.op === "add" && key > obj.length) {
            throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document2);
          }
          var returnValue = arrOps[operation.op].call(operation, obj, key, document2);
          if (returnValue.test === false) {
            throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
          }
          return returnValue;
        }
      } else {
        if (t2 >= len) {
          var returnValue = objOps[operation.op].call(operation, obj, key, document2);
          if (returnValue.test === false) {
            throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
          }
          return returnValue;
        }
      }
      obj = obj[key];
      if (validateOperation && t2 < len && (!obj || typeof obj !== "object")) {
        throw new JsonPatchError("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", index, operation, document2);
      }
    }
  }
}
function applyPatch(document2, patch, validateOperation, mutateDocument, banPrototypeModifications) {
  if (mutateDocument === void 0) {
    mutateDocument = true;
  }
  if (banPrototypeModifications === void 0) {
    banPrototypeModifications = true;
  }
  if (validateOperation) {
    if (!Array.isArray(patch)) {
      throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    }
  }
  if (!mutateDocument) {
    document2 = _deepClone(document2);
  }
  var results = new Array(patch.length);
  for (var i = 0, length_1 = patch.length; i < length_1; i++) {
    results[i] = applyOperation(document2, patch[i], validateOperation, true, banPrototypeModifications, i);
    document2 = results[i].newDocument;
  }
  results.newDocument = document2;
  return results;
}
function applyReducer(document2, operation, index) {
  var operationResult = applyOperation(document2, operation);
  if (operationResult.test === false) {
    throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
  }
  return operationResult.newDocument;
}
function validator(operation, index, document2, existingPathFragment) {
  if (typeof operation !== "object" || operation === null || Array.isArray(operation)) {
    throw new JsonPatchError("Operation is not an object", "OPERATION_NOT_AN_OBJECT", index, operation, document2);
  } else if (!objOps[operation.op]) {
    throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document2);
  } else if (typeof operation.path !== "string") {
    throw new JsonPatchError("Operation `path` property is not a string", "OPERATION_PATH_INVALID", index, operation, document2);
  } else if (operation.path.indexOf("/") !== 0 && operation.path.length > 0) {
    throw new JsonPatchError('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", index, operation, document2);
  } else if ((operation.op === "move" || operation.op === "copy") && typeof operation.from !== "string") {
    throw new JsonPatchError("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", index, operation, document2);
  } else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && operation.value === void 0) {
    throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", index, operation, document2);
  } else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && hasUndefined(operation.value)) {
    throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", index, operation, document2);
  } else if (document2) {
    if (operation.op == "add") {
      var pathLen = operation.path.split("/").length;
      var existingPathLen = existingPathFragment.split("/").length;
      if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
        throw new JsonPatchError("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", index, operation, document2);
      }
    } else if (operation.op === "replace" || operation.op === "remove" || operation.op === "_get") {
      if (operation.path !== existingPathFragment) {
        throw new JsonPatchError("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", index, operation, document2);
      }
    } else if (operation.op === "move" || operation.op === "copy") {
      var existingValue = { op: "_get", path: operation.from, value: void 0 };
      var error = validate([existingValue], document2);
      if (error && error.name === "OPERATION_PATH_UNRESOLVABLE") {
        throw new JsonPatchError("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", index, operation, document2);
      }
    }
  }
}
function validate(sequence, document2, externalValidator) {
  try {
    if (!Array.isArray(sequence)) {
      throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    }
    if (document2) {
      applyPatch(_deepClone(document2), _deepClone(sequence), externalValidator || true);
    } else {
      externalValidator = externalValidator || validator;
      for (var i = 0; i < sequence.length; i++) {
        externalValidator(sequence[i], i, document2, void 0);
      }
    }
  } catch (e2) {
    if (e2 instanceof JsonPatchError) {
      return e2;
    } else {
      throw e2;
    }
  }
}
function _areEquals(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
    if (arrA && arrB) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!_areEquals(a[i], b[i]))
          return false;
      return true;
    }
    if (arrA != arrB)
      return false;
    var keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!b.hasOwnProperty(keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      key = keys[i];
      if (!_areEquals(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}

// node_modules/fast-json-patch/module/duplex.mjs
var duplex_exports = {};
__export(duplex_exports, {
  compare: () => compare,
  generate: () => generate,
  observe: () => observe,
  unobserve: () => unobserve
});
var beforeDict = /* @__PURE__ */ new WeakMap();
var Mirror = (
  /** @class */
  /* @__PURE__ */ function() {
    function Mirror2(obj) {
      this.observers = /* @__PURE__ */ new Map();
      this.obj = obj;
    }
    return Mirror2;
  }()
);
var ObserverInfo = (
  /** @class */
  /* @__PURE__ */ function() {
    function ObserverInfo2(callback, observer) {
      this.callback = callback;
      this.observer = observer;
    }
    return ObserverInfo2;
  }()
);
function getMirror(obj) {
  return beforeDict.get(obj);
}
function getObserverFromMirror(mirror, callback) {
  return mirror.observers.get(callback);
}
function removeObserverFromMirror(mirror, observer) {
  mirror.observers.delete(observer.callback);
}
function unobserve(root, observer) {
  observer.unobserve();
}
function observe(obj, callback) {
  var patches = [];
  var observer;
  var mirror = getMirror(obj);
  if (!mirror) {
    mirror = new Mirror(obj);
    beforeDict.set(obj, mirror);
  } else {
    var observerInfo = getObserverFromMirror(mirror, callback);
    observer = observerInfo && observerInfo.observer;
  }
  if (observer) {
    return observer;
  }
  observer = {};
  mirror.value = _deepClone(obj);
  if (callback) {
    observer.callback = callback;
    observer.next = null;
    var dirtyCheck = function() {
      generate(observer);
    };
    var fastCheck = function() {
      clearTimeout(observer.next);
      observer.next = setTimeout(dirtyCheck);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mouseup", fastCheck);
      window.addEventListener("keyup", fastCheck);
      window.addEventListener("mousedown", fastCheck);
      window.addEventListener("keydown", fastCheck);
      window.addEventListener("change", fastCheck);
    }
  }
  observer.patches = patches;
  observer.object = obj;
  observer.unobserve = function() {
    generate(observer);
    clearTimeout(observer.next);
    removeObserverFromMirror(mirror, observer);
    if (typeof window !== "undefined") {
      window.removeEventListener("mouseup", fastCheck);
      window.removeEventListener("keyup", fastCheck);
      window.removeEventListener("mousedown", fastCheck);
      window.removeEventListener("keydown", fastCheck);
      window.removeEventListener("change", fastCheck);
    }
  };
  mirror.observers.set(callback, new ObserverInfo(callback, observer));
  return observer;
}
function generate(observer, invertible) {
  if (invertible === void 0) {
    invertible = false;
  }
  var mirror = beforeDict.get(observer.object);
  _generate(mirror.value, observer.object, observer.patches, "", invertible);
  if (observer.patches.length) {
    applyPatch(mirror.value, observer.patches);
  }
  var temp = observer.patches;
  if (temp.length > 0) {
    observer.patches = [];
    if (observer.callback) {
      observer.callback(temp);
    }
  }
  return temp;
}
function _generate(mirror, obj, patches, path, invertible) {
  if (obj === mirror) {
    return;
  }
  if (typeof obj.toJSON === "function") {
    obj = obj.toJSON();
  }
  var newKeys = _objectKeys(obj);
  var oldKeys = _objectKeys(mirror);
  var changed = false;
  var deleted = false;
  for (var t2 = oldKeys.length - 1; t2 >= 0; t2--) {
    var key = oldKeys[t2];
    var oldVal = mirror[key];
    if (hasOwnProperty(obj, key) && !(obj[key] === void 0 && oldVal !== void 0 && Array.isArray(obj) === false)) {
      var newVal = obj[key];
      if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null && Array.isArray(oldVal) === Array.isArray(newVal)) {
        _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key), invertible);
      } else {
        if (oldVal !== newVal) {
          changed = true;
          if (invertible) {
            patches.push({ op: "test", path: path + "/" + escapePathComponent(key), value: _deepClone(oldVal) });
          }
          patches.push({ op: "replace", path: path + "/" + escapePathComponent(key), value: _deepClone(newVal) });
        }
      }
    } else if (Array.isArray(mirror) === Array.isArray(obj)) {
      if (invertible) {
        patches.push({ op: "test", path: path + "/" + escapePathComponent(key), value: _deepClone(oldVal) });
      }
      patches.push({ op: "remove", path: path + "/" + escapePathComponent(key) });
      deleted = true;
    } else {
      if (invertible) {
        patches.push({ op: "test", path, value: mirror });
      }
      patches.push({ op: "replace", path, value: obj });
      changed = true;
    }
  }
  if (!deleted && newKeys.length == oldKeys.length) {
    return;
  }
  for (var t2 = 0; t2 < newKeys.length; t2++) {
    var key = newKeys[t2];
    if (!hasOwnProperty(mirror, key) && obj[key] !== void 0) {
      patches.push({ op: "add", path: path + "/" + escapePathComponent(key), value: _deepClone(obj[key]) });
    }
  }
}
function compare(tree1, tree2, invertible) {
  if (invertible === void 0) {
    invertible = false;
  }
  var patches = [];
  _generate(tree1, tree2, patches, "", invertible);
  return patches;
}

// node_modules/fast-json-patch/index.mjs
var fast_json_patch_default = Object.assign({}, core_exports, duplex_exports, {
  JsonPatchError: PatchError,
  deepClone: _deepClone,
  escapePathComponent,
  unescapePathComponent
});

// node_modules/vega-embed/build/vega-embed.module.js
var import_json_stringify_pretty_compact = __toESM(require_json_stringify_pretty_compact());

// node_modules/vega-interpreter/build/vega-interpreter.module.js
function adjustSpatial(item, encode, swap) {
  let t2;
  if (encode.x2) {
    if (encode.x) {
      if (swap && item.x > item.x2) {
        t2 = item.x;
        item.x = item.x2;
        item.x2 = t2;
      }
      item.width = item.x2 - item.x;
    } else {
      item.x = item.x2 - (item.width || 0);
    }
  }
  if (encode.xc) {
    item.x = item.xc - (item.width || 0) / 2;
  }
  if (encode.y2) {
    if (encode.y) {
      if (swap && item.y > item.y2) {
        t2 = item.y;
        item.y = item.y2;
        item.y2 = t2;
      }
      item.height = item.y2 - item.y;
    } else {
      item.y = item.y2 - (item.height || 0);
    }
  }
  if (encode.yc) {
    item.y = item.yc - (item.height || 0) / 2;
  }
}
var Constants = {
  NaN: NaN,
  E: Math.E,
  LN2: Math.LN2,
  LN10: Math.LN10,
  LOG2E: Math.LOG2E,
  LOG10E: Math.LOG10E,
  PI: Math.PI,
  SQRT1_2: Math.SQRT1_2,
  SQRT2: Math.SQRT2,
  MIN_VALUE: Number.MIN_VALUE,
  MAX_VALUE: Number.MAX_VALUE
};
var Ops = {
  "*": (a, b) => a * b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
  ">": (a, b) => a > b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  ">=": (a, b) => a >= b,
  "==": (a, b) => a == b,
  "!=": (a, b) => a != b,
  "===": (a, b) => a === b,
  "!==": (a, b) => a !== b,
  "&": (a, b) => a & b,
  "|": (a, b) => a | b,
  "^": (a, b) => a ^ b,
  "<<": (a, b) => a << b,
  ">>": (a, b) => a >> b,
  ">>>": (a, b) => a >>> b
};
var Unary = {
  "+": (a) => +a,
  "-": (a) => -a,
  "~": (a) => ~a,
  "!": (a) => !a
};
var slice = Array.prototype.slice;
var apply = (m, args, cast) => {
  const obj = cast ? cast(args[0]) : args[0];
  return obj[m].apply(obj, slice.call(args, 1));
};
var datetime = (y, m, d, H, M, S, ms) => new Date(y, m || 0, d != null ? d : 1, H || 0, M || 0, S || 0, ms || 0);
var Functions = {
  // math functions
  isNaN: Number.isNaN,
  isFinite: Number.isFinite,
  abs: Math.abs,
  acos: Math.acos,
  asin: Math.asin,
  atan: Math.atan,
  atan2: Math.atan2,
  ceil: Math.ceil,
  cos: Math.cos,
  exp: Math.exp,
  floor: Math.floor,
  log: Math.log,
  max: Math.max,
  min: Math.min,
  pow: Math.pow,
  random: Math.random,
  round: Math.round,
  sin: Math.sin,
  sqrt: Math.sqrt,
  tan: Math.tan,
  clamp: (a, b, c) => Math.max(b, Math.min(c, a)),
  // date functions
  now: Date.now,
  utc: Date.UTC,
  datetime,
  date: (d) => new Date(d).getDate(),
  day: (d) => new Date(d).getDay(),
  year: (d) => new Date(d).getFullYear(),
  month: (d) => new Date(d).getMonth(),
  hours: (d) => new Date(d).getHours(),
  minutes: (d) => new Date(d).getMinutes(),
  seconds: (d) => new Date(d).getSeconds(),
  milliseconds: (d) => new Date(d).getMilliseconds(),
  time: (d) => new Date(d).getTime(),
  timezoneoffset: (d) => new Date(d).getTimezoneOffset(),
  utcdate: (d) => new Date(d).getUTCDate(),
  utcday: (d) => new Date(d).getUTCDay(),
  utcyear: (d) => new Date(d).getUTCFullYear(),
  utcmonth: (d) => new Date(d).getUTCMonth(),
  utchours: (d) => new Date(d).getUTCHours(),
  utcminutes: (d) => new Date(d).getUTCMinutes(),
  utcseconds: (d) => new Date(d).getUTCSeconds(),
  utcmilliseconds: (d) => new Date(d).getUTCMilliseconds(),
  // sequence functions
  length: (x) => x.length,
  join: function() {
    return apply("join", arguments);
  },
  indexof: function() {
    return apply("indexOf", arguments);
  },
  lastindexof: function() {
    return apply("lastIndexOf", arguments);
  },
  slice: function() {
    return apply("slice", arguments);
  },
  reverse: (x) => x.slice().reverse(),
  // string functions
  parseFloat,
  parseInt,
  upper: (x) => String(x).toUpperCase(),
  lower: (x) => String(x).toLowerCase(),
  substring: function() {
    return apply("substring", arguments, String);
  },
  split: function() {
    return apply("split", arguments, String);
  },
  replace: function() {
    return apply("replace", arguments, String);
  },
  trim: (x) => String(x).trim(),
  // regexp functions
  regexp: RegExp,
  test: (r, t2) => RegExp(r).test(t2)
};
var EventFunctions = ["view", "item", "group", "xy", "x", "y"];
var DisallowedMethods = /* @__PURE__ */ new Set([Function, eval, setTimeout, setInterval]);
if (typeof setImmediate === "function")
  DisallowedMethods.add(setImmediate);
var Visitors = {
  Literal: ($, n) => n.value,
  Identifier: ($, n) => {
    const id = n.name;
    return $.memberDepth > 0 ? id : id === "datum" ? $.datum : id === "event" ? $.event : id === "item" ? $.item : Constants[id] || $.params["$" + id];
  },
  MemberExpression: ($, n) => {
    const d = !n.computed, o = $(n.object);
    if (d)
      $.memberDepth += 1;
    const p = $(n.property);
    if (d)
      $.memberDepth -= 1;
    if (DisallowedMethods.has(o[p])) {
      console.error(`Prevented interpretation of member "${p}" which could lead to insecure code execution`);
      return;
    }
    return o[p];
  },
  CallExpression: ($, n) => {
    const args = n.arguments;
    let name4 = n.callee.name;
    if (name4.startsWith("_")) {
      name4 = name4.slice(1);
    }
    return name4 === "if" ? $(args[0]) ? $(args[1]) : $(args[2]) : ($.fn[name4] || Functions[name4]).apply($.fn, args.map($));
  },
  ArrayExpression: ($, n) => n.elements.map($),
  BinaryExpression: ($, n) => Ops[n.operator]($(n.left), $(n.right)),
  UnaryExpression: ($, n) => Unary[n.operator]($(n.argument)),
  ConditionalExpression: ($, n) => $(n.test) ? $(n.consequent) : $(n.alternate),
  LogicalExpression: ($, n) => n.operator === "&&" ? $(n.left) && $(n.right) : $(n.left) || $(n.right),
  ObjectExpression: ($, n) => n.properties.reduce((o, p) => {
    $.memberDepth += 1;
    const k = $(p.key);
    $.memberDepth -= 1;
    if (DisallowedMethods.has($(p.value))) {
      console.error(`Prevented interpretation of property "${k}" which could lead to insecure code execution`);
    } else {
      o[k] = $(p.value);
    }
    return o;
  }, {})
};
function interpret(ast, fn, params, datum, event, item) {
  const $ = (n) => Visitors[n.type]($, n);
  $.memberDepth = 0;
  $.fn = Object.create(fn);
  $.params = params;
  $.datum = datum;
  $.event = event;
  $.item = item;
  EventFunctions.forEach((f) => $.fn[f] = function() {
    return event.vega[f](...arguments);
  });
  return $(ast);
}
var expression = {
  /**
   * Parse an expression used to update an operator value.
   */
  operator(ctx, expr) {
    const ast = expr.ast, fn = ctx.functions;
    return (_) => interpret(ast, fn, _);
  },
  /**
   * Parse an expression provided as an operator parameter value.
   */
  parameter(ctx, expr) {
    const ast = expr.ast, fn = ctx.functions;
    return (datum, _) => interpret(ast, fn, _, datum);
  },
  /**
   * Parse an expression applied to an event stream.
   */
  event(ctx, expr) {
    const ast = expr.ast, fn = ctx.functions;
    return (event) => interpret(ast, fn, void 0, void 0, event);
  },
  /**
   * Parse an expression used to handle an event-driven operator update.
   */
  handler(ctx, expr) {
    const ast = expr.ast, fn = ctx.functions;
    return (_, event) => {
      const datum = event.item && event.item.datum;
      return interpret(ast, fn, _, datum, event);
    };
  },
  /**
   * Parse an expression that performs visual encoding.
   */
  encode(ctx, encode) {
    const {
      marktype,
      channels
    } = encode, fn = ctx.functions, swap = marktype === "group" || marktype === "image" || marktype === "rect";
    return (item, _) => {
      const datum = item.datum;
      let m = 0, v;
      for (const name4 in channels) {
        v = interpret(channels[name4].ast, fn, _, datum, void 0, item);
        if (item[name4] !== v) {
          item[name4] = v;
          m = 1;
        }
      }
      if (marktype !== "rule") {
        adjustSpatial(item, channels, swap);
      }
      return m;
    };
  }
};

// node_modules/vega-schema-url-parser/dist/parser.module.js
function e(e2) {
  const [n, r] = /schema\/([\w-]+)\/([\w\.\-]+)\.json$/g.exec(e2).slice(1, 3);
  return { library: n, version: r };
}
var parser_module_default = e;

// node_modules/vega-themes/build/vega-themes.module.js
var vega_themes_module_exports = {};
__export(vega_themes_module_exports, {
  carbong10: () => carbong10,
  carbong100: () => carbong100,
  carbong90: () => carbong90,
  carbonwhite: () => carbonwhite,
  dark: () => darkTheme,
  excel: () => excelTheme,
  fivethirtyeight: () => fiveThirtyEightTheme,
  ggplot2: () => ggplot2Theme,
  googlecharts: () => googlechartsTheme,
  latimes: () => latimesTheme,
  powerbi: () => powerbiTheme,
  quartz: () => quartzTheme,
  urbaninstitute: () => urbanInstituteTheme,
  version: () => version,
  vox: () => voxTheme
});
var name = "vega-themes";
var version$1 = "2.14.0";
var description = "Themes for stylized Vega and Vega-Lite visualizations.";
var keywords = ["vega", "vega-lite", "themes", "style"];
var license = "BSD-3-Clause";
var author = {
  name: "UW Interactive Data Lab",
  url: "https://idl.cs.washington.edu"
};
var contributors = [{
  name: "Emily Gu",
  url: "https://github.com/emilygu"
}, {
  name: "Arvind Satyanarayan",
  url: "http://arvindsatya.com"
}, {
  name: "Jeffrey Heer",
  url: "https://idl.cs.washington.edu"
}, {
  name: "Dominik Moritz",
  url: "https://www.domoritz.de"
}];
var main = "build/vega-themes.js";
var module = "build/vega-themes.module.js";
var unpkg = "build/vega-themes.min.js";
var jsdelivr = "build/vega-themes.min.js";
var types = "build/vega-themes.module.d.ts";
var repository = {
  type: "git",
  url: "https://github.com/vega/vega-themes.git"
};
var files = ["src", "build"];
var scripts = {
  prebuild: "yarn clean",
  build: "rollup -c",
  clean: "rimraf build && rimraf examples/build",
  "copy:data": "rsync -r node_modules/vega-datasets/data/* examples/data",
  "copy:build": "rsync -r build/* examples/build",
  "deploy:gh": "yarn build && mkdir -p examples/build && rsync -r build/* examples/build && gh-pages -d examples",
  preversion: "yarn lint",
  serve: "browser-sync start -s -f build examples --serveStatic examples",
  start: "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
  format: "eslint . --fix",
  lint: "eslint .",
  release: "release-it"
};
var devDependencies = {
  "@babel/core": "^7.22.9",
  "@babel/plugin-proposal-async-generator-functions": "^7.20.7",
  "@babel/plugin-proposal-json-strings": "^7.18.6",
  "@babel/plugin-proposal-object-rest-spread": "^7.20.7",
  "@babel/plugin-proposal-optional-catch-binding": "^7.18.6",
  "@babel/plugin-transform-runtime": "^7.22.9",
  "@babel/preset-env": "^7.22.9",
  "@babel/preset-typescript": "^7.22.5",
  "@release-it/conventional-changelog": "^7.0.0",
  "@rollup/plugin-json": "^6.0.0",
  "@rollup/plugin-node-resolve": "^15.1.0",
  "@rollup/plugin-terser": "^0.4.3",
  "@typescript-eslint/eslint-plugin": "^6.0.0",
  "@typescript-eslint/parser": "^6.0.0",
  "browser-sync": "^2.29.3",
  concurrently: "^8.2.0",
  eslint: "^8.45.0",
  "eslint-config-prettier": "^8.8.0",
  "eslint-plugin-prettier": "^5.0.0",
  "gh-pages": "^5.0.0",
  prettier: "^3.0.0",
  "release-it": "^16.1.0",
  rollup: "^3.26.2",
  "rollup-plugin-bundle-size": "^1.0.3",
  "rollup-plugin-ts": "^3.2.0",
  typescript: "^5.1.6",
  vega: "^5.25.0",
  "vega-lite": "^5.9.3"
};
var peerDependencies = {
  vega: "*",
  "vega-lite": "*"
};
var dependencies = {};
var pkg = {
  name,
  version: version$1,
  description,
  keywords,
  license,
  author,
  contributors,
  main,
  module,
  unpkg,
  jsdelivr,
  types,
  repository,
  files,
  scripts,
  devDependencies,
  peerDependencies,
  dependencies
};
var lightColor = "#fff";
var medColor = "#888";
var darkTheme = {
  background: "#333",
  view: {
    stroke: medColor
  },
  title: {
    color: lightColor,
    subtitleColor: lightColor
  },
  style: {
    "guide-label": {
      fill: lightColor
    },
    "guide-title": {
      fill: lightColor
    }
  },
  axis: {
    domainColor: lightColor,
    gridColor: medColor,
    tickColor: lightColor
  }
};
var markColor$7 = "#4572a7";
var excelTheme = {
  background: "#fff",
  arc: {
    fill: markColor$7
  },
  area: {
    fill: markColor$7
  },
  line: {
    stroke: markColor$7,
    strokeWidth: 2
  },
  path: {
    stroke: markColor$7
  },
  rect: {
    fill: markColor$7
  },
  shape: {
    stroke: markColor$7
  },
  symbol: {
    fill: markColor$7,
    strokeWidth: 1.5,
    size: 50
  },
  axis: {
    bandPosition: 0.5,
    grid: true,
    gridColor: "#000000",
    gridOpacity: 1,
    gridWidth: 0.5,
    labelPadding: 10,
    tickSize: 5,
    tickWidth: 0.5
  },
  axisBand: {
    grid: false,
    tickExtra: true
  },
  legend: {
    labelBaseline: "middle",
    labelFontSize: 11,
    symbolSize: 50,
    symbolType: "square"
  },
  range: {
    category: ["#4572a7", "#aa4643", "#8aa453", "#71598e", "#4598ae", "#d98445", "#94aace", "#d09393", "#b9cc98", "#a99cbc"]
  }
};
var markColor$6 = "#30a2da";
var axisColor$2 = "#cbcbcb";
var guideLabelColor = "#999";
var guideTitleColor = "#333";
var backgroundColor$2 = "#f0f0f0";
var blackTitle = "#333";
var fiveThirtyEightTheme = {
  arc: {
    fill: markColor$6
  },
  area: {
    fill: markColor$6
  },
  axis: {
    domainColor: axisColor$2,
    grid: true,
    gridColor: axisColor$2,
    gridWidth: 1,
    labelColor: guideLabelColor,
    labelFontSize: 10,
    titleColor: guideTitleColor,
    tickColor: axisColor$2,
    tickSize: 10,
    titleFontSize: 14,
    titlePadding: 10,
    labelPadding: 4
  },
  axisBand: {
    grid: false
  },
  background: backgroundColor$2,
  group: {
    fill: backgroundColor$2
  },
  legend: {
    labelColor: blackTitle,
    labelFontSize: 11,
    padding: 1,
    symbolSize: 30,
    symbolType: "square",
    titleColor: blackTitle,
    titleFontSize: 14,
    titlePadding: 10
  },
  line: {
    stroke: markColor$6,
    strokeWidth: 2
  },
  path: {
    stroke: markColor$6,
    strokeWidth: 0.5
  },
  rect: {
    fill: markColor$6
  },
  range: {
    category: ["#30a2da", "#fc4f30", "#e5ae38", "#6d904f", "#8b8b8b", "#b96db8", "#ff9e27", "#56cc60", "#52d2ca", "#52689e", "#545454", "#9fe4f8"],
    diverging: ["#cc0020", "#e77866", "#f6e7e1", "#d6e8ed", "#91bfd9", "#1d78b5"],
    heatmap: ["#d6e8ed", "#cee0e5", "#91bfd9", "#549cc6", "#1d78b5"]
  },
  point: {
    filled: true,
    shape: "circle"
  },
  shape: {
    stroke: markColor$6
  },
  bar: {
    binSpacing: 2,
    fill: markColor$6,
    stroke: null
  },
  title: {
    anchor: "start",
    fontSize: 24,
    fontWeight: 600,
    offset: 20
  }
};
var markColor$5 = "#000";
var ggplot2Theme = {
  group: {
    fill: "#e5e5e5"
  },
  arc: {
    fill: markColor$5
  },
  area: {
    fill: markColor$5
  },
  line: {
    stroke: markColor$5
  },
  path: {
    stroke: markColor$5
  },
  rect: {
    fill: markColor$5
  },
  shape: {
    stroke: markColor$5
  },
  symbol: {
    fill: markColor$5,
    size: 40
  },
  axis: {
    domain: false,
    grid: true,
    gridColor: "#FFFFFF",
    gridOpacity: 1,
    labelColor: "#7F7F7F",
    labelPadding: 4,
    tickColor: "#7F7F7F",
    tickSize: 5.67,
    titleFontSize: 16,
    titleFontWeight: "normal"
  },
  legend: {
    labelBaseline: "middle",
    labelFontSize: 11,
    symbolSize: 40
  },
  range: {
    category: ["#000000", "#7F7F7F", "#1A1A1A", "#999999", "#333333", "#B0B0B0", "#4D4D4D", "#C9C9C9", "#666666", "#DCDCDC"]
  }
};
var headlineFontSize = 22;
var headlineFontWeight = "normal";
var labelFont$1 = "Benton Gothic, sans-serif";
var labelFontSize = 11.5;
var labelFontWeight = "normal";
var markColor$4 = "#82c6df";
var titleFont = "Benton Gothic Bold, sans-serif";
var titleFontWeight = "normal";
var titleFontSize$1 = 13;
var colorSchemes$1 = {
  "category-6": ["#ec8431", "#829eb1", "#c89d29", "#3580b1", "#adc839", "#ab7fb4"],
  "fire-7": ["#fbf2c7", "#f9e39c", "#f8d36e", "#f4bb6a", "#e68a4f", "#d15a40", "#ab4232"],
  "fireandice-6": ["#e68a4f", "#f4bb6a", "#f9e39c", "#dadfe2", "#a6b7c6", "#849eae"],
  "ice-7": ["#edefee", "#dadfe2", "#c4ccd2", "#a6b7c6", "#849eae", "#607785", "#47525d"]
};
var latimesTheme = {
  background: "#ffffff",
  title: {
    anchor: "start",
    color: "#000000",
    font: titleFont,
    fontSize: headlineFontSize,
    fontWeight: headlineFontWeight
  },
  arc: {
    fill: markColor$4
  },
  area: {
    fill: markColor$4
  },
  line: {
    stroke: markColor$4,
    strokeWidth: 2
  },
  path: {
    stroke: markColor$4
  },
  rect: {
    fill: markColor$4
  },
  shape: {
    stroke: markColor$4
  },
  symbol: {
    fill: markColor$4,
    size: 30
  },
  axis: {
    labelFont: labelFont$1,
    labelFontSize,
    labelFontWeight,
    titleFont,
    titleFontSize: titleFontSize$1,
    titleFontWeight
  },
  axisX: {
    labelAngle: 0,
    labelPadding: 4,
    tickSize: 3
  },
  axisY: {
    labelBaseline: "middle",
    maxExtent: 45,
    minExtent: 45,
    tickSize: 2,
    titleAlign: "left",
    titleAngle: 0,
    titleX: -45,
    titleY: -11
  },
  legend: {
    labelFont: labelFont$1,
    labelFontSize,
    symbolType: "square",
    titleFont,
    titleFontSize: titleFontSize$1,
    titleFontWeight
  },
  range: {
    category: colorSchemes$1["category-6"],
    diverging: colorSchemes$1["fireandice-6"],
    heatmap: colorSchemes$1["fire-7"],
    ordinal: colorSchemes$1["fire-7"],
    ramp: colorSchemes$1["fire-7"]
  }
};
var markColor$3 = "#ab5787";
var axisColor$1 = "#979797";
var quartzTheme = {
  background: "#f9f9f9",
  arc: {
    fill: markColor$3
  },
  area: {
    fill: markColor$3
  },
  line: {
    stroke: markColor$3
  },
  path: {
    stroke: markColor$3
  },
  rect: {
    fill: markColor$3
  },
  shape: {
    stroke: markColor$3
  },
  symbol: {
    fill: markColor$3,
    size: 30
  },
  axis: {
    domainColor: axisColor$1,
    domainWidth: 0.5,
    gridWidth: 0.2,
    labelColor: axisColor$1,
    tickColor: axisColor$1,
    tickWidth: 0.2,
    titleColor: axisColor$1
  },
  axisBand: {
    grid: false
  },
  axisX: {
    grid: true,
    tickSize: 10
  },
  axisY: {
    domain: false,
    grid: true,
    tickSize: 0
  },
  legend: {
    labelFontSize: 11,
    padding: 1,
    symbolSize: 30,
    symbolType: "square"
  },
  range: {
    category: ["#ab5787", "#51b2e5", "#703c5c", "#168dd9", "#d190b6", "#00609f", "#d365ba", "#154866", "#666666", "#c4c4c4"]
  }
};
var markColor$2 = "#3e5c69";
var voxTheme = {
  background: "#fff",
  arc: {
    fill: markColor$2
  },
  area: {
    fill: markColor$2
  },
  line: {
    stroke: markColor$2
  },
  path: {
    stroke: markColor$2
  },
  rect: {
    fill: markColor$2
  },
  shape: {
    stroke: markColor$2
  },
  symbol: {
    fill: markColor$2
  },
  axis: {
    domainWidth: 0.5,
    grid: true,
    labelPadding: 2,
    tickSize: 5,
    tickWidth: 0.5,
    titleFontWeight: "normal"
  },
  axisBand: {
    grid: false
  },
  axisX: {
    gridWidth: 0.2
  },
  axisY: {
    gridDash: [3],
    gridWidth: 0.4
  },
  legend: {
    labelFontSize: 11,
    padding: 1,
    symbolType: "square"
  },
  range: {
    category: ["#3e5c69", "#6793a6", "#182429", "#0570b0", "#3690c0", "#74a9cf", "#a6bddb", "#e2ddf2"]
  }
};
var markColor$1 = "#1696d2";
var axisColor = "#000000";
var backgroundColor$1 = "#FFFFFF";
var font = "Lato";
var labelFont = "Lato";
var sourceFont = "Lato";
var gridColor$1 = "#DEDDDD";
var titleFontSize = 18;
var colorSchemes = {
  "main-colors": ["#1696d2", "#d2d2d2", "#000000", "#fdbf11", "#ec008b", "#55b748", "#5c5859", "#db2b27"],
  "shades-blue": ["#CFE8F3", "#A2D4EC", "#73BFE2", "#46ABDB", "#1696D2", "#12719E", "#0A4C6A", "#062635"],
  "shades-gray": ["#F5F5F5", "#ECECEC", "#E3E3E3", "#DCDBDB", "#D2D2D2", "#9D9D9D", "#696969", "#353535"],
  "shades-yellow": ["#FFF2CF", "#FCE39E", "#FDD870", "#FCCB41", "#FDBF11", "#E88E2D", "#CA5800", "#843215"],
  "shades-magenta": ["#F5CBDF", "#EB99C2", "#E46AA7", "#E54096", "#EC008B", "#AF1F6B", "#761548", "#351123"],
  "shades-green": ["#DCEDD9", "#BCDEB4", "#98CF90", "#78C26D", "#55B748", "#408941", "#2C5C2D", "#1A2E19"],
  "shades-black": ["#D5D5D4", "#ADABAC", "#848081", "#5C5859", "#332D2F", "#262223", "#1A1717", "#0E0C0D"],
  "shades-red": ["#F8D5D4", "#F1AAA9", "#E9807D", "#E25552", "#DB2B27", "#A4201D", "#6E1614", "#370B0A"],
  "one-group": ["#1696d2", "#000000"],
  "two-groups-cat-1": ["#1696d2", "#000000"],
  "two-groups-cat-2": ["#1696d2", "#fdbf11"],
  "two-groups-cat-3": ["#1696d2", "#db2b27"],
  "two-groups-seq": ["#a2d4ec", "#1696d2"],
  "three-groups-cat": ["#1696d2", "#fdbf11", "#000000"],
  "three-groups-seq": ["#a2d4ec", "#1696d2", "#0a4c6a"],
  "four-groups-cat-1": ["#000000", "#d2d2d2", "#fdbf11", "#1696d2"],
  "four-groups-cat-2": ["#1696d2", "#ec0008b", "#fdbf11", "#5c5859"],
  "four-groups-seq": ["#cfe8f3", "#73bf42", "#1696d2", "#0a4c6a"],
  "five-groups-cat-1": ["#1696d2", "#fdbf11", "#d2d2d2", "#ec008b", "#000000"],
  "five-groups-cat-2": ["#1696d2", "#0a4c6a", "#d2d2d2", "#fdbf11", "#332d2f"],
  "five-groups-seq": ["#cfe8f3", "#73bf42", "#1696d2", "#0a4c6a", "#000000"],
  "six-groups-cat-1": ["#1696d2", "#ec008b", "#fdbf11", "#000000", "#d2d2d2", "#55b748"],
  "six-groups-cat-2": ["#1696d2", "#d2d2d2", "#ec008b", "#fdbf11", "#332d2f", "#0a4c6a"],
  "six-groups-seq": ["#cfe8f3", "#a2d4ec", "#73bfe2", "#46abdb", "#1696d2", "#12719e"],
  "diverging-colors": ["#ca5800", "#fdbf11", "#fdd870", "#fff2cf", "#cfe8f3", "#73bfe2", "#1696d2", "#0a4c6a"]
};
var urbanInstituteTheme = {
  background: backgroundColor$1,
  title: {
    anchor: "start",
    fontSize: titleFontSize,
    font
  },
  axisX: {
    domain: true,
    domainColor: axisColor,
    domainWidth: 1,
    grid: false,
    labelFontSize: 12,
    labelFont,
    labelAngle: 0,
    tickColor: axisColor,
    tickSize: 5,
    titleFontSize: 12,
    titlePadding: 10,
    titleFont: font
  },
  axisY: {
    domain: false,
    domainWidth: 1,
    grid: true,
    gridColor: gridColor$1,
    gridWidth: 1,
    labelFontSize: 12,
    labelFont,
    labelPadding: 8,
    ticks: false,
    titleFontSize: 12,
    titlePadding: 10,
    titleFont: font,
    titleAngle: 0,
    titleY: -10,
    titleX: 18
  },
  legend: {
    labelFontSize: 12,
    labelFont,
    symbolSize: 100,
    titleFontSize: 12,
    titlePadding: 10,
    titleFont: font,
    orient: "right",
    offset: 10
  },
  view: {
    stroke: "transparent"
  },
  range: {
    category: colorSchemes["six-groups-cat-1"],
    diverging: colorSchemes["diverging-colors"],
    heatmap: colorSchemes["diverging-colors"],
    ordinal: colorSchemes["six-groups-seq"],
    ramp: colorSchemes["shades-blue"]
  },
  area: {
    fill: markColor$1
  },
  rect: {
    fill: markColor$1
  },
  line: {
    color: markColor$1,
    stroke: markColor$1,
    strokeWidth: 5
  },
  trail: {
    color: markColor$1,
    stroke: markColor$1,
    strokeWidth: 0,
    size: 1
  },
  path: {
    stroke: markColor$1,
    strokeWidth: 0.5
  },
  point: {
    filled: true
  },
  text: {
    font: sourceFont,
    color: markColor$1,
    fontSize: 11,
    align: "center",
    fontWeight: 400,
    size: 11
  },
  style: {
    bar: {
      fill: markColor$1,
      stroke: null
    }
  },
  arc: {
    fill: markColor$1
  },
  shape: {
    stroke: markColor$1
  },
  symbol: {
    fill: markColor$1,
    size: 30
  }
};
var markColor = "#3366CC";
var gridColor = "#ccc";
var defaultFont$1 = "Arial, sans-serif";
var googlechartsTheme = {
  arc: {
    fill: markColor
  },
  area: {
    fill: markColor
  },
  path: {
    stroke: markColor
  },
  rect: {
    fill: markColor
  },
  shape: {
    stroke: markColor
  },
  symbol: {
    stroke: markColor
  },
  circle: {
    fill: markColor
  },
  background: "#fff",
  padding: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  },
  style: {
    "guide-label": {
      font: defaultFont$1,
      fontSize: 12
    },
    "guide-title": {
      font: defaultFont$1,
      fontSize: 12
    },
    "group-title": {
      font: defaultFont$1,
      fontSize: 12
    }
  },
  title: {
    font: defaultFont$1,
    fontSize: 14,
    fontWeight: "bold",
    dy: -3,
    anchor: "start"
  },
  axis: {
    gridColor,
    tickColor: gridColor,
    domain: false,
    grid: true
  },
  range: {
    category: ["#4285F4", "#DB4437", "#F4B400", "#0F9D58", "#AB47BC", "#00ACC1", "#FF7043", "#9E9D24", "#5C6BC0", "#F06292", "#00796B", "#C2185B"],
    heatmap: ["#c6dafc", "#5e97f6", "#2a56c6"]
  }
};
var ptToPx = (value) => value * (1 / 3 + 1);
var fontSmallPx = ptToPx(9);
var legendFontPx = ptToPx(10);
var fontLargePx = ptToPx(12);
var fontStandard = "Segoe UI";
var fontTitle = "wf_standard-font, helvetica, arial, sans-serif";
var firstLevelElementColor = "#252423";
var secondLevelElementColor = "#605E5C";
var backgroundColor = "transparent";
var backgroundSecondaryColor = "#C8C6C4";
var paletteColor1 = "#118DFF";
var paletteColor2 = "#12239E";
var paletteColor3 = "#E66C37";
var paletteColor4 = "#6B007B";
var paletteColor5 = "#E044A7";
var paletteColor6 = "#744EC2";
var paletteColor7 = "#D9B300";
var paletteColor8 = "#D64550";
var divergentColorMax = paletteColor1;
var divergentColorMin = "#DEEFFF";
var divergentPalette = [divergentColorMin, divergentColorMax];
var ordinalPalette = [divergentColorMin, "#c7e4ff", "#b0d9ff", "#9aceff", "#83c3ff", "#6cb9ff", "#55aeff", "#3fa3ff", "#2898ff", divergentColorMax];
var powerbiTheme = {
  view: {
    stroke: backgroundColor
  },
  background: backgroundColor,
  font: fontStandard,
  header: {
    titleFont: fontTitle,
    titleFontSize: fontLargePx,
    titleColor: firstLevelElementColor,
    labelFont: fontStandard,
    labelFontSize: legendFontPx,
    labelColor: secondLevelElementColor
  },
  axis: {
    ticks: false,
    grid: false,
    domain: false,
    labelColor: secondLevelElementColor,
    labelFontSize: fontSmallPx,
    titleFont: fontTitle,
    titleColor: firstLevelElementColor,
    titleFontSize: fontLargePx,
    titleFontWeight: "normal"
  },
  axisQuantitative: {
    tickCount: 3,
    grid: true,
    gridColor: backgroundSecondaryColor,
    gridDash: [1, 5],
    labelFlush: false
  },
  axisBand: {
    tickExtra: true
  },
  axisX: {
    labelPadding: 5
  },
  axisY: {
    labelPadding: 10
  },
  bar: {
    fill: paletteColor1
  },
  line: {
    stroke: paletteColor1,
    strokeWidth: 3,
    strokeCap: "round",
    strokeJoin: "round"
  },
  text: {
    font: fontStandard,
    fontSize: fontSmallPx,
    fill: secondLevelElementColor
  },
  arc: {
    fill: paletteColor1
  },
  area: {
    fill: paletteColor1,
    line: true,
    opacity: 0.6
  },
  path: {
    stroke: paletteColor1
  },
  rect: {
    fill: paletteColor1
  },
  point: {
    fill: paletteColor1,
    filled: true,
    size: 75
  },
  shape: {
    stroke: paletteColor1
  },
  symbol: {
    fill: paletteColor1,
    strokeWidth: 1.5,
    size: 50
  },
  legend: {
    titleFont: fontStandard,
    titleFontWeight: "bold",
    titleColor: secondLevelElementColor,
    labelFont: fontStandard,
    labelFontSize: legendFontPx,
    labelColor: secondLevelElementColor,
    symbolType: "circle",
    symbolSize: 75
  },
  range: {
    category: [paletteColor1, paletteColor2, paletteColor3, paletteColor4, paletteColor5, paletteColor6, paletteColor7, paletteColor8],
    diverging: divergentPalette,
    heatmap: divergentPalette,
    ordinal: ordinalPalette
  }
};
var defaultFont = 'IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".sfnstext-regular",sans-serif';
var fontWeight = 400;
var darkCategories = ["#8a3ffc", "#33b1ff", "#007d79", "#ff7eb6", "#fa4d56", "#fff1f1", "#6fdc8c", "#4589ff", "#d12771", "#d2a106", "#08bdba", "#bae6ff", "#ba4e00", "#d4bbff"];
var lightCategories = ["#6929c4", "#1192e8", "#005d5d", "#9f1853", "#fa4d56", "#570408", "#198038", "#002d9c", "#ee538b", "#b28600", "#009d9a", "#012749", "#8a3800", "#a56eff"];
function genCarbonConfig({
  type,
  background
}) {
  const viewbg = type === "dark" ? "#161616" : "#ffffff";
  const textColor = type === "dark" ? "#f4f4f4" : "#161616";
  const category = type === "dark" ? darkCategories : lightCategories;
  const markColor2 = type === "dark" ? "#d4bbff" : "#6929c4";
  return {
    background,
    arc: {
      fill: markColor2
    },
    area: {
      fill: markColor2
    },
    path: {
      stroke: markColor2
    },
    rect: {
      fill: markColor2
    },
    shape: {
      stroke: markColor2
    },
    symbol: {
      stroke: markColor2
    },
    circle: {
      fill: markColor2
    },
    view: {
      fill: viewbg,
      stroke: viewbg
    },
    group: {
      fill: viewbg
    },
    title: {
      color: textColor,
      anchor: "start",
      dy: -15,
      fontSize: 16,
      font: defaultFont,
      fontWeight: 600
    },
    axis: {
      labelColor: textColor,
      labelFontSize: 12,
      grid: true,
      gridColor: "#525252",
      titleColor: textColor,
      labelAngle: 0
    },
    style: {
      "guide-label": {
        font: defaultFont,
        fill: textColor,
        fontWeight
      },
      "guide-title": {
        font: defaultFont,
        fill: textColor,
        fontWeight
      }
    },
    range: {
      category,
      diverging: ["#750e13", "#a2191f", "#da1e28", "#fa4d56", "#ff8389", "#ffb3b8", "#ffd7d9", "#fff1f1", "#e5f6ff", "#bae6ff", "#82cfff", "#33b1ff", "#1192e8", "#0072c3", "#00539a", "#003a6d"],
      heatmap: ["#f6f2ff", "#e8daff", "#d4bbff", "#be95ff", "#a56eff", "#8a3ffc", "#6929c4", "#491d8b", "#31135e", "#1c0f30"]
    }
  };
}
var carbonwhite = genCarbonConfig({
  type: "light",
  background: "#ffffff"
});
var carbong10 = genCarbonConfig({
  type: "light",
  background: "#f4f4f4"
});
var carbong90 = genCarbonConfig({
  type: "dark",
  background: "#262626"
});
var carbong100 = genCarbonConfig({
  type: "dark",
  background: "#161616"
});
var version = pkg.version;

// node_modules/vega-tooltip/build/vega-tooltip.module.js
var name2 = "vega-tooltip";
var version$12 = "0.34.0";
var description2 = "A tooltip plugin for Vega-Lite and Vega visualizations.";
var keywords2 = ["vega-lite", "vega", "tooltip"];
var repository2 = {
  type: "git",
  url: "https://github.com/vega/vega-tooltip.git"
};
var author2 = {
  name: "UW Interactive Data Lab",
  url: "https://idl.cs.washington.edu"
};
var collaborators = ["Dominik Moritz", "Sira Horradarn", "Zening Qu", "Kanit Wongsuphasawat", "Yuri Astrakhan", "Jeffrey Heer"];
var license2 = "BSD-3-Clause";
var bugs = {
  url: "https://github.com/vega/vega-tooltip/issues"
};
var homepage = "https://github.com/vega/vega-tooltip#readme";
var main2 = "build/vega-tooltip.js";
var module2 = "build/vega-tooltip.module.js";
var unpkg2 = "build/vega-tooltip.min.js";
var jsdelivr2 = "build/vega-tooltip.min.js";
var types2 = "build/vega-tooltip.module.d.ts";
var files2 = ["src", "build", "types"];
var scripts2 = {
  prebuild: "yarn clean && yarn build:style",
  build: "rollup -c",
  "build:style": "./build-style.sh",
  clean: "rimraf build && rimraf src/style.ts",
  "copy:data": "rsync -r node_modules/vega-datasets/data/* examples/data",
  "copy:build": "rsync -r build/* examples/build",
  "deploy:gh": "yarn build && yarn copy:build && gh-pages -d examples && yarn clean",
  prepublishOnly: "yarn clean && yarn build",
  preversion: "yarn lint && yarn test",
  serve: "browser-sync start -s -f build examples --serveStatic examples",
  start: "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
  pretest: "yarn build:style",
  test: "jest",
  "test:inspect": "node --inspect-brk ./node_modules/.bin/jest --runInBand",
  prepare: "yarn copy:data",
  prettierbase: "prettier '*.{css,scss,html}'",
  format: "eslint . --fix && yarn prettierbase --write",
  lint: "eslint . && yarn prettierbase --check",
  release: "release-it"
};
var devDependencies2 = {
  "@babel/core": "^7.22.10",
  "@babel/plugin-proposal-async-generator-functions": "^7.20.7",
  "@babel/plugin-proposal-json-strings": "^7.18.6",
  "@babel/plugin-proposal-object-rest-spread": "^7.20.7",
  "@babel/plugin-proposal-optional-catch-binding": "^7.18.6",
  "@babel/plugin-transform-runtime": "^7.22.10",
  "@babel/preset-env": "^7.22.10",
  "@babel/preset-typescript": "^7.22.5",
  "@release-it/conventional-changelog": "^7.0.0",
  "@rollup/plugin-json": "^6.0.0",
  "@rollup/plugin-node-resolve": "^15.1.0",
  "@rollup/plugin-terser": "^0.4.3",
  "@types/jest": "^29.5.3",
  "@typescript-eslint/eslint-plugin": "^6.3.0",
  "@typescript-eslint/parser": "^6.3.0",
  "browser-sync": "^2.29.3",
  concurrently: "^8.2.0",
  eslint: "^8.46.0",
  "eslint-config-prettier": "^9.0.0",
  "eslint-plugin-jest": "^27.2.3",
  "eslint-plugin-prettier": "^5.0.0",
  "gh-pages": "^6.1.0",
  jest: "^29.6.2",
  "jest-environment-jsdom": "^29.6.2",
  path: "^0.12.7",
  prettier: "^3.0.1",
  "release-it": "^16.1.3",
  rollup: "^4.6.1",
  "rollup-plugin-bundle-size": "^1.0.3",
  "rollup-plugin-ts": "^3.4.3",
  sass: "^1.64.2",
  typescript: "~5.3.2",
  "vega-datasets": "^2.7.0",
  "vega-typings": "^0.24.2"
};
var dependencies2 = {
  "vega-util": "^1.17.2"
};
var pkg2 = {
  name: name2,
  version: version$12,
  description: description2,
  keywords: keywords2,
  repository: repository2,
  author: author2,
  collaborators,
  license: license2,
  bugs,
  homepage,
  main: main2,
  module: module2,
  unpkg: unpkg2,
  jsdelivr: jsdelivr2,
  types: types2,
  files: files2,
  scripts: scripts2,
  devDependencies: devDependencies2,
  dependencies: dependencies2
};
function formatValue(value, valueToHtml, maxDepth, baseURL) {
  if (isArray(value)) {
    return `[${value.map((v) => valueToHtml(isString(v) ? v : stringify(v, maxDepth))).join(", ")}]`;
  }
  if (isObject(value)) {
    let content = "";
    const {
      title,
      image,
      ...rest
    } = value;
    if (title) {
      content += `<h2>${valueToHtml(title)}</h2>`;
    }
    if (image) {
      content += `<img src="${new URL(valueToHtml(image), baseURL || location.href).href}">`;
    }
    const keys = Object.keys(rest);
    if (keys.length > 0) {
      content += "<table>";
      for (const key of keys) {
        let val = rest[key];
        if (val === void 0) {
          continue;
        }
        if (isObject(val)) {
          val = stringify(val, maxDepth);
        }
        content += `<tr><td class="key">${valueToHtml(key)}</td><td class="value">${valueToHtml(val)}</td></tr>`;
      }
      content += `</table>`;
    }
    return content || "{}";
  }
  return valueToHtml(value);
}
function replacer(maxDepth) {
  const stack = [];
  return function(key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    const pos = stack.indexOf(this) + 1;
    stack.length = pos;
    if (stack.length > maxDepth) {
      return "[Object]";
    }
    if (stack.indexOf(value) >= 0) {
      return "[Circular]";
    }
    stack.push(value);
    return value;
  };
}
function stringify(obj, maxDepth) {
  return JSON.stringify(obj, replacer(maxDepth));
}
var defaultStyle = `#vg-tooltip-element {
  visibility: hidden;
  padding: 8px;
  position: fixed;
  z-index: 1000;
  font-family: sans-serif;
  font-size: 11px;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  /* The default theme is the light theme. */
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid #d9d9d9;
  color: black;
}
#vg-tooltip-element.visible {
  visibility: visible;
}
#vg-tooltip-element h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 13px;
}
#vg-tooltip-element table {
  border-spacing: 0;
}
#vg-tooltip-element table tr {
  border: none;
}
#vg-tooltip-element table tr td {
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 2px;
  padding-bottom: 2px;
}
#vg-tooltip-element table tr td.key {
  color: #808080;
  max-width: 150px;
  text-align: right;
  padding-right: 4px;
}
#vg-tooltip-element table tr td.value {
  display: block;
  max-width: 300px;
  max-height: 7em;
  text-align: left;
}
#vg-tooltip-element.dark-theme {
  background-color: rgba(32, 32, 32, 0.9);
  border: 1px solid #f5f5f5;
  color: white;
}
#vg-tooltip-element.dark-theme td.key {
  color: #bfbfbf;
}
`;
var EL_ID = "vg-tooltip-element";
var DEFAULT_OPTIONS = {
  /**
   * X offset.
   */
  offsetX: 10,
  /**
   * Y offset.
   */
  offsetY: 10,
  /**
   * ID of the tooltip element.
   */
  id: EL_ID,
  /**
   * ID of the tooltip CSS style.
   */
  styleId: "vega-tooltip-style",
  /**
   * The name of the theme. You can use the CSS class called [THEME]-theme to style the tooltips.
   *
   * There are two predefined themes: "light" (default) and "dark".
   */
  theme: "light",
  /**
   * Do not use the default styles provided by Vega Tooltip. If you enable this option, you need to use your own styles. It is not necessary to disable the default style when using a custom theme.
   */
  disableDefaultStyle: false,
  /**
   * HTML sanitizer function that removes dangerous HTML to prevent XSS.
   *
   * This should be a function from string to string. You may replace it with a formatter such as a markdown formatter.
   */
  sanitize: escapeHTML,
  /**
   * The maximum recursion depth when printing objects in the tooltip.
   */
  maxDepth: 2,
  /**
   * A function to customize the rendered HTML of the tooltip.
   * @param value A value string, or object of value strings keyed by field
   * @param sanitize The `sanitize` function from `options.sanitize`
   * @param baseURL The `baseURL` from `options.baseURL`
   * @returns {string} The returned string will become the `innerHTML` of the tooltip element
   */
  formatTooltip: formatValue,
  /**
   * The baseurl to use in image paths.
   */
  baseURL: ""
};
function escapeHTML(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;");
}
function createDefaultStyle(id) {
  if (!/^[A-Za-z]+[-:.\w]*$/.test(id)) {
    throw new Error("Invalid HTML ID");
  }
  return defaultStyle.toString().replace(EL_ID, id);
}
function calculatePosition(event, tooltipBox, offsetX, offsetY) {
  let x = event.clientX + offsetX;
  if (x + tooltipBox.width > window.innerWidth) {
    x = +event.clientX - offsetX - tooltipBox.width;
  }
  let y = event.clientY + offsetY;
  if (y + tooltipBox.height > window.innerHeight) {
    y = +event.clientY - offsetY - tooltipBox.height;
  }
  return {
    x,
    y
  };
}
var Handler = class {
  /**
   * The handler function. We bind this to this function in the constructor.
   */
  /**
   * Complete tooltip options.
   */
  /**
   * The tooltip html element.
   */
  /**
   * Create the tooltip handler and initialize the element and style.
   *
   * @param options Tooltip Options
   */
  constructor(options) {
    this.options = {
      ...DEFAULT_OPTIONS,
      ...options
    };
    const elementId = this.options.id;
    this.el = null;
    this.call = this.tooltipHandler.bind(this);
    if (!this.options.disableDefaultStyle && !document.getElementById(this.options.styleId)) {
      const style = document.createElement("style");
      style.setAttribute("id", this.options.styleId);
      style.innerHTML = createDefaultStyle(elementId);
      const head = document.head;
      if (head.childNodes.length > 0) {
        head.insertBefore(style, head.childNodes[0]);
      } else {
        head.appendChild(style);
      }
    }
  }
  /**
   * The tooltip handler function.
   */
  tooltipHandler(handler, event, item, value) {
    this.el = document.getElementById(this.options.id);
    if (!this.el) {
      this.el = document.createElement("div");
      this.el.setAttribute("id", this.options.id);
      this.el.classList.add("vg-tooltip");
      const tooltipContainer = document.fullscreenElement ?? document.body;
      tooltipContainer.appendChild(this.el);
    }
    if (value == null || value === "") {
      this.el.classList.remove("visible", `${this.options.theme}-theme`);
      return;
    }
    this.el.innerHTML = this.options.formatTooltip(value, this.options.sanitize, this.options.maxDepth, this.options.baseURL);
    this.el.classList.add("visible", `${this.options.theme}-theme`);
    const {
      x,
      y
    } = calculatePosition(event, this.el.getBoundingClientRect(), this.options.offsetX, this.options.offsetY);
    this.el.style.top = `${y}px`;
    this.el.style.left = `${x}px`;
  }
};
var version2 = pkg2.version;

// node_modules/vega-embed/build/vega-embed.module.js
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var iterator;
var hasRequiredIterator;
function requireIterator() {
  if (hasRequiredIterator)
    return iterator;
  hasRequiredIterator = 1;
  iterator = function(Yallist2) {
    Yallist2.prototype[Symbol.iterator] = function* () {
      for (let walker = this.head; walker; walker = walker.next) {
        yield walker.value;
      }
    };
  };
  return iterator;
}
var yallist = Yallist$1;
Yallist$1.Node = Node;
Yallist$1.create = Yallist$1;
function Yallist$1(list) {
  var self = this;
  if (!(self instanceof Yallist$1)) {
    self = new Yallist$1();
  }
  self.tail = null;
  self.head = null;
  self.length = 0;
  if (list && typeof list.forEach === "function") {
    list.forEach(function(item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }
  return self;
}
Yallist$1.prototype.removeNode = function(node) {
  if (node.list !== this) {
    throw new Error("removing node which does not belong to this list");
  }
  var next = node.next;
  var prev = node.prev;
  if (next) {
    next.prev = prev;
  }
  if (prev) {
    prev.next = next;
  }
  if (node === this.head) {
    this.head = next;
  }
  if (node === this.tail) {
    this.tail = prev;
  }
  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};
Yallist$1.prototype.unshiftNode = function(node) {
  if (node === this.head) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var head = this.head;
  node.list = this;
  node.next = head;
  if (head) {
    head.prev = node;
  }
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.length++;
};
Yallist$1.prototype.pushNode = function(node) {
  if (node === this.tail) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var tail = this.tail;
  node.list = this;
  node.prev = tail;
  if (tail) {
    tail.next = node;
  }
  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.length++;
};
Yallist$1.prototype.push = function() {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }
  return this.length;
};
Yallist$1.prototype.unshift = function() {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }
  return this.length;
};
Yallist$1.prototype.pop = function() {
  if (!this.tail) {
    return void 0;
  }
  var res = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return res;
};
Yallist$1.prototype.shift = function() {
  if (!this.head) {
    return void 0;
  }
  var res = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return res;
};
Yallist$1.prototype.forEach = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};
Yallist$1.prototype.forEachReverse = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};
Yallist$1.prototype.get = function(n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    walker = walker.next;
  }
  if (i === n && walker !== null) {
    return walker.value;
  }
};
Yallist$1.prototype.getReverse = function(n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    walker = walker.prev;
  }
  if (i === n && walker !== null) {
    return walker.value;
  }
};
Yallist$1.prototype.map = function(fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.head; walker !== null; ) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }
  return res;
};
Yallist$1.prototype.mapReverse = function(fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.tail; walker !== null; ) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }
  return res;
};
Yallist$1.prototype.reduce = function(fn, initial) {
  var acc;
  var walker = this.head;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }
  return acc;
};
Yallist$1.prototype.reduceReverse = function(fn, initial) {
  var acc;
  var walker = this.tail;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }
  return acc;
};
Yallist$1.prototype.toArray = function() {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }
  return arr;
};
Yallist$1.prototype.toArrayReverse = function() {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }
  return arr;
};
Yallist$1.prototype.slice = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist$1.prototype.sliceReverse = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist$1.prototype.splice = function(start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1;
  }
  if (start < 0) {
    start = this.length + start;
  }
  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }
  var ret = [];
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }
  if (walker === null) {
    walker = this.tail;
  }
  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }
  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i]);
  }
  return ret;
};
Yallist$1.prototype.reverse = function() {
  var head = this.head;
  var tail = this.tail;
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }
  this.head = tail;
  this.tail = head;
  return this;
};
function insert(self, node, value) {
  var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
  if (inserted.next === null) {
    self.tail = inserted;
  }
  if (inserted.prev === null) {
    self.head = inserted;
  }
  self.length++;
  return inserted;
}
function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);
  if (!self.head) {
    self.head = self.tail;
  }
  self.length++;
}
function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);
  if (!self.tail) {
    self.tail = self.head;
  }
  self.length++;
}
function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }
  this.list = list;
  this.value = value;
  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }
  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}
try {
  requireIterator()(Yallist$1);
} catch (er) {
}
var Yallist = yallist;
var MAX = Symbol("max");
var LENGTH = Symbol("length");
var LENGTH_CALCULATOR = Symbol("lengthCalculator");
var ALLOW_STALE = Symbol("allowStale");
var MAX_AGE = Symbol("maxAge");
var DISPOSE = Symbol("dispose");
var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
var LRU_LIST = Symbol("lruList");
var CACHE = Symbol("cache");
var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
var naiveLength = () => 1;
var LRUCache = class {
  constructor(options) {
    if (typeof options === "number")
      options = {
        max: options
      };
    if (!options)
      options = {};
    if (options.max && (typeof options.max !== "number" || options.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[MAX] = options.max || Infinity;
    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  }
  // resize the cache when the max changes.
  set max(mL) {
    if (typeof mL !== "number" || mL < 0)
      throw new TypeError("max must be a non-negative number");
    this[MAX] = mL || Infinity;
    trim(this);
  }
  get max() {
    return this[MAX];
  }
  set allowStale(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }
  get allowStale() {
    return this[ALLOW_STALE];
  }
  set maxAge(mA) {
    if (typeof mA !== "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[MAX_AGE] = mA;
    trim(this);
  }
  get maxAge() {
    return this[MAX_AGE];
  }
  // resize the cache when the lengthCalculator changes.
  set lengthCalculator(lC) {
    if (typeof lC !== "function")
      lC = naiveLength;
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach((hit) => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }
    trim(this);
  }
  get lengthCalculator() {
    return this[LENGTH_CALCULATOR];
  }
  get length() {
    return this[LENGTH];
  }
  get itemCount() {
    return this[LRU_LIST].length;
  }
  rforEach(fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].tail; walker !== null; ) {
      const prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  }
  forEach(fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].head; walker !== null; ) {
      const next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  }
  keys() {
    return this[LRU_LIST].toArray().map((k) => k.key);
  }
  values() {
    return this[LRU_LIST].toArray().map((k) => k.value);
  }
  reset() {
    if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
      this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
    }
    this[CACHE] = /* @__PURE__ */ new Map();
    this[LRU_LIST] = new Yallist();
    this[LENGTH] = 0;
  }
  dump() {
    return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
      k: hit.key,
      v: hit.value,
      e: hit.now + (hit.maxAge || 0)
    }).toArray().filter((h) => h);
  }
  dumpLru() {
    return this[LRU_LIST];
  }
  set(key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];
    if (maxAge && typeof maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);
    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false;
      }
      const node = this[CACHE].get(key);
      const item = node.value;
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value);
      }
      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH] += len - item.length;
      item.length = len;
      this.get(key);
      trim(this);
      return true;
    }
    const hit = new Entry(key, value, len, now, maxAge);
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value);
      return false;
    }
    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true;
  }
  has(key) {
    if (!this[CACHE].has(key))
      return false;
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit);
  }
  get(key) {
    return get(this, key, true);
  }
  peek(key) {
    return get(this, key, false);
  }
  pop() {
    const node = this[LRU_LIST].tail;
    if (!node)
      return null;
    del(this, node);
    return node.value;
  }
  del(key) {
    del(this, this[CACHE].get(key));
  }
  load(arr) {
    this.reset();
    const now = Date.now();
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0)
        this.set(hit.k, hit.v);
      else {
        const maxAge = expiresAt - now;
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }
  prune() {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }
};
var get = (self, key, doUse) => {
  const node = self[CACHE].get(key);
  if (node) {
    const hit = node.value;
    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE])
        return void 0;
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }
    return hit.value;
  }
};
var isStale = (self, hit) => {
  if (!hit || !hit.maxAge && !self[MAX_AGE])
    return false;
  const diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};
var trim = (self) => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
      const prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
};
var del = (self, node) => {
  if (node) {
    const hit = node.value;
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value);
    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
};
var Entry = class {
  constructor(key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }
};
var forEachStep = (self, fn, node, thisp) => {
  let hit = node.value;
  if (isStale(self, hit)) {
    del(self, node);
    if (!self[ALLOW_STALE])
      hit = void 0;
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self);
};
var lruCache = LRUCache;
var looseOption = Object.freeze({
  loose: true
});
var emptyOpts = Object.freeze({});
var parseOptions$1 = (options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
};
var parseOptions_1 = parseOptions$1;
var re$1 = { exports: {} };
var SEMVER_SPEC_VERSION = "2.0.0";
var MAX_LENGTH$1 = 256;
var MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
var MAX_SAFE_COMPONENT_LENGTH = 16;
var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
var RELEASE_TYPES = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
var constants = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
var debug$1 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$1;
(function(module4, exports) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
    MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
    MAX_LENGTH: MAX_LENGTH2
  } = constants;
  const debug2 = debug_1;
  exports = module4.exports = {};
  const re2 = exports.re = [];
  const safeRe = exports.safeRe = [];
  const src = exports.src = [];
  const t2 = exports.t = {};
  let R = 0;
  const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
  const safeRegexReplacements = [["\\s", 1], ["\\d", MAX_LENGTH2], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]];
  const makeSafeRegex = (value) => {
    for (const [token, max] of safeRegexReplacements) {
      value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
  };
  const createToken = (name4, value, isGlobal) => {
    const safe = makeSafeRegex(value);
    const index = R++;
    debug2(name4, index, value);
    t2[name4] = index;
    src[index] = value;
    re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
    safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
  };
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NUMERICIDENTIFIER]}|${src[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NUMERICIDENTIFIERLOOSE]}|${src[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
  createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
  createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:$|[^\\d])`);
  createToken("COERCERTL", src[t2.COERCE], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(re$1, re$1.exports);
var reExports = re$1.exports;
var numeric = /^[0-9]+$/;
var compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
var rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
var identifiers = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
var debug = debug_1;
var {
  MAX_LENGTH,
  MAX_SAFE_INTEGER
} = constants;
var {
  safeRe: re,
  t
} = reExports;
var parseOptions = parseOptions_1;
var {
  compareIdentifiers
} = identifiers;
var SemVer$1 = class SemVer {
  constructor(version4, options) {
    options = parseOptions(options);
    if (version4 instanceof SemVer) {
      if (version4.loose === !!options.loose && version4.includePrerelease === !!options.includePrerelease) {
        return version4;
      } else {
        version4 = version4.version;
      }
    } else if (typeof version4 !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version4}".`);
    }
    if (version4.length > MAX_LENGTH) {
      throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
    }
    debug("SemVer", version4, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version4.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version4}`);
    }
    this.raw = version4;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease = [identifier, base];
          if (identifierBase === false) {
            prerelease = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease;
            }
          } else {
            this.prerelease = prerelease;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
};
var semver = SemVer$1;
var SemVer2 = semver;
var compare$6 = (a, b, loose) => new SemVer2(a, loose).compare(new SemVer2(b, loose));
var compare_1 = compare$6;
var compare$5 = compare_1;
var eq$1 = (a, b, loose) => compare$5(a, b, loose) === 0;
var eq_1 = eq$1;
var compare$4 = compare_1;
var neq$1 = (a, b, loose) => compare$4(a, b, loose) !== 0;
var neq_1 = neq$1;
var compare$3 = compare_1;
var gt$1 = (a, b, loose) => compare$3(a, b, loose) > 0;
var gt_1 = gt$1;
var compare$2 = compare_1;
var gte$1 = (a, b, loose) => compare$2(a, b, loose) >= 0;
var gte_1 = gte$1;
var compare$1 = compare_1;
var lt$1 = (a, b, loose) => compare$1(a, b, loose) < 0;
var lt_1 = lt$1;
var compare2 = compare_1;
var lte$1 = (a, b, loose) => compare2(a, b, loose) <= 0;
var lte_1 = lte$1;
var eq = eq_1;
var neq = neq_1;
var gt = gt_1;
var gte = gte_1;
var lt = lt_1;
var lte = lte_1;
var cmp = (a, op, b, loose) => {
  switch (op) {
    case "===":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a === b;
    case "!==":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a !== b;
    case "":
    case "=":
    case "==":
      return eq(a, b, loose);
    case "!=":
      return neq(a, b, loose);
    case ">":
      return gt(a, b, loose);
    case ">=":
      return gte(a, b, loose);
    case "<":
      return lt(a, b, loose);
    case "<=":
      return lte(a, b, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};
var cmp_1 = cmp;
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator)
    return comparator;
  hasRequiredComparator = 1;
  const ANY = Symbol("SemVer ANY");
  class Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      options = parseOptions2(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug2("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug2("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer3(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version4) {
      debug2("Comparator.test", version4, this.options.loose);
      if (this.semver === ANY || version4 === ANY) {
        return true;
      }
      if (typeof version4 === "string") {
        try {
          version4 = new SemVer3(version4, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp2(version4, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range2(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range2(this.value, options).test(comp.semver);
      }
      options = parseOptions2(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp2(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp2(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator;
  const parseOptions2 = parseOptions_1;
  const {
    safeRe: re2,
    t: t2
  } = reExports;
  const cmp2 = cmp_1;
  const debug2 = debug_1;
  const SemVer3 = semver;
  const Range2 = requireRange();
  return comparator;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange)
    return range;
  hasRequiredRange = 1;
  class Range2 {
    constructor(range2, options) {
      options = parseOptions2(options);
      if (range2 instanceof Range2) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range2(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.format();
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().split(/\s+/).join(" ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.format();
    }
    format() {
      this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug2("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug2("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      debug2("tilde trim", range2);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      debug2("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug2("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug2("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range2)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version4) {
      if (!version4) {
        return false;
      }
      if (typeof version4 === "string") {
        try {
          version4 = new SemVer3(version4, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version4, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range2;
  const LRU = lruCache;
  const cache = new LRU({
    max: 1e3
  });
  const parseOptions2 = parseOptions_1;
  const Comparator = requireComparator();
  const debug2 = debug_1;
  const SemVer3 = semver;
  const {
    safeRe: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = reExports;
  const {
    FLAG_INCLUDE_PRERELEASE,
    FLAG_LOOSE
  } = constants;
  const isNullSet = (c) => c.value === "<0.0.0-0";
  const isAny = (c) => c.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    debug2("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug2("caret", comp);
    comp = replaceTildes(comp, options);
    debug2("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug2("xrange", comp);
    comp = replaceStars(comp, options);
    debug2("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("tilde", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug2("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug2("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug2("caret", comp, options);
    const r = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("caret", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug2("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug2("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug2("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug2("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug2("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug2("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug2("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug2("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set, version4, options) => {
    for (let i = 0; i < set.length; i++) {
      if (!set[i].test(version4)) {
        return false;
      }
    }
    if (version4.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) {
        debug2(set[i].semver);
        if (set[i].semver === Comparator.ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          const allowed = set[i].semver;
          if (allowed.major === version4.major && allowed.minor === version4.minor && allowed.patch === version4.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var Range = requireRange();
var satisfies = (version4, range2, options) => {
  try {
    range2 = new Range(range2, options);
  } catch (er) {
    return false;
  }
  return range2.test(version4);
};
var satisfies_1 = satisfies;
var satisfies$1 = getDefaultExportFromCjs(satisfies_1);
function post(window2, url, data) {
  const editor = window2.open(url);
  const wait = 1e4;
  const step = 250;
  const {
    origin
  } = new URL(url);
  let count = ~~(wait / step);
  function listen(evt) {
    if (evt.source === editor) {
      count = 0;
      window2.removeEventListener("message", listen, false);
    }
  }
  window2.addEventListener("message", listen, false);
  function send() {
    if (count <= 0) {
      return;
    }
    editor.postMessage(data, origin);
    setTimeout(send, step);
    count -= 1;
  }
  setTimeout(send, step);
}
var embedStyle = `.vega-embed {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
}
.vega-embed.has-actions {
  padding-right: 38px;
}
.vega-embed details:not([open]) > :not(summary) {
  display: none !important;
}
.vega-embed summary {
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
  z-index: 1000;
  background: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  color: #1b1e23;
  border: 1px solid #aaa;
  border-radius: 999px;
  opacity: 0.2;
  transition: opacity 0.4s ease-in;
  cursor: pointer;
  line-height: 0px;
}
.vega-embed summary::-webkit-details-marker {
  display: none;
}
.vega-embed summary:active {
  box-shadow: #aaa 0px 0px 0px 1px inset;
}
.vega-embed summary svg {
  width: 14px;
  height: 14px;
}
.vega-embed details[open] summary {
  opacity: 0.7;
}
.vega-embed:hover summary, .vega-embed:focus-within summary {
  opacity: 1 !important;
  transition: opacity 0.2s ease;
}
.vega-embed .vega-actions {
  position: absolute;
  z-index: 1001;
  top: 35px;
  right: -9px;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  padding-top: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #d9d9d9;
  background: white;
  animation-duration: 0.15s;
  animation-name: scale-in;
  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);
  text-align: left;
}
.vega-embed .vega-actions a {
  padding: 8px 16px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: #434a56;
  text-decoration: none;
}
.vega-embed .vega-actions a:hover, .vega-embed .vega-actions a:focus {
  background-color: #f7f7f9;
  color: black;
}
.vega-embed .vega-actions::before, .vega-embed .vega-actions::after {
  content: "";
  display: inline-block;
  position: absolute;
}
.vega-embed .vega-actions::before {
  left: auto;
  right: 14px;
  top: -16px;
  border: 8px solid rgba(0, 0, 0, 0);
  border-bottom-color: #d9d9d9;
}
.vega-embed .vega-actions::after {
  left: auto;
  right: 15px;
  top: -14px;
  border: 7px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
}
.vega-embed .chart-wrapper.fit-x {
  width: 100%;
}
.vega-embed .chart-wrapper.fit-y {
  height: 100%;
}

.vega-embed-wrapper {
  max-width: 100%;
  overflow: auto;
  padding-right: 14px;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`;
function mergeDeep(dest, ...src) {
  for (const s of src) {
    deepMerge_(dest, s);
  }
  return dest;
}
function deepMerge_(dest, src) {
  for (const property of Object.keys(src)) {
    writeConfig(dest, property, src[property], true);
  }
}
var name3 = "vega-embed";
var version$13 = "6.24.0";
var description3 = "Publish Vega visualizations as embedded web components.";
var keywords3 = ["vega", "data", "visualization", "component", "embed"];
var repository3 = {
  type: "git",
  url: "http://github.com/vega/vega-embed.git"
};
var author3 = {
  name: "UW Interactive Data Lab",
  url: "http://idl.cs.washington.edu"
};
var contributors2 = [{
  name: "Dominik Moritz",
  url: "https://www.domoritz.de"
}];
var bugs2 = {
  url: "https://github.com/vega/vega-embed/issues"
};
var homepage2 = "https://github.com/vega/vega-embed#readme";
var license3 = "BSD-3-Clause";
var main3 = "build/vega-embed.js";
var module3 = "build/vega-embed.module.js";
var unpkg3 = "build/vega-embed.min.js";
var jsdelivr3 = "build/vega-embed.min.js";
var types3 = "build/vega-embed.module.d.ts";
var files3 = ["src", "build", "patches"];
var devDependencies3 = {
  "@babel/core": "^7.23.6",
  "@babel/plugin-proposal-async-generator-functions": "^7.20.7",
  "@babel/plugin-proposal-json-strings": "^7.18.6",
  "@babel/plugin-proposal-object-rest-spread": "^7.20.7",
  "@babel/plugin-proposal-optional-catch-binding": "^7.18.6",
  "@babel/plugin-transform-runtime": "^7.23.6",
  "@babel/preset-env": "^7.23.6",
  "@babel/preset-typescript": "^7.23.3",
  "@release-it/conventional-changelog": "^8.0.1",
  "@rollup/plugin-commonjs": "25.0.7",
  "@rollup/plugin-json": "^6.1.0",
  "@rollup/plugin-node-resolve": "^15.2.3",
  "@rollup/plugin-terser": "^0.4.4",
  "@types/jest": "^29.5.11",
  "@types/semver": "^7.5.6",
  "@typescript-eslint/eslint-plugin": "^6.14.0",
  "@typescript-eslint/parser": "^6.14.0",
  "browser-sync": "^2.29.3",
  concurrently: "^8.2.2",
  "del-cli": "^5.1.0",
  eslint: "^8.56.0",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-jest": "^27.6.0",
  "eslint-plugin-prettier": "^5.0.1",
  jest: "^29.7.0",
  "jest-canvas-mock": "^2.5.2",
  "jest-environment-jsdom": "^29.7.0",
  "patch-package": "^8.0.0",
  "postinstall-postinstall": "^2.1.0",
  prettier: "^3.1.1",
  "release-it": "^17.0.1",
  rollup: "4.9.1",
  "rollup-plugin-bundle-size": "^1.0.3",
  "rollup-plugin-ts": "^3.4.5",
  sass: "^1.69.5",
  typescript: "^5.3.3",
  vega: "^5.22.1",
  "vega-lite": "^5.2.0"
};
var peerDependencies2 = {
  vega: "^5.21.0",
  "vega-lite": "*"
};
var dependencies3 = {
  "fast-json-patch": "^3.1.1",
  "json-stringify-pretty-compact": "^3.0.0",
  semver: "^7.5.4",
  tslib: "^2.6.2",
  "vega-interpreter": "^1.0.5",
  "vega-schema-url-parser": "^2.2.0",
  "vega-themes": "^2.14.0",
  "vega-tooltip": "^0.34.0"
};
var bundledDependencies = ["yallist"];
var scripts3 = {
  prebuild: "yarn clean && yarn build:style",
  build: "rollup -c",
  "build:style": "./build-style.sh",
  clean: "del-cli build src/style.ts",
  prepublishOnly: "yarn clean && yarn build",
  preversion: "yarn lint && yarn test",
  serve: "browser-sync start --directory -s -f build *.html",
  start: "yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",
  pretest: "yarn build:style",
  test: "jest",
  "test:inspect": "node --inspect-brk ./node_modules/.bin/jest --runInBand",
  prettierbase: "prettier '*.{css,scss,html}'",
  format: "eslint . --fix && yarn prettierbase --write",
  lint: "eslint . && yarn prettierbase --check",
  release: "release-it"
};
var pkg3 = {
  name: name3,
  version: version$13,
  description: description3,
  keywords: keywords3,
  repository: repository3,
  author: author3,
  contributors: contributors2,
  bugs: bugs2,
  homepage: homepage2,
  license: license3,
  main: main3,
  module: module3,
  unpkg: unpkg3,
  jsdelivr: jsdelivr3,
  types: types3,
  files: files3,
  devDependencies: devDependencies3,
  peerDependencies: peerDependencies2,
  dependencies: dependencies3,
  bundledDependencies,
  scripts: scripts3
};
var version3 = pkg3.version;
var vega = vega_module_exports;
var vegaLite = src_exports;
var w = typeof window !== "undefined" ? window : void 0;
var _a;
if (vegaLite === void 0 && ((_a = w == null ? void 0 : w.vl) == null ? void 0 : _a.compile)) {
  vegaLite = w.vl;
}
var DEFAULT_ACTIONS = {
  export: {
    svg: true,
    png: true
  },
  source: true,
  compiled: true,
  editor: true
};
var I18N = {
  CLICK_TO_VIEW_ACTIONS: "Click to view actions",
  COMPILED_ACTION: "View Compiled Vega",
  EDITOR_ACTION: "Open in Vega Editor",
  PNG_ACTION: "Save as PNG",
  SOURCE_ACTION: "View Source",
  SVG_ACTION: "Save as SVG"
};
var NAMES = {
  vega: "Vega",
  "vega-lite": "Vega-Lite"
};
var VERSION = {
  vega: vega.version,
  "vega-lite": vegaLite ? vegaLite.version : "not available"
};
var PREPROCESSOR = {
  vega: (vgSpec) => vgSpec,
  "vega-lite": (vlSpec, config) => vegaLite.compile(vlSpec, {
    config
  }).spec
};
var SVG_CIRCLES = `
<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <circle r="2" cy="8" cx="2"></circle>
  <circle r="2" cy="8" cx="8"></circle>
  <circle r="2" cy="8" cx="14"></circle>
</svg>`;
var CHART_WRAPPER_CLASS = "chart-wrapper";
function isTooltipHandler(h) {
  return typeof h === "function";
}
function viewSource(source, sourceHeader, sourceFooter, mode) {
  const header = `<html><head>${sourceHeader}</head><body><pre><code class="json">`;
  const footer = `</code></pre>${sourceFooter}</body></html>`;
  const win = window.open("");
  win.document.write(header + source + footer);
  win.document.title = `${NAMES[mode]} JSON Source`;
}
function guessMode(spec, providedMode) {
  if (spec.$schema) {
    const parsed = parser_module_default(spec.$schema);
    if (providedMode && providedMode !== parsed.library) {
      console.warn(`The given visualization spec is written in ${NAMES[parsed.library]}, but mode argument sets ${NAMES[providedMode] ?? providedMode}.`);
    }
    const mode = parsed.library;
    if (!satisfies$1(VERSION[mode], `^${parsed.version.slice(1)}`)) {
      console.warn(`The input spec uses ${NAMES[mode]} ${parsed.version}, but the current version of ${NAMES[mode]} is v${VERSION[mode]}.`);
    }
    return mode;
  }
  if ("mark" in spec || "encoding" in spec || "layer" in spec || "hconcat" in spec || "vconcat" in spec || "facet" in spec || "repeat" in spec) {
    return "vega-lite";
  }
  if ("marks" in spec || "signals" in spec || "scales" in spec || "axes" in spec) {
    return "vega";
  }
  return providedMode ?? "vega";
}
function isLoader(o) {
  return !!(o && "load" in o);
}
function createLoader(opts) {
  return isLoader(opts) ? opts : vega.loader(opts);
}
function embedOptionsFromUsermeta(parsedSpec) {
  var _a2;
  const opts = ((_a2 = parsedSpec.usermeta) == null ? void 0 : _a2.embedOptions) ?? {};
  if (isString(opts.defaultStyle)) {
    opts.defaultStyle = false;
  }
  return opts;
}
async function embed(el, spec, opts = {}) {
  let parsedSpec;
  let loader;
  if (isString(spec)) {
    loader = createLoader(opts.loader);
    parsedSpec = JSON.parse(await loader.load(spec));
  } else {
    parsedSpec = spec;
  }
  const loadedEmbedOptions = embedOptionsFromUsermeta(parsedSpec);
  const usermetaLoader = loadedEmbedOptions.loader;
  if (!loader || usermetaLoader) {
    loader = createLoader(opts.loader ?? usermetaLoader);
  }
  const usermetaOpts = await loadOpts(loadedEmbedOptions, loader);
  const parsedOpts = await loadOpts(opts, loader);
  const mergedOpts = {
    ...mergeDeep(parsedOpts, usermetaOpts),
    config: mergeConfig(parsedOpts.config ?? {}, usermetaOpts.config ?? {})
  };
  return await _embed(el, parsedSpec, mergedOpts, loader);
}
async function loadOpts(opt, loader) {
  const config = isString(opt.config) ? JSON.parse(await loader.load(opt.config)) : opt.config ?? {};
  const patch = isString(opt.patch) ? JSON.parse(await loader.load(opt.patch)) : opt.patch;
  return {
    ...opt,
    ...patch ? {
      patch
    } : {},
    ...config ? {
      config
    } : {}
  };
}
function getRoot(el) {
  const possibleRoot = el.getRootNode ? el.getRootNode() : document;
  return possibleRoot instanceof ShadowRoot ? {
    root: possibleRoot,
    rootContainer: possibleRoot
  } : {
    root: document,
    rootContainer: document.head ?? document.body
  };
}
async function _embed(el, spec, opts = {}, loader) {
  const config = opts.theme ? mergeConfig(vega_themes_module_exports[opts.theme], opts.config ?? {}) : opts.config;
  const actions = isBoolean(opts.actions) ? opts.actions : mergeDeep({}, DEFAULT_ACTIONS, opts.actions ?? {});
  const i18n = {
    ...I18N,
    ...opts.i18n
  };
  const renderer = opts.renderer ?? "canvas";
  const logLevel = opts.logLevel ?? vega.Warn;
  const downloadFileName = opts.downloadFileName ?? "visualization";
  const element = typeof el === "string" ? document.querySelector(el) : el;
  if (!element) {
    throw new Error(`${el} does not exist`);
  }
  if (opts.defaultStyle !== false) {
    const ID = "vega-embed-style";
    const {
      root,
      rootContainer
    } = getRoot(element);
    if (!root.getElementById(ID)) {
      const style = document.createElement("style");
      style.id = ID;
      style.innerHTML = opts.defaultStyle === void 0 || opts.defaultStyle === true ? embedStyle.toString() : opts.defaultStyle;
      rootContainer.appendChild(style);
    }
  }
  const mode = guessMode(spec, opts.mode);
  let vgSpec = PREPROCESSOR[mode](spec, config);
  if (mode === "vega-lite") {
    if (vgSpec.$schema) {
      const parsed = parser_module_default(vgSpec.$schema);
      if (!satisfies$1(VERSION.vega, `^${parsed.version.slice(1)}`)) {
        console.warn(`The compiled spec uses Vega ${parsed.version}, but current version is v${VERSION.vega}.`);
      }
    }
  }
  element.classList.add("vega-embed");
  if (actions) {
    element.classList.add("has-actions");
  }
  element.innerHTML = "";
  let container = element;
  if (actions) {
    const chartWrapper = document.createElement("div");
    chartWrapper.classList.add(CHART_WRAPPER_CLASS);
    element.appendChild(chartWrapper);
    container = chartWrapper;
  }
  const patch = opts.patch;
  if (patch) {
    vgSpec = patch instanceof Function ? patch(vgSpec) : applyPatch(vgSpec, patch, true, false).newDocument;
  }
  if (opts.formatLocale) {
    vega.formatLocale(opts.formatLocale);
  }
  if (opts.timeFormatLocale) {
    vega.timeFormatLocale(opts.timeFormatLocale);
  }
  if (opts.expressionFunctions) {
    for (const name4 in opts.expressionFunctions) {
      const expressionFunction = opts.expressionFunctions[name4];
      if ("fn" in expressionFunction) {
        vega.expressionFunction(name4, expressionFunction.fn, expressionFunction["visitor"]);
      } else if (expressionFunction instanceof Function) {
        vega.expressionFunction(name4, expressionFunction);
      }
    }
  }
  const {
    ast
  } = opts;
  const runtime = vega.parse(vgSpec, mode === "vega-lite" ? {} : config, {
    ast
  });
  const view = new (opts.viewClass || vega.View)(runtime, {
    loader,
    logLevel,
    renderer,
    ...ast ? {
      expr: vega.expressionInterpreter ?? opts.expr ?? expression
    } : {}
  });
  view.addSignalListener("autosize", (_, autosize) => {
    const {
      type
    } = autosize;
    if (type == "fit-x") {
      container.classList.add("fit-x");
      container.classList.remove("fit-y");
    } else if (type == "fit-y") {
      container.classList.remove("fit-x");
      container.classList.add("fit-y");
    } else if (type == "fit") {
      container.classList.add("fit-x", "fit-y");
    } else {
      container.classList.remove("fit-x", "fit-y");
    }
  });
  if (opts.tooltip !== false) {
    const {
      loader: loader_,
      tooltip
    } = opts;
    const baseURL = loader_ && !isLoader(loader_) ? loader_ == null ? void 0 : loader_.baseURL : void 0;
    const handler = isTooltipHandler(tooltip) ? tooltip : (
      // user provided boolean true or tooltip options
      new Handler({
        baseURL,
        ...tooltip === true ? {} : tooltip
      }).call
    );
    view.tooltip(handler);
  }
  let {
    hover
  } = opts;
  if (hover === void 0) {
    hover = mode === "vega";
  }
  if (hover) {
    const {
      hoverSet,
      updateSet
    } = typeof hover === "boolean" ? {} : hover;
    view.hover(hoverSet, updateSet);
  }
  if (opts) {
    if (opts.width != null) {
      view.width(opts.width);
    }
    if (opts.height != null) {
      view.height(opts.height);
    }
    if (opts.padding != null) {
      view.padding(opts.padding);
    }
  }
  await view.initialize(container, opts.bind).runAsync();
  let documentClickHandler;
  if (actions !== false) {
    let wrapper = element;
    if (opts.defaultStyle !== false || opts.forceActionsMenu) {
      const details = document.createElement("details");
      details.title = i18n.CLICK_TO_VIEW_ACTIONS;
      element.append(details);
      wrapper = details;
      const summary = document.createElement("summary");
      summary.innerHTML = SVG_CIRCLES;
      details.append(summary);
      documentClickHandler = (ev) => {
        if (!details.contains(ev.target)) {
          details.removeAttribute("open");
        }
      };
      document.addEventListener("click", documentClickHandler);
    }
    const ctrl = document.createElement("div");
    wrapper.append(ctrl);
    ctrl.classList.add("vega-actions");
    if (actions === true || actions.export !== false) {
      for (const ext of ["svg", "png"]) {
        if (actions === true || actions.export === true || actions.export[ext]) {
          const i18nExportAction = i18n[`${ext.toUpperCase()}_ACTION`];
          const exportLink = document.createElement("a");
          const scaleFactor = isObject(opts.scaleFactor) ? opts.scaleFactor[ext] : opts.scaleFactor;
          exportLink.text = i18nExportAction;
          exportLink.href = "#";
          exportLink.target = "_blank";
          exportLink.download = `${downloadFileName}.${ext}`;
          exportLink.addEventListener("mousedown", async function(e2) {
            e2.preventDefault();
            const url = await view.toImageURL(ext, scaleFactor);
            this.href = url;
          });
          ctrl.append(exportLink);
        }
      }
    }
    if (actions === true || actions.source !== false) {
      const viewSourceLink = document.createElement("a");
      viewSourceLink.text = i18n.SOURCE_ACTION;
      viewSourceLink.href = "#";
      viewSourceLink.addEventListener("click", function(e2) {
        viewSource((0, import_json_stringify_pretty_compact.default)(spec), opts.sourceHeader ?? "", opts.sourceFooter ?? "", mode);
        e2.preventDefault();
      });
      ctrl.append(viewSourceLink);
    }
    if (mode === "vega-lite" && (actions === true || actions.compiled !== false)) {
      const compileLink = document.createElement("a");
      compileLink.text = i18n.COMPILED_ACTION;
      compileLink.href = "#";
      compileLink.addEventListener("click", function(e2) {
        viewSource((0, import_json_stringify_pretty_compact.default)(vgSpec), opts.sourceHeader ?? "", opts.sourceFooter ?? "", "vega");
        e2.preventDefault();
      });
      ctrl.append(compileLink);
    }
    if (actions === true || actions.editor !== false) {
      const editorUrl = opts.editorUrl ?? "https://vega.github.io/editor/";
      const editorLink = document.createElement("a");
      editorLink.text = i18n.EDITOR_ACTION;
      editorLink.href = "#";
      editorLink.addEventListener("click", function(e2) {
        post(window, editorUrl, {
          config,
          mode,
          renderer,
          spec: (0, import_json_stringify_pretty_compact.default)(spec)
        });
        e2.preventDefault();
      });
      ctrl.append(editorLink);
    }
  }
  function finalize() {
    if (documentClickHandler) {
      document.removeEventListener("click", documentClickHandler);
    }
    view.finalize();
  }
  return {
    view,
    spec,
    vgSpec,
    finalize,
    embedOptions: opts
  };
}
export {
  DEFAULT_ACTIONS,
  embed as default,
  guessMode,
  vega,
  vegaLite,
  version3 as version
};
/*! Bundled license information:

fast-json-patch/module/helpers.mjs:
  (*!
   * https://github.com/Starcounter-Jack/JSON-Patch
   * (c) 2017-2022 Joachim Wester
   * MIT licensed
   *)

fast-json-patch/module/duplex.mjs:
  (*!
   * https://github.com/Starcounter-Jack/JSON-Patch
   * (c) 2017-2021 Joachim Wester
   * MIT license
   *)
*/
//# sourceMappingURL=vega-embed.js.map
