# 常用命令

## Maven 常用命令

- 将依赖复制到指定目录
mvn dependency: copy-dependencies - DoutputDirectory=./lib

- 部署非Maven项目的jar包
mvn deploy:deploy-file -Dgroupld=[groupld] -DartifactId=[artifactld] -Dversion=[version] -Dpackaging=jar -Dfile=[jarFilePath] -Durl=[repositoryUrl]

- 査看依赖树
mvn dependency:tree

- 跳过测试阶段且不编译测试用例类。
mvn -Dmaven.test.skip=true ...

## Git常用命令

- 修改提交者的信息
git config --global user.name [username] 
git config --global user.email [email]

- 査看当前配置有哪些远程仓库
git remote -v

## MySQL常用命令

- 启动/关闭
 mysql.server start
 mysql.server stop

- 连接本机上的MySQL
mysql -uroot -p

- 修改MySQL密码
set password for root=password（"root"）

- 查看数据库连接情况
show variables like  '%max_connections%' ; # 查看最大连接数设置
set global max_connections = 200; # 设置最大连接数
select * from information_schema.processlist where db=''； # 指定数据库

- 开启慢査询日志
show variables like '%slow%' ; //查看慢查询日志配置
set global slow_query_log= 'ON'; //开启慢查询
set global long_query_time=4; //慢查询语句的耗时阈值

- 添加索引
alter table table_name  add index index_name (column_list); 
alter table table_name  add unique index_name (column_list); 
alter table table_name  add primary key (column_list);

- 删除索引
drop index index_name on talbe_name 
alter table table_name drop index index_name 
alter table table_name drop primary key

- 查看索引
show index from tblname;
show keys from tblname;


## Redis常用命令

后台启动 redis-server & 

### 删 key 操作

- redis-cli
- auth minstone
- keys import*
- del "import_zip_file_A_2_mingstone"

删除所有 key
select 0; dbsize; flushall

### redis hash

- hgetall ureport;
- HGET ureport "\xAC\xED\x00\x05t\x00\x08minstone";


## Nginx常用命令

- ./naginx start
- ./naginx stop
- ./naginx reload

## 常用Linux命令

rm rf ureport/ 删除这个文件夹

### alias 使用

```shell
alias cls
alias cls='clear'
unalisa cls
iterm2 在 ~/.zshrc 配置文件里面加 alias
```

### ssh sftp

```shell
ssh root@192.168.0.201
sftp root@192.168.0.201 put 上传文件路径 ； get 下载文件路径

- server-filename 必须显式指明，否则报错：文件名无效
  ftp> put /local/path/filename /remote/path/server-filename
  ftp> get remote-filename local-filename

lcd 切换本地工作路径
lpwd 显示本地工作路径
```

## Homebrew 命令操作

- Jenkins示例

```javascript

Install the latest Weekly version: brew install jenkins
Install a specific Weekly version: brew install jenkins@YOUR_VERSION
Start the Jenkins service: brew services start jenkins
Restart the Jenkins service: brew services restart jenkins
Update the Jenkins version: brew upgrade jenkins

brew install mysql (brew services start|restart|stop mysql ; mysql.server start|stop|restart)

```


## Iterm2 快捷键

```javascript

清除当前行：ctrl + u
到行首：ctrl + a
到行尾：ctrl + e
前进后退：ctrl + f/b (相当于左右方向键)

删除当前光标的字符：ctrl + d
删除光标之前的字符：ctrl + h
删除光标之前的单词：ctrl + w
删除到文本末尾：ctrl + k
交换光标处文本：ctrl + t
```


## Shell操作

```javascript
1. 光标在屏幕文本中的移动既可以用箭头键，也可以使用 hjkl 字母键。
    h (左移)	j (下行)       k (上行)	    l (右移)

2. 欲进入 Vim 编辑器(从命令行提示符)，请输入：vim 文件名 <回车>

3. 欲退出 Vim 编辑器，请输入 <ESC> :q! <回车> 放弃所有改动。
   或者输入 <ESC> :wq <回车> 保存改动。

4. 在正常模式下删除光标所在位置的字符，请按： x

5. 欲插入或添加文本，请输入：


    i   输入欲插入文本   <ESC>    在光标前插入文本
    A   输入欲添加文本   <ESC>    在一行后添加文本

6. 欲从当前光标删除至下一个单词，请输入：dw
   欲从当前光标删除至当前行末尾，请输入：d$
   欲删除整行，请输入：dd

7. 欲重复一个动作，请在它前面加上一个数字：2w

8. 在正常模式下修改命令的格式是：
   operator [number] motion
   其中：
   operator - 操作符，代表要做的事情，比如 d 代表删除
   [number] - 可以附加的数字，代表动作重复的次数
   motion - 动作，代表在所操作的文本上的移动，例如 w 代表单词(word)，
   $ 代表行末等等。

9. 欲移动光标到行首，请按数字 0 键：0

10. 欲撤消以前的操作，请输入：u (小写的 u)
    欲撤消在一行中所做的改动，请输入：U (大写的 U)
    欲撤消以前的撤消命令，恢复以前的操作结果，请输入：CTRL-R

11. CTRL-G 用于显示当前光标所在位置和文件状态信息。
    G 用于将光标跳转至文件最后一行。
    先敲入一个行号然后输入大写 G 则是将光标移动至该行号代表的行。
    gg 用于将光标跳转至文件第一行。

12. 输入 / 然后紧随一个字符串是在当前所编辑的文档中正向查找该字符串。
    输入 ? 然后紧随一个字符串则是在当前所编辑的文档中反向查找该字符串。
    完成一次查找之后按 n 键是重复上一次的命令，可在同一方向上查
    找下一个匹配字符串所在；或者按大写 N 向相反方向查找下一匹配字符串所在。
    CTRL-O 带您跳转回较旧的位置，CTRL-I 则带您到较新的位置。

13. 如果光标当前位置是括号(、)、[、]、{、}，按 % 会将光标移动到配对的括号上。

14. 在一行内替换头一个字符串 old 为新的字符串 new，请输入 :s/old/new
    在一行内替换所有的字符串 old 为新的字符串 new，请输入 :s/old/new/g
    在两行内替换所有的字符串 old 为新的字符串 new，请输入 :#,#s/old/new/g
    在文件内替换所有的字符串 old 为新的字符串 new，请输入 :%s/old/new/g
    进行全文替换时询问用户确认每个替换需添加 c 标志 :%s/old/new/gc

```

## Java调优常用命令


### JVM配置示例

```java
-server #在默认的64位机器下
-Xms6000M #最小堆大小
-Xmx6000M #最大堆大小
#-XX: +AggressiveHeap # 一些激进的堆配置策略，包括将Xms和Xmx值设置为相同的值等，由于隐藏了很多调优工作，故不建议启用
-Xmn500M #新生代大小
-Xss256K #栈大小
-XX:PermSize=500M # 永久代大小(JDK 7)
-XX:MaxPermSize=500M (JDK 7)
#-XX:MetaspaceSize=128m # 元空间大小(JDK 8)
#-XX:MaxMetaspaceSize=512m (JDK 8)
-XX: SurvivorRatio=65536 #Eden 区与 Survivor 区的比例
-XX:MaxTenuringThreshold=0 #晋升到老年代需要的存活次数，设置为0时，Survivor区 
失去作用，进行一次Minor GC, Eden区中存活的对象就会进入老年代，默认值是15,使用CMS 
时默认值是4
```