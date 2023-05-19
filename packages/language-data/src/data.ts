import type { LanguageDataType } from "./type";

const LanguageData: LanguageDataType[] = [
  {
    name: "C",
    fileExtension: ["c", "cats", "h", "idc", "w"],
    namingConvention: "PascalCase",
    prismTag: "c",
    logo: "https://user-images.githubusercontent.com/54644599/227718065-9c0b7fb1-7ee4-4e27-99dd-d93bb6bde1de.png",
  },
  {
    name: "C#",
    fileExtension: ["cs", "cake", "cshtml", "csx"],
    namingConvention: "PascalCase",
    prismTag: "csharp",
    logo: "https://user-images.githubusercontent.com/54644599/227718064-c9b9f17a-6f55-4955-85ba-19e2c0420751.png",
  },
  {
    name: "C++",
    fileExtension: [
      "cpp",
      "c++",
      "cc",
      "cp",
      "cxx",
      "h",
      "h++",
      "hh",
      "hpp",
      "hxx",
      "inc",
      "inl",
      "ipp",
      "tcc",
      "tpp",
    ],
    namingConvention: "PascalCase",
    prismTag: "cpp",
    logo: "https://user-images.githubusercontent.com/54644599/227718062-7de51f0d-3710-4e1e-9d29-466e801c6de7.png",
  },
  {
    name: "Dart",
    fileExtension: ["dart"],
    namingConvention: "PascalCase",
    prismTag: "dart",
    logo: "https://user-images.githubusercontent.com/54644599/227718060-a2d16833-cdd3-4d39-8b29-f7e928bea5f9.png",
  },
  {
    name: "F#",
    fileExtension: ["fs", "fsi", "fsx"],
    namingConvention: "PascalCase",
    prismTag: "fsharp",
    logo: "https://user-images.githubusercontent.com/54644599/227718057-577fec2b-5a9b-451e-a221-218319af5cc6.png",
  },
  {
    name: "GO",
    fileExtension: ["go"],
    namingConvention: "snake_case",
    prismTag: "go",
    logo: "https://user-images.githubusercontent.com/54644599/227718055-cc760c85-aab1-4c6c-9b6e-095fedfbb12f.png",
  },
  {
    name: "Haskell",
    fileExtension: ["hs", "hsc"],
    namingConvention: "snake_case",
    prismTag: "haskell",
    logo: "https://user-images.githubusercontent.com/54644599/227718051-caef203f-2584-479d-b0e2-47fb8e59b265.png",
  },
  {
    name: "Java",
    fileExtension: ["java"],
    namingConvention: "PascalCase",
    prismTag: "java",
    logo: "https://user-images.githubusercontent.com/54644599/227718049-78c3fb05-f06b-4b70-bfe5-7dc8cae5df8f.png",
  },
  {
    name: "JavaScript",
    fileExtension: [
      "js",
      "_js",
      "bones",
      "es",
      "es6",
      "frag",
      "gs",
      "jake",
      "jsb",
      "jscad",
      "jsfl",
      "jsm",
      "jss",
      "njs",
      "pac",
      "sjs",
      "ssjs",
      "sublime-build",
      "sublime-commands",
      "sublime-completions",
      "sublime-keymap",
      "sublime-macro",
      "sublime-menu",
      "sublime-mousemap",
      "sublime-project",
      "sublime-settings",
      "sublime-theme",
      "sublime-workspace",
      "sublime_metrics",
      "sublime_session",
      "xsjs",
      "xsjslib",
    ],
    namingConvention: "PascalCase",
    prismTag: "javascript",
    logo: "https://user-images.githubusercontent.com/54644599/227724565-dd199753-04ef-4262-bb48-e01b187ab4df.png",
  },
  {
    name: "Julia",
    fileExtension: ["jl"],
    namingConvention: "snake_case",
    prismTag: "julia",
    logo: "https://user-images.githubusercontent.com/54644599/227718045-9211a19c-7974-4324-aecc-4a4d0fb6a310.png",
  },
  {
    name: "Kotlin",
    fileExtension: ["kt", "ktm", "kts"],
    namingConvention: "PascalCase",
    prismTag: "kotlin",
    logo: "https://user-images.githubusercontent.com/54644599/227724578-6b384641-911f-43b7-8e7b-63a2c96226a6.png",
  },
  {
    name: "Perl",
    fileExtension: [
      "pl",
      "al",
      "cgi",
      "fcgi",
      "perl",
      "ph",
      "plx",
      "pm",
      "pod",
      "psgi",
      "t",
    ],
    namingConvention: "snake_case",
    prismTag: "perl",
    logo: "https://user-images.githubusercontent.com/54644599/227718041-b6b21f17-675b-485d-92a1-76f9ec1d80a4.png",
  },
  {
    name: "PHP",
    fileExtension: [
      "php",
      "aw",
      "ctp",
      "fcgi",
      "inc",
      "php3",
      "php4",
      "php5",
      "phps",
      "phpt",
    ],
    namingConvention: "snake_case",
    prismTag: "php",
    logo: "https://user-images.githubusercontent.com/54644599/227718037-2d3cbe05-e678-453e-8a22-a615794645b6.png",
  },
  {
    name: "Python",
    fileExtension: [
      "py",
      "bzl",
      "cgi",
      "fcgi",
      "gyp",
      "lmi",
      "pyde",
      "pyp",
      "pyt",
      "pyw",
      "rpy",
      "tac",
      "wsgi",
      "xpy",
    ],
    namingConvention: "snake_case",
    prismTag: "python",
    logo: "https://user-images.githubusercontent.com/54644599/227718034-fe84d827-4f53-4466-b37a-2cdd3e817ba2.png",
  },
  {
    name: "R",
    fileExtension: ["r", "rd", "rsx"],
    namingConvention: "snake_case",
    prismTag: "r",
    logo: "https://user-images.githubusercontent.com/54644599/227718032-6746f588-346e-4818-b656-c6a3a1a6fd06.png",
  },
  {
    name: "Ruby",
    fileExtension: [
      "rb",
      "builder",
      "fcgi",
      "gemspec",
      "god",
      "irbrc",
      "jbuilder",
      "mspec",
      "pluginspec",
      "podspec",
      "rabl",
      "rake",
      "rbuild",
      "rbw",
      "rbx",
      "ru",
      "ruby",
      "thor",
      "watchr",
    ],
    namingConvention: "PascalCase",
    prismTag: "ruby",
    logo: "https://user-images.githubusercontent.com/54644599/227718029-89cc56ce-5285-4981-a79d-1d4f98048a0c.png",
  },
  {
    name: "Rust",
    fileExtension: ["rs", "rs.in"],
    namingConvention: "snake_case",
    prismTag: "rust",
    logo: "https://user-images.githubusercontent.com/54644599/227718026-c1ee3b0c-1e70-4f3c-99a5-23c93ca2040e.png",
  },
  {
    name: "Scala",
    fileExtension: ["scala", "sbt", "sc"],
    namingConvention: "camelCase",
    prismTag: "scala",
    logo: "https://user-images.githubusercontent.com/54644599/227718024-b9dae41e-16b1-4d0f-944e-5d39f894552f.png",
  },
  {
    name: "Swift",
    fileExtension: ["swift"],
    namingConvention: "PascalCase",
    prismTag: "swift",
    logo: "https://user-images.githubusercontent.com/54644599/227718021-6f0d1954-e71c-45d2-8ec3-be2b75d6adcd.png",
  },
  {
    name: "TypeScript",
    fileExtension: ["ts", "tsx"],
    namingConvention: "PascalCase",
    prismTag: "typescript",
    logo: "https://user-images.githubusercontent.com/54644599/227724573-d958c16a-4b78-4bc1-b05f-599167150e8a.png",
  },
];

export default LanguageData;
