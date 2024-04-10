const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
   bootstrap.init();
   bootstrap.initAuthLayout()
   next()
 })

router.get('/new-password', (req, res) => {
   theme.addJavascriptFile("js/custom/authentication/reset-password/new-password.js");
   res.render(theme.getPageViewPath("auth", "new-password"), { currentLayout: theme.getLayoutPath("auth") });
});

router.get('/reset-password', (req, res) => {
   theme.addJavascriptFile("js/custom/authentication/reset-password/new-password.js");
   res.render(theme.getPageViewPath("auth", "reset-password"), { currentLayout: theme.getLayoutPath("auth") });
});

router.get('/sign-in', (req, res) => {
   theme.addJavascriptFile("js/custom/authentication/sign-in/general.js");
   res.render(theme.getPageViewPath("auth", "sign-in"), { currentLayout: theme.getLayoutPath("auth") });
});

router.get('/sign-up', (req, res) => {
   theme.addJavascriptFile("js/custom/authentication/sign-up/general.js");
   res.render(theme.getPageViewPath("auth", "sign-up"), { currentLayout: theme.getLayoutPath("auth") });
});

module.exports = router;