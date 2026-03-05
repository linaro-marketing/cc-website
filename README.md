## Contributing

The instructions for contributing to the website depend on whether or not you have write access to the main repository.

### If you have write access ...

Create a new branch from `main`:

* `git checkout main`
* `git pull` (to ensure your copy is up to date)
* `git checkout -b <new branch name>`

### If you do not have write access ...

Fork the repository to your own namespace

### In both cases ...

When you have made your changes and tested them with `npm run dev`, push them back to GitHub and raise a pull request against the `main` branch. This will trigger the deployment of a test version under a cloudfront.net URL.

## Updating Member logos

Logo images can be added to the CoreCollective S3 bucket: static-core-collective/company_logos.
Copy the asset url and update the base url to "https://static.corecollective.dev"
Add the url in alphabetical order to the company.yaml list with a `alt` field also.
If the logo appears larger or small add a `scale` field also to adjust accordingly.

## Updating blogs

New blogs should be added as `.mdx` files to `src/content/blogs` folder.
The current schema requires a `title`, `date`, `image` and `author`, along with the content.
