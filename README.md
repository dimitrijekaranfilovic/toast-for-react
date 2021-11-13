# toast-for-react

Another toast for react. Simple side project of mine.

## Usage

In your `App.js` file, simply import
`ToasContainer` component and `useToast` hook, like this:

- `import { useToast } from "toast-for-react"; `

- `import ToastContainer from "toast-for-react"; `

In your `App` component, call the `useToast` hook, like this:

`const { toastStateList, showToast } = useToast();`

`toastStateList` is an array of objects, where each object represents a state for a certain toast.

`showToast` is a function that is used for displaying toast. Its parameters will be explained below.

After you've called the `useToast` hook,
you can add `ToastContainer` to your `App` component. It is recommended that you put it at its top (otherwise, behaviour may or may not be unpredictable). Minimal setup looks like this:

`<ToastContainer toastStateList={toastStateList} /> `

Additional props will be explained below.

### `showToast` function

Definition of this function looks like this

`showToast( messageContent, messageType, displayTime, showIcon )`

**Parameters**

| Parameter name | Required | Default value    | Description                                                                    |
| -------------- | -------- | ---------------- | ------------------------------------------------------------------------------ |
| messageContent | yes      | no default value | content of the toast which will be displayed                                   |
| messageType    | no       | info             | type of toast; it can have one of 3 values: "sucess", "info", "error"          |
| displayTime    | no       | 5000             | duration of toast display (in milliseconds)                                    |
| showIcon       | no       | true             | indicates whether the appropriate icon for given messageType will be displayed |
