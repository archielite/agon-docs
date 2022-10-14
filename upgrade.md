# Upgrade Guide

### Option 1: Auto update
  - Go to _Admin_ -> _System Administration_ -> _System Updater_ and click "_Download & install update_" button.

### Option 2: Manual update
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor`, `bootstrap`, `vendor`, `composer.json`, `composer.lock` and `public/index.php` from the latest version.
  - Go to _Admin_ -> _Platform Administration_ -> _Cache management_ then clear all caches.
  - Go to _Admin_ -> _Plugins_: deactivate all plugins then activate them again.
  - Go to _Admin_ -> _Translations_ -> _Other translations_ then click on _Import group_ to update translations.
