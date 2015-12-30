'use strict';

angular.module('gmailChat.version', [
  'gmailChat.version.interpolate-filter',
  'gmailChat.version.version-directive'
])

.value('version', '0.1');
