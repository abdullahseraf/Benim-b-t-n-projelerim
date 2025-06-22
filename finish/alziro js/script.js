const lessons = [
  {
    id: 0,
    title: "مقدمة عن جافاسكربت",
    content: `جافاسكربت هي لغة برمجة عالية المستوى، مفسرة وديناميكية، تم تطويرها في عام 1995. وهي اليوم واحدة من أكثر لغات البرمجة استخداماً في العالم.

لماذا نتعلم جافاسكربت؟
1. تستخدم في تطوير واجهات المستخدم التفاعلية
2. تعمل في المتصفح مباشرة دون الحاجة لتثبيت برامج إضافية
3. لها مجتمع كبير ومكتبات متنوعة
4. تستخدم في تطوير تطبيقات الويب والموبايل والخوادم

مجالات استخدام جافاسكربت:
• تطوير الواجهات الأمامية (Frontend Development)
• تطوير الخوادم باستخدام Node.js
• تطوير تطبيقات الموبايل باستخدام React Native
• تطوير الألعاب وتطبيقات الويب التفاعلية
• معالجة البيانات وتحليلها

أدوات التطوير الأساسية:
1. محرر النصوص (VS Code, Sublime Text)
2. متصفح حديث مع أدوات المطور
3. Node.js للتطوير المحلي
4. مدير الحزم npm أو yarn`,
    code: `// مثال بسيط على كود جافاسكربت
console.log("مرحباً بك في عالم جافاسكربت!"); // طباعة رسالة ترحيب

// إضافة تفاعل للصفحة
document.getElementById("welcomeButton").onclick = function() {
    // عند النقر على الزر
    const name = prompt("ما اسمك؟"); // طلب اسم المستخدم
    if (name) {
        // إذا أدخل المستخدم اسماً
        alert(\`مرحباً بك يا \${name} في عالم البرمجة!\`);
        document.getElementById("welcomeMessage").textContent = 
            \`أهلاً بك \${name}، هيا نبدأ رحلة التعلم!\`;
    }
};

// مثال على التعامل مع الأرقام
let result = 5 + 3; // عملية جمع بسيطة
console.log(\`نتيجة 5 + 3 هي: \${result}\`); // طباعة النتيجة

// مثال على التعامل مع النصوص
let firstName = "أحمد";
let lastName = "محمد";
console.log(\`الاسم الكامل: \${firstName} \${lastName}\`);`,
    topics: [
      "تاريخ جافاسكربت وتطورها",
      "مجالات استخدام جافاسكربت",
      "أدوات تطوير جافاسكربت",
      "بيئة العمل المناسبة",
      "الأساسيات الأولية للغة",
    ],
    quiz: {
      question:
        "اختر الإجابة الصحيحة: ما هي الميزة الأساسية التي تميز جافاسكربت عن لغات البرمجة الأخرى؟",
      explanation: `هذا السؤال يختبر فهمك للميزات الأساسية لجافاسكربت. فكر في:
- كيف تعمل جافاسكربت في المتصفح
- ما الذي يجعلها مختلفة عن لغات مثل Java أو Python
- لماذا أصبحت اللغة الأكثر استخداماً في تطوير الويب`,
      options: [
        {
          text: "تعمل فقط على نظام Windows",
          explanation: "خطأ - جافاسكربت تعمل على جميع أنظمة التشغيل",
        },
        {
          text: "تعمل مباشرة في متصفح الويب دون الحاجة لبرامج إضافية",
          explanation:
            "صحيح - هذه من أهم ميزات جافاسكربت التي ساهمت في انتشارها",
        },
        {
          text: "لا تدعم البرمجة كائنية التوجه",
          explanation: "خطأ - جافاسكربت تدعم البرمجة كائنية التوجه بشكل كامل",
        },
        {
          text: "تحتاج إلى ترجمة قبل التشغيل",
          explanation: "خطأ - جافاسكربت لغة مفسرة ولا تحتاج إلى ترجمة مسبقة",
        },
      ],
      correctAnswer: 1,
      hint: "فكر في كيفية تشغيل كود جافاسكربت في المتصفح مقارنة باللغات الأخرى",
    },
    project: {
      title: "مشروع: صفحة ترحيب تفاعلية",
      description: `في هذا المشروع، ستقوم بإنشاء صفحة ويب تفاعلية بسيطة تحتوي على:
1. نموذج لإدخال اسم المستخدم
2. زر للترحيب بالمستخدم
3. عرض رسالة ترحيب مخصصة
4. تغيير لون وحجم النص عند التفاعل

خطوات المشروع:
1. إنشاء ملف HTML يحتوي على العناصر الأساسية
2. إضافة كود جافاسكربت للتفاعل
3. تنسيق الصفحة باستخدام CSS
4. إضافة تأثيرات حركية بسيطة`,
      startingCode: `// HTML
<div class="welcome-container">
    <input type="text" id="nameInput" placeholder="أدخل اسمك">
    <button id="welcomeButton">رحب بي</button>
    <h2 id="welcomeMessage"></h2>
</div>

// CSS
<style>
.welcome-container {
    text-align: center;
    padding: 20px;
    font-family: 'Arial', sans-serif;
}

#nameInput {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

#welcomeButton {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#welcomeMessage {
    color: #333;
    transition: all 0.3s ease;
}
</style>

// JavaScript
document.getElementById('welcomeButton').onclick = function() {
    const nameInput = document.getElementById('nameInput');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    if (nameInput.value.trim() !== '') {
        welcomeMessage.textContent = \`مرحباً بك \${nameInput.value} في عالم جافاسكربت!\`;
        welcomeMessage.style.color = '#4CAF50';
        welcomeMessage.style.fontSize = '24px';
        
        // إضافة تأثير حركي بسيط
        welcomeMessage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            welcomeMessage.style.transform = 'scale(1)';
        }, 300);
    } else {
        alert('الرجاء إدخال اسمك!');
    }
};`,
      hints: [
        "تأكد من ربط ملف JavaScript بصفحة HTML",
        "استخدم addEventListener بدلاً من onclick للممارسات الأفضل",
        "أضف تحقق من الإدخال الفارغ قبل معالجة الاسم",
        "جرب إضافة المزيد من التأثيرات الحركية باستخدام CSS transitions",
      ],
      solution: `// الحل الكامل متوفر بعد محاولة حل المشروع
// يتضمن الحل:
// 1. التحقق من صحة الإدخال
// 2. إضافة تأثيرات حركية
// 3. تحسين تجربة المستخدم
// 4. معالجة الأخطاء المحتملة`,
    },
  },
  {
    id: 1,
    title: "تركيب الكود والمتغيرات",
    content: `في هذا الدرس سنتعرف على القواعد الأساسية لكتابة كود جافاسكربت والتعامل مع المتغيرات.

أساسيات تركيب الكود:
1. التعليقات (Comments):
   • تعليق سطر واحد: // هذا تعليق
   • تعليق متعدد الأسطر: /* هذا تعليق متعدد الأسطر */

2. نهاية الأوامر:
   • يفضل إنهاء كل أمر بفاصلة منقوطة (;)
   • يمكن للمترجم إضافتها تلقائياً في معظم الحالات

3. المسافات البيضاء:
   • جافاسكربت لا تهتم بالمسافات البيضاء
   • لكن يفضل استخدامها لتحسين قراءة الكود

المتغيرات في جافاسكربت:

1. var (الطريقة القديمة):
   • متاحة في كل مكان (function-scoped)
   • يمكن إعادة تعريفها
   • تتأثر بالرفع (hoisting)
   • لا ينصح باستخدامها في الكود الحديث

2. let (الطريقة الحديثة):
   • متاحة فقط في النطاق المحدد (block-scoped)
   • يمكن تغيير قيمتها
   • لا يمكن إعادة تعريفها في نفس النطاق
   • لا تتأثر بالرفع

3. const (للقيم الثابتة):
   • متاحة فقط في النطاق المحدد
   • لا يمكن تغيير قيمتها بعد التعريف
   • مثالية للثوابت والقيم التي لا تتغير

قواعد تسمية المتغيرات:
• يجب أن تبدأ بحرف أو _ أو $
• يمكن أن تحتوي على أرقام بعد الحرف الأول
• حساسة لحالة الأحرف (case-sensitive)
• لا يمكن استخدام الكلمات المحجوزة
• يفضل استخدام camelCase في التسمية`,
    code: `// أمثلة على استخدام المتغيرات
// 1. استخدام var (غير مفضل)
var oldVariable = "قديم";
var oldVariable = "يمكن إعادة التعريف"; // مسموح لكن غير مفضل

// 2. استخدام let (مفضل للقيم المتغيرة)
let score = 0;
score = score + 10; // يمكن تغيير القيمة
// let score = 100; // خطأ: لا يمكن إعادة تعريف

// 3. استخدام const (للقيم الثابتة)
const PI = 3.14159;
const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user'
};
// PI = 3.14; // خطأ: لا يمكن تغيير قيمة const

// 4. نطاق المتغيرات (Scope)
function exampleFunction() {
    let localVar = "متاح فقط داخل الدالة";
    if (true) {
        let blockVar = "متاح فقط داخل الكتلة";
        var functionVar = "متاح في كل الدالة";
        console.log(blockVar); // يعمل
    }
    // console.log(blockVar); // خطأ: المتغير غير معرف
    console.log(functionVar); // يعمل
}

// 5. أمثلة على التسمية
let firstName = "أحمد";       // camelCase (مفضل)
let last_name = "محمد";       // snake_case
let $specialName = "خاص";     // يبدأ بـ $
let _privateName = "خاص";     // يبدأ بـ _
// let 1invalid = "خطأ";      // خطأ: لا يمكن أن يبدأ برقم

// 6. تعريف متغيرات متعددة
let name = "علي",
    age = 25,
    isStudent = true;`,
    topics: [
      "قواعد كتابة الكود في جافاسكربت",
      "أنواع المتغيرات (var, let, const)",
      "نطاق المتغيرات (Variable Scope)",
      "قواعد تسمية المتغيرات",
      "أفضل ممارسات استخدام المتغيرات",
    ],
    quiz: {
      question: "أي من العبارات التالية صحيحة حول الفرق بين let و const؟",
      explanation: `هذا السؤال يختبر فهمك للفروق الأساسية بين let و const:
- فكر في إمكانية تغيير القيمة
- فكر في إمكانية إعادة التعريف
- فكر في نطاق المتغير
- فكر في استخدامات كل منهما`,
      options: [
        {
          text: "يمكن تغيير قيمة const بعد تعريفها",
          explanation: "خطأ - لا يمكن تغيير قيمة const بعد تعريفها",
        },
        {
          text: "let و const كلاهما block-scoped",
          explanation: "صحيح - كلاهما متاح فقط في النطاق المحدد",
        },
        {
          text: "يمكن إعادة تعريف المتغير باستخدام let في نفس النطاق",
          explanation: "خطأ - لا يمكن إعادة تعريف let في نفس النطاق",
        },
        {
          text: "const لا يمكن استخدامها مع المصفوفات والكائنات",
          explanation: "خطأ - يمكن استخدام const مع المصفوفات والكائنات",
        },
      ],
      correctAnswer: 1,
      hint: "فكر في كيفية تصرف كل من let و const داخل الكتلة البرمجية (block)",
    },
    project: {
      title: "مشروع: نظام تسجيل درجات الطلاب",
      description: `في هذا المشروع، سنقوم بإنشاء نظام بسيط لتسجيل وحساب درجات الطلاب.

المتطلبات:
1. تخزين معلومات الطالب (الاسم، الرقم، الدرجات)
2. حساب المعدل والتقدير
3. عرض النتائج بتنسيق مناسب
4. التحقق من صحة المدخلات

خطوات المشروع:
1. تعريف المتغيرات اللازمة
2. إنشاء دوال الحساب
3. إضافة التحقق من المدخلات
4. عرض النتائج النهائية`,
      startingCode: `// تعريف الثوابت
const GRADES = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0
};

// تعريف متغيرات الطالب
let studentName = "أحمد محمد";
let studentId = "2024001";
let grades = [];

// دالة إضافة درجة
function addGrade(grade) {
    if (isValidGrade(grade)) {
        grades.push(grade);
        return true;
    }
    return false;
}

// دالة التحقق من صحة الدرجة
function isValidGrade(grade) {
    return grade >= 0 && grade <= 100;
}

// دالة حساب المعدل
function calculateAverage() {
    if (grades.length === 0) return 0;
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}

// دالة تحديد التقدير
function getGradeLevel(average) {
    if (average >= GRADES.A) return 'A';
    if (average >= GRADES.B) return 'B';
    if (average >= GRADES.C) return 'C';
    if (average >= GRADES.D) return 'D';
    return 'F';
}

// دالة عرض النتائج
function displayResults() {
    const average = calculateAverage();
    const gradeLevel = getGradeLevel(average);
    
    console.log(\`
    معلومات الطالب:
    الاسم: \${studentName}
    الرقم: \${studentId}
    المعدل: \${average.toFixed(2)}
    التقدير: \${gradeLevel}
    الدرجات: \${grades.join(', ')}
    \`);
}`,
      hints: [
        "استخدم const للقيم الثابتة مثل تعريف التقديرات",
        "استخدم let للمتغيرات التي ستتغير قيمتها مثل الدرجات",
        "تأكد من التحقق من صحة المدخلات قبل استخدامها",
        "استخدم التعليقات لتوثيق الكود",
        "فكر في إضافة المزيد من الوظائف مثل حساب أعلى وأدنى درجة",
      ],
      solution: `// الحل الكامل يتضمن:
// 1. إضافة التحقق من صحة جميع المدخلات
// 2. إضافة معالجة الأخطاء
// 3. إضافة واجهة مستخدم بسيطة
// 4. تحسين طريقة عرض النتائج
// 5. إضافة إمكانية تعديل وحذف الدرجات`,
    },
  },
  {
    id: 2,
    title: "أنواع البيانات والعمليات",
    content: `في هذا الدرس سنتعرف على أنواع البيانات المختلفة في جافاسكربت والعمليات التي يمكن إجراؤها عليها.

أنواع البيانات الأساسية:

1. الأعداد (Numbers):
   • الأعداد الصحيحة: 42, -10, 0
   • الأعداد العشرية: 3.14, -0.5
   • القيم الخاصة: Infinity, -Infinity, NaN
   • العمليات الحسابية: +, -, *, /, %, **

2. النصوص (Strings):
   • يمكن تعريفها باستخدام ' أو " أو \`
   • دعم Unicode واللغات المختلفة
   • عمليات النصوص: +, length, toUpperCase(), toLowerCase()
   • القوالب النصية (Template Literals): \`مرحباً \${name}\`

3. القيم المنطقية (Booleans):
   • true أو false
   • تستخدم في الشروط والتحكم
   • العمليات المنطقية: &&, ||, !

4. القيم الخاصة:
   • null: تمثل عدم وجود قيمة
   • undefined: متغير غير معرف أو خاصية غير موجودة
   • NaN: تمثل قيمة غير رقمية

5. الكائنات (Objects):
   • مجموعة من الخصائص والقيم
   • يمكن أن تحتوي على أي نوع من البيانات
   • تستخدم لتمثيل البيانات المركبة

6. المصفوفات (Arrays):
   • مجموعة مرتبة من القيم
   • يمكن أن تحتوي على أنواع مختلفة من البيانات
   • الوصول للعناصر باستخدام الفهرس

العمليات الأساسية:

1. العمليات الحسابية:
   • الجمع (+): 5 + 3 = 8
   • الطرح (-): 10 - 4 = 6
   • الضرب (*): 6 * 2 = 12
   • القسمة (/): 15 / 3 = 5
   • باقي القسمة (%): 17 % 5 = 2
   • الأس (**): 2 ** 3 = 8

2. العمليات المنطقية:
   • AND (&&): true && false = false
   • OR (||): true || false = true
   • NOT (!): !true = false

3. عمليات المقارنة:
   • المساواة (==, ===)
   • عدم المساواة (!=, !==)
   • أكبر من (>)
   • أصغر من (<)
   • أكبر من أو يساوي (>=)
   • أصغر من أو يساوي (<=)`,
    code: `// أمثلة على أنواع البيانات
// 1. الأعداد
let integer = 42;
let decimal = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;

// العمليات الحسابية
let sum = 5 + 3;         // 8
let difference = 10 - 4; // 6
let product = 6 * 2;     // 12
let quotient = 15 / 3;   // 5
let remainder = 17 % 5;  // 2
let power = 2 ** 3;      // 8

// 2. النصوص
let singleQuote = 'نص بعلامة اقتباس واحدة';
let doubleQuote = "نص بعلامة اقتباس مزدوجة";
let templateLiteral = \`نص باستخدام قالب نصي\`;
let name = "أحمد";
let greeting = \`مرحباً \${name}!\`;

// عمليات النصوص
let firstName = "أحمد";
let lastName = "محمد";
let fullName = firstName + " " + lastName;
let length = fullName.length;
let upperCase = fullName.toUpperCase();
let lowerCase = fullName.toLowerCase();

// 3. القيم المنطقية
let isTrue = true;
let isFalse = false;

// العمليات المنطقية
let and = true && false;  // false
let or = true || false;   // true
let not = !true;          // false

// 4. القيم الخاصة
let empty = null;
let notDefined = undefined;
let invalidNumber = NaN;

// 5. الكائنات
let person = {
    name: "أحمد",
    age: 25,
    isStudent: true,
    address: {
        city: "القاهرة",
        country: "مصر"
    }
};

// 6. المصفوفات
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "نص", true, null];
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// عمليات المقارنة
let equal = 5 == "5";     // true (تساوي القيمة)
let strictEqual = 5 === "5"; // false (تساوي القيمة والنوع)
let notEqual = 5 != "5";  // false
let strictNotEqual = 5 !== "5"; // true
let greater = 10 > 5;     // true
let less = 5 < 10;        // true`,
    topics: [
      "أنواع البيانات الأساسية",
      "الأعداد والعمليات الحسابية",
      "النصوص وعمليات النصوص",
      "القيم المنطقية والعمليات المنطقية",
      "القيم الخاصة (null, undefined, NaN)",
      "الكائنات والمصفوفات",
      "عمليات المقارنة",
    ],
    quiz: {
      question: "ما هي نتيجة العملية التالية: '5' + 3 في جافاسكربت؟",
      options: ["8", "'53'", "Error", "undefined"],
      correctAnswer: 1,
    },
    project: {
      title: "مشروع: آلة حاسبة متقدمة",
      description: `في هذا المشروع، سنقوم بإنشاء آلة حاسبة متقدمة تدعم العمليات الحسابية الأساسية والعمليات المنطقية.

المتطلبات:
1. دعم العمليات الحسابية الأساسية (جمع، طرح، ضرب، قسمة)
2. دعم العمليات المنطقية (AND, OR, NOT)
3. التحقق من صحة المدخلات
4. معالجة الأخطاء
5. عرض النتائج بتنسيق مناسب

خطوات المشروع:
1. إنشاء واجهة المستخدم
2. إضافة معالجة المدخلات
3. تنفيذ العمليات الحسابية
4. تنفيذ العمليات المنطقية
5. إضافة التحقق من الأخطاء`,
      startingCode: `// تعريف الثوابت
const OPERATIONS = {
    ADD: '+',
    SUBTRACT: '-',
    MULTIPLY: '*',
    DIVIDE: '/',
    AND: '&&',
    OR: '||',
    NOT: '!'
};

// دالة التحقق من صحة العدد
function isValidNumber(num) {
    return !isNaN(num) && isFinite(num);
}

// دالة التحقق من صحة العملية
function isValidOperation(op) {
    return Object.values(OPERATIONS).includes(op);
}

// دالة إجراء العملية الحسابية
function calculate(num1, operation, num2) {
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return 'خطأ: مدخلات غير صالحة';
    }

    switch(operation) {
        case OPERATIONS.ADD:
            return num1 + num2;
        case OPERATIONS.SUBTRACT:
            return num1 - num2;
        case OPERATIONS.MULTIPLY:
            return num1 * num2;
        case OPERATIONS.DIVIDE:
            if (num2 === 0) return 'خطأ: لا يمكن القسمة على صفر';
            return num1 / num2;
        default:
            return 'خطأ: عملية غير معروفة';
    }
}

// دالة إجراء العملية المنطقية
function logicalOperation(value1, operation, value2) {
    if (typeof value1 !== 'boolean' || typeof value2 !== 'boolean') {
        return 'خطأ: يجب أن تكون القيم منطقية';
    }

    switch(operation) {
        case OPERATIONS.AND:
            return value1 && value2;
        case OPERATIONS.OR:
            return value1 || value2;
        case OPERATIONS.NOT:
            return !value1;
        default:
            return 'خطأ: عملية منطقية غير معروفة';
    }
}`,
      hints: [
        "استخدم const للثوابت مثل تعريف العمليات",
        "استخدم let للمتغيرات التي ستتغير قيمتها",
        "تأكد من التحقق من صحة المدخلات قبل إجراء العمليات",
        "استخدم التعليقات لتوثيق الكود",
        "فكر في إضافة المزيد من العمليات مثل الأس والجذر التربيعي",
      ],
      solution: `// الحل الكامل يتضمن:
// 1. إضافة واجهة مستخدم تفاعلية
// 2. إضافة معالجة الأخطاء المتقدمة
// 3. إضافة دعم للعمليات المتقدمة
// 4. تحسين طريقة عرض النتائج
// 5. إضافة إمكانية حفظ العمليات السابقة`,
    },
  },
  {
    id: 3,
    title: "الجمل الشرطية",
    content:
      "نتعلم في هذا الدرس كيفية استخدام الجمل الشرطية (if, else if, else) وجملة switch للتحكم في مسار البرنامج.",
    code: "// استخدام if, else if, else\nlet grade = 85;\n\nif (grade >= 90) {\n    console.log('ممتاز');\n} else if (grade >= 80) {\n    console.log('جيد جداً');\n} else if (grade >= 70) {\n    console.log('جيد');\n} else {\n    console.log('مقبول');\n}\n\n// استخدام switch\nlet day = 'الأحد';\nswitch (day) {\n    case 'السبت':\n    case 'الأحد':\n        console.log('عطلة نهاية الأسبوع');\n        break;\n    default:\n        console.log('يوم عمل');\n        break;\n}",
    topics: [
      "استخدام if, else if, else",
      "العمليات المنطقية في الشروط",
      "جملة switch",
      "استخدام break في switch",
    ],
    quiz: {
      question:
        "ما هي النتيجة عند تنفيذ الكود التالي: if(5 > 3 && 2 < 1) { console.log('صح'); } else { console.log('خطأ'); }",
      options: ["صح", "خطأ", "undefined", "لن يتم طباعة شيء"],
      correctAnswer: 1,
    },
    project: {
      title: "مشروع: تحديد فئة العمر",
      description:
        "قم بإنشاء برنامج يحدد فئة العمر (طفل، مراهق، بالغ، كبير السن) بناءً على العمر المدخل.",
      startingCode:
        "function getAgeCategory(age) {\n    if (age < 13) {\n        return 'طفل';\n    } else if (age < 20) {\n        return 'مراهق';\n    } else if (age < 60) {\n        return 'بالغ';\n    } else {\n        return 'كبير السن';\n    }\n}",
    },
  },
  {
    id: 4,
    title: "الحلقات التكرارية",
    content:
      "نتعرف على أنواع الحلقات التكرارية في جافاسكربت (for, while, do...while) وكيفية استخدام break و continue.",
    code: "// حلقة for\nfor (let i = 0; i < 5; i++) {\n    console.log('العداد: ' + i);\n}\n\n// حلقة while\nlet count = 0;\nwhile (count < 3) {\n    console.log('العدد: ' + count);\n    count++;\n}\n\n// حلقة do...while\nlet num = 1;\ndo {\n    console.log('الرقم: ' + num);\n    num++;\n} while (num <= 3);\n\n// استخدام break و continue\nfor (let i = 0; i < 10; i++) {\n    if (i === 3) continue; // تخطي الرقم 3\n    if (i === 7) break;    // إيقاف الحلقة عند 7\n    console.log(i);\n}",
    topics: [
      "حلقة for",
      "حلقة while",
      "حلقة do...while",
      "استخدام break",
      "استخدام continue",
    ],
    quiz: {
      question: "ما الفرق الرئيسي بين حلقة while وحلقة do...while؟",
      options: [
        "لا يوجد فرق",
        "while أسرع في التنفيذ",
        "do...while تنفذ مرة واحدة على الأقل",
        "while تستخدم مع الأرقام فقط",
      ],
      correctAnswer: 2,
    },
    project: {
      title: "مشروع: جدول الضرب",
      description: "قم بإنشاء برنامج يطبع جدول الضرب من 1 إلى 10.",
      startingCode:
        "function printMultiplicationTable() {\n    for (let i = 1; i <= 10; i++) {\n        for (let j = 1; j <= 10; j++) {\n            console.log(i + ' × ' + j + ' = ' + (i * j));\n        }\n        console.log('---------------');\n    }\n}",
    },
  },
  {
    id: 5,
    title: "المصفوفات وطرق التعامل معها",
    content:
      "نتعلم كيفية إنشاء المصفوفات والتعامل معها باستخدام الدوال المختلفة مثل push, pop, shift, unshift, splice, slice.",
    code: "// إنشاء مصفوفة\nlet fruits = ['تفاح', 'موز', 'برتقال'];\n\n// إضافة وحذف عناصر\nfruits.push('عنب');        // إضافة في النهاية\nfruits.pop();             // حذف من النهاية\nfruits.unshift('فراولة'); // إضافة في البداية\nfruits.shift();          // حذف من البداية\n\n// التعديل على المصفوفة\nfruits.splice(1, 1, 'مانجو'); // حذف وإضافة\nlet newFruits = fruits.slice(1, 3); // نسخ جزء\n\n// التكرار على المصفوفة\nfruits.forEach(fruit => console.log(fruit));\nlet upperFruits = fruits.map(f => f.toUpperCase());\nlet longFruits = fruits.filter(f => f.length > 4);\nlet totalLength = fruits.reduce((sum, f) => sum + f.length, 0);",
    topics: [
      "إنشاء المصفوفات",
      "إضافة وحذف العناصر",
      "دوال المصفوفات الأساسية",
      "التكرار على المصفوفات",
      "دوال التحويل والتصفية",
    ],
    quiz: {
      question: "ما هي نتيجة تنفيذ الكود التالي: ['أ', 'ب', 'ج'].slice(1, 2)?",
      options: ["['أ']", "['ب']", "['ب', 'ج']", "['أ', 'ب']"],
      correctAnswer: 1,
    },
    project: {
      title: "مشروع: إدارة قائمة المهام",
      description:
        "قم بإنشاء برنامج لإدارة قائمة المهام يمكنك من إضافة وحذف وتعديل المهام.",
      startingCode:
        "let tasks = [];\n\nfunction addTask(task) {\n    tasks.push({ id: Date.now(), text: task, completed: false });\n}\n\nfunction deleteTask(id) {\n    tasks = tasks.filter(task => task.id !== id);\n}\n\nfunction toggleTask(id) {\n    tasks = tasks.map(task => \n        task.id === id ? {...task, completed: !task.completed} : task\n    );\n}",
    },
  },
  {
    id: 6,
    title: "الكائنات (Objects)",
    content:
      "نتعلم كيفية إنشاء وتعديل الكائنات في جافاسكربت، والوصول إلى خصائصها باستخدام النقطة وعلامات الأقواس.",
    code: `// إنشاء كائن
let person = {
    name: "أحمد",
    age: 25,
    city: "القاهرة",
    hobbies: ["القراءة", "السفر"],
    sayHello: function() {
        return \`مرحباً، أنا \${this.name}\`;
    }
};

// الوصول للخصائص
console.log(person.name);        // باستخدام النقطة
console.log(person["age"]);      // باستخدام الأقواس

// تعديل وإضافة خصائص
person.job = "مبرمج";           // إضافة خاصية جديدة
person.age = 26;                // تعديل خاصية

// حذف خاصية
delete person.city;

// التحقق من وجود خاصية
console.log("name" in person);   // true
console.log(person.hasOwnProperty("age")); // true`,
    topics: [
      "إنشاء الكائنات",
      "الوصول للخصائص وتعديلها",
      "إضافة وحذف الخصائص",
      "الدوال داخل الكائنات",
      "التحقق من وجود الخصائص",
    ],
    quiz: {
      question:
        "ما هي الطريقة الصحيحة للوصول إلى خاصية تحتوي على مسافة في اسمها؟",
      options: [
        "object.first name",
        'object["first name"]',
        "object.first-name",
        "object#first name",
      ],
      correctAnswer: 1,
    },
    project: {
      title: "مشروع: نظام إدارة المكتبة",
      description:
        "قم بإنشاء نظام بسيط لإدارة المكتبة يتعامل مع كائنات الكتب والمستعيرين.",
      startingCode: `let library = {
    books: [],
    members: [],
    
    addBook(book) {
        this.books.push({
            id: Date.now(),
            title: book.title,
            author: book.author,
            available: true
        });
    },
    
    borrowBook(bookId, memberId) {
        let book = this.books.find(b => b.id === bookId);
        if (book && book.available) {
            book.available = false;
            book.borrowedBy = memberId;
            return true;
        }
        return false;
    }
};`,
    },
  },
  {
    id: 7,
    title: "الدوال (Functions)",
    content:
      "نتعرف على أنواع الدوال في جافاسكربت وكيفية تعريفها واستخدامها، بما في ذلك الدوال السهمية والدوال ذات المعاملات الافتراضية.",
    code: `// تعريف دالة عادية
function greet(name) {
    return \`مرحباً \${name}\`;
}

// دالة تعبيرية
const add = function(a, b) {
    return a + b;
};

// دالة سهمية
const multiply = (x, y) => x * y;

// دالة مع معاملات افتراضية
function createUser(name, age = 20, city = "القاهرة") {
    return { name, age, city };
}

// دالة كمعامل
function processArray(arr, callback) {
    return arr.map(callback);
}

// استخدام الدوال
console.log(greet("أحمد"));
console.log(add(5, 3));
console.log(multiply(4, 2));
console.log(createUser("محمد"));`,
    topics: [
      "تعريف الدوال",
      "الدوال التعبيرية",
      "الدوال السهمية",
      "المعاملات الافتراضية",
      "الدوال كمعاملات (Callbacks)",
    ],
    quiz: {
      question: "ما هو الفرق الرئيسي بين الدوال العادية والدوال السهمية؟",
      options: [
        "لا يوجد فرق",
        "الدوال السهمية أسرع",
        "الدوال السهمية لها this مختلف",
        "الدوال العادية لا تقبل معاملات",
      ],
      correctAnswer: 2,
    },
    project: {
      title: "مشروع: معالج النصوص",
      description:
        "قم بإنشاء مجموعة من الدوال لمعالجة النصوص (تحويل الحالة، عد الكلمات، إلخ).",
      startingCode: `const textUtils = {
    countWords: text => text.split(/\\s+/).length,
    
    capitalize: text => text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    
    reverse: text => text
        .split('')
        .reverse()
        .join(''),
    
    findAndReplace: (text, find, replace) => 
        text.replace(new RegExp(find, 'g'), replace)
};`,
    },
  },
  {
    id: 8,
    title: "التعامل مع DOM",
    content:
      "نتعلم كيفية التعامل مع عناصر صفحة الويب باستخدام DOM، بما في ذلك الوصول إلى العناصر وتعديلها وإضافة الأحداث.",
    code: `// الوصول إلى العناصر
const element = document.getElementById('myId');
const elements = document.getElementsByClassName('myClass');
const queryElement = document.querySelector('.myClass');

// تعديل المحتوى والخصائص
element.textContent = 'نص جديد';
element.innerHTML = '<span>محتوى HTML</span>';
element.setAttribute('class', 'newClass');
element.style.color = 'red';

// إنشاء عناصر جديدة
const newDiv = document.createElement('div');
newDiv.textContent = 'عنصر جديد';
document.body.appendChild(newDiv);

// التعامل مع الأحداث
element.addEventListener('click', function(event) {
    console.log('تم النقر على العنصر');
    event.preventDefault();
});`,
    topics: [
      "الوصول إلى عناصر DOM",
      "تعديل محتوى العناصر",
      "إضافة وحذف العناصر",
      "التعامل مع الأحداث",
      "تعديل الخصائص والأنماط",
    ],
    quiz: {
      question: "ما هو الفرق بين innerHTML و textContent؟",
      options: [
        "لا يوجد فرق",
        "innerHTML يدعم HTML، textContent للنص فقط",
        "textContent أسرع دائماً",
        "innerHTML للعناصر فقط",
      ],
      correctAnswer: 1,
    },
    project: {
      title: "مشروع: قائمة المهام التفاعلية",
      description: "قم بإنشاء تطبيق قائمة مهام تفاعلية باستخدام DOM.",
      startingCode: `// HTML
<div id="todo-app">
    <input type="text" id="task-input">
    <button onclick="addTask()">إضافة مهمة</button>
    <ul id="tasks-list"></ul>
</div>

// JavaScript
function addTask() {
    const input = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks-list');
    
    if (input.value.trim()) {
        const li = document.createElement('li');
        li.textContent = input.value;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'حذف';
        deleteBtn.onclick = () => li.remove();
        
        li.appendChild(deleteBtn);
        tasksList.appendChild(li);
        input.value = '';
    }
}`,
    },
  },
  {
    id: 9,
    title: "البرمجة غير المتزامنة",
    content:
      "نتعلم مفاهيم البرمجة غير المتزامنة في جافاسكربت، بما في ذلك Callbacks و Promises و async/await.",
    code: `// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback({ id: 1, name: "أحمد" });
    }, 1000);
}

// Promises
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, data: "معلومات" });
            // reject("حدث خطأ");
        }, 1000);
    });
}

// async/await
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('حدث خطأ:', error);
    }
}
// استخدام Promise.all
Promise.all([
    fetch('/api/users'),
    fetch('/api/posts')
]).then(([users, posts]) => {
    console.log('تم تحميل كل البيانات');
});`,
    topics: [
      "مفهوم البرمجة غير المتزامنة",
      "استخدام Callbacks",
      "العمل مع Promises",
      "async و await",
      "معالجة الأخطاء",
    ],
    quiz: {
      question:
        "ما هي أفضل طريقة للتعامل مع العمليات غير المتزامنة في جافاسكربت الحديثة؟",
      options: ["Callbacks", "Promises", "async/await", "setTimeout"],
      correctAnswer: 2,
    },
    project: {
      title: "مشروع: تطبيق الطقس",
      description: "قم بإنشاء تطبيق يعرض حالة الطقس باستخدام API خارجي.",
      startingCode: `async function getWeather(city) {
    const API_KEY = 'your_api_key';
    try {
        const response = await fetch(
            \`https://api.weatherapi.com/v1/current.json?key=\${API_KEY}&q=\${city}\`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('خطأ في جلب بيانات الطقس:', error);
    }
}`,
    },
  },
  {
    id: 10,
    title: "التخزين المحلي",
    content:
      "نتعلم كيفية تخزين البيانات محلياً في المتصفح باستخدام localStorage و sessionStorage.",
    code: `// localStorage - يبقى حتى بعد إغلاق المتصفح
localStorage.setItem('user', 'أحمد');
localStorage.setItem('preferences', JSON.stringify({
    theme: 'dark',
    language: 'ar'
}));

const user = localStorage.getItem('user');
const prefs = JSON.parse(localStorage.getItem('preferences'));

// sessionStorage - يمسح عند إغلاق المتصفح
sessionStorage.setItem('tempData', 'بيانات مؤقتة');
const temp = sessionStorage.getItem('tempData');

// حذف البيانات
localStorage.removeItem('user');
sessionStorage.clear(); // حذف كل البيانات

// التحقق من وجود بيانات
if (localStorage.getItem('user')) {
    console.log('المستخدم موجود');
}`,
    topics: [
      "استخدام localStorage",
      "استخدام sessionStorage",
      "تخزين واسترجاع البيانات",
      "تخزين الكائنات JSON",
      "إدارة بيانات التخزين",
    ],
    quiz: {
      question: "ما الفرق بين localStorage و sessionStorage؟",
      options: [
        "لا يوجد فرق",
        "localStorage يبقى بعد إغلاق المتصفح",
        "sessionStorage أكبر حجماً",
        "localStorage أسرع",
      ],
      correctAnswer: 1,
    },
    project: {
      title: "مشروع: تطبيق المفضلة",
      description:
        "قم بإنشاء تطبيق لحفظ واسترجاع المواقع المفضلة باستخدام localStorage.",
      startingCode: `const bookmarks = {
    items: JSON.parse(localStorage.getItem('bookmarks')) || [],
    
    add(url, title) {
        this.items.push({ url, title, date: new Date() });
        this.save();
    },
    
    remove(url) {
        this.items = this.items.filter(item => item.url !== url);
        this.save();
    },
    
    save() {
        localStorage.setItem('bookmarks', JSON.stringify(this.items));
    }
};`,
    },
  },
  {
    id: 11,
    title: "المفاهيم المتقدمة",
    content:
      "نتعلم المفاهيم المتقدمة في جافاسكربت مثل Scope و Hoisting و Closure و this و OOP.",
    code: `// Scope و Hoisting
console.log(x); // undefined بسبب الـ hoisting
var x = 5;

// Closure
function createCounter() {
    let count = 0;
    return {
        increment() { return ++count; },
        decrement() { return --count; },
        getCount() { return count; }
    };
}

// this في سياقات مختلفة
const user = {
    name: 'أحمد',
    greet() {
        console.log(\`مرحباً، أنا \${this.name}\`);
    }
};

// Classes في جافاسكربت
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return \`مرحباً، أنا \${this.name}\`;
    }

    static createAnonymous() {
        return new Person('مجهول', 0);
    }
}`,
    topics: [
      "نطاق المتغيرات (Scope)",
      "الرفع (Hoisting)",
      "الإغلاق (Closure)",
      "الكائن this",
      "البرمجة كائنية التوجه",
    ],
    quiz: {
      question: "ما هو الـ Closure في جافاسكربت؟",
      options: [
        "دالة داخل دالة",
        "متغير عام",
        "دالة تحتفظ بنطاق تعريفها",
        "نوع من أنواع الكائنات",
      ],
      correctAnswer: 2,
    },
    project: {
      title: "مشروع: نظام إدارة المستخدمين",
      description:
        "قم بإنشاء نظام لإدارة المستخدمين باستخدام Classes و localStorage.",
      startingCode: `class UserManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    addUser(name, email) {
        const user = {
            id: Date.now(),
            name,
            email,
            createdAt: new Date()
        };
        this.users.push(user);
        this.save();
        return user;
    }

    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
        this.save();
    }

    save() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }
}`,
    },
  },
];

