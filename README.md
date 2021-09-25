# ciw-i18n
Cloud I Wanna translations

## Contributing
If you want to add/correct some translations, please [open a pull request!](https://help.github.com/articles/creating-a-pull-request/)

Add a new language:
1. Make a new folder named with language code. (e.g. ``zh-cn``, ``en-us``. You can get it from your browser console using ``navigator.language.toLowerCase()``)
2. Copy [i18n.json](./i18n.json) into your new folder and start translating.
3. Add a ``README.md`` if you have any anything to tell us.

### Format
We use ``JSON`` files to look up translations.
Here is an example:
```js
{
  "语言": "Language",   // Common case
  "确定": ["OK", "Yes"] // Multiple translations case
}
```
For the multiple translations case, please tell us when and where to use them in your ``README`` file.
