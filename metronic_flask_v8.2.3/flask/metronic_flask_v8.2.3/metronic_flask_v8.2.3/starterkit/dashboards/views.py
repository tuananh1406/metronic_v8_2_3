from flask import render_template
from flask.views import View
import _keenthemes.templatetags.theme
from _keenthemes.settings import settings
from _keenthemes.__init__ import KTLayout
from _keenthemes.libs.theme import KTTheme
from pprint import pprint

"""
This file is a view controller for multiple pages as a module.
Here you can override the page view layout.
Refer to urls.py file for more pages.
"""

class DashboardsView(View):
    # Default template file
    # Refer to urls.py file for more pages and template files
    template_name = 'pages/dashboards/index.html'

    def __init__(self, template_name):
        self.template_name = template_name

    # Predefined function
    def dispatch_request(self):
        """
        # Example to get page name. Refer to dashboards/urls.py file.
        url_name = resolve(self.request.path_info).url_name

        if url_name == 'dashboard-2':
            # Example to override settings at the runtime
            settings.KT_THEME_DIRECTION = 'rtl'
        else:
            settings.KT_THEME_DIRECTION = 'ltr'
        """

        # A function to init the global layout. It is defined in _keenthemes/__init__.py file
        context = KTLayout.init({})

        # Include vendors and javascript files for dashboard widgets
        KTTheme.addVendors(['amcharts', 'amcharts-maps', 'amcharts-stock'])

        return render_template(self.template_name, title='Dashboard Page', layout=context['layout'])