function createSidebar() {
  const lessonsList = document.getElementById("lessons-list");
  lessonsList.innerHTML = "";

  lessons.forEach((lesson) => {
    const lessonLink = document.createElement("a");
    lessonLink.href = `#lesson${lesson.id}`;
    lessonLink.className = "sidebar-link";
    lessonLink.textContent = `الدرس ${lesson.id} - ${lesson.title}`;
    lessonLink.onclick = (e) => {
      e.preventDefault();
      showLesson(lesson.id);
    };
    lessonsList.appendChild(lessonLink);
  });
}

function showLesson(lessonId) {
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) return;

  // Update lesson content
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = `
        <div class="lesson-content">
            <h2 class="lesson-title">الدرس ${lesson.id} - ${lesson.title}</h2>
            <p>${lesson.content}</p>
            
            <div class="code-block">
                <pre><code>${lesson.code}</code></pre>
            </div>

            <ul class="topics-list">
                ${lesson.topics.map((topic) => `<li>${topic}</li>`).join("")}
            </ul>
        </div>
    `;

  // Update quiz
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
        <div class="quiz-question">
            <p>${lesson.quiz.question}</p>
            <ul class="quiz-options">
                ${lesson.quiz.options
                  .map(
                    (option, index) => `
                    <li class="quiz-option" data-index="${index}">${option}</li>
                `
                  )
                  .join("")}
            </ul>
        </div>
    `;

  // Add quiz interaction
  const quizOptions = quizContainer.querySelectorAll(".quiz-option");
  quizOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedIndex = parseInt(option.dataset.index);
      quizOptions.forEach((opt) => opt.classList.remove("selected"));
      option.classList.add("selected");

      if (selectedIndex === lesson.quiz.correctAnswer) {
        option.style.backgroundColor = "#2d4d4d";
      } else {
        option.style.backgroundColor = "#4d2d2d";
        quizOptions[lesson.quiz.correctAnswer].style.backgroundColor =
          "#2d4d4d";
      }
    });
  });

  // Update project
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = `
        <h4 class="project-title">${lesson.project.title}</h4>
        <p class="project-description">${lesson.project.description}</p>
        <div class="code-block">
            <pre><code>${lesson.project.startingCode}</code></pre>
        </div>
    `;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createSidebar();
  showLesson(0);
});
