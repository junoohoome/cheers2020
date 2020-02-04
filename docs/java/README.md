# Java 基础



## 一、Java 面向对象

### 面向对象都有哪些特性以及你对这些特性的理解

1）继承：继承是从已有类得到继承信息创建新类的过程。提供继承信息的类被称为父类（超类、基类）；得到继承信息的类被称为子类（派生类）。继承让变化中的软件系统有了一定的延续性，同时继承也是封装程序中可变因素的重要手段。

2） 封装：通常认为封装是把数据和操作数据的方法绑定起来，对数据的访问只能通过已定义的接口。面向对象的本质就是将现实世界描绘成一系列完全自治、封闭的对象。我们在类中编写的方法就是对实现细节的一种封装；我们编写一个类就是对数据和数据操作的封装。可以说，封装就是隐藏一切可隐藏的东西，只向外界提供最简单的编程接口。

3） 多态性：多态性是指允许不同子类型的对象对同一消息作出不同的响应。简单的说就是用同样的对象引用调用同样的方法但是做了不同的事情。多态性分为编译时的多态性和运行时的多态性。如果将对象的方法视为对象向外界提供的服务，那么运行时的多态性可以解释为：当 A 系统访问 B 系统提供的服务时，B 系统有多种提供服务的方式，但一切对 A 系统来说都是透明的。方法重载（overload）实现的是编译时的多态性（也称为前绑定），而方法重写（override）实现的是运行时的多态性（也称为后绑定）。运行时的多态是面向对象最精髓的东西，要实现多态需要做两件事：1. 方法重写（子类继承父类并重写父类中已有的或抽象的方法）；2. 对象造型（用父类型引用引用子类型对象，这样同样的引用调用同样的方法就会根据子类对象的不同而表现出不同的行为）。

4） 抽象：抽象是将一类对象的共同特征总结出来构造类的过程，包括数据抽象和行为抽象两方面。抽象只关注对象有哪些属性和行为，并不关注这些行为的细节是什么。

> 注意：默认情况下面向对象有 3 大特性，封装、继承、多态，如果面试官问让说出 4 大特性，那么我们就把抽象加上去。

### 访问权限修饰符

访问权限修饰符 public、private、protected, 以及不写（默认）时的区别

| 修饰符    | 当前类 | 同包 | 子类 | 其他包 |
| --------- | ------ | ---- | ---- | ------ |
| public    | √      | √    | √    | √      |
| protected | √      | √    | √    | ×      |
| default   | √      | √    | ×    | ×      |
| private   | √      | ×    | ×    | ×      |

### 如何理解 clone 对象

#### 为什么要用 clone？

在实际编程过程中，我们常常要遇到这种情况：有一个对象 A，在某一时刻 A 中已经包含了一些有效值，此时可
能会需要一个和 A 完全相同新对象 B，并且此后对 B 任何改动都不会影响到 A 中的值，也就是说，A 与 B 是两个独立
的对象，但 B 的初始值是由 A 对象确定的。在 Java 语言中，用简单的赋值语句是不能满足这种需求的。要满足这种需
求虽然有很多途径，但实现 clone（）方法是其中最简单，也是最高效的手段。

#### new 一个对象的过程和 clone 一个对象的过程区别

new 操作符的本意是分配内存。程序执行到 new 操作符时，首先去看 new 操作符后面的类型，因为知道了类型，才能知道要分配多大的内存空间。分配完内存之后，再调用构造函数，填充对象的各个域，这一步叫做对象的初始化，构造方法返回后，一个对象创建完毕，可以把他的引用（地址）发布到外部，在外部就可以使用这个引用操纵这个对
象。

clone 在第一步是和 new 相似的，都是分配内存，调用 clone 方法时，分配的内存和原对象（即调用 clone 方法
的对象）相同，然后再使用原对象中对应的各个域，填充新对象的域，填充完成之后，clone 方法返回，一个新的相同
的对象被创建，同样可以把这个新对象的引用发布到外部。

#### clone 对象的使用

##### 复制对象和复制引用的区别

```java
People p = new People(25, "fjq");
People p1 = p;
System.out.println(p);
System.out.println(p1);
```

首先看打印结果：

```java
com.starkfang.helloworld.web.People@7adf9f5f
com.starkfang.helloworld.web.People@7adf9f5f
```

可以看出，打印的地址值是相同的，既然地址都是相同的，那么肯定是同一个对象。p 和 p1 只是引用而已，他们都指向了一个相同的对象 Person(25, “fjq”) 。 可以把这种现象叫做引用的复制。上面代码执行完成之后， 内存中的情景如下图所示：

![](https://img-blog.csdnimg.cn/20190826101335425.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)
而下面的代码是真真正正的克隆了一个对象。

```java
Person p = new Person(25, "fjq");
Person p1 = (Person) p.clone();
System.out.println(p);
System.out.println(p1);
```

从打印结果可以看出，两个对象的地址是不同的，也就是说创建了新的对象， 而不是把原对象的地址赋给了一个
新的引用变量：

```java
com.starkfang.helloworld.web.People@4f9ee1ac
com.starkfang.helloworld.web.People@67a1fba0
```

以上代码执行完成后， 内存中的情景如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190826101427810.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)

##### 深拷贝和浅拷贝

上面的示例代码中，Person 中有两个成员变量，分别是 name 和 age， name 是 String 类型， age 是 int 类
型。代码非常简单，如下所示：

```java
public class Person implements Cloneable{
    private int age ;
    private String name;
    public Person(int age, String name) {
        this.age = age;
        this.name = name;
    }
    public String getName() {
        return name;
    }
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
```

由于 age 是基本数据类型，那么对它的拷贝没有什么疑议，直接将一个 4 字节的整数值拷贝过来就行。但是 name是 String 类型的， 它只是一个引用， 指向一个真正的 String 对象，那么对它的拷贝有两种方式： 直接将原对象中的 name 的引用值拷贝给新对象的 name 字段， 或者是根据原 Person 对象中的 name 指向的字符串对象创建一个新的相同的字符串对象，将这个新字符串对象的引用赋给新拷贝的 Person 对象的 name 字段。这两种拷贝方式分别叫做浅拷贝和深拷贝。深拷贝和浅拷贝的原理如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190826101458836.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)
下面通过代码进行验证。如果两个 Person 对象的 name 的地址值相同， 说明两个对象的 name 都指向同一个
String 对象，也就是浅拷贝， 而如果两个对象的 name 的地址值不同， 那么就说明指向不同的 String 对象， 也就
是在拷贝 Person 对象的时候， 同时拷贝了 name 引用的 String 对象， 也就是深拷贝。验证代码如下：

```java
Person p = new Person(25, "fjq");
Person p1 = (Person) p.clone();
String result = p.getName() == p1.getName() ? "clone 是浅拷贝的" : "clone 是深拷贝的";
System.out.println(result);
```

打印结果为：

```java
clone 是浅拷贝的
```

所以，clone 方法执行的是浅拷贝， 在编写程序时要注意这个细节。

如何进行深拷贝：由上一节的内容可以得出如下结论：如果想要深拷贝一个对象，这个对象必须要实现 Cloneable 接口，实现 clone方法，并且在 clone 方法内部，把该对象引用的其他对象也要 clone 一份，这就要求这个被引用的对象必须也要实现Cloneable 接口并且实现 clone 方法。那么，按照上面的结论，实现以下代码 Body 类组合了 Head 类，要想深拷贝Body 类，必须在 Body 类的 clone 方法中将 Head 类也要拷贝一份。代码如下：

```java
static class Body implements Cloneable{
    public Head head;
    public Body() {}
    public Body(Head head) {this.head = head;}
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Body newBody = (Body) super.clone();
        newBody.head = (Head) head.clone();
        return newBody;
    }
}

static class Head implements Cloneable{
    public Face face;
    public Head() {}
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public static void main(String[] args) throws CloneNotSupportedException {
    Body body = new Body(new Head(new Face()));
    Body body1 = (Body) body.clone();
    System.out.println("body == body1 : " + (body == body1) );
    System.out.println("body.head == body1.head : " + (body.head == body1.head));
}
```

打印结果为：

```java
body == body1 : false
body.head == body1.head : false
```





## 二、Java 数据类型

### Java 的基本数据类型都有哪些各占几个字节

| 基本类型 | 字节数 | 数据表示范围                          | 包装器类型 |
| -------- | ------ | ------------------------------------- | ---------- |
| byte     | 1      | -128~127                              | Byte       |
| short    | 2      | -2<sup>15</sup>~2<sup>15</sup>-1      | Short      |
| int      | 4      | -2<sup>32</sup>~2<sup>32</sup>-1      | Integer    |
| long     | 8      | -2<sup>63</sup>~2<sup>63</sup>-1      | Long       |
| float    | 4      | -3.403E38～3.403E38                   | Float      |
| double   | 8      | -1.798E308～1.798E308                 | Double     |
| char     | 2      | 表示一个字符，如('a'，'A'，'0'，'家') | Character  |
| boolean  | 1      | true 与 false                         | Boolean    |
| void     | -      | -                                     | Void       |

整型：byte，short，int，long
浮点型：float， double
字符型：char
布尔型：boolean

### short s1 = 1; s1 = s1 + 1; 有错吗? short s1 = 1; s1 += 1 有错吗？

前者不正确，后者正确。对于 short s1 = 1; s1 = s1 + 1;由于 1 是 int 类型，因此 s1+1 运算结果也是 int 型，
需要强制转换类型才能赋值给 short 型。而 short s1 = 1; s1 += 1;可以正确编译，因为 s1+= 1;相当于 s1 =
(short)(s1 + 1);其中有隐含的强制类型转换。

### int 和 和 Integer 有什么区别？

Java 是一个近乎纯洁的面向对象编程语言，但是为了编程的方便还是引入了基本数据类型，为了能够将这些基本
数据类型当成对象操作，Java 为每一个基本数据类型都引入了对应的包装类型（wrapper class），int 的包装类就是
Integer，从 Java 5 开始引入了自动装箱/拆箱机制，使得二者可以相互转换。
Java 为每个原始类型提供了包装类型：

- 原始类型: boolean，char，byte，short，int，long，float，double
- 包装类型：Boolean，Character，Byte，Short，Integer，Long，Float，Double
  -

