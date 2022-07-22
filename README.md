# Example of Fetching API with Preload

The goal of using preload fetching at the DOM interpretation time is to fetch data from API before loading and executing the JS files needed for the components to fetch the API on useEffect() lifecycle.

```
<Head>
  <link rel="preload" href={apiURL} as="fetch" />
</Head>
```

You can see the timing of fetching in the console.

## Caveats
- After the JS files are cached by the browser you wont be able to note a big difference on timing. So use it with the no cache option on the network tab to see a difference.
- In development mode you wont be able to not a big difference between normal and fast example.
- Only works with the native `fetch()`, so it doesn't work with Axios, though some libs you can pass a custom fetcher.

## How to use

### Development mode

```bash
npm install
npm run dev
```

### Testing
```
npm run build && NODE_ENV=production npm start
```