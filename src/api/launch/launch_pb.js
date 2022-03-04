/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.launch.CreateRequest', null, global);
goog.exportSymbol('proto.launch.Empty', null, global);
goog.exportSymbol('proto.launch.LaunchList', null, global);
goog.exportSymbol('proto.launch.LaunchState', null, global);
goog.exportSymbol('proto.launch.LaunchView', null, global);
goog.exportSymbol('proto.launch.OperateRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.launch.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.launch.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.launch.Empty.displayName = 'proto.launch.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.launch.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.launch.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.launch.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.launch.Empty}
 */
proto.launch.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.launch.Empty;
  return proto.launch.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.launch.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.launch.Empty}
 */
proto.launch.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.launch.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.launch.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.launch.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.launch.CreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.launch.CreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.launch.CreateRequest.displayName = 'proto.launch.CreateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.launch.CreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.launch.CreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.launch.CreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.CreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    launchType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    operation: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.launch.CreateRequest}
 */
proto.launch.CreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.launch.CreateRequest;
  return proto.launch.CreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.launch.CreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.launch.CreateRequest}
 */
proto.launch.CreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLaunchType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.launch.CreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.launch.CreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.launch.CreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.CreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLaunchType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.launch.CreateRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.launch.CreateRequest.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.launch.CreateRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.launch.CreateRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.launch.CreateRequest.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.launch.CreateRequest.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string launch_type = 4;
 * @return {string}
 */
proto.launch.CreateRequest.prototype.getLaunchType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.launch.CreateRequest.prototype.setLaunchType = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string operation = 5;
 * @return {string}
 */
proto.launch.CreateRequest.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.launch.CreateRequest.prototype.setOperation = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.launch.OperateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.launch.OperateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.launch.OperateRequest.displayName = 'proto.launch.OperateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.launch.OperateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.launch.OperateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.launch.OperateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.OperateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    operation: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.launch.OperateRequest}
 */
proto.launch.OperateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.launch.OperateRequest;
  return proto.launch.OperateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.launch.OperateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.launch.OperateRequest}
 */
proto.launch.OperateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.launch.OperateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.launch.OperateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.launch.OperateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.OperateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string workflow_id = 1;
 * @return {string}
 */
proto.launch.OperateRequest.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.launch.OperateRequest.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string run_id = 2;
 * @return {string}
 */
proto.launch.OperateRequest.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.launch.OperateRequest.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation = 3;
 * @return {string}
 */
proto.launch.OperateRequest.prototype.getOperation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.launch.OperateRequest.prototype.setOperation = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.launch.LaunchState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.launch.LaunchState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.launch.LaunchState.displayName = 'proto.launch.LaunchState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.launch.LaunchState.prototype.toObject = function(opt_includeInstance) {
  return proto.launch.LaunchState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.launch.LaunchState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.LaunchState.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    launchType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    workloadStatus: jspb.Message.getFieldWithDefault(msg, 5, ""),
    theiaPort: jspb.Message.getFieldWithDefault(msg, 6, 0),
    webrtcPort: jspb.Message.getFieldWithDefault(msg, 7, 0),
    nodeIp: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.launch.LaunchState}
 */
proto.launch.LaunchState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.launch.LaunchState;
  return proto.launch.LaunchState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.launch.LaunchState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.launch.LaunchState}
 */
