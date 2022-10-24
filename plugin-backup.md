# Backup

This plugin is using to backup your website. It will backup uploaded files & database, not full source code.

The backup plugin is just working on MySQL. It's using `mysql` command to dump and restore SQL.

Go to Admin -> System Administration -> Backups to manage backups.

## Commands

You can use commands on your localhost or on VPS to quick manage backups.

- Create a backup.

```shell
php artisan cms:backup:create [name of backup]
```

Ex:

```shell
php artisan cms:backup:create "Backup latest data" --description="This is a demo backup"
```

- Restore a backup

```shell
php artisan cms:backup:restore [backup date]
```

`[backup date]` is an optional param, if you don't provide backup date, it will restore the latest backup.

Ex:
```shell
php artisan cms:backup:restore 2020-04-28 10-05-24
```

- Delete a backup

```shell
php artisan cms:backup:remove [backup date]
```

Ex: 

```shell
php artisan cms:backup:remove 2020-04-28 10-05-24
```

- List all backups:

```shell
php artisan cms:backup:list
```