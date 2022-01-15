# 笔记本

## 2020

### 启动虚拟机

sudo -b /Applications/Parallels\ Desktop.app/Contents/MacOS/prl_client_app

### 行为参数化演变到 lamada 表达式

1.匿名内部类 2.象方法调用

### gc 频繁优化过程，导入慢

1.获取耗 CPU 的线程，获取 dumo.prof 文件 2.获取慢 sql 日志 3.优化 sql（去\*，in 等不良 sql 写法）、优化导入 Excel 逻辑 4.可以根据 jvisualVM 测试，IDEA VM Options
调低堆内存 -Xmx1024m -Xms1024m

### redis

后台启动 redis-server &

#### 删 key 操作

redis-cli auth minstone keys import\* del "import_zip_file_A_2_mingstone"

删除所有 key select 0; dbsize; flushall

#### redis hash

hgetall ureport; HGET ureport "\xAC\xED\x00\x05t\x00\x08minstone";

### iterm2 快捷键

清除当前行：ctrl + u 到行首：ctrl + a 到行尾：ctrl + e 前进后退：ctrl + f/b (相当于左右方向键)

删除当前光标的字符：ctrl + d 删除光标之前的字符：ctrl + h 删除光标之前的单词：ctrl + w 删除到文本末尾：ctrl + k

交换光标处文本：ctrl + t

自动连ssh https://zhuanlan.zhihu.com/p/69379306

### htop

