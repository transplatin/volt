# Contributing to Volt-UI

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Volt-UI community. Here are a few guidelines that will help you along the way.

## Code of Conduct

Volt-UI has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## A large spectrum of contributions

There are many ways to contribute to Volt-UI, code contribution is one aspect of it. For instance, documentation improvements are as important as code changes.

## Your first Pull Request


## Sending a Pull Request

Volt-UI is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/Volt-UI.git
cd Volt-UI
git remote add upstream https://github.com/mui-org/Volt-UI.git
```

3. Synchronize your local `next` branch with the upstream one:

```sh
git checkout next
git pull upstream next
```

4. Install the dependencies with npm:

```sh
npm install
```

5. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

6. Make changes, commit and push to your fork:

```sh
git push -u origin HEAD
```

7. Go to [the repository]() and make a Pull Request.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### Trying changes on the documentation site

#### Checks and how to fix them

### Coding style

Please follow the coding style of the project. Volt-UI uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `npm run prettier` reformats the code.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!

## License
