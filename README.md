# 10 Inferences: Causal Designs in JASP

**Read the book:** https://scoultersdcoe.github.io/10inferences/

The source for the online book. Each module of the student manual is one chapter; the site is built with [MkDocs](https://www.mkdocs.org) and the [Material](https://squidfunk.github.io/mkdocs-material/) theme, with equations typeset by MathJax.

## Layout

```
mkdocs.yml                 site settings and the table of contents (nav)
docs/index.md              title page and contents
docs/preface.md            How to use this book
docs/part1-foundations.md  Part 1
docs/part2-data-and-jasp.md
docs/module-01.md ... module-11.md   one chapter per module
docs/wrap-up.md
docs/glossary.md
docs/references.md         works cited, readings by module, The Effect chapter map
docs/img/                  figures and JASP screenshots
.github/workflows/deploy.yml   builds and publishes to GitHub Pages on every push to main
```

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `10-inferences`) and push the contents of this folder to its `main` branch.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow runs on the push and publishes the book at `https://<your-user>.github.io/<repo>/`. Later pushes rebuild it automatically.
4. Optional: set `site_url` in `mkdocs.yml` to that address.

## Preview on your own computer

```
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000.

## Editing

Write in Markdown. Display equations go between `$$` lines and use LaTeX, for example:

```
$$
Y_i = \beta_0 + \beta_1 D_i + \varepsilon_i
$$
```

To add a chapter, create the file in `docs/` and add a line for it under `nav:` in `mkdocs.yml`.
