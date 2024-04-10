// Imports
const themesettings = require("./_keenthemes/lib/themesettings.json");
const dashboardRouter = require("./router/dashboard")
const authRouter = require("./router/auth")
const systemRouter = require("./router/system")
const createKtThemeInstance = require("./_keenthemes/lib/theme")
const createKtBootstrapInstance = require(`./views/layout/${themesettings.name}/bootstrap`)
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

global.themesettings = themesettings;

const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', 'layout/master')
app.set('view engine', 'ejs')

const init = function (req, res, next) {
    global.theme = createKtThemeInstance();
    global.bootstrap = createKtBootstrapInstance();
    next()
}

app.use(init);

app.use('/', dashboardRouter);
app.use('/auth', authRouter);
app.use('/system', systemRouter);

app.all('*', (req, res) => {
    res.status(404).render(theme.getPageViewPath("system", "not-found"), { currentLayout: theme.getLayoutPath("system") });
});

// Listen on Port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))