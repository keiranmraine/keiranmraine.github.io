# keiranmraine.github.io

Extended info about me

## MkDocs

Use MkDocs.  Render locally for testing:

```bash
cd mkdocs
mkdocs serve -a 0.0.0.0:8000
```

Before release:

```bash
cd mkdocs
mkdocs build  -d ../docs
cd ../
git commit -m "update comment" docs mkdocs
```