[htop的学习使用](https://www.jianshu.com/p/0597336dd845)

### git 删除 commit 记录

[git 能不能删除commit 记录?](https://www.jianshu.com/p/4877b75312d8)

### maven install jar 路径突然变成本地路径

原因：maven 的 local repository 不知道啥时候修改了
[如何设置maven的local repository目录](https://www.cnblogs.com/jtlgb/p/5951666.html)

### mysql in 语句优化

[MySQL查询语句in子查询的优化](https://blog.csdn.net/ltaihyy/article/details/82148840?utm_medium=distribute.pc_relevant.none-task-blog-OPENSEARCH-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-1.control)

cnblogs.com/tangyanbo/p/4462734.html

### zsh 插件与主题选择

https://segmentfault.com/a/1190000018093021
https://blog.csdn.net/amoscykl/article/details/80616873

### shell 操作

````js
rm rf ureport/ 删除这个文件夹

1. 光标在屏幕文本中的移动既可以用箭头键，也可以使用 hjkl 字母键。

    h (左移)	j (下行)       k (上行)	    l (右移)

2. 欲进入 Vim 编辑器(从命令行提示符)，请输入：vim 文件名 <回车>

3. 欲退出 Vim 编辑器，请输入 <ESC> :q! <回车> 放弃所有改动。 或者输入 <ESC> :wq <回车> 保存改动。

4. 在正常模式下删除光标所在位置的字符，请按： x

5. 欲插入或添加文本，请输入：

    i   输入欲插入文本   <ESC>    在光标前插入文本
    A   输入欲添加文本   <ESC>    在一行后添加文本

6. 欲从当前光标删除至下一个单词，请输入：dw 欲从当前光标删除至当前行末尾，请输入：d$ 欲删除整行，请输入：dd

7. 欲重复一个动作，请在它前面加上一个数字：2w

8. 在正常模式下修改命令的格式是： operator [number] motion 其中： operator - 操作符，代表要做的事情，比如 d 代表删除
   [number] - 可以附加的数字，代表动作重复的次数 motion - 动作，代表在所操作的文本上的移动，例如 w 代表单词(word)， $ 代表行末等等。

9. 欲移动光标到行首，请按数字 0 键：0

10. 欲撤消以前的操作，请输入：u (小写的 u)
    欲撤消在一行中所做的改动，请输入：U (大写的 U)
    欲撤消以前的撤消命令，恢复以前的操作结果，请输入：CTRL-R

11. CTRL-G 用于显示当前光标所在位置和文件状态信息。 G 用于将光标跳转至文件最后一行。
先敲入一个行号然后输入大写 G 则是将光标移动至该行号代表的行。 gg 用于将光标跳转至文件第一行。

12. 输入 / 然后紧随一个字符串是在当前所编辑的文档中正向查找该字符串。 输入 ? 然后紧随一个字符串则是在当前所编辑的文档中反向查找该字符串。
完成一次查找之后按 n 键是重复上一次的命令，可在同一方向上查
    找下一个匹配字符串所在；或者按大写 N 向相反方向查找下一匹配字符串所在。 CTRL-O 带您跳转回较旧的位置，CTRL-I 则带您到较新的位置。

13. 如果光标当前位置是括号(、)、[、]、{、}，按 % 会将光标移动到配对的括号上。

14. 在一行内替换头一个字符串 old 为新的字符串 new，请输入 :s/old/new 在一行内替换所有的字符串 old 为新的字符串 new，
请输入 :s/old/new/g 在两行内替换所有的字符串 old 为新的字符串
    new，请输入 :#,#s/old/new/g 在文件内替换所有的字符串 old 为新的字符串 new，
请输入 :%s/old/new/g 进行全文替换时询问用户确认每个替换需添加 c 标志 :%s/old/new/gc

````

### idea 常用快捷键

- 删除行 command-delete
- 复制行 command-D
- 跳至行前 command-⬅️
- 跳至行后 command-➡️
- 跳至前一个单词 option-⬅️
- 跳至后一个箭头 option-➡️
- 向上移动行 command-shift-⬆️
- 向下移动行 command-shift-⬆️
- 快速修正 option-enter

- 参看类方法 command-F12

### 选择 show 配置文件进行打包并跳过测试

mvn clean package -Dmaven.test.skip=true -P show

### alias 使用

alias cls alias cls='clear'
unalisa cls iterm2 在 ~/.zshrc 配置文件里面加 alias

### ssh sftp

ssh root@192.168.0.201 sftp root@192.168.0.201 put 上传文件路径 ； get 下载文件路径

- server-filename 必须显式指明，否则报错：文件名无效 
  ftp> put /local/path/filename /remote/path/server-filename 
  ftp> get remote-filename local-filename

lcd 切换本地工作路径 lpwd 显示本地工作路径

### mvn 命令找不到解决

vim ~/.zshrc 在文件末尾添加上之前的 source ~/.bash_profile 保存即可。

### locate

locate 是 Unix/Linux 下的命令工具，基本原理就是通过定期更新系统的文件和文件名并把索引信息放入系统的数据库中，
当通过 locate 查找文件时直接从数据库里取数据。而且 locate 可以查到 Spotlight
查不到的系统文件。基本的使用方法非常简单，比如你想找 Nignx 的配置文件在哪，只需输入：locate nginx.conf

### mac 没有 telnet、ftp

brew install inetutils

可以添加 export PATH="/usr/local/opt/inetutils/libexec/gnubin:$PATH"，本人呢没有

### mysql 连接数查询

分析原因：https://www.cnblogs.com/Honeycomb/p/9796383.html
show variables like 'max_connections'; show global variables like 'wait_timeout'; show status like 'Threads%'; SHOW
PROCESSLIST;

SELECT _ FROM information_schema.PROCESSLIST WHERE db LIKE '%job_20%' AND HOST LIKE '192.168.0%'; SELECT _ FROM
information_schema.PROCESSLIST WHERE db LIKE '%app_20%' AND HOST LIKE '192.168.0%';

show full processlist; select \* from information_schema.INNODB_TRX;

select \* from performance_schema.threads where processlist_id = 20025;

select \* from performance_schema.events_statements_current where THREAD_ID = 20051;

### ureport 问题

教程：https://www.w3cschool.cn/ureport/ureport-dkp92hap.html

[ureport-spring-boot-starter](https://github.com/pig-mesh/ureport-spring-boot-starter/blob/master/src/main/java/com/pig4cloud/plugin/ureport/provider/DfsReportProvider.java)

[调研报告](
http://60.174.249.204:38001/bigdata/kdgc-bd/blob/65292898e1643c259fa09805e8225b4027b7a2cf/BD-UREPORT2/docs/ureport.md)

[详细使用](https://www.cnblogs.com/niceyoo/p/14311257.html)

行高和列宽是按point来设置的， 1 mm = 2.834646 point; 1 point = 0.352778 mm ,http://vip.bstek.com/?/question/89

- 数据源情况 三种数据源配置方式：添加数据库连接、springbean 连接、内置数据源 单个报表可以使用多个数据源联合数据

- 报表设计方面 单元格计算模型 页面配置：页面类型（A4）、上下左右边距（ml）、宽、高、背景图片 页面页脚 
  分页配置：自动、固定行数 分栏配置：栏数、栏间距
  列属性，风格跟 Excel 类似 重复表头、表尾 聚合方式:列表 数据展开方式：不展开 行高 换行计算 补充空白行+条件属性进行特殊分页

- 注意事项 报表计算模型 能设计使用的报表可以参考
  http://www.bsdn.org/projects/ureport/deploy/ureport-sample/#

- 疑问： 1、单元格题名内容过长，业务项目中则存在自动跨行的情况？做不到 2、如何动态获取数据进行报表？业务项目是选择档案数据进行导出报表
  3、设计数据库表关联操作的话，数据源数据需要开发来配置？ 4、不支持 ie

- 整合项目做了什么？ 1、ureport2 的配置 2、UReport2 报表设计器  `URL：http://host[:port][/context-path]`
  /ureport/designer，菜单路径做特殊处理去掉/minstone: <c:when test="${fn:contains(md.url,'ureport')}">
  3、设计后报表默认存储路径：WEB-INF/ureportfiles。

  `UReport2默认提供的名为“服务器文件系统”的报表存储机制，
  实际上是实现了UReport2提供的com.bstek.ureport.provider.report.ReportProvider接口;如果我们定义了自己的报表存储器，
  只需要实现了ReportProvider接口后，并将实现类配置到Spring中，让其成为一个标准的Spring Bean，这样UReport2就会检测到它而将其加载。 `

  4、ureport 日志是否单独分出来？ 5、报表设计自定义，根据档案室来存  
  6、spring bean 配置数据源方式实现动态数据 7、数据集字段显示中文的名称 8、默认数据源数据集

#### 如何修改源码

ureporr2-js 执行命令安装：webpack4 npm install --save-dev webpack@4 部署：npm run dev

#### 多租户下在ureport怎么处理？

- 主要实现思路为 由后台配置菜单，在启动系统时，将该url以及对应的ureport的url一并传给前端 将ureport的url，
  使用iframe打开 追加token在该url的参数中，用于用户身份的判断

> 租户下如何应用报表引擎 回到最初，我们的目标是为了满足可以针对不同租户建立报表。那么我们再次基础上需要满足一定的逻辑数据隔离。
> 最基础的我们需要在UReport设计时候，追加参数。进行数据的隔离~当前我们使用了物理隔离后不存在该问题 基本思路

- 通过过滤器，拦截请求参数
- 将请求参数转换为属性

- md-archive租户下分配多个应用，如：认证中心，租户中心，门户，存储中心，接口中心等,租户创建后，
  Nginx 在转发请求到网关时，需要在请求头 X-Tenant 指定此标识

#### springCloud通过网关访问ureport

[springCloud通过网关访问ureport](https://blog.csdn.net/qq_36126934/article/details/81589170?utm_medium=distribute.pc_relevant_download.none-task-blog-2~default~blogcommendfrombaidu~default-2.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-2~default~blogcommendfrombaidu~default-2.nonecas)

http://192.168.0.202:6200/md_archive/archive/report/ureport/designer?_u=c_file:1398200230976946177###

预览存蓄在session上，key换成config ID

### mysql 中的 blob 类型

BLOB 介绍

BLOB (binary large object)，二进制大对象，是一个可以存储二进制文件的容器。
在计算机中，BLOB 常常是数据库中用来存储二进制文件的字段类型。BLOB 是一
个大文件，典型的 BLOB 是一张图片或一个声音文件，由于它们的尺寸，必须使用特殊的方式来处理（例如：上传、下载或者存放到一个数据库）。
根据 Eric Raymond 的 说法，处理 BLOB 的主要思想就是让文件处理器（如数据库管理器）不去理会文件是什么，而是关心如何去处理它。
但也有专家强调，这种处理大数据对象的方法是把双刃剑，它有可能引发一些问题，如存储的二进制文件过大，会使数据库的性能下降。
在数据库中存放体积较大的多媒体对象就是应用程序处理 BLOB 的典型例子。

mysql BLOB 类型

MySQL 中，BLOB 是个类型系列，包括：TinyBlob、Blob、MediumBlob、LongBlob，这几个类型之间的唯一区别是在存储文件的最大大小上不同。
MySQL 的四种 BLOB 类型 类型 大小(单位：字节)
TinyBlob 最大 255 Blob 最大 65K MediumBlob 最大 16M LongBlob 最大 4G

linux 修改 etc/my.cnf
````
[mysqld]
max_allowed_packet = 16M //不同于[mysqldump]下的 max_allowed_packet
````

### Java 反射有关

#### 根据对象注解反射获取注解值

```java
java.lang.reflect.Field field = targetClass.getDeclaredField(name);
				if (field.isAnnotationPresent(UReportColName.class)) {
					for (Annotation anno : field.getDeclaredAnnotations()) {
						if (anno.annotationType().equals(UReportColName.class)) {
							String colName = ((UReportColName) anno).name();
							fieldStr = colName + "(" + name + ")";
						}
					}
				}


@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface UReportColName {
	String name() default "";

}

```

#### 通过反射给对象赋值

    private List<UreportModel> mockDate() {
        List<UreportModel> list = new ArrayList<>();
        Field[] fields = UreportModel.class.getDeclaredFields();
        IntStream.range(0, 5).mapToObj(j -> new UreportModel()).forEachOrdered(reportModel -> {
            for (Field field : fields) {
                try {
                    field.set(reportModel, "测试数据");
                } catch (IllegalAccessException ignored) {
    
                }
            }
            list.add(reportModel);
        });
        return list;
    }

#### 动态地给 Java 对象添加字段并赋值

https://www.cnblogs.com/JaxYoun/p/13923703.html
https://github.com/michaelliao/compiler

### maven 问题

#### mvn install

mvn install:install-file -DgroupId=com.bstek.ureport -DartifactId=ureport2-core -Dversion=2.3.0-SNAPSHOT -Dpackaging=jar
-Dfile=ureport2-core-2.3.0-SNAPSHOT.jar

问题一：安装本地jar包，但是pom文件里面依赖是没有的？
https://blog.csdn.net/qq_31142237/article/details/89509780

#### 上传私库

https://www.cnblogs.com/weiguo21/p/4823981.html
https://blog.csdn.net/weixin_30730053/article/details/94953798

### fastjson 序列化与反序列化，对象字段不一致造成的问题

UreportModel

String jsonString = JSON.toJSONString(list); JSONArray.parseArray(jsonString, UreportModel.class);

实际上反序列化出来的对象即使对象少字段一样少可以的，之前出现的问题应该是编译对象文件不是最新的

```java
   public static void main(String[]args){
        List<Map<String, Object>> list=new ArrayList<>();
        Map<String, Object> map=new HashMap<>();
        map.put("id",1);
        map.put("name","张三");
        Map<String, Object> map1=new HashMap<>();
        map1.put("id",2);
        map1.put("name","李四");
        list.add(map);
        list.add(map1);
        String jsonString=JSON.toJSONString(list);
        List<Student> students=JSONArray.parseArray(jsonString,Student.class);
        students.forEach(student->System.out.println(student.getId()));

        }
```

### java8 lambda

- 根据时间排序

```java
  list.sort((f1,f2)->f2.getUpdateDate().compareTo(f1.getUpdateDate()));
        list.sort(Comparator.comparing(ProblemModule::getId));
```

- 测试循环输出

```java
 students.forEach(student->System.out.println(student.getName()));
```

```java
 cateList.stream().collect(Collectors.toMap(CateManage::getCateCode,CateManage::getCateName));
```

https://objcoding.com/2019/03/04/lambda/#lambda-and-anonymous-classesi

### 如何减少绝大部分业务bug

https://mp.weixin.qq.com/s/HPyUS4BrMvN91sEHaVdELA

### viscose 打开外部应用

插件 Open in External App

### 快速查看github repo

https://github1s.com/carllhw/spring-boot-ureport2-demo 域名后面加1s

### Parallels desktop

解决无法联网，无法连接USB
https://bbs.huaweicloud.com/blogs/235173
由于您尚未获得访问其中一些文件的授权，所以您不能恢复"Windows 10
https://www.jianshu.com/p/88a399ecc5b3

### spring

在ApplicationContextAware的实现类中，就可以通过这个上下文环境对象得到Spring容器中的Bean。一般用于utils中进行属性注入。
https://www.cnblogs.com/loong-hon/p/10917755.html

### Call grap使用

https://plugins.jetbrains.com/plugin/12304-call-graph

### java jvisualvm监控

直接终端打开 命令：jvisualvm

### 沙雕留言

沙雕留言：到这里已经是第十一篇了，如果这些能够对您工作上有帮助的话，希望能给予作者稍微一些关爱，打赏一杯咖啡什么的，哦不，作者已经戒掉咖啡改喝肥宅水了，因为只有肥宅水才能支撑我快乐，沉迷搬砖和苦练cv大法......如果没有帮助请忽略，别扔钻头。

### js url限制解决方案

```js
var url = basePath + "ureport/preview?_u=m_file:" + reportName + "&_i=1&timestamp=" + new Date().getTime();
var form = $("<form style='display: none' target='_blank' method='post' action='" + url + "'>");
var input_moduleId = $("<input type='hidden' name='moduleId' value='" + moduleId + "'>");
var input_cateCode = $("<input type='hidden' name='cateCode' value='" + cateCode + "'>");
form.append(input_moduleId).append(input_cateCode);

var allSelect = $("#allSelect").val();
if (allSelect === 'true') {
    var removeRecord = getRemoveRecord();
    var input_removeId = $("<input type='hidden' name='removeId' value='" + removeRecord.join(",") + "'>");
    var input_allSelect = $("<input type='hidden' name='allSelect' value='" + allSelect + "'>");
    form.append(input_removeId).append(input_allSelect);
} else {
    var input_selectId = $("<input type='hidden' name='selectId' value='" + selectRecord.join(",") + "'>");
    form.append(input_selectId);
}

$("body").append(form);
form.submit().remove();
```

### Java Map遍历

```
-通过ForEach循环进行遍历
        for(Map.Entry<Integer, Integer> entry:map.entrySet()){
        System.out.println("Key = "+entry.getKey()+", Value = "+entry.getValue());
        }

        -Lambda表达式遍历
        map.forEach((k,v)->System.out.println("key: "+k+" value:"+v));

```

### org.apache.commons.beanutils.PropertyUtils

- 反射赋值

```
PropertyUtils.setProperty(data,"id",groupIdStr);

```

### Cannot resolve org.apache.poi:${poi.version}

查看父工程pom文件，发现在往上层的父级的工程pom中定义了这个依赖的版本，但是没有定义${poi.version}的值

### 一个有意思的思考

在github上面查找牛逼的coder，可以查看一些出色的开源项目，查看那些维护值、开发者、贡献者的账号，看他们的开源项目，然后你就会发现差距究竟有多大

### mac 无法启动mysl错误码13

由于Mac OS X的升级或其他原因可能会导致一个错误:

- 修改文件|目录的拥有者 sudo chown -R mysql /usr/local/mysql/data
- 递归修改文件权ke sudo chown -R 777 /usr/local/mysql

### retrofit-spring-boot-starter

[retrofit-spring-boot-starter](https://github.com/LianjiaTech/retrofit-spring-boot-starter#%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%B9%8B%E9%97%B4%E7%9A%84HTTP%E8%B0%83%E7%94%A8)

### lombok——@EqualsAndHashCode(callSuper = true)

https://www.cnblogs.com/xxl910/p/12877776.html

### java中子类会继承父类的构造方法吗？

[java中子类会继承父类的构造方法吗？](https://blog.csdn.net/wangyl_gain/article/details/49366505?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&dist_request_id=1328689.19238.16166396674013363&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.control)

子类实例化对象时，会先调用父类的构造器 如果子类的构造器没有显示的调用父类的构造器 ，默认调用super(); 
子类要使用父类有参的构造器，使用super（参数）形式，且super必须是子类构造方法中的头一条语句。
如果父类没有不带参数的构造器，且子类的构造器中又没显示的调用父类其他构造器，则Java编译器将报告错误。

### @RequestBody @RequestParam

@RequestParam 必须接收参数 @RequestBody 接收额是json数据，如果是上传文件必须使用表单上传

### swagger注解

https://blog.csdn.net/qq_38141367/article/details/105185246

@ApiBodyIgnore(value = "id") @RequestBody 不能获取通过父类对象的字段 自己写的

为了处理id在新增和修改中一个是隐藏的，一个是必填的情况，目前是利用多个类来处理

### 有关附件上传的思考

form表单提交携带文件上传，文件上传是第三方的，这时候存在数据一致性的问题，即有可能存在“附件第一次上传成功返回了fileId,然后附件接口二次确认时却失败了的情况，“
这种情况怎么处理，一是记录下来，提供其他服务作为补充确认；二是直接失败重试，但是不能无限重试，一般是三次左右，到最后还是失败只能记录日志，然后人为处理。

> 业务系统二次确认上传附件。由于存储中心与业务系统不属于同一套系统，而上传操作可能属于业务处理的一部分，当业务处理取消后，已上传到存储中心的附件将成为垃圾文件，越来越多的垃圾文件将会严重占用网盘空间。

### 优雅校验参数

https://segmentfault.com/a/1190000021393989

### @RequestBody和@RequestParam的请求方式get和post关系

https://www.jianshu.com/p/4981911d5e15

https://blog.csdn.net/qfikh/article/details/88553603

### feign多参数问题

https://www.cnblogs.com/chenkeyu/p/8482276.html

### java.lang.NoSuchMethodError: 'feign.Request$Body feign.Request.requestBody()

https://blog.csdn.net/xpb1980/article/details/105456536

### feign 加headers

[为 springcloud feign 添加自定义headers](https://bishion.github.io/2019/05/29/spring-feign-headers/#%E6%96%B9%E6%A1%88%E5%9B%9B%E5%9C%A8%E6%8E%A5%E5%8F%A3%E4%B8%8A%E4%BD%BF%E7%94%A8-requestmapping%E5%B9%B6%E5%8A%A0%E4%B8%8A-headers-%E5%B1%9E%E6%80%A7)

https://blog.csdn.net/shmily_lsl/article/details/101519273

### spring boot 配置注解支持获取nacos配置

[spring-boot-0.2.2-以及-0.1.2版本新功能使用手册](https://github.com/nacos-group/nacos-spring-boot-project/wiki/spring-boot-0.2.2-%E4%BB%A5%E5%8F%8A-0.1.2%E7%89%88%E6%9C%AC%E6%96%B0%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C)

https://blog.csdn.net/yingxiake/article/details/51263071

### java中抛出RuntimeException异常，为什么可以不用撰写代码去捕获它？

https://blog.csdn.net/ranshao528/article/details/49998603

### Homebrew Permissions Denied Issues Solution

sudo chown -R $(whoami) /usr/local

### mac oh-my-zsh Insecure completion-dependent directories detected

chmod 755 /usr/local/share/zsh chmod 755 /usr/local/share/zsh/site-functions

### 重装

```
官网：https://formulae.brew.sh/

安装homebrew export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.ustc.edu.cn/brew.git/"  # put your Git mirror of
Homebrew/brew here export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.ustc.edu.cn/homebrew-core.git/"  # put your Git
mirror of Homebrew/homebrew-core here /bin/bash -c "$(curl
-fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

卸载 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"

brew update brew doctor brew help

让Alfred支持Iterm2 on alfred_script(q)
tell application "System Events"
get name of every process whose name is "iTerm"
tell application "iTerm"
set newWindow to (create window with default profile)
tell current session of newWindow write text q end tell end tell end tell end alfred_script

brew install redis brew install maven  (
默认安装openjdk15,切换已经安装的openjdk执行 [echo "JAVA_HOME=`/usr/libexec/java_home`" >> ~/.mavenrc],然后删除15的)
brew install htop brew install mysql (brew services start|restart|stop mysql ; mysql.server start|stop|restart)
brew install openjdk@8 (安装完根据提示配置环境变量)

安装onmyzsh
https://github.com/ohmyzsh/ohmyzsh

ohmyzsh去掉前面名称 cd ~/.oh-my-zsh/themes 然后输入 echo $ZSH_THEME 查看自己主题，我的是agnoster，然后输入 vi agnoster.zsh-theme
可以看到最下面对build_prompt的定义为
 
Main prompt

build_prompt() {
 RETVAL=$?
 prompt_status
 prompt_virtualenv
 prompt_context
 prompt_dir
 prompt_git
 prompt_hg
 prompt_end
}


注释 #prompt_context。
```

### idea 激活
https://zhuanlan.zhihu.com/p/356855241



### 关于项目经常用到/data/log目录问题

建立软链接 ln -s /Users/fangjunqiang/data /usr/local/data

### nacos配置不生效

https://blog.csdn.net/fly_leopard/article/details/107489937

1.处理方案是升级版本 2.@Component 注解的类配置属性加上@Getter获取

```java
package com.minstone.archive.ureport;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/config")
@RefreshScope
public class ConfigController {

    @Resource
    CategoryReportProvider provider;

    @Value("${ureport.customFileProviderUsedLocal}")
    private boolean usedLocal;


    @RequestMapping("/get")
    public boolean get() {
        return usedLocal;
    }

    @RequestMapping("/get1")
    public Boolean get1() {
        return provider.usedLocal;
    }

}
```

cld

### 对于一些第三方接口可以采取统一返回实体，然后内部消化抛出的异常

### idea 插件

Mybatis log https://www.cnblogs.com/yangsen-java/p/13305056.html
Jrebel https://www.jianshu.com/p/febd27585b34

### ireport 整合 + 中文字体 Y(^_^)Y

https://blog.csdn.net/qq_31454611/article/details/79679051

### File dest = new File(ResourceUtils.getURL("classpath:").getPath() + IdUtil.randomUUID() + ".ureport.xml");

临时路径有存在被系统干掉的情况，不能这么做，建议建一个临时存储路径如：/data/temp

### rest 附件表单提交的方式

https://www.intelliware.com/submitting-a-multipart-request-multipartform-data-using-put-and-spring-boot/

### lombok 注解

https://blog.csdn.net/sunsfan/article/details/53542374

### restTemplate 接受 application/octet-stream

[RestTemplate响应中获取输入流InputStream](https://blog.csdn.net/ron_2016/article/details/82884183?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&dist_request_id=1331978.665.16185724366990989&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)

### 优雅关闭流

https://www.cnblogs.com/itZhy/p/7636615.html

### feign callback

https://blog.csdn.net/weixin_38004638/article/details/104008655

### synthetic.conf 重启问题 Y(^_^)Y

https://my.oschina.net/geekidentity/blog/4673856
https://derflounder.wordpress.com/2020/01/18/creating-root-level-directories-and-symbolic-links-on-macos-catalina/
https://stackoverflow.com/questions/58396821/what-is-the-proper-way-to-create-a-root-sym-link-in-catalina

### xxl-job源码学习

1. @InitBinder注解使用 Y(^_^)Y ttps://blog.csdn.net/zengxianxue/article/details/78567544

2. EmailJobAlarm

```java
       // make mail
                try{
                        MimeMessage mimeMessage=XxlJobAdminConfig.getAdminConfig().getMailSender().createMimeMessage();

                        MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,true);
                        helper.setFrom(XxlJobAdminConfig.getAdminConfig().getEmailFrom(),personal);
                        helper.setTo(email);
                        helper.setSubject(title);
                        helper.setText(content,true);

                        XxlJobAdminConfig.getAdminConfig().getMailSender().send(mimeMessage);
                        }catch(Exception e){
                        logger.error(">>>>>>>>>>> xxl-job, job fail alarm email send error, JobLogId:{}",jobLog.getId(),e);

                        alarmResult=false;
                        }
                        // content format         
                        String content=MessageFormat.format(loadEmailJobAlarmTemplate(),
                        group!=null?group.getTitle():"null",
                        info.getId(),
                        info.getJobDesc(),
                        alarmContent);

                        3.处理权限问题
@PermissionLimit、拦截器PermissionInterceptor

```

### smart-doc 生成文档

无注解，遵循java-doc注释生成文档
https://gitee.com/smart-doc-team/smart-doc

### final field could be static

https://stackoverflow.com/questions/12801223/private-static-final-fields/12801614

### 平台返回结构体

{"message":"文件不存在"}

### 抛异常处理

得到结果： com.netflix.hystrix.exception.HystrixRuntimeException: ReportApi#loadDatasetFromReport(Long) failed and no
fallback available.

callback:

- 报表接口暂时不可用:status 500 reading ReportApi#loadDatasetFromReport(Long)

去掉callback： status 500 reading ReportApi#loadDatasetFromReport(Long)

### 集群 websocket

https://juejin.cn/post/6844904004762222606

https://www.yisu.com/zixun/205053.html

https://cloud.tencent.com/developer/article/1530872

https://lawrenceli.me/blog/websocket-cluster

本地服务存socket session ，然后通过reids 或者 mq 进行广播，发送消息再判断是否是对应的sessionId

结合 redis 栗子：https://www.jianshu.com/p/ac197bca9aed

### spring 过滤器与拦截器

https://blog.csdn.net/zzhongcy/article/details/102498081

### 相对路径遍历问题

http://cwe.mitre.org/data/definitions/23.html

### maven 父依赖优先级高于传递依赖的问题

https://stackoverflow.com/questions/25402781/xml-beans-compiled-schema-could-not-locate-compiled-schema-resource-schemaorg-a

https://blog.csdn.net/jiaobuchong/article/details/81842503

### optional 牛逼写法

String suffix = Optional.ofNullable(FileUtil.getSuffix(file)).map(String::toLowerCase).orElse(null);

### spring  implements ApplicationRunner

```java

@Service
public class TopicListener implements ApplicationRunner, Ordered {

    private final RedissonClient redisson;
    private final WebSocketEndpoint webSocketEndpoint;

    public TopicListener(WebSocketEndpoint webSocketEndpoint, RedissonClient redisson) {
        this.webSocketEndpoint = webSocketEndpoint;
        this.redisson = redisson;
    }

    @Override
    public void run(ApplicationArguments applicationArguments) {
        RTopic topic = redisson.getTopic(ImportConstant.IMPORT_MESSAGE_TOPIC);
        topic.addListener(TopicMessage.class, (charSequence, message) -> {
            if (log.isDebugEnabled()) {
                log.debug("Redisson监听器收到消息:{}", message);
            }
            webSocketEndpoint.sendMessage(message.getUserId(), message.getMessage());
        });
    }

    @Override
    public int getOrder() {
        return 1;
    }
}


```

https://blog.csdn.net/sun123_123/article/details/79558917

### 干掉if else

https://www.cnblogs.com/davidwang456/p/10831546.html

https://blog.csdn.net/qq_28369007/article/details/107099120?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242

https://blog.csdn.net/weixin_42134537/article/details/114862481?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-10.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-10.control

### test

ws://192.168.8.7:8080/archApp/ws/assert/syssa_1_1393044927809978369_1 单件（短期）

ws://192.168.8.7:8080/archApp/ws/assert/syssa_1_1393050254701887489_2 案卷（案卷门类） 1393050254701887489

1393044927809978369

// 预归档 ws://192.168.8.7:8080/archApp/ws/assert/syssa_2_1393044927809978369_1

### 报表导入问题

应该注意导入字段的特定格式，如日期时间的格式，建议都弄成文本的格式，这样根据导出来导入就不会出现一些格式造成的问题

### 压缩问题

FileUtil.unzip 要注意编码的问题，区分gbk还是utf-8

### feign 接口上传的 @RequestBody 参数中文边乱码处理

`consumes = "application/json;charset=UTF-8", produces = "application/json;charset=UTF-8"`

```

/**
 * 保存报表，租户header信息必须有
 *
 * @param id      报表配置ID
 * @param content 报表内容
 * @return ResponseMessage
 */
@PostMapping(value = "/reportManage/saveFileFromReport", consumes = "application/json;charset=UTF-8",
        produces = "application/json;charset=UTF-8")
    ResponseMessage<Boolean> saveFileFromReport(@RequestParam("id") Long id,@RequestBody String content);

```

### 大文件分割

Java之FileChannel类的理解和使用 https://blog.csdn.net/xuxile/article/details/90372302

Java RandomAccessFile用法 https://blog.csdn.net/akon_vm/article/details/7429245

### 论文

https://wenku.baidu.com/view/dcadeafb910ef12d2af9e730.html
http://www.doc88.com/p-9425661117248.html

### DBeaver连接达梦|虚谷|人大金仓等国产数据库

https://niceyoo.blog.csdn.net/article/details/109764432?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-6.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-6.nonecase

### flyway 学习

https://flywaydb.org/documentation/getstarted/how
https://blog.csdn.net/weixin_41931278/article/details/109470285

### kingbase 适配问题

https://blog.csdn.net/u010882234/article/details/107381753

1、数据迁移会发生mapper问题： tinyint（1） 》》 Boolean 2、数据库增加了模式处理，默认是public模式 3、主外键是全库唯一的，简历主键需要加上表名 4、分页需要修改yml: pagehepler:
helperDialet:oracle 国产数据库基本为oracle分页方式 5、函数方法部分不支持: date_sub(curdate(), INTERVAL 7 day)
6、sql 建表语句可以根据 pmd 文件生成 postgreSQL7.3 语言的sql(达梦可以在 Kingbase 的 SQL上，将 INT8、INT4、INT2 修改成 BIGINT、INT、SMALLINT)
7、flyway不支持kingbase,需要修改源码

```sql

SELECT count(0)
FROM b_down_manage
WHERE del_flag = 0
  AND create_user = 'syssa'
  AND date_sub(curdate(), INTERVAL 7 day) <= date (CREATE_TIME)
  AND CREATE_USER = 'syssa';

 ```

### 达梦适配问题

https://blog.csdn.net/qq_40932740/article/details/108293608

flyway 支撑 https://flywaydb.org/documentation/contribute/contributingDatabaseSupport

1、数据库连接地址 username 跟着库名

```
 arch_app_server:
        url:jdbc:dm://192.168.0.108:5236/MINSTONE?zeroDateTimeBehavior=convertToNull&useUnicode=true&characterEncoding=utf-8
        username:MINSTONE
        password:minstone@123
        driver-class-name:dm.jdbc.driver.DmDriver
        platform_server:
        url:jdbc:dm://192.168.0.108:5236/MINSTONE?zeroDateTimeBehavior=convertToNull&useUnicode=true&characterEncoding=utf-8
        username:MINSTONE
        password:minstone@123
        driver-class-name:dm.jdbc.driver.DmDriver
        category_server:
        url:jdbc:dm://192.168.0.108:5236/MINSTONE?zeroDateTimeBehavior=convertToNull&useUnicode=true&characterEncoding=utf-8
        username:MINSTONE
        password:minstone@123
        driver-class-name:dm.jdbc.driver.DmDriver

```

2、date() 函数没有，可以换成 date_format(create_time,'%Y-%m-%d')
3、函数ifnull()、nvl()支持 4、int、tinyint、bigint、text 支持

### tryLock

```


Lock lock=...;
        if(lock.tryLock()){
        try{
        // manipulate protected state
        }finally{
        lock.unlock();
        }
        }else{
        // perform alternative actions
        }

 ```

### 解决Vue Router报错 Error: Cannot find module ‘@/views/xxx‘ at webpackEmptyContext

https://blog.csdn.net/qq_31915745/article/details/107713759

### scp 下载文件

```shell

 ~  scp root@192.168.101.56:/data/logs/platform-server/platform-server_error.log /Users/fangjunqiang/data

```

### jenkins 自动化部署

- jenkins修改端口无法生效 粗暴访问 java -jar jenkins.war --httpPort=9090

[jenkins发布maven多模块+springboot项目](https://blog.csdn.net/weixin_38312502/article/details/103205656?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162640464816780269856827%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162640464816780269856827&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-2-103205656.pc_search_result_control_group&utm_term=jenkins+%E6%9E%84%E5%BB%BA%E5%A4%9A%E6%A8%A1%E5%9D%97maven%E9%A1%B9%E7%9B%AE&spm=1018.2226.3001.4187)

- 多项目多git库：https://blog.csdn.net/itfootball/article/details/45061093

- Jenkins任务启动的后台进程被自动kill https://wiki.jenkins.io/display/JENKINS/ProcessTreeKiller

yum install git
wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.8.1/binaries/apache-maven-3.8.1-bin.tar.gz
tar -xvf apache-maven-3.3.9-bin.tar.gz sudo mv -f apache-maven-3.3.9 /usr/local/

export MAVEN_HOME=/usr/local/apache-maven-3.3.9 export PATH=${PATH}:${MAVEN_HOME}/bin

```
http://git.minstone.com.cn/minstone-archive/archive-product/report-design.git

        */dev_1.0.0

        archive

        clean install-Dmaven.test.skip=true


        target/report-design-1.0.0-SNAPSHOT.war

        target/

        OLD_BUILD_ID=$BUILD_ID
        echo $OLD_BUILD_ID
        BUILD_ID=DONTKILLME
        cd/opt/archive
        sh start-report-design.sh restart
        BUILD_ID=$OLD_BUILD_ID
        echo $BUILD_ID

```

栗子：
https://blog.csdn.net/qq_26001921/article/details/94382300?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-11.base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-11.base

#### 插件问题

https://blog.csdn.net/mp624183768/article/details/109679760 和修改 /etc/hosts 「101.6.8.193 mirrors.tuna.tsinghua.edu.cn」

https://blog.csdn.net/qq_23483671/article/details/105337733

### Mapstruct 与 Beanutil.copy 对比

https://blog.csdn.net/weixin_41910244/article/details/108164695

### IDEA的md文件中插入图片的方法
```
![avator](./doc/p.png)

括号内可写： 相对路径：条件：md文件和图片在同一级目录下 绝对路径：写完整就好了
```

### 脚本ssh登录

```shell
#!/bin/bash
user=root
pass='minstone@123'
ip='192.168.0.139'
/usr/bin/expect << EOF
set timeout 10
spawn ssh $user@$ip   
expect {
        "(yes/no)" {send "yes\r"; exp_continue}
        "password:" {send "$pass\r"}
}
expect "root@*"  {send "free -m\r"}
expect "root@*"  {send "exit\r"}
expect eof 
EOF

```

https://www.cnblogs.com/lyq863987322/p/13650315.html

### websocket 打包放外置tomcat问题

https://blog.csdn.net/weferxe/article/details/91047676?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-7.base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-7.base

https://blog.csdn.net/qq_37168856/article/details/105095228?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.base

### maven Profile切换配置文件无效

直接先 mvn clean、package 再启动应用

### CentOS 7 开放端口, 防火墙开端口, 开80,8080等端口

需要使用root权限

firewall-cmd --zone=public --add-port=80/tcp --permanent

关闭端口(已经添加的从防火墙中移除):

firewall-cmd --zone=public --remove-port=80/tcp --permanent

查看防火墙设置:

firewall-cmd --list-all
````shell
[root@localhost xrb]# firewall-cmd --list-all public (active)
target: default icmp-block-inversion: no interfaces: enp0s3 sources:
services: ssh dhcpv6-client ports: 80/tcp protocols:
masquerade: no forward-ports:
source-ports:
icmp-blocks:
rich rules:
````

参数说明:

--zone #作用域

--add-port=80/tcp #添加端口，格式为：端口/通讯协议

--permanent #永久生效，没有此参数重启后失效

重启防火墙:
firewall-cmd --reload

或：

systemctl stop firewalld.service  
systemctl start firewalld.service

### Maven仓库的优先级查找顺序

(1)在本地仓库中寻找，如果没有则进入下一步

(2)在全局应用的私服仓库中寻找，如果没有则进入下一步

(3)在项目自身的私服仓库中寻找，如果没有则进入下一步

(4)在中央仓库中寻找，如果没有则终止寻找 补充：如果在找寻的过程中，如果发现该仓库有镜像设置，则用镜像的地址代替

### es 报 request Data too large

修改 es jvm 的 xms 和 xmx 值

### Tomcat项目运行时加载jar包或类文件的顺序

tomcat的加载运行机制与Java虚拟机的父类委托机制稍有不同。 1、首先加载Tomcat_HOME/lib目录下的jar包 2、然后加载Tomcat_HOME/webapps/项目名/WEB-INF/lib的jar包
3、最后加载的是Tomcat_HOME/webapps/项目名/WEB-INF/classes下的类文件 注：本机的Tomcat_HOME为D:
\Users\Administrator\Tomcat\apache-tomcat-7.0.54；

值得注意的关键是：tomcat按上述顺序依次加载资源，当后加载的资源与之前加载的资源相重时，后加载的资源会继续加载并将之前的资源覆盖。

### git reset

git reset --hard HEAD@{0}  
git reset --hard fe69429

### mysql中int，bigint，smallint和tinyint的区别与长度
````
1 bytes = 8 bit ,一个字节最多可以代表的数据长度是2的8次方 11111111 在计算机中也就是 -128到127

1.BIT[M]

位字段类型，M表示每个值的位数，范围从1到64，如果M被忽略，默认为1

2.TINYINT[(M)] [UNSIGNED] [ZEROFILL]  M默认为4

很小的整数。带符号的范围是-128到127。无符号的范围是0到255。

3. BOOL，BOOLEAN

是TINYINT(1)的同义词。zero值被视为假。非zero值视为真。

4.SMALLINT[(M)] [UNSIGNED] [ZEROFILL] M默认为6

小的整数。带符号的范围是-32768到32767。无符号的范围是0到65535。

5.MEDIUMINT[(M)] [UNSIGNED] [ZEROFILL] M默认为9

中等大小的整数。带符号的范围是-8388608到8388607。无符号的范围是0到16777215。

6. INT[(M)] [UNSIGNED] [ZEROFILL]   M默认为11

普通大小的整数。带符号的范围是-2147483648到2147483647。无符号的范围是0到4294967295。

7.BIGINT[(M)] [UNSIGNED] [ZEROFILL] M默认为20

大整数。带符号的范围是-9223372036854775808到9223372036854775807。无符号的范围是0到18446744073709551615。

注意：这里的M代表的并不是存储在数据库中的具体的长度，以前总是会误以为int(3)只能存储3个长度的数字，int(11)就会存储11个长度的数字，这是大错特错的。

tinyint(1) 和 tinyint(4) 中的1和4并不表示存储长度，只有字段指定zerofill是有用， 如tinyint(4)，如果实际值是2，如果列指定了zerofill，查询结果就是0002，左边用0来填充。


---------------------

char是一种固定长度的类型，varchar则是一种可变长度的类型，它们的区别是：

char(M)类型的数据列里，每个值都占用M个字节，如果某个长度小于M，MySQL就会在它的右边用空格字符补足．

（在检索操作中那些填补出来的空格字符将被去掉）

在varchar(M)类型的数据列里，每个值只占用刚好够用的字节再加上一个用来记录其长度的字节（即总长度为L+1字节）．

在MySQL中用来判断是否需要进行对据列类型转换的规则

1、在一个数据表里，如果每一个数据列的长度都是固定的，那么每一个数据行的长度也将是固定的．

2、只要数据表里有一个数据列的长度的可变的，那么各数据行的长度都是可变的．

3、如果某个数据表里的数据行的长度是可变的，那么，为了节约存储空间，MySQL会把这个数据表里的固定长度类型的数据列转换为相应的可变长度类型．

例外：长度小于4个字符的char数据列不会被转换为varchar类型

````

### 查看当前所以tcp端口

netstat -ntlp

### Possible root causes include a too low setting for -Xss and illegal cyclic inheritance dependencies

https://stackoverflow.com/questions/14910757/possible-root-causes-include-a-too-low-setting-for-xss-and-illegal-cyclic-inher?answertab=votes

https://www.pianshen.com/article/3213407130/

#### @valid 校验

分组： https://zhuanlan.zhihu.com/p/338722029

https://www.cnblogs.com/xichji/p/11835672.html

### Prometheus+Grafana可视化监控SpringBoot项目

https://juejin.im/post/5c7ce613f265da2d943f8349

[Prometheus + Grafana 监控 SpringBoot项目监控系统](https://www.toutiao.com/i6802482014873190916/?tt_from=weixin&utm_campaign=client_share&wxshare_count=1&timestamp=1583893454&app=news_article&utm_source=weixin&utm_medium=toutiao_android&req_id=202003111024140100260770772A87ED3C&group_id=6802482014873190916)

### 黑科技集合

```java
1 Multimap 一个key可以映射多个value的HashMap

        Multimap<String, Integer> map=ArrayListMultimap.create();
        map.put("key",1);
        map.put("key",2);
        Collection<Integer> values=map.get("key");
        System.out.println(map); // 输出 {"key":[1,2]}  
// 还能返回你以前使用的臃肿的Map  
        Map<String, Collection<Integer>>collectionMap=map.asMap();
        多省事，多简洁，省得你再创建 Map<String, List>

2 BiMap 一种连value也不能重复的HashMap

        BiMap<String, String> biMap=HashBiMap.create();
// 如果value重复，put方法会抛异常，除非用forcePut方法  
        biMap.put("key","value");
        System.out.println(biMap); // 输出 {"key":"value"}  
// 既然value不能重复，何不实现个翻转key/value的方法，已经有了  
        BiMap<String, String> inverse=biMap.inverse();
        System.out.println(inverse); // 输出 {"value":"key"}  
        这其实是双向映射，在某些场景还是很实用的。

        3 Table 一种有两个key的HashMap

// 一批用户，同时按年龄和性别分组  
        Table<Integer, String, String> table=HashBasedTable.create();
        table.put(18,"男","yideng");
        table.put(18,"女","Lily");
        System.out.println(table.get(18,"男")); // 输出 yideng  
// 这其实是一个二维的Map，可以查看行数据  
        Map<String, String> row=table.row(18);
        System.out.println(row); // 输出 {"男":"yideng","女":"Lily"}  
// 查看列数据  
        Map<Integer, String> column=table.column("男");
        System.out.println(column); // 输出 {18:"yideng"}  

        4 Multiset 一种用来计数的Set

        Multiset<String> multiset=HashMultiset.create();
        multiset.add("apple");
        multiset.add("apple");
        multiset.add("orange");
        System.out.println(multiset.count("apple")); // 输出 2  
// 查看去重的元素  
        Set<String> set=multiset.elementSet();
        System.out.println(set); // 输出 ["orange","apple"]  
// 还能查看没有去重的元素  
        Iterator<String> iterator=multiset.iterator();
        while(iterator.hasNext()){
        System.out.println(iterator.next());
        }
// 还能手动设置某个元素出现的次数  
        multiset.setCount("apple",5);

```

### git 重新关联远程库地址

git remote set-url origin http://git.minstone.com.cn/minstone-archive/archive-product/source-code/report-design.git

### mac 隐藏的快捷键

使用快捷键 Command+M，可以实现快速最小化当前窗口的目的

使用快捷键 Command+Option+M，可以实现快速最小化当前应用程序所有窗口的目的。比如你想一下子最小化多个 Finder 窗口，就可以用该快捷键

使用快捷键 Command+H，可以实现快速隐藏当前应用程序所有窗口的目的

使用快捷键 Command+Option+H，可以实现快速隐藏除当前应用程序之外所有程序窗口的目的

使用快捷键 Command+Option+M+H，可以实现快速隐藏所有应用程序窗口的目的

快速恢复已经最小化的窗口的办法：按住 command 键，然后按 tab 键切换程序，然后放开 tab(不要放开 command)，按 option 键恢复最小化的窗口
(话说我发现这个方法还没有用鼠标点击 Dock 栏快呢!)

### 封装 starter

https://didispace-wx.blog.csdn.net/article/details/107888159?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link

### replace into

https://blog.csdn.net/zk673820543/article/details/106579809

### 高效读文件

https://zhuanlan.zhihu.com/p/344464394

### in 优化

https://www.cnblogs.com/zyjfire/p/12924766.html

### spring boot 内部调用不生效问题

https://blog.csdn.net/DiligentOrange/article/details/88965113

https://www.cnblogs.com/jamaler/archive/2019/08/23/11398149.html

### Java中@Autowired写在成员变量上和构造函数上的区别

https://blog.csdn.net/qq_16268979/article/details/114041974?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0.no_search_link&spm=1001.2101.3001.4242

### spring boot 官网的logback日志格式

https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot/src/main/resources/org/springframework/boot/logging/logback/defaults.xml

https://blog.csdn.net/weixin_28764823/article/details/112395405?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-4.no_search_link&spm=1001.2101.3001.4242

### 达梦迁移

// 尝试修改列类型 ALTER TABLE ARCH_APP.B_COMPILATION MODIFY COMPILATION_NAME VARCHAR(100) DEFAULT NULL; COMMENT ON COLUMN
B_COMPILATION.COMPILATION_NAME is '编研资料名称';

tingtext --- vachar 255 text --- varchar 4000 text （超出的话，换会text)
longtext --- varchar 8000

ALTER TABLE B_FOLDER_FOURCHECK ADD COLUMN FC_SYN_TYPE TINYINT DEFAULT NULL; COMMENT ON COLUMN
B_FOLDER_FOURCHECK.FC_SYN_TYPE is '四性检测同步模式 0 不同步 1同步';

https://blog.csdn.net/qq_16077549/article/details/103023206

### java stream 根据对象id去重
```java
ArrayList<SynDept> collect = insertList.stream().collect(
Collectors.collectingAndThen(Collectors.toCollection(() -> new TreeSet<>(Comparator.comparing(SynDept::getCode))),
ArrayList::new)
); System.out.println(collect.size());
```

### 刷新当前iframe

window.location.reload(true);

### window 连接 Mac 共享文件夹

使用的是windows电脑。按下快捷键Win+R键，输入两个反向斜杠，后面加上共享Mac的IP地址

### 跨站点请求伪造 - SpringBoot配置CSRF过滤器

https://blog.csdn.net/qq_48008521/article/details/108723025?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.essearch_pc_relevant&spm=1001.2101.3001.4242.1

https://blog.csdn.net/wangxy799/article/details/100123382

### mybatis取tinyint(1)字段结果被取成boolean类型的解决方案

使用Mybatis查询tinyint(1)字段数据,返回值为Map类型,那么tinyint(1)的数据默认会转化为boolean类型数据. 解决方案:

使用ifnull(column, 0)处理该字段,个人测试过可以; 在jdbcUrl添加参数：tinyInt1isBit=false（默认为true） 避免使用长度为1的tinyint类型字段存储数字格式的数据;

### log4j2格式

https://www.jianshu.com/p/7f448f17bc50
https://logging.apache.org/log4j/2.x/manual/layouts.html#PatternLayout

### git merge

[git merge](https://mp.weixin.qq.com/s?src=11&timestamp=1642068008&ver=3556&signature=g2Nmz2WORtAn0n4xfkTSRvLXiJ1yv4WQCbAGq3lrfleKOMqui1WmhQmhxa9hciEf6thouqCHWLcvKRhhomefJ19KRv2kWkFoUIUlSUnz3ZeqJu6B03gcykLrTlOcUfK6&new=1)

### Mac关机快捷键汇总

1、Ctrl + 关机：弹出关机提示； 2、Ctrl + Option + 关机 ： 正常关机快捷键； 3、Command + Option + 关机 ：进入休眠状态； 4、Ctrl + Command + 关机：重启机器； 5、Shift
+ Ctrl + Option + 关机：瞬间关机。
