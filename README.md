# modal-react-validation

> react modal message validation

[![NPM](https://img.shields.io/npm/v/modal-react-validation.svg)](https://www.npmjs.com/package/modal-react-validation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Prerequisites

This component uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [React](https://react.dev/learn/start-a-new-react-project)

Please make sure you have the right versions and download both packages. You can verify this by using this command in your terminal:

```bash
# Check Node.js version
node --version
```

## Install this package

```bash
npm install modal-react-validation
```

## Import the Modal component

```jsx
import { ModalComponent } from 'modal-react-validation'
```

## then you need to call the Modal component with two props and write your message.

```jsx
<ModalComponent open={open} setOpen={setOpen}>
  your message
</ModalComponent>
```

## License

MIT © [nivoix](https://github.com/nivoix)