```java
public class AutoUnboxingTest {

    public static void main(String[] args) {
        Integer a = new Integer(3);
        Integer b = 3; //将3自动装箱成 Integer 类型
        int c = 3;
        System.out.println(a == b); //output: false， 两个引用没有引用同一对象，需要注意的是包装类型间的相等应该用 equals ，而不是 ‘==’
        System.out.println(a == c); //output: true，a 自动拆箱成 int 类型再与 c 比较
    }
}
```

### 下面 Integer 类型的数值比较输出的结果为？

```
 public static void main(String[] args) {
        Integer f1 = 100, f2 = 100, f3 = 150, f4 = 150;
        System.out.println(f1 == f2);
        System.out.println(f3 == f4);
    }
```

如果不明就里很容易认为两个输出要么都是 true 要么都是 false。首先需要注意的是 f1、f2、f3、f4 四个变量
都是 Integer 对象引用，所以下面的==运算比较的不是值而是引用。装箱的本质是什么呢？当我们给一个 Integer 对
象赋一个 int 值的时候，会调用 Integer 类的静态方法 valueOf，如果看看 valueOf 的源代码就知道发生了什么。
源码：

```java
  /**
     * Returns an {@code Integer} instance representing the specified
     * {@code int} value.  If a new {@code Integer} instance is not
     * required, this method should generally be used in preference to
     * the constructor {@link #Integer(int)}, as this method is likely
     * to yield significantly better space and time performance by
     * caching frequently requested values.
     *
     * This method will always cache values in the range -128 to 127,
     * inclusive, and may cache other values outside of this range.
     *
     * @param  i an {@code int} value.
     * @return an {@code Integer} instance representing {@code i}.
     * @since  1.5
     */
    public static Integer valueOf(int i) {
        if (i >= IntegerCache.low && i <= IntegerCache.high)
            return IntegerCache.cache[i + (-IntegerCache.low)];
        return new Integer(i);
    }
```

IntegerCache 是 Integer 的内部类，其代码如下所示

```java
**
     * Cache to support the object identity semantics of autoboxing for values between
     * -128 and 127 (inclusive) as required by JLS.
     *
     * The cache is initialized on first usage.  The size of the cache
     * may be controlled by the {@code -XX:AutoBoxCacheMax=<size>} option.
     * During VM initialization, java.lang.Integer.IntegerCache.high property
     * may be set and saved in the private system properties in the
     * sun.misc.VM class.
     */

    private static class IntegerCache {
        static final int low = -128;
        static final int high;
        static final Integer cache[];

        static {
            // high value may be configured by property
            int h = 127;
            String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
            if (integerCacheHighPropValue != null) {
                try {
                    int i = parseInt(integerCacheHighPropValue);
                    i = Math.max(i, 127);
                    // Maximum array size is Integer.MAX_VALUE
                    h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                } catch( NumberFormatException nfe) {
                    // If the property cannot be parsed into an int, ignore it.
                }
            }
            high = h;

            cache = new Integer[(high - low) + 1];
            int j = low;
            for(int k = 0; k < cache.length; k++)
                cache[k] = new Integer(j++);

            // range [-128, 127] must be interned (JLS7 5.1.7)
            assert IntegerCache.high >= 127;
        }

        private IntegerCache() {}
    }
```

简单的说，如果整型字面量的值在-128 到 127 之间，那么不会 new 新的 Integer 对象，而是直接引用常量池
中的 Integer 对象，所以上面的面试题中 f1 == f2 的结果是 true，而 f3 == f4 的结果是 false。

### String、StringBuffer、StringBuilder 的区别？

（1）、可变不可变

String：字符串常量，在修改时不会改变自身；若修改，等于重新生成新的字符串对象。

StringBuffer：在修改时会改变对象自身，每次操作都是对 StringBuffer 对象本身进行修改，不是生成新的对象；使用场景：对字符串经常改变情况下，主要方法：append（），insert（）等。

（2）、线程是否安全

String：对象定义后不可变，线程安全。

StringBuffer：是线程安全的（对调用方法加入同步锁），执行效率较慢，适用于多线程下操作字符串缓冲区大量数据。

StringBuilder：是线程不安全的，适用于单线程下操作字符串缓冲区大量数据。

（3）、共同点
StringBuilder 与 StringBuffer 有公共父类 AbstractStringBuilder(抽象类)。

StringBuilder、StringBuffer的方法都会调用AbstractStringBuilder中的公共方法，如 super.append(...)。
只是 StringBuffer 会在方法上加 synchronized关键字，进行同步。最后，如果程序不是多线程的，那么使用StringBuilder 效率高于 StringBuffer。

### 数据类型之间的转换

（1）、字符串如何转基本数据类型？调用基本数据类型对应的包装类中的方法 parseXXX(String)或 valueOf(String)即可返回相应基本类型。

（2）、基本数据类型如何转字符串？一种方法是将基本数据类型与空字符串（“”）连接（+）即可获得其所对应的字符串；另一种方法是调用 String
类中的 valueOf()方法返回相应字符串。



## 三、Java 异常处理

### Java 中异常分为哪些种类

按照异常需要处理的时机分为编译时异常（也叫强制性异常）也叫 CheckedException 和运行时异常
（也叫非强制性异常）也叫 RuntimeException。只有 java 语言提供了 Checked 异常，Java 认为 Checked 异常都是可以被处理的异常，所以 Java 程序必须显式处理 Checked 异常。如果程序没有处理 Checked 异常，该程序在编译时就会发生错误无法编译。这体现了 Java 的设计哲学：没有完善错误处理的代码根本没有机会被执行。对 Checked 异常处理方法有两种：

1 当前方法知道如何处理该异常，则用 try...catch 块来处理该异常。

2 当前方法不知道如何处理，则在定义该方法是声明抛出该异常。

运行时异常只有当代码在运行时才发行的异常，编译时不需要 try catch。Runtime 如除数是 0 和数组下标越界等，其产生频繁，处理麻烦，若显示申明或者捕获将会对程序的可读性和运行效率影响很大。所以由系统自动检测并将它们交给缺省的异常处理程序。当然如果你有处理要求也可以显示捕获它们。

### error 和 exception 的区别

Error 类和 Exception 类的父类都是 Throwable 类，他们的区别如下。Error 类一般是指与虚拟机相关的问题，如系统崩溃，虚拟机错误，内存空间不足，方法调用栈溢出等。对于这类错误的导致的应用程序中断，仅靠程序本身无法恢复和和预防，遇到这样的错误，建议让程序终止。Exception 类表示程序可以处理的异常，可以捕获且可能恢复。遇到这类异常，应该尽可能处理异常，使程序恢复运行，而不应该随意终止异常。Exception 类又分为运行时异常（Runtime Exception）和受检查的异常(Checked Exception )，运行时异常;**ArithmaticException**,**IllegalArgumentException**，编译能通过，但是一运行就终止了，程序不会处理运行时异常，出现这类异常，程序会终止。而受检查的异常，要么用 try。。。catch 捕获，要么用 throws 字句声明抛出，交给它的父类处理，否则编译不会通过。

### throw 和 throws 的区别

- throw：

1. throw 语句用在方法体内，表示抛出异常，由方法体内的语句处理。
2. throw 是具体向外抛出异常的动作，所以它抛出的是一个异常实例，执行 throw 一定是抛出了某种异常。

- throws：

1. throws 语句是用在方法声明后面，表示如果抛出异常，由该方法的调用者来进行异常的处理。
2. throws 主要是声明这个方法会抛出某种类型的异常，让它的使用者要知道需要捕获的异常的类型。
3. throws 表示出现异常的一种可能性，并不一定会发生这种异常。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008160206856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)



## 四、Java 常用API

### switch 是否能作用在 byte 上，是否能作用在 long 上，是否能作用在 String上?

Java5 以前 switch(expr)中，expr 只能是 byte、short、char、int。从 Java 5 开始，Java 中引入了枚举类型，expr 也可以是 enum 类型。从 Java 7 开始，expr 还可以是字符串（String），但是长整型（long）在目前所有的版本中都是不可以的。

### 请说出下面程序的输出

```java
class StringEqualTest {
    public static void main(String[] args) {
        String s1 = "Programming";
        String s2 = new String("Programming");
        String s3 = "Program";
        String s4 = "ming";
        String s5 = "Program" + "ming";
        String s6 = s3 + s4;
        System.out.println(s1 == s2); //false
        System.out.println(s1 == s5); //true
        System.out.println(s1 == s6); //false
        System.out.println(s1 == s6.intern()); //true
        System.out.println(s2 == s2.intern()); //false
    }
}
```

补充：解答上面的面试题需要知道如下两个知识点：

1. String 对象的 intern（）方法会得到字符串对象在常量池中对应的版本的引用（如果常量池中有一个字符串与String 对象的 equals 结果是 true），如果常量池中没有对应的字符串，则该字符串将被添加到常量池中，然后返回常量池中字符串的引用；
2. 字符串的‘+’操作其本质是创建了 StringBuilder 对象进行 append 操作，然后将拼接后的 StringBuilder 对象用 toString 方法处理成 String 对象，这一点可以用 javap -c StringEqualTest.class 命令获得 class 文件对应的 JVM 字节码指令就可以看出来。

### 什么情况下用“+”运算符进行字符串连接比调用 StringBuffer/StringBuilder 对象的 append 方法连接字符串性能更好？

该题来自华为。
字符串是 Java 程序中最常用的数据结构之一。在 Java 中 String 类已经重载了"+"。也就是说，字符串可以直接
使用"+"进行连接，如下面代码所示：

```java
String s = "abc" + "ddd";
```

但这样做真的好吗？当然，这个问题不能简单地回答 yes or no。要根据具体情况来定。在 Java 中提供了一个StringBuilder 类（这个类只在 J2SE5 及以上版本提供，以前的版本使用 StringBuffer 类），这个类也可以起到"+"的作用。那么我们应该用哪个呢？

下面让我们先看看如下的代码：

```java
public class TestSimplePlus {
    public static void main(String[] args){
        String s = "abc";   
        String ss = "ok" + s + "xyz" + 5;
        System.out.println(ss);
    }
}
```

