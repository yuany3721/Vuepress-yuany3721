<template><div><h2 id="fastapi-docs" tabindex="-1"><a class="header-anchor" href="#fastapi-docs"><span>FastAPI docs</span></a></h2>
<p>由FastAPI自动生成的API<a href="http://yuany3721.site:6017/docs" target="_blank" rel="noopener noreferrer">说明页面</a>，由<a href="https://github.com/THUDM/ChatGLM3/blob/main/openai_api_demo/api_server.py" target="_blank" rel="noopener noreferrer">API部署代码</a>中注释自动生成，基于<a href="https://platform.openai.com/docs/api-reference/chat" target="_blank" rel="noopener noreferrer">OpenAI API</a>。</p>
<p>API入口：</p>
<ul>
<li>&quot;/health&quot;: 响应API运行状态，返回200则运行正常</li>
<li>&quot;/v1/chat/completions&quot;: 响应文本对话请求，可选是否流式输出</li>
<li>&quot;/v1/embeddings&quot;: 响应一组列表式文本对话请求</li>
</ul>
<p>更多代码说明：</p>
<blockquote>
<p>This script implements an API for the ChatGLM3-6B model,
formatted similarly to OpenAI's API (https://platform.openai.com/docs/api-reference/chat).
It's designed to be run as a web server using FastAPI and uvicorn,
making the ChatGLM3-6B model accessible through OpenAI Client.</p>
<p>Key Components and Features:</p>
<ul>
<li>Model and Tokenizer Setup: Configures the model and tokenizer paths and loads them.</li>
<li>FastAPI Configuration: Sets up a FastAPI application with CORS middleware for handling cross-origin requests.</li>
<li>API Endpoints:
<ul>
<li>&quot;/v1/models&quot;: Lists the available models, specifically ChatGLM3-6B.</li>
<li>&quot;/v1/chat/completions&quot;: Processes chat completion requests with options for streaming and regular responses.</li>
<li>&quot;/v1/embeddings&quot;: Processes Embedding request of a list of text inputs.</li>
</ul>
</li>
<li>Token Limit Caution: In the OpenAI API, 'max_tokens' is equivalent to HuggingFace's 'max_new_tokens', not 'max_length'.
For instance, setting 'max_tokens' to 8192 for a 6b model would result in an error due to the model's inability to output
that many tokens after accounting for the history and prompt tokens.</li>
<li>Stream Handling and Custom Functions: Manages streaming responses and custom function calls within chat responses.</li>
<li>Pydantic Models: Defines structured models for requests and responses, enhancing API documentation and type safety.</li>
<li>Main Execution: Initializes the model and tokenizer, and starts the FastAPI app on the designated host and port.</li>
</ul>
</blockquote>
<h2 id="api调用示例" tabindex="-1"><a class="header-anchor" href="#api调用示例"><span>API调用示例</span></a></h2>
<p>参考<a href="https://github.com/THUDM/ChatGLM3/blob/main/openai_api_demo/openai_api_request.py" target="_blank" rel="noopener noreferrer">api-demo</a></p>
<p>修改第15行<code v-pre>base_url</code>为目标URL。</p>
</div></template>


