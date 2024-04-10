const themeSettings = require("./themesettings.json");
const iconsSettings = require("./icons.json");
const fs = require("fs");

// Core theme class
class KTTheme {
  // Theme variables
  modeSwitchEnabled = true;

  modeDefault = "light";

  direction = "ltr";

  htmlAttributes = {};

  htmlClasses = {};

  // Keep page level assets
  javascriptFiles = [];

  cssFiles = [];

  vendorFiles = [];

  constructor() {}

  // Add HTML attributes by scope
  addHtmlAttribute(scope, attributeName, attributeValue) {
    let attribute = {};
    let attributesArray = [];
    if (this.htmlAttributes[scope]) {
      attributesArray = this.htmlAttributes[scope];
    }

    attribute[attributeName] = attributeValue;
    attributesArray.push(attribute);
    this.htmlAttributes[scope] = attributesArray;
  }

  // Add HTML class by scope
  addHtmlClass(scope, className) {
    let classesArray = [];
    if (this.htmlClasses[scope]) {
      classesArray = this.htmlClasses[scope];
    }
    classesArray.push(className);
    this.htmlClasses[scope] = classesArray;
  }

  // Print HTML attributes for the HTML template
  printHtmlAttributes(scope) {
    const attribute = [];
    if (this.htmlAttributes[scope]) {
      this.htmlAttributes[scope].forEach((attr) => {
        const [key, value] = Object.entries(attr)[0];
        let item = key + "=" + value;
        attribute.push(item);
      });
      return attribute.join(" ");
    }
  }

  // Print HTML classes for the HTML template
  printHtmlClasses(scope) {
    if (this.htmlClasses[scope]) {
      return this.htmlClasses[scope].join(" ");
    }
  }

  // Get SVG icon content
  getSvgIcon(path, classNames) {
    let content = fs.readFileSync(
      `${process.cwd()}/public/assets/media/icons/${path}`,
      { encoding: "utf8", flag: "r" }
    );
    return `<span class="${classNames}">${content}</span>`;
  }

  getIcon(iconName, iconClass = "", iconType = "") {
    let tag = "i";
    let output = "";
    let iconsFinalClass = iconClass === "" ? "" : " " + iconClass;

    if (iconType === "" && themeSettings.iconType !== "") {
      iconType = themeSettings.iconType;
    }

    if (iconType === "") {
      iconType = "solid";
    }

    if (iconType === "duotone") {
      let paths = iconsSettings[iconName] ? iconsSettings[iconName] : 0;

      output += `<${tag} class='ki-${iconType} ki-${iconName}${iconsFinalClass}'>`;

      for (let i = 1; i <= paths; i++) {
        output += `<span class='path${i}'></span>`;
      }

      output += `</${tag}>`;
    } else {
      output = `<${tag} class='ki-${iconType} ki-${iconName}${iconsFinalClass}'></${tag}>`;
    }

    return output;
  }

  // Set dark mode enabled status
  setModeSwitch(flag) {
    this.modeSwitchEnabled = flag;
  }

  // Check dark mode status
  isModeSwitchEnabled() {
    return this.modeSwitchEnabled;
  }

  // Set the mode to dark or light
  setModeDefault(mode) {
    this.modeDefault = mode;
  }

  // Get current mode
  getModeDefault() {
    return this.modeDefault;
  }

  // Set style direction
  setDirection(direction) {
    this.direction = direction;
  }

  // Get style direction
  getDirection() {
    return this.direction;
  }

  // Checks if style direction is RTL
  isRtlDirection() {
    return this.direction.toLowerCase() === "rtl";
  }

  getAssetPath(path) {
    return `${themeSettings.assetsDir}${path}`;
  }

  // Extend CSS file name with RTL
  extendCssFilename(path) {
    if (this.isRtlDirection()) {
      return path.replace(".css", ".rtl.css");
    }
    return path;
  }

  // Include favicon from settings
  getFavicon() {
    return this.getAssetPath(themeSettings.assets.favicon);
  }

  // Include the fonts from settings
  getFonts() {
    return themeSettings.assets.fonts;
  }

  // Get the global assets
  getGlobalAssets(type) {
    let files =
      type === "css" ? themeSettings.assets.css : themeSettings.assets.js;
    let updatedFiles = [];

    files.forEach((file) => {
      if (type === "css") {
        updatedFiles.push(this.getAssetPath(this.extendCssFilename(file)));
      } else {
        updatedFiles.push(this.getAssetPath(file));
      }
    });

    return updatedFiles;
  }

  // Add multiple vendors to the page by name
  addVendors(vendors) {
    vendors.forEach((vendor) => {
      if (!this.vendorFiles[vendor]) {
        this.vendorFiles.push(vendor);
      }
    });
  }

  // Add single vendor to the page by name
  addVendor(vendor) {
    if (!this.vendorFiles[vendor]) {
      this.vendorFiles.push(vendor);
    }
  }

  // Add custom javascript file to the page
  addJavascriptFile(file) {
    if (!this.javascriptFiles[file]) {
      this.javascriptFiles.push(file);
    }
  }

  // Add custom CSS file to the page
  addCssFile(file) {
    if (!this.cssFiles[file]) {
      this.cssFiles.push(file);
    }
  }

  getJavascriptFiles() {
    return this.javascriptFiles;
  }

  getCssFiles() {
    return this.cssFiles;
  }

  // Get vendor files from settings
  getVendors(type) {
    let vendors = themeSettings.vendors;
    let files = [];

    this.vendorFiles.forEach((vendor) => {
      if (vendors[vendor] && vendors[vendor][type]) {
        vendors[vendor][type].forEach((file) => {
          var vendorPath = file.includes("https://")
            ? file
            : this.getAssetPath(file);
          files.push(vendorPath);
        });
      }
    });
    return files;
  }

  getAttributeValue(scope, attributeName) {
    let attrValue = null;
    this.htmlAttributes[scope].forEach((attr) => {
      const [key, value] = Object.entries(attr)[0];
      if (key === attributeName) {
        attrValue = value;

      }
    });
    return attrValue;
  }

  getPartialPath(path) {
    return `${process.cwd()}/views/${path}`;
  }

  getLayoutPath(path) {
    return `${process.cwd()}/views/${themeSettings.layoutDir}/${path}`;
  }

  getPageViewPath(folder, file) {
    return `pages/${folder}/${themeSettings.name}/${file}`;
  }
}

module.exports = function createKtThemeInstance() {
  return new KTTheme();
};
