# 开发规范
## 使用Linux/wsl配置环境

windows用户建议使用wsl进行开发

https://learn.microsoft.com/en-us/windows/wsl/

### 终端推荐使用zsh

以下为可选操作，使用其它命令行后续操作应该只在配置镜像源时有区别

```
# 安装 zsh
sudo apt-get install zsh

# 下面有一些命令需要在命令行开启全局代理才能用
vim ~/.zshrc


# ======= 粘贴代理函数 =======
function unproxy() {
    unset http_proxy
    unset https_proxy
    echo -e "已关闭代理"
}
function proxy() {
    host_ip=$(cat /etc/resolv.conf |grep "nameserver" |cut -f 2 -d " ") 
    export ALL_PROXY="http://$host_ip:你的代理端口"

    echo -e "已开启代理"
}
# ============================

# 激活 zsh 配置
source ~/.zshrc


# 开启命令行代理，并开启 VPN 全局模式
proxy

# 安装 oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# 下载相应插件和主题
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions --depth=1

git clone https://github.com/lukechilds/zsh-better-npm-completion ~/.oh-my-zsh/custom/plugins/zsh-better-npm-completion --depth=1

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting --depth=1

git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-completions

git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt" --depth=1

ln -sf "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"

# 打开 zsh 配置文件
vim ~/.zshrc

# ======= 粘贴 oh-my-zsh 配置 =======
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="spaceship"

plugins=(
  git
  node
  nvm
  zsh-better-npm-completion
  yarn
  docker
  docker-compose
  sudo
  extract
  git
  copypath
  encode64
  colored-man-pages
  zsh-completions
  zsh-syntax-highlighting
  zsh-autosuggestions
)

alias l='ls -CF'
alias ll="ls -alFht"
alias lll='ls -alF'
alias la='ls -A'
alias p="pnpm"

source $ZSH/oh-my-zsh.sh
# =====================================

# 激活 zsh 配置
source ~/.zshrc
```

### 安装nodejs, pnpm, 设置镜像源

```
# 设置 nvm 镜像
vim ~/.zshrc

# ======= 粘贴 node 配置 =======
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs

source ~/.zshrc

# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | zsh

source ~/.zshrc

# 取消代理
unproxy

# 安装 lts 版本 node 18
nvm install v18
nvm use 18

# 安装 nrm 镜像
npm --registry https://registry.npmmirror.com/ install -g nrm
# 切换 npm 镜像源
nrm use taobao

# 安装模块管理工具 pnpm
npm install -g pnpm@7.12.2

# 测试安装成功
pnpm -v
# 7.12.2
```

### 安装代码规范工具

```
# 安装
npm install -g commitizen
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

# 使用
git cz
```

### 使用github

根据指南完成github配置

https://docs.github.com/zh/get-started

```
# 克隆远端代码， 这里使用ssh链接
git clone git@github.com:Horizon-srt/juejin-next.git

# 进入目录安装依赖
cd juejin-next
pnpm install

# 运行
pnpm dev

# 创建新分支
# 一般feat/xxx指新的特性等，fix/xxx指修复某部分bug
git checkout -b 分支名称

# 将修改的代码暂存
# 忘了命令是啥了，在vscode左侧边栏上可以找到git，一般点一下文件边上的小加号就行。

# 使用规范工具进行commit
# 按照给的提示继续就行，最好写清在哪里做过什么
git cz

# 提交
git push origin 分支名称

# 如果添加commit小的修改，可以合并为一个pr
git commit --amend
git push origin 分支名称
```

打开github中的仓库，在pull requests中会提示有新的分支，按照提示创建新的pr并通知其它同学进行代码审核就好了。


## 使用Macos配置环境