上面的代码将会输出正确的结果。从表面上看，对字符串和整型使用"+"号并没有什么区别，但事实真的如此吗？下面让我们来看看这段代码的本质。我们首先使用反编译工具（如 jdk 带的 javap、或 jad）将 TestSimplePlus 反编译成 Java Byte Code，其中的奥秘就一目了然了。在本文将使用 jad 来反编译，命令如下：
**jad -o -a -s d.java TestSimplePlus.class**

反编译后的代码如下：

```java
package com.starkfang.test;

import java.io.PrintStream;

public class TestSimplePlus
{

    public TestSimplePlus()
    {
    //    0    0:aload_0         
    //    1    1:invokespecial   #1   <Method void Object()>
    //    2    4:return          
    }

    public static void main(String args[])
    {
        String s = "abc";
    //    0    0:ldc1            #2   <String "abc">
    //    1    2:astore_1        
        String s1 = (new StringBuilder()).append("ok").append(s).append("xyz").append(5).toString();
    //    2    3:new             #3   <Class StringBuilder>
    //    3    6:dup             
    //    4    7:invokespecial   #4   <Method void StringBuilder()>
    //    5   10:ldc1            #5   <String "ok">
    //    6   12:invokevirtual   #6   <Method StringBuilder StringBuilder.append(String)>
    //    7   15:aload_1         
    //    8   16:invokevirtual   #6   <Method StringBuilder StringBuilder.append(String)>
    //    9   19:ldc1            #7   <String "xyz">
    //   10   21:invokevirtual   #6   <Method StringBuilder StringBuilder.append(String)>
    //   11   24:iconst_5        
    //   12   25:invokevirtual   #8   <Method StringBuilder StringBuilder.append(int)>
    //   13   28:invokevirtual   #9   <Method String StringBuilder.toString()>
    //   14   31:astore_2        
        System.out.println(s1);
    //   15   32:getstatic       #10  <Field PrintStream System.out>
    //   16   35:aload_2         
    //   17   36:invokevirtual   #11  <Method void PrintStream.println(String)>
    //   18   39:return          
    }
}
```

这里使用使用 jad 反编译的好处之一就是可以同时生成字节码和源代码。这样可以进行对照研究。从上面的代码很容易看
出，虽然在源程序中使用了"+"，但在编译时仍然将"+"转换成 StringBuilder。因此，我们可以得出结论，在 Java 中
无论使用何种方式进行字符串连接，实际上都使用的是 StringBuilder。
那么是不是可以根据这个结论推出使用"+"和 StringBuilder 的效果是一样的呢？这个要从两个方面的解释。如果
从运行结果来解释，那么"+"和 StringBuilder 是完全等效的。但如果从运行效率和资源消耗方面看，那它们将存在很
大的区别。
当然，如果连接字符串行表达式很简单（如上面的顺序结构），那么"+"和 StringBuilder 基本是一样的，但如果
结构比较复杂，如使用循环来连接字符串，那么产生的 Java Byte Code 就会有很大的区别。先让我们看看如下的代
码：

```
public class TestComplexPlus {
    public static void main(String[] args) {
        String s = "";
        Random rand = new Random();
        for (int i = 0; i < 10; i++) {
            s = s + rand.nextInt(1000) + " ";
        }
        System.out.println(s);
    }
}
```

上面的代码返编译后的 Java Byte Code 如下：

```
package com.starkfang.test;

import java.io.PrintStream;
import java.util.Random;

public class TestComplexPlus
{

    public TestComplexPlus()
    {
    //    0    0:aload_0         
    //    1    1:invokespecial   #1   <Method void Object()>
    //    2    4:return          
    }

    public static void main(String args[])
    {
        String s = "";
    //    0    0:ldc1            #2   <String "">
    //    1    2:astore_1        
        Random random = new Random();
    //    2    3:new             #3   <Class Random>
    //    3    6:dup             
    //    4    7:invokespecial   #4   <Method void Random()>
    //    5   10:astore_2        
        for(int i = 0; i < 10; i++)
    //*   6   11:iconst_0        
    //*   7   12:istore_3        
    //*   8   13:iload_3         
    //*   9   14:bipush          10
    //*  10   16:icmpge          55
            s = (new StringBuilder()).append(s).append(random.nextInt(1000)).append(" ").toString();
    //   11   19:new             #5   <Class StringBuilder>
    //   12   22:dup             
    //   13   23:invokespecial   #6   <Method void StringBuilder()>
    //   14   26:aload_1         
    //   15   27:invokevirtual   #7   <Method StringBuilder StringBuilder.append(String)>
    //   16   30:aload_2         
    //   17   31:sipush          1000
    //   18   34:invokevirtual   #8   <Method int Random.nextInt(int)>
    //   19   37:invokevirtual   #9   <Method StringBuilder StringBuilder.append(int)>
    //   20   40:ldc1            #10  <String " ">
    //   21   42:invokevirtual   #7   <Method StringBuilder StringBuilder.append(String)>
    //   22   45:invokevirtual   #11  <Method String StringBuilder.toString()>
    //   23   48:astore_1        

    //   24   49:iinc            3  1
    //*  25   52:goto            13
        System.out.println(s);
    //   26   55:getstatic       #12  <Field PrintStream System.out>
    //   27   58:aload_1         
    //   28   59:invokevirtual   #13  <Method void PrintStream.println(String)>
    //   29   62:return          
    }
}
```

大家可以看到，虽然编译器将"+"转换成了 StringBuilder，但创建 StringBuilder 对象的位置却在 for 语句内部。这就意味着每执行一次循环，就会创建一个 StringBuilder 对象（对于本例来说，是创建了 10 个 StringBuilder对象），虽然 Java 有垃圾回收器，但这个回收器的工作时间是不定的。如果不断产生这样的垃圾，那么仍然会占用大量的资源。解决这个问题的方法就是在程序中直接使用 StringBuilder 来连接字符串，代码如下：

```
 public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        Random rand = new Random();
        for (int i = 0; i < 10; i++) {
            sb.append(rand.nextInt(1000));
            sb.append(" ");
        }
        System.out.println(sb.toString());
    }
```

创建 StringBuilder 的代码被放在了 for 语句外。虽然这样处理在源程序中看起
来复杂，但却换来了更高的效率，同时消耗的资源也更少了。

在使用 StringBuilder 时要注意，尽量不要"+"和 StringBuilder 混着用，否则会创建更多的 StringBuilder 对象，如下面代码所：

```
for (int i = 0; i < 10; i++){
    result.append(rand.nextInt(1000));
    result.append(" ");
}
```

改成如下形式：

```
for (int i = 0; i < 10; i++){
    result.append(rand.nextInt(1000) + " ");
}
```

则反编译后的结果如下：

```
for(int i = 0; i < 10; i++)
    //* 10 19:iconst_0
    //* 11 20:istore 4
    //* 12 22:goto 65
    {
    result.append((new StringBuilder(String.valueOf(rand.nextInt(1000)))).append(" ").toString());
    // 13 25:aload_3
    // 14 26:new #21 <Class StringBuilder>
    // 15 29:dup
```

从上面的代码可以看出，Java 编译器将"+"编译成了 StringBuilder，这样 for 语句每循环一次，又创建了一个StringBuilder 对象如果将上面的代码在 JDK1.4 下编译，必须将 StringBuilder 改为 StringBuffer，而 JDK1.4 将"+"转换为StringBuffer（因为 JDK1.4 并没有提供 StringBuilder 类）。StringBuffer 和 StringBuilder 的功能基本一样，只是StringBuffer 是线程安全的，而 StringBuilder 不是线程安全的。因此，StringBuilder 的效率会更高。

- 关于 「为什么阿里巴巴不建议在for循环中使用”+”进行字符串拼接」 参考 [这儿][1].

### java 8 中的日期和时间

```java
public static void main(String[] args) {
    //取得年月日、小时分钟秒
    LocalDateTime dt = LocalDateTime.now();
    System.out.println(dt.getYear());
    System.out.println(dt.getMonthValue()); // 1 - 12
    System.out.println(dt.getDayOfMonth());
    System.out.println(dt.getHour());
    System.out.println(dt.getMinute());
    System.out.println(dt.getSecond());

    //取得从 1970 年 1 月 1 日 0 时 0 分 0 秒到现在的毫秒数
    Clock.systemDefaultZone().millis();

    //取得某月的最后一天
    LocalDate today = LocalDate.now();
    LocalDate firstday = LocalDate.of(today.getYear(),today.getMonth(),1);
    LocalDate lastDay =today.with(TemporalAdjusters.lastDayOfMonth());
    System.out.println("本月的第一天"+firstday);
    System.out.println("本月的最后一天"+lastDay);

    //格式化日期
    DateTimeFormatter newFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
    LocalDate date2 = LocalDate.now();
    System.out.println(date2.format(newFormatter));

    //取得昨天的当前时刻
    LocalDateTime today = LocalDateTime.now();
    LocalDateTime yesterday = today.minusDays(1);
    System.out.println(yesterday);

     //当前时间戳
     Instant timestamp = Instant.now();
     System.out.println("当前时间戳 = "+timestamp.toEpochMilli());
     Instant specificTime = Instant.ofEpochMilli(timestamp.toEpochMilli());
     System.out.println("转为 Instant = "+specificTime);
}
```

Java 8 中引入了新的时间日期 API，其中包括 LocalDate、LocalTime、LocalDateTime、Clock、Instant 等类，这些的类的设计都使用了不变模式，因
此是线程安全的设计。

[1]: https://www.hollischuang.com/archives/3186



## 五、Java 容器

### 集合框架中接口

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019082617193775.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)

### 具体的集合