proto.launch.LaunchState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLaunchType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTheiaPort(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWebrtcPort(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.launch.LaunchState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.launch.LaunchState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.launch.LaunchState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.LaunchState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLaunchType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWorkloadStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTheiaPort();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getWebrtcPort();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getNodeIp();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.launch.LaunchState.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.launch.LaunchState.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.launch.LaunchState.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.launch.LaunchState.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string namespace = 3;
 * @return {string}
 */
proto.launch.LaunchState.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.launch.LaunchState.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string launch_type = 4;
 * @return {string}
 */
proto.launch.LaunchState.prototype.getLaunchType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.launch.LaunchState.prototype.setLaunchType = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string workload_status = 5;
 * @return {string}
 */
proto.launch.LaunchState.prototype.getWorkloadStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.launch.LaunchState.prototype.setWorkloadStatus = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 theia_port = 6;
 * @return {number}
 */
proto.launch.LaunchState.prototype.getTheiaPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.launch.LaunchState.prototype.setTheiaPort = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 webrtc_port = 7;
 * @return {number}
 */
proto.launch.LaunchState.prototype.getWebrtcPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.launch.LaunchState.prototype.setWebrtcPort = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string node_ip = 8;
 * @return {string}
 */
proto.launch.LaunchState.prototype.getNodeIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.launch.LaunchState.prototype.setNodeIp = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.launch.LaunchView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.launch.LaunchView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.launch.LaunchView.displayName = 'proto.launch.LaunchView';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.launch.LaunchView.prototype.toObject = function(opt_includeInstance) {
  return proto.launch.LaunchView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.launch.LaunchView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.LaunchView.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    namespace: jspb.Message.getFieldWithDefault(msg, 2, ""),
    launchType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    workloadStatus: jspb.Message.getFieldWithDefault(msg, 4, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    runId: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.launch.LaunchView}
 */
proto.launch.LaunchView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.launch.LaunchView;
  return proto.launch.LaunchView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.launch.LaunchView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.launch.LaunchView}
 */
proto.launch.LaunchView.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamespace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLaunchType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkloadStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.launch.LaunchView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.launch.LaunchView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.launch.LaunchView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.LaunchView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamespace();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLaunchType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWorkloadStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.launch.LaunchView.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.launch.LaunchView.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string namespace = 2;
 * @return {string}
 */
proto.launch.LaunchView.prototype.getNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.launch.LaunchView.prototype.setNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string launch_type = 3;
 * @return {string}
 */
proto.launch.LaunchView.prototype.getLaunchType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.launch.LaunchView.prototype.setLaunchType = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string workload_status = 4;
 * @return {string}
 */
proto.launch.LaunchView.prototype.getWorkloadStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.launch.LaunchView.prototype.setWorkloadStatus = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string workflow_id = 5;
 * @return {string}
 */
proto.launch.LaunchView.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.launch.LaunchView.prototype.setWorkflowId = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string run_id = 6;
 * @return {string}
 */
proto.launch.LaunchView.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.launch.LaunchView.prototype.setRunId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.launch.LaunchList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.launch.LaunchList.repeatedFields_, null);
};
goog.inherits(proto.launch.LaunchList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.launch.LaunchList.displayName = 'proto.launch.LaunchList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.launch.LaunchList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.launch.LaunchList.prototype.toObject = function(opt_includeInstance) {
  return proto.launch.LaunchList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.launch.LaunchList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.LaunchList.toObject = function(includeInstance, msg) {
  var f, obj = {
    launchesList: jspb.Message.toObjectList(msg.getLaunchesList(),
    proto.launch.LaunchView.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.launch.LaunchList}
 */
proto.launch.LaunchList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.launch.LaunchList;
  return proto.launch.LaunchList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.launch.LaunchList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.launch.LaunchList}
 */
proto.launch.LaunchList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.launch.LaunchView;
      reader.readMessage(value,proto.launch.LaunchView.deserializeBinaryFromReader);
      msg.addLaunches(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.launch.LaunchList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.launch.LaunchList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.launch.LaunchList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.launch.LaunchList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLaunchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.launch.LaunchView.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LaunchView launches = 1;
 * @return {!Array<!proto.launch.LaunchView>}
 */
proto.launch.LaunchList.prototype.getLaunchesList = function() {
  return /** @type{!Array<!proto.launch.LaunchView>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.launch.LaunchView, 1));
};


/** @param {!Array<!proto.launch.LaunchView>} value */
proto.launch.LaunchList.prototype.setLaunchesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.launch.LaunchView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.launch.LaunchView}
 */
proto.launch.LaunchList.prototype.addLaunches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.launch.LaunchView, opt_index);
};


proto.launch.LaunchList.prototype.clearLaunchesList = function() {
  this.setLaunchesList([]);
};


goog.object.extend(exports, proto.launch);
