
## 可能遇到的问题

### 附件上传问题

传统实现方式：

确定图片是在本地的还是项目内的？
如果是本地的图片需要做本地资源映射
如果是项目内的话试下访问 localhost:port/project_name/file_path/xxy.jpg

本地资源映射 比如 SpringBoot 可以重写 addResourceHandlers 映射文件路径实现
注意：拦截器放行访问路径

其他实现方式：

云储存

常见的 七牛云，OSS（阿里云）等，这些云平台提供API接口，调用相应的接口，文件上传后会返回图片存储在服务器上的路径，前端获得这个路径保存下来提交给后端即可。此流程处理相对简单

或者 图片转 base64 后上传


### 富文本编辑器选择

一个是 vue-element-admin 中作者建议的 tinymce 符文编辑器

另外一个是 ueditor , 这里可以参考 vue+Ueditor集成 [前后端分离项目][图片、文件上传][富文本编辑] https://www.cnblogs.com/ocean-sky/p/7132319.html 

或者 https://github.com/HaoChuan9421/vue-ueditor-wrap
