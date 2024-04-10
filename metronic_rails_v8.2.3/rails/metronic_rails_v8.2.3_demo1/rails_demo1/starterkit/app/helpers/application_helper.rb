module ApplicationHelper

  # Variables
  @@modeSwitchEnabled = false
  @@modeDefault = 'light'

  @@direction = 'ltr'

  @@htmlAttributes = {}
  @@htmlClasses = {}

  # Keep page level assets
  @@javascriptFiles = []
  @@cssFiles = []
  @@vendorFiles = []

  def init()
    @@htmlAttributes = {}
    @@htmlClasses = {}

    @@javascriptFiles = []
    @@cssFiles = []
    @@vendorFiles = []
  end

  # Get product name
  def getName()
    return Rails.configuration.settings.KT_THEME
  end

  # Add HTML attributes by scope
  def addHtmlAttribute(scope, name, value)
    @@htmlAttributes[scope] ||= {}
    @@htmlAttributes[scope][name] = value
  end

  # Add multiple HTML attributes by scope
  def addHtmlAttributes(scope, attributes)
    attributes.each do |key, value|
      @@htmlAttributes[scope] ||= {}
      @@htmlAttributes[scope][key] = value
    end
  end

  # Add HTML class by scope
  def addHtmlClass(scope, value)
    @@htmlClasses[scope] ||= []
    if !value.in?(@@htmlClasses[scope])
      @@htmlClasses[scope] << value
    end
  end

  # Print HTML attributes for the HTML template
  def printHtmlAttributes(scope)
    attributes ||= []
    if scope.in?(@@htmlAttributes)
      @@htmlAttributes[scope].each do |key, value|
        attributes << '%s="%s"' % [key, value]
      end
    end
    return attributes.reject(&:empty?).join(' ')
  end

  # Print HTML classes for the HTML template
  def printHtmlClasses(scope, full = true)
    if @@htmlClasses.blank?
      return ''
    end

    classes = ''
    if scope.in?(@@htmlClasses)
      classes = @@htmlClasses[scope].reject(&:empty?).join(' ')

      if (full)
        return 'class="%s"' % [classes]
      end

      return classes
    end
  end

  # Get SVG icon content
  def getSvgIcon(path, classNames = 'svg-icon', folder = 'lib/assets/media/icons/')
    svg = File.open(folder + path, "rb") do |file|
      raw file.read
    end
    return ('<span class="%s">%s</span>' % [classNames, svg]).html_safe
  end

  # Get an assets path in assets folder by path
  def asset(path)
    if path.include? '//'
      return path
    end
    return asset_path(path)
  end

  # Set dark mode enabled status
  def setModeSwitch(flag)
    @@modeSwitchEnabled = flag
  end

  # Check dark mode status
  def isModeSwitchEnabled()
    return @@modeSwitchEnabled
  end

  # Set the mode to dark or light
  def setModeDefault(mode)
    @@modeDefault = mode
  end

  # Get current mode
  def getModeDefault()
    return @@modeDefault
  end

  # Set style direction
  def setDirection(direction)
    @@direction = direction
  end

  # Get style direction
  def getDirection()
    return @@direction
  end

  # Check if style direction is RTL
  def isRtlDirection()
    return @@direction.downcase === 'rtl'
  end

  # Extend CSS file name with RTL or dark mode
  def extendCssFilename(path)
    if isRtlDirection()
      path = path.gsub('.css', '.rtl.css')
    end
    return path
  end

  # Include favicon from settings
  def includeFavicon()
    return favicon_link_tag asset_path(Rails.configuration.settings.KT_THEME_ASSETS[:favicon])
  end

  # Include the fonts from settings
  def includeFonts()
    content = ''
    Rails.configuration.settings.KT_THEME_ASSETS[:fonts].each do |url|
      content += stylesheet_link_tag url
    end
    return content
  end

  # Get the global assets
  def getGlobalAssets(type)
    files = []
    Rails.configuration.settings.KT_THEME_ASSETS[type.to_sym].each do |file|
      if type == 'css'
        # Modify css file name suffix based on the RTL or dark mode settings
        files.append(extendCssFilename(file))
      else
        files.append(file)
      end
    end
    return files
  end

  # Add multiple vendors to the page by name. Refer to settings KT_THEME_VENDORS
  def addVendors(vendors)
    vendors.each do |value|
      # Skip duplicate entry
      if !value.in?(@@vendorFiles)
        @@vendorFiles.append(value)
      end
    end
    return @@vendorFiles
  end

  # Add single vendor to the page by name. Refer to settings KT_THEME_VENDORS
  def addVendor(vendor)
    if !vendor.in?(@@vendorFiles)
      @@vendorFiles.append(vendor)
    end
  end

  # Add custom javascript file to the page
  def addJavascriptFile(file)
    if !file.in?(@@javascriptFiles)
      @@javascriptFiles.append(file)
    end
  end

  # Add custom CSS file to the page
  def addCssFile(file)
    if !file.in?(@@cssFiles)
      @@cssFiles.append(file)
    end
  end

  # Get vendor files from settings. Refer to settings KT_THEME_VENDORS
  def getVendors(type)
    files = []
    @@vendorFiles.each do |vendor|
      vendors = Rails.configuration.settings.KT_THEME_VENDORS[vendor.to_sym]
      if type.to_sym.in?(vendors)
        vendors[type.to_sym].each do |path|
          files.append(asset(path))
        end
      end
    end
    return files.uniq
  end

  # Get custom js files from the settings
  def getCustomJs
    return @@javascriptFiles
  end

  # Get custom css files from the settings
  def getCustomCss
    return @@cssFiles
  end

  # Get HTML attribute based on the scope
  def getHtmlAttribute(scope, attribute)
    return @@htmlAttributes[scope][attribute]
  end

  # Get SVG icon content
  def getIcon(name, class_name = '', type_name = '')
    type_name = Rails.configuration.settings[:KT_THEME_ICONS] || 'duotone'

    tag = 'span'

    if type_name == 'duotone'
      icons = Rails.cache.fetch('duotone-icons', expires_in: 1.hour) do
        JSON.parse(File.read(Rails.root.join('app', 'assets', 'config', 'icons.json')))
      end

      paths_number = icons['duotone-paths'][name] || 0

      output = "<#{tag} class='ki-#{type_name} ki-#{name} #{class_name.presence}'>"

      (1..paths_number).each do |i|
        output += "<#{tag} class='path#{i}'></#{tag}>"
      end

      output += "</#{tag}>"
    else
      output = "<#{tag} class='ki-#{type_name} ki-#{name} #{class_name.presence}'></#{tag}>"
    end

    output.html_safe
  end


end
