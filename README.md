# ciw-i18n
Cloud I Wanna 多语言支持

## 提交翻译
使用 [Pull request](https://help.github.com/articles/creating-a-pull-request/) 添加/修改翻译

添加新语言：

1. 新建一个以语言代码命名的文件夹，例如：``zh-cn``、``en-us``，语言代码可从浏览器中获得：
```js
navigator.language.toLowerCase()
```
2. 文件夹中新建 ``README.md``，提供该语言翻译的补充说明（如果有）
3. 复制 [i18n.json](./i18n.json) 到文件夹中，然后就可以开始翻译了

### 格式
使用 ``JSON`` 文件表示翻译映射表：
```js
{
  "语言": "Language",   // 一般情况
  "确定": ["OK", "Yes"] // 多种翻译
}
```
如果一个翻译项有多种翻译，请在 ``README.md`` 文件中说明其用法

具体的实例可以参考 [en-us](./en-us)