![<div align="center"> <img src="pics/20190807162725.png" width="500px"></div> <br>](https://img-blog.csdnimg.cn/20190826171950673.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)

### 如何给 HashMap 排序？

已知一个 HashMap<Integer，Person>集合， Person 有 name（String）和 age（int）属性。请写一个方法实现对HashMap 的排序功能，该方法接收 HashMap<Integer，Person>为形参，返回类型为 HashMap<Integer，Person>，要求对 HashMap 中的 Person 的 age 倒序进行排序。排序时 key=value 键值对不得拆散。

注意：要做出这道题必须对集合的体系结构非常的熟悉。HashMap 本身就是不可排序的，但是该道题偏偏让给HashMap 排序，那我们就得想在 API 中有没有这样的 Map 结构是有序的，LinkedHashMap，对的，就是他，他是Map 结构，也是链表结构，有序的，更可喜的是他是 HashMap 的子类，我们返回 LinkedHashMap<Integer,Person>即可，还符合面向接口（父类编程的思想）。

但凡是对集合的操作，我们应该保持一个原则就是能用
JDK 中的 API 就有 JDK 中的 API ，比如排序算法我们不应
该去用冒泡或者选择，而是首先想到用 Collections 集合工具类。

```java
 	public static void main(String[] args) {
        HashMap<Integer, Person> map = new HashMap<>();
        map.put(1, new Person(18, "Tom"));
        map.put(3, new Person(25, "Jenny"));
        map.put(2, new Person(21, "James"));
        map.put(4, new Person(20, "John"));
        System.out.println("map:"+map);

        Set<Map.Entry<Integer, Person>> entries = map.entrySet();
        List<Map.Entry<Integer, Person>> list = new ArrayList<>(entries);
        Collections.sort(list, (o1, o2) -> o2.getValue().getAge() - o1.getValue().getAge());
        LinkedHashMap<Integer, Person> linkedHashMap = new LinkedHashMap<>();

        for (Map.Entry<Integer, Person> entry : list) {
            linkedHashMap.put(entry.getKey(), entry.getValue());
        }

        System.out.println("linkedHashMap:"+linkedHashMap);
    }

```

输出

```java
map:{1=Person(age=18, name=Tom), 2=Person(age=21, name=James), 3=Person(age=25, name=Jenny), 4=Person(age=20, name=John)}

linkedHashMap:{3=Person(age=25, name=Jenny), 2=Person(age=21, name=James), 4=Person(age=20, name=John), 1=Person(age=18, name=Tom)}

```

### List 和 Map、Set 的区别？

1. 结构特点

List 和 Set 是存储单列数据的集合，Map 是存储键和值这样的双列数据的集合；List 中存储的数据是有顺序，并且允许重复；Map 中存储的数据是没有顺序的，其键是不能重复的，它的值是可以有重复的，Set 中存储的数据是无序的，且不允许有重复，但元素在集合中的位置由元素的 hashcode 决定，位置是固定的（Set 集合根据 hashcode 来进行数据的存储，所以位置是固定的，但是位置不是用户可以控制的，所以对于用户来说set 中的元素还是无序的）;

2. 实现类

- List
  接口有三个实现类（ LinkedList：基于链表实现，链表内存是散乱的，每一个元素存储本身内存地址的同时还存储下一个元素的地址。链表增删快，查找慢； ArrayList：基于数组实现，非线程安全的，效率高，便于索引，但不便于插入删除； Vector：基于数组实现，线程安全的，效率低）。
- Map
  接口有三个实现类（ HashMap：基于 hash 表的 Map 接口实现，非线程安全，高效，支持 null 值和 null 键； HashTable：线程安全，低效，不支持 null 值和 null 键； LinkedHashMap：是 HashMap 的一个子类，保存了记录的插入顺序； SortMap 接口： TreeMap ，能够把它保存的记录根据键排序，默认是键值的升序排序）。
- Set
  接口有两个实现类（ HashSet ：底层是由 HashMap 实现，不允许集合中有重复的值，使用该方式时需要重写 equals() 和 hashCode() 方法； LinkedHashSet ：继承与 HashSet ，同时又基于 LinkedHashMap 来进行实现，底层使用的是 LinkedHashMp ）。
  
3. 区别

List集合中对象按照索引位置排序，可以有重复对象，允许按照对象在集合中的索引位置检索对象，例如通过list.get(i) 方法来获取集合中的元素； Map 中的每一个元素包含一个键和一个值，成对出现，键对象不可以重复，值对象可以重复； Set 集合 中的对象不按照特定的方式排序，并且没有重复对象，但它的实现类能对集合中的对象按照特定的方式排序，例如 TreeSet 类，可以按照默认顺序，也可以通过实现 Java.util.Comparator 接口来自定义排序方式。

### 请分别用两个队列模拟堆栈结构；两个栈模拟队列结构

- 两个栈模拟队列结构

in 栈用来处理入栈（push）操作，out 栈用来处理出栈（pop）操作。一个元素进入 in 栈之后，出栈的顺序被反转。当元素要出栈时，需要先进入 out 栈，此时元素出栈顺序再一次被反转，因此出栈顺序就和最开始入栈顺序是相同的，先进入的元素先退出，这就是队列的顺序。

```Java
import java.util.Stack;

public class Solution {
    Stack<Integer> in = new Stack<>();
    Stack<Integer> out = new Stack<>();

    public void push(int node) {
        in.push(node);
    }

    public int pop() {
        if (out.isEmpty()) {
            while (!in.isEmpty()) {
                out.push(in.pop());
            }
        }
        return out.pop();
    }  
}
```

- 两个队列模拟堆栈结构

push 放进空的队列，然后把另一个队列的数据加到本队列后面，pop poll 非空队列头部元素就好

```Java
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    static Deque<Integer> q1 = new ArrayDeque<>();  
    static Deque<Integer> q2 = new ArrayDeque<>();

    public static void push(int x) {
       if (q2.isEmpty()) {
           q2.offer(x);
           while (q1.size() > 0) {
               q2.offer(q1.poll());
           }
       } else if (q1.isEmpty()) {
           q1.offer(x);
           while (q2.size() > 0) {
               q1.offer(q2.poll());
           }
       }
   }

   public static int pop() {
       if (q1.isEmpty() && q2.isEmpty()) {
           return -1;
       }
       if (!q2.isEmpty()) {
           return q2.poll();
       } else if (!q1.isEmpty()) {
           return q1.poll();
       }
       return -1;
   }
}

```

### List a=new ArrayList()和 ArrayList a =new ArrayList()的区别？

List list = new ArrayList();这句创建了一个 ArrayList 的对象后把上溯到了 List。此时它是一个 List 对象了，有些
ArrayList 有但是 List 没有的属性和方法，它就不能再用了。而 ArrayList list=new ArrayList();创建一对象则保留了
ArrayList 的所有属性。 所以需要用到 ArrayList 独有的方法的时候不能用前者。

```Java
List list = new ArrayList();
ArrayList arrayList = new ArrayList();
list.trimToSize(); //错误，没有该方法。
arrayList.trimToSize(); //ArrayList 里有该方法。
```



## 六、Java 多线程与并发库

### 多线程基础知识，传统线程机制的回顾

#### 传统 使用类 Thread 和接口 Runnable 实现

1. 在 Thread 子类覆盖的 run 方法中编写运行代码

```java
new Thread() {
   @Override
   public void run() {
       try {
           Thread.sleep(2000);
       } catch (InterruptedException e) {
           e.printStackTrace();
       }
   }
}.start();
```

2. 在 传递给 Thread 对象的 Runnable 对象的 run 方法中编写代码

```java
new Thread(new Runnable() {
   @Override
   public void run() {
       try {
           Thread.sleep(2000);
       } catch (InterruptedException e) {
           e.printStackTrace();
       }
   }
}).start();
```

3. 总结
   查看Thread 类的 run() 方法的源代码，可以看到其实这两种方式都是在调用 Thread 对象的 run 方法，如果 Thread 类的 run 方法没有被覆盖，并且为该 Thread 对象设置了一个 Runnable 对象，该 run 方法会调用 Runnable 对象的 run 方法

```Java
/**
     * If this thread was constructed using a separate
     * <code>Runnable</code> run object, then that
     * <code>Runnable</code> object's <code>run</code> method is called;
     * otherwise, this method does nothing and returns.
     * <p>
     * Subclasses of <code>Thread</code> should override this method.
     *
     * @see     #start()
     * @see     #stop()
     * @see     #Thread(ThreadGroup, Runnable, String)
     */
    @Override
    public void run() {
        if (target != null) {
            target.run();
        }
    }
```

### ThreadLocal的使用

Java中的ThreadLocal类允许我们创建只能被同一个线程读写的变量。因此，如果一段代码含有一个ThreadLocal变量的引用，即使两个线程同时执行这段代码，它们也无法访问到对方的ThreadLocal变量。

完整的ThreadLocal示例：

```Java
public class ThreadLocalExample {
    public static class MyRunnable implements Runnable {
        private ThreadLocal<Integer> threadLocal = new ThreadLocal<>();

        @Override
        public void run() {
            threadLocal.set((int) (Math.random() * 100D));
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
            }
            System.out.println(threadLocal.get());
        }
    }

    public static void main(String[] args) {
        MyRunnable sharedRunnableInstance = new MyRunnable();
        Thread thread1 = new Thread(sharedRunnableInstance);
        Thread thread2 = new Thread(sharedRunnableInstance);
        thread1.start();
        thread2.start();
        try {
            thread1.join(); //wait for thread 1 to terminate
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

上面创建了两个线程共享一个MyRunnable实例。每个线程执行run()方法的时候，会给同一个ThreadLocal实例设置不同的值。如果调用set()方法的时候用synchronized关键字同步，而且不是一个ThreadLocal对象实例，那么第二个线程将会覆盖第一个线程所设置的值。然而，由于是ThreadLocal对象，所以两个线程无法看到彼此的值。因此，可以设置或者获取不同的值。

[ThreadLocal-面试必问深度解析](https://www.jianshu.com/p/98b68c97df9b)

### 多线程共享数据

在 Java 传统线程机制中的共享数据方式，大致可以简单分两种情况：

1. 多个线程行为一致，共同操作一个数据源。也就是每个线程执行的代码相同，可以使用同一个 Runnable 对象，这个 Runnable 对象中有那个共享数据，例如，卖票系统就可以这么做。

```Java
class ShareData {
    private int num = 10;

    public synchronized void inc() {
        num++;
        System.out.println(Thread.currentThread().getName() + ": invoke inc method num =" + num);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

class RunnableCusToInc implements Runnable {
    private ShareData shareData;

    public RunnableCusToInc(ShareData data) {
        this.shareData = data;
    }

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            shareData.inc();
        }
    }
}

public class Test {

    public static void main(String[] args) {

        ShareData shareData = new ShareData();
        for (int i = 0; i < 4; i++) {
            new Thread(new RunnableCusToInc(shareData), "Thread " + i).start();
        }
    }
}

```

2. 多个线程行为不一致，共同操作一个数据源。也就是每个线程执行的代码不同，这时候需要用不同的Runnable 对象。例如，银行存取款。

```Java
class ShareData {
    private int num = 10;

    public synchronized void inc() {
        num++;
        System.out.println(Thread.currentThread().getName() + ": invoke inc method num =" + num);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public synchronized void dec() {
        num--;
        System.err.println(Thread.currentThread().getName() + ": invoke dec method num =" + num);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class Test {

    public static void main(String[] args) {

        ShareData shareData = new ShareData();

        for (int i = 0; i < 4; i++) {
            if (i % 2 == 0) {
                new Thread(() -> {
                    for (int i1 = 0; i1 < 5; i1++) {
                        shareData.inc();
                    }
                }, "Thread " + i).start();
            } else {
                new Thread(() -> {
                    for (int i12 = 0; i12 < 5; i12++) {
                        shareData.dec();
                    }
                }, "Thread " + i).start();
            }
        }
    }
}
```

### ThreadPoolExecutor 线程池执行者

java.util.concurrent.ThreadPoolExecutor 是 ExecutorService 接口的一个实现。ThreadPoolExecutor 使用其内部池中的线程执行给定任务(Callable 或者 Runnable)。

ThreadPoolExecutor 包含的线程池能够包含不同数量的线程。池中线程的数量由以下变量决定：

- corePoolSize
- maximumPoolSize

当一个任务委托给线程池时，如果池中线程数量低于 corePoolSize，一个新的线程将被创建，即使池中可能尚有空 闲 线 程 。 如 果 内 部 任 务 队 列 已 满 ， 而 且 有 至 少 corePoolSize 正 在 运 行 ， 但 是 运 行 线 程 的 数 量 低 于maximumPoolSize，一个新的线程将被创建去执行该任务。

创建 ThreadPoolExecutor：

```Java
int corePoolSize = 5;
int maxPoolSize = 10;
long keepAliveTime = 5000;
ExecutorService threadPoolExecutor =
          new ThreadPoolExecutor(
              corePoolSize,
              maxPoolSize,
              keepAliveTime,
              TimeUnit.MILLISECONDS,
              new LinkedBlockingQueue<Runnable>()
              );
```

构造方法参数列表解释：
corePoolSize - 池中所保存的线程数，包括空闲线程。
maximumPoolSize - 池中允许的最大线程数。
keepAliveTime - 当线程数大于核心时，此为终止前多余的空闲线程等待新任务的最长时间。
unit - keepAliveTime 参数的时间单位。
workQueue - 执行前用于保持任务的队列。此队列仅保持由 execute 方法提交的 Runnable 任务。

### ScheduledPoolExecutor 定时线程池执行者

java.util.concurrent.ScheduledExecutorService 是一个 固定时间多次执行。 任务由一个工作者线程异步执行，而不是程执行。
ScheduledPoolExecutor 例子:

```Java
#推荐方式1:
ScheduledExecutorService executorService = new ScheduledThreadPoolExecutor(1,
        new BasicThreadFactory
          .Builder().namingPattern("example-schedule-pool-%d").daemon(true).build());

#推荐方式2:
ThreadFactory namedThreadFactory = new ThreadFactoryBuilder().setNameFormat("demo-pool-%d").build();

//Common Thread Pool
ExecutorService pool = new ThreadPoolExecutor(5, 200,0L, TimeUnit.MILLISECONDS,
        new LinkedBlockingQueue<Runnable>(1024), namedThreadFactory, new ThreadPoolExecutor.AbortPolicy());

pool.execute(()-> System.out.println(Thread.currentThread().getName()));
pool.shutdown();//gracefully shutdown
```

所执行的拒绝策略：
ThreadPoolExecutor.AbortPolicy()：被拒绝后抛出RejectedExecutionException异常
ThreadPoolExecutor.CallerRunsPolicy()：被拒绝后给调用线程池的线程处理
ThreadPoolExecutor.DiscardOldestPolicy()：被拒绝后放弃队列中最旧的未处理的任务
ThreadPoolExecutor.DiscardPolicy()：被拒绝后放弃被拒绝的任务(当前新添加的任务)



### 在 java 中 wait 和 sleep 方法的不同？

最大的不同是在等待时 wait 会释放锁，而 sleep 一直持有锁。wait 通常被用于线程间交互，sleep 通常被用于暂停执行。

### synchronized 和 volatile 关键字的作用

一旦一个共享变量（类的成员变量、类的静态成员变量）被 volatile 修饰之后，那么就具备了两层语义：

1. 保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的。
2. 禁止进行指令重排序。volatile 本质是在告诉 jvm 当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取；

synchronized 则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。

1. volatile 仅能使用在变量级别；synchronized 则可以使用在变量、方法、和类级别的
2. volatile 仅能实现变量的修改可见性，并不能保证原子性；synchronized 则可以保证变量的修改可见性和原子性
3. volatile 不会造成线程的阻塞；

### 请叙述一下您对线程池的理解？

1. 降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。
2. 提高响应速度。当任务到达时，任务可以不需要等到线程创建就能立即执行。
3. 提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。

### 线程池的启动策略?

1. 线程池刚创建时，里面没有一个线程。任务队列是作为参数传进来的。不过，就算队列里面有任务，线程池也不会马上执行它们。
2. 当调用 execute() 方法添加一个任务时，线程池会做如下判断：
   a. 如果正在运行的线程数量小于 corePoolSize，那么马上创建线程运行这个任务；
   b. 如果正在运行的线程数量大于或等于 corePoolSize，那么将这个任务放入队列。
   c. 如果这时候队列满了，而且正在运行的线程数量小于 maximumPoolSize，那么还是要创建线程运行这个任务；
   d. 如果队列满了，而且正在运行的线程数量大于或等于 maximumPoolSize，那么线程池会抛出异常，告诉调用者“我不能再接受任务了”。
3. 当一个线程完成任务时，它会从队列中取下一个任务来执行。
4. 当一个线程无事可做，超过一定的时间（keepAliveTime）时，线程池会判断，如果当前运行的线程数大于corePoolSize，那么这个线程就被停掉。所以线程池的所有任务完成后，它最终会收缩到 corePoolSize 的大小。



### 如何控制某个方法允许并发访问线程的个数？

可以使用 Semaphore 控制，Semaphore（信号量）是用来控制同时访问特定资源的线程数量，它通过协调各个线程，以保证合理的使用公共资源。
[Java并发之Semaphore的使用](https://www.cnblogs.com/miller-zou/p/6978422.html)

### 请说出同步线程及线程调度相关的方法？

wait()：使一个线程处于等待（阻塞）状态，并且释放所持有的对象的锁；

sleep()：使一个正在运行的线程处于睡眠状态，是一个静态方法，调用此方法要处理　InterruptedException 异常；

notify()：唤醒一个处于等待状态的线程，当然在调用此方法的时候，并不能确切的唤醒某一个等待状态的线程，而是由 JVM 确定唤醒哪个线程，而且与优先级无关；

notityAll()：唤醒所有处于等待状态的线程，该方法并不是将对象的锁给所有线程，而是让它们竞争，只有获得锁的线程才能进入就绪状态。



## 七、Java IO流

### Java 中有几种类型的流

按照流的方向：输入流（ inputStream ）和输出流 outputStream ）。

按照实现功能分：节点流（可以从或向一个特定的地方（节点）读写数据。如 FileReader ）和处理流（是对一个已存在的流的连接和封装，通过所封装的流的功能调用实现数据读写。如 BufferedReader 。处理流的构造方法总是要带一个其他的流对象做参数。一个流对象经过其他流的多次包装，称为流的链接。）

按照处理数据的单位：字节流和字符流。字节流继承于 InputStream 和 OutputStream ，字符流继承于 InputStreamReader 和 OutputStreamWriter 。

![<div align="center"> <img src="pics/20190803230950.png" width="700px"> </div><br>](https://img-blog.csdnimg.cn/20191008160315289.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191008160336545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2p1bm9vaG9vbWU=,size_16,color_FFFFFF,t_70)

- [更详细请看这儿](https://www.runoob.com/java/java-files-io.html)

### 序列化

序列化就是将一个对象转换成字节序列，方便存储和传输。

- 序列化：ObjectOutputStream.writeObject()
- 反序列化：ObjectInputStream.readObject()

不会对静态变量进行序列化，因为序列化只是保存对象的状态，静态变量属于类的状态。

- [深入分析Java的序列化与反序列化](https://www.hollischuang.com/archives/1140)



## 八、Java 内部类

### 静态嵌套类 (Static Nested Class) 和内部类 (Inner Class) 的不同

- 静态嵌套类 Static Nested Class 是被声明为静态（ static ）的内部类，它可以不依赖于外部类实例被实例化。
- 内部类： 需要在外部类实例化后才能实例化，其语法看起来挺诡异的 。





## 九、Java 反射

### 说说你对 Java 中反射的理解

Java反射机制可以让我们在编译期(Compile Time)之外的运行期(Runtime)检查类，接口，变量以及方法的信息。反射还可以让我们在运行期实例化对象，调用方法，通过调用get/set方法获取变量的值。

Java 中 的 反 射 首 先 是 能 够 获 取 到 Java 中 要 反 射 类 的 字 节 码 ， 获 取 字 节 码 有 三 种 方 法:

1. Class.forName(className)
2. 类名.class
3. this.getClass()

然后将字节码中的方法，变量，构造函数等映射成相应的 Method、Filed、Constructor 等类，这些类提供了丰富的方法可以被我们所使用。





## 十、Java 中的动态代理

### 写一个 ArrayList 的动态代理类

```Java
public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        List<String> proxyInstance = (List<String>) Proxy.newProxyInstance(list.getClass().getClassLoader(), list.getClass().getInterfaces(),
                (proxy, method, args1) -> method.invoke(list, args1));

        proxyInstance.add("Hello World");
        System.out.println(list);

    }
```

### 动静态代理的区别，什么场景使用？

静态代理通常只代理一个类，动态代理是代理一个接口下的多个实现类。静态代理事先知道要代理的是什么，而动态代理不知道要代理什么东西，只有在运行时才知道。动态代理是实现 JDK 里的 InvocationHandler 接口的 invoke 方法，但注意的是代理的是接口，也就是你的业务类必须要实现接口，通过 Proxy 里的 newProxyInstance 得到代理对象。

还有一种动态代理 CGLIB，代理的是类，不需要业务类继承接口，通过派生的子类来实现代理。通过在运行时，动态修改字节码达到修改类的目的。

AOP 编程就是基于动态代理实现的，比如著名的 Spring 框架、Hibernate 框架等等都是动态代理的使用例子。





## 十一、Java 中的设计模式

### 你所知道的设计模式有哪些？

Java中一般认为有 23 种设计模式，我们不需要所有的都会，但是其中常用的几种设计模式应该去掌握。

下面列出了所有的设计模式。需要掌握的设计模式我单独列出来了，当然能掌握的越多越好。总体来说设计模式分为三大类：

- 创建型模式，共五种：***工厂方法模式*** 、 ***抽象工厂模式*** 、 ***单例模式*** 、 ***建造者模式***、原型模式。
- 结构型模式，共七种：***适配器模式*** 、***装饰器模式***、 代理模式 、外观模式、桥接模式、组合模式、 享元模式 。
- 行为型模式，共十一种：***策略模式*** 、模板方法模式、 ***观察者模式*** 、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。

#### 单例设计模式

最好理解的一种设计模式，分为懒汉式和饿汉式。

- 饿汉式：

```java
public class Singleton {

    public static Singleton instance = new Singleton();

    private Singleton() {}

    public static Singleton getInstance() {
        return instance;
    }
}
```

- 懒汉式：

```java
public class Singleton {

    private static volatile Singleton singleton = null;

    private Singleton() {}

    public static Singleton getInstance() {
        if (singleton == null) {
            synchronized (Singleton.class) {
                if (singleton == null) {
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
}
```

#### 工厂设计模式

工厂模式分为***工厂方法模式***和***抽象工厂模式***。

***工厂方法模式***分为三种：

- ***普通工厂模式***，就是建立一个工厂类，对实现了同一接口的一些类进行实例的创建。
- ***多个工厂方法模式***，是对普通工厂方法模式的改进，在普通工厂方法模式中，如果传递的字符串出错，则不能正确创建对象，而多个工厂方法模式是提供多个工厂方法，分别创建对象。
- ***静态工厂方法模式***，将上面的多个工厂方法模式里的方法置为静态的，不需要创建实例，直接调用即可。

##### 1 普通工厂模式

```java
public interface Sender {
   public void Send()
}

public class MailSender implements Sender {
  @Override
  public void Send() {
    System.out.println("this is mail sender!");
   }
}

public class SmsSender implements Sender {
  @Override
  public void Send() {
    System.out.println("this is sms sender!");
  }
}

public class SendFactory {
  public Sender produce(String type) {
    if ("mail".equals(type)) {
      return new MailSender();
    } else if ("sms".equals(type)) {
      return new SmsSender();
    } else {
      System.out.println("请输入正确的类型!");
      return null;
    }
 }
```

##### 2 多个工厂方法模式

该模式是对普通工厂方法模式的改进，在普通工厂方法模式中，如果传递的字符串出错，则不能正确创建对象，而多个工厂方法模式是提供多个工厂方法，分别创建对象。

```Java
public class SendFactory {
    public Sender produceMail() {
        return new MailSender();
    }
    public Sender produceSms() {
        return new SmsSender();
    }
}


public class FactoryTest {
    public static void main(String[] args) {
        SendFactory factory = new SendFactory();
        Sender sender = factory.produceMail();
        sender.send();
    }
}
```

##### 3 静态工厂方法模式

静态工厂方法模式，将上面的多个工厂方法模式里的方法置为静态的，不需要创建实例，直接调用即可。

```Java
public class SendFactory {
    public static Sender produceMail() {
        return new MailSender();
    }
    public static Sender produceSms() {
        return new SmsSender();
    }
}

public class FactoryTest {
    public static void main(String[] args) {
        Sender sender = SendFactory.produceMail();
        sender.send();
    }
}
```

***抽象工厂模式***
工厂方法模式有一个问题就是，类的创建依赖工厂类，也就是说，如果想要拓展程序，必须对工厂类进行修改，这违背了闭包原则，所以，从设计角度考虑，有一定的问题，如何解决？就用到抽象工厂模式，创建多个工厂类，这样一旦需要增加新的功能，直接增加新的工厂类就可以了，不需要修改之前的代码。

```Java
public interface Provider {
       public Sender produce();
   }
-----------------------------------------------------------------
public interface Sender {
   public void send();
}
-----------------------------------------------------------------
public class MailSender implements Sender {
   @Override
   public void send() {
       System.out.println("this is mail sender!");
   }
}
-----------------------------------------------------------------
public class SmsSender implements Sender {
   @Override
   public void send() {
       System.out.println("this is sms sender!");

   }
}
-----------------------------------------------------------------
public class SendSmsFactory implements Provider {
   @Override
   public Sender produce() {
       return new SmsSender();
   }
}
-----------------------------------------------------------------
public class SendMailFactory implements Provider {
       @Override
       public Sender produce() {
           return new MailSender();
       }
   }
-----------------------------------------------------------------
public class Test {
   public static void main(String[] args) {
       Provider provider = new SendMailFactory();
       Sender sender = provider.produce();
       sender.send();
   }
}
```

#### 建造者模式（Builder）

工厂类模式提供的是创建单个类的模式，而建造者模式则是将各种产品集中起来进行管理，用来创建复合对象，所谓复合对象就是指某个类具有不同的属性，其实建造者模式就是前面抽象工厂模式和最后的 Test 结合起来得到的。

```Java
public class Builder {
    private List<Sender> list = new ArrayList<Sender>();

    public void produceMailSender(int count) {
        for (int i = 0; i < count; i++) {
            list.add(new MailSender());
        }
    }
    public void produceSmsSender(int count) {
        for (int i = 0; i < count; i++) {
            list.add(new SmsSender());
        }
    }
}

public class TestBuilder {
    public static void main(String[] args) {
        Builder builder = new Builder();
        builder.produceMailSender(10);
    }
}
```

#### 适配器设计模式

适配器模式将某个类的接口转换成客户端期望的另一个接口表示，目的是消除由于接口不匹配所造成的类的兼容性问题。主要分为三类：类的适配器模式、对象的适配器模式、接口的适配器模式。

##### 类的适配器模式

```Java
public class Source {
    public void method1() {
        System.out.println("this is original method!");
    }
}

public interface Targetable {
    /* 与原类中的方法相同 */
    public void method1();

    /* 新类的方法*/
    public void method2();
}

public class Adapter extends Source implements Targetable {
    @Override
    public void method2() {
        System.out.println("this is the targetable method!");
    }
}

public class AdapterTest {
    public static void main(String[] args) {
        Targetable target = new Adapter();
        target.method1();
        target.method2();
    }
}
```

##### 对象的适配器模式

基本思路和类的适配器模式相同，只是将 Adapter 类作修改，这次不继承 Source 类，而是持有 Source 类的实例，以达到解决兼容性的问题。

```Java
public class Wrapper implements Targetable {
        private Source source;

        public Wrapper(Source source) {
            super();
            this.source = source;
        }

        @Override
        public void method2() {
            System.out.println("this is the targetable method!");
        }

        @Override
        public void method1() {
            source.method1();
        }
    }

    public class AdapterTest {
        public static void main(String[] args) {
            Source source = new Source();
            Targetable target = new Wrapper(source);
            target.method1();
            target.method2();
        }
    }
```

##### 接口的适配器模式

接口的适配器是这样的：有时我们写的一个接口中有多个抽象方法，当我们写该接口的实现类时，必须实现该接口的所有方法，这明显有时比较浪费，因为并不是所有的方法都是我们需要的，有时只需要某一些，此处为了解决这个问题，我们引入了接口的适配器模式，借助于一个抽象类，该抽象类实现了该接口，实现了所有的方法，而我们不和原始的接口打交道，只和该抽象类取得联系，所以我们写一个类，继承该抽象类，重写我们需要的方法就行。

#### 策略模式（strategy）

策略模式定义了一系列算法，并将每个算法封装起来，使他们可以相互替换，且算法的变化不会影响到使用算法的客户。需要设计一个接口，为一系列实现类提供统一的方法，多个实现类实现该接口，设计一个抽象类（可有可无，属于辅助类），提供辅助函数。策略模式的决定权在用户，系统本身提供不同算法的实现，新增或者删除算法，对各种算法做封装。因此，策略模式多用在算法决策系统中，外部用户只需要决定用哪个算法即可。

```Java
public interface ICalculator {
     public int calculate(String exp);
 }
 ---------------------------------------------------------

 public class Minus extends AbstractCalculator implements ICalculator {

     @Override
     public int calculate(String exp) {
         int arrayInt[] = split(exp, "-");
         return arrayInt[0] - arrayInt[1];
     }
 }
 ---------------------------------------------------------

 public class Plus extends AbstractCalculator implements ICalculator {
     @Override
     public int calculate(String exp) {
         int arrayInt[] = split(exp, "\\+");
         return arrayInt[0] + arrayInt[1];
     }
 }
 --------------------------------------------------------

 public class AbstractCalculator {
     public int[] split(String exp, String opt) {
         String array[] = exp.split(opt);
         int arrayInt[] = new int[2];
         arrayInt[0] = Integer.parseInt(array[0]);
         arrayInt[1] = Integer.parseInt(array[1]);
         return arrayInt;
     }
 }

 --------------------------------------------------------

 public class StrategyTest {

     public static void main(String[] args) {

         String exp = "2+8";
         ICalculator cal = new Plus();
         int result = cal.calculate(exp);
         System.out.println(result);
     }
 }
```

#### 观察者模式（Observer）

观察者模式很好理解，类似于邮件订阅和 RSS 订阅，当我们浏览一些博客或 wiki 时，经常会看到 RSS 图标，就这的意思是，当你订阅了该文章，如果后续有更新，会及时通知你。其实，简单来讲就一句话：当一个对象变化时，其它依赖该对象的对象都会收到通知，并且随着变化！对象之间是一种一对多的关系。

```Java
public interface Observer {
      void update();
  }

  public class Observer1 implements Observer {
      @Override
      public void update() {
          System.out.println("observer1 has received!");
      }
  }

  public class Observer2 implements Observer {
      @Override
      public void update() {
          System.out.println("observer2 has received!");
      }
  }

  public interface Subject {
      /*增加观察者*/
      void add(Observer observer);

      /*删除观察者*/
      void del(Observer observer);

      /*通知所有的观察者*/
      void notifyObservers();

      /*自身的操作*/
      void operation();
  }

  public abstract class AbstractSubject implements Subject {
      private Vector<Observer> vector = new Vector<>();

      @Override
      public void add(Observer observer) {
          vector.add(observer);
      }

      @Override
      public void del(Observer observer) {
          vector.remove(observer);
      }

      @Override
      public void notifyObservers() {
          Enumeration<Observer> enumo = vector.elements();
          while (enumo.hasMoreElements()) {
              enumo.nextElement().update();
          }
      }
  }

  public class MySubject extends AbstractSubject {
      @Override
      public void operation() {
          System.out.println("update self!");
          notifyObservers();
      }
  }

  public class ObserverTest {
      public static void main(String[] args) {
          Subject sub = new MySubject();
          sub.add(new Observer1());
          sub.add(new Observer2());
          sub.operation();
      }
  }
```





## 十二、Java 的类加载器

### 描述一下 JVM 加载 class?

JVM 中类的装载是由类加载器（ClassLoader）和它的子类来实现的，Java 中的类加载器是一个重要的 Java 运行时系统组件，它负责在运行时查找和装入类文件中的类。

由于 Java 的跨平台性，经过编译的 Java 源程序并不是一个可执行程序，而是一个或多个类文件。当 Java 程序需要使用某个类时,JVM 会确保这个类已经被加载、连接（验证、准备和解析）和初始化。类的加载是指把类的.class 文件中的数据读入到内存中，通常是创建一个字节数组读入.class 文件，然后产生与所加载类对应的 Class 对象。加
载完成后，Class 对象还不完整，所以此时的类还不可用。当类被加载后就进入连接阶段，这一阶段包括验证、准备（为静态变量分配内存并设置默认的初始值）和解析（将符号引用替换为直接引用）三个步骤。最后 JVM 对类进行
初始化，包括：

如果类存在直接的父类并且这个类还没有被初始化，那么就先初始化父类；如果类中存在初始化语句，就依次执行这些初始化语句。类的加载是由类加载器完成的，类加载器包括：根加载器（BootStrap）、扩展加载器（Extension）、系统加载器（System）和用户自定义类加载器（java.lang.ClassLoader 的子类）。

从 Java 2（JDK 1.2）开始，类加载过程采取了父亲委托机制（PDM）。PDM 更好的保证了 Java 平台的安全性，在该机制中，JVM 自带的 Bootstrap 是根加载器，其他的加载器都有且仅有一个父类加载器。类的加载首先请求父类加载器加载，父类加载器无能为力时才由其子类加载器自行加载。JVM 不会向 Java 程序提供对 Bootstrap 的引用。
下面是关于几个类加载器的说明：

- Bootstrap：一般用本地代码实现，负责加载 JVM 基础核心类库（rt.jar）；
- Extension：从 java.ext.dirs 系统属性所指定的目录中加载类库，它的父加载器是 Bootstrap；
- System：又叫应用类加载器，其父类是 Extension。它是应用最广泛的类加载器。它从环境变量 classpath或者系统属性 java.class.path 所指定的目录中记载类，是用户自定义加载器的默认父加载器。





## JVM 基础知识

### 消除过期的对象引用

> 这也是《Effective Java》书中所说的第6条「消除过期的对象引用」，理论上 Java 因为有垃圾回收机制（GC）不会存在内存泄露问题（这也是 Java 被广泛使用于服务器端编程的一个重要原因）。然而在实际开发中，可能会存在无用但可达的对象，这些对象不能被 GC 回收，因此也会导致内存泄露的发生。

下面例子中的代码也会导致内存泄露。

```java
 import java.util.Arrays;
 import java.util.EmptyStackException;

public class MyStack<T> {
     private T[] elements;
     private int size = 0;
     private static final int INIT_CAPACITY = 16;
     public MyStack() {
        elements = (T[]) new Object[INIT_CAPACITY];
     }
    
     public void push(T elem) {
         ensureCapacity();
         elements[size++] = elem;
     }
    
     public T pop() {
         if(size == 0)throw new EmptyStackException();
         return elements[--size];
     }
    
     private void ensureCapacity() {
         if(elements.length == size) {
         elements = Arrays.copyOf(elements, 2 * size + 1);
         }
     }
 }
```

上面的代码实现了一个栈（先进后出（FILO））结构，乍看之下似乎没有什么明显的问题，它甚至可以通过你编写的各种单元测试。然而其中的 pop 方法却存在内存泄露的问题，当我们用 pop 方法弹出栈中的对象时，该对象不会被当作垃圾回收，即使使用栈的程序不再引用这些对象，因为栈内部维护着对这些对象的过期引用（obsolete reference）。在支持垃圾回收的语言中，内存泄露是很隐蔽的，这种内存泄露其实就是无意识的对象保持。如果一个对象引用被无意识的保留起来了，那么垃圾回收器不会处理这个对象，也不会处理该对象引用的其他对象，即使这样的对象只有少数几个，也可能会导致很多的对象被排除在垃圾回收之外，从而对性能造成重大影响，极端情况下会引发 Disk Paging （物理内存与硬盘的虚拟内存交换数据），甚至造成 OutOfMemoryError。

解决方法也很简单：

```Java
public Object pop() {
  if(size == 0)
    throw new EmptyStackException();
  elements[size] = null; //清空过期引用
  return elements[--size];
}
```

### 在开发中遇到过内存溢出么？原因有哪些？解决方法有哪些？

#### 引起内存溢出的原因有很多种，常见的有以下几种：

1. 内存中加载的数据量过于庞大，如一次从数据库取出过多数据；
2. 集合类中有对对象的引用，使用完后未清空，使得 JVM 不能回收；
3. 代码中存在死循环或循环产生过多重复的对象实体；
4. 使用的第三方软件中的 BUG；
5. 启动参数内存值设定的过小。

#### 内存溢出的解决方案：

第一步，修改 JVM 启动参数，直接增加内存。(-Xms，-Xmx 参数一定不要忘记加。)
第二步，检查错误日志，查看“OutOfMemory”错误前是否有其它异常或错误
第三步，对代码进行走查和分析，找出可能发生内存溢出的位置。

#### 重点排查以下几点：

1. 检查对数据库查询中，是否有一次获得全部数据的查询。一般来说，如果一次取十万条记录到内存，就可能引起内存溢出。这个问题比较隐蔽，在上线前，数据库中数据较少，不容易出问题，上线后，数据库中数据多了，一次查询就有可能引起内存溢出。因此对于数据库查询尽量采用分页的方式查询。
2. 检查代码中是否有死循环或递归调用。
3. 检查是否有大循环重复产生新对象实体。
4. 检查对数据库查询中，是否有一次获得全部数据的查询。一般来说，如果一次取十万条记录到内存，就可能引起内存溢出。这个问题比较隐蔽，在上线前，数据库中 数据较少，不容易出问题，上线后，数据库中数据多了，一次查询就有可能引起内存溢出。因此对于数据库查询尽量采用分页的方式查询。
5. 检查 List、MAP 等集合对象是否有使用完后，未清除的问题。List、MAP 等集合对象会始终存有对对象的引用，使得这些对象不能被 GC 回收。第四步，使用内存查看工具动态查看内存使用情况。





## 十四、Java GC 基础

### Java 中为什么会有 GC 机制呢？

Java 中为什么会有 GC 机制呢？

- 安全性考虑；-- for security.
- 减少内存泄露；-- erase memory leak in some degree.
- 减少程序员工作量。-- Programmers don't worry about memory releasing.

### 对于 Java 的 GC 哪些内存需要回收?

内存运行时 JVM 会有一个运行时数据区来管理内存。它主要包括 5 大部分：程序计数器(Program Counter Register)、虚拟机栈(VM Stack)、本地方法栈(Native Method Stack)、方法区(Method Area)、堆(Heap).

而其中程序计数器、虚拟机栈、本地方法栈是每个线程私有的内存空间，随线程而生，随线程而亡。例如栈中每一个栈帧中分配多少内存基本上在类结构确定是哪个时就已知了，因此这 3 个区域的内存分配和回收都是确定的，无需考虑内存回收的问题。

但方法区和堆就不同了，一个接口的多个实现类需要的内存可能不一样，我们只有在程序运行期间才会知道会创建哪些对象，这部分内存的分配和回收都是动态的，GC 主要关注的是这部分内存。

总而言之，GC 主要进行回收的内存是 JVM 中的方法区和堆。

### Java 的 GC 什么时候回收垃圾？

在面试中经常会碰到这样一个问题（事实上笔者也碰到过）：如何判断一个对象已经死去？

很容易想到的一个答案是：对一个对象添加引用计数器。每当有地方引用它时，计数器值加 1；当引用失效时，计数器值减 1.而当计数器的值为 0 时这个对象就不会再被使用，判断为已死。是不是简单又直观。然而，很遗憾。这种做法是错误的！为什么是错的呢？事实上，用引用计数法确实在大部分情况下是一个不错的解决方案，而在实际的应用中也有不少案例，但它却无法解决对象之间的循环引用问题。比如对象 A 中有一个字段指向了对象 B，而对象 B 中也有一个字段指向了对象 A，而事实上他们俩都不再使用，但计数器的值永远都不可能为 0，也就不会被回收，然后就发生了内存泄露。

所以，正确的做法应该是怎样呢？

在 Java，C#等语言中，比较主流的判定一个对象已死的方法是：可达性分析 (Reachability Analysis)。所有生成的对象都是一个称为"GC Roots"的根的子树。从 GC Roots 开始向下搜索，搜索所经过的路径称为引用链(Reference Chain)，当一个对象到 GC Roots 没有任何引用链可以到达时，就称这个对象是不可达的（不可引用的），也就是可以被 GC 回收了。

无论是引用计数器还是可达性分析，判定对象是否存活都与引用有关！那么，如何定义对象的引用呢？

我们希望给出这样一类描述：当内存空间还够时，能够保存在内存中；如果进行了垃圾回收之后内存空间仍旧非常紧张，则可以抛弃这些对象。所以根据不同的需求，给出如下四种引用，根据引用类型的不同，GC 回收时也会有不同的操作：

1）强引用(Strong Reference):Object obj = new Object();只要强引用还存在，GC 永远不会回收掉被引用的对象。

2）软引用(Soft Reference)：描述一些还有用但非必需的对象。在系统将会发生内存溢出之前，会把这些对象列入回收范围进行二次回收（即系统将会发生内存溢出了，才会对他们进行回收。）

3）弱引用(Weak Reference):程度比软引用还要弱一些。这些对象只能生存到下次 GC 之前。当 GC 工作时，无论内存是否足够都会将其回收（即只要进行 GC，就会对他们进行回收。）

4）虚引用(Phantom Reference):一个对象是否存在虚引用，完全不会对其生存时间构成影响。

关于方法区中需要回收的是一些废弃的常量和无用的类。

1. 废弃的常量的回收。这里看引用计数就可以了。没有对象引用该常量就可以放心的回收了。
2. 无用的类的回收。什么是无用的类呢？

- 该类所有的实例都已经被回收。也就是 Java 堆中不存在该类的任何实例；
- 加载该类的 ClassLoader 已经被回收；
- 该类对应的 java.lang.Class 对象没有任何地方被引用，无法在任何地方通过反射访问该类的方法。

总而言之:

对于堆中的对象，主要用可达性分析判断一个对象是否还存在引用，如果该对象没有任何引用就应该被回收。而根据我们实际对引用的不同需求，又分成了 4 中引用，每种引用的回收机制也是不同的。对于方法区中的常量和类，当一个常量没有任何对象引用它，它就可以被回收了。而对于类，如果可以判定它为无用类，就可以被回收了。



## 十五、Java 回收机制

### Java 中引用类型都有哪些？

Java中对象的引用分为四种级别，这四种级别由高到低依次为：强引用、软引用、弱引用和虚引用。

#### 强引用（StrongReference）

这个就不多说，我们写代码天天在用的就是强引用。如果一个对象被被人拥有强引用，那么垃圾回收器绝不会回收它。当内存空间不足，Java 虚拟机宁愿抛出 OutOfMemoryError 错误，使程序异常终止，也不会靠随意回收具有强引用的对象来解决内存不足问题。

Java 的对象是位于 heap 中的，heap 中对象有强可及对象、软可及对象、弱可及对象、虚可及对象和不可到达对象。应用的强弱顺序是强、软、弱、和虚。对于对象是属于哪种可及的对象，由他的最强的引用决定。如下代码：

```Java
String abc=new String("abc"); //1
SoftReference<String> softRef=new SoftReference<String>(abc); //2
WeakReference<String> weakRef = new WeakReference<String>(abc); //3
abc=null; //4
softRef.clear();//5
```

第一行在 heap 堆中创建内容为“abc”的对象，并建立 abc 到该对象的强引用，该对象是强可及的。
第二行和第三行分别建立对 heap 中对象的软引用和弱引用，此时 heap 中的 abc 对象已经有 3 个引用，显然此时 abc 对象仍是强可及的。
第四行之后 heap 中对象不再是强可及的，变成软可及的。
第五行执行之后变成弱可及的。

#### 软引用（SoftReference）

如果一个对象只具有软引用，那么如果内存空间足够，垃圾回收器就不会回收它，如果内存空间不足了，就会回收这些对象的内存。只要垃圾回收器没有回收它，该对象就可以被程序使用。软引用可用来实现内存敏感的高速缓存。

软引用可以和一个引用队列（ReferenceQueue）联合使用，如果软引用所引用的对象被垃圾回收，Java 虚拟机就会把这个软引用加入到与之关联的引用队列中。

软引用是主要用于内存敏感的高速缓存。在 jvm 报告内存不足之前会清除所有的软引用，这样以来 gc 就有可能收集软可及的对象，可能解决内存吃紧问题，避免内存溢出。什么时候会被收集取决于 gc 的算法和 gc 运行时可用内存的大小。当 gc 决定要收集软引用时执行以下过程,以上面的 softRef 为例：

1 首先将 softRef 的 referent（abc）设置为 null，不再引用 heap 中的 new String("abc")对象。
2 将 heap 中的 new String("abc")对象设置为可结束的(finalizable)。
3 当 heap 中的 new String("abc")对象的 finalize()方法被运行而且该对象占用的内存被释放， softRef 被添加到它的 ReferenceQueue(如果有的话)中。

注意:对 ReferenceQueue 软引用和弱引用可以有可无，但是虚引用必须有。被 Soft Reference 指到的对象，即使没有任何 Direct Reference，也不会被清除。一直要到 JVM 内存不足且没有 Direct Reference 时才会清除，SoftReference 是用来设计 object-cache 之用的。如此一来 SoftReference 不但可以把对象 cache 起来，也不会造成内存不足的错误 （OutOfMemoryError）。

#### 弱引用（WeakReference）

如果一个对象只具有弱引用，那该类就是可有可无的对象，因为只要该对象被 gc 扫描到了随时都会把它干掉。弱引用与软引用的区别在于：只具有弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它所管辖的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存。不过，由于垃圾回收器是一个优先级很低的线程， 因此不一定会很快发现那些只具有弱引用的对象。弱引用可以和一个引用队列（ReferenceQueue）联合使用，如果弱引用所引用的对象被垃圾回收，Java 虚拟机就会把这个弱引用加入到与之关联的引用队列中。

#### 虚引用（PhantomReference）

"虚引用"顾名思义，就是形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收。虚引用主要用来跟踪对象被垃圾回收的活动。

虚引用与软引用和弱引用的一个区别在于：虚引用必须和引用队列（ReferenceQueue）联合使用。当垃圾回收器准备回收一个对象时，如果发现它还有虚引用，就会在回收对象的内存之前，把这个虚引用加入到与之关联的引用队列中。程序可以通过判断引用队列中是否已经加入了虚引用，来了解被引用的对象是否将要被垃圾回收。

程序如果发现某个虚引用已经被加入到引用队列，那么就可以在所引用的对象的内存被回收之前采取必要的行动。建立虚引用之后通过 get 方法返回结果始终为 null,通过源代码你会发现,虚引用通向会把引用的对象写进 referent,只是 get 方法返回结果为 null。先看一下和 gc 交互的过程再说一下他的作用。

1 不把 referent 设置为 null, 直接把 heap 中的 new String("abc")对象设置为可结束的(finalizable)。
2 与软引用和弱引用不同, 先把 PhantomRefrence 对象添加到它的 ReferenceQueue 中.然后在释放虚可及的对
象。

### 谈谈 JVM 的内存结构和内存分配

#### Java 内存模型

Java 虚拟机将其管辖的内存大致分三个逻辑部分：**方法区** (Method Area)、 **Java 栈** 和 **Java 堆**。

1. 方法区是静态分配的，编译器将变量绑定在某个存储位置上，而且这些绑定不会在运行时改变。常数池，源代码中的命名常量、String 常量和 static 变量保存在方法区。
2. Java Stack 是一个逻辑概念，特点是后进先出。一个栈的空间可能是连续的，也可能是不连续的。最典型的 Stack 应用是方法的调用， Java 虚拟机每调用一次方法就创建一个方法帧（ frame ），退出该方法则对应的 方法帧被弹出 ( 。栈中存储的数据也是运行时确定的。
3. Java 堆分配 (heap 意味着以随意的顺序，在运行时进行存储空间分配和收回的内存管理模型。堆中存储的数据常常是大小、数量和生命期在编译时无法确定的。 Java 对象的内存总是在 heap 中分配。我们每天都在写代码，每天都在使用JVM 的内存。

#### java 内存分配

1. 基础数据类型直接在栈空间分配
2. 方法的形式参数，直接在栈空间分配，当方法调用完成后从栈空间回收
3. 引用数据类型，需要用 new 来创建，既在栈空间分配一个地址空间，又在堆空间分配对象的类变量
4. 方法的引用参数，在栈空间分配一个地址空间，并指向堆空间的对象区，当方法调用完后从栈空 间回收
5. 局部变量 new 出来时，在栈空间和堆空间中分配空间，当局部变量生命周期结束后，栈空间立刻被回收，堆空间区域等待 GC 回收
6. 方法调用时传入的实际参数，先在栈空间分配，在方法调用完成后从栈空间释放
7. 字符串常量在 DATA 区域分配 this 在堆空间分配
8. 数组既在栈空间分配数组名称， 又在堆空间分配数组实际的大小

### 解释内存中的栈 (stack) 、堆 (heap) 和方法区 (method area) 的用法

通常我们定义一个基本数据类型的变量，一个对象的引用，还有就是函数调用的现场保存都使用 JVM 中的栈空间；而通过 new 关键字和构造器创建的对象则放在堆空间，堆是垃圾收集器管理的主要区域，由于现在的垃圾收集器都采用分代收集算法，所以堆空间还可以细分为新生代和老生代， 再具体一点可以分为 Eden 、 Survivor （又可分为
From Survivor 和 To Survivor ）、 Tenured ；方法区和堆都是各个线程共享的内存区域，用于存储已经被 JVM 加载的类信息、常量、静态变量、 JIT 编译器编译后的代码等数据；程序中的字面量（ literal ）如直接书写的 100 、 "hello" 和常量都是放在常量池中，常量池是方法区的一部分。栈空间操作起来最快但是栈很小，通常大量的对象都是放在堆空间，栈和堆的大小都可以通过 JVM 的启动参数来进行调整，栈空间用光了会引发 StackOverflowError ，而堆和常量池空间不足则会引发 OutOfMemoryError 。

```Java
String str = new String("hello");
```

上面的语句中变量 str 放在栈上，用 new 创建出来的字符串对象放在堆上，而 "hello" 这个字面量是放在方法区上。