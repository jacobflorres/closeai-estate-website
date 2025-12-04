## These are the key insights from the performnace report:


These audits are identified as the top issues impacting your performance.

High
Reduce JavaScript execution time TBT
1.8s spent executing JavaScript
Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this.

Learn how to improve this
URL	Total CPU Time	Script Evaluation	Script Parse
https://fast.wistia.com/assets/external/publicApi.js
1.1s	794ms	161ms
Unattributable
471ms	56ms	0ms
https://close-ai.netlify.app/
398ms	5ms	3ms
https://close-ai.netlify.app/_next/static/chunks/febe4810d712afdf.js
353ms	125ms	3ms
https://fast.wistia.com/player.js
321ms	290ms	7ms
https://close-ai.netlify.app/_next/static/chunks/4784630355418e2a.js
240ms	167ms	42ms
https://fast.wistia.net/assets/external/captions.js
96ms	73ms	22ms
https://fast.wistia.net/assets/external/engines/hls_video.js
57ms	42ms	1ms


A large DOM will increase memory usage, cause longer style calculations, and produce costly layout reflows.

Learn how to improve this
Statistic	Element	Value
Total DOM Elements		1385
Maximum DOM Depth	
g > g > g > path
<path d="M22 14L27 19">
33
Maximum Child Elements	
body.generalsans_39c3afb2-module__6FKzFa__variable
<body class="generalsans_39c3afb2-module__6FKzFa__variable font-sans antialiased">
39
