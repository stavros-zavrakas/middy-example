# Middy middleware example

## Package the code and create an artifact

You can create a zip artifact by running this command in your terminal:
```
npm run package
```

This will generate a `lambda.zip` file that you can use and upload it to AWS through 
you lambda console.

## Testing events

In order to test the lambda function you need to define two test events in the lambda 
console - the warmer event and the normal event.

Warmer event:

```
{
  "warmer": true,
  "concurrency": 3
}
```

Normal event:

```
{
  "normal": true
}
```
