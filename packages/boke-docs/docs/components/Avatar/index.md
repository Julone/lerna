# 用户头像

## 正常使用

<code src="./demo/normal.vue"></code>

## 全局修改 - keyname
<code src="./demo/with_provider.vue"></code>

### Props
| 属性名         | 类型                  | 必填   | 默认值      | 描述                                                         |
| ------------ | ------------------- | ----- | --------- | ------------------------------------------------------------ |
| size         | Number, String      | 否     | 28        | 头像尺寸，可以是数字或字符串。                                      |
| hidePopover  | Boolean             | 否     | false     | 是否隐藏气泡框（popover）。                                         |
| onlyIcon     | Boolean             | 否     | false     | 是否只显示头像图标，不显示其他内容。                                   |
| onlyName     | Boolean             | 否     | false     | 是否只显示用户名，不显示其他信息。                                    |
| linkType     | 不限类型              | 否     | "primary" | 链接类型，用于决定用户名称显示的样式或链接类型。                             |
| data         | 不限类型              | 否     | null      | 用户数据，用于显示头像、用户名等信息。                                  |
| shape        | String              | 否     | "circle"  | 头像形状，可以是"circle"（圆形）或其他支持的形状。                          |
| insidePopover| Boolean             | 否     | false     | 是否在气泡框内部显示。                                              |
| noID         | Boolean             | 否     | false     | 是否隐藏用户ID。                                                 |
| noDialogDetail| Boolean            | 否     | false     | 是否隐藏对话框详细信息。                                              |
| tag          | Boolean             | 否     | false     | 是否显示标签样式。                                                 |
| closable     | Boolean             | 否     | false     | 是否可关闭。                                                    |
| color        | String              | 否     | ""        | 头像或标签的颜色。                                                 |
| disabled     | Boolean             | 否     | false     | 是否禁用。                                                     |
| suffix       | String              | 否     | ""        | 后缀文本，显示在头像或标签之后。                                        |
| is_highlight | Function            | 否     | () => false| 一个函数，用于确定头像或标签是否高亮显示的条件。                              |
