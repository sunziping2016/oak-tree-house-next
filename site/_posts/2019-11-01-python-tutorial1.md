---
title: Python教程1 - 简介
author: 孙子平
date: 2019-10-31T17:43:44Z
category: Python
tags: [Python, 编程, 教程]
series: Python教程
sidebar:
  - /_posts/2019-11-01-python-tutorial1.html
  - /_posts/2019-11-11-python-tutorial2.html
  - /_posts/2020-02-06-python-tutorial3.html
  - /_posts/2020-03-21-python-tutorial4.html
---

这个系列的教程适用于Python新手，讲得相比其他教程可能会更深入一些，内容将依照[Python官方的中文教程](https://docs.python.org/zh-cn/3.7/tutorial/index.html)。我将在[我的博客](https://szp.io/)和[知乎专栏](https://zhuanlan.zhihu.com/sunziping2016)上同步发表这个系列的文章。

本文是这个系列的第1篇文章，其中第1节将介绍如何安装Python，第2节会介绍Python基本类型和函数的调用方法，最后一节我会复习下先前讲到的知识。

<!-- more -->

## 1 Python介绍

### 1.1 Python版本

Python是**免费**开源的编程语言。它有两个版本：2和3。其中Python 2已经计划在2020年放弃支持，不建议大家再使用。这篇及之后的教程主要教**Python 3**。

### 1.2 安装Python

你可以从[Python官网的下载页面](https://www.python.org/downloads/)下载并安装Python。目前（2019年11月）最新版的Python是3.8，但不够稳定。如果你需要使用之后提到的JupyterLab的话，建议安装3.7版本，目前最新的是3.7.5。对于Windows建议选择“Windows x86-64 executable installer”。当然这篇文章可能会过时，大家可以酌情选择版本安装。这里给出Python 3.7.5的Windows版[下载链接](https://www.python.org/ftp/python/3.7.4/python-3.7.4-amd64.exe)。

**安装的时候建议把`add to PATH`的选项勾上。**

### 1.3 如何运行Python代码

Python是脚本语言或者称之为**解释型语言**。所谓解释型语言是相对编译型语言的，解释型语言不需要生成可执行文件（Windows上是后缀`.exe`的文件）就可以运行起来，因此开发起来更快捷，但运行速度更慢。而编译型语言则相反，因而开发较为麻烦，但运行速度快。将解释型语言代码一行行运行起来的软件称为**解释器**。而将编译型语言代码生成可执行文件的软件称为编译器。你有以下2种方式运行你的代码：

- 将代码直接输入在解释器中：如果你安装了官方的Python，会自带一个叫Idle的软件，打开Idle，就可以输入代码；也有可能你没有Idle，这时候你可以打开命令行（Windows上Win键+R，然后输入cmd打开命令提示符）输入python回车，然后输入代码，退出可以输入`exit()`；之后我们还会介绍JupyterLab。
- 将代码保存成`.py`后缀的代码，再运行（Windows上双击即可），如果程序没有输入，可能会一闪而过。

第1种方式适合编辑测试代码，而第2种方式适合完成代码后便于运行，此外第2种方式可以使用个人喜好的**编辑器**或者**IDE**（IDE是集成开发环境的缩写，它提供了编辑、运行、调试一体化的开发环境），并且可以使用版本控制系统（如git，版本控制系统可以维护代码的所有历史版本，并提供多人协同开发之类的功能），我们会在以后介绍PyCharm的使用。

你现在可以不必急着安装编辑器/IDE。当然，我会给出我推荐的编辑器/IDE，以下按顺序排列。这只是个人偏好，我不想引起圣战：

1. [PyCharm](https://www.jetbrains.com/pycharm/)
2. [Visual Studio Code](https://code.visualstudio.com/)
3. [Visual Studio](https://visualstudio.microsoft.com/)
4. [Sublime Text](https://www.sublimetext.com/)
5. Idle（Python自带）
6. [Notepad++](https://notepad-plus-plus.org/)
7. Notepad（Windows自带，如果你其他编辑器都没的话）

### 1.4 Python的包管理器

Python可以被用于写爬虫，做网站，进行数据处理或者机器学习。其强大的功能除了来自于其优雅的语法，关键还在于它有很多库，包括标准库和可以下载的扩展库。我们称这些扩展库为**包**。而自动下载管理这些包的工具称之为**包管理器**。Python的包管理器叫**pip**，你可以打开命令行，输入`pip help`查看`pip`支持的命令。以下是最常用的下载和安装命令：

- `pip install xxx`：安装`xxx`包；
- `pip uninstall xxx`：卸载`xxx`包；
- `pip install -r requirements.txt`：将`requirements.txt`列出的包全部安装，许多Python项目会将需要安装的包列出在`requirements.txt`中，方便大家下载。

由于`pip`需要从国外下载包，这样网速会非常慢，遇到这种情况的可以考虑改一个源，从国内下载。比如可以改为清华TUNA的源，执行下面的命令即可。

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

### 1.5 尝试安装JupyterLab

JupyterLab可以更方便交互式地编辑运行代码。它是Jupyter Notebook的改进版。它还能显示表格和图片，如果你要做数据处理和可视化，那它会是很好的工具。它的界面是通过浏览器查看的。它将代码、输出及其他信息保存成后缀为`.ipynb`的格式。安装它需要费一番力气，接下来介绍如何在Windows上安装它，你大概需要7G的存储（主要是Visual Studio占的）。跳过这一节也无妨。

首先安装Visual Studio，下载链接在[此处](https://visualstudio.microsoft.com/downloads/)，下载Community版本就行，安装完毕之后打开Visual Studio Install，选择“桌面C++开发”，再选择安装，才算安装完毕，这是最耗时的一步。

然后安装Node.js，下载链接在[此处](https://nodejs.org/en/)，下载Current版本即可，安装一路默认。

最后打开命令行，输入`pip install jupyterlab`即可安装。

安装完毕后，在命令行输入`jupyter lab`就会自动打开网页。点击新建Python3 Notebook即可。

接下来介绍JupyterLab的简单用法。首先它是有自上向下排列的单元格组成的，每个单元格有输入框和输出内容。然后，其编辑是有两种模式的，一种是编辑单元格内容，一种是编辑单元格本身。编辑单元格内容模式下，会有一个单元格的输入框为白色且光标闪动，编辑文本像平常一样，可以按`Tab`补全，按`Esc`切换到编辑单元格模式；编辑单元格模式下，会有一个单元格左侧有蓝条，你可以点击`x`删除单元格，点击`a`在前方添加单元格，点击`b`在下方添加单元格，按`Enter`切换到编辑单元格模式。此外，在编辑单元格内容模式下，按`Ctrl + Enter`会运行单元格，而按`Shift + Enter`会运行并切换到下一单元格。

之后的教程我会同步发布Jupyter Notebook版本。

## 2 Python的非正式介绍

### 2.1 注释

Python的**注释**是以`#`开头到行末结束的一段文字，它会被彻底忽略，注意字符串（引号扩住的东西）中的`#`不会被作为注释。

```python
# 这是注释
spam = 1  # 这也是注释
          # 这还是注释
text = "# 这不是注释"
```

### 2.2 数学运算

Python可以被像计算器那样使用，像下面的示例，它支持`+`、`-`、`*`、`/`和括号，注意所有的括号均应使用圆括号。这里`>>>`后面的输入的内容，其他的是输出的结果。

```python
>>> 2 + 2
4
>>> 50 - 5*6
20
>>> (50 - 5*6) / 4
5.0
>>> 8 / 5  # 除法返回浮点数（之后会介绍）
1.6
```

每一个值都有类型，关于类型详见2.2.2节。诸如`2`、`4`、`20`的整数属于`int`类型，中文为整数类型，简称**整型**；诸如`5.0`、`1.6`有小数部分的值属于`float`类型，中文为浮点数类型，简称**浮点型**。`/`运算附始终得到浮点类型，而其他数学运算如果有一个操作数是浮点数则结果是浮点数，否则为整数，关于运算符和操作数详见2.2.3。

还有**求商**运算（floor division向下除法，又称为**整除**）`//`和**求余**运算`%`：

```python
>>> 17 / 3  # 除法运算返回浮点型
5.666666666666667
>>>
>>> 17 // 3  # 求商运算会抹去小数部分
5
>>> 17 % 3  # 求余运算
2
>>> 5 * 3 + 2  # 商 * 除数 + 余
17
```

此外Python中还有`**`**乘方**运算符：

```python
>>> 5 ** 2  # 5 的平方
25
>>> 2 ** 7  # 2 的 7 次方
128
```

接下来我们会介绍一些较为抽象，但很有帮助的概念。如果你发现接下来的部分很困难，可以跳过（2.2.1-2.2.4）。

#### 2.2.1 表达式（expression）

所谓表达式，就是**产生一个值**的一串式子，上个例子中的`2 + 2`到`8 / 5`都是表达式。表达式是构建复杂程序的一个重要组成部分。表达式的一大特点是可以**嵌套**，如上面例子中的`(50 - 5*6) / 4`，其中`50 - 5*6`是个子表达式。

#### 2.2.2 值（value）和类型（type）

每一个**值**都有**类型**，类型规定了可能的取值范围和可能的操作。如我们称`2`的类型为`int`**整数类型**，它可以表示所有的整数，而`2.0`是`float`**浮点数类型**，可以存储约16位有效数字。此外我们马上还会学到**字符串类型**，它可以用于存储一串文本，但它不能参与乘除和减法的运算。

#### 2.2.3 运算符（operator）和操作数（operand）

**运算符**代表了要执行的运算，而**操作数**是运算的输入，如`8 / 5`中，`/`被称为运算符，而`8`和`5`就被称为操作数。

运算符可以根据其携带的操作数**个数**分类，有一元、二元和三元、或者称之为单目、双目和三目。之前的示例中的`+`、`-`、`*`、`/`都是二元运算符。一元运算符的一个例子是负号和正号，它也可以嵌套成形如`--+1`（负的负的正的1，即`+1`，也就是`1`）。

运算符也可以根据出现的**位置**分类。一元运算符有**前缀**和**后缀**之分，前缀出现在操作数的前面，类似的后缀出现在操作数的后面。Python中，所有的一元运算符都是前缀的（所以并没有阶乘运算符`!`）。二元运算符也有前缀和后缀，除此还有**中缀**，即出现在两个操作数的中间，Python的所有的二元表达式都是中缀的。中缀表达式主要是方便人们的理解而出现的（实际上如果都采用前缀表达式就没有优先级和结合性什么事了，当然你可以不知道我在说什么）。

当然还有运算符可能有多个组成部分，如两个配对的中括号组成的下标运算符`obj[k]`（我们会在以后介绍，`obj`和`k`是变量）和函数调用运算符。运算符也可能有两个以上的字符组成，如等会儿会讲到的整除`//`，注意不能在这种运算符的中间加上空格。运算符也可能由一个单词（我们称之为关键字）组成，如由`not`组成的一元逻辑非`not a`（我们会在以后介绍，`a`是变量）。

#### 2.2.4 优先级（precedence）和结合性（associativity）

当我们计算`50 - 5*6`，我们会自然地先计算`5*6`，因为我们知道先乘除后加减。先算什么后算什么，这就是**优先级**决定的。每个运算符都有一个优先级，优先级约高的运算符就越先算，如乘除的优先级就比加减高。而当优先级一样的运算符连接在一起的时候，如`3 - 2 + 1`，我们知道先算`3 - 2`，这就是**结合性**决定的。每个运算符都有结合性，结合性有两种，自左至右和自右至左。自左至右就是先算左边的，而自右至左就是先算右边。你所见的`+`、`-`、`*`、`/`都是自左至右结合的运算符。实际上Python的二元自右向左结合的运算符只有1个，就是次方运算符`**`，因而`2**2**3`是`2**(2**3)`就是256。注意：Python的次方运算符优先级高于负号，因而`-2**2`的值是`-4`。

括号能够忽略优先级，使子表达式先算，比如`5 * (3 - 2)`，没人会再去先算`5 * 3`，这就是括号的作用。

当你背熟运算符优先级和结合性列表的时候，你可能会跃跃欲试，能不用括号就不用括号，然而这可能并不是个好习惯。对于一些晦涩难懂的代码而言，加上括号有时能比用注释更好地告诉别人你在做什么。

### 2.3 变量（variable）与赋值（assignment）

**变量**和**赋值**这两个概念是非常重要的，可以说如果你无法理解变量和赋值，那么你就不可能学会命令式编程。

先看看如何赋值。使用单个等号`=`给一个变量赋值。赋值左侧是变量名，右侧是表达式。赋值之后，可以用变量名指代原先表达式的值，进而出现在新的表达式中：

```python
>>> width = 20
>>> height = 5 * 9
>>> width * height
900
```

变量可以存储值，当然这个值也有类型，我们会称之为**变量的类型**，同一个变量可以存储不同类型的值。给变量赋予一个值的过程称为赋值。其实私底下，我个人更愿称这个行为为变量被**绑定**上了一个值，我认为绑定比赋值这个词描述Python处理变量更准确。因为Python的变量本质上只是指向一个值的名字，如果一个值没有变量指向，它就会被销毁（这个过程称为**垃圾回收**）。当发生赋值时，并不是旧的值被改成了新的值，而是变量指向了一个新的值，这时候如果旧的值没有变量指向，就会被销毁。实际上，在Python中，所有的整数、浮点数和字符串都不可被修改，修改的只是变量所指的东西。之后我们会进一步介绍类型的可变性与不可变性的相关概念，我们即将学习的列表`list`类型就是可变的。

赋值是一个语句，不是一个表达式，因而不能出现`1 + (a = 2)`之类的式子，关于语句的更多概念我们将在下一个教程中介绍。

变量名是一种**标识符**（identifier），所谓标识符就是各种名字的统称。合法的标识符由数字、大小写英文字母和下线符`_`组成，但不能以数字开头（虽然可以但不推荐用中文命名）。

最后，如果一个变量未定义（未赋值），试图使用它时会向你提示错误：

```python
>>> n  # 试图引用一个未定义的变量
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'n' is not defined
```

在交互模式下，上一次打印出来的表达式被赋值给变量`_`：

```python
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06
```

### 2.4 字符串（String）

**字符串**这种类型用于存储有限长度的文本。使用一对单引号或一对双引号括住，即可创建字符串值。单引号和双引号除了转义稍有不同，完全等价。当遇到一些不可打印或是有特殊含义的字符就需要转义，我们先看例子，会在2.4.1我来详细解释转义：

```python
>>> 'spam eggs'  # 单引号
'spam eggs'
>>> 'doesn\'t'  # 使用 \' 表示单引号...
"doesn't"
>>> "doesn't"  # ...或者使用双引号括住字符串
"doesn't"
>>> '"Yes," they said.'
'"Yes," they said.'
>>> "\"Yes,\" they said."
'"Yes," they said.'
>>> '"Isn\'t," they said.'
'"Isn\'t," they said.'
```

接下来我们也会介绍一些概念，2.4.1需要一定的理解，而2.4.2和2.4.3如果有阅读困难可以跳过。

#### 2.4.1 转义（Escape）

**转义**字符是用一串文本来代表一个字符的方式，所有的转义序列都以反斜杠符`\`开头，可以大致分为以下几类：

- **不可打印或不方便书写**的字符：诸如换行`\n`和Tab`\t`之类的字符不方便在代码中书写出来，因而我们就用一串文本来表示这一个字符，关于换行、回车、Tab的介绍在后面。
- 有**特殊含义**的字符：有三个这种情况的：
  - **反斜杠符**`\\`，由于它本身被作为转义字符的开始，打印反斜杠符就不得不转义了；
  - 如果字符串使用**单引号**括住，这时候字符串中的单引号作为字符串的起始和终止符也需要转义成`\'`；
  - 类似地，如果字符串使用**双引号**括住，这时候字符串中的双引号也需要转义成`\"`。
- **字符编码**表示：计算机只能存储二进制，因而每个字符都被编码成了一个整数，Python每个字符对应4字节的整数。我们可以直接在字符串中输入包含编码的转义序列得到对应的字符，有4种这样的转义序列，我们会在2.4.3进一步讨论：
  - 形如`\ooo`，`\`后面跟1到3位8进制数，得到对应的1字节字符，其他3字节为0；
  - 形如`\xhh`，`\x`后面根2位16进制数，得到对应的1字节字符，其他3字节为0；
  - 形如`\uxxxx`，`\u`后面跟4位16进制数，得到对应的2字节字符，其他2字节为0；
  - 形如`\Uxxxxxxxx`，`\U`后面跟8位16进制数，得到对应的4字节字符。

对于最后一种用整数表示字符编码的方式，我们给一些例子：

```python
>>> '\101' # A 对应的编码是 65，而 1 * 64 + 1 = 101
'A'
>>> '\x41' # 4 * 16 + 1 = 101
'A'
>>> '\u6211' # “我”对应的编码是 25105，而 6 * 4096 + 2 * 256 + 1 * 16 + 1 = 25105
'我'
>>> '\U0001f60b' # 和上面一样的原理，“😋”的编码是 128523，这是一个emoji
'😋'
```

**注意，转义序列对应的字符长度还为1**，上面4个例子中的所有字符串长度都为1，即只包含一个字符。2.5会介绍3个函数，`len`获取字符串的长度、`ord`获取字符对应的整数编码，`chr`获取整数编码对应的字符。

最后我列出所有的转义字符列表，你不需要记住每一项：

|转义序列|含义|
|:-:|:-:|
|`\`紧跟换行|`\`和换行被忽略|
|`\\`|反斜杠符 (\\)|
|`\'`|单引号 (')|
|`\"`|双引号 (")|
|`\a`|ASCII 响铃 (Bell，BEL)|
|`\b`|ASCII 退格 (Backspace，BS)|
|`\f`|ASCII 换页 (Formfeed，FF)|
|`\n`|ASCII 换行 (Linefeed，LF)|
|`\r`|ASCII 回车 (Carriage Return，CR)|
|`\t`|ASCII 水平制表符 (Horizontal Tab，TAB)|
|`\v`|ASCII 垂直制表符 (Vertical Tab，VT)|
|`\ooo`|8进制值为 ooo 的字符|
|`\xhh`|16进制值为 hh 的字符|
|`\N{name}`|名字为`name`的 Unicode 字符|
|`\uxxxx`|16进制值为 xxxx 的16位字符|
|`\Uxxxxxxxx`|16进制值为 xxxxxxxx 的32位字符|

#### 2.4.2 空白符

换行`\r`、回车`\n`、水平制表`\t`等一些字符被称为**空白符**，实际生活中常用的空白符就这3个。

在Windows上打开记事本，按下`Tab`键后，光标会向右跳过约8个字符的位置，你就输入了水平制表符。它被用于将不同行的字对齐到同一列上，制作表格。然后你可以在Python中尝试下一个例子：

```python
>>> print('1\t2\n34\t5')
1       2
34      5
```

`print`函会将字符串打印出来。这里我们输出了两行，第一行是数字1跟水平制表符再跟2，第二行是数字34跟水平制表符再跟5。可以看出即使前面字符的长度不同，水平制表符还会把它之后的字符对齐到下一个8个字符的位置。

当你在记事本敲入回车，你的光标会到下一行，这个时候你同时输入了两个字符：**回车**`\r`之后**换行**`\n`。在Windows上，文本文件的换行其实包含了这两个字符，即CRLF。但在别的系统不是这样的，Linux的文本文件以`\n`换行，即LF。而Mac的文本文件又以`\r`换行，即CR。各个系统之间不同的换行方式其实带来了一些问题，我们会在以后关于文件IO的部分更细致的谈到这些问题。说了这么多，可能很多人还不知道回车换行这两个字符的含义，这要追溯到计算机出现之前，那时候有电传打字机。在那个时代，回车是让打字机回到行首，而换行则是让打字机移到下一行。虽然电传打字机消失了，但回车和换行还是遗留到了现在。

#### 2.4.3 进制、字节、码位与编码

关于2进制、8进制、16进制的数学含义，我就留给数学老师来讲解了，**如果这一段阅读有困难可以忽略**。这里指出一下16进制使用额外的A到F（小写亦可）分别表示10到15。1个字节是8个比特，而16进制1位能表示2进制的4位，因而1个字节可以对应2位16进制。因此，大家更喜欢16进制，8进制并不常用。

接下来我们谈谈字符编码，**ASCII**是最早出现的编码规范，它使用了7个比特存储字符，里面的字符只有很少的标点符号、英文、数字等。

而**Unicode**是之后出现的编码规范，它包含了中日韩表意文字、甚至还有emoji。每个Unicode字符都与一个32位的整数对应（因而它可以表达2的32次方个字符，目前还留有很大的空间供未来使用），这个整数称为码位（codepoint）。Python的字符串内部就是存储了这些码位。然而如果直接每个字符32位存储在文本文件里，会浪费很多空间（因为实际上除了emoji和少数汉子，几乎所有的字符都最多只用了16位），因而我们采用变长字符编码来将一个码位映射成多个字节。其中最著名的编码方案就是UTF-8，它会把32位的码位映射成1到6个字节，而且它与ASCII完全兼容。

在Python中，字符串通过`encode()`函数编码成实际存在在文件中的bytes类型，而bytes类型通过`decode()`函数编码成字符串，我们在2.5节会给出例子。

然而在Unicode出现之前就有了中文Windows系统，那时候中文都采用国标码**GBK**编码。这里就不再赘述。当你的代码保存成文件后，如果你使用了中文做字符串，那么声明你代码所用的编码可能是必须的。你需要在代码的最开始加上一行如下的声明：

```python
# -*- coding: encoding -*-
```

其中`encoding`改成你的编码方式，比如`gbk`或者`utf-8`。

#### 2.4.4 字面量（Literal）

**字面量**是指源代码中用于表示一个值的一串文本，它也有类型。比如`1`就是`int`类型字面量，而`1.0`就是`float`类型字面量，还有`'abc'`就是字符串类型字面量。

### 2.5 函数（Function）

**函数**是许多编程语言的又一个重要组成部分。它是一种特殊的类型，支持被**调用**。它将一系列的操作封装、复用。这里我们不会涉及如何编写函数，只会谈谈如何使用它。

首先我们来谈谈**普通函数**的调用，它的形式类似于`func(arg1, arg2, ...)`，先写函数名`fun`，后面再用括号括住逗号分割的列表，我们称之为**参数**。函数调用的本质也是个运算符，他拥有很高的优先级，其中的`func`和`arg1`都可以为子表达式。不同的函数会有不同的参数个数和参数类型的要求。类似数学的函数，调用一些函数会得到值，我们称为**返回值**。我们来看例子，`print`函数接受多个参数，参数没有类型限制，不返回值（也可以认为返回空），它会将所有的参数输出出来，并在最后加上换行：

```python
>>> print(3, 'is odd')
3 is odd
>>> print('123\n456')
123
456
```

最后一个例子我们调用`print`输出了123、换行和456。接下来我们再介绍3个函数：

- `len`：接受1个字符串类型的参数，返回字符串的长度；
- `ord`：接受1个长度为1的字符串，返回字符串中字符的码位；
- `chr`：接受1个整数，返回整数对应的字符组成的长度为1的字符串。

我们可以说`ord`和`chr`函数互为反函数。看例子：

```python
>>> len('') # 空字符串
0
>>> len('123') # 长度为3
3
>>> ord('😋')
128523
>>> chr(128523)
'😋'
```

然后，还有一类特殊的函数叫**方法**，它是某一类型拥有的函数，它的调用形如`obj.method(arg1, arg2, ...)`，与普通函数的差别是多了`obj.`，`obj`是某一类型的值（或者产生该类型的值的表达式，包括变量）。其实`obj.method`是个子表达式，它获得一个函数，然后和后面的函数调用运算符构成了方法的调用。这里介绍两个方法：

- 字符串类型的`encode`：可以接受一个代表编码的参数，将字符串转化为该编码的bytes类型返回。
- bytes类型的`decode`：可以接受一个代表编码的参数，将bytes解码为该编码的字符串类型返回。

```python
>>> '😋'.encode('utf-8')   # 字符串用 utf-8 编码成 bytes
b'\xf0\x9f\x98\x8b'
>>> _.decode('utf-8')      # bytes 再用 utf-8 解码成字符串
'😋'
```

这里我们可以看出这个这个emoji被编码成了4个字节，然而我们可以注意到这个编码`f09f988b`（16进制）和它的Unicode码位`0001f60b`（16进制）是不同的。

### 2.6 字符串（续）

我们继续讲解字符串。先前讲到字符串的转义，然而有时候我们不需要转义，希望让`\`直接代表它本身（这种情况多发生在Windows路径和正则表达式中），我们可以使用**原始字符串**（raw string），只需要在字符串的前面加上`r`即可：

```python
>>> print('C:\some\name')  # 这里 \n 表示换行！
C:\some
ame
>>> print(r'C:\some\name')  # 引号前有 r
C:\some\name
```

普通的字符串是不能跨行的（除了`\`紧跟换行这种转义），而Python也提供了三重引号用于跨行输入的**多行字符串**，如`"""..."""`和`'''...'''`（`...`表示内容）。字符串的中的回车会被包含到字符串中，如果你不想包含换行可以在行尾添加一个`\`，这其实就是上面转义表中的第一行转义。如下：

```python
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")
```

上面的代码会产生如下输出：

```text
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
```

注意代码中的第一个换行和反斜杠符一起被消去了。

接下来我们来介绍字符串支持的一些操作：字符串和字符串之间可以用`+`**连接**；字符串和整数做乘法可以使字符串**重复**整数次。如下：

```python
>>> # 'un' 重复 3 次，而后拼接上 'ium'
>>> 3 * 'un' + 'ium'
'unununium'
```

相邻的字符串字面值可以不用`+`就串联起来，这拥有最高的优先级。注意只有字面量有这种行为，变量和字面量不能这样连接：

```python
>>> 'Py' 'thon'
'Python'
>>> prefix = 'Py'
>>> prefix 'thon'  # 无法将变量和字符串字面常量串接在一起
  File "<stdin>", line 1
    prefix 'thon'
                ^
SyntaxError: invalid syntax
```

接下来我们来讲字符串的的索引和切片操作。有时，我们需要将字符串的某个位置或某一部分取出来，这就需要**索引**（index）和**切片**（slice）操作。

在字符串后面用中括号括住一个整数，就可以取出整数对应位置的字符，类似`text[n]`。索引是从0开始到字符串长度减1，索引也可以是负数，表示倒数第几个字符，是从-1到负的字符串长度。超出这个范围的索引是个错误。注意Python没有单独的字符类型，**字符**就是长度为1的字符串：

```python
>>> word = 'Python' # 长度为 6
>>> word[0]  # 位置为 0 的字符
'P'
>>> word[5]  # 位置为 5 的字符（最后一个字符）
'n'
>>> word[-1]  # 倒数第 1 个字符
'n'
>>> word[-2]  # 倒数第 2 个字符
'o'
>>> word[-6]  # 倒数第 6 个字符（第一个字符）
'P'
```

可以用下面的图来表示`Python`这个字符串中各个字符的位置，这里位置6不能用于索引，但可以用于表示切片的结尾：

```text
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
   0   1   2   3   4   5   6
  -6  -5  -4  -3  -2  -1
```

接下来是切片，切片是中括号括住冒号分隔的两个整数，它返回一段字符串，类似`text[a:b]`。它会取出索引值为`[a, b)`区间（左闭右开）内的所有字符（`b`的值可以为字符串的长度）。此外`a`和`b`都可以省略，省略`a`就相当于`a`为0（切片从头开始），省略`b`就相当于`b`为字符串长度（切片一直到尾结束）。与索引不同，切片的起始和终止都可以超过范围，如下：

```python
>>> word[42]  # the word only has 6 characters
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
>>> word[4:42]
'on'
>>> word[42:]
''
```

如果你第一次学习编程，或者一直使用类似MATLAB的软件，你可能很好奇为什么要从0开始数数，又为什么使用左闭右开的区间。实际上从0会更加方便，以后会体现出来。

Python的字符串是**不可变**的，因而以下的操作是个错误：

```python
>>> word[0] = 'J'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
>>> word[2:] = 'py'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'str' object does not support item assignment
```

但你可以创建字符串，并将它赋值给新的变量：

```python
>>> word = 'J' + word[1:]
>>> word
'Jython'
>>> word = word[:2] + 'py'
>>> word
'Jypy'
```

### 2.7 列表（List）

通过方括号括起，逗号分隔的一组值，就可以得到**列表**字面量，形如`[a, b, ...., n]`。一个列表可以包含不同类型的元素，但通常各个元素类型相同。

```python
>>> squares = [1, 4, 9, 16, 25]
>>> squares
[1, 4, 9, 16, 25]
```

和字符串一样，列表支持**索引**和**切片**，不过索引返回的是元素：

```python
>>> squares[0]  # 索引返回元素
1
>>> squares[-1]
25
>>> squares[-3:]  # 切片返回新的列表
[9, 16, 25]
```

完整的切片会返回列表的**浅拷贝**，形如`squares[:]`。所谓浅拷贝就是返回的是个新列表，但两个列表中所指的元素是一样的，我们会在之后给出一个例子。

列表支持`+`的拼接操作和`*`的重复操作，如下：

```python
>>> [1] * 3 + [2]
[1, 1, 1, 2]
```

列表是**可变**的，因而可以对列表的**索引赋值**，其结果是元素被替换：

```python
>>> cubes = [1, 8, 27, 65, 125]  # 位置 3 的值是错的
>>> cubes[3] = 64  # 替换掉错误的值
>>> cubes
[1, 8, 27, 64, 125]
```

通过`append()`方法可以为列表**添加元素**，这会改列表本身：

```python
>>> cubes.append(216)  # 添加 6 的 3 次方
>>> cubes.append(7 ** 3)  # 添加 7 的 3 次方
>>> cubes
[1, 8, 27, 64, 125, 216, 343]
```

给**切片赋值**也是可以的，这可能会改变列表的大小，或者把列表清空：

```python
>>> letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> letters
['a', 'b', 'c', 'd', 'e', 'f', 'g']
>>> # 替换掉一些值
>>> letters[2:5] = ['C', 'D', 'E']
>>> letters
['a', 'b', 'C', 'D', 'E', 'f', 'g']
>>> # 移除这些值
>>> letters[2:5] = []
>>> letters
['a', 'b', 'f', 'g']
>>> # 清空列表
>>> letters[:] = []
>>> letters
[]
```

函数`len()`也可以用于获取列表的**长度**：

```python
>>> letters = ['a', 'b', 'c', 'd']
>>> len(letters)
4
```

列表也可以**嵌套**列表，甚至嵌套它自己，如下：

```python
>>> a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
>>> x
[['a', 'b', 'c'], [1, 2, 3]]
>>> x[0]
['a', 'b', 'c']
>>> x[0][1]
'b'
```

最后我们为浅拷贝给出一些例子：

```python
>>> b = a = ['a', 'b', 'c'] # 让 a 和 b 指向同一列表
>>> a[:] = []               # 清空 a 指向的列表
>>> b                       # b 也为空
[]
>>> # 采用浅拷贝，这里给出个为啥叫“拷贝”的例子
>>> a = ['a', 'b', 'c']
>>> b = a[:]                # b 是 a 的浅拷贝
>>> a[:] = []               # 清空 a 指向的列表
>>> b                       # b 不为空
['a', 'b', 'c']
>>> # 再给出一个为啥叫“浅”的例子
>>> a = [1, [2]]
>>> b = a[:]
>>> a[0] = 3                # a 修改了但 b 没有修改
>>> b
[1, [2]]
>>> a[1][0] = 4
>>> b
[1, [3]]
```

最后一个例子可能对初学者有点困惑，我们把最后的变量布局画出来，浅拷贝只是创建了新列表，但新列表所指向的元素和旧列表是公用的，如果元素都是不可变的可能感受不到这个差异，但如果元素是可变的，那么修改旧列表中的该元素，新列表也会改变：

```text
     +---+---+
a -> | 3 |   |
     +---+-+-+
           |     +---+
           +---> | 4 |
           |     +---+
     +---+-+-+
b -> | 1 |   |
     +---+---+
```

## 3 复习

### 3.1 概念重提

有两种方法**运行Python代码**：

- 交互运行：好处是方便测试，有以下几种：
  - 用Idle：只有Windows可用，有自动补全；
  - 在命令行里用Python：跨平台，无自动补全；
  - 在命令行里启动JupyteLab，并在浏览器中使用：有最好的交互体验，文件后缀为`.ipynb`。
- 保存执行：好处是方便使用，可以选择**编辑器**/**IDE**，并搭配版本控制系统，文件后缀为`.py`。

运行Python代码的软件称为Python**解释器**。Python的扩展库称为**包**，管理这些包的软件叫**包管理器**，Python自带的包管理器叫**pip**。你可以在命令行中输入以下命令安装/卸载包：

- `pip install xxx`：安装`xxx`包；
- `pip uninstall xxx`：卸载`xxx`包；
- `pip install -r requirements.txt`：将`requirements.txt`列出的包全部安装。

关于**JupyterLab**的安装和使用这里不再重复。

Python的**注释**以`#`开头，到行尾结束。

Python对于**数学类型**支持`+`、`-`、`*`、`/`、`//`（整除）、`%`（求余）和`**`（乘方）。数学类型有**整型**和**浮点型**。

使用赋值语句可以将值绑定到变量。交互模式下，`_`变量存储上一个表达式的值。

**字符串字面量**可以由双引号和单引号括住，特殊的字符需要转义。除了普通的字符串字面量，还有**原始字符串**和**多行字符串**。字符串支持数乘重复和加法拼接、**索引**和**切片**操作。

**函数**是一种特殊的类型，它可以被**调用**。函数可以分为**普通函数**和**方法**。有以下函数或方法：

- `print()`打印一系列的值；
- `len()`：获得字符串或列表的长度；
- `ord()`：返回字符的码位；
- `chr()`：根据码位返回字符；
- 字符串的`encode()`：将字符串转换成bytes；
- bytes的`decode()`：将bytes转换为字符串；
- 列表的`append()`：向列表追加元素。

**列表**是可变的类型，同样支持数乘重复和加法拼接、**索引**和**切片**操作。由于可变，它的索引和切片都可以被赋值。它存储的不必是同一类型，可以构成嵌套列表。

### 3.2 术语表

|术语|英文|含义|
|:-:|:-:|-|
|表达式|expression|产生一个值的一串式子|
|类型|type|每个值有类型，类型决定了操作和取值范围|
|整型|int|存储整数的类型|
|浮点型|float|存储实数的类型，会有精度损失|
|运算符|operator|代表所要进行的运算|
|操作数|operand|代表运算的输入，是一种值|
|优先级|precedence|决定不同运算符运算先后顺序的主要因素|
|结合性|associativity|决定同优先级运算符运算的顺序|
|变量|variable|能代表值的一个名字|
|赋值|assignment|将值绑定到名字的操作|
|标识符|identifier|名字的统称|
|字符串|string|存储文本的类型|
|转义|escape|用一串文本代表一个字符|
|字面量|literal|代码中代表一个值的文本|
|函数|function|一种类型，可被调用，接受多个值，返回一个值|
|参数|parameter|函数接受的值|
|返回值|return value|函数返回的值|
|方法|method|一种特殊的函数，属于某一类型|
|浅拷贝|shallow copy|一种只拷贝最外层成员的拷贝方法|