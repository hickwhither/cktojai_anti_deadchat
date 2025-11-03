install nodes (ltc version ig)


## Ollama
You need to download ollama
https://ollama.com


```
ollama pull gpt-oss:120b-cloud
```

Try run first, it will return a link to login online (for cloud model)
```
ollama run gpt-oss:120b-cloud
```

Change model in conversation_generator.js

Model search: https://ollama.com/search 

## Nodes

Step 1: install libs
```
npm i
```

Step 2: add token
example.config.js -> config.js

Step 3: run
```
node main.js
```