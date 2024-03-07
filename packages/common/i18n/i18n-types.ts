export enum KEYS {
  appName = "appName",
  workflows = "workflows",
  templates = "templates",
  template = "template",
  tutorials = "tutorials",
  models = "models",
  extensions = "extensions",
  menu = "menu",
  createNewWorkflow = "createNewWorkflow",
  myWorkflows = "myWorkflows",
  chooseMethod = "chooseMethod",
  newWorkflow = "newWorkflow",
  createDefaultWorkflow = "createDefaultWorkflow",
  import = "import",
  createFromImageOrJson = "createFromImageOrJson",
  selectTemplate = "selectTemplate",
  remove = "remove",
  yes = "yes",
  deleteWorkflow = "deleteWorkflow",
  chooseTemplate = "chooseTemplate",
  modelManagement = "modelManagement",
  modelFolder = "modelFolder",
  refresh = "refresh",
  settings = "settings",
  available = "available",
  installed = "installed",
  installedExtensions = "installedExtensions",
  extensionsInstalled = "extensionsInstalled",
  communityExtensions = "communityExtensions",
  installExtensionsFromCommunity = "installExtensionsFromCommunity",
  installFromGitUrl = "installFromGitUrl",
  totalExtensions = "totalExtensions",
  searchExtensions = "searchExtensions",
}

export type i18nKey = keyof typeof KEYS;
export type i18nLang = {
  [key in KEYS]: string
};

export type LanguageType = "zh-CN" | "en-US" | "ja" | "ru";
export type i18nAllLang = {
  [key in KEYS]: {
    'en-US': string,
    'zh-CN'?: string,
    'ja'?: string,
    'ru'?: string
  }
};