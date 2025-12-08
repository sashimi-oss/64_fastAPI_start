# 64_fastAPI_start

# command

- export
```
pg_dump -U <ユーザー名> -h <ホスト> -p <ポート> -d <データベース名> -Fc -f --verbose backup.dump
```

- import
```
pg_restore -U <ユーザー名> -h <ホスト> -p <ポート> -d <復元先DB名> --clean --if-exists --verbose backup.dump
```
