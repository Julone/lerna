# 用户选择组件
这个组件是一个基于 Vue 3 和 Ant Design Vue 构建的用户选择下拉框。
# 用户多选框

## 正常使用

<code src="./demo/normal.vue"></code>

## 全局修改 - keyname
<code src="./demo/with_provider.vue"></code>

### Props

| 属性名                  | 类型      | 描述                                           |
|----------------------|---------|----------------------------------------------|
| `modelValue`         | Any     | 所选模型的值                                       |
| `options`            | Array   | 下拉选项的数组                                      |
| `disabled`           | Boolean | 如果为 true，则禁用组件                               |
| `optionDisabledProp` | String  | 用于检查选项是否禁用的属性                                |
| `hideValues`         | Array   | 需要从选择选项中隐藏的值                                 |
| `placeholder`        | String  | 下拉框的占位符文本                                    |
| `maxTagCount`        | Number  | 最大显示的标签数量                                    |
| `tagRenderProps`     | Object  | 控制已选中用户的头像显示属性, 比如noID, size属性(参照userAvatar) |

## Emits

| 事件名                 | 描述               |
|---------------------|------------------|
| `update:modelValue` | 当模型值更新时触发的事件     |
| `blur`              | 当组件失去焦点时触发的事件    |
| `focus`             | 当组件获得焦点时触发的事件    |
| `change`            | 当选择的选项发生变化时触发的事件 |
| `search`            | 搜索               |

## Slots

| 插槽名         | 描述                                            |
|-------------|-----------------------------------------------|
| `tagRender` | 渲染已选中的组件     label, closable, onClose, option |
