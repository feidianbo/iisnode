/*
Changes in node.config recycle the application
*/

var iisnodeassert = require("iisnodeassert");

iisnodeassert.sequence([
    iisnodeassert.get(10000, "/125_node_config_autoupdate/hello.js?revert", 200, "node.config reverted"),
    iisnodeassert.get(10000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 1"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 1"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 2"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 2"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js?update", 200, "node.config updated"),
    iisnodeassert.get(10000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 1"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 1"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 1"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 1"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 2"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 2"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 2"),
    iisnodeassert.get(2000, "/125_node_config_autoupdate/hello.js", 200, "Hello, world 2")
]);