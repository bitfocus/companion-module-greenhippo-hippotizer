var instance_skel = require('../../instance_skel');
var debug;
var log;

function instance(system, id, config) {
	var self = this;

	// super-constructor
	instance_skel.apply(this, arguments);

	self.actions(); // export actions

	// Example: When this script was committed, a fix needed to be made
	// this will only be run if you had an instance of an older "version" before.
	// "version" is calculated out from how many upgradescripts your intance config has run.
	// So just add a addUpgradeScript when you commit a breaking change to the config, that fixes
	// the config.

	self.addUpgradeScript(function () {
		// just an example
		if (self.config.host !== undefined) {
			self.config.old_host = self.config.host;
		}
	});

	return self;
}

instance.prototype.updateConfig = function(config) {
	var self = this;

	self.config = config;
};
instance.prototype.init = function() {
	var self = this;

	self.status(self.STATE_OK);

	debug = self.debug;
	log = self.log;
};

// Return config fields for web config
instance.prototype.config_fields = function () {
	var self = this;
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 8,
			regex: self.REGEX_IP
		},
		{
			type: 'textinput',
			id: 'port',
			label: 'Target Port',
			width: 4,
			default: 4000,
			regex: self.REGEX_PORT
		}
	]
};

// When module gets deleted
instance.prototype.destroy = function() {
	var self = this;
	debug("destroy");
};

instance.prototype.actions = function(system) {
	var self = this;
	self.system.emit('instance_actions', self.id, {
		'cut': {
			label: 'Cut',
			options: [
				{
					 type: 'textinput',
					 label: 'Mix',
					 id: 'mix',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Layer',
					 id: 'layer',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Bank Nr',
					 id: 'bank',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Slot Nr',
					 id: 'slot',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				}
			]
		},
		'fade': {
			label: 'Fade',
			options: [
				{
					 type: 'textinput',
					 label: 'Mix',
					 id: 'mix',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Layer',
					 id: 'layer',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
			  {
				  type: 'textinput',
			  	label: 'Fade Time (In ms)',
			  	id: 'time',
		  		default: 1000,
				  regex: self.REGEX_SIGNED_NUMBER
			  },
				{
					 type: 'textinput',
					 label: 'Bank Nr',
					 id: 'bank',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Slot Nr',
					 id: 'slot',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				}
			]
		},
		'ftb': {
			label: 'Fade Through Black',
			options: [
				{
					 type: 'textinput',
					 label: 'Mix',
					 id: 'mix',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Layer',
					 id: 'layer',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					type: 'textinput',
					label: 'Fade Time (In ms)',
					id: 'time',
					default: 1000,
					regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Bank Nr',
					 id: 'bank',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Slot Nr',
					 id: 'slot',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				}
			]
		},
		'fade_up_first': {
			label: 'Fade Up First',
			options: [
				{
					 type: 'textinput',
					 label: 'Mix',
					 id: 'mix',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Layer',
					 id: 'layer',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					type: 'textinput',
					label: 'Fade Time (In ms)',
					id: 'time',
					default: 1000,
					regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Bank Nr',
					 id: 'bank',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Slot Nr',
					 id: 'slot',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				}
			]
		},
		'snap_start': {
			label: 'Snap Start',
			options: [
				{
					 type: 'textinput',
					 label: 'Mix',
					 id: 'mix',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Layer',
					 id: 'layer',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					type: 'textinput',
					label: 'Fade Time (In ms)',
					id: 'time',
					default: 1000,
					regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Bank Nr',
					 id: 'bank',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Slot Nr',
					 id: 'slot',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				}
			]
		},
		'snap_end': {
			label: 'Snap End',
			options: [
				{
					 type: 'textinput',
					 label: 'Mix',
					 id: 'mix',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Layer',
					 id: 'layer',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					type: 'textinput',
					label: 'Fade Time (In ms)',
					id: 'time',
					default: 1000,
					regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Bank Nr',
					 id: 'bank',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				},
				{
					 type: 'textinput',
					 label: 'Slot Nr',
					 id: 'slot',
					 default: 0,
					 regex: self.REGEX_SIGNED_NUMBER
				}
			]
		},
		'send_int': {
			label: 'Send OSC integer',
			options: [
				{
					 type: 'textinput',
					 label: 'OSC Path',
					 id: 'path',
					 default: '/osc/path'
				},
				{
					 type: 'textinput',
					 label: 'Value',
					 id: 'int',
					 default: 1,
					 regex: self.REGEX_SIGNED_NUMBER
				}
			]
		}
	});
}

instance.prototype.action = function(action) {
	var self = this;

	debug('action: ', action);

	if (action.action == 'cut') {
		var type = {
				type: "i",
				value: 0
		};
		var preset = {
				type: "i",
				value: parseInt(action.options.bank, 10) * 256 + parseInt(action.options.slot, 10)
		};
		console.log(preset);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeType', [ type ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/PresetSelect', [ preset ]);
	}

	if (action.action == 'fade') {
		var type = {
				type: "i",
				value: 1
		};
		var time = {
				type: "i",
				value: parseInt(action.options.time)
		};
		var preset = {
				type: "i",
				value: parseInt(action.options.bank, 10) * 256 + parseInt(action.options.slot, 10)
		};
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeType', [ type ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeTime', [ time ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/PresetSelect', [ preset ]);
	}

	if (action.action == 'ftb') {
		var type = {
				type: "i",
				value: 2
		};
		var time = {
				type: "i",
				value: parseInt(action.options.time)
		};
		var preset = {
				type: "i",
				value: parseInt(action.options.bank, 10) * 256 + parseInt(action.options.slot, 10)
		};
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeType', [ type ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeTime', [ time ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/PresetSelect', [ preset ]);
	}

	if (action.action == 'fade_up_first') {
		var type = {
				type: "i",
				value: 3
		};
		var time = {
				type: "i",
				value: parseInt(action.options.time)
		};
		var preset = {
				type: "i",
				value: parseInt(action.options.bank, 10) * 256 + parseInt(action.options.slot, 10)
		};
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeType', [ type ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeTime', [ time ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/PresetSelect', [ preset ]);
	}
	if (action.action == 'snap_start') {
		var type = {
				type: "i",
				value: 4
		};
		var time = {
				type: "i",
				value: parseInt(action.options.time)
		};
		var preset = {
				type: "i",
				value: parseInt(action.options.bank, 10) * 256 + parseInt(action.options.slot, 10)
		};
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeType', [ type ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeTime', [ time ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/PresetSelect', [ preset ]);
	}
	if (action.action == 'snap_end') {
		var type = {
				type: "i",
				value: 5
		};
		var time = {
				type: "i",
				value: parseInt(action.options.time)
		};
		var preset = {
				type: "i",
				value: parseInt(action.options.bank, 10) * 256 + parseInt(action.options.slot, 10)
		};
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeType', [ type ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/FadeTime', [ time ]);
		self.system.emit('osc_send', self.config.host, self.config.port, '/Mix' + action.options.mix + '/Layer' + action.options.layer + '/Presets/PresetSelect', [ preset ]);
	}
	if (action.action == 'send_int') {
		var bol = {
				type: "i",
				value: parseInt(action.options.int)
		};
		self.system.emit('osc_send', self.config.host, self.config.port, action.options.path, [ bol ]);
	}

};

instance_skel.extendedBy(instance);
exports = module.exports = instance;
