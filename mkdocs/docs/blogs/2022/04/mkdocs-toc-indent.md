# Markdown TOC and Mkdocs

There is a small issue with the tables-of-contents generated to confirm with [MD007][md007-url]
in that the lint/standard is 2 spaces, while Mkdocs required 4 spaces to work.

Thankfully a kind soul has developed a plugin to stop this being a pain when you want your TOC to automatically update
on save, but not get corrupted.

[`mdx_truly_sane_lists`][sane-lists-url] is what you need.  Simply install it as part of your build environment and append
it to the `mkdocs.yaml` markdown_extensions section:

```yaml
markdown_extensions:
  - ...
  - mdx_truly_sane_lists
```

<!-- refs -->

[md007-url]: https://github.com/updownpress/markdown-lint/blob/master/rules/007-ul-indent.md
[sane-lists-url]: https://github.com/radude/mdx_truly_sane_lists
