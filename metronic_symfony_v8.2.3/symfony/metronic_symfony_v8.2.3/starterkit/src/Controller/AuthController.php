<?php

namespace App\Controller;

use App\Controller\Bootstrap\DefaultLayoutController;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends DefaultLayoutController
{
    public function signin(): Response
    {
        $this->theme->addJavascriptFile('js/custom/authentication/sign-in/general.js');

        return $this->render('pages/auth/signin.html.twig');
    }

    public function signup(): Response
    {
        $this->theme->addJavascriptFile('js/custom/authentication/sign-up/general.js');

        return $this->render('pages/auth/signup.html.twig');
    }

    public function reset_password(): Response
    {
        $this->theme->addJavascriptFile('js/custom/authentication/reset-password/reset-password.js');

        return $this->render('pages/auth/reset-password.html.twig');
    }

    public function new_password(): Response
    {
        $this->theme->addJavascriptFile('js/custom/authentication/reset-password/new-password.js');

        return $this->render('pages/auth/new-password.html.twig');
    }
}