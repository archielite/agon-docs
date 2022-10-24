# Rename theme

Sometimes, you want to rename our existing theme to hide info from us or just want to customize our theme and prevent losing your changes when upgrading to the new version.

In source code:

![](/agon/images/rename-theme-source-code.png)

In admin panel:

![](/agon/images/rename-theme-admin.png)

There are some ways to change it:

## 1. Change theme's name directly.

By this way, you can't upgrade theme source code in platform/themes anymore, you will need to handle it by yourself.

### 1.1 Using command line

If you can run command line. It's so easy to do.

Delete folder /vendor and run composer install to re-install vendor packages.
Run command:

```shell
php artisan cms:theme:rename [current-name] [new-name]
```

Ex: `php artisan cms:theme:rename martfury shop`

Change your theme info in `platform/themes/[new-name]/theme.json`.

### 1.2 Manually

1. Rename folder `platform/themes/[current-theme-name]` to `platform/themes/[new-name]`.
2. Rename folder `public/themes/[current-theme-name]` to `public/themes/[new-name]`.
3. Open table settings and replace all key theme-[current-theme-name] to `theme-[new-name]`.
4. Open table widgets and replace all values in theme column to the new name `[new-name]`.
5. Change your theme info in `platform/themes/[new-name]/theme.json`.


## 2. Change public theme name only

By this way, you still keep update from us, it just changes theme info in public places, theme in `platform/themes/[current-theme-name]` still be updated when upgrading using System Updater.

1. Rename folder `public/themes/[current-theme-name]` to `public/themes/[new-name]`.
2. Add to .env
   ```
   CMS_THEME_PUBLIC_NAME=new-name
   ```
3. Copy file `platform/themes/[current-theme-name]/theme.json` to `public/themes/[new-name]/theme.json` then change to your theme info.