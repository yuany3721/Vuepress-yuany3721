---
title: GLM3 API 使用指北
---

## FastAPI docs

由FastAPI自动生成的API[说明页面](http://yuany3721.site:6017/docs)，由[API部署代码](https://github.com/THUDM/ChatGLM3/blob/main/openai_api_demo/api_server.py)中注释自动生成，基于[OpenAI API](https://platform.openai.com/docs/api-reference/chat)。

API入口：
  - "/health": 响应API运行状态，返回200则运行正常
  - "/v1/chat/completions": 响应文本对话请求，可选是否流式输出
  - "/v1/embeddings": 响应一组列表式文本对话请求

更多代码说明：

> This script implements an API for the ChatGLM3-6B model,
> formatted similarly to OpenAI's API (https://platform.openai.com/docs/api-reference/chat).
> It's designed to be run as a web server using FastAPI and uvicorn,
> making the ChatGLM3-6B model accessible through OpenAI Client.
> 
> Key Components and Features:
> - Model and Tokenizer Setup: Configures the model and tokenizer paths and loads them.
> - FastAPI Configuration: Sets up a FastAPI application with CORS middleware for handling cross-origin requests.
> - API Endpoints:
>   - "/v1/models": Lists the available models, specifically ChatGLM3-6B.
>   - "/v1/chat/completions": Processes chat completion requests with options for streaming and regular responses.
>   - "/v1/embeddings": Processes Embedding request of a list of text inputs.
> - Token Limit Caution: In the OpenAI API, 'max_tokens' is equivalent to HuggingFace's 'max_new_tokens', not 'max_length'.
> For instance, setting 'max_tokens' to 8192 for a 6b model would result in an error due to the model's inability to output
> that many tokens after accounting for the history and prompt tokens.
> - Stream Handling and Custom Functions: Manages streaming responses and custom function calls within chat responses.
> - Pydantic Models: Defines structured models for requests and responses, enhancing API documentation and type safety.
> - Main Execution: Initializes the model and tokenizer, and starts the FastAPI app on the designated host and port.

## API调用示例

参考[api-demo](https://github.com/THUDM/ChatGLM3/blob/main/openai_api_demo/openai_api_request.py)

修改第15行`base_url`为目标URL。

