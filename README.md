# React-intl Example

## Setup

```sh
  git clone git@github.com:Sashkan/react-intl-example.git
  cd react-intl-example
  npm i
  npm start
```

Install [babeledit](https://www.codeandweb.com/babeledit/download)

In you code, add any messages

```js
  <FormattedMessage id="app.learn-react-link"
    defaultMessage="Learn React"
    description="Link on react page"/>
```

Once you're done, extract them to update your translation files

```sh
npm run extract-messages
```

Now, run babeledit, and set it up to point toward your translations folder.

Check [this link](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl) for informations on how to configure it.

Once extracted, your editor will display all available texts.

