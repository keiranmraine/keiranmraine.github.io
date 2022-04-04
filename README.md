# keiranmraine.github.io

Extended info about me.

## Development

On fresh checkout:

```bash
python -m venv .venv
# linux
source venv/bin/activate
# windows (with bash shell)
.venv/Scripts/activate
pip install mkdocs-material mdx_truly_sane_lists
# using global pre-commit install
pre-commit install
```

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
# run the pre-commit first to save repeated git add
pre-commit run -a
git status
# deal with adds etc
git add .
git commit ...
```
