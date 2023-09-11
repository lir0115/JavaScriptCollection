# Git分支命名规范

#### 版本命名格式：X.Y.Z：
- **修订版号 Z**（x.y.Z | x > 0）向下兼容的修正时才递增，线上bug修复。
- **次版本号 Y**（x.Y.z | x > 0）向下兼容的新功能出现时递增，日常迭代。
- **主版本号 X**（X.y.z | X > 0）不兼容的修改被加入公共 API 时递增，大版本更新。

#### 上游优先

- `master` 作为主分支  一般稳定版本
- 其他分支皆从 master 分支`衍生`
- 注意与传统分支策略区别


#### 多环境长线分支

- master：开发稳定分支
- test：测试测试环境，一般对应测试服，可以详细分为测试--->预发
- prod：线上环境，一般对应正式服【重要】

#### 分支类型

- 功能迭代分支：feature
- 提测后bugfix分支：bugfix
- 线上问题紧急修复：hotfix
- 所有开发动作在短期分支上完成

**长线分支只允许mr、禁止push，feature、bugfix 从 master 分支拉取，
hotfix 从 master(线上稳定分支) 拉取。**分支目的完成后要求及时删除


#### 分支命名

- 功能迭代：feature/xxx
- 提测bugfix：fix/xxx
- 线上问题紧急修复：hotfix/xxx