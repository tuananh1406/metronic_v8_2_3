from markupsafe import Markup as mark_safe
from ..libs.theme import KTTheme
from ..settings import settings
from pprint import pprint
from starterkit import app


# Register tags as an adapter for the Theme class usage in the HTML template


def includeFonts():
    return mark_safe(KTTheme.includeFonts())


def includeFavicon():
    return mark_safe(KTTheme.includeFavicon())


def getSvgIcon(path, classNames = 'svg-icon', folder = 'media/icons/'):
    return mark_safe(KTTheme.getSvgIcon(path, classNames, folder))


def printHtmlClasses(scope):
    return mark_safe(KTTheme.printHtmlClasses(scope))


def printHtmlAttributes(scope):
    return mark_safe(KTTheme.printHtmlAttributes(scope))


def getGlobalAssets(type):
    return KTTheme.getGlobalAssets(type)


def getCustomJs():
    return KTTheme.javascriptFiles


def getCustomCss():
    return KTTheme.cssFiles


def getVendors(type):
    return KTTheme.getVendors(type)


def isRtlDirection():
    return KTTheme.isRtlDirection()


def asset(path):
    return KTTheme.asset(path)


def getModeDefault():
    return KTTheme.getModeDefault()


def addHtmlAttribute(scope, name, value):
    KTTheme.addHtmlAttribute(scope, name, value)
    return ''


def addHtmlAttributes(scope, attributes):
    KTTheme.addHtmlAttributes(scope, attributes)
    return ''


def addHtmlClass(scope, value):
    KTTheme.addHtmlClass(scope, value)
    return ''


def getHtmlAttribute(scope, attribute):
    return KTTheme.htmlAttributes[scope][attribute]


def themeDir(path):
    return settings.KT_THEME_LAYOUT_DIR + '/' + path


def getIcon(name, class_name='', type=''):
    return mark_safe(KTTheme.getIcon(name, class_name, type))


@app.context_processor
def utility_processor():
    return dict(
        includeFonts=includeFonts,
        includeFavicon=includeFavicon,
        getSvgIcon=getSvgIcon,
        printHtmlClasses=printHtmlClasses,
        printHtmlAttributes=printHtmlAttributes,
        getGlobalAssets=getGlobalAssets,
        getCustomJs=getCustomJs,
        getCustomCss=getCustomCss,
        getVendors=getVendors,
        isRtlDirection=isRtlDirection,
        asset=asset,
        getModeDefault=getModeDefault,
        addHtmlAttribute=addHtmlAttribute,
        addHtmlAttributes=addHtmlAttributes,
        addHtmlClass=addHtmlClass,
        getHtmlAttribute=getHtmlAttribute,
        themeDir=themeDir,
        getIcon=getIcon,
    )