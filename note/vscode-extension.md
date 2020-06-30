### 开发配置·准备

### 项目结构
- `package.json(配置文件)`以及`extension.js`(入口文件)

// package.json
```json
{
	// 扩展的激活事件
  // 告诉vscode，当用户执行了这个命令操作时去执行前面我们定义的内容（contributes.commands）
	"activationEvents": [
		"onCommand:extension.sayHello"
	],
	// 入口文件
	"main": "./src/extension",
	// 贡献点，注册了一个名为extension.sayHello的命令，并在src/extension.js中去实现它
  // 
	"contributes": {
		"commands": [
			{
				"command": "extension.sayHello",
				"title": "Hello World"
			}
		],
		// 快捷键绑定
		"keybindings": [
			{
				"command": "extension.sayHello",
				"key": "ctrl+f10",
				"mac": "cmd+f10",
				"when": "editorTextFocus"
			}
		],
		// 设置菜单
		"menus": {
			"editor/context": [
				{
					"when": "editorFocus",
					"command": "extension.sayHello",
					"group": "navigation"
				}
			]
		}
	}
}
```
*** Ctrl+R来快速重新加载


### activationEvents
- 插件在VS Code中默认是没有被激活的，通过activationEvents来配置
1. onLanguage:${language} ，例：onLanguage:javascript，只要我打开了JS类型的文件，插件就会被激活
2.onCommand:${command}
3.onDebug
4.workspaceContains:${toplevelfilename}
5.onFileSystem:${scheme}
6.onView:${viewId}
7.onUri
8.`*`（配置了*，只要一启动vscode，插件就会被激活，为了出色的用户体验，官方不推荐这么做）

### contributes
configuration：设置
commands：命令
menus：菜单
keybindings：快捷键绑定
languages：新语言支持
debuggers：调试
breakpoints：断点
grammars
themes：主题
snippets：代码片段
jsonValidation：自定义JSON校验
views：左侧侧边栏视图
viewsContainers：自定义activitybar
problemMatchers
problemPatterns
taskDefinitions
colors

https://code.visualstudio.com/api/references/activation-events
https://code.visualstudio.com/api/references/extension-manifest

```typescript
// 获取所有命令
vscode.commands.getCommands().then(allCommands => {
	console.log('所有命令：', allCommands);
});

```

### contributes.menus
- editor/title是key值，定义这个菜单出现在哪里；
- when控制菜单合适出现；
- command定义菜单被点击后要执行什么操作；
- alt定义备用命令，按住alt键打开菜单时将执行对应命令；
- group定义菜单分组；
```json
    "menus": {
      "editor/context": [
        {
          "when": "editorFocus",
          "command": "giao-giao-everyday.sayGiao",
          "group": "navigation"
        }
      ]
    }

```

- 资源管理器上下文菜单 - explorer/context
- 编辑器上下文菜单 - editor/context
- 编辑标题菜单栏 - editor/title
- 编辑器标题上下文菜单 - editor/title/context
- 调试callstack视图上下文菜单 - debug/callstack/context
- SCM标题菜单 -scm/title
- SCM资源组菜单 -scm/resourceGroup/context
- SCM资源菜单 -scm/resource/context
- SCM更改标题菜单 -scm/change/title
- 左侧视图标题菜单 -view/title
- 视图项菜单 -view/item/context
- 控制命令是否显示在命令选项板中 - commandPalette